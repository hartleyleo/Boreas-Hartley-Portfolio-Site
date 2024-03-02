import $ from 'jquery';

const landingAnimation = () => {

    $('.start-journey-button').hide();
    $('.1, .2, .3, .4, .5').hide()

    $('.1').fadeIn(1000, function() {
        
        $('.2').delay(300).fadeIn(1000, function() {

            $('.3').delay(300).fadeIn(1000, function() {

                $('.4').delay(200).fadeIn(1000, function() {

                    $('.5').delay(100).fadeIn(1000, function() {
                        $('.title').delay(1000).fadeOut(1000);
                        $('.start-journey-button').delay(2100).fadeIn(500);
                    });

                });

            });

        });
        
    });

}

export default landingAnimation;