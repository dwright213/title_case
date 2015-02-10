describe ("titleCase", function() {
  it("capitalizes the first letter of a word", function() {
    expect(titleCase("computers")).to.equal("Computers");
  });

  it("title cases the first letter of a word even if it's in ALL CAPS", function() {
    expect(titleCase("ANGER")).to.equal("Anger");
  });

  it("title cases a multi word sentence", function() {
    expect(titleCase("javascripts kewl")).to.equal("Javascripts Kewl");
  });

  it("won't title case a specified word in a sentence", function() {
    expect(titleCase("The cat is black")).to.equal("The Cat is Black");
  });

  it("won't title case a specified word in a sentence, even if it is entered in caps", function() {
    expect(titleCase("The cat IS black")).to.equal("The Cat is Black");
  });

  it("will always capitalize the first word of a title even if the word is contained in notTheseWords", function() {
    expect(titleCase("the cat IS black")).to.equal("The Cat is Black");
  });


});
