class Carousel {
    constructor(something) {
    this.something = something
    this.leftBtn = this.something.querySelector('.left-button')
    this.rightBtn = this.something.querySelector('.right-button')
    const images = this.something.querySelectorAll('img')
    // images.forEach(element => element.setAttribute('data-'))
    this.leftBtn.addEventListener('click', () => {
        this.imgFunc()
    })

    
}
    imgFunc() {
        const images = this.something.querySelectorAll('img')
        // this.something.style.display = 'flex'
        // this.something.setAttribute('src', "./assets/carousel/mountains.jpeg")
        images[0].style.display = 'flex'   
    }

    displayImg() {

    }
    
}
// let tabs = document.querySelectorAll('.tab')
// tabs.forEach(element => new TabLink(element))
let carousel = document.querySelectorAll('.carousel')
carousel.forEach(element => new Carousel(element))

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
