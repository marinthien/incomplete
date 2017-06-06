/*  Author:Hieu Thien Nguyen
 * 
 */

$(document).ready(function(){
   
    
       var addTime=-40;
    $(".show-case-img").children().each(function(j,obj){
        addTime+=30;
        
        console.log( $(this));
        
        console.log("rotateX(70deg) rotateY(0deg) rotateZ(-45deg) translateY("+addTime+"px) translateX(30px) scale(0.8)");
        $(this).css({
                position:"absolute",
                transform:"rotateX(70deg) rotateY(0deg) rotateZ(-30deg)translateZ("+addTime*1.5+"px) translateX("+addTime*1.5+"px) translateY("+addTime*-1+"px) scale(0.7)"
                
        });
        
    });
    if( $("#Company-Space").length>0)
    $("#Company-Space").whatSlider({
       width:"100%",
       //height:"300px",
       duration:7000,
       speed:800,
       sort:true,
       effect:"bar"
    });

$(window).bind('scroll', function() {
        if($(window).scrollTop() > 50)
        {
           $('#Site-Nav').css({  
            "z-index":300,
            position:'fixed'
            });
           
        }
        else
        {
             $('#Site-Nav').css({position:'relative',"z-index":100, top:0});
        }
       
     
    });

    
//    $(window).bind('scroll', function() {
//        if($(window).scrollTop() > 250)
//        {
//           $('#Site-Nav').css({  
//            "z-index":300,
//            position:'fixed'
//            });
//           
//        }
//        else
//        {
//             $('#Site-Nav').css({position:'relative',"z-index":100, top:0});
//        }
//       
//     
//    });
////function to slideMenuBar on resize
//$('.Btn-Menu').click(function() {    
//      //$('#shop-nav').slideToggle();  
//      console.log($('#shop-nav').is(':visible'));
//      if($('#shop-nav').is(':visible')===true)  
//      $('#shop-nav').css({
//          animation:"horizontalBarOut 1s linear",
//          opacity:0,
//          transition:"all 1s linear",
//          display:"none"
//      });
//      else
//      $('#shop-nav').css({
//          animation:"horizontalBarOut .8s reverse",
//          opacity:1,
//          display:"inline"
//      });
//      
//});
////animate the main navigation while loading
//
//var itemMenu=$("ul#shop-nav").children("li");
//$.each(itemMenu,function(i,obj){
//    //$(this).css('width','10%');
//   //$(this).css('animation','infinite-spinning 2s');
//   //$(this).css('-webkit-animation','infinite-spinning 2s');
//   // $(this).css('animation-iteration-count','infinite');
//    //$(this).css('-webkit-animation','infinite-spinning 2s infinite');
//    
//});


});




