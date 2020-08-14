class Slider {
    current = 0

    constructor(options) {
        const mobile = options.mobileResolution
        const index = 0

        if (window.innerWidth < mobile) {
            index = 1
        }

        console.log(mobile, window.innerWidth)

        const sliderContainer = document.querySelector(options.sliderContainer)
        const slidesToShow = options.slidesToShow[index]
        const margin = options.margin
        const nextButton = document.querySelector(options.nextButton)
        const prevButton = document.querySelector(options.prevButton)
        const tracks = document.querySelector('.tracks')
        const slide = document.querySelectorAll('.slide')
        const slidesArray = []
        const controlArray = []

        

        tracks.style.display = 'flex'
        tracks.style.position = 'absolute'
        tracks.style.top = '0'
        tracks.style.left = '0'
        tracks.style.transform = 'translateX(0)'
        tracks.style.transition = 'all 0.5s ease-in-out'

        const sliderWidth = tracks.firstChild.nextSibling.offsetWidth * slidesToShow + (margin * slidesToShow * 2)
        const sliderHeight = tracks.firstChild.nextSibling.offsetHeight

        const widthString = sliderWidth.toString() + 'px'
        const heightString = sliderHeight.toString() + 'px'

        const slideWidth = tracks.firstChild.nextSibling.offsetWidth

        slide.forEach(el => {
            el.style.margin = margin.toString() + 'px'
            slidesArray.push(slideWidth + margin * 2)
        })

        slidesArray.forEach((name, i) => {
            let item = i + 1
            controlArray.push(slidesArray[1] * item)

        })

        let totalSlides = controlArray.length / slidesToShow - 1

        console.log(totalSlides)



        sliderContainer.style.overflow = 'hidden'
        sliderContainer.style.width = widthString
        sliderContainer.style.height = heightString
        sliderContainer.style.position = 'relative'

        tracks.addEventListener('touchstart', (e) => {
            tracks.style.transition = 'initial'

        });

        let touchPosition = 0;

        tracks.addEventListener('touchmove', (e) => {
            touchPosition = e.touches[0].clientX;

            tracks.style.transform = `translateX(-${touchPosition.toString()}px)`
        });

        tracks.addEventListener('touchend', (e) => {
            tracks.style.transition = 'all 0.2s ease-in-out'
            let newCurrent = touchPosition

            let currentValue = controlArray.reduce((prev, curr) => {
                return (Math.abs(curr - newCurrent) < Math.abs(prev - newCurrent) ? curr : prev)
            });

            this.current = controlArray.indexOf(currentValue)

            console.log(this.current)

            this.goTo(tracks, totalSlides, controlArray)

        });


        nextButton.addEventListener('click', () => {
            tracks.style.transition = 'all 0.5s ease-in-out'
            this.next(this.current, totalSlides, tracks, controlArray)
        });

        prevButton.addEventListener('click', () => {
            tracks.style.transition = 'all 0.5s ease-in-out'
            this.prev(this.current, tracks, controlArray)
        });
    }

    next(current, total, tracks, controlArray) {
        console.log(current)

        if (current < total) {
            this.current++
            tracks.style.transform = `translateX(-${controlArray[this.current].toString()}px)`
        }
    }
    

    prev(current, tracks, controlArray) {
        console.log(current)
        if (current > 0) {
            this.current--
            tracks.style.transform = `translateX(-${controlArray[this.current].toString()}px)`
            console.log(current)
        }
    }

    goTo(tracks, total, controlArray) {
        console.log(total, this.current)
        if (this.current < total) {
            tracks.style.transform = `translateX(-${controlArray[this.current].toString()}px)`
        } else {
            tracks.style.transform = `translateX(-${controlArray[total].toString()}px)`
        }
    }
}
export default Slider;