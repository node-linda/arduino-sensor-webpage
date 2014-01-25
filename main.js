var socket = io.connect('http://node-linda-base.herokuapp.com:80');
var linda = new Linda().connect(socket);

var ts = linda.tuplespace('delta');

linda.io.on('connect', function(){
  console.log('connect!!');
  ts.watch({type:"sensor"}, function(err, tuple){
    if(err) return;
    print(JSON.stringify(tuple.data));
  });
});

var print = function(msg){
  console.log(msg);
  $("#log").prepend( $("<li>").text(msg).fadeIn(400) );
};
