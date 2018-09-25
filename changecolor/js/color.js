var color=document.getElementsByClassName('color');
var write=document.getElementById('write');
var arr=['gray','pink','coral','dodgerblue','mediumspringgreen','palevioletred'];

for(var i=0;i<color.length;i++){
	(function(){
		var temp=i;
		color[temp].style.backgroundColor=arr[temp];
		color[temp].onclick=function(){
			var last=window.localStorage['key1'];
			//console.log(last);
			var lasts=document.getElementById(last);
			//console.log(lasts);
			//lasts.style.marginTop="4px";
			lasts.style.marginTop='5px';
			//lasts.style.marginTop='-5px';
			this.style.marginTop="-4px";
			localStorage['key1']=arr[temp];
			write.style.backgroundColor=localStorage['key1'];
			//write.style.backgroundColor=this.style.backgroundColor;
			//localStorage.setItem('key1',write.style.backgroundColor);
		}
	})();
}
window.onload=function(){
//	this.write.backgroundColor=this.localStorage['key1'];
	document.getElementById(localStorage.getItem('key1')).style.marginTop='-4px';
}
//localStorage.clear();
write.style.backgroundColor=localStorage['key1'];
//localStorage['key2'];
