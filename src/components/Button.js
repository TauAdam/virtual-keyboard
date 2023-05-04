export class Button {
    constructor(keyData, parent, cb) {
        this.handleKeyDown = cb;
        this.newButton = document.createElement('button');
        this.newButton.textContent = keyData;
        this.newButton.setAttribute('data-content', keyData);
        this.newButton.classList.add('btn');
        this.newButton.addEventListener('mousedown', () => {
            cb(keyData);
            this.newButton.classList.add('active');
        });
        this.newButton.addEventListener('mouseup', () => {
            this.newButton.classList.remove('active');
        });
        parent.append(this.newButton);
    }

    onKeyDown() {
        this.handleKeyDown(this.newButton.textContent);
        this.newButton.classList.add('active');
    }

    onKeyUp() {
        this.newButton.classList.remove('active');
    }
}
