export const getData = async (param) => {
    try {
      const data = await fetch(`https://restcountries.com/v3.1/all`);
      const dataJSON = await data.json();
      return dataJSON;
    } catch (error) {
      console.log("Error:", error);
    }
  };
  
