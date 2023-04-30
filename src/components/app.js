const renderPage = () => {
    let root = document.getElementById('root');
    if (root) {
        root.innerHTML = renderHeader() + renderKeyboard();
    } else {
        root = document.createElement('div');
        root.id = 'root';
        root.innerHTML = renderHeader() + renderKeyboard();
        document.body.appendChild(root);
    }
};

export const App = () => {
    renderPage();
};

class Keyboard {
    constructor(layouts) {
        this.layouts = layouts;
        this.currentLayout = 0;
        this.keys = this.layouts[this.currentLayout].map((keyData) => new Button(keyData));
        this.elements = {
            main: null,
            keysContainer: null,
            textarea: null,
            keyboardContainer: null,
        };
    }

    init() {
        // create main elements
        this.elements.main = document.createElement('div');
        this.elements.keysContainer = document.createElement('div');
        this.elements.textarea = document.createElement('textarea');
        this.elements.keyboardContainer = document.createElement('div');

        // add classes
        this.elements.main.classList.add('keyboard');
        this.elements.keysContainer.classList.add('keyboard__keys');
        this.elements.keyboardContainer.classList.add('keyboard__container');

        // add keys to the keys container
        this.keys.forEach((key) => {
            this.elements.keysContainer.appendChild(key.render());
        });

        // add elements to the main element
        this.elements.main.appendChild(this.elements.textarea);
        this.elements.main.appendChild(this.elements.keysContainer);
        this.elements.keyboardContainer.appendChild(this.elements.main);
        document.body.appendChild(this.elements.keyboardContainer);

        // add event listeners
        window.addEventListener('keydown', this.onKeyDown.bind(this));
        window.addEventListener('keyup', this.onKeyUp.bind(this));
        this.elements.keysContainer.addEventListener('mousedown', this.onMouseDown.bind(this));
        this.elements.keysContainer.addEventListener('mouseup', this.onMouseUp.bind(this));
    }

    switchLayout() {
        this.currentLayout = (this.currentLayout + 1) % this.layouts.length;
        this.keys.forEach((key, i) => {
            key.setKeyData(this.layouts[this.currentLayout][i]);
        });
    }

    onKeyDown(e) {
        e.preventDefault();
        const key = this.keys.find((key) => key.keyData.code === e.code);
        if (key) {
            key.setActive(true);
            this.elements.textarea.value += key.keyData.symbol;
        }
    }

    onKeyUp(e) {
        const key = this.keys.find((key) => key.keyData.code === e.code);
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
