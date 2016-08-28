$(document).on('ready',function(){
	$(".center").slick({
		dots: true,
		arrows: true,
		infinite: true,
		centerMode:true,

		centerPadding:'290px',
		slidesToshow: 3,
		slidesToScroll: 1,
		autoplay:true,
        autoplaySpeed: 5000
		// responsive:[
		// 	{
		// 		breakpoint: 1170,
		// 		settings:{
		// 			arrows: false,
		// 			centerMode: true,
		// 			centerPadding: '60px',
		// 			slidesToshow:3,
		// 			slidesToScroll: 1
		// 		}
		// 	},
		// 	{
		// 		breakpoint: 970,
		// 		settings:{
		// 			arrows: false,
		// 			centerMode: true,
		// 			centerPadding: '40px',
		// 			slidesToshow:2,
		// 			slidesToScroll: 1	
		// 	},
		// 	{
		// 		breakpoint: 480,
		// 		settings:{
		// 			arrows: false,
		// 			centerMode: true,
		// 			centerPadding: '40px',
		// 			slidesToshow:1,
		// 			slidesToScroll: 1	
		// 	}
		// ]
	});
});

// $(document).ready(function(){
//     $('[data-toggle="tooltip"]').tooltip();
// });


function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}