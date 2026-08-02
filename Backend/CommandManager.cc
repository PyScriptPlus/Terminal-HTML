#include "CommandManager.hh"

std::string exec_command(const std::string& cmd) {
    std::array<char, 128> buffer;
    std::string result;
    std::unique_ptr<FILE, decltype(&pclose)> pipe(popen(cmd.c_str(), "r"), pclose);
    if (!pipe) return "Error executing command";
    while (fgets(buffer.data(), buffer.size(), pipe.get()) != nullptr) {
        result += buffer.data();
    }
    return result;
}

std::string get_welcome_message() {
    std::ostringstream oss;
    oss << "[HTML]<pre style=\"margin:0; font-family: inherit; white-space: pre-wrap; line-height: 1.4;\">";
    oss << "┌────────────────────────────────────────────────────────────┐\n";
    oss << "│                 ///    C++ LOW-LEVEL ZONE    ///           │\n";
    oss << "│        ___   ___   ___   ___   ___   ___   ___   ___       │\n";
    oss << "│       |C++| |ASM| |C|  |C#| |GCC| |LLVM| |GDB| |NASM|      │\n";
    oss << "│        ‾‾‾   ‾‾‾   ‾‾‾   ‾‾‾   ‾‾‾   ‾‾‾   ‾‾‾   ‾‾‾       │\n";
    oss << "│                   Mohammad Yousefi · Systems               │\n";
    oss << "└────────────────────────────────────────────────────────────┘\n";
    oss << "\n";
    oss << " WELCOME, " << FULL_NAME << " \n";
    oss << "\n";
    oss << "  Role      :  Systems & Low-level Programmer\n";
    oss << "  Languages :  " << SKILLS_TEXT << "\n";
    oss << "  Passion   :  Compilers, Embedded Linux, Assembly wizardry & native code\n";
    oss << "  GitHub    :  <a href=\"" << GITHUB_URL << "\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color:#78ff78;\">" << GITHUB_URL << "</a>  (repos with C/C++/C#/Asm)\n";
    oss << "\n";
    oss << "  Tip:  use 'help' to list all commands. Enjoy the terminal vibe!\n";
    oss << "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━";
    oss << "</pre>";
    return oss.str();
}


