
function init() {
		    canv = document.getElementById("3dview");
		    scene = new THREE.Scene();
// Camera
		    camera = new THREE.PerspectiveCamera( 70, canv.clientWidth / canv.clientHeight  , 1, 1000 );
		    camera.position.z = 50;
// Licht				
			var light = new THREE.AmbientLight( 0xffffff,1 );
			light.position.set (10,10,10);
			scene.add( light );
// Renderer
 		  	renderer = new THREE.WebGLRenderer();
			renderer.setPixelRatio( canv.clientWidth / canv.clientHeight );
			renderer.setSize( canv.clientWidth, canv.clientHeight );
			renderer.sortObjects = false;
			canv.appendChild( renderer.domElement );
			canv.appendChild(renderer.domElement);
// Controls
			control = new THREE.OrbitControls(camera,canv);
			window.addEventListener( 'resize', onWindowResize, false);
			
	//Clock dient der Aktualisierungsfrequenz des Renderers und der Controls (scrollen etc....)
	 	var clock = new THREE.Clock();
	 	var render = function() {
	 	var dt = clock.getDelta();
	 	    control.update(dt);
	 	    renderer.render(scene,camera);
	 	    requestAnimationFrame(render);
	 	  };
	 	  requestAnimationFrame(render);
	   
	 	  insert(scene);	 	

		} // -> init

	function onWindowResize() {
		camera.aspect =  canv.clientWidth / canv.clientHeight ;
		camera.updateProjectionMatrix();
		renderer.setSize( canv.clientWidth, canv.clientHeight );
		canv.appendChild( renderer.domElement );
		}

	function animate() {
		requestAnimationFrame( animate );
		//staendige Aenderungen wie zb Drehungen
		camera.updateProjectionMatrix();
		renderer.render( scene, camera );
		}
	
	function render (){
		renderer.render( scene, camera );
		}