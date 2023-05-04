import { Button } from './Button';

export class Board {
    constructor(layout, parent, input) {
        this.boardNode = document.createElement('div');
        this.boardNode.className = 'board';
        this.keys = {};
        Object.keys(layout).forEach((el) => {
            this.keys[el] = new Button(layout[el], this.boardNode, (key) => input(key));
        });
        parent.append(this.boardNode);
    }

    onKeyDown(e) {
        const key = e.code;
        if (this.keys[key]) {
            this.keys[key].onKeyDown();
        }
    }

    onKeyUp(e) {
        const key = e.code;
        if (this.keys[key]) {
            this.keys[key].onKeyUp();
        }
    }
}
