/* @refresh reload */
import { render } from 'solid-js/web';
import '@kyndryl-design-system/shidoka-foundation/scss/root.scss';
import '@kyndryl-design-system/shidoka-foundation/scss/utility/typography.scss';
import '@kyndryl-design-system/shidoka-foundation/scss/utility/grid.scss';

import App from './App';

const root = document.getElementById('root');

render(() => <App />, root);
