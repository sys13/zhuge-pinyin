# Minify css from static/css and put output in static/minify/css
# For the most part, it's one line per css file that we want to minify
# If one css file imports another, the requirejs will minify them together to save space

node r.js -o cssIn=../css/add.css out=css/add.css optimizeCss=default
node r.js -o cssIn=../css/base.css out=css/base.css optimizeCss=default
node r.js -o cssIn=../css/changelists.css out=css/changelists.css optimizeCss=default
node r.js -o cssIn=../css/dashboard.css out=css/dashboard.css optimizeCss=default
node r.js -o cssIn=../css/forms.css out=css/forms.css optimizeCss=default
node r.js -o cssIn=../css/ie.css out=css/ie.css optimizeCss=default
node r.js -o cssIn=../css/jquery-ui.css out=css/jquery-ui.css optimizeCss=default
node r.js -o cssIn=../css/login.css out=css/login.css optimizeCss=default
node r.js -o cssIn=../css/mainLogin.css out=css/mainLogin.css optimizeCss=default
node r.js -o cssIn=../css/question-and-page.css out=css/question-and-page.css optimizeCss=default
node r.js -o cssIn=../css/rtl.css out=css/rtl.css optimizeCss=default
node r.js -o cssIn=../css/search.css out=css/search.css optimizeCss=default
node r.js -o cssIn=../css/style.css out=css/style.css optimizeCss=default
#	forms.css imports widgets.css (wigets.css is included in forms.css' minification), 
#	so maybe we can exclude widgets.css
node r.js -o cssIn=../css/widgets.css out=css/widgets.css optimizeCss=default
