export class Queue {
    a = []
    b = 0;

    getLength () {
        return this.a.length - this.b
    }
    
    isEmpty () {
        return 0 == this.a.length
    }
    
    enqueue (b) {
        this.a.push(b)
    }
    ;
    this.dequeue = function() {
        if (0 != a.length) {
            var c = a[b];
            2 * ++b >= a.length && (a = a.slice(b),
            b = 0);
            return c
        }
    }
    ;
    this.peek = function() {
        return 0 < a.length ? a[b] : void 0
    }
}
;
