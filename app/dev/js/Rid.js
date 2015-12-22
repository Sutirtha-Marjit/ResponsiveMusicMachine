function Rid(ridConfigObject) {

	var instance = this;
	var active = true;
	this.config = ridConfigObject;

	var generateAudioElement = function () {
		var audioEl = document.createElement('AUDIO');
		var sourceElement = document.createElement('SOURCE');
		audioEl.appendChild(sourceElement);
		audioEl.id = instance.config.name;
		audioEl.className = "hiddenAudioObj";
		instance.config.wrapperObject.appendChild(audioEl);
		sourceElement.setAttribute("src", instance.config.src);
		instance.audioEl = audioEl;

	};

	var setRidGraphics = function () {
		instance.rid = instance.config.rid;
		instance.rid.addEventListener('click', function () {
			instance.play();
		});

	};

	this.play = function () {
		if (active) {
			instance.audioEl.pause();
			instance.audioEl.currentTime = 0;
			instance.audioEl.play();
			return {
				result : instance.config.src + " played"
			};
		}

		return {
			result : "Rid deactivated"
		};
	};

	this.deactivate = function () {
		active = false;
	};

	this.activate = function () {
		active = true;
	};

	var init = function () {
		console.log("Rid initiated");
		generateAudioElement();
		setRidGraphics();
	};

	init();
}