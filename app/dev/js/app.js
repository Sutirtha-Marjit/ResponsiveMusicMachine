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
    src:"audio/1A.mp3",
    rid:document.getElementById("rid")    
});

<<<<<<< HEAD
*/
=======

var rid2 = new Rid({
    wrapperObject:document.getElementById('machineWrapper'),
    name:"testRid2",
    src:"audio/2F.mp3",
    rid:document.getElementById("rid2")    
});
>>>>>>> 2b07e254eb528506f600a6858b16943774582e5b
