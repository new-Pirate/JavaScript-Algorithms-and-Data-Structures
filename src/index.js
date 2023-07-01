const graphs = {
  you: ['alice', 'bob', 'clarie'],
  bob: ['anuj', 'peggy'],
  alice: ['peggy'],
  clarie: ['thom', 'jonny'],
  anuj: [],
  peggy: [],
  thom: [],
  jonny: [],
};

function bfs(graph, start, end) { //start - начальная вершина(узел) //end - искомая вершина(узел)
  let queue = []; //очередь которую надо проверить
  let searched = []; //очередь из проверенных
  queue.push(start); //добавляем стартовый элемент в очередь

  while (queue.length > 0) { //пока очередь не пуста
    let element = queue.shift(); //удаляем первый элемент из очереди
    if (!searched.includes(element)) {
      if (element === end) { //если искомый элемент найден, то возвращаем true
        return true;
      } else {
        searched.push(element); //помещаем элемент в уже проверенные
        queue = queue.concat(graph[element]); //добавляем соседей в очередь
      }
    }
  }
  return false; //если искомого элемента не обнаружено, то его нет
}

let result = bfs(graphs, 'you', 'jonny');
console.log(result);
