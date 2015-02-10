var perWord = function(word) {

  word = word.toLowerCase();
  // debugger;
  var splitPhrase = word.split([]);
  var firstLetter = splitPhrase[0].toUpperCase();
  var decapitatedWord = splitPhrase.slice(1);

  decapitatedWord.unshift(firstLetter);

  var final = decapitatedWord.join("");

  return final;
};


var titleCase = function(subject) {

  if (subject.indexOf(" ") !== -1) {
      var phrase = subject.split(" ");
      var phraseLength = (phrase.length - 1);
      var capitalizedWords = [];
      for (var i = 0; i <= phraseLength; i++) {
        capitalizedWords.push(perWord(phrase[i]));
      }
      return capitalizedWords.join(" ");
  } else {
    return perWord(subject);
  }
};
