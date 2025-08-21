CalculatorApp
En enkel miniräknare byggd med ASP.NET Core MVC för att träna på grunderna Model-View-Controller mönstret.

Funktioner
- Ange två tal och välj operation (addition, subtraktion, multiplikation eller division).
- Resultatet visas direkt på sidan.
- Strukturerat koden så den lätt kan byggas ut med fler funktioneri framtiden.

Kom igång
1. Klona eller ladda ner repo.
2. Öppna lösningen i Visual Studio (eller kör dotnet run från terminalen i projektmappen).
3. Öppna webbläsaren på https://localhost:xxxx för att testa miniräknaren.

LÄRDOMAR

Arkitektur MVC (Model View Controller)

- Model: beskriver vilken data kalkylatorn hanterar (t.ex. tal A, tal B, vald operation t.ex multiplikation, resultat). Modellen bestämmer vad kalkylatorn behöver veta för att kunna räkna.
- Controller: tar emot användarens input från modellen, den utför logiken (räknar ut resultatet baserat på vald operation) och skickar tillbaka datan till vyn.
- View: är det som användaren ser (formulär med två tal, en lista av operationer och en plats för resultatet).

Koden blir tydligt separerad: Modellen sätter ramarna, controllern utför logiken, vyn ansvarar för presentationen. 
