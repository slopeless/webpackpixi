export default class Utils {
  
	constructor() {
	}

	static deepCopy(obj){
		return JSON.parse(JSON.stringify(obj));
	}

	static distance(a, b) {
		return Math.sqrt(dx*dx + dy*dy);
	}


	static pointSub(a, b){
		return new PIXI.Point(a.x-b.x, a.y-b.y);
	}

	static pointAdd(a, b){
		return new PIXI.Point(a.x+b.x, a.y+b.y);
	}

	static rotateAbout(pt,centre,amount){
		var offset = pointSub(pt,centre);

	}

	static rotate(pt, c, radians) {
    
        var cos = Math.cos(-radians);
        var sin = Math.sin(-radians);
        var nx = (cos * (pt.x - c.x)) + (sin * (pt.y - c.y)) + c.x;
        var ny = (cos * (pt.y - c.y)) - (sin * (pt.x - c.x)) + c.y;
	    return {x:nx, y:ny};
	}


	//angles: 0 is top, goes clockwise, in radians
	static generateArcPoints(centre, radius, angleStart, angleEnd, steps, points=null){
		if(points==null) points = [];

		var angleDiff = angleEnd- angleStart;
		var stepSize = (angleDiff) / steps;

		var target = {x:centre.x, y:centre.y};

		for(var i = 0; i < steps+1; i++){
		// for(i in 0...(steps+1)){
			var angle =  angleStart + (stepSize*i) - Math.PI/2;
			var offset = Utils.cartFromPolar(radius, angle);

			points.push(Utils.pointAdd(target, offset));
		}
		return points;
	}

	static cartFromPolar(radius, phi){
		return {x:radius * Math.cos( phi ), y:radius * Math.sin( phi )};
	}



}

