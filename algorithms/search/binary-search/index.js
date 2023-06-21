const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function binary_search(list, item) {
  let low = 0; //нижняя граница
  let high = list.length - 1; //верхняя граница

  while (low <= high) { //пока граница не сократится до одного элемента
    let mid = Math.floor((low + high) / 2); //средний элемент
    let guess = list[mid];

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

let result = binary_search(list, 8);
console.log(result);
