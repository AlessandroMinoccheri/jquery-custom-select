##jQuery Custom Select v.1.0.0
[![Build Status](https://api.travis-ci.org/AlessandroMinoccheri/jquery-custom-select.png)](https://travis-ci.org/AlessandroMinoccheri/jquery-custom-select)

#Introduction
jquery-custom-select is a plugin to customize your select with a span an image and a div.
It creates automatically an input type hidden with the value that you have selected

#Get started
To create a custom select you need an html structure like this:

```
<div id="my-select">
    <span class="select-span">first</span>
    <div class="select-options">
        <ul class="select-ul">
            <li>first</li>
            <li>second</li>
            <li>third</li>
        </ul>
    </div>
</div>
```

There is a div with an id that you have to use to call the jquery-custom-select plugin.<br>
There is a span where you put the default value of your select.<br>
There is an ul element with its class and li element where you need to put your option.

To instantiate your custom select you need to insert the call to the plugin inside ```$(document).ready()``` like this
```
$(document).ready(function() {
    $('#my-select').customSelect();    
});   
```

You can customize your select like this:
```
$('#my-select').customSelect({
    width:100,
    textAlign:"left",
	textIndent:"10",
	image:"select.jpg"
}) 
```

#Options

There are some options that you can apply to the plugin:<br>
- <b>width:</b> The width of your custom select (default: 100):<br>
- <b>height:</b> The height of your custom select (default: 19):<br>
- <b>image: </b> The image that you apply at the custom select (default: select.jpg inside the folder img/):<br>
- <b>textAlign:</b> The alignment of text (default: left):<br>
- <b>textIndent: </b> Text indentation of text (default: 10):<br>

#CSS

You can customize css property inside the file called ``` customselect.css ```

Inside this file are styled the elements inside the custom select


#License

The MIT License (MIT)

Copyright (c) 2014 Alessandro Minoccheri

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

