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
/*function findClosestPair(arr, i = 0, j = 0, minDistance = Infinity, closestPairs = [])
{
    if(arr.length - 1 && j === arr[i].length - 1)
        {
            return closestPairs;
        }

        for(let k = i; k < arr.length; k++)
            {
                for(let l = (k === i ? j + 1 : 0); l <arr[k].length; l++)
                    {
                        const distance = Math.abs(arr[i][j] - arr[k][l])
                        if(distance < minDistance)
                            {
                                closestPairs = [[i,j], [k,l]];
                                minDistance = distance
                            }
                    }
            }

            if(j === arr[i].length - 1)
                {
                    return findClosestPair(arr, i+1, 0, minDistance, closestPairs);
                }else{
                    return findClosestPair(arr, i, j+1, 0, minDistance, closestPairs);
                }

}*/


function findClosestPairs(arr) {
    let closestPairs = [];
    let minDistance = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            for (let k = i; k < arr.length; k++) {
                for (let l = (k === i ? j + 1 : 0); l < arr[k].length; l++) {
                    const distance = Math.abs(arr[i][j] - arr[k][l]);
                    if (distance < minDistance) {
                        closestPairs = [[i, j], [k, l]];
                        minDistance = distance;
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
    [3, 5, 11],
    [4, 7, 13]
];

let closestNum = findClosestPairs( matrix)
console.log(`Closest pair is: ${closestNum}`);

