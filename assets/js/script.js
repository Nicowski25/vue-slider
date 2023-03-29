const { createApp } = Vue

createApp({
  data() {
    return {
      activeImage: 0,
      carousel: {
          images: [
            "./assets/img/01.webp",
            "./assets/img/01.webp",
            "./assets/img/02.webp",
            "./assets/img/03.webp",
            "./assets/img/04.webp",
            "./assets/img/05.webp"
            ],
        }
    }
    },
    methods: {
        next() {
            this.activeImage++
            if (this.activeImage == this.carousel.images.length) {
                this.activeImage = 0
            }    
        },
        prev() {
            this.activeImage--
            if (this.activeImage <= 0) {
                this.activeImage = this.carousel.images.length
            }   
        },
        changeImage(index) {
            this.activeImage = index
        }
    }
}).mount('#app')