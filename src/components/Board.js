import { Button } from './Button';

export class Board {
    constructor(layout, parent, input) {
        const boardNode = document.createElement('div');
        boardNode.className = 'board';

        layout.forEach((el) => {
            Button(layout[el], boardNode, (key) => input(key));
        });
        parent.append(boardNode);
    }
}
