# Learning algorithms and data structures in JavaScript

## Data Structures
### Таблица выполнения основных операций со структурами данных
| Data Structure                | Чтение | Поиск | Вставка | Удаление |
| :---------------------------- | :----- | :---- | :------ | :------- |
| Array (Массив)                | O(1)   | O(n)  | O(n)    | O(n)     |
| Linked Liset (Связный список) | O(n)   | O(n)  | O(1)    | O(1)     |
| Hash-table (Хэш-таблица)      | -      | O(1)  | O(1)    | O(1)     |
| Graph (Граф)                  | -      | -     | -       | -        |
| Queue (Очередь)               | O(n)   | O(n)  | 1       | 1        |
| Stack (Стек)                  | O(n)   | O(n)  | 1       | 1        |

## Data Structures list
* [Array (Массив)](data-structures/array)
* [Linked Liset (Связный список)](data-structures/linked-list)
* [Hash-table (Хэш-таблица)](data-structures/hash-table)
* [Graph (Граф)](data-structures/graph)
* [Queue (Очередь)](data-structures/queue)
* [Stack (Стек)](data-structures/stack)

## Algorithms
### Time complexity (Время выполнения)

О-большое это сложность выполнения алгоритма. Оно определеяет время выполнения алгритма в худшем случае.

### Таблица разновидностей часто встречающихся O-большого в порядке убывания скорости выполнения с примером:

| Big O Notation  | Название                              | Пример                               |
| :-------------- | :------------------------------------ | :----------------------------------- |
| O(1)            | Constant (Константное)                | Проверка четности числа              |
| O(log(n))       | Logarithmic (Логарифмическое)         | Бинарный поиск                       |
| O(n)            | Linear (Линейное)                     | Линейный поиск                       |
| O(n * log(n))   | Log-linear (Линейно-логарифмическое)  | Быстрая сортировка                   |
| O($n^2$)        | Quaddratic (Квадратичное)             | Сортировка выбором                   |
| O($2^n$)        | Exponential (Экспоненциальное)        | Задачи о порядке перемножения матриц |
| O(n!)           | Factorial (Факториальное)             | Задачи коммивояжера полным перебором |

### Таблица операций выполнения алгоритма в порядке возрастания:
| Big O Notation  | Для 10 элементов | Для 100 элементов | Для 1000 элементов |
| :-------------- | :--------------- | :---------------- | :----------------- |
| O(1)            | 1                | 1                 | 1                  |
| O(log(n))       | 3                | 6                 | 9                  |
| O(n)            | 10               | 100               | 1000               |
| O(n * log(n))   | 30               | 600               | 9000               |
| O($n^2$)        | 100              | 10000             | 1000000            |
| O($2^n$)        | 1024             | 1.26e+29          | 1.07e+301          |
| O(n!)           | 3628800          | 9.3e+157          | 4.02e+2567         |


![Alt text](chart.png)

## Algorithms list

* **Search**
  * [Binary Search (Бинарный поиск)](algorithms/search/binary-search)

* **Sorting**
  * [Selection sort (Сортировка выбором)](algorithms/sort/selection-sort)
  * [Quicksort (Быстрая сортировка)](algorithms/sort/quicksort)

* **Graphs**
  * [Breadth-first search (Поиск в ширину)](algorithms/graphs/breadth-first-search)
  * [Dijkstra’s algorithm (Алгоритм Дейкстры)](algorithms/graphs/dijkstra’s-algorithm)
