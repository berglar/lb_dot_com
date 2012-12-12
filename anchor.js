    //anchor outline chunk when we scroll
    $(window).scroll(function(){
        //outline not anchored yet

        if ($('#anchorForOutline').css('position')=='relative'){
            if ($(window).scrollTop() > 
                ($('#preOutline').offset().top + $('#preOutline').height())){
                $('#anchorForOutline').css({
                position: 'fixed',
                top: '0px',
            });
                $('#wholeRightCol').css({
//                    overflow-y: 'none',
                });

            }
        }

        //outline anchored
        else if($('#anchorForOutline').css('position')=='fixed'){
            if ($(window).scrollTop() <                 
                ($('#preOutline').offset().top + $('#preOutline').height())){
                $('#anchorForOutline').css({
                    position: 'relative',
                });
                $('#wholeRightCol').css({
  //                  overflow-y: 'scroll',
                });

            }
        }     

    })
