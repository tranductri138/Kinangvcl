// add a method prepend() to the linked list that adds a node to the beginning of the list


class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = {
            value: value,
            next: null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        console.log(this)
    }

    prepend(value) {
        //Code here
    }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
// myLinkedList.append(9);
// myLinkedList.append(2);


// myLinkedList.prepend(1)



