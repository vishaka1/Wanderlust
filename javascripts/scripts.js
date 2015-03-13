document.addEventListener('DOMContentLoaded', function () {
  var mapContainer = document.getElementById('map');
  mapContainer.style.height = window.innerHeight + 'px';

  L.mapbox.accessToken = 'pk.eyJ1IjoidmlzaGFrYTEiLCJhIjoiTDFRSi11OCJ9.tnC_iGYGs6iYlblFISEUow';

  drawMap();
});


function drawMap () {
  var canvasTiles = L.tileLayer.canvas();
  var map = L.mapbox.map('map', 'vishaka1.6efc031c').setView([1.3526, 103.7988,], 12);

  L.canvasOverlay().drawing(drawPoints).addTo(map);
}

function drawPoints (canvasOverlay, params) {
  var ctx = params.canvas.getContext('2d');
  var radius = 2;
  
  ctx.clearRect(0, 0, params.canvas.width, params.canvas.height);
  
  ctx.beginPath();
  points.map(function (d, i) {
    dot = canvasOverlay._map.latLngToContainerPoint( [d[0], d[1]] );
    // ctx.lineTo(dot.x, dot.y);


    ctx.arc(dot.x, dot.y, radius, 0, 2 * Math.PI, false);

  });
  // set line color
      ctx.strokeStyle = '#7c3801';
      ctx.stroke();
    }

     /* ctx.fillStyle = 'green';
      ctx.fill();
      ctx.lineWidth = 5;
      ctx.strokeStyle = '#003300';
      ctx.stroke();
      }*/