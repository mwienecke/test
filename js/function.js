//function cube
function cube (x1, y1, z1, width1, height1, depth1, color1, visibility1, scene1){

	var x = x1;
	var y = y1;
	var z = z1;
			
	var width = width1;
	var height = height1;
	var depth = depth1;
	var groesse = new THREE.Vector3(width, height, depth);
	
	var color = color1;
	var visibility = visibility1;
	var scene = scene1;
	
	var draw = function () {
		// schleife ? 
		cube = new THREE.Mesh(new THREE.BoxGeometry( width, height, depth, 1, 1, 1), new THREE.MeshBasicMaterial({color: color}));			
		scene.add(cube);	
		}
			 
		} //-> draw
	
	var getPosition = function() {
		return position;
	}
	var getColor = function(){
		return color;
	}
	var getGroesse = function(){
		return groesse;
	}
	var getVisibility = function(){
		return visibility;
	}
	
	var setPosition = function(position){
		position = position;
	}
	var setGroesse = function(groesse){
		groesse = groesse;
	}
	var setColor = function(color){
		color = color;
	}
	var setVisibility = function(visibility){
		visibility = visibility;
	}
	
	function update(){
		}
	
	return {
		update: update,
		draw: draw,
		setPosition: setPosition,
		getPosition: getPosition,
		setGroesse: setGroesse,
		getGroesse: getGroesse,
		setColor: setColor,
		getColor: getColor,
		setVisibility: setVisibility,
		getVisibility: getVisibility
		}
} // -> cube

