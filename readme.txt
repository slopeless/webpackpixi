Demo project checking webpack and pixijs. 

The idea was to check that webpack and pixijs work together. 
And then to play around with pixijs fragment/vertex shaders


hot reloading, very basic bit is working:
npm run dev
this opens a browser window with the project being watched...




TODOs:
hot reloading?
html file generation
publicPath for the assets (so assets arent under 'build')
remove  '--content-base build/' from package.json and it to a config file? 

BROEKN for NOW...
Mimimal start:
terminal: npm start
browser: http://localhost:1234/



webpack stuff


cmd line run webpack:
./node_modules/.bin/webpack




//cmdline start server
// webpack-dev-server --inline --progress --port 1234
or 
npm start


kill server:
node tools/killServer.js


    "start": "webpack-dev-server --progress --colors --port 1234 --content-base build/",