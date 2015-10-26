# eal.widget.toneplayer
Titanium Alloy widget for playing tones in hearingtest

###Way to use:

* copy or clone the widget into our appcelerator project app/widgets folder. If you don't already have one then create it.
* add it to dependensies in your app/config.json
* Create the Alloy widget markup in your view
```
<Window class="container">
	<Widget src="eal.widget.toneplayer" id="tone"></Widget>
</Window>
```
#### OR
Create it directly in your controller like this:
```
$.tone = Alloy.createWidget('eal.widget.toneplayer');
```

####Method's
* play(frequence,volume)
```
/**
* Example:
* start playing a 500hz tone with volume of 0.9
*/
$.tone.play('500',0.9);
```
* volume(volume)
```
/**
* Example:
* sets volume to 0.5
*/
$.tone.volume(0.5);
```
* getVolume()
```
/**
* Example:
* Get the tone value
*/
var currentVolume = $.tone.getVolume();
```
* pause()
```
/**
* Example:
* pause the tone
*/
$.tone.pause();
```
* stop()
```
/**
* Example:
* stop playing the tone
*/
$.tone.stop();
```
##example code
```
$.tone = Alloy.createWidget('eal.widget.toneplayer');
$.button.addEventListener('click',function(e){
	$.tone.play('500',0.9);
	var interval = setInterval(function(){
		if($.tone.getVolume() < 0){
			clearInterval(interval);
		}
		$.tone.volume($.tone.getVolume() - 0.02);
	},100);
});
```

