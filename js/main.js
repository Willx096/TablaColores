// dibujar capa con class box con width height

var container = document.getElementById('container');

var color = ['00','33','66','99','cc','ff'];
//

//var color = ['00','11','22','33','44','55','66','77','88','99','aa','bb','cc','dd', 'ee','ff'];
// '#0000' +color[color.length-1]

var i=0;

while (i < color.length){
  var c = '#0000' + color[i];
  console.log(c);
  var box = '<div class="box" style="background:'+c+'"></div>';
  container.innerHTML = container.innerHTML + box;
  i++;

}
