import Slider from './slider.js';

export default class App {
    constructor() {
        let sliderOptions =  {
            sliderContainer: '.slider',
            margin: 10,
            slidesToShow: [2,1],
            mobileResolution: 768,
            nextButton: '.next',
            prevButton: '.prev'
        }
            
        new Slider(sliderOptions);
    }
}

new App();