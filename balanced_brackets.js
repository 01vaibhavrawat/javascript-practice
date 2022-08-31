class stack {
    constructor() {
        this.arr = [];
    }

    add(value) {
        this.arr.push(value);
    }

    remove() {
        return this.arr.pop()
    }

    top() {
        return this.arr[this.arr.length - 1];
    }

    isEmpty() {
        return this.arr.length === 0;
    }
}
let s = new stack;
let parens = ')'

function func() {
    for (let x of parens) {
        if (x == '(' || x == '[' || x == '{') {
            s.add(x)
        } else {
            if (x == ')') {
                if (s.top() == '(') {
                    s.remove()
                } else {
                    return false;
                }
            } else if (x == ']') {
                if (s.top() == '[') {
                    s.remove()
                } else {
                    return false;
                }
            } else if (x == '}') {
                if (s.top() == '{') {
                    s.remove()
                } else {
                    return false;
                }
            }
        }
    }
    return s.isEmpty()
}
console.log(func())