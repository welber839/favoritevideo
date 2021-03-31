var videoInnerBoxContent=document.querySelectorAll(".videoInnerBoxContent");
var selectList = document.getElementById("selectList");
var showLyric = document.querySelectorAll(".showLyric");
var lyric=document.querySelectorAll(".lyric");
function changeContent (e){
    var num=Number(e.target.options[e.target.selectedIndex].value);
    for (var i=0;i<videoInnerBoxContent.length;i++){
        videoInnerBoxContent[i].style.display="none";
    }
    videoInnerBoxContent[num].style.display="";
}

function showLyric1 (e){
    var num=Number(e.target.getAttribute('value'));
    console.log(num);
    if (e.target.innerHTML==="顯示歌詞↓"){
        e.target.innerHTML="隱藏歌詞↑";
        lyric[num].style.display="";

    }else if (e.target.innerHTML==="隱藏歌詞↑"){
        e.target.innerHTML="顯示歌詞↓";
        lyric[num].style.display="none";
    }

    
}

selectList.addEventListener('change',changeContent);

for(var j=0;j<showLyric.length;j++){
    showLyric[j].addEventListener('click',showLyric1);
}