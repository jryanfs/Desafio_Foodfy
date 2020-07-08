const modalOverlay = document.querySelector('.modal_overlay');
const cards = document.querySelectorAll('.card')

for (let card of cards){
    card.addEventListener("click",function(){
      const imgId = card.getAttribute("id")
      const title = card.querySelector("h2").textContent;
      const autor = card.querySelector("p").textContent;


      modalOverlay.classList.add('active')
      modalOverlay.querySelector("img").src = `img/${imgId}.png`
      modalOverlay.querySelector("h2").innerHTML = title;
      modalOverlay.querySelector("p").innerHTML = autor;
     
      
    })
}


document.querySelector(".close_modal").addEventListener("click",function(){
  modalOverlay.classList.remove('active')
})

