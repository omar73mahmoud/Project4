$(document).ready(function(){
    $("#loadinglayer").fadeOut(4000);
   

    })
    $(document).ready(function(){
        var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})
        

    })

let height=$("#about").offset().top
console.log(height);

$(window).scroll(function(){
  let  ws=$(window).scrollTop() ;
  if(ws>height){
      $("#arrowup").fadeIn(2000);
  }
  else{
    $("#arrowup").fadeOut(2000);
  }
})


$("#arrowup").on("click",function(){

    $("body,html").animate({scrollTop:0},3000)
})

$((a[href="#"])).Click(function(e){
 let link=   $(e.target).Attr(href);
let sectionoffset=$(link).offset().top;
$("body,html").animate({scrollTop:sectionoffset},5000)
})


