(function(){
    
   
   function getRid(obj){
	
	var rid = document.createElement('div');
    rid.className = "rid bigRid";
	rid.setAttribute('data-id','rid'+obj.i);
	rid.setAttribute('data-prop','{}');
    return rid;
   }   
   
   function graphicalArrangement(){
    var i=0,maxbigRid=25,machineMainWrapper = document.querySelector('div[data-musicmachine]');   
    
	var divbigRidW = machineMainWrapper.querySelector(".bigRidW");
	
	while(i<maxbigRid){
	 divbigRidW.appendChild( getRid({i:i}) );
	 i++;
    }
    console.log(machineMainWrapper);
   } 
   
    
   
   graphicalArrangement();
    
})();

