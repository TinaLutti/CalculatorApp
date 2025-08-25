using CalculatorApp.Models;
using Microsoft.AspNetCore.Mvc;

namespace CalculatorApp.Controllers;

public class CalculatorController : Controller
{
    [HttpGet]
    public IActionResult Index()
    {
        return View();
    }


[HttpPost]
public IActionResult Index(Operation model)
    {
        Console.WriteLine($"Operand1: {model.Operand1}");
        Console.WriteLine($"Operand2: {model.Operand2}");
        Console.WriteLine($"SelectedOperation: {model.SelectedOperation}");
        Console.WriteLine($"ModelState.IsValid: {ModelState.IsValid}");

        if (!ModelState.IsValid)
        {
            foreach (var error in ModelState)
            {
                Console.WriteLine($"Field: {error.Key}, Errors: {string.Join(", ", error.Value.Errors.Select(e => e.ErrorMessage))}");
            }
        }

        if (ModelState.IsValid)
        {
            switch (model.SelectedOperation)
            {
                case Operation.OperationType.Addition:
                    model.Result = model.Operand1 + model.Operand2;
                    break;

                case Operation.OperationType.Subtraction:
                    model.Result = model.Operand1 - model.Operand2;
                 break;

                case Operation.OperationType.Multiplication:
                    model.Result = model.Operand1 * model.Operand2;
                    break;

                case Operation.OperationType.Division:
                    if (model.Operand2 == 0)
                    {
                        ModelState.AddModelError(nameof(model.Operand2), "Cannot divide by zero");
                    }
                    else
                    {
                        model.Result = Math.Round(model.Operand1 / model.Operand2, 10); // Avoid floating point precision issues
                    }
                    break;

            }
        }
        return View(model);
    }
}