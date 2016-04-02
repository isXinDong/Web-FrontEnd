function bounceBalls($opt){
DB.removeChild(mainVar.ele.mainBox)
var icoPath="//qa-h5.mtq.tvm.cn/yao/common/img/tagCloud/"
setStyle("html,body{width:100%;height:100%;overflow:hidden;padding:0;margin:0}\
body{width:100%;min-height:100%;padding:0;margin:0;position:relative;font:12px weiruanyahei,FZYQJW,'微软雅黑',Tahoma,'\534E\6587\5B8B\4F53',arial;overflow:hidden}\
body,ul,ul li,ol,ol li,dl,dl dd,h3,h4,p,hr{list-style:none;margin:0;padding:0}ul,ul li,ol,ol li,dl,dl dd,h3,h4,p{ list-style:none; margin:0; padding:0}\
.wrapBack{display:none;position:absolute;width:100%;height:100%;overflow:hidden;top:0;left:0;background:rgba(0,0,0,.65)}\
.tagBall{position:absolute;box-sizing:border-box;font-size:14px;border-radius:50%;transform:translate3d(0,0,0);padding:0 10px}\
.tanslateAni{-webkit-animation:tanslateAni 5000ms infinite linear alternate}\
@-webkit-keyframes tanslateAni{\
0%{-webkit-transform:rotate(10deg) translate3d(0px,0px,0)}\
35%{-webkit-transform:rotate(0deg) translate3d(20px,0px,0)}\
70%{-webkit-transform:rotate(-10deg) translate3d(0px,0px,0)}\
100%{-webkit-transform:rotate(0deg) translate3d(-20px,0px,0)}}\
@-webkit-keyframes sj_rotate2{0%{-webkit-transform:rotate(0deg) translate3d(0,0,0)}\
35%{-webkit-transform:rotate(-10deg) translate3d(0,12px,0)}\
70%{-webkit-transform:rotate(0deg) translate3d(0,0,0)}\
100%{-webkit-transform:rotate(10deg) translate3d(-12px,0,0)}}\
.classBall{position:absolute;font-size:1.2em;text-align:center;border-radius:50%;transform:translate3d(0,0,0);box-sizing:border-box;text-shadow:1px 1px 1px #000}\
.smallBox{position:absolute;left:0;top:0;box-sizing:border-box}\
.ball{position:absolute;will-change:transform;display:flex;display:-webkit-box;justify-content:center;align-items:center;color:#fff;text-align:center;-webkit-box-pack:center;-webkit-box-align:center;font-weight:bold;font-size:15px}\
.ball.b1{background-image:url("+icoPath+"a1.png);background-size:100% 100%}\
.ball.b2{background-image:url("+icoPath+"a2.png);background-size:100% 100%}\
.ball.b3{background-image:url("+icoPath+"a3.png);background-size:100% 100%}\
.ball.b4{background-image:url("+icoPath+"a4.png);background-size:100% 100%}\
.ball.b5{background-image:url("+icoPath+"a5.png);background-size:100% 100%}\
.ball.b6{background-image:url("+icoPath+"a6.png);background-size:100% 100%}\
.b1s{background-image:url("+icoPath+"b1s.png);background-size:100% 100%}\
.b2s{background-image:url("+icoPath+"b2s.png);background-size:100% 100%}\
.b3s{background-image:url("+icoPath+"b3s.png);background-size:100% 100%}\
.b4s{background-image:url("+icoPath+"b4s.png);background-size:100% 100%}\
.b5s{background-image:url("+icoPath+"b5s.png);background-size:100% 100%}\
.b6s{background-image:url("+icoPath+"b6s.png);background-size:100% 100%}\
.b1ss{background-image:url("+icoPath+"b1ss.png);background-size:100% 100%}\
.b2ss{background-image:url("+icoPath+"b2ss.png);background-size:100% 100%}\
.b3ss{background-image:url("+icoPath+"b3ss.png);background-size:100% 100%}\
.b4ss{background-image:url("+icoPath+"b4ss.png);background-size:100% 100%}\
.b5ss{background-image:url("+icoPath+"b5ss.png);background-size:100% 100%}\
.b6ss{background-image:url("+icoPath+"b6ss.png);background-size:100% 100%}\
.hoop{position:absolute;width:66px;height:66px;border-radius:50%;top:60px;box-sizing:border-box;background:url("+icoPath+"hoop.png) no-repeat;background-size:100% 100%}\
.hoop.a1{left:20px}\
.hoop.a2{left:50%;-webkit-transform:translate(-50%,0)}\
.hoop.a3{right:20px}\
.page-top{position:fixed;top:0;left:0;width:100%;z-index:1;background:rgba(179,219,241,.7);color:#ff3101;text-align:center;padding:3px 0;line-height:24px;max-height:82px;font-size:16px}\
.page-top b,#djtime b{background:#F00;border-radius:4px;display:inline-block;padding:0 4px;color: #fff;margin:0 1px;height: 20px;line-height: 20px}\
.page-top p{position:relative;height:52px;display:inline-block}\
.page-top em{font-style:normal;display:inline-block;background:#ff3101;color:#fff;border-radius:3px;padding:0 4px;line-height:22px;margin:0 1px}\
.page-top span{font-size:26px}\
.page-top-main{display:inline-block;width:100%;margin-top:-100%}\
.page-top-main li{float:left;width:50%;padding:0 5px;box-sizing:border-box}\
.page-top-main li img{width:30px;vertical-align:middle}\
.page-top-main li span{text-shadow:0 0 3px #000,-3px 1px 1px #000,0 0 3px #000,0 1px 3px #000;color:#fff;display:inline-block;background:rgba(0,0,0,.3);padding:0 10px;border-radius:15px;margin-left:-8px;font-size:1.1em;font-weight:900}\
.page-top-main li.right{text-align:right}\
.page-top-main li.right span{margin-right:-8px}\
.page-bottom{position:fixed;left:0;bottom:0;width:100%;padding-bottom:10px;z-index:1}\
.page-bottom .page-bottom-top{padding-left:72px}\
.page-bottom .page-bottom-top font{width:50px;height:50px;display:inline-block;position:relative;margin-left:-62px;float:left}\
.page-bottom .page-bottom-top img{border:1px solid #fff;border-radius:100%;width:48px}\
.page-bottom .page-bottom-top span{display:inline-block;padding:2px;background:#ff3c3c;color:#fff;font-size:10px;line-height:11px;letter-spacing:1px;border-radius:8px;right:0;bottom:0;-webkit-transform:translateX(50%);position:absolute}\
.page-bottom ul{display:inline-block;padding-top:6px}\
.page-bottom ul li{float:left;width:70px;height:30px;font-size:12px;text-align:center;line-height:30px;color:#fff;margin-right:4px}\
.page-bottom ul li.less3{width:46px;}\
.page-bottom2{padding:5px 10px 0;position:relative}\
.page-bottom2 .tjbtn,.page-bottom2 .tjtext{border:0;margin:0;padding:0}\
.page-bottom2 .tjbtn{height:40px;border-radius:8px;position:absolute;right:9px;bottom:-2px;z-index:2}\
.page-bottom2 .tjtext{background:rgba(0,0,0,.3);border:1px solid rgba(255,255,255,.6);border-radius:22px;padding:0 66px 0 10px;color:#fff;box-sizing:border-box;width:100%;height:38px}\
@-webkit-keyframes bounceIn{\
0%{opacity:0;-webkit-transform:scale(.3);transform:scale(.3)}\
50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}\
70%{-webkit-transform:scale(.9);transform:scale(.9)}\
100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}\
@keyframes bounceIn{\
0%{opacity:0;-webkit-transform:scale(.3);-ms-transform:scale(.3);transform:scale(.3)}\
50%{opacity:1;-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05)}\
70%{-webkit-transform:scale(.9);-ms-transform:scale(.9);transform:scale(.9)}\
100%{opacity:1;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}}\
.paopao{-webkit-animation:bounceIn .6s linear;animation:bounceIn .6s linear}\
@-webkit-keyframes toleft{\
0%{-webkit-transform:translateX(48px)}\
100%{-webkit-transform:translateX(0)}}\
@keyframes toleft{0%{-webkit-transform:translateX(48px)}\
100%{-webkit-transform:translateX(0)}}\
.toleft{-webkit-animation:toleft .4s linear;animation:toleft .4s linear}\
.mysearch{width:100%;position:fixed;bottom:-100%;left:0;z-index:101;padding:10px;box-sizing:border-box}\
.mysearch .page-bottom2{clear:both;padding:0}\
.mysearch .page-bottom2 .tjbtn{right:-2px}\
.mysearch .page-bottom2 .tjtext,.page-bottom .tjtext{padding-left:10px;font-size:14px}\
.page-bottom div.tjtext{position:absolute;bottom:0;left:10px;right:10px;width:auto;z-index:1}\
.page-bottom input.tjtext{opacity:0}\
@-webkit-keyframes yyy{0%{-webkit-transform:rotate(0deg)}10%{-webkit-transform:rotate(3deg)}30%{-webkit-transform:rotate(-3deg)}50%{-webkit-transform:rotate(3deg)}70%{-webkit-transform:rotate(-3deg)}80%{-webkit-transform:rotate(0deg)}}\
@-webkit-keyframes searchopen{\
0%{opacity:0}\
100%{opacity:1}}\
@keyframes searchopen{\
0%{opacity:0}\
100%{opacity:1}}\
.searchopen{-webkit-animation:searchopen .4s linear;animation:searchopen .4s linear}\
@-webkit-keyframes searchhide{\
0%{opacity:1}\
100%{opacity:0}}\
@keyframes searchhide{\
0%{opacity:1}\
100%{opacity:0}}\
.searchhide{-webkit-animation:searchhide .2s linear;animation:searchhide .2s linear}\
@-webkit-keyframes paopaobtn{0%{opacity:0;-webkit-transform:scale(.6);transform:scale(.6)}\
50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}\
70%{-webkit-transform:scale(.9);transform:scale(.9)}\
100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}\
@keyframes paopaobtn{\
0%{opacity:0;-webkit-transform:scale(.6);-ms-transform:scale(.6);transform:scale(.6)}\
50%{opacity:1;-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05)}\
70%{-webkit-transform:scale(.9);-ms-transform:scale(.9);transform:scale(.9)}\
100%{opacity:1;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}}\
.paopaobtn{-webkit-animation:paopaobtn .5s linear;animation:paopaobtn .5s linear}\
.mainAdBox{position:absolute}\
.mainAdBox.chagngeDis{-webkit-animation:chagngeDis 1000ms forwards}\
@-webkit-keyframes chagngeDis{\
0%{top:-20%}\
60%{top:40%}\
100%{top:58px}}\
@media screen and (min-width:320px){\
.page-bottom ul{padding-top: 3px;}\
}\
@media screen and (min-width:360px){\
.page-bottom ul{padding-top: 3px;}\
}\
@media screen and (min-width:375px){\
.page-bottom2 .tjbtn{height:46px}\
.page-bottom2 .tjtext{height:44px;padding:0 78px 0 10px}\
.page-bottom ul{padding-top:6px}}\
@media screen and (min-width:414px){.page-bottom2 .tjbtn{height:46px}\
.page-bottom2 .tjtext{height:44px;padding:0 10px 0 10px}\
.page-bottom ul{padding-top:6px}}")
var isTouch=('ontouchstart' in window)
	,folder=urlFolder()
	,winW=window.innerWidth
	,winH=window.innerHeight
	,t=this
	,boxW=winW
	,boxH=winH
	,originX=boxW/2>>0
	,originY=boxH/2>>0
	,ballMax=120
	,ballMin=90
	,tags=null
	,tagsL=0
	,tagsContent=[]
	,tagsClass=0
	,tagsResult=[]
	,balls={}
	,dataIndex=0
	,zoomX=40
	,zoomY=40
	,tp=-100
	,isRun=1
	,timeHand
	,ballEle
	,_sb=boxH-20
	,_sl=boxW/2-80
	,sound=new Audio
	,_elePro={left:0,top:0,ex:0,ey:0,sx:0,sy:0,zindex:1}
	,share={title:$opt.shareTitle,desc:$opt.shareDesc,ico:$opt.shareIco}
	,hoopBox=createNode(DB,"div",{style:"position:absolute;top:0;left:0;width:100%",html:"<div class='hoop a1'></div><div class='hoop a2'></div><div class='hoop a3'></div>"},"p2")
	,paopaoBox=createNode(DB,"div",{style:"position:absolute;top:0;left:0;width:100%"})
	,ballBox=DB.querySelector('.ballBox')
	,info=createNode(DB,"b",{html:"拖动你想要的<br>放入许愿球池，万一实现了呢",style:"color:#fff;font-size:1.5em;font-weight:normal;text-align:center;width:300px;top:180px;position:absolute;left:50%;-webkit-transform:translate(-50%,0);text-shadow:#000 0 0 1px "})	
	,lwIco=createNode(DB,"img",{src:icoPath+"lw.png",style:"position:absolute;right:0;top:160px;width:60px"})
	,inputCss="position:absolute;right:0;top:160px;width:60px;height:60px;z-index:1;opacity:0;-webkit-user-modify:read-write-plaintext-only;-webkit-tap-highlight-color:rgba(0,0,0,0)"
	,inputBox=createNode(DB,"input",{type:"text",style:inputCss,placeholder:"最多输入6个字符哦"})
	,banner=createNode(DB,"div",{className:"page-top",id:"page_top",html:'<p>距离大奖揭晓还有 <label id="djtime"></label> 秒<br>\
    	本轮玩家<label id="nbof_people"><b>1</b><b>8</b><b>0</b><b>8</b><b>0</b></label>人 奖池<label id="nbof_money"><b>8</b><b>7</b><b>8</b><b>6</b></label>元</p>'},'p3')
    window.requestAnimationFrame=window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function(callback){
        setTimeout(callback,1000 / 60);
    };
    window.cancelAnimationFrame=window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.msCancelAnimationFrame || function(id){
        clearTimeout(id);
    };
	window.orientation=0
    Math.clamp=function(n,min,max){
        return Math.max(min,Math.min(n,max));
    };
    var Device=(function(){
        var Device={}
		,init=false
		,gravity
		,orientation={pitch:0,roll:0}
		,acceleration={x:0,y:0}
		,RADIANS=Math.PI / 180;
        function setSize(){
            Engine.fitBalls();
            Stage.width=window.innerWidth;
            Stage.height=window.innerHeight;
            Engine.fitBalls();
        }
        function onVisibilityChanged(event){
            if(document.hidden || document.webkitHidden || document.mozHidden){
                Engine.pause();
            } else if(Stage.isEnabled()){
                setSize();
                Engine.play();
            }
        }
		var lastTime=+new Date,theTime,lastX=0,lastY=0,lastZ=0,maxRange=2000,diffTime; 
        function onMotion(event){
            if(Device.isMobile&& event.acceleration){
				var at=event.acceleration,x1=at.x,y1=at.y,z1=at.z
                acceleration.x=x1 / 2;
                acceleration.y=y1 / 2;
				theTime=+new Date
				diffTime=theTime-lastTime
				if(diffTime>200){
				  lastTime=theTime;
				  var speed=Math.abs(x1+y1+z1-lastX-lastY-lastZ)/diffTime*10000;
				  if(speed>maxRange){
					sound.src="media/y2.mp3"
					sound.play();
					Device.reSet();
					Engine.swapMode();
				  }
				  lastX=x1;
				  lastY=y1;
				  lastZ=z1;
				}			
            }
        }
        function onOrientation(event){
            if(event && orientation.roll !== undefined && orientation.pitch !== undefined){
                var roll=event.gamma,pitch=event.beta;
                if(Device.isMobile){
                    roll=Math.cos(pitch*RADIANS)*Math.sin(roll*RADIANS);
                    pitch=Math.sin(pitch*RADIANS);
					orientation.roll +=(roll*gravity-orientation.roll)/ 4;
					orientation.pitch=pitch*gravity;

                }else{
                    orientation.roll=0;
                    orientation.pitch=gravity;
                }
			  console.log(113,Device.isMobile,gravity,orientation)
            }
        }
        function onOrientationChanged(event){
            Stage.width=window.innerWidth;
            Stage.height=window.innerHeight;
            window.scrollTo(0,0);
            setTimeout(setSize,100);
        }
		Device.reSet=function(){
			Device.isMobile=0;
			orientation.pitch=2;
			orientation.roll=0;
			acceleration.x=0;
			acceleration.y=0
			}
		Device.recover=function(){
			Device.isMobile=1;
			orientation.pitch=0;
			orientation.roll=0
			}			
        Device.getForces=function(o){
            var fx,fy;
            switch((o+360)%360){
            case 90:
                fx=-acceleration.y+orientation.pitch;
                fy=-acceleration.x-orientation.roll;
                break;
            case 180:
                fx=-acceleration.x-orientation.roll;
                fy=-acceleration.y-orientation.pitch;
                break;
            case 270:
                fx=acceleration.y-orientation.pitch;
                fy=acceleration.x+orientation.roll;
                break;
            default:
                fx=acceleration.x+orientation.roll;
                fy=-acceleration.y+orientation.pitch;
            }
            return {
                x:fx,
                y:fy
            };
        };
        Device.getRoll=function(o){
            return orientation.roll*-90 / gravity-(o % 180);
        };
        Device.getGravity=function(){
            return gravity;
        };
        Device.setGravity=function(value){
            gravity=Device.isMobile && Stage.getSquareSize()<600 ? value / 2 :value;
			console.log(161,gravity,"Device.isMobile",Device.isMobile)
            if(!Device.isMobile){
                orientation.roll=0;
                orientation.pitch=gravity;
            }
        };
        function hasTransform3D(){
            var el=document.createElement('p'),has3d,transforms={
                'webkitTransform':'-webkit-transform',
                'transform':'transform'
            };
            document.body.insertBefore(el,null );
            for(var t in transforms){
                if(el.style[t] !== undefined){
                    el.style[t]='translate3d(1px,1px,1px)';
                    has3d=window.getComputedStyle(el).getPropertyValue(transforms[t]);
                }
            }
            document.body.removeChild(el);
            return( has3d !== undefined && has3d.length > 0 && has3d !== 'none');
        }
        Device.init=function(){
            if(init || !document.body.classList || !hasTransform3D()){
                return false;
            }
            init = true;
            Device.isMobile=0;
            addEvent(DO,'webkitvisibilitychange',onVisibilityChanged,false);
            addEvent(window,'devicemotion',onMotion,false);
            addEvent(window,'deviceorientation',onOrientation,false);
			addEvent(window,'orientationchange',onOrientationChanged,false);
            setSize();
            if(navigator.standalone){
                document.body.classList.add('app');
            }
            return true;
        };
        return Device;
    })();
    var Stage=(function(){
        var Stage={},init=false,enabled=false,stage;
        function Pointer(size){
            this.x=0;
            this.y=0;
            this.dx=0;
            this.dy=0;
            this.offsetX=0;
            this.offsetY=0;
            this.down=false;
            this.size=120;
        }
        Pointer.prototype.move=function(x,y){
            this.dx=x-this.x;
            this.dy=y-this.y;
            this.x=x;
            this.y=y;
        };
        Pointer.prototype.setOffset=function(offsetX,offsetY,angle){
            var a=angle / 180*Math.PI
              ,sa=Math.sin(a)
              ,ca=Math.cos(a);
            this.offsetX=ca*offsetX-sa*offsetY;
            this.offsetY=sa*offsetX+ca*offsetY;
        };
        Pointer.prototype.updateSize=function(){
            this.size=Stage.getSquareSize()<600?50:120;
        };
        Stage.pointer=new Pointer();
        function onMouseDown(event){
            Stage.pointer.down=true;
            Stage.pointer.updateSize();
            Engine.bounceBalls(120);
            preventDefault(event);
        }
        function onMouseMove(event){
            Stage.pointer.move(event.clientX,event.clientY);
        }
        function stopDrag(event){
            Stage.pointer.down=false;
            Engine.releaseBalls();
        }
        function onTouchStart(event){
            if(event.touches && event.touches.length === 1){
                Stage.pointer.down=true;
                Stage.pointer.updateSize();
                Stage.pointer.move(event.touches[0].clientX,event.touches[0].clientY);
            }
            preventDefault(event);
        }
        function onTouchMove(event){
            if(event.touches && event.touches.length === 1){
                Stage.pointer.move(event.touches[0].clientX,event.touches[0].clientY);
            }
        }
        Stage.width=0;
        Stage.height=0;
        Stage.error=false;
        Stage.getSquareSize=function(){
            return Math.sqrt(Stage.width*Stage.height);
        };
        Stage.swapMode=function(newMode,oldMode){
            if(stage){
                stage.classList.remove(oldMode);
                stage.classList.add(newMode);
            }
        };
        Stage.add=function(div){
            if(stage){
                stage.appendChild(div);
            }
        };
        Stage.enable=function(){
            if(stage){
                stage.classList.add('grab');
                enabled=true;
            }
        };
        Stage.isEnabled=function(){
            return enabled;
        };
        Stage.hide=function(){
            if(get){
                get('.stage').style.display='none';
            }
        };
        Stage.init=function(){
            if(init){
                return;
            }
            init=true;
            stage=ballBox;
            if(stage){
                addEvent(stage,'mousedown',onMouseDown,false);
                addEvent(stage,'mousemove',onMouseMove,false);
                addEvent(stage,'mouseup',stopDrag,false);
                addEvent(stage,'mouseleave',stopDrag,false);
                addEvent(stage,'contextmenu',preventDefault,false);
                addEvent(stage,'touchstart',onTouchStart,false);
                addEvent(stage,'touchmove',onTouchMove,false);
                addEvent(stage,'touchend',stopDrag,false);
                addEvent(stage,'touchcancel',stopDrag,false);
            }
        };
        return Stage;
    })();
//小球模块------------------------------------------------------------------------------------------------------------------------------------------------------------------------	
    var Ball=(function(){
        function Ball($opt){
            this.x=$opt.x;
            this.y=$opt.y;
            this.px=$opt.px;
            this.py=$opt.py;
            this.radius=$opt.radius;
			this.textContent=$opt.html;
			this.className=$opt.className;
            this.draggable=false;
            this.drag=false;
            this.roll=false;
            this.angle=0;
            this.el=null
			this.action=$opt.action
        }
        function onMouseDown(event){
            if(event){
                if(this.draggable){
                    this.drag=true;
                    Stage.pointer.setOffset((event.offsetX||event.layerX)+parseFloat(this.el.style.left),(event.offsetY || event.layerY)+parseFloat(this.el.style.top),this.angle);
                } else {
                    Engine.popBubble(this);
                }
                stopImmediatePropagation(event);
            }
        }
        function onTouchStart(event){
            if(event){
                if(event.touches && event.touches.length === 1){
                    this.drag=true;
                    var x=event.touches[0].clientX;
                    var y=event.touches[0].clientY;
                    Stage.pointer.x=x;
                    Stage.pointer.y=y;
                    Stage.pointer.setOffset(x-this.x,y-this.y,0);
                }
                preventDefault(event);
                stopImmediatePropagation(event);
            }
        }
        function initElement(ball){
            var el=DO.createElement('div'),radius=ball.radius,sty=el.style;
            el.innerHTML=ball.textContent;
			el.setAttribute("action",ball.action);
            el.className='ball '+ball.className;
            sty.width=sty.height=(radius*2)+'px';
            sty.left=sty.top=(-radius)+'px';			
			addEvent(el,'mousedown',function(event){
                onMouseDown.call(ball,event);
            });		   
            addEvent(el,'mouseup',function(){
				ball.release.call(ball,event)
			});
			addEvent(el,'touchstart',function(event){
                onTouchStart.call(ball,event);
            });
			addEvent(el,'touchend',function(event){
                ball.release.call(ball,event);
            });	
			addEvent(el,'touchcancel',function(event){
                ball.release.call(ball,event);
            });	
			ball.sty=sty;
            return el;
        }
        Ball.prototype.setMode=function(){
			this.el=initElement(this)
            this.roll=false;
            this.drag=false;
            this.draggable=true;
            this.angle=0;
            this.move();
        };
        Ball.prototype.force=function(fx,fy){
            this.x += fx;
            this.y += fy;
            if(this.roll){
                this.angle +=(this.x-this.px)/ this.radius*36;
            }
            var x=this.x*2-this.px;
            var y=this.y*2-this.py;
            this.px=this.x;
            this.py=this.y;
            this.x=x;
            this.y=y;
        };
        Ball.prototype.release=function(){
            if(this.drag){
                this.drag=false;
                this.px=this.x-Stage.pointer.dx*0.3;
                this.py=this.y-Stage.pointer.dy*0.3;
            }
        };
        Ball.prototype.move=function(angle){
            var transform='translate3d('+this.x+'px,'+this.y+'px,0)';
            if(!this.roll){
                this.angle=angle;
            }
            if(this.angle){
                transform += 'rotateZ('+this.angle+'deg)';
            }
            this.sty.webkitTransform=transform;
        };
        return Ball;
    })();
    var Engine=(function(){
        var Engine={}
		,init=false
		,useFloor=true
		,updateID
		,mode
		,modeNext
		,balls=[]
		,size={min:0,max:0}
		,magnitude
		,speed
		,elasticity=1
		,tick=0
		,fps=0
		,total=0
		,totalNext=0
		,MIN=1
		,ballRadius=+$opt.ballRadius
		,ballCount=+$opt.ballCount
		,DAMPING=0.8
		,ACCURACY=3
		,isMobile=1
		,data
		,CN=['b1','b2','b3','b4','b5','b6']
		,box=ballBox
		,hoops=DB.querySelectorAll(".hoop")
		,hoopsData=[];
		for(var i=0,p=0;i<hoops.length;i++){
			p=hoops[i].getBoundingClientRect()
			hoopsData[i]={left:p.left,top:p.top,x:p.left+p.width/2,y:p.top+p.height/2}
			}
        function setMode(newMode){			
            Stage.swapMode(newMode,mode);
            addBalls();
            useFloor=true;
        }
        function setSpeed(value){
            speed=value;
            magnitude=Math.pow(speed / ACCURACY,2);
        }
        Engine.swapMode=function(value){
            if(useFloor){				
				Device.reSet();
                Engine.bounceBalls(20*Device.getGravity());
                modeNext=value;
                totalNext=0;
                useFloor=false;
 			console.log(445,"Device.isMobile",Device.isMobile)
           } else
                setMode(value,false);
        };
        function resolveCollisions(){
            for(var i=total;i--;){
                var b1=balls[i],dx,dy,dist,distEdge;
                if(Stage.pointer.down){
                    dx=b1.x-Stage.pointer.x;
                    dy=b1.y-Stage.pointer.y;
                    dist=Math.sqrt(dx*dx+dy*dy);
                    if(dist > 0){
                        distEdge=dist-b1.radius-Stage.pointer.size;
                        if(distEdge<0){
                            b1.x -= dx*distEdge / dist / 2;
                            b1.y -= dy*distEdge / dist / 2;
                        }
                    } else {
                        b1.x += Math.random();
                        b1.y -= Math.random();
                    }
                }
                for(var j=total;j--;){
                    if(j !== i){
                        var b2=balls[j];
                        dx=b1.x-b2.x;
                        dy=b1.y-b2.y;
                        dist=Math.sqrt(dx*dx+dy*dy);
                        if(dist > 0){
                            distEdge=dist-b1.radius-b2.radius;
                            if(distEdge<0){
                                var bx=dx*distEdge / dist / 2;
                                var by=dy*distEdge / dist / 2;
                                b1.x -= bx;
                                b1.y -= by;
                                b2.x += bx;
                                b2.y += by;
                            }
                        } else {
                            b1.x += Math.random();
                            b1.y -= Math.random();
                        }
                    }
                }
            }
        }
        function checkWalls(){
            var upsideDown=Device.getGravity()<0
              ,dropped=0;
            for(var i=total;i--;){
                var ball=balls[i];
                if(ball&&!ball.drag){
                    var vx=ball.px-ball.x
                      ,vy=ball.py-ball.y;
                    if(ball.x<ball.radius){
                        ball.x=ball.radius;
                        ball.px=ball.x-vx*DAMPING;
                    } else if(ball.x > Stage.width-ball.radius){
                        ball.x=Stage.width-ball.radius;
                        ball.px=ball.x-vx*DAMPING;
                    }
                    if((isMobile||upsideDown)&& ball.y<ball.radius){
                        if(useFloor){
                            ball.y=ball.radius;
                            ball.py=ball.y-vy*DAMPING;
                        } else if(ball.y<ball.radius*-2){
                            dropped++;
                        }
                    } else if(ball.y<Stage.height*-2-ball.radius){
                        ball.y=Stage.height*-2-ball.radius;
                        ball.py=ball.y-vy*DAMPING;
                    } else if((isMobile || !upsideDown)&& ball.y > Stage.height-ball.radius){
                        if(useFloor){
                            ball.y=Stage.height-ball.radius;
                            ball.py=ball.y-vy*DAMPING;
                        } else if(ball.y > Stage.height+ball.radius*2){
                            dropped++;
                        }
                    } else if(ball.y > Stage.height*3-ball.radius){
                        ball.y=Stage.height*3-ball.radius;
                    }
                }
            }
            if(!useFloor && dropped > total-1){
                clear(function(){setMode(modeNext,true)});
            }
        }
        function testOverlap(x,y,r){
            for(var i=total;i--;){
                var ball=balls[i];
                if(ball){
                    var dx=ball.x-x
                      ,dy=ball.y-y
                      ,dist=Math.sqrt(dx*dx+dy*dy);
                    if(dist<ball.radius+r){
                        return true;
                    }
                }
            }
            return false;
        }
		function clear($fun){
				total=0;
				balls=[];
				box.innerHTML="";
				$fun()			
			}
        function addBall(n,box,radius){
            var attempt=10;
            while(attempt){
                var x=Math.random()*(Stage.width-radius*2)+radius
                  ,y=Math.random()*(Stage.height-radius*2)+radius;
                if(testOverlap(x,y,radius)||Intro.hitTest(x,y,radius)){
                    attempt--;
                } else {
                   var ball=balls[n];
                    if(ball){
                        ball.x=x;
                        ball.y=y;
                        ball.px=x+(Math.random()-0.5)*2*speed;
                        ball.py=y+(Math.random()-0.5)*speed;
                        ball.setMode();
						box.appendChild(ball.el)
                    }
                    return true;
                }
            }
			balls.splice(n,1)
            return false;
        }
        function addBalls(){
            var stageSize=Math.ceil(Stage.getSquareSize()),pow=3,n=0,i=0,dl=data.length,di=0;
                size.min=stageSize<600 ? 6 :4;
                size.max=Math.clamp(50 / 1.2,45,80);
                Device.setGravity(2);
		     setSpeed(1);
			var time=setInterval(function(){
				if(i<ballCount){
					var dd=data[di=di<dl?di+1:0]
					txt=dd.name
					createBall(ballRadius+txt.length*5,-200,-200,0,0,txt,CN[i%6],dd.id)
					i++
				}else{
					clearInterval(time)
					setTimeout(Device.recover,1000)
				}
			},60)
        }
		function createBall(a,b,c,d,e,f,g,h){
			  var ball=new Ball({x:e,y:c,px:b,py:d,radius:a,html:f,className:g,action:f+".,"+g+".,"+h});
                balls.push(ball);
				if(addBall(total,box,a))total+=1
			}
        Engine.setTotal=function(value){
            Engine.swapMode(mode);
            totalNext=value;
        };
        Engine.setElasticity=function(value){
            elasticity=value;
        }
        function getTick(){
            if(window.performance && performance.now){
                return performance.now();
            } else if(Date.now){
                return Date.now();
            } else {
                return +new Date;
            }
        }
        function update(){
            fps +=((1000 /(getTick()-tick))-fps)/ 4;
            tick=getTick();
            setSpeed(60 / Math.clamp(fps,30,60));//设置球的速度
            for(var i=ACCURACY;i--;){
                forceBalls();
                resolveCollisions();
                checkWalls();
            }
            moveBalls();
            updateID=requestAnimationFrame(update);
        }		
        function forceBalls(){
            var o=Device.getForces(window.orientation);
            for(var i=total,x1,y1,ball;i--;){
                ball=balls[i];
                if(ball){
                    if(ball.drag){
                        ball.x=Stage.pointer.x-Stage.pointer.offsetX;
                        ball.y=Stage.pointer.y-Stage.pointer.offsetY;
						for(var ii=0,hoop,iil=hoopsData.length,x2,y2,c=5;ii<iil;ii++){
							hoop=hoopsData[ii];	
							x2=hoop.x,y2=hoop.y				
							if((ball.x>x2-c&&ball.x<x2+c)&&(ball.y>y2-c&&ball.y<y2+c)){
								sound.src="media/j1.mp3";
								sound.play();
								total-=1;iil-=1
								balls.splice(i,1);
								hoopsData.splice(ii,1);
								getBall.call(ball,x2,y2)
								break
							}
						}
                    } else {
                        ball.force(o.x*magnitude,o.y*magnitude);
                    }
                }
            }
        }
        function moveBalls(){
            var roll=Device.getRoll(window.orientation);
            for(var i=total;i--;){
                var ball=balls[i];
                if(ball){
                    ball.move(roll);
                }
            }
        }
		function getBall($l,$t){
			var t=this,sty=this.sty,ball=this.el,ac=ball.getAttribute("action").split(".,"),scale=30/t.radius
			sty.webkitTransition="all 300ms ease";
			sty.webkitTransform="translate3d("+$l+"px,"+$t+"px,0) scale("+(scale-.2)+")";
			sty.opacity=0.5;	
			setTimeout(function(){
				sty.opacity=1
				sty.webkitTransform="translate3d("+$l+"px,"+$t+"px,0) scale("+scale+")"
				setTimeout(function(){hoopBox.appendChild(ball)},200)
				},300)
			}
		Engine.add=function(txt){
			createBall(ballRadius+txt.length*5,-200,-200,0,0,txt,CN[setRandomInt(1,6)],0)
			}	
        Engine.bounceBalls=function(fy){
            if(!fy || !useFloor){
                return;
            }
            fy=Math.abs(fy)/ speed*magnitude*elasticity;
            for(var i=total;i--;){
                var ball=balls[i];
                if(ball){
                    if(Device.getGravity()<0 && ball.y<ball.radius*2){
                        ball.force(0,fy+Math.random());
                    } else if(ball.y > Stage.height-ball.radius*2){
                        ball.force(0,-fy-Math.random());
                    }
                }
            }
        };
        Engine.fitBalls=function(){
            if(!Stage.error && Stage.width && Stage.height){
                var dy=(window.innerHeight-Stage.height)|| 0,dx=(window.innerWidth-Stage.width)|| 0,ball;
                for(var i=total;i--;){
                    ball=balls[i];
                    if(ball){
                        if(Stage.isEnabled()){
                            if(dx<0 || dy<0){
                                ball.x += dx;
                                ball.y += dy;
                            }
                        } else {
                            ball.x += dx / 2;
                            ball.y += dy / 2;
                        }
                    }
                }
                for(i=ACCURACY;i--;){
                    resolveCollisions();
                    checkWalls();
                }
                for(i=total;i--;){
                    ball=balls[i];
                    if(ball){
                        ball.px=ball.x;
                        ball.py=ball.y;
                    }
                }
                moveBalls();
            }
        };
        Engine.releaseBalls=function(){
            for(var i=total;i--;){
                var ball=balls[i];
                if(ball){
                    ball.release();
                }
            }
        };
        Engine.popBubble=function(bubble){
            if(mode === 'bubbles'){
                addBall(bubble.id,bubble.radius,true);
                bubble.py=bubble.y-Math.random()*20;
            }
        };
        Engine.pause=function(){
            cancelAnimationFrame(updateID);
        };
        Engine.play=function(){
            if(Stage.error){
                return;
            }
            Stage.enable();
            cancelAnimationFrame(updateID);
            fps=60;
            update();
        };
        Engine.init=function(mode,$data){
            if(init)return;init=true; 
			data=$data          
            setSpeed(1);
            setMode(mode);
            var hiDPI=window.devicePixelRatio >= 1.3;
        };
		Engine.run=function($data){
			DB.style.cssText="width:100%;height:100%;background:rgb(52, 128, 216) url("+$data.background+") no-repeat center center;background-size:100% auto"
		 	Engine.init("XD",tags=$data.data);
			Engine.play();			
			}
        return Engine;
    })();
    var Intro=(function(){
        var Intro={},init=false,introText,introMain,introTitle,introButton;
        function removeIntro(){
            introMain.parentNode.removeChild(introMain);
        }
        function onIntroDropped(event){
            if(event && event.propertyName === 'top'){
                delEvent(introTitle,'transitionend',onIntroDropped);
                removeIntro();
            }
        }
        Intro.hitTest=function(x,y){
            if(Stage.isEnabled()|| Stage.width<601 || Stage.height<481){
                return false;
            }
            var introX=Stage.width / 2
              ,introY=Stage.height / 2
              ,introWidth=380
              ,introHeight=190;
            if(x > introX-introWidth && x<introX+introWidth && y > introY-introHeight && y<introY+introHeight){
                return true;
            }
            return false;
        };
        Intro.error=function(){};
        Intro.init=function(){
            if(init)return;
            init=true;
        };
        return Intro;
    })();  
	if(Device.init()){
		Stage.init();
		addEvent(DO,isTouch?"touchstart":"click",clickAction);
	}
	setTimeout(function(){
		info.style.webkitTransition="opacity 500ms ease"
		info.style.opacity="0"
		setTimeout(function(){
			info.innerHTML="<img src='"+icoPath+"s3.png' style='width:200px;animation:yyy .7s linear 2' >"
			info.style.opacity="1"
			setTimeout(function(){
				info.style.opacity="0"
				setTimeout(function(){
					DB.removeChild(info)
					},600)
				},2000)
			},1000)
		},3000)
			
var count_nn=mainVar.mainData.countdown,count;
	mainVar.jj=nbof_money;
	mainVar.people=nbof_people
	count_down();
	count=setInterval(count_down,1000)
//addEvent(wrap,isTouch?"touchstart":"click",t);
//	addEvent(wrap,isTouch?"touchmove":"mousemove",t);
//	addEvent(wrap,isTouch?"touchend":"mouseout",t);
wxShare({token:'tvmcj',resources:location.href,link:location.href,title:share.title,ico:share.ico,desc:share.desc});
sound.src="media/pop_1.mp3";
addEvent(window,"resize",inputTxt);
addEvent(inputBox,"blur",inputTxt)
addEvent(inputBox,"focus",displayInput)
addEvent(inputBox,"keyup",function(e){
	if(e.keyCode===13){
		inputTxt()	
		};
	})	
function displayInput(){
	var top=winH-40,width=winW-60
	inputBox.style.cssText="position:absolute;height:25px;top:"+top+"px;width:"+width+"px;left:30px"
	}
function inputTxt(){
	var t=inputBox,txt=trim(t.value)
	if(txt!==""){
		if(txt.length<7){
		t.blur();
		t.value="";
		t.style.cssText=inputCss;
		setTimeout(function(){
			sound.src="media/pop_1.mp3"
			sound.play()
			ballEngine.add(txt)
			},1000)
		}else{
			tishi("您输入的字符太多")
			}
		}
	}	
return Engine;function clickAction(e){
		var ele=e.srcElement||e.target,_action="action",attribute,argument;				
			do{
				if(ele.nodeType!==1)break
				if(attribute=ele.getAttribute(_action))break			
				}while(ele=ele.parentNode)	
			if(attribute){										
			argument=attribute.split(".,");
			var a1=argument[1];
			switch(argument[0]){
				case "select":
					isRun=0;
					tagCloud.select(ele,a1,argument[2])
				break
				case "display":
					tagCloud.display(ele)
				break
				case "slecetTag":
					tagCloud.change(ele,argument[2],a1,argument[3])
				break
				case "searchmylove":
					gosearch.init(ele);
				break
			}
		}
	}	
	function count_down(){
		count_nn--;
		if(count_nn===15){
			//createVido('https://q-cdn.mtq.tvm.cn/Public/user-uploads/videos/20160303/1456990478-19157.mp4');
	//		smallBox.style.top="270px"
	//		smallBox.style.transition="all 1000ms ease"
		}else if(count_nn===3){
			if(tj12){
				tj12=0;
				tjData["album_name"]=encodeURIComponent(tagsResult.join(","));
				TJ(120000);			
			}
		}
		if(count_nn<1){
			clearInterval(count);
			getBqBD()
		}
		djtime.innerHTML=count_nn.toString().replace(/(.)/g,"<b>$1</b>")
	};	
function random(){
	var a=[25,30,0,50,0,15,20,5,35,1,0,60,45,10,75,40,55,70,65,80],r=Math.random(),l=a.length*r>>0
	if(Math.abs(tp-a[l])<20){
	return random()
	}else{tp=a[l]
		return r*10+tp
	}
}
function setRandomInt(min,max) {//随机数整数
    return Math.floor(Math.random()*(max - min+1))+min
}
function setRandomReal(min, max) {//自然随机数
    return Math.random()*(max-min)+min
}
function setRandomColor() {//随机颜色
    var randomColor1=setRandomInt(30, 230);
    var randomColor2=setRandomInt(30, 230);
    var randomColor3=setRandomInt(30, 230);
    return "rgb(" +randomColor1+", "+randomColor2+", "+randomColor3+")"
}
function setColor(){
	var color="purple,yellow,pink,red,orange,blue,cyan,green".split(","),cl=color.length,r=Math.random()*cl>>0;
	return color[r]
	}
function getRandomBallRadius() {//随机大小
    return getRandomInteger(constants.minRadius, constants.maxRadius)
}
function getRandomSpeed() {//随机数度
    return getRandomReal(-constants.randomSpeedRange,constants.randomSpeedRange)
}	
    function preventDefault(event){
        event.preventDefault();
    }
    function stopImmediatePropagation(event){
        event.stopImmediatePropagation();
    }
    function preloadImage(file){
        var image=new Image();
        image.src=file;
    }
function replacefn(msg,e){return msg.replace(/(.)/g,"<"+e+">$1</"+e+">")}
function addpapaw($t,$id,$c){
	if(!$t)return
	if(tagsResult.length>2){
		tishi("最多只能选三个哦~");return
	}
	if(tagsResult.indexOf($t)>-1)return;
	tagsResult.push($t)
	if(tagsContent.indexOf($t)>-1){
		console.log("已经添加")
		return
		}
	tagsContent.push($t);
	var lis,ll,cla,sc=($c?$c:'b'+setRandomInt(1,6));
	if($t.length<=3)cla=sc+'ss less3';else cla=sc+"s";
	placeholder.style.display="none";
	//sound.src="media/pop_1.mp3"
	//sound.play();
	setTimeout(function(){
		mainVar.lbox=createNode(papaw_list,"li",{className:"paopao "+cla,html:$t},"p3");
		gosearch.paopaobtn(mainVar.lbox,'paopao');
		if(papaw_list.innerHTML){
			lis=papaw_list.querySelectorAll('li');
			ll=lis.length;
			if(ll>3){
				papaw_list.removeChild(lis[0]);
				papaw_list.className='toleft';
				setTimeout(function(){papaw_list.className=''},400)
			}
		}
		if(sendCount<sendCountMax){
			sendCount++;
			socket.sendMsg($t)
		}
	},400)
}
var qipaoData=[],userTag=[],sendCount=0,sendCountMax=3;
function displayTag($data){//显示冒泡标签
	var i=0,lis=wrap.children,il=lis.length,li,tag=$data.tag,user=$data.user,top;
	if(!tag)return
	for(;i<il;i++){
		li=lis[i];		
		if(li.getAttribute("tag")===tag&&qipaoData.indexOf(tag)===-1){
			displayPP(li,tag,user)
			}
		}
	}
function displayPP(li,tag,user){
	var p=li.getBoundingClientRect()
		pTop=p.top
		pLeft=p.left
		pWidth=p.width
		if(pTop<40||pTop>winH-pWidth)return
		qipaoData.push(tag)
//	var sty=li.style
//		sty.left=pLeft+"px";
//		sty.top=pTop+"px";
//		sty.transition="";
//		sty.webkitTransition="";
//		sty.animation="";
	var tagWidth=176
		,ox=winW/2
			//屏幕中心点位置
		,x=pLeft+pWidth/2 
			//球的中心点位置
		,lr=x>ox?"r":"l"
		,m="8px 6px 0 10px"
		,sLeft,eLeft
		,label="",img="",float=""
			if(lr==="r"){
				eLeft=x-tagWidth
				sLeft=eLeft+20;
				m="8px 10px 0 6px";
				float="float:left";
			}else{
				eLeft=x;
				sLeft=x-20;
				float="float:right"
			}
			img="<img src='"+decodeURIComponent(user.avast)+"/96' style='vertical-align:top;border-radius:50%;width:30px;height:30px;margin:2px;"+float+"'>"
			label="<label style='display:inline-block;margin:"+m+";color:#0085BC;font-size:14px'>"+decodeURIComponent(user.nickName)+"要"+tag+"</label>"	
			html=label+img;
		var paopao=createNode(paopaoBox,"div",{html:html,style:"position:absolute;min-width:157px;top:"+pTop+"px;left:"+sLeft+"px;opacity:0;height:34px;background:rgba(255,255,255,.7);border-radius:36px;-webkit-transition:all 350ms ease;z-index:3000"})
			,asty=paopao.style
			setTimeout(function(){
				asty.opacity=1;//显示气泡
				asty.left=eLeft+"px";
				setTimeout(function(){
					asty.opacity=0;//隐藏气泡
					asty.left=sLeft+"px";
					paopao.addEventListener("webkitTransitionEnd",A);
					//aginRun(li,pTop)
					function A(){	
						paopao.removeEventListener("webkitTransitionEnd",A);
						qipaoData.splice(qipaoData.indexOf(tag),1)
						setTimeout(function(){
							paopao&&paopaoBox.removeChild(paopao);							
							},350)
						}					
					},2500)	
			},100)	
	}	
//HOST.SOCKET="120.27.82.154"
//var socket=new setSocket({
//	url:location.protocol+"//"+HOST.SOCKET+"/chat"
//	,room:"paopao"+PAGE.yyyappid
//	,category:0
//	,onmessage:function($data){
//		var data=toObject($data)
//		if(data){
//			data=data.data;
//			if(data.sender){
//				console.log(data)
//				userTag.push({tag:decodeURIComponent(data.message),user:data.sender})
//			}
//		}
//	}
//	,onerr:function(){console.log('Socket错误')}
//});






	
}

