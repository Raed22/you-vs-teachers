 $(document).ready(function(){
  
    $(window).keydown(function(event){
         if(event.keyCode==37) {

            moveleft();
          
        }
         if(event.keyCode==39) {
      
            moveright();
         }   
        
 });
 
  function moveleft() {
        
      var left = $("#character").position().left;
      
      var newposition = left -18;
      if(newposition<=0) {
          newposition=0
      }
    $('#character').css("left",newposition)    
    }
    
    
     function moveright() {
        var right = $("#character").position().left;
        var newposition = right +18;
      if(newposition>=window.innerWidth -$("#character").width()) {
          newposition=window.innerWidth -$("#character").width()
      }
        
         $('#character').css("left",newposition);
    }  


   var window_width = $( window ).width();
   var brian_width = 500px;
   
   var create_brian = function() {
    var properties = {
      top: 0,
      left: random(window_width - brian_width),
      position: 'absolute',
      width: brian_width
    };
    
   
});
 
