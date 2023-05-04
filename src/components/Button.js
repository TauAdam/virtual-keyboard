export class Button {
    constructor(keyData, parent, cb) {
        this.handleKeyDown = cb;
        this.newButton = document.createElement('button');
        this.newButton.textContent = keyData;
        this.newButton.setAttribute('data-content', keyData);
        this.newButton.classList.add('btn');
        this.newButton.addEventListener('mousedown', () => cb(keyData));
        parent.append(this.newButton);
    }

    onKeyDown() {
        this.handleKeyDown(this.newButton.textContent);
    }
}
