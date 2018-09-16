var arr=document.getElementsByTagName("button");
var sc=document.getElementById("sc");
var pre=document.getElementById("pre");
var next=document.getElementById("next");

for(var i=0;i<arr.length;i++){
	arr[i].onclick=function(){
		sc.src=this.value;
		sc.play();
		arr[i].className.innerHTML="play";
        }
	}   

//nclick=function(){//获取当前正在播放的音乐的索引值
//  for(var i = 0 ; i < arr.length ; ++i){
//  	console.log(arr[i].getAttribute('class') );
//      if (arr[i].getAttribute('class') == 'play') {
//          //return i;
//          console.log(i);
//      }
//  }
//}
