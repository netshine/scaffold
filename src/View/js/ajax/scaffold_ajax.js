//AJAX submission support
var http_obj = false;
var ajax_callback = null;
function create_http_obj(){var xmlHttpReq = false;if(window.XMLHttpRequest){xmlHttpReq=new XMLHttpRequest();}else if(window.ActiveXObject){try{xmlHttpReq=new ActiveXObject("Msxml2.XMLHTTP");}catch(e){try{xmlHttpReq=new ActiveXObject("Microsoft.XMLHTTP");}catch(e){xmlHttpReq = false;}}}return xmlHttpReq;}
function submit_ajax_request(url,parameters,callback_function){http_obj=create_http_obj();if(http_obj==false){alert('AJAX not supported - please turn on javascript or upgrade your browser!');}else{ajax_callback=callback_function;http_obj.open('POST',url,true);var http_timeout=setTimeout(function(){if(http_obj){http_obj.abort();}clearTimeout(http_timeout);ajax_callback('');},60000);http_obj.setRequestHeader("Content-type","application/x-www-form-urlencoded; charset=utf-8");http_obj.onreadystatechange=function(){clearTimeout(http_timeout);receive_ajax_response()};http_obj.send(parameters);}}
function receive_ajax_response(){if(ajax_callback!= null&&http_obj!=null&&http_obj.readyState>0){if(http_obj.readyState==4){ajax_callback(http_obj.responseText);}}else{ajax_callback('<span style="color:#f00;font-weight:bold;">Sorry, an error occurred - please refresh the page and try again.</span>');}}

function getFormValues(form_id){if (typeof(form_id) == 'undefined' || form_id.length == 0) {form = document.getElementById('tinybox_window').getElementsByTagName('form')[0];if (form) {form_id = form.getAttribute('id');}}var values = [];var value_index = 0;var elements = document.forms[form_id].elements;for (i=0; i<elements.length; i++){if (elements[i].name.length > 0) {if (elements[i].type=='radio' || elements[i].type=='checkbox') {if (elements[i].checked) {values[value_index] = elements[i].name + '=' + (elements[i].value ? elements[i].value : '0');}} else {values[value_index] = elements[i].name + '=' + encodeURIComponent(elements[i].value);}value_index++;}}return values.join('&');}
function extract_and_execute_js(output_to_parse, output_is_elem_id){if (output_is_elem_id && document.getElementById(output_to_parse)) {output_to_parse = document.getElementById(output_to_parse).innerHTML;}if (typeof output_to_parse === 'undefined') {var output_to_parse = document.getElementsByTagName('html')[0].innerHTML;}if(output_to_parse != '') {var script = "";output_to_parse = output_to_parse.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi, function(){if (output_to_parse !== null) script += arguments[1] + '\n';return '';});if(script) {if (window.execScript) {window.execScript(script);} else {window.setTimeout(script, 0);}}}}

function showErrorMessage(content, container, duration){if(!duration){duration=5000;} var err_message=document.getElementById('error_message');if(!err_message){err_message=document.createElement('div');err_message.id='error_message';err_message.className='error-message';container.insertBefore(err_message,container.firstChild);};err_message.style.display='none';err_message.innerHTML=content;$("#error_message").fadeIn("slow",function(){});if(duration!=999999){setTimeout(function(){$("#error_message").fadeOut("slow",function(){});},duration);}}