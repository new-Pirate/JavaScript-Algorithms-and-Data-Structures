# Быстрая сортировка (Quicksort)

Быстрая сортировка - основана на стратегии "разделяй и властвуй", т.е. сначала нужно определить простейший случай как базовый, а затем нужно сокращать задачу пока она не будет приведена к базовому случаю.

Идея алгоритма:
1) Сначала в массиве выбирается элемент, который называется опорным.
2) Далее мы находим элементы меньше и элементы больше опорного и распределяем их по подмассивам.
3) Рекурсивно применить первые два шага к двум подмассивам слева и справа от опорного элемента. 

![Alt text](Sorting_quicksort_anim.gif)

## Сложность
O(n * log(n))

Полезные ссылки:
* [wiki](https://ru.wikipedia.org/wiki/%D0%91%D1%8B%D1%81%D1%82%D1%80%D0%B0%D1%8F_%D1%81%D0%BE%D1%80%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0)