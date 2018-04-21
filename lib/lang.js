var LANG = function(language,json){
    this.json = json;
    this.lang = language;
}

LANG.prototype.get_lang = function(){
    language = this.json[this.lang];
    
    if (language === undefined){
	language = json[json['default']];
    }

    return language;
}

LANG.prototype.set_lang = function(document){
    language = this.get_lang();

    for (var prop in language) {
	if(!language.hasOwnProperty(prop)) continue;  
	
	var div = document.getElementById(prop);
	div.innerHTML = language[prop];
    }
}
