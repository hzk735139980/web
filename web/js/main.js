// for every slide in carousel, copy the next slide's item in the slide.
// Do the same for the next, next item.
$('.multi-item-carousel .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
  
  if (next.next().length>0) {
    next.next().children(':first-child').clone().appendTo($(this));
  } else {
    $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
  }
});

function openNav() {
    document.getElementById("mySidenav").style.width = "210px";
    document.getElementById("main").style.marginLeft = "210px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";


}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";

}

$('.targetDiv').hide();
$('#div1').show();

$('.travelerlink').click(function () {
    $('.targetDiv').hide();
    $('#div' + $(this).attr('target')).show();
});

 $('.disabled').click(function(e){
     e.preventDefault();
})