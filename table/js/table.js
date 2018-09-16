function $$(id){
		return document.getElementById(id);
	}
	var lists;
	var len;
	window.onload=function(){
		var objtxt=$$("regemail");
		var objlist=$$("maillist");

        lists=objlist.getElementsByTagName("li");
        len=lists.length;

        //给每个li绑定一个鼠标的点击事件
        for(var i=1;i<len;i++){
            lists[i].onmousedown=function(){
                objtxt.value=this.textContent;
                objlist.style.display="none";
            }
        }

        //计算这个层的显示位置
        objtxt.onfocus=function(){
            objlist.style.display="block";
        }
        objtxt.onblur=function(){
            objlist.style.display="none";
        }

        //当松开键盘的按键的时候
        objtxt.onkeyup=function(){
            //获取文本框中的值
            var txt=this.value;
            var flag="";
            if(txt.indexOf("@")>0){
                flag=txt.substring(txt.indexOf("@")-1);//获取的输入的@开始的内容
                txt=txt.substring(0,txt.indexOf("@"));
            }else{
                flag="";
            }
            var val="";
            //将这个值放到所有的li前面
            for(var i=1; i<len; i++){
                val=lists[i].textContent;
                val=val.substring(val.indexOf("@"));
                lists[i].textContent=txt+val;
            }

            //如果用户输入了@，则检查哪些是满足条件的
            if(flag!=""){
                var reg=new RegExp(flag,"i");
                for(var i=1;i<len;i++){
                    if(reg.test(lists[i].textContent)){
                        lists[i].style.display="block";
                    }else{
                        lists[i].style.display="none";
                    }
                }
            }
        }
    }