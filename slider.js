class Slider {

    constructor(options) {
        const sliderContainer = document.querySelector(options.sliderContainer)
        const slidesToShow = options.slidesToShow[0]
        const nextButton = document.querySelector(options.nextButton)
        const prevButton = document.querySelector(options.prevButton)
        const tracks = document.querySelector('.tracks');


        
        tracks.style.display = 'flex'
        tracks.style.position = 'absolute'
        tracks.style.top = '0'
        tracks.style.left = '0'
        tracks.style.transition = 'all 0.5s ease-in-out'
        tracks.style.transform = 'translateX(0)'

        const sliderWidth = tracks.firstChild.nextSibling.offsetWidth * slidesToShow
        const sliderHeight = tracks.firstChild.nextSibling.offsetHeight

        const widthString =  sliderWidth.toString() + 'px'
        const heightString =  sliderHeight.toString() + 'px'

        sliderContainer.style.overflow = 'hidden'
        sliderContainer.style.width = widthString
        sliderContainer.style.height = heightString
        sliderContainer.style.position = 'relative'

        let positionSlider = 0

        nextButton.addEventListener('click', ()=>{
            positionSlider = positionSlider + sliderWidth
            console.log(positionSlider)
            tracks.style.transform = `translateX(-${positionSlider.toString()}px)`
            positionSlider = positionSlider
        });

        
        prevButton.addEventListener('click', ()=>{
            positionSlider = positionSlider - sliderWidth
            console.log(positionSlider)
            tracks.style.transform = `translateX(-${positionSlider.toString()}px)`
            positionSlider = positionSlider
        });

        console.log(sliderWidth )

    }
}
export default Slider;