'use strict';
(function(){
    function pageAnimation(){
        this._events();
    }
    
    pageAnimation.prototype._loadEvent = function(){
    $('body').css('opacity','0');
    $(document).ready(function(){
    $('body').animate({opacity: "1"},1400);
})};
    
    pageAnimation.prototype._events = function(){
        this._loadEvent();
    }
    
    new pageAnimation();
    
})();




