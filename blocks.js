// important variables
var code = "";
var variable = "";
var codeview = "";
var inny = "";
var evalvar = "";
var evalname = "";
let codearray1 = [""];
let codearray2 = [""];

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
function value_set2(){
  var user_string_name = document.getElementById
  ('bjsinput_name2').value;
  variable = document.getElementById('bjsinput_value2').value;
  evalvar = user_string_name + " = " + variable + ";";
  console.log(evalvar);
  addcode(evalvar,'var');
  
}

function inner_set(varia,div){
  evalname = document.getElementById("bjsinner").value;
  console.log(evalname);
  inny = varia;
  console.log(div);
  
  document.getElementById("bjsinny_log").innerHTML = " <button onclick='addcode(" + '"log(' + evalname + ');","alert"' + ");'>log</button>";
  document.getElementById("bjsif").innerHTML = " <button onclick='addcode(" + '"if(' + evalname + '){","if"' + ");'>if statement</button>";
  document.getElementById("bjsfunction").innerHTML = " <button onclick='addcode(" + '"function ' + evalname + '(){","block"' + ");'>add function</button>" + "<button onclick='addcode(" + '"' + evalname + "();" + '"' + "," + '"' + "block" + '"' + ");'>call function</button>";
 
  console.log(document.getElementById("bjsinny_log").innerHTML);
 
}

function addcode(input,type){
var viewin = "<div class='blocksjs' id='blocks_" + type + "'>" + input + "</div>";
code = code + input;

codeview = codeview + viewin;
  codearray1.push(code);
  codearray2.push(codeview);
document.getElementById(blockstarget).innerHTML = codeview;
console.log(code);
}

function undocode(){
  if(!(code=="")){
    codearray1.pop();
  codearray2.pop();
  code = codearray1[codearray1.length - 1]
  codeview = codearray2[codearray2.length - 1]
  document.getElementById(blockstarget).innerHTML = codeview;
  }
  
}

function run(){
  eval(code);
}
