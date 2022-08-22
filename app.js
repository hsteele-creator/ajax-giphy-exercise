console.log("Let's get this party started!");

const searchInput = document.querySelector("#search");
const searchButton = document.querySelector("#btn");
const apiKey = "SY2Jg0uEFlmGuUep0VURHlwIyiiBVUsn";
const submitForm = document.querySelector("#search-form")
const body = document.querySelector("body");
const deleteButton = document.querySelector("#delete-btn");
const images = document.querySelectorAll("img");
const imageContainer = document.querySelector(".img-container");

async function searchForGif(searchValue) {
   const result =  await axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchValue}&api_key=${apiKey}`);
   console.log(result.data)

   console.log(searchValue);
   return result;
}

// submitForm.addEventListener("submit", function(e) {
//     e.preventDefault();
//     const search = searchInput.value;


//     const newImg = document.createElement("img");
//     newImg.setAttribute("url", searchForGif(search));
//     body.append(newImg);
// })

submitForm.addEventListener("submit", async function(e) {
    e.preventDefault();

    const randomNumber = Math.floor(Math.random() * 31);

    const searchValue = searchInput.value;
    const resultData = await searchForGif(searchValue);

    console.log(resultData);

    const newImg = document.createElement("img");
    console.log(resultData.data.data[0].url);
    newImg.setAttribute("src", resultData.data.data[randomNumber].images.downsized.url);
    newImg.style.width="200px";


    imageContainer.append(newImg);
    searchInput.value = "";
})

deleteButton.addEventListener("click", function() {
    imageContainer.innerHTML = "";
})