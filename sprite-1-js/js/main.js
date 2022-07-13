var spr=120;
var start=setInterval(function(){
    document.getElementById('sprite').style.transform="translateX("+spr+"px)";
    if(spr>-840){
        spr=spr-120;
    }else{
        spr=-120;
    }
},80)
