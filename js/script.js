 // Menu Toggle Script //
$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
  });

 // Menu Toggle Script //
$("#nav-menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
  });

// Hail Delete, Activate Nav Script //
$("#closer").click(function() {
$("#topcon").animate({
opacity: 0.15,
height: "toggle"
}, 300, function() {
// Animation complete.
});
  });
$("#closer").click(function() {
$("#nav").show({}, 300, function() {
// Animation complete.
});
  });

// Initiate Mixitup //

$(function(){
  $('#Container').mixItUp({
    load: {
      filter: '' 
    },
    controls: {
      toggleFilterButtons: true,
      toggleLogic: 'and'
    },
    callbacks: {
      onMixEnd: function(state){
        console.log(state.activeFilter)
      }
    }
  });
});