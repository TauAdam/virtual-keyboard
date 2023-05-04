import { boardLayout } from '../constants';
import { Keyboard } from './Keyboard';

export const App = () => {
    const keyboard = new Keyboard(boardLayout);
    keyboard.start();
};
