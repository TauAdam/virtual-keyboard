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
