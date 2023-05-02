import { layouts } from '../constants';
import { Keyboard } from './Keyboard';

export const App = () => {
    const keyboard = new Keyboard(layouts);
    keyboard.init();
};
