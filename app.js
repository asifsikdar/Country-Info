fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => showData(data))


const showData = countries => {
    const div = document.getElementById('countries');
    countries.forEach(all => {
     const h3 = document.createElement('h3');
        h3.className = "items";

        const countryInfo = `
         <h3>${all.name}</h3>
         <p>${all.capital}</p>
         <button onClick="countryDetailsInfo('${all.name}')">Details</button>
        
        `
        h3.innerHTML  = countryInfo;
        div.appendChild(h3);
    });
    // for (let i = 0; i < countries.length; i++) {
    //     const all = countries[i];
    //     const h3 = document.createElement('h3');
    //     h3.className = "items";

    //     const countryInfo = `
    //      <h3>${all.name}</h3>
    //      <p>${all.capital}</p>
    //      <button>Details</button>
        
    //     `
    //     h3.innerHTML  = countryInfo;
    //     div.appendChild(h3);
        
        
    // }
}

const countryDetailsInfo = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
        .then(res => res.json())
    .then(data => detailsInfo(data[0]))

}

const detailsInfo = all => {
    const infoId = document.getElementById('info');
    infoId.className = "info-items";
     infoId.innerHTML = `
     <h3>Country:${all.name}</h3>
     <h4>Capital:${all.capital}</h4>
     <p>Region:${all.region}</p>
     <p>Population:${all.population}</p>
     <img src="${all.flag}">

    `
    
}
