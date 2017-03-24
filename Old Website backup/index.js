window.onload = fixpositions();

window.addEventListener('resize', fixpositions, false);

function fixpositions(){

	//Put the description under the town picture/header
	const theTownHeight = document.getElementById('oroville_grass').height;
    console.log(theTownHeight);
    const theTownDescription = document.getElementById('the_town_description');
    theTownDescription.style.top = (theTownHeight-150)+"px";

    //Put condos under the lake
    //Put About under condos
    //Put Contact us under About

}
$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".section").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      }
    });
  }).scroll(); //invoke scroll-handler on page-load
});

