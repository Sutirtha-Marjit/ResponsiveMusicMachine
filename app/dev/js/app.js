(function () {
	
	var machineMainWrapper = document.querySelector('div[data-musicmachine]');
	var divbigRidW = machineMainWrapper.querySelector(".bigRidW");
	var divshortRidW = machineMainWrapper.querySelector(".shortRidW");
	
	function getRid(obj) {
		var rid = document.createElement('div');

		switch (obj.type) {

		case "BIG":
			rid.className = "rid bigRid";
			rid.setAttribute('data-id', 'bigRid' + obj.i);
			rid.setAttribute('data-prop', '{type:"big"}');
			return rid;
			break;

		case "SHORT":
			rid.className = "shortRid";
			rid.style.left = obj.left + 'px';
			rid.setAttribute('data-id', 'bigRid' + obj.i);
			rid.setAttribute('data-prop', '{type:"short"}');
			return rid;
			break;

		}

	}

	function getDynamicCSSProperties() {
		
		if(machineMainWrapper!==null && typeof machineMainWrapper!=='undefined'){
			var bigRid = document.createElement('div');
			var shortRid = document.createElement('div');			
			bigRid.className = "rid bigRid";
			bigRid.id="temTestBig";
			divbigRidW.appendChild(bigRid);
			shortRid.className = "shortRid";
			shortRid.id="temTestShort";
			divshortRidW.appendChild(shortRid);
			
			var cssBigRid = window.getComputedStyle(bigRid);
			var cssShortRid = window.getComputedStyle(shortRid);
			
			
			var prop = {
				   compoundBigWidth:parseInt(cssBigRid["width"])+parseInt(cssBigRid["border-left-width"])+parseInt(cssBigRid["margin-left"]),
				   compoundShortWidth:parseInt(cssShortRid["width"])
			};
			
			divshortRidW.removeChild(shortRid);
			divbigRidW.removeChild(bigRid);
			
			return prop
			
			
		}
		
		return {};
	}

	function graphicalArrangement() {
		var i = 0,
		r = 0,
		shortButtonCounter=0;
		maxbigRid = 23,
		restrictedShortRidPosition = [2, 6, 9, 13, 16, 20],
		maxBigRidGap = maxbigRid - 1,
		bigButtonProperties = {};
		
		
		while (i < maxbigRid) {
			var bigButton = getRid({
					i : i,
					type : 'BIG'
				});
			divbigRidW.appendChild(bigButton);
			i++;
		}

		var prop = getDynamicCSSProperties();
		console.log(prop);
		while (r < maxBigRidGap) {
			if (restrictedShortRidPosition.indexOf(r) == -1) {
				
				var shortButton = getRid({
						type : 'SHORT',
						left : (prop.compoundBigWidth * r) + prop.compoundShortWidth,
						i:shortButtonCounter
					});
				divshortRidW.appendChild(shortButton);
				shortButtonCounter++;
			}
			r++;
		}

	}

	graphicalArrangement();

})();