# CalculatorApp

A simple calculator available in **two versions**:
- **ASP.NET Core MVC** – to practice and showcase the fundamentals of the Model–View–Controller (MVC) pattern
- **Electron Desktop App** – a cross-platform desktop widget built with Node.js + Electron

---

## 🚀 Features

### Core Functionality
- Perform basic arithmetic operations: addition, subtraction, multiplication, and division
- Equals (=) button to display the result
- Clear (C) button to reset input and result
- Display shows current operation and calculation history

### User Experience
- **Full keyboard support** with visual feedback:
  - Numbers (0-9)
  - Operators (+, -, *, /)
  - Enter or = for equals
  - Escape or Delete for clear
  - Backspace to delete last digit
  - Decimal point (. or ,)
- **Mouse interaction** with button press animations
- **Sound effects** for button presses (can be muted)
- Max 12-digit display to prevent overflow
- Division by zero error handling

### Desktop-Specific Features (Electron)
- Draggable window
- Custom window controls (minimize, maximize, close)
- Mute/unmute button for sound effects
- Retro-styled calculator design with digital display

---

## 🛠 Tech Stack

### Web (MVC version)
- C# / .NET 8
- ASP.NET Core MVC
- Razor Views
- Visual Studio 2022

### Desktop (Electron version)
- Node.js
- Electron
- JavaScript / HTML / CSS
- Custom fonts (Digital-7 for display)
- Visual Studio Code

---

## 📖 Lessons Learned

### Separation of Concerns with MVC
- **Model** – defines calculator data (operands, selected operation, result)
- **Controller** – handles logic and calculations
- **View** – manages the user interface

### Cross-Platform Development
- Code reuse between web and desktop platforms
- Understanding differences between browser and Electron environments
- Working with Electron's main and renderer processes

### User Interface & Interaction
- Implementing keyboard event listeners (keydown/keyup)
- CSS pseudo-classes vs JavaScript class manipulation
- Creating visual feedback for user actions
- DOM manipulation with getElementById and classList

### Version Control
- Feature branch workflow
- Managing Git repositories with proper commit messages
- Resolving merge conflicts
- Understanding Git directory structure

---

## 🔮 Planned Features (Roadmap)

### Web
- Display calculation history
- Store history in a database (full-stack demo)
- Responsive design and improved styling
- Unit tests for calculator logic

### Desktop
- Packaged installer for Windows/Mac/Linux
- Custom app icon
- Advanced keyboard shortcuts
- Theme customization options
- Settings persistence

---

## ▶ Getting Started

### MVC App
1. Clone or download the repository
2. Open the solution in **Visual Studio 2022**
3. Run with `dotnet run` or press **F5**
4. Open your browser at `https://localhost:xxxx`

### Electron App
1. Navigate to `/calculator-desktop/`
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the application:
   ```bash
   npm start
   ```

---


## 🤝 Contributing

This is a personal learning project, but suggestions and feedback are welcome!

---

## 📝 License

This project is open source and available for educational purposes.

---

## 👤 Author

**Tina Lutti**
- GitHub: [@TinaLutti](https://github.com/TinaLutti)

---

*Built with ❤️ as a learning project to practice full-stack development and desktop application development*
