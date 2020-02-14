$(document).ready(function(){
    // display search bar
    $(".search-button").click(function(){
        $(".search-input").toggle();
        $(".search-input").toggleClass("search-active");
        // shift main content
        $('main').toggleClass('shift-main');
    });

    // overlay page on create post
    $(".post-text").click(function(){
        $(".overlay").toggleClass("overlay-active");
        $(".post-share").toggleClass("post-share-active");
    });

    $('#textValue').bind('input propertychange',function(){
        var text = $('textarea#textValue').val();
        if(text.length > 0){
        $('#sharebtn').prop('disabled',false);
        }
        else{
            $('#sharebtn').prop('disabled',true); 
        }

    }); 

    // remove overlay when click on screen 
    $(".overlay").click(function(){

        $(".overlay").removeClass("overlay-active");
        $(".post-share").removeClass("post-share-active");
    });
});

    