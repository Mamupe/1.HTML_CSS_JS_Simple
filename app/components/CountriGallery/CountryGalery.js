import './CountryGallery.css';

export const CountryGallery = (element) => `
<div class="Country">
<h2>${element.name.common}</h2>
<img class="image" src=${element.flags.png} alt=${element.name.common}/>
</div>
`;
