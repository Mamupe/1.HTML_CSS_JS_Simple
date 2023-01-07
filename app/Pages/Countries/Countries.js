import { getData } from "../../service/service";
import { cleanPage } from "../../utils/cleanPage";
import { CountryGallery } from "../../components/CountriGallery/CountryGalery";


export const Countries = () => {
    const getCountries = async () => {
        const countries = await getData();
        console.log(countries);
       printCountries(countries);
      };
    
      const printCountries = (list) => {
        const countriesContainer = document.querySelector(".gallery");
        for (const element of list) {
            countriesContainer.innerHTML += CountryGallery(element)
        }
      }; 
    const app = document.querySelector("#app");
cleanPage(app);
app.innerHTML += `<div class="gallery"></div>`

getCountries();
}

