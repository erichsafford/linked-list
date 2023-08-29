class ListNode {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head
    }

    append(value) {
        if (this.head) {
            let newNode = new ListNode(value)
            let lastNode = this.tail()
            lastNode.next = newNode
        } else {
            console.log("Please initialize list with 1st item before appending")
        }
    }

    prepend(value) {
        let newNode = new ListNode(value)
        let lastHead = this.head
        newNode.next = lastHead
        this.head = newNode
        }

    size() {
        let count = 0
        let node = this.head
        while (node) {
            count++
            node = node.next
        }
        return count
    }

    clear() {
        this.head = null
    }

    tail() {
        let lastNode = this.head
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next
            }
        }
        return lastNode
    }

    head() {
        return this.head
    }

    at(index) {
        let lastNode = this.head
        if (index > this.size() - 1) {
            console.log("Index out of range")
            return
        } else {
        for (let i = 0; i < index; i++) {
            lastNode = lastNode.next
        }
            return lastNode
        }
    }

    pop() {
        let newTail = this.at(this.size() - 2)
        newTail.next = null
    }

    contains(value) {
        let lastNode = this.head
        for (let i = 0; i < this.size(); i++) {
            if (lastNode.data === value) {
                return true
            } else {
                lastNode = lastNode.next
            }
        }
        return false
    }

    find(value) {
        if (this.contains(value)) {
            let count = 0
            let lastNode = this.head
            for (let i = 0; i < this.size(); i++) {
                if (lastNode.data === value) {
                    return count
                } else {
                    count++
                    lastNode = lastNode.next
                }
            }
        }
        return null
    }

    toString() {
        let lastNode = this.head
        let prevString = ""
        let string = ""
        for (let i = 0; i < this.size(); i++) {
            prevString = string
            string = prevString + `(${lastNode.data}) -> `
            lastNode = lastNode.next
        }
        console.log(string)
    }
}

let node1 = new ListNode("Dick")
let list = new LinkedList(node1)

list.toString()

