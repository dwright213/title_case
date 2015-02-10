var titleCase = function(word) {
  word = word.toLowerCase();
  var splitPhrase = word.split([]);
  var firstLetter = splitPhrase[0].toUpperCase();
  var decapitatedWord = splitPhrase.slice(1);

  decapitatedWord.unshift(firstLetter);

  var final = decapitatedWord.join("");

  return final;

};
