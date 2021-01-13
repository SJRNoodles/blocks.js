# blocks.js
lightweight block-based visual scripting
## easily moddable
modding is almost as easy as pie as long as you know javascript
## no need for compilers
no compilers needed for blocks.js! you can edit right from its source
## lightweight
pretty small in file size so it wont take up all of your computer space

### try it!
https://sjrnoodles.github.io/blocks.js/playground/try.html

# documentation

## add in blocks.js
heres how to add in blocks.js to your website

### getting files
download respitory via the download button or if you wanna use node js console:
```bash
npm install https://github.com/SJRNoodles/blocks.js.git
```

### add css to the html page you want in

```html
<link href="blocks.css" rel="stylesheet" type="text/css" />
```
### put script in with css
```html
<script src="blocks.js"></script>
```

## building the editor (HTML)
### block view

```html
<div id="bjs_view"></div>
```

this will show blocks
### block controls
```html
<p id="bjsinny_log">
    <button onclick="addcode('log(variable);','alert');">log</button>
    </p>
```
this is code to add the block in! you can change the function or code via the first argument, and the style with the second argument.

#### variable controls
```html
variable making
    <br>
    <textarea id="bjsinput_name"></textarea>
    <textarea id="bjsinput_value"></textarea><button onclick="value_set();">set value</button>
    <br>
    innys and stuff
    <br>
    <textarea id="bjsinner"></textarea>
    <button onclick='inner_set(evalname,"inny_log");'>set inner</button>
    <br>
```
simple thingy for making variables and which variables can go in the blocks. you can fancy up this if you'd like

#### run button 
```html
    <button onclick="run();">run</button>
```
this will run the code!

# adding new blocks
edit blocks.js and go to here:
```javascript
// custom block functions
function log(in_){
  alert(in_)
}
```

under this function you can add in a function
now lets go to your editor html
```html
<p id="bjs_yourdivhere">
    <button onclick="addcode('YOURFUNCTION(variable);','YOURTHEME');">YOURBUTTOMTHEME</button>
    </p>
```

## making your new block functionable with variables
remember your block's function name and goto function "innerset" in blocks.js and paste this with your block function's name and type on it as well as its div and button text as well too
```javascript
document.getElementById("bjs_YOURDIVID").innerHTML = " <button onclick='addcode(" + '"YOURFUNCTION(' + evalname + ');","YOURTHEME"' + ");'>BUTTON TEXT</button>";
```
if done right than your block can do custom variables!

## custom block colors
goto blocks.css and add a new div id with name "blocks_" and than the theme you chose for your block
 ```css
 #blocks_YOURTHEME{
  background-color: #anycolor;
 
}
 ```
 the theme will be added on what ever block contains the theme
 ```javascript
 <button onclick="addcode('yourfunction(variable);','YOURTHEME');">yourbutton</button>
 ```

