var titleCase = function(word) {

  var splitPhrase = word.split([]);

  var titleCased = splitPhrase[0].toUpperCase();

  var decapitatedWord = splitPhrase.slice(1);

  decapitatedWord.unshift(titleCased);

  var turd = decapitatedWord.join("");

  return turd;


};
