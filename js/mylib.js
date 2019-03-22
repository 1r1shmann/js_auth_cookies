function getGET(){
	var $_GET = {};
	document.location.search.replace(/\??(?:([^=]+)=([^&]*)&?)/g, function () {
		function decode(s) {
			return decodeURIComponent(s.split("+").join(" "));
		}
		$_GET[decode(arguments[1])] = decode(arguments[2]);
	});
	return ($_GET);
}
function setCookie (name, value, expires, path, domain, secure) {
	  document.cookie = name + "=" + escape(value) +
		((expires) ? "; expires=" + expires : "") +
		((path) ? "; path=" + path : "") +
		((domain) ? "; domain=" + domain : "") +
		((secure) ? "; secure" : "");
}
function getCookie(name) {
	var cookie = " " + document.cookie;
	var search = " " + name + "=";
	var setStr = null;
	var offset = 0;
	var end = 0;
	if (cookie.length > 0) {
		offset = cookie.indexOf(search);
		if (offset != -1) {
			offset += search.length;
			end = cookie.indexOf(";", offset)
			if (end == -1) {
				end = cookie.length;
			}
			setStr = unescape(cookie.substring(offset, end));
		}
	}
	return(setStr);
}
function deleteCookie(name) {
  setCookie(name, "", {
    expires: -100
  })
}
function print_r(arr, level) {
	var print_red_text = "";
	if(!level) level = 0;
	var level_padding = "";
	for(var j=0; j<level+1; j++) level_padding += "    ";
	if(typeof(arr) == 'object') {
		for(var item in arr) {
			var value = arr[item];
			if(typeof(value) == 'object') {
				print_red_text += level_padding + "'" + item + "' :\n";
				print_red_text += print_r(value,level+1);
		} 
			else 
				print_red_text += level_padding + "'" + item + "' => \"" + value + "\"\n";
		}
	} 

	else  print_red_text = "===>"+arr+"<===("+typeof(arr)+")";
	return print_red_text;
}