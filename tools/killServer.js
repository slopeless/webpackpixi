'use strict';

var shell = require('shelljs');

console.log('killing webpack servers... ');

var deleteFromGrepLine = function(line){
	var serverWords = line.split(' ');

	// console.log("line is: ",serverWords);

	var pid;		

	//can see this going wrong...
	//looking for 1st number in the line.....
	for (var i = 0; i <5 ; i++) {		
		pid = parseInt(serverWords[i]);
		console.log("try " + serverWords[i]);
		if(Number.isInteger(pid) ) break;
	}
	// console.log("number is: ",pid);

	if(Number.isInteger(pid) ){

		console.log("deleting: " +pid);
		shell.exec("kill -9 " + pid);
	}
	else console.log("oopsy. that didnt work!!!");
}

var child = shell.exec("ps aux | grep webpack-dev-server", {silent:true});
var lines  = child.stdout.split('\n');

for (var i = lines.length - 1; i >= 0; i--) {
	if(lines[i].indexOf("grep") == -1 && lines[i].length >0) deleteFromGrepLine(lines[i]);
}

console.log("done");
