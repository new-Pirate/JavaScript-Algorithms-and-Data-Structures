function dijkstra(graph, start, end) {  //start - начальная вершина //end - искомая вершина
  const distances = {}; //сюда будут записываться узлы и их стоимости перехода от старта
  const visited = {}; //посещенные вершины
  const previous = {};  //история пути

  for (let node in graph) { //инициализация расстояний до каждой вершины
    if (node === start) {
      distances[node] = 0;  //стартовая вершина обозначается как 0
    } else {
      distances[node] = Infinity; //остальным как бесконечность
    }
    previous[node] = null; 
  }

  while (true) {  //обработка всех вершин
    let closestDistance = Infinity; //наименьшее расстояние...
    let closestVertex = null; //...название этой вершины
    
    for (let vertex in distances) { //проходимся по всем вершинам
      if (!visited[vertex] && closestDistance > distances[vertex]) { //если к соседу можно добраться быстрее через текущую вершину и она не посещена
        closestVertex = vertex; //перезаписываем значение 
        closestDistance = distances[vertex]; //перезаписываем вершину
      }
    }

    if (closestVertex === null || closestVertex === end) {
      break; // если все вершины посещены или достигнута конечная вершина
    }

    visited[closestVertex] = true;  //помечаем вершину как посещенную

    for (let neighbor in graph[closestVertex]) {  //обновление расстояний до соседних узлов
      let distance = graph[closestVertex][neighbor];  //расстояние до соседней вершины
      let totalDistance = distances[closestVertex] + distance; //расстояние до текущей + соседней вершины
      if (totalDistance < distances[neighbor]) {  //если это общее расстояние меньше чем которое сохранено в объекте distances
        distances[neighbor] = totalDistance;  //перезаписываем расстояние до соседней вершины
        previous[neighbor] = closestVertex; //перезаписываем название родительской вершины, с помощью который добрались до соседней вершины
      }
    }
  }

  let shortestPath = []; //массив из вершин с кратчайшим путем
  let current = end;
  while (current !== null) { //крутимся по 
    shortestPath.unshift(current);
    current = previous[current];
  }

  return shortestPath;
}

// Пример графа
const graph = {
  A: { B: 4, C: 2 },
  B: { A: 4, D: 7 },
  C: { A: 2, D: 5 },
  D: { B: 7, C: 5, E: 3 },
  E: { D: 3 }
};

const result = dijkstra(graph, 'A', 'E');
console.log('Кратчайший путь:', result);
