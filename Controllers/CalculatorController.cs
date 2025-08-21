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
                        ModelState.AddModelError(nameof(model.Operand2), "It´s not possible to divide 0");
                    }
                    else
                    {
                        model.Result = model.Operand1 / model.Operand2;                       
                    }
                    break;

            }
        }
        return View(model);
    }
}