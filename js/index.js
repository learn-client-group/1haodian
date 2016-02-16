window.onload=function(){
//下拉菜单	
	var topnavleft=$(".topnav-left")[0];
	var login1=$(".login1-")[0];
	hover(topnavleft,function(){		
		login1.style.cssText="border:1px solid #ccc;height:182px";
		login1.style.borderTop="none";
	},function(){
		login1.style.cssText="border:none;height:0px";
	})
	var xl2=$(".xl2")[0];
	var aa=$("a",xl2)[0];
	hover(xl2,function(){
		xl2.style.borderColor="red";
		aa.style.color="red";
	},function(){
		xl2.style.borderColor="#ff8486";
		aa.style.color="#ff8486";
	})
	var area1=$(".area1")[0];
	var area=$(".area")[0];
	hover(area1,function(){
		area.style.cssText="border:1px solid #ccc;height:320px";
	},function(){
		area.style.cssText="border:none;height:0px"
	})
	var weixin=$(".weixin")[0];
	var weixin1=$(".weixin1")[0];
	hover(weixin,function(){
		weixin1.style.cssText="border:1px solid #ccc;height:161px";
	},function(){
		weixin1.style.cssText="border:none;height:0px";
	})
	var wangzhandaohang=$(".wangzhandaohang")[0];
	var wangzhan=$(".wangzhan")[0];
	hover(wangzhandaohang,function(){
		wangzhandaohang.style.cssText="border:1px solid #ccc;background:#fff";
		wangzhandaohang.style.borderTop="none";
		wangzhan.style.cssText="border:1px solid #ccc;height:125px";
	},function(){
		wangzhan.style.cssText="border:none;height:0px";
		wangzhandaohang.style.cssText="border:none;background:#fafafa";
	})
	var kehufuwu=$(".kehufuwu")[0];
	var kf=$(".kf")[0];
	hover(kehufuwu,function(){
		kehufuwu.style.cssText="border:1px solid #ccc;background:#fff";
		kehufuwu.style.borderTop="none";
		kehufuwu.style.borderBottom="none";
		kf.style.cssText="border:1px solid #ccc;height:130px";
		kf.style.borderTop="none";
	},function(){
		kf.style.cssText="border:none;height:0px";
		kehufuwu.style.cssText="border:none;background:#fafafa";
	})
	var zhangshang=$(".zhangshang")[0];
	var zs=$(".zs")[0];
	hover(zhangshang,function(){
		zhangshang.style.cssText="border:1px solid #ccc;background:#fff";
		zhangshang.style.borderTop="none";
		zhangshang.style.borderBottom="none";
		zs.style.cssText="border:1px solid #ccc;height:149px";
		zs.style.borderTop="none";
	},function(){
		zs.style.cssText="border:none;height:0px";
		zhangshang.style.cssText="border:none;background:#fafafa";
	})
	var shoucangjia=$(".shoucangjia")[0];
	var scj=$(".scj")[0];
	hover(shoucangjia,function(){
		shoucangjia.style.cssText="border:1px solid #ccc;background:#fff";
		shoucangjia.style.borderTop="none";
		shoucangjia.style.borderBottom="none";
		scj.style.cssText="border:1px solid #ccc;height:48px";
		scj.style.borderTop="none";
	},function(){
		scj.style.cssText="border:none;height:0px";
		shoucangjia.style.cssText="border:none;background:#fafafa";
	})
	var wode1hao=$(".wode1hao")[0];
	var wd=$(".wd")[0];
	hover(wode1hao,function(){
		wode1hao.style.cssText="border:1px solid #ccc;background:#fff";
		wode1hao.style.borderTop="none";
		wode1hao.style.borderBottom="none";
		wd.style.cssText="border:1px solid #ccc;height:150px";
		wd.style.borderTop="none";
	},function(){
		wd.style.cssText="border:none;height:0px";
		wode1hao.style.cssText="border:none;background:#fafafa";
	})
	var shangpin=$(".shangpin")[0];
	var dianpu=$(".dianpu")[0];
	hover(shangpin,function(){
		
		dianpu.style.cssText="border:1px solid #ccc;height:32px;background:#f8f8f8";
		dianpu.style.borderTop="none";
	},function(){
		dianpu.style.cssText="border:none;height:0px";
		shangpin.style.cssText="borderRight:1px solid #ccc;background:#f8f8f8";
	})


//logo部分下拉菜单
	var text=$(".text")[0];
	var input=$("input",text)[0];
	var texts=$(".texts")[0];
	var ttr=$(".ttr")[0];
	var aa=$("a",ttr);

	text.onclick=function(){
		texts.style.cssText="border:1px solid #ccc;height:254px;"

		/*if(input.value=="&nbsp;年度畅销榜&nbsp;幸福大盘点"){
			input.value="";
		}
		if(input.value!="&nbsp;年度畅销榜&nbsp;幸福大盘点"){}*/
	}
	text.onmouseout=function(){
		texts.style.cssText="border:none;height:0px"
		/*if(input.value==""){
			input.value=&nbsp;年度畅销榜&nbsp;幸福大盘点
		}
		if(input.value!=""){}*/
	}
    for(var i=0;i<aa.length;i++){
    	aa[i].onmouseover=function(){
           this.style.cssText="border:1px solid red;color:red"
       }
       aa[i].onmouseout=function(){
           this.style.cssText="border:1px solid #ccc;color:#ccc"
       }
    }
    var logoright=$(".logoright")[0];
    var lrt=$(".lrt")[0];
    hover(logoright,function(){
    	lrt.style.cssText="height:285px;border:1px solid #ccc"
    	lrt.style.borderTop="4px solid red"
    },function(){
    	lrt.style.cssText="height:0px;border:none"
    })
    //banner轮播效果
    var bn=$(".bn");
    var tn=$(".tn");
    var num=0; 
    var anleft=$(".anleft")[0];
    var anright=$(".anright")[0];   
    var banner=$(".banner")[0];   
    var bannerarr=["#56023d","#f6d202","#efe3cd","#eb0f01","#eaebf0","#83f3f7","#851126","#f9e8f0"];
    function move(type){
    	if(type=="r"){
    		num++;
    	    if(num==8){
    		num=0;
    	   }
    	}
    	if(type=="l"){
    		num--;
    		if(num==-1){
    			num=7;
    		}
    	}
    	
    		for(var j=0;j<bn.length;j++){
    			bn[j].style.zIndex=7;
    			tn[j].style.background="red";
    		}
            bn[num].style.zIndex=8; 
            tn[num].style.background="#fff";
            banner.style.background=bannerarr[num]; 	
    }
    var t=setInterval(function(){
    	move("r");
    },1000);
    for(var i=0;i<tn.length;i++){
    	tn[i].index=i;
    	tn[i].onmouseover=function(){
    		clearInterval(t);
    		for(var j=0;j<tn.length;j++){
    			bn[j].style.zIndex=7;
    			tn[j].style.background="red";
    		}
    		this.style.background="#fff";
    		bn[this.index].style.zIndex=8;
    		banner.style.background=bannerarr[this.index]; 
    	}
    	tn[i].onmouseout=function(){
    		t=setInterval(function(){
    	move("r");
    },1000);
    		num=this.index;
    	}
	    bn[i].onmouseover=function(){
	    	clearInterval(t);
	    	anleft.style.opacity=1;
	    	anright.style.opacity=1;
	    }
	    bn[i].onmouseout=function(){
	    	t=setInterval(function(){
    	move("r");
    },1000);
	    	//num=this.index;
	    	anleft.style.opacity=0;
	    	anright.style.opacity=0;
	    }
	    anleft.onmouseover=anright.onmouseover=function(){
	    	clearInterval(t);
	    	anleft.style.opacity=1;
	    	anright.style.opacity=1;
	    }
	     anleft.onmouseout=anright.onmouseout=function(){
	    	anleft.style.opacity=0;
	    	anright.style.opacity=0;
	    	t=setInterval(function(){
    	move("r");
    },1000);
	    }
	    anleft.onclick=function(){
	    	move("l");
	    }
	    anright.onclick=function(){
	    	move("r");
	    }
    }
  var li1two=$(".li1two")[0];
  var li2=$(".li2")[0];
  hover(li1two,function(){
  	li2.style.cssText="border:1px solid red;height:158px";
  },function(){
  	li2.style.cssText="border:none;height:0px";
  })
  var li1three=$(".li1three")[0];
  var li3=$(".li3")[0];
  hover(li1three,function(){
  	li3.style.cssText="border:1px solid red;height:158px";
  },function(){
  	li3.style.cssText="border:none;height:0px";
  })
  var li1one=$(".li1one")[0];
  var li1=$(".li1")[0];
  hover(li1one,function(){
  	li1.style.cssText="border:1px solid red;height:158px";
  },function(){
  	li1.style.cssText="border:none;height:0px";
  })
  var zuoxiao=$(".zuoxiao");
  var imgs=$(".imgs");
  var as=$(".as");
  var zxw=$(".zxw");  
  for(var i=0;i<zuoxiao.length;i++){
  	zuoxiao[i].aa=i;
  	zuoxiao[i].onmouseover=function(){
        this.style.background="#710c0c";
        //imgs[this.aa].style.marginLeft=15+"px";        
        	animate(imgs[this.aa],{marginLeft:15},200)
        	//zxw[this.aa].style.width=978+"px"; 
        	animate(zxw[this.aa],{width:978},100);    
  	}
  	zuoxiao[i].onmouseout=function(){
        this.style.background="#c23131";
        //imgs[this.aa].style.marginLeft=5+"px";
        animate(imgs[this.aa],{marginLeft:5},200)
        //zxw[this.aa].style.width=0+"px"; 
        animate(zxw[this.aa],{width:0},100);
  	}
  }
  for(var i=0;i<as.length;i++){  	
  	as[i].onmouseover=function(){
  		this.style.textDecoration="underline";
  	}
  	as[i].onmouseout=function(){
  		this.style.textDecoration="none";
  	}
  }
//new部分效果
var newo=$(".newo");
var newb=$(".newb");
var newm=$(".newm");
for(var i=0;i<newo.length;i++){
	newo[i].bb=i;
	hover(newo[i],function(){
		//newb[this.bb].style.left=-5+"px";
         animate(newm[this.bb],{left:-5},300);
	},function(){
		animate(newm[this.bb],{left:0},300);
		//newb[this.bb].style.left=0+"px";
	})
}
//楼层动效

function mv(s){
	 var i2=$(".i2")[s]; 	 
	 var nums=0;
	 function moves(){ 
	   nums++;
	   	if(nums==3){
	 		animate(i2,{left:-330*nums},600,Tween.Linear,function(){
	 			i2.style.left=0+"px";
	 		});
	 		nums=0;
	 	}else{
	 		animate(i2,{left:-330*nums},600,Tween.Linear);
	 	}
	   	var ia=$(".ia")[s];
	 	var imban=$(".imban",ia);	 	
	 	for(var j=0;j<imban.length;j++){
	 	imban[j].style.background="#fff";
	 }
	 imban[nums].style.background="red";
	 } 
	 var m=setInterval(moves,2000);



    var ia=$(".ia")[s];
	var imban=$(".imban",ia);
	/*for(var w=0;w<imban.length;w++){
          imban[w].cc=w;
          imban[w].onmouseover=function(){
        clearInterval(m);
        for(var n=0;n<imban.length;n++){
              imban[n].style.background='#fff';
        }
        imban[this.cc].style.background='red';
        animate(i2,{left:-330*this.cc},200,Tween.Linear);
       } 
        imban[w].onmouseout=function(){
              nums=this.cc;         
        m=setInterval(moves,2000);
        }
    }*/
	for(var i=0;i<imban.length;i++){
 	imban[i].cc=i;
 	hover(imban[i],function(){
 		clearInterval(m);
 		for(var n=0;n<imban.length;n++){
 			imban[n].style.background="#fff";
 		}
 		imban[this.cc].style.background="red";
 		animate(i2,{left:-330*this.cc},200,Tween.Linear);
 	},function(){
 		nums=this.cc;
 		m=setInterval(moves,2000);
 	})
  }
}
var i2=$(".i2");
for(var i=0;i<i2.length;i++){
	mv(i);
}


 //鼠标滑上去发光效果
 var gf=$(".gf");
 var sg=$(".sg");
 for(var i=0;i<gf.length;i++){
 	gf[i].ff=i;
 	hover(gf[i],function(){
 		animate(sg[this.ff],{opacity:0},60);
 		sg[this.ff].style.display="block";
 	},function(){
 		sg[this.ff].style.opacity=0.2;
 	    sg[this.ff].style.display="none";
 	})
 }
 /*gf.onmouseover=function(){
 	//sg.style.opacity=0.2;
 	animate(sg,{opacity:0},60);
 	//sg.style.opacity=0;
 	sg.style.display="block";
 	//animate(sg,{opacity:0},60);
 }
 gf.onmouseout=function(){
 	sg.style.opacity=0.2;
 	sg.style.display="none";
 }*/


 //logo轮播效果
 var btn_centerbox=$(".btn_centerbox")[0];
 function ml(){
 	animate(btn_centerbox,{left:-100},600,Tween.Linear,function(){
 		var first=getFirst(btn_centerbox);
 		btn_centerbox.appendChild(first);
 		btn_centerbox.style.left=0;
 	})
 }
 function mr(){
 	var last=getLast(btn_centerbox);
 	var first=getFirst(btn_centerbox);
 	btn_centerbox.insertBefore(last,first);
 	btn_centerbox.style.left=-100+"px";
 	animate(btn_centerbox,{left:0},600,Tween.Linear);
 }
 var x=setInterval(ml,4000);
    var btn_left=$('.btn_left')[0];
    var btn_right=$('.btn_right')[0];
    btn_left.onmouseover=btn_right.onmouseover=function(){
        clearInterval(x);        
    }
    btn_left.onclick=function(){
        ml();
    }
    btn_right.onclick=function(){
        mr();
    }
    btn_right.onmouseout=btn_left.onmouseout=function(){        
        x=setInterval(ml,4000);
    }
//选项卡效果
var shangou_top_2=$(".shangou_top_2");
var shangou_bottom=$(".shangou_bottom");

for(var i=0;i<shangou_top_2.length;i++){
	shangou_top_2[i].ff=i;
	shangou_top_2[i].onmouseover=function(){
		for(var j=0;j<shangou_bottom.length;j++){
			shangou_bottom[j].style.display="none";
			shangou_top_2[j].style.color="#434242";
            
		}
		shangou_bottom[this.ff].style.display="block";
		shangou_top_2[this.ff].style.color="red";
		
	}
	
}
var sgg=$(".sgg");
var gmm=$(".gmm");
var tmin2=$(".tmin2");
for(var i=0;i<gmm.length;i++){
	gmm[i].kk=i;
	/*gmm[i].onmouseover=function(){
        for(var j=0;j<tmin2.length;j++){
        	tmin2[j].style.display="none";
        }
        tmin2[this.kk].style.display="block";
	}*/
	hover(gmm[i],function(){
 		animate(sgg[this.kk],{opacity:0},60);
 		sgg[this.kk].style.display="block";
 		tmin2[this.kk].style.display="block";
 	},function(){
 		sgg[this.kk].style.opacity=0.2;
 	    sgg[this.kk].style.display="none";
 	    tmin2[this.kk].style.display="none";
 	})
}

//右侧导航栏效果
var aabb=$(".aabb");
var navr=$(".navr");
var navrtop=$(".navrtop")[0];
var nav_rightword=$(".nav_rightword");
var nav_rightwordtop=$(".nav_rightwordtop")[0];
var nav_right=$(".nav_right")[0];
var navrbottom=$(".navrbottom")[0];
 hover(navrtop,function(){
       nav_rightwordtop.style.display="block";
       
    },function(){
    	nav_rightwordtop.style.display="none";
    
    })
 navrtop.onclick=function(){
 	var obj=document.documentElement.scrollTop?document.documentElement:document.body;
 	animate(obj,{scrollTop:0});
 }
for(var i=0;i<navr.length;i++){

	navr[i].pp=i;
    hover(navr[i],function(){
       nav_rightword[this.pp].style.display="block";
       
    },function(){
    	nav_rightword[this.pp].style.display="none";
    
    })



    navr[i].onclick=function(){
    	var obj=document.documentElement.scrollTop?document.documentElement:document.body;
    	animate(obj,{scrollTop:aabb[this.pp].offsetTop});
    }
}
window.onscroll=function(){
	var scroll=document.documentElement.scrollTop;
	if(scroll>=aabb[0].offsetTop-150){
           nav_right.style.display="block";
	}else{
		nav_right.style.display="none";
	}
	for(var i=0;i<aabb.length;i++){
		aabb[i].o=aabb[i].offsetTop;
		if(scroll>=aabb[i].o-150){
			for(var j=0;j<navr.length;j++){
				nav_rightword[j].style.display="none";
			}
			nav_rightword[i].style.display="block";
		}
	}
}
hover(navrbottom,function(){
	navrbottom.style.cssText="color:#fff;background:red;line-height:20px;";
},function(){
	navrbottom.style.cssText="color:red;background:none;line-height:20px;";
})
}