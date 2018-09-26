

function countLetters(str) {
  var noSpace = str.split(" ").join("").toLowerCase();
  var emptyObject = {};
  for (var letter of noSpace) {
    emptyObject[letter] = 0;
  }
console.log(emptyObject);

  for (var letter of noSpace){
     emptyObject[letter] += 1;
  }
  return emptyObject;
}

    console.log(countLetters("lighthouse in the house"));