const GITHUB_URL = "https://github.com/PyScriptPlus";
const FULL_NAME = "Mohammad Yousefi (محمد یوسفی)";
const SKILLS_TEXT = "C, C++, C#, Assembly (x86/ARM), low-level optimization, embedded systems, reverse engineering basics.";

const outputDiv = document.getElementById("termOutput");
const inputField = document.getElementById("termInput");

let commandHistory = [];
let historyIndex = -1;
let currentInputBackup = "";

const PROMPT_PREFIX = "┌─[mohammad@fedora]──[~]\n└─╼$ ";

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
    }).replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, function(c) {
        return c;
    });
}

function clearTerminal() {
    outputDiv.innerHTML = '';
}

function showWelcomeMessage() {
    addOutputLine("┌────────────────────────────────────────────────────────────┐", false);
    addOutputLine("│                 ///    C++ LOW-LEVEL ZONE    ///           │", false);
    addOutputLine("│        ___   ___   ___   ___   ___   ___   ___   ___       │", false);
    addOutputLine("│       |C++| |ASM| |C|  |C#| |GCC| |LLVM| |GDB| |NASM|      │", false);
    addOutputLine("│        ‾‾‾   ‾‾‾   ‾‾‾   ‾‾‾   ‾‾‾   ‾‾‾   ‾‾‾   ‾‾‾       │", false);
    addOutputLine("│                   Mohammad Yousefi · Systems               │", false);
    addOutputLine("└────────────────────────────────────────────────────────────┘", false);
    addOutputLine("", false);
    addOutputLine(` WELCOME, ${FULL_NAME} `, false);
    addOutputLine("", false);
    addOutputLine(`  Role      :  Systems & Low-level Programmer`, false);
    addOutputLine(`  Languages :  ${SKILLS_TEXT}`, false);
    addOutputLine(`  Passion   :  Compilers, Embedded Linux, Assembly wizardry & native code`, false);
    addOutputLine("", false);
    // GitHub link as clickable HTML (Linux style)
    const githubHtml = `  GitHub     :  <a href="${GITHUB_URL}" target="_blank" rel="noopener noreferrer">${GITHUB_URL}</a>  (repos with C/C++/C#/Asm)`;
    addOutputLine(githubHtml, true);
    addOutputLine("", false);
    addOutputLine("  Tip:  use 'help' to list all commands. Enjoy the terminal vibe!", false);
    addOutputLine("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━", false);
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
    
    // ---- HELP ----
    if (lowerCmd === "help") {
        addOutputLine("  ╭─────────────────────────────────────────────────╮", false);
        addOutputLine("  │  AVAILABLE COMMANDS                             │", false);
        addOutputLine("  ├─────────────────────────────────────────────────┤", false);
        addOutputLine("  │  about     →  biography & programming path      │", false);
        addOutputLine("  │  skills    →  detailed language expertise       │", false);
        addOutputLine("  │  github    →  show my GitHub profile link       │", false);
        addOutputLine("  │  whoami    →  display my identity               │", false);
        addOutputLine("  │  welcome   →  print the welcome banner again    │", false);
        addOutputLine("  │  clear     →  clear terminal screen             │", false);
        addOutputLine("  │  history   →  show command history              │", false);
        addOutputLine("  │  c / cpp   →  C/C++ philosophy & experience     │", false);
        addOutputLine("  │  asm       →  assembly (low-level) zone         │", false);
        addOutputLine("  │  csharp    →  C# & .NET interop / native bridge │", false);
        addOutputLine("  │  neofetch  →  simple dev fetch style            │", false);
        addOutputLine("  │  help      →  this message                      │", false);
        addOutputLine("  │  download  →  Soon                              │", false);
        addOutputLine("  ╰─────────────────────────────────────────────────╯", false);
        return;
    }
    
    // ---- ABOUT ----
    if (lowerCmd === "about") {
        addOutputLine("    [ BIO ]", false);
        addOutputLine(`    • ${FULL_NAME} — passionate low-level software architect.`, false);
        addOutputLine(`    • Deep experience in systems programming, firmware, and performance.`, false);
        addOutputLine(`    • Daily tools: C, C++, C#, Assembly, Make, GDB, Valgrind, NASM.`, false);
        addOutputLine(`    • Love crafting efficient code from kernel to userland.`, false);
        addOutputLine(`    • Contributor to open-source projects & embedded solutions.`, false);
        return;
    }
    
    // ---- SKILLS (detailed) ----
    if (lowerCmd === "skills") {
        addOutputLine("    [ SKILL MATRIX ]", false);
        addOutputLine("    ▶  C (C11/C17)        : memory management, pointers, embedded", false);
        addOutputLine("    ▶  C++ (14/17/20)     : RAII, templates, STL, modern patterns", false);
        addOutputLine("    ▶  C# (.NET)          : interop, unsafe code, high-performance APIs", false);
        addOutputLine("    ▶  Assembly (x86/ARM) : reverse engineering, bootloaders, optimization", false);
        addOutputLine("    ▶  Scripting & tools  : Bash, Python, GDB scripting, perf", false);
        addOutputLine("    ▶  Version control    : Git / GitHub (CI, actions)", false);
        return;
    }
    
    // ---- GITHUB (interactive HTML link) ----
    if (lowerCmd === "github") {
        const gitMsg = `  My GitHub repository hub: <a href="${GITHUB_URL}" target="_blank" rel="noopener noreferrer" style="color:#78ff78;">${GITHUB_URL}</a>  (C/C++/Asm projects, snippets, cool low-level stuff)`;
        addOutputLine(gitMsg, true);
        return;
    }
    
    // ---- WHOAMI (full name + persian) ----
    if (lowerCmd === "whoami") {
        addOutputLine(`    ${FULL_NAME}`, false);
        addOutputLine(`    • "Code is poetry, assembly is raw power."`, false);
        addOutputLine(`    • Specialized in C family & assembly · performance geek`, false);
        return;
    }
    
    // ---- WELCOME (reprint banner without duplicate huge ASCII maybe simple) ----
    if (lowerCmd === "welcome") {
        addOutputLine("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━", false);
        addOutputLine(`    RE-WELCOME, ${FULL_NAME}`, false);
        addOutputLine(`    Languages  →  ${SKILLS_TEXT}`, false);
        const ghSimple = `    GitHub     →  <a href="${GITHUB_URL}" target="_blank">${GITHUB_URL}</a>`;
        addOutputLine(ghSimple, true);
        addOutputLine("    Status     :  Ready for low-level challenges", false);
        addOutputLine("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━", false);
        return;
    }
    
    // ---- CLEAR ----
    if (lowerCmd === "clear") {
        clearTerminal();
        return;
    }
    
    // ---- HISTORY ----
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
    
    // ---- C / CPP specific flavor ----
    if (lowerCmd === "c" || lowerCmd === "cpp" || lowerCmd === "c++") {
        addOutputLine("    C / C++ ZONE", false);
        addOutputLine("    • 4+ years of combined systems programming", false);
        addOutputLine("    • Expert in: pointers, virtual memory, compiler intrinsics, STL internals", false);
        addOutputLine("    • Notable: custom memory allocators, lock-free data structures", false);
        addOutputLine("    • Low latency & embedded real-time C++", false);
        return;
    }
    
    // ---- ASSEMBLY specific ----
    if (lowerCmd === "asm" || lowerCmd === "assembly") {
        addOutputLine("    ASSEMBLY (x86_64, ARMv7, AArch64)", false);
        addOutputLine("    • Hand-optimized routines, shellcode analysis, SMM/BIOS experiments", false);
        addOutputLine("    • Extensive use of SIMD (MMX/SSE/AVX) for numeric kernels", false);
        addOutputLine("    • Reverse engineering & debugging with GDB/radare2", false);
        addOutputLine("    • Favorite quote: 'C is portable assembly.'", false);
        return;
    }
    
    // ---- CSHARP interesting context ----
    if (lowerCmd === "csharp" || lowerCmd === "c#") {
        addOutputLine("    C# & .NET Ecosystem", false);
        addOutputLine("    • Writing high-performance C# with Span<T>, unsafe, memory-mapped files", false);
        addOutputLine("    • Native interop: P/Invoke, C++/CLI bridges, COM, low-level Win32", false);
        addOutputLine("    • Used for tooling, game modding, and performance-critical backends", false);
        return;
    }


//     if (lowerCmd === "neofetch") {
//     addOutputLine("       .--.       mohammad@fedora-machine", false);
//     addOutputLine("      |o_o |      OS: Fedora Linux 40 (Workstation)", false);
//     addOutputLine("      |:_/ |      Shell: zsh / bash 5.2", false);
//     addOutputLine("     //   \\ \\   Languages: C, C++, C#, Assembly", false);
//     addOutputLine("    (|     | )    Experience: low-level dev & kernel", false);
//     addOutputLine("    /'\\_   _/`\\ Uptime: infinite (passion)", false);
//     addOutputLine("    \\___)=(___/  GitHub: " + GITHUB_URL.replace("https://github.com/", ""), false);
//     addOutputLine("                  Terminal: this awesome Linux-like site", false);
//     return;
// }
    if (lowerCmd === "neofetch") {
    addOutputLine("       .--.       mohammad@fedora-machine", false);
    addOutputLine("      |o_o |      OS: Fedora Linux 40 (Workstation)", false);
    addOutputLine("      |:_/ |      Shell: zsh / bash 5.2", false);
    addOutputLine("     //   \\ \\     Languages: C, C++, C#, Assembly", false);
    addOutputLine("    (|     | )    Experience: low-level dev & kernel", false);
    addOutputLine("    /'\\_   _/`\\   Uptime: infinite (passion)", false);
    addOutputLine("    \\___)=(___/   GitHub: " + GITHUB_URL.replace("https://github.com/", ""), false);
    addOutputLine("                  Terminal: this awesome Linux-like site", false);
    return;
}
    
    // // ---- NEOFETCH style (simple dev info) ----
    // if (lowerCmd === "neofetch") {
    //     addOutputLine("        .-.-.   mohammad@fedora-machine", false);
    //     addOutputLine("       |'---'|  OS: Linux mindset (arch + fedora heritage)", false);
    //     addOutputLine("       |_____|  Shell: zsh / bash 5.2", false);
    //     addOutputLine("      .'     '.  Experience: low-level dev & kernel tinkering", false);
    //     addOutputLine("     /  /   \\  \\ Languages: C, C++, C#, Assembly", false);
    //     addOutputLine("    |  |     |  | Uptime: infinite (passion)", false);
    //     addOutputLine("     \\  \\___/  /  GitHub: " + GITHUB_URL.replace("https://github.com/", ""), false);
    //     addOutputLine("      '._   _.'   Terminal: this awesome Linux-like site", false);
    //     addOutputLine("         '-'", false);
    //     return;
    // }
    
    // ---- Extra: ls / echo for fun (optional unix feel) ----
    if (lowerCmd === "ls") {
        addOutputLine("Desktop/   Documents/   Projects/   LowLevel_Asm/   C_Playground/   dotfiles/", false);
        addOutputLine("README.md  kernel_module.c  reverse_eng/  Makefile  .bashrc  github_repos.list", false);
        return;
    }
    if (lowerCmd.startsWith("echo ")) {
        let echoMsg = cmd.substring(5);
        addOutputLine(echoMsg, false);
        return;
    }
    
    if (lowerCmd === "pwd") {
        addOutputLine("/home/mohammad/", false);
        return;
    }
    
    if(lowerCmd == "download")
    {
        addOutputLine("Coming soon!!!");
        return;
    }

    if (lowerCmd === "date") {
        const now = new Date();
        addOutputLine(now.toString(), false);
        return;
    }
    
    addOutputLine(`bash: ${cmd}: command not found. Try 'help' to see available commands.`, false);
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

// send command on Enter
function onCommandSubmit(e) {
    if (e.key === "Enter") {
        e.preventDefault();
        const rawCommand = inputField.value;
        if (rawCommand.trim() !== "") {
            processCommand(rawCommand);
        }
        inputField.value = "";
        // reset history navigation index
        historyIndex = commandHistory.length;
        currentInputBackup = "";
        // focus remains
        inputField.focus();
    }
}

function initTerminal() {
    showWelcomeMessage();        // display bio + github + name + skills as required
    inputField.addEventListener("keypress", onCommandSubmit);
    setupTerminalHistory();
    inputField.focus();
    // optional: add a small initial pointer
    addOutputLine("", false);
    addOutputLine("   Terminal ready. Type 'help' to explore commands.", false);
    scrollToBottom();
}

initTerminal();