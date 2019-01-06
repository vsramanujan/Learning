const { createQueue } = require('./queue');
const {createStack } = require('./stack');

function createNode(key) {
  const neighbors = [];

  return {
    key,
    neighbors,
    addNeighbour(node) {
      neighbors.push(node);
    }
  }
}


function createGraph(directed = false) {

  const nodes = [];
  const edges = [];
  return {
    directed,
    nodes,
    edges,

    addNode(key) {
      nodes.push(createNode(key))
    },

    getNode(key) {
      return nodes.find(nodes => nodes.key === key);
    },

    addEdge(node1key, node2key) {
      const node1 = this.getNode(node1key);
      const node2 = this.getNode(node2key);
      node1.addNeighbour(node2);
      edges.push(`${node1key}-${node2key}`);
      if (!directed) {
        node2.addNeighbour(node1)
      }
    },

    print() {
      return nodes.map(({ key, neighbors }) => {
        if (neighbors.length > 0) {
          console.log(`${key} - ${neighbors.map(node => node.key).join(' ')}`);
        }
      })
    },

    breadthFirstSearch(startNode, visitFn) { //visitFn -> Function to be called at each node
      const queue = createQueue();
      const visited = [];
      queue.enqueue(startNode);
      while (!queue.isEmpty()) {
        let currentNode = queue.dequeue();
        visitFn(currentNode);
        queue.print();
        visited.unshift(currentNode);
        this.getNode(currentNode).neighbors.map(neighbor => {
          if ((!visited.find(key => key === neighbor.key)) && (!queue.find(key => key === neighbor.key))) {
            queue.enqueue(neighbor.key);
          };
        })
      }
    }
  }
}


let s = createGraph();
s.addNode("A");
s.addNode("B");
s.addEdge("A", "B");
s.addNode("C");
s.addEdge("C", "A")
s.addNode("D");
s.addEdge("B","D");
s.breadthFirstSearch("A", console.log);