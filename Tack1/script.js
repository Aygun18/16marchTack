var parentDiv = document.createElement("div");
parentDiv.className = "container";

var rowDiv = document.createElement("div");
rowDiv.classList.add("row");
parentDiv.appendChild(rowDiv);

var col1Div = document.createElement("div");
col1Div.className = "col-12";
rowDiv.appendChild(col1Div);

var bgDarkDiv1 = document.createElement("div");
bgDarkDiv1.className = "bg-dark";
bgDarkDiv1.classList.add("text-center");
bgDarkDiv1.classList.add("d-flex");
bgDarkDiv1.classList.add("justify-content-center");
bgDarkDiv1.classList.add("myClass1");
col1Div.appendChild(bgDarkDiv1);

var textNode = document.createTextNode("960x360px");
bgDarkDiv1.appendChild(textNode);

document.body.appendChild(parentDiv);
//------------------------------------------------------
var row2Div = document.createElement("div");
row2Div.classList.add("row");
parentDiv.appendChild(row2Div);

var col2Div = document.createElement("div");
col2Div.className = "col-4";
row2Div.appendChild(col2Div);

var bgDarkDiv2 = document.createElement("div");
bgDarkDiv2.className = "bg-dark";
bgDarkDiv2.classList.add("text-center");
bgDarkDiv2.classList.add("d-flex");
bgDarkDiv2.classList.add("justify-content-center");
bgDarkDiv2.classList.add("myClass2");
col2Div.appendChild(bgDarkDiv2);

var textNode = document.createTextNode("290x180px");
bgDarkDiv2.appendChild(textNode);

//-------------------------------------------------------
var col3Div = document.createElement("div");
col3Div.className = "col-4";
row2Div.appendChild(col3Div);

var bgDarkDiv3 = document.createElement("div");
bgDarkDiv3.className = "bg-dark";
bgDarkDiv3.classList.add("text-center");
bgDarkDiv3.classList.add("d-flex");
bgDarkDiv3.classList.add("justify-content-center");
bgDarkDiv3.classList.add("myClass3");
col3Div.appendChild(bgDarkDiv3);

var textNode = document.createTextNode("290x180px");
bgDarkDiv3.appendChild(textNode);

//------------------------------------------------------------
var col4Div = document.createElement("div");
col4Div.className = "col-4";
row2Div.appendChild(col4Div);

var bgDarkDiv4 = document.createElement("div");
bgDarkDiv4.className = "bg-dark";
bgDarkDiv4.classList.add("text-center");
bgDarkDiv4.classList.add("d-flex");
bgDarkDiv4.classList.add("justify-content-center");
bgDarkDiv4.classList.add("myClass4");
col4Div.appendChild(bgDarkDiv4);

var textNode = document.createTextNode("290x180px");
bgDarkDiv4.appendChild(textNode);

//--------------------------------------------------------------------

var row3Div = document.createElement("div");
row3Div.classList.add("row");
parentDiv.appendChild(row3Div);

var col5Div = document.createElement("div");
col5Div.className = "col-4";
row3Div.appendChild(col5Div);

var bgWhiteDiv1 = document.createElement("div");
bgWhiteDiv1.className = "bg-white";
bgWhiteDiv1.classList.add("d-flex");
bgWhiteDiv1.classList.add("flex-column");
bgWhiteDiv1.classList.add("myClass5");
col5Div.appendChild(bgWhiteDiv1);

var div1 = document.querySelector(".myClass5");
var span1 = document.createElement("span");
span1.textContent="İndonectetus facilis";
div1.appendChild(span1);

var paragraph1= document.createElement("p")
paragraph1.textContent= "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, provident."
div1.appendChild(paragraph1);

//-------------------------------------------------------------------

var col6Div = document.createElement("div");
col6Div.className = "col-4";
row3Div.appendChild(col6Div);

var bgWhiteDiv2 = document.createElement("div");
bgWhiteDiv2.className = "bg-white";
bgWhiteDiv2.classList.add("d-flex");
bgWhiteDiv2.classList.add("flex-column");
bgWhiteDiv2.classList.add("myClass6");
col6Div.appendChild(bgWhiteDiv2);

var div2 = document.querySelector(".myClass6");
var span2 = document.createElement("span");
span2.textContent="İndonectetus facilis";
div2.appendChild(span2);

var paragraph2= document.createElement("p")
paragraph2.textContent= "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, provident."
div2.appendChild(paragraph2);


//--------------------------------------------------------------------

var col7Div = document.createElement("div");
col7Div.className = "col-4";
row3Div.appendChild(col7Div);

var bgWhiteDiv3 = document.createElement("div");
bgWhiteDiv3.className = "bg-white";
bgWhiteDiv3.classList.add("d-flex");
bgWhiteDiv3.classList.add("flex-column");
bgWhiteDiv3.classList.add("myClass7");
col7Div.appendChild(bgWhiteDiv3);

var div3 = document.querySelector(".myClass7");
var span3 = document.createElement("span");
span3.textContent="İndonectetus facilis";
div3.appendChild(span3);

var paragraph3= document.createElement("p")
paragraph3.textContent= "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, provident."
div3.appendChild(paragraph3);

