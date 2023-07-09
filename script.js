const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const div = document.getElementById("dog-image-container")
    fetch(imgUrl)
  .then(response => response.json())
  .then(data => {
    data.message.forEach(url => {
      let img = document.createElement("img");
      img.setAttribute("src", `${url}`);
      div.appendChild(img)
    });
  })