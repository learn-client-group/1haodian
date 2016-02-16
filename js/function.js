//1、功能：获取函数指定类名
function getClass(classname,obj){
  var obj=obj||document;
  if(obj.getElementsByClassName){
     return obj.getElementsByClassName(classname);
  }else{//IE//"one two first"["one","two","first"]  "one" 3
    var all=obj.getElementsByTagName("*");//集合[<div class="one two fisrt" id=""></div>,<p>]
    var arr=[];
    for(var i=0;i<all.length;i++){
      if(checkRel(all[i].className,classname)){
        arr.push(all[i]);
      }
    }
    return arr;
  }
}//"one two first"  "box"

function checkRel(str,val){
  var arr=str.split(" ");
  for(var i in arr){
    if(arr[i]==val){
      return true;
    }
  }
  return false;
}
//2、获取与设置纯文本兼容函数
//obj   哪个对象要用这个函数
//val   表示设置文本
function getText(obj,val){
   if(val==undefined){//如果val为underfined，表示只有一个参数，这个函数实现的功能是获取文本
    if(obj.innerText){//如果为真是ie8浏览器
      return obj.innerText;
    }else{//是ff浏览器
      return obj.textContent;
    }
   }else{
    if(obj.innerText||obj.innerText==""){//如果为真是ie8浏览器，当对象的内容为空时，都可以设置
      obj.innerText=val;
    }else{//是ff浏览器
      obj.textContent=val;
    }
   }
}
//3、获取样式
function getStyle(obj,attr){
  if(obj.currentStyle){
    return obj.currentStyle[attr];
  }else{
    return getComputedStyle(obj,null)[attr];
  }
}
/*4、
  $('.box');类名
  $('#first');ID名
  $('div');标签名
*/
function $(select,obj){
  var obj=obj||document;
    if(typeof select=='string'){
      select=select.replace(/^\s*|\s*$/g,"");//去掉字符串前后的空格
      if(select.charAt(0)=='.'){
        return getClass(select.slice(1),obj);
      }else if(select.charAt(0)=='#'){
        return obj.getElementById(select.slice(1));
      }else if(/^[a-z|1-6]{1,10}$/g.test(select)){//表示标签名/^[a-z|1-6]{1,10}$/表示范围，g表示全局，1-10表示标签的长度
        return obj.getElementsByTagName(select);
      }
    }else if(typeof select=='function'){
      window.onload=function(){
        select();
      }
    }
  }
  //5、获取元素子节点、
  //'a'获取元素子节点的兼容函数
  //'b'获取元素+文本节点
  function getChilds(parent,type){//parent是父节点的类名
       var type=type||'a';//不写type时默认为文本，写type时为节点
       var childs=parent.childNodes;//所有儿子
       var arr=[];
       for(var i=0;i<childs.length;i++){
        if(type=='a'){
          if(childs[i].nodeType==1){
          arr.push(childs[i]);
           }        
        }else if(type=='b'){//获取元素+文本
          if(childs[i].nodeType==1||(childs[i].nodeType==3&&childs[i].nodeValue.replace(/^\s*|\s*$/g,''))){
             arr.push(childs[i]);
          }
        }        
       } 
       return arr;      
  }
//6、获得第一个子节点
function getFirst(parent){
  return getChilds(parent)[0];
}
//7、获得最后一个子节点
function getLast(parent){
  return getChilds(parent)[getChilds(parent).length-1];
}
//8、获得指定子节点
function getNum(parent,num){
  return getChilds(parent)[num];
}
//9、获得下一个兄弟节点
function getNext(self){
   var next=self.nextSibling;
   while(next.nodeType==3||next.nodeType==8){
    next=next.nextSibling;
    if(next==null){
      return false;
    }
   }
   return next;
}
//10、获得上一个兄弟节点
function getUp(self){
   var up=self.previousSibling;
   if(up==null){
    return false;
   }
   while(up.nodeType==3||up.nodeType==8){
    up=up.previousSibling;
    if(up==null){
      return false;
    }
   }
   return up;
}
//11.插入到某个对象之后
Object.prototype.insertAfter=function (obj1,obj2){
  var newobj=getNext(obj2);
  if(newobj){
    this.insertBefore(obj1,newobj);
  }else{
    this.appendChild(obj1);
  }
}


