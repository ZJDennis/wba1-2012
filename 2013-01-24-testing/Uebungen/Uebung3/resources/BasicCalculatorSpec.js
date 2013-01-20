test("isNumber erfolgreich getestet", function () {
 var basicCalculator = new BasicCalculator();
 var z1 = 4;
 var z2 = 0;
 var z3 = -2;
 var z4 = 154;
 expect(4);
 ok(true == basicCalculator.isNumber(z1, z4), "Korrekte Parameter"); 
 equal(false, basicCalculator.isNumber("Test", z4), "erster Parameter Falsch");
 strictEqual(false, basicCalculator.isNumber(z1, "TEst"), "zweiter Parameter Falsch");
 equal(false, basicCalculator.isNumber("Test", null), "beide Parameter Falsch");
});
  
//Übung 3.1
//basicCalculator.addition() Test schreiben mit strictEqual



//Übung 3.2 
//basicCalculator.subtraction() Test schreiben mit ok



//Übung 3.3
//basicCalculator.multiplication() Test schreiben


//Übung 3.4 
//basicCalculator.division() Test schreiben
//hier soll auch getestet werden, ob die Funktion division eine 
//Exception wirft sobald, man versucht durch 0 zu teilen (throws)
