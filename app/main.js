console.log('Hello from Webpack test thingy');

var PIXI = require('pixi.js')
import Rectangle from './Rectangle'
// console.log(PIXI)

// var app = new PIXI.Application(800, 600, {backgroundColor : 0x1099bb});
// document.body.appendChild(app.view);

// // create a new Sprite from an image path
// var bunny = PIXI.Sprite.fromImage('assets/bunny.png')

// // center the sprite's anchor point
// bunny.anchor.set(0.5);

// // move the sprite to the center of the screen
// bunny.x = app.renderer.width / 2;
// bunny.y = app.renderer.height / 2;

// app.stage.addChild(bunny);

// // Listen for animate update
// app.ticker.add(function(delta) {
//     // just for fun, let's rotate mr rabbit a little
//     // delta is 1 if running at 100% performance
//     // creates frame-independent tranformation
//     bunny.rotation += 0.1 * delta;
// });

var app = new PIXI.Application();
document.body.appendChild(app.view);

// Create background image
var background = PIXI.Sprite.fromImage("assets/bkg-grass.jpg");
background.width = app.renderer.width;
background.height = app.renderer.height;
app.stage.addChild(background);

// Stop application wait for load to finish
app.stop();

PIXI.loader.add('shader', 'assets/shader.frag')
    .load(onLoaded);

var filter;

// Handle the load completed
function onLoaded (loader,res) {

    // Create the new filter, arguments: (vertexShader, framentSource)
    filter = new PIXI.Filter(null, res.shader.data);

    // Add the filter
    background.filters = [filter];

    // Resume application update
    app.start();

    var hmm = new Rectangle(4,6);
    let hmm2 = 5;
    console.log('onLoaded stuff hot 4');

}


// if(module.hot) {
// 	module.hot.accept("./main.js", function() {
// 		console.log('module hot accept');
// 	});
// }

if(module.hot) {
	module.hot.accept(function(err) {
		console.log("hot relaod!!");
		if(err) {
			console.error("Cannot apply hot update", err);
		}
	});
}



// Animate the filter
app.ticker.add(function(delta) {
    filter.uniforms.customUniform += 0.04 * delta;
});




