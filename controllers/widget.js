var args = arguments[0] || {};

var freq = null;
var vol = null;
var sound = null;

exports.play = function(frequence,volume){
	//resetting
	if (sound !==null) {
		sound.stop();
		sound = null;
	};
	
	freq = frequence;
	vol = volume;
	sound = Titanium.Media.createSound({
	url: WPATH('sounds/'+freq+'.mp3'),
	preload: true,
	looping: true,
	volume: vol
	});
	
	sound.play();
	
};

exports.volume = function(volume){
	vol = volume;
	sound.volume = volume;
};

exports.getVolume = function(){
	//Ti.API.info('vol is:'+vol);
	
	return vol;
};

exports.pause = function(){
	sound.pause();
};

exports.stop = function(){
	sound.stop();
};
