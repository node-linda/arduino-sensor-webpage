var socket = io.connect('http://node-linda-base.herokuapp.com:80');
var linda = new Linda().connect(socket);

var ts = linda.tuplespace('delta');

linda.io.on('connect', function(){
  print('socket.io connect!!');

  ts.watch({type:"sensor"}, function(err, tuple){
    if(err) return;
    print(tuple.data);
  });

});

var print = function(msg){
  console.log(msg);
  if(typeof msg === 'object') msg = JSON.stringify(msg);
  $("#log").prepend( $("<li>").text(msg).fadeIn(400) );
};
