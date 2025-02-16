class Node {
    constructor(element) {
        this.element = element
        this.next = null
    }
}
class LList {
    constructor() {
        this.head = new Node('head')
    }
    find(item) {
        let currentNode = this.head
        while (currentNode.element !== item) {
            currentNode = currentNode.next
        }
        return currentNode
    }
    insert(newElement, item) {
        let newNode = new Node(newElement)
        let currentNode = this.find(item)
        newNode.next = currentNode.next
        currentNode.next = newNode
    }
    display() {
        let currentNode = this.head
        while (currentNode.next !== null) {
            console.log(currentNode.next.element);
            currentNode = currentNode.next
        }
    }
}

const city = new LList()
city.insert('shenzhen', 'head')
city.insert('guangzhou', 'shenzhen')
city.insert('shanghai', 'guangzhou')
city.display()

const string = 0;
switch (string) {
    case 1:
        console.log(123);
        break;

    default:
        console.log('default');
        break;
}