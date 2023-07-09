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

  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  const ul = document.getElementById("dog-breeds");
  fetch(breedUrl)
  .then(resp=>resp.json())
  .then(data=>{
    data.message.forEach(elem=>{
      let list = document.createElement("li");
      list.textContent = elem;
      ul.appendChild(list)
    })
  })