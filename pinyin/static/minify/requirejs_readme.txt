Installing node is the best way to use this.

Install node:
http://nodejs.org/
Add node to PATH in the environment variables


Right now r.js is already in static/minify/
    Otherwise, requirejs install instructions are here:
    http://requirejs.org/docs/optimization.html#download


Sample code (feel free to delete anything in minify/css, it gets generated):

cd C:\Python27\Prometheus\Inforep\static\minify
	(from this directory)

node r.js -o cssIn=../css/base.css out=css/base.css
	removes comments from base.css, puts the output in minify/css/base.css

node r.js -o cssIn=../css/base.css out=css/base.css optimizeCss=default
	runs with default settings, which removes whitespace as well



Here is a shell script to minify whatever css files we want:
C:\Python27\Prometheus\InfoRep\static\minify\minifyScript.sh
	When we want to minify our css files, we run that script.




requirejs should also be able to minify javascript for us


Useful tutorial (12 minutes):
http://net.tutsplus.com/tutorials/html-css-techniques/optimize-your-css-with-require-js/