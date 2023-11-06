class ListNode<T> {
  public data: T;
  public next: ListNode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList<T> {
  public head: ListNode<T> | null;

  constructor() {
    this.head = null;
  }

  public addFirst(data: T): void {
    const newNode = new ListNode(data);
    // console.log(newNode)
    newNode.next = this.head;
    // console.log(newNode)
    this.head = newNode;
    // console.log(this.head)
  }

  public addLast(data: T): void {
    const newNode = new ListNode(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  public addElement(data: T, position: number): void {
    if (position < 0) {
      console.error("Invalid position");
      return;
    }
    if (position === 0) {
      this.addFirst(data);
      return;
    }

    const newNode = new ListNode(data);
    let current = this.head;
    let count = 0;

    while (current && count < position - 1) {
      current = current.next;
      count++;
    }

    if (current) {
      newNode.next = current.next;
      current.next = newNode;
    } else {
      console.error("Position out of bounds");
    }
  }

  public print(): void {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

// Example usage:
const myList = new LinkedList<number>();
myList.addLast(1);
myList.addLast(2);
myList.addFirst(0);
myList.addElement(1.5, 2);
myList.print();
