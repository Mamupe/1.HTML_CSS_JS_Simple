import './Home.css';

import { cleanPage } from '../../utils/cleanPage';

export const Home = () => {
  const app = document.querySelector('#app');
  cleanPage(app);
  app.innerHTML = `
    <div class="homeCont">
    <h1>COUNTRIES OF THE WORLD</h1>
    <h3>All information about the countries...</h3>
    </div>
    `;
};
