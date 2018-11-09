// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null){
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor(){
        this.head = null
        // this.list = []
    }
    insertFirst(data){
        this.head = new Node(data, this.head)
    }
    size(){
        let count = 0
        let node = this.head
        while(node){
            count++
            node = node.next
        }
        return count
    }
    // size(){
    //     if(!this.head) return 0
    //     let count = 1
    //     let node = this.head
    //     while(node.next){
    //         count++
    //         node = node.next
    //     }
    //     return count
    // }
    getFirst(){
        return this.head
    }
    getLast(){
        if(!this.head) return null
        let node = this.head
        while(node){
            if(!node.next){
                return node;
            }
            node = node.next
        }
    }
    // getLast(){
    //     let node = this.head
    //     while(!!node.next){
    //         node = node.next
    //     }
    //     return node
    // }
    clear(){
        this.head = null
    }
    removeFirst(){
        if(!this.head) return
        this.head = this.head.next
    }
    // 83
    // node = null => error
    // removeLast(){
    //     const size = this.size()
    //     if(size === 0) return
    //     if(size === 1) return this.head = null

    //     let node = this.head
    //     while(!!node.next){
    //         node = node.next
    //         console.log(node)
    //     }
    //     node = null
    // }
    // removeLast(){
    //     const size = this.size()
    //     if(size === 0) return
    //     if(size === 1) return this.head = null

    //     let node = this.head
    //     let previos = this.head
    //     while(!!node.next){
    //         previos = node
    //         node = node.next
    //     }
    //     previos.next = null
    // }
    removeLast(){
        if(!this.head){
            return;
        }
        if(!this.head.next){
            this.head = null
            return
        }
        let previos = this.head
        let node = this.head.next
        while(node.next){
            previos = node
            node = node.next
        }
        previos.next = null
    }
    insertLast(data){
        const last = this.getLast()
        if(last){
            last.next = new Node(data)
        }else{
            this.head = new Node(data)
        }
    }
    getAt(index){
        // if(!this.head) return null
        let node = this.head
        // for(let i=0; i<index; i++){
        //     node = node.next
        // }
        let count = 0
        while(node){
            if(index === count){
                return node
            }
            count++
            node = node.next
        }
        return null
    }
    removeAt(index){
        if(!this.head) return
        if(index === 0) {
            this.head = this.head.next
            return
        }
        const previous = this.getAt(index-1)
        if(!previous || !previous.next ) return
        previous.next = previous.next.next
    }
    insertAt(data, index){
        if(!this.head){
            this.head = new Node(data)
            return
        }
        if(index === 0){
            this.head = new Node(data, this.head)
            return
        }
        const previous = this.getAt(index - 1) || this.getLast()
        const node = new Node(data, previous.next)
        previous.next = node
    }
    forEach(fn){
        let node = this.head
        let count = 0
        while(node){
            fn(node, count)
            node = node.next
            count++
        }
    }

    *[Symbol.iterator](){
        let node = this.head
        while(node){
            yield node
            node = node.next
        }
    }
}

module.exports = { Node, LinkedList };
