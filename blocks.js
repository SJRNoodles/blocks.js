// important variables
var code = "";
var variable = "";
var codeview = "";
var inny = "";
var evalvar = "";
var evalname = "";

// sample variable
var hello = "hello world";

// settings
var blockstarget = 'bjs_view'; // change this to a div id


// custom block functions
function log(in_){
  alert(in_)
}

//blocks.js functions

function value_set(){
  var user_string_name = document.getElementById
  ('bjsinput_name').value;
  variable = document.getElementById('bjsinput_value').value;
  evalvar = "var " + user_string_name + " = " + variable + ";";
  console.log(evalvar);
  addcode(evalvar,'var');
  
}

function inner_set(varia,div){
  evalname = document.getElementById("bjsinner").value;
  console.log(evalname);
  inny = varia;
  console.log(div);
  
  document.getElementById("bjsinny_log").innerHTML = " <button onclick='addcode(" + '"log(' + evalname + ');","alert"' + ");'>log</button>";
  document.getElementById("bjsfunction").innerHTML = " <button onclick='addcode(" + '"function ' + evalname + '(){","block"' + ");'>add function</button>" + "<button onclick='addcode(" + '"' + evalname + "();" + '"' + "," + '"' + "block" + '"' + ");'>call function</button>";
 
  console.log(document.getElementById("bjsinny_log").innerHTML);
 
}

function addcode(input,type){
var viewin = "<div class='blocksjs' id='blocks_" + type + "'>" + input + "</div>";
code = code + input;

codeview = codeview + viewin;
document.getElementById(blockstarget).innerHTML = codeview;
console.log(code);
}

function run(){
  eval(code);
}
