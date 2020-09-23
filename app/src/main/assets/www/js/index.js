/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
 
 function html(){
	 document.getElementById("editorHTML").style.display = "block";
	 document.getElementById("editorCSS").style.display = "none";
	 document.getElementById("editorJS").style.display = "none";
	 document.getElementById("result").style.display = "none";
	 
	 document.getElementById("tohtml").className = "active";
	 document.getElementById("tocss").className = "btn-switch";
	 document.getElementById("tojs").className = "btn-switch";
 }
 
 function css(){
	 document.getElementById("editorHTML").style.display = "none";
	 document.getElementById("editorCSS").style.display = "block";
	 document.getElementById("editorJS").style.display = "none";
	 document.getElementById("result").style.display = "none";
	 
	 document.getElementById("tohtml").className = "btn-switch";
	 document.getElementById("tocss").className = "active";
	 document.getElementById("tojs").className = "btn-switch";
 }
 
 function js(){
	 document.getElementById("editorHTML").style.display = "none";
	 document.getElementById("editorCSS").style.display = "none";
	 document.getElementById("editorJS").style.display = "block";
	 document.getElementById("result").style.display = "none";
	 
	 document.getElementById("tohtml").className = "btn-switch";
	 document.getElementById("tocss").className = "btn-switch";
	 document.getElementById("tojs").className = "active";
 }
 
 function preview(){
	 document.getElementById("editorHTML").style.display = "none";
	 document.getElementById("editorCSS").style.display = "none";
	 document.getElementById("editorJS").style.display = "none";
	 document.getElementById("result").style.display = "block";
	 
	 document.getElementById("tohtml").className = "btn-switch";
	 document.getElementById("tocss").className = "btn-switch";
	 document.getElementById("tojs").className = "btn-switch";
 }
 
 function about(){
	 alert("Halo :v");
 }
 
 function update(){
	 var res = document.getElementById("result").contentWindow.document;
	 res.open();
	 res.write(editorh.getValue());
	 res.write("<style>" + editorc.getValue() + "</style>");
	 res.write("<script>" + editorj.getValue() + "</script>");
	 res.close();
 }
 
 
var htmlReset = '<!DOCTYPE HTML>\n<html>\n\n    <head>\n        <meta charset = "UTF-8">\n        <title>Hello World</title>\n        <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width">\n    </head>\n\n    <body>\n        \n    </body>\n\n</html>';
var cssReset = 'body{\n    margin: 0;\n    padding: 0;\n}';

var setting = {
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true
};
 
var editorh = ace.edit("editorHTML");
editorh.setTheme("ace/theme/monokai");
editorh.session.setMode("ace/mode/html");
editorh.setOptions(setting);
editorh.setValue(htmlReset);
editorh.session.on('change', function(){
	update();
});

var editorc = ace.edit("editorCSS");
editorc.setTheme("ace/theme/monokai");
editorc.session.setMode("ace/mode/css");
editorc.setOptions(setting);
editorc.setValue(cssReset);
editorc.session.on('change', function(){
	update();
});

var editorj = ace.edit("editorJS");
editorj.setTheme("ace/theme/monokai");
editorj.session.setMode("ace/mode/javascript");
editorj.setOptions(setting);
editorj.setValue("");
editorj.session.on('change', function(){
	update();
});

update();
