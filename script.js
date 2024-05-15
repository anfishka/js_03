//1) Написать функцию которая принимает массив чисел и возвращает их сумму

function getNums() {
  let arrLength = prompt("Enter length of arr of nums", "");
  let nums = [];
  for (let i = 0; i < arrLength; i++) {
    nums[i] = parseInt(prompt("Enter num: ", ""));
  }
  return nums;
}

function addition(arr) {
  let sum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

//2) Сделать функцию которая рекурсивно проходит по параметру в виде массива и вычесляет разницу всех элементов

function subtraction(arr, i = 0) {
  if (i === arr.length - 1) {
    return arr[i];
  } else {
    return arr[i] - subtraction(arr, i + 1);
  }
}

//3) Сделать функцию для обхода двумернного массива с целью поиска ближайших пар чисел

function findClosestPairs(arr) {
    let closestPairs = [];
    let minDistance = Infinity;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            for (let k = i; k < arr.length; k++) {
                for (let l = (k === i) ? j + 1 : 0; l < arr[k].length; l++) {
                    const distance = Math.abs(arr[i][j] - arr[k][l]);
                    if (distance < minDistance) {
                        minDistance = distance;
                        closestPairs = [[arr[i][j], arr[k][l]]];
                    } else if (distance === minDistance) {
                        closestPairs.push([arr[i][j], arr[k][l]]);
                    }
                }
            }
        }
    }

    return closestPairs;
}

n = getNums();
let sum = addition(n);
console.log(`Sum is: ${sum}`);
let diff = subtraction(n);
console.log(`Difference is: ${diff}`);
let matrix =  [
    [1, 5, 9],
    [1, 5, 11],
    [2, 6, 10]
];

let closestNum = findClosestPairs( matrix)
console.log(`Closest pair is: ${closestNum}`);