//12.获取滚动条走了的距离
function getScrollT(){
  var obj=document.documentElement.scrollTop?document.documentElement:document.body;
  var scrollT=obj.scrollTop;
  return scrollT;
}
//13.添加多个事件的兼容函数
/*obj:给哪个对象添加
ev:什么事件
fun:事件处理程序*/
function addEvent(obj,ev,fun){
   if(obj.addEventListener){
    return obj.addEventListener(ev,function(){fun.call(obj);},false);
   }else{
    return obj.attachEvent('on'+ev,function(){fun.call(obj);});//在ie8中this不指当前对象，指的是window
   }
}
//14.拖拽事件函数
function drag(obj){
  var cw=document.documentElement.clientWidth;
  var ch=document.documentElement.clientHeight;
  var ow=obj.offsetWidth;
  var oh=obj.offsetHeight;
  obj.onmousedown=function(e){
        var ev=e||window.event;
        var sx=ev.offsetX;
        var sy=ev.offsetY;
        //阻止浏览器的默认行为
          if(ev.preventDefault){ev.preventDefault();} //阻止默认浏览器动作(W3C) 
          else{ev.returnValue=false;}
        document.onmousemove=function(e){
          var ev=e||window.event;
                
          var x=ev.clientX;
          var y=ev.clientY;
          
          var newx=x-sx;
          var newy=y-sy;
                if(newx<=0){
                  newx=0;
                }
                if(newx>=(cw-ow)){
                  newx=cw-ow;
                }
          obj.style.left=newx+'px';
          if(newy<=0){
                  newy=0;
                }
                if(newy>=(ch-oh)){
                  newy=ch-oh;
                }
          obj.style.top=newy+'px';
        }
      }
      obj.onmouseup=function(){
        document.onmousemove=null;
      }
}
//15.漂浮事件函数
function floor(obj1,obj2){
    var speetx=5;
    var speety=5;
    var sx;var sy;
    var t=setInterval(function(){
    window.onresize=function(){
        sx=document.documentElement.clientWidth;
        sy=document.documentElement.clientHeight;
       }
       var sx=document.documentElement.clientWidth;
       var sy=document.documentElement.clientHeight;
       var ox=obj1.offsetWidth;
       var oy=obj1.offsetHeight;
       var x1=obj1.offsetLeft+speetx;
       var y=obj1.offsetTop+speety;
       if(x1>=(sx-ox)){
        x1=sx-ox;
        speetx*=-1;        
       }
       if(x1<=0){
        x1=0;
        speetx*=-1;
       }       
       obj1.style.left=x1+'px';
       if(y>=(sy-oy)){
        y=sy-oy;
        speety*=-1;        
       } 
       if(y<=0){
        y=0;
        speety*=-1;
       }           
       obj1.style.top=y+'px';
    },60);
    obj1.onmouseover=function(){
      clearInterval(t);
    }
    obj1.onmouseout=function(){
      t=setInterval(function(){
    window.onresize=function(){
        sx=document.documentElement.clientWidth;
        sy=document.documentElement.clientHeight;
       }
       var sx=document.documentElement.clientWidth;
       var sy=document.documentElement.clientHeight;
       var ox=obj1.offsetWidth;
       var oy=obj1.offsetHeight;
       var x1=obj1.offsetLeft+speetx;
       var y=obj1.offsetTop+speety;
       if(x1>=(sx-ox)){
        x1=sx-ox;
        speetx*=-1;        
       }
       if(x1<=0){
        x1=0;
        speetx*=-1;
       }       
       obj1.style.left=x1+'px';
       if(y>=(sy-oy)){
        y=sy-oy;
        speety*=-1;        
       } 
       if(y<=0){
        y=0;
        speety*=-1;
       }           
       obj1.style.top=y+'px';
    },60);
    }
    obj2.onclick=function(){
      obj1.style.display='none';
    }
}
//滚轮事件函数
function mouseWheel(obj,upfun,downfun){
  if(obj.attachEvent){ obj.attachEvent("onmousewheel",scrollFn);  //IE、 opera 
        }else if(obj.addEventListener){ 
        obj.addEventListener("mousewheel",scrollFn,false);  //chrome,safari    -webkit
        obj.addEventListener("DOMMouseScroll",scrollFn,false);  //firefox     -moz
    }
    function scrollFn(e){
      var ev=e||window.event;
      //阻止浏览器的默认行为
      if(ev.preventDefault){ev.preventDefault();} //阻止默认浏览器动作(W3C) 
          else{ev.returnValue=false;}
      var num=ev.detail||ev.wheelDelta;
      if(num==-3||num==120){//向上
        if(upfun){
          upfun();
        }
      }
      if(num==3||num==-120){//向下
        if(downfun){
          downfun();
        }
      }
    }
}
//15.hover
//判断某个元素是否包含有另外一个元素
 function contains (parent,child) {
  if(parent.contains){
     return parent.contains(child) && parent!=child;
  }else{
    return (parent.compareDocumentPosition(child)===20);
  }
 }

//判断鼠标是否真正的从外部移入，或者是真正的移出到外部；
  function checkHover (e,target) {
   if(getEvent(e).type=="mouseover"){
      return !contains(target,getEvent(e).relatedTarget || getEvent(e).fromElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).fromElement)===target)
   }else{
    return !contains(target,getEvent(e).relatedTarget || getEvent(e).toElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).toElement)===target)
    }
  }
//鼠标移入移出事件
/*
  obj   要操作的对象
  overfun   鼠标移入需要处理的函数
  outfun     鼠标移除需要处理的函数
*/
function hover (obj,overfun,outfun) {
    if(overfun){
      obj.onmouseover=function  (e) {
        if(checkHover(e,obj)){
           overfun.call(obj,[e]);
        }
      }
    }
    if(outfun){
      obj.onmouseout=function  (e) {
        if(checkHover(e,obj)){
           outfun.call(obj,[e]);
        }
      }
    }
}
 function getEvent (e) {
      return e||window.event;
 }
/********************************/
//求时间差的函数
function getCha(news,now){
      var arr=[];
      var cha=(news.getTime()-now.getTime())/1000;
      var day=parseInt(cha/(60*60*24));
      arr.push(day);
      cha%=(60*60*24);
      var hour=parseInt(cha/(60*60));
      arr.push(hour);
      cha%=(60*60);
      var minute=parseInt(cha/60);
      arr.push(minute);
      var second=parseInt(cha%60);
      arr.push(second);
      return arr;
    }
  //添加属性
  /*var obj=document.getElementsByClassName("box")[0]
  var a=obj.getElementsByClassName('title')[0];
  attr(obj,{"aa":"cc","bb":"dd"})
  
function attr(){
var a=arguments[0];
var b=arguments[1];

var c=arguments[2];
if(arguments.length==2){
if(typeof b=="object"){
   for(var i in b){
  a.setAttribute(i,b[i])
  }
}else{
  return  a.getAttribute(b);
}
}
else if(arguments.length==3){
a.setAttribute(b,c);
}

}*/
