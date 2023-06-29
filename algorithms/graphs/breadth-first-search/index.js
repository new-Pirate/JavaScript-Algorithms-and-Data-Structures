const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function binary_search(array, item) {
  let low = 0; //нижняя граница
  let high = array.length - 1; //верхняя граница

  while (low <= high) { //пока граница не сократится до одного элемента
    let mid = Math.floor((low + high) / 2); //средний элемент
    let guess = array[mid];

    if (guess === item) { //если значение найдено
      return mid;
    }

    if (guess > item) { //если значение больше искомого
      high = mid - 1;
    } else {  //если значение меньше искомого
      low = mid + 1;
    }
  }

  return null; //Значения не существует
}

let result = binary_search(array, 8);
console.log(result);
