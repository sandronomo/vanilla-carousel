import Slider from './slider.js';

export default class App {
    constructor() {
        let sliderOptions =  {
            sliderContainer: '.slider',
            slidesToShow: [1,1],
            mobileResolution: 768,
            nextButton: '.next',
            prevButton: '.prev'
        }
            
        new Slider(sliderOptions);
    }
}

new App();