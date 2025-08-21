namespace CalculatorApp.Models
{
    public class Operation
    {
        public double NumberA { get; set; }
        public double NumberB { get; set; }
        public double Result { get; set; }

        public enum OperationType { Addition, Subtraction, Multiplication, Division }
        public OperationType SelectedOperation { get; set; }


    }
}
