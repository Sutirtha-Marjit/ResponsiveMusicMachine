function Rid(ridConfigObject) {

	var instance = this;
	this.config = ridConfigObject;

	var generateAudioElement = function () {
		var audioEl = document.createElement('AUDIO');
		var sourceElement = document.createElement('SOURCE');
		audioEl.appendChild(sourceElement);
		audioEl.id = instance.config.name;
		audioEl.className = "hiddenAudioObj";
		instance.config.wrapperObject.appendChild(audioEl);
		sourceElement.setAttribute("src", instance.config.src);
        instance.audioEl=audioEl;
	};
    
    var setRidGraphics = function(){
      instance.rid =  instance.config.rid;
      instance.rid.addEventListener('mousedown',function(){          
          instance.audioEl.play();
      });
      
      instance.rid.addEventListener('mouseup',function(){          
          instance.audioEl.pause();
      });
    };

	this.play = function () {};

	this.deactivate = function () {};

	this.activate = function () {};

	var init = function () {
		console.log("Rid initiated");
		generateAudioElement();
        setRidGraphics();
	};

	init();
}