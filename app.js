const apiUrl = `https://restcountries.com/v3.1/name/`


const search = document.querySelector(".Search")
const serachBtn = document.querySelector(".btn")
const result = document.querySelector(".result")
const countryDetails = document.querySelector(".details")

serachBtn.addEventListener("click", () =>{
 let name = document.getElementById("CountryName").value

//  console.log(name);
 fetch(`${apiUrl} ${name}`)
 .then((response) => response.json())
 .then((data) => {
    // console.log(data);
    let currency = Object.keys(data[0].currencies)
    // console.log(currency[0]);
    let language = Object.keys(data[0.].languages)
    // console.log(language[0]);

result.innerHTML = `
<div class="nigeria">
<img src="${data[0].flags.svg}" >
<h1>${name}</h1>
</div>
<div class="details">
<h2><strong>Capital:</strong>${data[0].capital[0]}</h2>
<h2><strong>Continent:</strong>${data[0].region}</h2>
<h2><strong>Population:</strong>${data[0].population}</h2>
<h2><strong>Currencies:</strong>${currency[0]}</h2>
<h2><strong>Language:</strong>${language[0]}</h2>

</div>`

 })
.catch(() =>{
    result.innerHTML = `
    <h3 class ="error"> Opps🤦‍♂️ Couldn't Get The Result</h3>`
})

})