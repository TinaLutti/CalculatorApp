# CalculatorApp  
A simple calculator available in **two versions**:  

- **ASP.NET Core MVC** – to practice and showcase the fundamentals of the Model–View–Controller (MVC) pattern.  
- **Electron Desktop App** – a cross-platform desktop widget built with Node.js + Electron.  

---

## 🚀 Features  
- Perform basic arithmetic operations: addition, subtraction, multiplication, and division.  
- Equals (=) button to display the result.  
- Clear (C) button to reset input and result.  
- Keyboard support (Enter, Escape, Delete, Backspace, numbers, operators).  
- Structured code that can easily be extended with new features.  

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
- Visual Studio Code  

---

## 📖 Lessons Learned  

### Separation of concerns with MVC  
- **Model** – defines calculator data (number A, number B, selected operation, result).  
- **Controller** – handles logic and calculations.  
- **View** – manages the user interface.
- ### Cross-platform Development
- Code reuse between web and desktop platforms
- Understanding the differences between browser and Electron environments

### Electron  
- How to bundle existing JS/HTML logic into a cross-platform desktop app.  
- Working with npm, Electron main/renderer process.  
- Branching workflow in GitHub (feature branches, pull requests, merging).  

---

## 🔮 Planned Features (Roadmap)  

### Web  
- Display calculation history.  
- Store history in a database (full-stack demo).  
- Responsive design and improved styling.  
- Unit tests for calculator logic.  

### Desktop  
- Packaged installer for Windows/Mac/Linux.  
- Custom app icon.
- Responsive design and improved styling.
- Button to minimize/maximize and close window/app.
- Resize functionality. 

---

## ▶ Getting Started  

### MVC App  
1. Clone or download the repository.  
2. Open the solution in **Visual Studio 2022**.  
3. Run with `dotnet run` or press **F5**.  
4. Open your browser at `https://localhost:xxxx`.  

### Electron App  
1. Navigate to `/calculator-desktop/`.  
2. Install dependencies:  
   ```bash
   npm install
   nmp start
