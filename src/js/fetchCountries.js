const BASE_URL = 'https://restcountries.eu/rest/v2';

function fetchCountryByName(countryName) {
    return fetch(`${BASE_URL}/name/${countryName}`)
        .then(r => {
            if (!r.ok) {
                throw r;
            }
            return r.json();
        })
};

export default { fetchCountryByName };