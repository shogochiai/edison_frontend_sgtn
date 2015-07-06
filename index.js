(function(){

  var milkcocoa = new MilkCocoa("");
var ds_axl = dataStore("axl");
var ds_gyl = dataStore("gyl");

ds_axl.stream().sort('asc').next(function(err, res){ 
  res.map(function(data){
    document.getElementById("axl").appendChild("<p>x:"+data.value.x+", y:"+data.value.y+", z:"+data.value.z+"</p>");
  });
})

ds_gyl.stream().sort('asc').next(function(err, res){ 
  res.map(function(data){
    document.getElementById("gyl").appendChild("<p>x:"+data.value.x+", y:"+data.value.y+", z:"+data.value.z+"</p>");
  });
})

ds_axl.on("push", function(data){
  document.getElementById("axl").appendChild("<p>x:"+data.value.x+", y:"+data.value.y+", z:"+data.value.z+"</p>");
});

ds_gyl.on("push", function(data){
  document.getElementById("gyl").appendChild("<p>x:"+data.value.x+", y:"+data.value.y+", z:"+data.value.z+"</p>");
});

}());
