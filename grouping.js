"use strict";
/**
 * Define the problem
 * Given an array of words create a function that groups the same words together
 * Inputs => [String]
 * Output => String
 */
/**
 * 1- Steps of Algorithm
 * 2- Sorting words array alphabetic collected from step (1)
 * 3- Get index of the same words from the sorted array and group each same indexes in an array
 * 4- Remove Duplicated indexes from the resulting array collected from step (3)
 * 5- Map orignal array and the resulted array from step (4) then print the mapped result
 */
/**
 * Big O o(n)
 */
const arrayOfnames = [
  "AMOR",
  "XISELA",
  "JAMON",
  "ROMA",
  "OMAR",
  "MORA",
  "ESPONJA",
  "RAMO",
  "JAPONES",
  "ARMO",
  "MOJAN",
  "MARO",
  "ORAM",
  "MONJA",
  "ALEXIS",
];
const sorting = (words) => {
  let sortedArr = [];
  for (let index = 0; index < words.length; index++) {
    let convertedWord = words[index].split("").sort().join("");
    sortedArr.push(convertedWord);
  }
  return sortedArr;
};
const getAllIndexes = (arr) => {
  let indexArr = [];
  for (let index = 0; index < arr.length; index++) {
    let indexes = [],
      i = -1;
    while ((i = arr.indexOf(arr[index], i + 1)) != -1) {
      indexes.push(i);
    }
    indexArr.push(indexes);
  }
  return indexArr;
};
const removeDuplicates = (arr) => {
  let hashMap = {};
  arr.forEach((arr) => {
    hashMap[arr.join("|")] = arr;
  });
  let result = Object.keys(hashMap).map((k) => {
    return hashMap[k];
  });
  return result;
};
const mappingAndPrinting = (arr) => {
  let result = "\n";
  arr.forEach((element) => {
    let spliterIndex = 0;
    element.forEach((newElement) => {
      spliterIndex++;
      spliterIndex === element.length
        ? (result += arrayOfnames[newElement])
        : (result += arrayOfnames[newElement] + "-");
    });
    result += "\n";
  });
  return result;
};
const startAlgorithm = () => {
  let grouppedArr = sorting(arrayOfnames);
  let indexes = getAllIndexes(grouppedArr);
  let duplicationRemove = removeDuplicates(indexes);
  let result = mappingAndPrinting(duplicationRemove);
  return result;
};
console.log(startAlgorithm());
