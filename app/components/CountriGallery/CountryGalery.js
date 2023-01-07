
export const CountryGallery = (element) => `
<div class="Country">
<h2>${element.name.common}</h2>
<img src=${element.flags.png} alt=${element.name}/>
</div>
`;