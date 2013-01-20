describe("BasicCalculator", function() {
  var uebung2_basicCalculator  = new uebung2_BasicCalculator();
  var z1;
  var z2;
  var z3;
  var z4;

/*ToDo Uebung 2.1

* Datei so umschreiben, dass die Variablen vor jedem Test neu instanziert werden und der Test funktioniert
* Tipp: beforeE....
*/
    
  it("isNumber erfolgreich getestet", function(){
  expect(uebung2_basicCalculator.isNumber(z1, z4)).toEqual(true); 
  expect(uebung2_basicCalculator.isNumber("Test", z4)).toEqual(false);
  expect(uebung2_basicCalculator.isNumber(z1, "TEst")).toEqual(false);
  expect(uebung2_basicCalculator.isNumber("Test", "TEst")).toEqual(false);
  });
  
  it("Addition von zwei Zahlen erfolgreich getestet", function(){
  expect(uebung2_basicCalculator.addition(z1, z4)).toEqual(z1 + z4);
  });
  
  it("Subtraktion von zwei Zahlen erfolgreich getestet", function(){
  expect(uebung2_basicCalculator.subtraction(z2, z1)).toEqual(z2 - z1);
  });
  
  it("Multiplikation von zwei Zahlen erfolgreich getestet", function(){
  expect(uebung2_basicCalculator.multiplication(z4, z3)).toEqual(z4 * z3);
  });
  
  it("Divison von zwei Zahlen erfolgreich getestet", function(){
  expect(uebung2_basicCalculator.division(z1, z3)).toEqual(z1 / z3);
  });
  
  it("Divison durch 0 erfolgreich getestet", function(){
  expect(function() { uebung2_basicCalculator.division(z1, z2); }).toThrow(new Error("Division durch 0 nicht moeglich"));
  });
  

  /* ToDo Uebung 2.2
  *
  *Tests schreiben, bei denen geprüft werden soll ob ein Error bei den jeweiligen Funktionen des uebung2_BasicCalculator geworfen wird
  *Tipp: Als Matcher sollte hier .toThrow() benutzt werden und die jeweiligen Errors findet man in der uebung2_BasicCalculator.js
  */

});
 
  
  
  