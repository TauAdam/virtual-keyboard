import { Board } from './Board';

export class Keyboard {
    constructor(layout) {
        this.currentLayout = 'en';
        this.main = document.createElement('div');
        this.main.classList.add('keyboard');
        this.textarea = document.createElement('p');
        this.board = new Board(layout, this.main, (data) => {
            this.textarea += data;
        });
        this.elements = {
            main: null,
            keysContainer: null,
            keyboardContainer: null,
        };
    }

    init() {
        this.elements.main = document.createElement('div');
        this.elements.keysContainer = document.createElement('div');
        this.elements.textarea = document.createElement('textarea');
        this.elements.keyboardContainer = document.createElement('div');

        this.elements.main.classList.add('keyboard');
        this.elements.keysContainer.classList.add('keyboard__keys');
        this.elements.keyboardContainer.classList.add('keyboard__container');

        this.elements.main.appendChild(this.elements.textarea);
        this.elements.main.appendChild(this.elements.keysContainer);
        this.elements.keyboardContainer.appendChild(this.elements.main);
        document.body.appendChild(this.elements.keyboardContainer);

        window.addEventListener('keydown', this.onKeyDown.bind(this));
        window.addEventListener('keyup', this.onKeyUp.bind(this));
        this.elements.keysContainer.addEventListener('mousedown', this.onMouseDown.bind(this));
        this.elements.keysContainer.addEventListener('mouseup', this.onMouseUp.bind(this));
    }

    switchLayout() {
        this.currentLayout = (this.currentLayout + 1) % this.layout.length;
        this.keys.forEach((key, i) => {
            key.setKeyData(this.layout[this.currentLayout][i]);
        });
    }

    onKeyDown(e) {
        e.preventDefault();
        const key = this.keys.find((el) => el.keyData.code === e.code);
        if (key) {
            key.setActive(true);
            this.elements.textarea.value += key.keyData.symbol;
        }
    }

    onKeyUp(e) {
        const key = this.keys.find((el) => el.keyData.code === e.code);
        if (key) {
            key.setActive(false);
        }
    }

    onMouseDown(e) {
        const key = e.target.closest('.key');
        if (key) {
            key.classList.add('active');
            const keyObj = this.keys.find((obj) => obj.element === key);
            this.elements.textarea.value += keyObj.keyData.symbol;
        }
    }

    onMouseUp(e) {
        const key = e.target.closest('.key');
        if (key) {
            key.classList.remove('active');
        }
    }
}
