import { Board } from './Board';

export class Keyboard {
    constructor(layout) {
        this.currentLayout = 'en';
        this.main = document.createElement('div');
        this.main.classList.add('keyboard');

        this.textarea = document.createElement('textarea');
        this.main.append(this.textarea);

        this.board = new Board(layout, this.main, (data) => {
            this.textarea.textContent += data;
        });
    }

    start() {
        document.body.append(this.main);
        window.addEventListener('keydown', (e) => this.board.onKeyDown(e));
        window.addEventListener('keyup', (e) => this.board.onKeyUp(e));
    }
}
