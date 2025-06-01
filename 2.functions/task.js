/** Задача №1 */
function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[arr.length - 1];
  let sum = 0;

  arr.forEach(num => {
    if (num < min) {
      min = num;
    }
    if (num > max) {
      max = num;
    }
    sum += num;
  }
  );
  const avg = Number((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}


function summElementsWorker(...arr) {
  const sum = arr.reduce((acc, numOfArr) => {
    return acc + numOfArr
  }, 0)

  return sum
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) 
    return 0

  const min = Math.min(...arr)
  const max = Math.max(...arr)
  return max - min
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0
  let sumOddElement = 0
  arr.forEach(num => {
    if (num % 2 === 0) {
      sumEvenElement += num;
    } else {
      sumOddElement += num;
    }
  });
  return sumEvenElement - sumOddElement
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0
  let countEvenElement = 0
  arr.forEach(num => {
    if (num % 2 === 0) {
      sumEvenElement += num;
      countEvenElement++;
    }
  })

  return countEvenElement === 0 ? 0 : Number((sumEvenElement / countEvenElement).toFixed(2));
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity

  arrOfArr.forEach(arr => {
    const result = func(...arr)
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  });

  return maxWorkerResult
}
