class Slider {

    constructor(options) {
        const sliderContainer = document.querySelector(options.sliderContainer)
        const slidesToShow = options.slidesToShow[0]
        const margin = options.margin
        const nextButton = document.querySelector(options.nextButton)
        const prevButton = document.querySelector(options.prevButton)
        const tracks = document.querySelector('.tracks')
        const slide = document.querySelectorAll('.slide')
        const slidesToScroll = options.slidesToScroll



        tracks.style.display = 'flex'
        tracks.style.position = 'absolute'
        tracks.style.top = '0'
        tracks.style.left = '0'
        tracks.style.transform = 'translateX(0)'
        tracks.style.transition = 'all 0.5s ease-in-out'



        slide.forEach(el => {
            el.style.margin = margin.toString() + 'px'
        })

        const sliderWidth = tracks.firstChild.nextSibling.offsetWidth * slidesToShow + (margin * slidesToShow * 2)
        const sliderHeight = tracks.firstChild.nextSibling.offsetHeight

        const widthString = sliderWidth.toString() + 'px'
        const heightString = sliderHeight.toString() + 'px'

        sliderContainer.style.overflow = 'hidden'
        sliderContainer.style.width = widthString
        sliderContainer.style.height = heightString
        sliderContainer.style.position = 'relative'


        const slideWidth = tracks.firstChild.nextSibling.offsetWidth

        let positionSlider = 0
        let touchPosition = 0

        console.log(tracks.offsetWidth - slideWidth * slidesToShow - (margin * slidesToShow * 2))

        tracks.addEventListener('touchstart', (e) => {
            tracks.style.transition = 'initial'

        });

        tracks.addEventListener('touchmove', (e) => {
            let touchPosition = e.touches[0].clientX;
            let maxTranslate = tracks.offsetWidth - slideWidth * slidesToShow - (margin * slidesToShow * 2)
            console.log(maxTranslate)
            if (touchPosition <= tracks.offsetWidth - slideWidth * slidesToShow - (margin * slidesToShow * 2)) {
                tracks.style.transform = `translateX(-${touchPosition.toString()}px)`
            } else {
                tracks.style.transform = `translateX(-${maxTranslate.toString()}px)`
            }
            console.log(touchPosition)
        });

        tracks.addEventListener('touchend', (e) => {

        });


        nextButton.addEventListener('click', () => {
            tracks.style.transition = 'all 0.5s ease-in-out'
            if (positionSlider !== tracks.offsetWidth - slideWidth * slidesToShow - (margin * slidesToShow * 2)) {
                positionSlider = positionSlider + slideWidth * slidesToScroll[0] + (margin * 2)
                tracks.style.transform = `translateX(-${positionSlider.toString()}px)`
                positionSlider = positionSlider
                console.log(positionSlider)

            }

        });

        prevButton.addEventListener('click', () => {
            tracks.style.transition = 'all 0.5s ease-in-out'
            positionSlider = positionSlider - slideWidth * slidesToScroll[0] - (margin * 2)
            tracks.style.transform = `translateX(-${positionSlider.toString()}px)`
            if (positionSlider <= 0) {
                positionSlider = 0
            } else {
                positionSlider = positionSlider
            }


        });



    }
}
export default Slider;