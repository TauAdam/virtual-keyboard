export class Button {
    constructor(keyData) {
        this.keyData = keyData;
        this.element = document.createElement('button');
        this.element.setAttribute('type', 'button');
        this.element.classList.add('key');
        this.setKeyData(keyData);
    }

    setKeyData(keyData) {
        this.keyData = keyData;
        this.element.textContent = keyData.symbol;
        this.element.dataset.code = keyData.code;
    }

    setActive(active) {
        if (active) {
            this.element.classList.add('active');
        } else {
            this.element.classList.remove('active');
        }
    }

    render() {
        return this.element;
    }
}
