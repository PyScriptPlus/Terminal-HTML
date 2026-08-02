# Linux Terminal Web
## C++ Backend · WebSocket · Full Linux-style Terminal in Browser

> **A real terminal experience right in your web browser – powered by a blazing‑fast C++ server and persistent WebSocket connection.**

---

## Key Features

| Feature | Description |
|---------|-------------|
| **Linux Look** | Authentic Fedora‑style prompt, colors, and layout |
| **WebSocket** | Persistent, full‑duplex, low‑latency communication |
| **C++ Core** | High‑performance command processing with direct system calls (`popen`) |
| **Built‑in Commands** | `help`, `about`, `skills`, `github`, `whoami`, `welcome`, `c/cpp`, `asm`, `csharp`, `neofetch`, `ls`, `echo`, `pwd`, `date`, `download` |
| **HTML Output** | Clickable links (GitHub, etc.) inside the terminal |
| **Command History** | Arrow‑up/down navigation with local storage |
| **Modular Code** | Separate `.cc` files for easy maintenance and extension |

---

## Preview
<img width="2049" height="1152" alt="Image" src="https://github.com/user-attachments/assets/83ea868d-9d75-44ea-b27f-a0b47cb4e848"/>

<img width="2049" height="1152" alt="Image" src="https://github.com/user-attachments/assets/314223ae-b740-41c9-87d7-4a360feff589" />

<img width="2049" height="1152" alt="Image" src="https://github.com/user-attachments/assets/1a385085-0195-404f-91c8-60124666f776" />

---

## Quick Start

### Prerequisites

- **Linux** (Ubuntu/Debian, Fedora, or Arch) – required for system commands
- **C++17** compiler
- **Boost** and **websocketpp** libraries

**Ubuntu/Debian:**
```bash
sudo apt install build-essential libboost-all-dev libwebsocketpp-dev
```

**Fedora:**
```bash
sudo dnf install gcc-c++ boost-devel websocketpp-devel
```

### Build & Run

```bash
git clone https://github.com/PyScriptPlus/linux-terminal-web
cd linux-terminal-web
make
```

Server output:
```
WebSocket server started on port 3000
```

Now open `index.html` in your browser – the terminal connects automatically to `ws://localhost:3000`.

> **No extra flags or manual compilation – just `make` and run.**

---

## Command Reference

| Command | Description |
|---------|-------------|
| `help` | Show all available commands |
| `about` | Biography and programming path |
| `skills` | Detailed language expertise |
| `github` | Show GitHub profile (clickable link) |
| `whoami` | Display identity |
| `welcome` | Re‑print the welcome banner |
| `clear` | Clear terminal screen (local) |
| `history` | Show command history (local) |
| `c` / `cpp` / `c++` | C/C++ philosophy & experience |
| `asm` / `assembly` | Assembly low‑level zone |
| `csharp` / `c#` | C# & .NET interop |
| `neofetch` | System info (real or fallback) |
| `ls` | List files (real system `ls`) |
| `pwd` | Print working directory |
| `date` | Current date/time |
| `download` | Coming soon |

---

## Architecture

```
Browser (HTML+CSS+JS)
        ↕ WebSocket (ws://)
C++ Server (WebSocket++ / Boost)
        ↕ system calls (popen)
Linux System (commands, neofetch, ls, etc.)
```

- **Front‑end:** `index.html`, `app.js`, `style.css` – UI and WebSocket client
- **Back‑end:** `main.cc`, `CommandManager.cc`, `Field.cc` – command processing and system execution

---

## Future Roadmap

| Feature | Description |
|---------|-------------|
| **AI Assistant** | Integrated AI agent that answers questions, suggests commands, or generates code inside the terminal |
| **Native Desktop App** | Standalone Linux application (packaged for Debian, Fedora, Arch) – no browser needed, install like any native tool |

---

## Contributing

Contributions, bug reports, and feature requests are welcome.  
Feel free to open an issue or submit a pull request.

---

## License

**MIT License** – see the [LICENSE](LICENSE) file.

---

## Credits

