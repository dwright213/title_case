describe ("titleCase", function() {
  it("capitalizes the first letter of a word", function() {
    expect(titleCase("computers")).to.equal("Computers");
  });

  it("title cases the first letter of a word even if it's in ALL CAPS", function() {
    expect(titleCase("ANGER")).to.equal("Anger");
  });

  it("title cases a multi word sentence", function() {
    expect(titleCase("javascript is kewl")).to.equal("Javascript Is Kewl");
  });


});
