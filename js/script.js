

 // Menu Toggle Script
 

  $("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
  });



// Hail Delete Script
  $("#closer").click(function() {
    $("#hail").animate({
opacity: 0.15,
left: "+=500",
height: "toggle"
}, 300, function() {
// Animation complete.
});
  });
