// const mainLinks = document.querySelector('.main-links')
// const button = document.querySelector('.close-btn')
// const links = document.querySelector('.links')

// button.addEventListener('click', function () {
//   mainLinks.classList.toggle('show-links')
//   button.classList.remove('close-btn')
// })

const appendList = document.querySelector('.append-list')
const hideList = document.querySelector('.hide-list')
const closeBtn = document.querySelector('.close-btn')


closeBtn.addEventListener('click', function () {
  setTimeout(() => {
    hideList.classList.toggle('hide-list')
  }, 2000)

  console.log(appendList)
})

// Aside
// const containerItems = document.querySelector('.container')
// const showcase = document.querySelector('.showcase')
const aside = document.querySelector('.aside')
const containerBtn = document.querySelector('.container-btn')

containerBtn.addEventListener('click', () => {
  aside.classList.toggle('aside-items')
  console.log(showcase)
})