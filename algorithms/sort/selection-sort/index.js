const array = [7, 1, 4, 2, 10, 3, 5, 8, 9, 6];

function selection_search(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i; //переменная, которая будет содержать индекс текущего наименьшего элемента

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) { //выбор наименьшего значения
        minIndex = j;
      }
    }

    [array[i], array[minIndex]] = [array[minIndex], array[i]]; //заменяем текущий элемент на минимальный
  }
  return array;
}

let result = selection_search(array);
console.log(result);
