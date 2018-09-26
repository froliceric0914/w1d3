var str = process.argv[2];
console.log(str);

function countLetters(str) {

  var noSpace = str.split(" ").join("").toLowerCase();
  var emptyObject = {};

  for (var letter of noSpace) {
    emptyObject[letter] = [];
  }

  i = 0;

  for (var letter of noSpace){
     emptyObject[letter].push(i);
     i ++;
  }
  return emptyObject;
}

    console.log(countLetters(str));