std::string handle_command(const std::string& cmd) {
    std::string lower = cmd;
    std::transform(lower.begin(), lower.end(), lower.begin(), ::tolower);

    if (lower == "clear" || lower == "history") {
        return "[HTML]<span style='color:yellow;'>This command is managed on the client side.</span>";
    }

    if (lower == "help") {
        std::ostringstream oss;
        oss << "  ╭─────────────────────────────────────────────────╮\n";
        oss << "  │  AVAILABLE COMMANDS                             │\n";
        oss << "  ├─────────────────────────────────────────────────┤\n";
        oss << "  │  about     →  biography & programming path      │\n";
        oss << "  │  skills    →  detailed language expertise       │\n";
        oss << "  │  github    →  show my GitHub profile link       │\n";
        oss << "  │  whoami    →  display my identity               │\n";
        oss << "  │  welcome   →  print the welcome banner again    │\n";
        oss << "  │  clear     →  clear terminal screen (local)     │\n";
        oss << "  │  history   →  show command history (local)      │\n";
        oss << "  │  c / cpp   →  C/C++ philosophy & experience     │\n";
        oss << "  │  asm       →  assembly (low-level) zone         │\n";
        oss << "  │  csharp    →  C# & .NET interop / native bridge │\n";
        oss << "  │  neofetch  →  simple dev fetch style            │\n";
        oss << "  │  help      →  this message                      │\n";
        oss << "  │  download  →  Soon                              │\n";
        oss << "  ╰─────────────────────────────────────────────────╯";
        return oss.str();
    }

    if (lower == "about") {
        std::ostringstream oss;
        oss << "    [ BIO ]\n";
        oss << "    • " << FULL_NAME << " — passionate low-level software architect.\n";
        oss << "    • Deep experience in systems programming, firmware, and performance.\n";
        oss << "    • Daily tools: C, C++, C#, Assembly, Make, GDB, Valgrind, NASM.\n";
        oss << "    • Love crafting efficient code from kernel to userland.\n";
        oss << "    • Contributor to open-source projects & embedded solutions.";
        return oss.str();
    }

    if (lower == "skills") {
        std::ostringstream oss;
        oss << "    [ SKILL MATRIX ]\n";
        oss << "    ▶  C (C11/C17)        : memory management, pointers, embedded\n";
        oss << "    ▶  C++ (14/17/20)     : RAII, templates, STL, modern patterns\n";
        oss << "    ▶  C# (.NET)          : interop, unsafe code, high-performance APIs\n";
        oss << "    ▶  Assembly (x86/ARM) : reverse engineering, bootloaders, optimization\n";
        oss << "    ▶  Scripting & tools  : Bash, Python, GDB scripting, perf\n";
        oss << "    ▶  Version control    : Git / GitHub (CI, actions)";
        return oss.str();
    }

    if (lower == "github") {
        std::string msg = "  My GitHub repository hub: <a href=\"" + GITHUB_URL + "\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color:#78ff78;\">" + GITHUB_URL + "</a>  (C/C++/Asm projects, snippets, cool low-level stuff)";
        return "[HTML]" + msg;
    }

    if (lower == "whoami") {
        std::ostringstream oss;
        oss << "    " << FULL_NAME << "\n";
        oss << "    • \"Code is poetry, assembly is raw power.\"\n";
        oss << "    • Specialized in C family & assembly · performance geek";
        return oss.str();
    }

    if (lower == "welcome") {
        std::ostringstream oss;
        oss << "[HTML]<pre style=\"margin:0; font-family: inherit; white-space: pre-wrap; line-height: 1.4;\">";
        oss << "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
        oss << "    RE-WELCOME, " << FULL_NAME << "\n";
        oss << "    Languages  →  " << SKILLS_TEXT << "\n";
        oss << "    GitHub     →  <a href=\"" << GITHUB_URL << "\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color:#78ff78;\">" << GITHUB_URL << "</a> \n";
        oss << "    Status     :  Ready for low-level challenges\n";
        oss << "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━";
        oss << "</pre>";
        return oss.str();
    }

    if (lower == "c" || lower == "cpp" || lower == "c++") {
        std::ostringstream oss;
        oss << "    C / C++ ZONE\n";
        oss << "    • 4+ years of combined systems programming\n";
        oss << "    • Expert in: pointers, virtual memory, compiler intrinsics, STL internals\n";
        oss << "    • Notable: custom memory allocators, lock-free data structures\n";
        oss << "    • Low latency & embedded real-time C++";
        return oss.str();
    }

    if (lower == "asm" || lower == "assembly") {
        std::ostringstream oss;
        oss << "    ASSEMBLY (x86_64, ARMv7, AArch64)\n";
        oss << "    • Hand-optimized routines, shellcode analysis, SMM/BIOS experiments\n";
        oss << "    • Extensive use of SIMD (MMX/SSE/AVX) for numeric kernels\n";
        oss << "    • Reverse engineering & debugging with GDB/radare2\n";
        oss << "    • Favorite quote: 'C is portable assembly.'";
        return oss.str();
    }

    if (lower == "csharp" || lower == "c#") {
        std::ostringstream oss;
        oss << "    C# & .NET Ecosystem\n";
        oss << "    • Writing high-performance C# with Span<T>, unsafe, memory-mapped files\n";
        oss << "    • Native interop: P/Invoke, C++/CLI bridges, COM, low-level Win32\n";
        oss << "    • Used for tooling, game modding, and performance-critical backends";
        return oss.str();
    }

    if (lower == "neofetch") {
        std::string output = exec_command("neofetch");
        if (output.empty()) {
            output = "       .--.       mohammad@fedora-machine\n";
            output += "      |o_o |      OS: Fedora Linux 40 (Workstation)\n";
            output += "      |:_/ |      Shell: zsh / bash 5.2\n";
            output += "     //   \\ \\     Languages: C, C++, C#, Assembly\n";
            output += "    (|     | )    Experience: low-level dev & kernel\n";
            output += "    /'\\_   _/`\\   Uptime: infinite (passion)\n";
            output += "    \\___)=(___/   GitHub: " + GITHUB_URL.substr(19) + "\n";
            output += "                  Terminal: this awesome Linux-like site";
        }
        return output;
    }

    if (lower == "ls") {
        std::string output = exec_command("ls -la");
        if (output.empty()) output = "Desktop/   Documents/   Projects/   LowLevel_Asm/   C_Playground/   dotfiles/";
        return output;
    }

    if (lower == "pwd") {
        std::string output = exec_command("pwd");
        if (output.empty()) output = "/home/mohammad/";
        return output;
    }

    if (lower == "date") {
        std::string output = exec_command("date");
        if (output.empty()) {
            auto t = std::time(nullptr);
            auto tm = *std::localtime(&t);
            std::ostringstream oss;
            oss << std::put_time(&tm, "%c");
            output = oss.str();
        }
        return output;
    }

    if (lower == "download") {
        return "Coming soon!!!";
    }

    if (lower.substr(0, 5) == "echo ") {
        return cmd.substr(5);
    }
    return "bash: " + cmd + ": command not found. Try 'help' to see available commands.";
}