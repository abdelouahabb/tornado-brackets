define(function (require, exports, module) {
	'use strict';

	var LanguageManager = brackets.getModule("language/LanguageManager");
	
	
	LanguageManager.defineLanguage("tornado", {
		name: "Tornado",
		mode: "tornado",
		fileExtensions: ["html", "htm", "css"],
		blockCommentStart: "{#",
		blockCommentEnd: "#}"
	});

});
