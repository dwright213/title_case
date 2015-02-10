var perWord = function(word) {


  var splitPhrase = word.split([]);
  var firstLetter = splitPhrase[0].toUpperCase();
  var decapitatedWord = splitPhrase.slice(1);

  decapitatedWord.unshift(firstLetter);

  var final = decapitatedWord.join("");

  return final;
};


var titleCase = function(subject) {
  subject = subject.toLowerCase()
  if (subject.indexOf(" ") !== -1) {
      var notTheseWords = ["is", "and", "or", "if", "the"]
      var phrase = subject.split(" ");
      var phraseLength = (phrase.length - 1);
      var notTheseWordsLength = (notTheseWords.length - 1);
      var capitalizedWords = [];
      for (var i = 0; i <= phraseLength; i++) {

        if ((notTheseWords.indexOf(phrase[i]) === -1) || (i === 0)) {
          capitalizedWords.push(perWord(phrase[i]));

        } else {
            capitalizedWords.push(phrase[i]);
        }
      }

    return capitalizedWords.join(" ");

  } else {
    return perWord(subject);
  };
};
