# js_lang_gen

Sometimes I do have the problem changing a label in a homepage according to the language code of the system on a FANUC robot controller.

# Usage

To run this example you have to save the file as a server side include on the robot controller otherwise the ssi tag will not be performed.
If you do not use the ssi tag to get the language information you can use a different way like KCL or KAREL. SSI is the most performant way to get the variable information on HTML side. 

```
<!doctype html>
<html>
  <head>
    <title>small</title>
    <script type="text/javascript" src="./lib/lang.js"></script>
    <script type="text/javascript">
      var json = {
      	  "en":{
		"test1":"this is a test",
    		"test2":"this ist test 2"
  		},
  	   "de":{
		"test1":"Dies ist ein Test",
    		"test2":"Dies ist Test 2"
  		},
  	   "default":"en"
      };

     function load(){	  

	 var controller_lang = '<!-- #echo var="$LANGUAGE" -->'

	 if(controller_lang === 'Unknown Variable Name'){
	     controller_lang = 'kanji';
	 }
	     
	 l = new LANG(controller_lang.trim(),json);	  
	 l.set_lang(document)
     }
    </script>
  </head>
  <body onload="load();">
    <h1>Hello, World!</h1>
    
    <div id='test1'> </div>
    <div id='test2'> </div>
  </body>
</html>
```

1. the javascript function gets the language information of the robot controller.
2. If the language is unknown, then a default language is set.
3. hand the dictionary and the language information over to the language engine
4. The language engine performs searches in the html document the tags corresponding to the json key information for that language and set in the label or texts stored as values related to that label.

