const outputDiv = document.getElementById("termOutput");
const inputField = document.getElementById("termInput");

let commandHistory = [];
let historyIndex = -1;
let currentInputBackup = "";
let ws = null;
let isWebSocketConnected = false;

function scrollToBottom() {
    const outputContainer = document.querySelector(".terminal-output");
    if (outputContainer) outputContainer.scrollTop = outputContainer.scrollHeight;
}

function addOutputLine(text, isHtml = false) {
    const lineDiv = document.createElement("div");
    lineDiv.className = "output-line";
    if (isHtml) {
        lineDiv.innerHTML = text;
    } else {
        lineDiv.textContent = text;
    }
    outputDiv.appendChild(lineDiv);
    scrollToBottom();
}

function addCommandLine(userCommand) {
    const cmdDiv = document.createElement("div");
    cmdDiv.className = "output-line prompt-line";
    cmdDiv.innerHTML = `<span style="color:#9fcc8a;">┌─[mohammad@fedora]──[~]</span><br><span style="color:#c2f0a0;">└─╼$</span> <span class="command-cmd">${escapeHtml(userCommand)}</span>`;
    outputDiv.appendChild(cmdDiv);
    scrollToBottom();
}

function escapeHtml(str) {
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

function clearTerminal() {
    outputDiv.innerHTML = '';
}

function connectWebSocket() {
    ws = new WebSocket("ws://localhost:3000");
    ws.onopen = function() {
        console.log("Connected to C++ server");
        isWebSocketConnected = true;
    };
    ws.onmessage = function(event) {
        let response = event.data;
        let isHtml = false;
        if (response.startsWith("[HTML]")) {
            isHtml = true;
            response = response.substring(6);
        }
        addOutputLine(response, isHtml);
    };
    ws.onerror = function(error) {
        console.error("WebSocket error:", error);
        addOutputLine("Error communicating with the server!", false);
    };
    ws.onclose = function() {
        console.log("Disconnected from server");
        isWebSocketConnected = false;
        addOutputLine("Connection to the server was lost!", false);
    };
}

function processCommand(cmdRaw) {
    const cmd = cmdRaw.trim();
    if (cmd === "") return;

    if (commandHistory.length === 0 || commandHistory[commandHistory.length-1] !== cmd) {
        commandHistory.push(cmd);
        if (commandHistory.length > 50) commandHistory.shift();
    }
    historyIndex = commandHistory.length;

    addCommandLine(cmd);

    const lowerCmd = cmd.toLowerCase();

    if (lowerCmd === "clear") {
        clearTerminal();
        return;
    }
    if (lowerCmd === "history") {
        if (commandHistory.length === 0) {
            addOutputLine("(no commands in history yet)", false);
        } else {
            addOutputLine("─── command history ───", false);
            commandHistory.forEach((entry, idx) => {
                addOutputLine(`  ${idx+1}   ${entry}`, false);
            });
            addOutputLine("──────────────────────", false);
        }
        return;
    }

    if (isWebSocketConnected && ws && ws.readyState === WebSocket.OPEN) {
        ws.send(cmd);
    } else {
        addOutputLine("The server is unavailable! Please refresh the page.", false);
    }
}

function setupTerminalHistory() {
    inputField.addEventListener("keydown", (e) => {
        if (e.key === "ArrowUp") {
            e.preventDefault();
            if (commandHistory.length === 0) return;
            if (historyIndex === commandHistory.length) {
                currentInputBackup = inputField.value;
            }
            if (historyIndex > 0) {
                historyIndex--;
                inputField.value = commandHistory[historyIndex];
            } else if (historyIndex === 0) {
                inputField.value = commandHistory[0];
            }
            inputField.setSelectionRange(inputField.value.length, inputField.value.length);
        }
        else if (e.key === "ArrowDown") {
            e.preventDefault();
            if (commandHistory.length === 0) return;
            if (historyIndex < commandHistory.length - 1) {
                historyIndex++;
                inputField.value = commandHistory[historyIndex];
            } else if (historyIndex === commandHistory.length - 1) {
                historyIndex = commandHistory.length;
                inputField.value = currentInputBackup;
            }
            inputField.setSelectionRange(inputField.value.length, inputField.value.length);
        }
    });
}

function onCommandSubmit(e) {
    if (e.key === "Enter") {
        e.preventDefault();
        const rawCommand = inputField.value;
        if (rawCommand.trim() !== "") {
            processCommand(rawCommand);
        }
        inputField.value = "";
        historyIndex = commandHistory.length;
        currentInputBackup = "";
        inputField.focus();
    }
}

function initTerminal() {
    connectWebSocket();
    inputField.addEventListener("keypress", onCommandSubmit);
    setupTerminalHistory();
    inputField.focus();
    addOutputLine("", false);
    addOutputLine("   Connecting to server...", false);
    scrollToBottom();
}

initTerminal();