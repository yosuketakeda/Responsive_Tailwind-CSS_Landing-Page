// slider
new Splide( '#featured-slider', {
    //type : 'loop',
    height : 'auto',
    cover : true,
    perPage : 4,
    gap: 50,
    arrows : false,
    trimSpace: false,
    breakpoints: {
        1023:{
            perPage: 3,
            height: 'auto'
        },
        767: {
            perPage: 2,
            height: 'auto'
        },
        639: {
            perPage: 1,
            height: 'auto'
        }
    }
} ).mount();

new Splide( '#feedback-slider', {
    //type : 'loop',
    height : 'auto',
    cover : true,
    perPage : 3,
    gap: 30,
    arrows : false,
    breakpoints: {
        767: {
            perPage: 2,
            height: 'auto'
        },
        639: {
            perPage: 1,
            height: 'auto'
        },
        
    },
} ).mount();


// date picker
flatpickr('#startDate', {
    "minDate": new Date().fp_incr(1)
});

flatpickr('#endDate', {
    "minDate": new Date().fp_incr(1)
});
