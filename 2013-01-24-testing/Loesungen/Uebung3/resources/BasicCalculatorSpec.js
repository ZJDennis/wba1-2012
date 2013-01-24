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
test("Addition getestet", function () {
var basicCalculator = new BasicCalculator();
var z1 = 0;
var z2 = 1;
expect(2);
strictEqual(z1+z2, basicCalculator.addition(z1, z2), "Rechnung korrekt getestet");
throws(function() { basicCalculator.addition(null, z1); }, "Falsche Uebergabeparameter getestet");
});


//Übung 3.2 
//basicCalculator.subtraction() Test schreiben mit ok
test("Subtraktion getestet", function () {
var basicCalculator = new BasicCalculator();
var z1 = 0;
var z2 = 1;
expect(2);
ok(z1-z2 == basicCalculator.subtraction(z1, z2), "Rechnung korrekt getestet");
throws(function() { basicCalculator.subtraction(z2, ""); }, "Falsche Uebergabeparameter getestet");
});


//Übung 3.3
//basicCalculator.multiplication() Test schreiben
test("Multiplikation getestet", function () {
var basicCalculator = new BasicCalculator();
var z1 = 3;
var z2 = 5;
expect(2);
equal(z1*z2, basicCalculator.multiplication(z1, z2), "Rechnung korrekt getestet");
throws(function() { basicCalculator.multiplication(null, z1); }, "Falsche Uebergabeparameter getestet");
});

//Übung 3.4 
//basicCalculator.division() Test schreiben
//hier soll auch getestet werden, ob die Funktion division eine 
//Exception wirft sobald, man versucht durch 0 zu teilen (throws)
test("Division getestet", function () {
var basicCalculator = new BasicCalculator();
var z1 = 3;
var z2 = 5;
var z3 = 0;
expect(3);
equal(z1/z2, basicCalculator.division(z1, z2), "Rechnung korrekt getestet");
throws(function() { basicCalculator.division(null, z1); }, "Falsche Uebergabeparameter getestet");
throws(function() { basicCalculator.division(z1, z3); }, "Division durch 0 getestet!");
});