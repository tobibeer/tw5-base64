/*\
title: $:/plugins/tobibeer/base64/filter.js
type: application/javascript
module-type: filteroperator

A filter to encode and decode base64

@preserve
\*/

(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

/*
The base64 encoding and decoding filter function...
*/
exports.base64 = function(source,operator,options) {
	var
		// The text to operate on
		text = '',
		// Whether to decode or not
		decode = operator.suffix == "decode";
	// Return errors
	try {
	// Operand specified?
	if(operator.operand) {
		// Work with that
		text = operator.operand;
	// No operand given?
	} else {
		// Iterate input titles
		source(function(tiddler,title) {
			// Concatenate
			text += title;
		});
	}
	// Return
	text =
		// Decode?
		decode ?
		// Decode input titles as base64
		atob(text) :
		// Encode input titles as base64
		btoa(text);
	// On error...
	} catch(e) {
		return ["Error in base64 filter trying to " + (decode?"de":"en") + "code'" + text + "':\n" + e];
	}
	// Return filter text
	return [text];
};

})();