export const Button = (keyData, parent, cb) => {
    const newButton = document.createElement('button');
    newButton.textContent = keyData;
    newButton.setAttribute('data-content', keyData);
    newButton.classList.add('btn');
    newButton.addEventListener('mousedown', () => cb(keyData));
    parent.append(newButton);
};