Built with [WebSocket++](https://github.com/zaphoyd/websocketpp) and [Boost](https://www.boost.org/).  
Inspired by the beauty and power of Linux terminals.

---

**Made with ❤️ by Mohammad Yousefi** – *Low‑level systems programmer.*

---

# فارسی

## ترمینال لینوکس تحت وب
### هسته C++ · ارتباط WebSocket · تجربه ترمینال واقعی در مرورگر

> **یک ترمینال واقعی در مرورگر – با هسته فوق‌سریع C++ و اتصال WebSocket پایدار.**

---

## ویژگی‌های کلیدی

| ویژگی | توضیح |
|-------|-------|
| **ظاهر لینوکس** | پرامپت، رنگ‌ها و چیدمان شبیه به ترمینال فدورا |
| **WebSocket** | ارتباط پایدار، دوطرفه و با تأخیر کم |
| **هسته C++** | پردازش سریع دستورات با فراخوانی مستقیم سیستم (`popen`) |
| **دستورات توکار** | `help`، `about`، `skills`، `github`، `whoami`، `welcome`، `c/cpp`، `asm`، `csharp`، `neofetch`، `ls`، `echo`، `pwd`، `date`، `download` |
| **خروجی HTML** | لینک‌های کلیک‌پذیر (گیت‌هاب و...) داخل ترمینال |
| **تاریخچه دستورات** | حرکت با کلیدهای بالا/پایین؛ ذخیره محلی |
| **کد ماژولار** | فایل‌های مجزا برای نگهداری و توسعه آسان |

---

## پیش‌نمایش
<img width="2049" height="1152" alt="Image" src="https://github.com/user-attachments/assets/83ea868d-9d75-44ea-b27f-a0b47cb4e848" />

<img width="2049" height="1152" alt="Image" src="https://github.com/user-attachments/assets/314223ae-b740-41c9-87d7-4a360feff589" />

<img width="2049" height="1152" alt="Image" src="https://github.com/user-attachments/assets/1a385085-0195-404f-91c8-60124666f776" />

---

## شروع سریع

### پیش‌نیازها

- **لینوکس** (اوبونتو، دبیان، فدورا یا آرچ) – برای دستورات سیستمی
- کامپایلر **C++17**
- کتابخانه‌های **Boost** و **websocketpp**

**اوبونتو/دبیان:**
```bash
sudo apt install build-essential libboost-all-dev libwebsocketpp-dev
```

**فدورا:**
```bash
sudo dnf install gcc-c++ boost-devel websocketpp-devel
```

### ساخت و اجرا

```bash
git clone https://github.com/PyScriptPlus/linux-terminal-web
cd linux-terminal-web
make
```

خروجی سرور:
```
WebSocket server started on port 3000
```

حالا `index.html` را در مرورگر باز کنید – ترمینال به‌طور خودکار به `ws://localhost:3000` متصل می‌شود.

> **بدون نیاز به پرچم اضافی یا کامپایل دستی – فقط `make` و اجرا.**

---

## راهنمای دستورات

| دستور | توضیح |
|-------|-------|
| `help` | نمایش همه دستورات |
| `about` | بیوگرافی و مسیر برنامه‌نویسی |
| `skills` | مهارت‌های تخصصی به‌تفصیل |
| `github` | نمایش پروفایل گیت‌هاب (لینک کلیک‌پذیر) |
| `whoami` | نمایش هویت |
| `welcome` | نمایش مجدد پیام خوش‌آمدگویی |
| `clear` | پاک کردن صفحه (محلی) |
| `history` | نمایش تاریخچه دستورات (محلی) |
| `c` / `cpp` / `c++` | فلسفه و تجربه C/C++ |
| `asm` / `assembly` | حوزه سطح‑پایین اسمبلی |
| `csharp` / `c#` | تعامل C# و .NET |
| `neofetch` | اطلاعات سیستم (واقعی یا شبیه‌سازی) |
| `ls` | لیست فایل‌ها (`ls` واقعی سیستم) |
| `pwd` | نمایش مسیر جاری |
| `date` | تاریخ و زمان جاری |
| `download` | به‌زودی |

---

## معماری

```
مرورگر (HTML+CSS+JS)
        ↕ WebSocket (ws://)
سرور C++ (WebSocket++ / Boost)
        ↕ فراخوانی سیستم (popen)
سیستم لینوکس (دستورات، neofetch، ls و...)
```

- **سمت کلاینت:** `index.html`، `app.js`، `style.css` – رابط کاربری و WebSocket
- **سمت سرور:** `main.cc`، `CommandManager.cc`، `Field.cc` – پردازش دستورات و اجرای سیستم

---

## برنامه‌های آینده

| ویژگی | توضیح |
|-------|-------|
| **دستیار هوش مصنوعی** | یک عامل هوشمند که به سوالات پاسخ می‌دهد، دستورات پیشنهاد می‌کند یا کد تولید می‌کند |
| **اپلیکیشن دسکتاپ** | برنامه مستقل لینوکس (بسته برای دبیان، فدورا، آرچ) – بدون مرورگر، نصب مثل هر ابزار سیستمی |

---

## مشارکت

همیشه از مشارکت، ایده‌ها و گزارش باگ استقبال می‌شود.  
با خیال راحت issue باز کنید یا pull request بفرستید.

---

## مجوز

**مجوز MIT** – فایل [LICENSE](LICENSE) را ببینید.

---

## قدردانی

ساخته‌شده با [WebSocket++](https://github.com/zaphoyd/websocketpp) و [Boost](https://www.boost.org/).  
الهام‌گرفته از زیبایی و قدرت ترمینال‌های لینوکس.

---

**ساخته‌شده با ❤️ توسط محمد یوسفی** – *برنامه‌نویس سطح‑پایین سیستم‌ها.*
