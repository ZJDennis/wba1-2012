describe('Übung1',function(){
  it("testen der subtraction()", function(){ 
    expect( subtrction(3, 2) ).toEqual( 1 );
  });
    it("testen der division()", function(){ 
    expect( division(4, 2) ).toEqual( 2 );
  });

  it('testen der zwei Variablen',function(){
    expect(a).toBe(b);
  });
  it('testen von zwei Objekten mit .toEqual',function(){
    expect(kaffe).toEqual(tasse);
  });
  it('testen von zwei Objekten mit .toBe',function(){
    expect(kaffe).toBe(tasse);
  });
});