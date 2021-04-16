class Stack {
    constructor() {
        this.content = [];
        for (const a in arguments) {
            this
                .content
                .push(arguments[a]);
        }

    }

    get size() {
        return this.content.length;
    }

    push = (element) => {
        this
            .content
            .push(element);

    }

    pop = () => {
        if (this.isEmpty()) 
            return null;
        return this
            .content
            .pop();
    }

    peek = () => {
        if (this.isEmpty()) 
            return null;
        return this.content[this.size - 1];
    }

    swap = () => {
        if (this.size < 2) {
            return;
        }

        let last = this.content[this.size - 1];
        this.content[this.size - 1] = this.content[this.size - 2];
        this.content[this.size - 2] = last;
    }

    isEmpty = () => {
        return this.size === 0;
    }

}

module.exports = Stack;