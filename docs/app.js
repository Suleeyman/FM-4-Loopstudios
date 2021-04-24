const toggleOpen = document.querySelector('.toggle')
const toggleClose = document.querySelector('.toggle-close')
const mobileNav = document.querySelector('.mobile-nav')

console.log(toggleOpen, toggleClose);

toggleOpen.addEventListener('click', () => {
    mobileNav.classList.add('is-open')
})

toggleClose.addEventListener('click', () => {
    mobileNav.classList.remove('is-open')
})