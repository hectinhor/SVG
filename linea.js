// codigo javascript

window.onload = function()
{
		//alert("si carga")
var dibujar = SVG('caja').size("100%",300);
var line=[[0,250],[400,250]]

var posicion = [[100,0], [100, 200], [120, 200], [120, 150] , [240, 150] , [240,200],[260,200], [260, 0] , 
                [240,0], [240, 120] , [120,120], [120, 0],[100, 0]];                 //letra H

var posDestino = [[100, 0],[100, 200],[200, 200],[200, 165],[180, 165],[180, 180],
                  [120, 180],[120, 20],[180,20 ],[180,40],[200,40],                   //letra C
                  [200,0],[100,0]];
var continua = dibujar.polyline(posicion).fill( color ="yellow").stroke({width : 6, color: '#000999'});
var otro= false;
nom_div("newline").addEventListener('click', function(event)
	{
		if(!otro)
		{
			continua.animate(1000).plot(posDestino);
		}
		else
		{
			continua.animate(1000).plot(posicion);
		}
		otro = !otro;
	});

function nom_div(div)
	{
		return document.getElementById(div);
	}
}
