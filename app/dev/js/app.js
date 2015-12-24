(function(){
    
   function graphicalArrangement(){
    var i=0,machineMainWrapper = document.querySelector('div[data-musicmachine]');   
    var rids = machineMainWrapper.querySelectorAll('div.id');
    
    while(i<rids.length){
     if(typeof rids[i].id!== 'undefined'){
         rids[i].id = "rid"+i;
     }
     i++;    
    }
    
    console.log(machineMainWrapper);
   } 
   
    
   
   graphicalArrangement();
    
})();


/*
var rid = new Rid({
    wrapperObject:document.getElementById('machineWrapper'),
    name:"testRid",
    src:"audio/Sleep Away.mp3",
    rid:document.getElementById("rid")    
});

*/