'use strict';

$(function(){
  
    $("a[href^='#']").on("click", function(e){
    
        var target = $( $(this).attr("href") );
        
        console.log(target.offset());
        
        if(target.length){
            
            e.preventDefault();
            
            $("html").animate({
                scrollTop: target.offset().top - 40
            }, 1000);
            
        }
        
        
    });
    
});