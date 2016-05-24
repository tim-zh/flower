(function(window){
  window.Flower = function() {
    var canvas = document.getElementById("dislpay");

    window.onresize = function(event) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      renderer.resize(canvas.width, canvas.height);
    };
    window.onresize();
  };
}(window));
