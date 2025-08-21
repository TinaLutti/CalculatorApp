CalculatorApp

A simple calculator built with ASP.NET Core MVC to practice the fundamentals of the Model–View–Controller (MVC) pattern.

Features

Enter two numbers and choose an operation (addition, subtraction, multiplication, or division).

The result is displayed directly on the page.

Structured code that can easily be extended with new features in the future.

Getting Started

Clone or download the repository.

Open the solution in Visual Studio (or run dotnet run from the terminal in the project folder).

Open your browser at https://localhost:xxxx to test the calculator.

Lessons Learned

MVC Architecture (Model–View–Controller):

Model: Defines the data the calculator works with (e.g., number A, number B, selected operation, result). The model specifies what the calculator needs to know in order to perform calculations.

Controller: Receives user input from the model, executes the logic (performs the calculation based on the selected operation), and returns data to the view.

View: The part the user sees (a form with two numbers, a list of operations, and a field for the result).

This clear separation makes the code easier to maintain:

The model sets the structure,

The controller handles the logic,

The view manages the presentation.
