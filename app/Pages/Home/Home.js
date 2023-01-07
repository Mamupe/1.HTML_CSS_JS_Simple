import { cleanPage } from "../../utils/cleanPage";

export const Home = () => {
    const app = document.querySelector("#app");
    cleanPage(app);
    app.innerHTML = 
    `
    <div>home</div>
    `;
};