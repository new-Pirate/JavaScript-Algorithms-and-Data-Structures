const array = [7, 1, 4, 2, 10, 3, 5, 8, 9, 6];

function quicksort(array) {
  if (array.length < 2) { //базовый случай когда массив с 0 и 1 элементов уже отсортированы
    return array;
  }

  let index = Math.floor(Math.random() * array.length); //рандомный индекс для определения опорного элемента
  let pivot = array[index]; //опорный элемент мб любым
  let less = []; //массив всех элементов меньше опорного
  let more = []; //массив всех элементов больше опорного

  for (let i = 0; i < array.length; i++) {
    if (pivot === array[i]) {
      continue;
    }

    if (pivot > array[i]) {
      less.push(array[i]);
    }

    if (pivot < array[i]) {
      more.push(array[i]);
    }
  }

  return [...quicksort(less), pivot, ...quicksort(more)];
}

let result = quicksort(array);
console.log(result);