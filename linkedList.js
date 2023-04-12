function LinkedList() {
  this.head = null;
  this.length = 0;
}
function Node(data) {
  this.data = data;
  this.next = null;
}
LinkedList.prototype.add = function (data) {
  const newNode = new Node(data);
  let current = this.head;
  if (!current) {
    this.head = newNode;
    this.length++;
    return data;
  }
  while (current.next) {
    current = current.next;
  }
  current.next = newNode; //el ultimo current next es el newNode
  this.length++;
  return data;
};

LinkedList.prototype.remove = function (data) {
  let current = this.head; //definimos que actual por conveniencias es el this.head
  let previous = null; //previous es el anterior o sea el -1

  while (current) {
    //recorre la lista hasta el final
    if (current.data === data) {
      //coinciden los datos
      if (!previous) {
        //sin no hay nodo anterior, sí no hay head, se puede poner this.head tambien
        this.head = current.next; //si el nodo actual es el primer nodo de la lista que le ponga el next
      } else {
        //que se mueva a previo del detectado que es el actual
        previous.next = current.next; //que el el previo sea el actual
      }
      this.length--; //si coinciden los datos y pasa las condiciones que lo borre
      return current.data; //
    }
    // el nodo anterior se actualiza al nodo actual y el nodo actual se actualiza al siguiente nodo en la lista enlazada.
    previous = current;
    current = current.next;
  }
  return null;
};

LinkedList.prototype.search = function (data) {
  let current = this.head;
  while (current) {
    if (current.data === data) {
      return current;
    }
    current = current.next;
  }
  return null;
};

// Método para obtener un elemento por índice
LinkedList.prototype.get = function (index) {
  // Sí el índice está fuera del rango de la lista, devuelve null
  if (index < 0 || index >= this.length) {
    return null;
  }

  let current = this.head;
  let count = 0;

  // Recorre la lista hasta encontrar el elemento en la posición indicada
  while (count < index) {
    current = current.next;
    count++;
  }
  return current.data;
};

LinkedList.prototype.insertAt = function (data, index) {
  if (index < 0 || index > this.length) {
    return false;
  }

  let node = new Node(data);

  if (index === 0) {
    // el nodo recién creado se enlaza al nodo que actualmente es la cabeza
    node.next = this.head;
    this.head = node; // el nuevo nodo se convierte en la nueva cabeza
  } else {
    let current = this.head;
    let previous = null;
    let count = 0;

    while (count < index) {
      //busca el indice anterior al buscado
      //aca llegamos uno antes del espacio donde
      //queremos ubicar el nodo y hacemos que ese previous sea el current
      //despues ese current que se actualize el puntero next para que quede completo
      //luego se cuentan las iteraciones hasta llegar a ese punto.
      previous = current;
      current = current.next;
      count++;
    }
    //el nuevo nodo con  su puntero next es el current
    //y en el next del previous va a ir el nuevo nodo
    node.next = current;
    previous.next = node;
    // previous{data:5
    //          next: {node:{data:10
    //                       next= current{ data:15, next:null }}}}
  }
  this.length++;
  return true;
};

LinkedList.prototype.size = function () {
  return this.length;
};

LinkedList.prototype.toArray = function () {
  const array = [];
  let currentValue = this.head;
  while (currentValue) {
    array.push(currentValue.data);
    currentValue = currentValue.next;
  }
  return array;
};

const list = new LinkedList();

list.add(5);
list.add(10);
list.add(15);

list.remove(15);
list.remove(10);

const node = list.search(5);
console.log(node.data);

list.get(0);

list.insertAt(35, 1);
list.insertAt(30, 0);

console.log(list);

console.log(list.length);

list.size();

list.toArray();
