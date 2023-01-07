import './style.css'
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer'
import { Home } from './Pages/Home/Home';
import { linkPage } from './utils/linkPage';
import { Countries } from './Pages/Countries/Countries';

const header = document.querySelector("header");
header.innerHTML = Header();
const footer = document.querySelector("footer");
footer.innerHTML = Footer();

Home();

linkPage("#homelink", Home);
linkPage("#countrieslink", Countries);