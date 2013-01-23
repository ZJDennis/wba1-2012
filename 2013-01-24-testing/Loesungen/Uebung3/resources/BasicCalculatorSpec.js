var z1;
var z2;
var z3;
var z4;
var basicCalculator;
module("Test", {
	setup: function() {
		z1 = 4;
		z2 = 0;
		z3 = -2;
		z4 = 154;
		basicCalculator = new BasicCalculator();
	}
});
test("isNumber erfolgreich getestet", function () {
 expect(4);
 ok(true == basicCalculator.isNumber(z1, z4), "Korrekte Parameter"); 
 equal(basicCalculator.isNumber("Test", z4), false, "erster Parameter Falsch");
 strictEqual(basicCalculator.isNumber(z1, "TEst"), false, "zweiter Parameter Falsch");
 equal(basicCalculator.isNumber("Test", null), false, "beide Parameter Falsch");
});
  
//Übung 3.1
//basicCalculator.addition() Test schreiben mit strictEqual
test("Addition getestet", function () {
expect(2);
strictEqual(basicCalculator.addition(z1, z2), z1+z2, "Rechnung korrekt getestet");
throws(function() { basicCalculator.addition(null, z1); }, "Falsche Uebergabeparameter getestet");
});


//Übung 3.2 
//basicCalculator.subtraction() Test schreiben mit ok
test("Subtraktion getestet", function () {
expect(2);
ok(z1-z2 == basicCalculator.subtraction(z1, z2), "Rechnung korrekt getestet");
throws(function() { basicCalculator.subtraction(z2, ""); }, "Falsche Uebergabeparameter getestet");
});


//Übung 3.3
//basicCalculator.multiplication() Test schreiben
test("Multiplikation getestet", function () {
expect(2);
equal(basicCalculator.multiplication(z1, z2), z1*z2, "Rechnung korrekt getestet");
throws(function() { basicCalculator.multiplication(null, z1); }, "Falsche Uebergabeparameter getestet");
});

//Übung 3.4 
//basicCalculator.division() Test schreiben
//hier soll auch getestet werden, ob die Funktion division eine 
//Exception wirft sobald, man versucht durch 0 zu teilen (throws)
test("Division getestet", function () {
expect(3);
equal(basicCalculator.division(z1, z3), z1/z3, "Rechnung korrekt getestet");
throws(function() { basicCalculator.division(null, z1); }, "Falsche Uebergabeparameter getestet");
throws(function() { basicCalculator.division(z1, z2); }, "Division durch 0 getestet!");
});