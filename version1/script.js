

$(document).ready(function(){
  var firstCount=0,secondCount=0,thirdCount=0,fourthCount=0;

$("#first").click(function(){
  $("#right").empty();
   $("#right").append('   <img src="img/1.jpg" class="img-responsive" alt="Notes" id="firstimg">');
   $("#firstimg").click(function(){
       $("#right").append('count='+firstCount);
       firstCount++;
});
});

$("#second").click(function(){
   $("#right").empty();
   $("#right").append('   <img src="img/2.png" class="img-responsive" alt="Notes" id="secimage">');
   $("#secimage").click(function(){
       $("#right").append('count='+secondCount);
       secondCount++;
});
});


$("#third").click(function(){
   $("#right").empty();
   $("#right").append('   <img src="img/3.jpg" class="img-responsive" alt="Notes" id="thiimage">');
   $("#thiimage").click(function(){
    $("#right").append('count='+thirdCount);
       thirdCount++;
});
});

$("#fourth").click(function(){
   $("#right").empty();
   $("#right").append('   <img src="img/4.jpg" class="img-responsive" alt="Notes" id="fouimage">');
   $("#fouimage").click(function(){
     $("#right").append('count='+fourthCount);
       fourthCount++;
});
});


});

