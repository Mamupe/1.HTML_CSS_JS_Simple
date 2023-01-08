import './style.css';

import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Countries } from './Pages/Countries/Countries';
import { Home } from './Pages/Home/Home';
import { linkPage } from './utils/linkPage';

const header = document.querySelector('header');
header.innerHTML = Header();
const footer = document.querySelector('footer');
footer.innerHTML = Footer();

Home();

linkPage('#homelink', Home);
linkPage('#countrieslink', Countries);
