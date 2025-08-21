namespace CalculatorApp.Models
{
    public class Operation
    {
        public double Operand1 { get; set; }
        public double Operand2 { get; set; }
        public double Result { get; set; }

        public enum OperationType { Addition, Subtraction, Multiplication, Division }
        public OperationType SelectedOperation { get; set; }

        /*public List<double> Operands { get; set; } = new List<double>(); Change Operand to List if implementing additional operands */
    }
}
