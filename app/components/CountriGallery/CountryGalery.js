import './CountryGallery.css';

export const CountryGallery = (element) => `
<div class="Country">
<h2>${element.name.common.toUpperCase()}</h2>
<img class="image" src=${element.flags.png} alt=${element.name.common}/>
<ul>
<li><strong>Continent:</strong> ${element.continents}</li>
<li><strong>Capital:</strong> ${element.capital}</li>
<li><strong>Population:</strong> ${element.population}</li>

<li><strong>Map: </strong><a  class="map" target="blank" href="${
  element.maps.googleMaps
}">Click to view</a></li>
</ul>
</div>
`;
