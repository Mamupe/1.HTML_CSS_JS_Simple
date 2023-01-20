import './Countries.css';

import { CountryGallery } from '../../components/CountriGallery/CountryGalery';
import { getData } from '../../service/service';
import { cleanPage } from '../../utils/cleanPage';
import { loading } from '../../utils/loading';

export const Countries = () => {
  const getCountries = async () => {
    const countries = await getData();
    console.log(Object.keys(countries[0].languages)[0]);
    let listaCountries = countries;
    listaCountries.sort((a, b) => {
      if (a.name.common > b.name.common) return 1;
      if (a.name.common < b.name.common) return -1;
      return 0;
    });
    printLoading();
    setTimeout(() => printCountries(listaCountries), 800);
  };
  const printLoading = () => {
    let loadingContainer = document.querySelector('.gallery');
    loadingContainer.innerHTML += loading();
  };

  const printCountries = (list) => {
    const countriesContainer = document.querySelector('.gallery');
    cleanPage(countriesContainer);
    for (const element of list) {
      countriesContainer.innerHTML += CountryGallery(element);
    }
  };
  const app = document.querySelector('#app');
  cleanPage(app);
  app.innerHTML += `<div class="gallery"></div>`;

  getCountries();
};
