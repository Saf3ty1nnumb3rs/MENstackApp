const ClickController = {
    // Need to set if sttement to check for has class 'is-active' then do below if false
    
    
    
        hamburgerHelper: function(){
    
            if($('button.hamburger').hasClass('is-active')){
                
                $('.menu-overlay').removeClass('open');
                $('.contact-build').removeClass('closed');
                $('button.hamburger').removeClass('is-active');
                
    // Set else statement to perform the opposite of above - easy-peezy
                } else {
                    $('button.hamburger').addClass('is-active');
                    $('.menu-overlay').addClass('open');
                    $('.contact-build').addClass('closed');
    
                }
    
    },
    
    
    
    
    }



    window.onload = function () {
        $('.hamburger').on('click', ClickController.hamburgerHelper)
    }