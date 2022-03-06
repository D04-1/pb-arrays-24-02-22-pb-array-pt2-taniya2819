function greaterNumbers(array, zahl) {
  const findGreatest = array.filter((let) => {
    if (let > zahl) return true;
    return false;
  });
  return findGreatest;
}
console.log(greaterNumbers([3, 4, 5], 4));
console.log(greaterNumbers([10, 20, 30], 12));
console.log(greaterNumbers([0, 10, 3], 4));

//2
function longestWord(string) {
  const word = string.split(" ");
  let lw = "";
  for (let i = 0; i < word.length; i++) {
    const words = word[i];
    if (words.length > lw.length) {
      lw = words;
    }
  }
  return lw;
}
console.log(longestWord("Dies ist ein Webentwicklungskurs"));

//3
const umzukehren = [3, 4, 5, 3, 2];
const reversed = umzukehren.reverse();
const dazu = reversed.join("");
console.log(dazu);
//
//von Marvin
function reverseNumber(number) {
  const string = number.toString();
  const array = string.split("");
  let returnable = "";

  console.log(array);
  array.forEach((element) => {
    returnable = element + returnable;
  });
  return parseInt(returnable) * Math.sign(number);
}

console.log(reverseNumber(-34532));
//
const namen = ["hans", "hallo", "baum"];
namen.forEach((element) => console.log(element));

//4
function findVowels(string) {
  const array = string.split("");
  const vowels = "aeiou";
  let returnable = 0;
  array.forEach((element) => {
    if (vowels.indexOf(element.toLowerCase()) > -1) {
      returnable++;
    }
  });
  return returnable;
}
console.log(findVowels("this is a string"));

//5
function missingNumber(array) {
  const arrayComplete = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let returnable;

  arrayComplete.forEach((element) => {
    if (!array.includes(element)) returnable = element;
  });
  return returnable;
}
console.log(missingNumber([1, 2, 3, 4, 6, 7, 8, 9, 10]));
console.log(missingNumber([7, 2, 3, 6, 5, 9, 1, 4, 8]));
console.log(missingNumber([10, 5, 1, 2, 4, 6, 8, 3, 9]));

//6
function sumOfCubes(array) {
  let returnable = 0;
  array.forEach((element) => {
    returnable += element ** 3;
  });
  return returnable;
}
console.log(sumOfCubes([1, 5, 9]));
console.log(sumOfCubes([2]));
console.log(sumOfCubes([]));

//7
const dictionary = (find, array) => {
  let reihenfolge = array.filter((item) => item.startsWith(find));
  return reihenfolge;
};
console.log(dictionary("bu", ["button", "breakfast", "border"]), "\n");
console.log(
  dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]),
  "\n"
);
console.log(
  dictionary("beau", ["pastry", "delicious", "name", "boring"]),
  "\n"
);

//8
const evenNums = (num) => {
  let result = [];
  for (let i = 2; i <= num; i = i + 2) {
    result.push(i);
  }
  return result;
};
console.log(evenNums(8));
console.log(evenNums(4));
console.log(evenNums(2));
