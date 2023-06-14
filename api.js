
const search = document.getElementById("search");
let nameCountry = document.getElementById("name");
let flag = document.getElementById("flag");

let capital = document.getElementById("detailsCapital");
const continent = document.getElementById("detailsContinent");
const population = document.getElementById("detailsPopulation");
const currency = document.getElementById("detailsCurrency");
const border = document.getElementById("detailsBorder");
const Time = document.getElementById("detailsTime");


search.addEventListener('click', ()=> {
    const country = document.getElementById("inp").value;
    fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
    .then(res=>res.json())
    .then((data)=>{
        let countryDetails = document.getElementById("countryDetails");
        countryDetails.style.display='block'
        countryData = data[0]
        console.log(countryData);
        flag.src = countryData.flags.svg;
        nameCountry.innerHTML = countryData.name.official;
        detailsName.innerHTML = countryData.name.common;
        capital.innerHTML = countryData.capital;
        border.innerHTML = countryData.borders;
        continent.innerHTML = countryData.continents;
        currency.innerHTML = countryData.currencies[Object.keys(countryData.currencies)].name;
        population.innerHTML = countryData.population;
        Time.innerHTML = countryData.timezones;
    })
});
