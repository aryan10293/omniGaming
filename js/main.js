const hamMenu = document.querySelector('.ham-menu')
const offScreenMenu = document.querySelector('.off-screen-menu')
const mobile = document.getElementsByClassName('mobile')
hamMenu.addEventListener('click', () => {
    console.log('hey does this work')
    hamMenu.classList.toggle('active')
    offScreenMenu.classList.toggle('active')
})

document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector("video");
  if (video) {
    video.play().catch((err) => {
      console.error("Autoplay blocked:", err);
    });
  }
});
mobile.forEach(x => {
  x.addEventListener('click', () => {
    const card = btn.closest('.card-2')
    card.classList.toggle('ative')
  })
})