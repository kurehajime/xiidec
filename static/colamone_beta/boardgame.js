!function(e){"use strict";function t(){}function a(){l(),window.innerHeight<window.innerWidth?$(".manual").show():$(".manual").hide(),z=$("#canv")[0].getContext("2d"),N=document.createElement("canvas"),N.width=z.canvas.width,N.height=z.canvas.height,U=document.createElement("canvas"),U.width=z.canvas.width,U.height=z.canvas.height,W=document.createElement("canvas"),W.width=z.canvas.width,W.height=z.canvas.height,J=document.createElement("canvas"),J.width=z.canvas.width,J.height=z.canvas.height,K=document.createElement("canvas"),K.width=z.canvas.width,K.height=z.canvas.height,Q=document.createElement("canvas"),Q.width=z.canvas.width,Q.height=z.canvas.height,V=document.createElement("canvas"),V.width=z.canvas.width,V.height=z.canvas.height,Z=document.createElement("canvas"),Z.width=z.canvas.width,Z.height=z.canvas.height,ee=document.createElement("canvas"),ee.width=z.canvas.width,ee.height=z.canvas.height,te=document.createElement("canvas"),te.width=z.canvas.width,te.height=z.canvas.height,oe=z.canvas.width/6,ie=1,ve=!0,D="ontouchstart"in window,D?($("#canv").on("touchstart",r),$("#canv").on("touchmove",i)):($("#canv").on("mousemove ",o),$("#canv").on("mouseup",r)),$("#level").on("change ",c),$("#prevprev").on("click",E),$("#prev").on("click",F),$("#next").on("click",O),$("#nextnext").on("click",X),$("#replay").on("click",Y),$("#tweetlog").on("click",H),$("#newgame").on("click",L),$("#collapsible").on("click",function(){$(".manual").toggle()}),$(window).on("orientationchange",l),h(),Oe.getItem("level_1")||Oe.setItem("level_1",0),Oe.getItem("level_2")||Oe.setItem("level_2",0),Oe.getItem("level_3")||Oe.setItem("level_3",0),Oe.getItem("level_4")||Oe.setItem("level_4",0),Oe.getItem("level_5")||Oe.setItem("level_5",0),void 0!==Oe.getItem("level_save")&&"undefined"!==Oe.getItem("level_save")&&null!==Oe.getItem("level_save")?$("#level").val([parseInt(Oe.getItem("level_save"))]):(Oe.setItem("level_save",2),$("#level").val([2]));var e=R();e.init?(q=k(e.init),Pe=Aijs.copyMap(q)):q=Aijs.copyMap(Pe),e.log&&(Be=j(e.log,q)),e.lv&&$("#level").val([parseInt(e.lv)]),0!==Be.length?($("#log").show(),$("#prevprev").show(),$("#prev").show(),$("#next").show(),$("#nextnext").show(),$("#span_replay").hide(),$("#span_tweetlog").hide(),$("#next").focus()):($("#log").hide(),$("#prevprev").hide(),$("#prev").hide(),$("#next").hide(),$("#nextnext").hide(),$("#span_replay").hide(),$("#span_tweetlog").hide()),Fe.onload=function(){ne=!0,v(!0,!1)},Fe.onerror=function(){v(!0,!1)},0!==Fe.width&&(ne=!0,v(!0,!1)),setTimeout(function(){0!==Fe.width&&(ne=!0),v(!0,!1)},2500),A(),G(),0===Be.length?(fe=window.setInterval(n,1e3),n()):ve=!1,v(!0,!1)}function n(){s(Math.random()>.3?2:1),C(),v(!1,!1),1!==se&&-1!==se&&0!==se||(se=null,window.clearInterval(fe))}function l(){var e=document.querySelector("meta[name=viewport]");if(screen.width<500&&screen.height<500?screen.width<screen.height?e.setAttribute("content","width=500,user-scalable=no"):e.setAttribute("content","height=500,user-scalable=no"):screen.width<500?e.setAttribute("content","width=500,user-scalable=no"):screen.height<500&&e.setAttribute("content","height=500,user-scalable=no"),/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream){var t=screen.width,a=520;0!==Math.abs(window.orientation)&&(t=screen.height,a=900);var n=Math.round(t/a*1e3)/1e3;n==Math.round(n)&&(n+=1e-4),e.setAttribute("content","initial-scale="+n+", minimum-scale="+n+", maximum-scale="+n+", user-scalable=no")}}function o(e){d(e),v(!1,!0)}function i(e){e.preventDefault(),e.stopPropagation()}function r(e){d(e);var t=10*Math.floor(Re/oe)+Math.floor(ke/oe);if(null!==se||0!==Be.length)return L(),!0;if(ve===!0)return ve=!1,ge=[],Pe=Aijs.copyMap(q),Ee=[],v(!1,!1),se=null,ie=1,window.clearInterval(fe),!0;if(null===le)Pe[t]*ie>0&&(le=t);else{if(t==le)return le=null,void v(!1,!1);var a=Aijs.getCanMovePanelX(le,Pe);a.indexOf(t)>=0&&(v(!1,!0),Pe[t]=Pe[le],Pe[le]=0,ie=-1*ie,Ee.push([le,t]),ge=[le,t],le=null,he="thinking...",window.setTimeout(function(){v(!1,!1)},50),A(),null===se&&window.setTimeout(function(){s($("#level option:selected").val()),he="",A(),v(!1,!1)},250))}v(!1,!1)}function c(){var e=$("#level option:selected").val();Oe.setItem("level_save",e),Oe.getItem("level_"+e)>0?$("#wins")[0].innerHTML=Oe.getItem("level_"+e)+" win!":$("#wins")[0].innerHTML="",Pe=Aijs.copyMap(q),ge=[],_e={},Ee=[],v(!1,!1)}function s(e){var t,a,n=new Date,l=T(Pe)/2,o=0;switch(e=parseInt(e)){case 1:7>=l&&o++;break;case 2:8>=l&&o++;break;case 3:10>=l&&o++,6>=l&&o++;break;case 4:11>=l&&o++,7>=l&&o++;break;case 5:l>16&&o--,12>=l&&o++,8>=l&&o++}t=Aijs.thinkAI(Pe,ie,e+o+1)[0],ge=t,t&&(Pe[t[1]]=Pe[t[0]],Pe[t[0]]=0,Ee.push([t[0],t[1]])),ie=-1*ie,a=new Date,de=(a-n)/1e3}function h(){for(var e in Pe)Pe[e]=0;for(var t=[1,2,3,4,5,6,7,8],a=[0,10,20,30,40,50,11,41],n=[55,45,35,25,15,5,44,14],l=t.length-1;l>=0;l--){var o=Math.floor(Math.random()*(l+1)),i=t[l];t[l]=t[o],t[o]=i}for(e in n)Pe[n[e]]=t[e];for(e in a)Pe[a[e]]=-1*t[e]}function d(e){e.clientX||(e=e.touches?e.originalEvent.touches[0]:e.originalEvent.touches?e.originalEvent.touches[0]:event.touches[0]);var t=e.target.getBoundingClientRect();Re=e.clientX-t.left,ke=e.clientY-t.top}function v(e,t){var a=$.extend(!0,{},Pe);if(z.clearRect(0,0,z.canvas.width,z.canvas.width),t===!1&&(ae=!1),t===!1||ae===!1){z.drawImage(w(e),0,0,z.canvas.width,z.canvas.height),z.drawImage(p(e),0,0,z.canvas.width,z.canvas.height),null!==le&&(a[le]=0),z.drawImage(x(a,ge),0,0,z.canvas.width,z.canvas.height),z.drawImage(I(a),0,0,z.canvas.width,z.canvas.height);var n=te.getContext("2d");n.clearRect(0,0,z.canvas.width,z.canvas.width),n.drawImage(z.canvas,0,0,z.canvas.width,z.canvas.height),ae=!0}else z.drawImage(te,0,0,z.canvas.width,z.canvas.height);z.drawImage(m(),0,0,z.canvas.width,z.canvas.height),0===Re&&0===ke||ve!==!1||z.drawImage(u(),0,0,z.canvas.width,z.canvas.height),z.drawImage(y(),0,0,z.canvas.width,z.canvas.height),ve===!0&&z.drawImage(g(),0,0,z.canvas.width,z.canvas.height)}function f(){var e=Z.getContext("2d");return ne&&e.drawImage(Fe,0,0,z.canvas.width,z.canvas.height,0,0,500,500),Z}function g(){var e=ee.getContext("2d");e.clearRect(0,0,z.canvas.width,z.canvas.width),e.globalAlpha=.5,e.fillStyle="#000000",e.fillRect(0,0,z.canvas.width,z.canvas.height);var t=2*oe,a=3.5*oe;e.shadowBlur=20,e.shadowColor="rgba(0, 0, 0, 0.3)",e.shadowOffsetX=5,e.shadowOffsetY=5,e.globalAlpha=.8,e.fillStyle=Ae,e.beginPath(),e.fillRect(t,a,2*oe,1*oe),e.fill(),e.shadowColor="rgba(0, 0, 0, 0)",e.shadowBlur=0,e.shadowOffsetX=0,e.shadowOffsetY=0;var n=Math.round(.5*oe),l="Play";return e.shadowBlur=0,e.shadowOffsetX=0,e.shadowOffsetY=0,e.shadowColor="rgba(0, 0, 0, 0)",e.font="bold "+n+"px sans-serif",e.globalAlpha=1,e.fillStyle=ue,e.textBaseline="middle",e.textAlign="center",e.beginPath(),e.fillText(l,3*oe,4*oe),l="colamone",n=Math.round(1*oe),e.font="bold "+n+"px sans-serif",e.fillStyle=Ae,e.beginPath(),e.fillText(l,3*oe,2*oe),ee}function u(){var e=Re-Re%oe,t=ke-ke%oe,a=W.getContext("2d");if(a.clearRect(0,0,z.canvas.width,z.canvas.width),a.globalAlpha=.35,a.fillStyle=$e,a.lineWidth=1,a.beginPath(),a.fillRect(e,t,oe,oe),a.globalAlpha=.6,D===!0&&null===le)return W;var n=e/oe*10+t/oe;if(Pe[n]*ie>0)for(var l=Aijs.getCanMovePanelX(n,Pe),o=0;o<=l.length-1;o++)e=Math.floor(l[o]/10),t=Math.floor(l[o]%10),a.globalAlpha=.6,a.strokeStyle=$e,a.lineWidth=5,a.beginPath(),a.arc(e*oe+oe/2,t*oe+oe/2,oe/2-10,0,2*Math.PI,!1),a.stroke();return W}function w(e){if(e===!1)return N;var t=N.getContext("2d");t.clearRect(0,0,z.canvas.width,z.canvas.width);var a=t.createLinearGradient(0,0,z.canvas.width,z.canvas.width);a.addColorStop(0,Ie),a.addColorStop(.3,Me),a.addColorStop(1,be);for(var n=0;6>n;n++)for(var l=0;6>l;l++)t.strokeStyle=ue,0===l?t.fillStyle=we:5==l?t.fillStyle=pe:(n+l)%2===0?t.fillStyle=me:(t.fillStyle=be,t.fillStyle=a),t.beginPath(),t.fillRect(n*oe,l*oe,oe,oe),t.strokeRect(n*oe,l*oe,oe,oe);return N}function p(e){if(e===!1)return U;var t=U.getContext("2d");return t.clearRect(0,0,z.canvas.width,z.canvas.width),t.globalAlpha=.07,t.fillStyle=Ae,t.beginPath(),t.arc(1*oe,-3*oe,7*oe,0,2*Math.PI,!1),t.fill(),U}function m(){var e=Q.getContext("2d");e.clearRect(0,0,z.canvas.width,z.canvas.width);var t=Re-oe/2,a=ke-oe/2;return null!==le&&b(e,t,a,Pe[le],!1),Q}function b(e,t,a,n,l){var o;if(0===n)return e;o=n>0?ye:xe;var i=z.createLinearGradient(t,a,t+oe,a+oe);i.addColorStop(0,"rgb(255, 255, 255)"),i.addColorStop(.4,o),i.addColorStop(1,o),e.shadowBlur=10,e.shadowColor="rgba(0, 0, 0, 1)",e.shadowOffsetX=2,e.shadowOffsetY=2,e.fillStyle=i,e.beginPath(),M(e,t+oe/10,a+oe/10,oe-1*oe/5,oe-1*oe/5,5),e.shadowColor="rgba(0, 0, 0, 0)",e.shadowBlur=0,e.shadowOffsetX=0,e.shadowOffsetY=0,ne&&(e.globalAlpha=.35,e.save(),e.clip(),e.drawImage(f(!0),t+oe/10,a+oe/10,oe-1*oe/5,oe-1*oe/5),e.restore(),e.globalAlpha=1),l?e.fillStyle=Se:e.fillStyle=Ae;var r=Math.round(.18*oe);e.textBaseline="middle",e.textAlign="center",e.font=r+"pt Arial",e.beginPath(),e.fillText(Math.abs(n),t+oe/2,a+oe/2);for(var c=0;c<=Ce[n].length-1;c++)if(0!==Ce[n][c]){var s=t+oe/4.16+Math.floor(oe-1*oe/5)/3*Math.floor(c%3),h=a+oe/4.16+Math.floor(oe-1*oe/5)/3*Math.floor(c/3);l?e.fillStyle=Se:e.fillStyle=Ae,e.beginPath(),e.arc(s,h,.06*oe,0,2*Math.PI,!1),e.fill()}return l&&(e.shadowBlur=10,e.shadowColor="rgba(0, 0, 0, 1)",e.globalAlpha=1,e.fillStyle=Ae,r=Math.round(.5*oe),e.textBaseline="middle",e.textAlign="center",e.font="bolder "+r+"pt Arial ",e.beginPath(),e.fillText(Math.abs(n),t+oe/2,a+oe/2),e.globalAlpha=1,e.shadowColor="rgba(0, 0, 0, 0)",e.shadowBlur=0),e}function M(e,t,a,n,l,o){e.beginPath(),e.moveTo(t+o,a),e.lineTo(t+n-o,a),e.arc(t+n-o,a+o,o,1.5*Math.PI,0,!1),e.lineTo(t+n,a+l-o),e.arc(t+n-o,a+l-o,o,0,.5*Math.PI,!1),e.lineTo(t+o,a+l),e.arc(t+o,a+l-o,o,.5*Math.PI,Math.PI,!1),e.lineTo(t,a+o),e.arc(t+o,a+o,o,Math.PI,1.5*Math.PI,!1),e.closePath(),e.fill()}function I(e){var t=J.getContext("2d");t.clearRect(0,0,z.canvas.width,z.canvas.width);for(var a=0;6>a;a++)for(var n=0;6>n;n++)if(0!==e[10*a+n]){var l=!1;e[10*a+n]>0&&0===n?l=!0:e[10*a+n]<0&&5==n&&(l=!0),t=b(t,a*oe,n*oe,e[10*a+n],l)}return J}function x(e,t){var a=K.getContext("2d");a.clearRect(0,0,z.canvas.width,z.canvas.width);var n,l=t[0]/10|0,o=t[0]%10,i=t[1]/10|0,r=t[1]%10,c=oe-1*oe/5,s=oe-1*oe/5,h=i*oe+oe/10,d=r*oe+oe/10,v=h+s/2,f=d+c/2,g=v,u=f,w=e[t[1]],p="",m=0;if(2!=t.length)return K;if(p=w>0?ye:xe,l==i||o==r)m=(l+o)%2===0&&0!==o&&5!=o?.5:.3,i>l&&(h=h-s+10,g-=s),l>i&&(h=h+s-10,g+=s),r>o&&(d=d-c+10,u-=c),o>r&&(d=d+c-10,u+=c),n=a.createLinearGradient(v,f,g,u),n.addColorStop(0,p),n.addColorStop(m,p),n.addColorStop(1,"rgba(255, 255, 255, 0)"),a.fillStyle=n,a.fillRect(h,d,c,s);else{m=(l+o)%2===0&&0!==o&&5!=o?.3:.5;var b,M,I,$,x,y,A,S;i>l&&r>o&&(b=h,M=d-c,I=h+s,$=d,x=h,y=d+c,A=h-s,S=d,g-=s,u-=c,v+=2*s,f+=2*c),l>i&&o>r&&(b=h+s,M=d,I=h+s+s,$=d+c,x=h+s,y=d+c+c,A=h,S=d+c,g+=s,u+=c,v-=2*s,f-=2*c),i>l&&o>r&&(b=h,M=d,I=h+s,$=d+c,x=h,y=d+c+c,A=h-s,S=d+c,g-=s,u+=c,v+=2*s,f-=2*c),l>i&&r>o&&(b=h+s,M=d-c,I=h+s+s,$=d,x=h+s,y=d+c,A=h,S=d,g+=s,u-=c,v-=2*s,f+=2*c),a.beginPath(),a.moveTo(b,M),a.lineTo(I,$),a.lineTo(x,y),a.lineTo(A,S),a.lineTo(b,M),a.closePath(),n=a.createLinearGradient(v,f,g,u),n.addColorStop(0,p),n.addColorStop(m,p),n.addColorStop(.97,"rgba(255, 255, 255, 0)"),a.fillStyle=n,a.fill()}return K}function y(){var e=V.getContext("2d"),t=1.3*oe,a=2.5*oe;if(e.clearRect(0,0,z.canvas.width,z.canvas.width),""===he)return V;e.shadowBlur=10,e.shadowColor="rgba(100, 100, 100, 0.5)",e.shadowOffsetX=5,e.shadowOffsetY=5,e.globalAlpha=.9,e.fillStyle=Ae,e.beginPath(),e.fillRect(t,a,3.4*oe,1*oe),e.fill();var n=Math.round(.36*oe);return e.shadowBlur=0,e.shadowOffsetX=0,e.shadowOffsetY=0,e.shadowColor="rgba(0, 0, 0, 0)",e.font="bold "+n+"px sans-serif",e.globalAlpha=1,e.fillStyle=ue,e.textBaseline="middle",e.textAlign="center",e.beginPath(),e.fillText(he,3*oe,3*oe),V}function A(){C();$("#blue")[0].innerHTML="Blue: "+re+"/8",$("#red")[0].innerHTML="Red: "+ce+"/8",$("#time")[0].innerHTML="("+de.toFixed(3)+"sec)",0===Be.length&&(1==se?(he="You win!",Oe.setItem("level_"+$("#level option:selected").val(),parseInt(Oe.getItem("level_"+$("#level option:selected").val()))+1),S()):-1==se?(he="You lose...",Oe.setItem("level_"+$("#level option:selected").val(),0),S()):0===se&&(he=_e[JSON.stringify(Pe)]>=Te?"3fold repetition":"-- Draw --",S())),Oe.getItem("level_"+$("#level option:selected").val())>0?$("#wins")[0].innerHTML=Oe.getItem("level_"+$("#level option:selected").val())+" win!":$("#wins")[0].innerHTML=""}function S(){0===Be.length&&($("#span_replay").show(),$("#span_tweetlog").show())}function C(){var e=0,t=0,a=[0,10,20,30,40,50],n=[5,15,25,35,45,55];for(var l in a)1*Pe[a[l]]>0&&(e+=Pe[a[l]]);for(l in n)-1*Pe[n[l]]>0&&(t+=Pe[n[l]]);e>=8?se=1:-8>=t&&(se=-1),P(Pe)?Math.abs(e)>Math.abs(t)?se=1:Math.abs(e)<Math.abs(t)?se=-1:Math.abs(e)==Math.abs(t)&&(se=0):_(Pe)===!0&&(se=0),re=Math.abs(e),ce=Math.abs(t)}function P(e){var t=!1,a=!1;for(var n in e)if(0!==e[n]){var l=Aijs.getCanMovePanelX(n,e);if(0!==l.length&&(e[n]>0?t=!0:e[n]<0&&(a=!0)),t&&a)return!1}return!0}function _(e){var t=JSON.stringify(e);return void 0===_e[t]?(_e[t]=1,!1):(_e[t]+=1,_e[t]>=Te)}function T(e){var t=0;for(var a in e)if(0!==e[a]){var n=Aijs.getCanMovePanelX(a,e);t+=n.length}return t}function R(){var e={};if(1<document.location.search.length)for(var t=document.location.search.substring(1).split("&"),a=0;a<t.length;a++){var n=t[a].split("="),l=decodeURIComponent(n[0]),o=decodeURIComponent(n[1]);e[l]=decodeURIComponent(o)}return e}function k(e){var t;if(e){t=Aijs.copyMap(Pe);for(var a in t)t[a]=0;var n=e.split(",");n.length<8&&(n=[1,2,3,4,5,6,7,8]);var l=[0,10,20,30,40,50,11,41],o=[55,45,35,25,15,5,44,14];for(a in o)t[o[a]]=parseInt(n[a]);for(a in l)t[l[a]]=-1*parseInt(n[a])}return t}function j(e,t){var a=[],n=Aijs.copyMap(t),l={q:0,w:1,e:2,a:3,s:4,d:5,z:6,x:7,c:8};e=e.replace(/q/g,"q,").replace(/w/g,"w,").replace(/e/g,"e,"),e=e.replace(/a/g,"a,").replace(/s/g,"s,").replace(/d/g,"d,"),e=e.replace(/z/g,"z,").replace(/x/g,"x,").replace(/c/g,"c,");var o=e.split(",");a.push(n);for(var i=0;i<o.length;i++)if(""!==o[i]){var r=l[o[i].match(/[qweasdzxc]/)[0]],c=parseInt(o[i].match(/\d*/)[0]),s=10*(Math.floor(c/10)+Math.floor(r%3)-1)+(Math.floor(c%10)+Math.floor(r/3)-1);n=Aijs.copyMap(n),n[s]=parseInt(n[c]),n[c]=0,a.push(n)}return a}function B(e){var t="";for(var a in e){var n=e[a][0],l=e[a][1],o=Math.floor(l/10)-Math.floor(n/10),i=Math.floor(l%10)-Math.floor(n%10),r="";-1===o&&-1===i&&(r="q"),0===o&&-1===i&&(r="w"),1===o&&-1===i&&(r="e"),-1===o&&0===i&&(r="a"),0===o&&0===i&&(r="s"),1===o&&0===i&&(r="d"),-1===o&&1===i&&(r="z"),0===o&&1===i&&(r="x"),1===o&&1===i&&(r="c"),t+=n+r}return t}function E(){je=0,Pe=Aijs.copyMap(Be[je]),v(!1,!1),A()}function F(){0>=je||(je-=1,Pe=Aijs.copyMap(Be[je]),v(!1,!1),A())}function O(){je+1>Be.length-1||(je+=1,Pe=Aijs.copyMap(Be[je]),v(!1,!1),A())}function X(){je=Be.length-1,Pe=Aijs.copyMap(Be[je]),v(!1,!1),A()}function L(){var e=document.location.href.split("?")[0],t=R();t.lang&&(e+="?lang="+t.lang),navigator.onLine?location.href=e:(Pe=Aijs.copyMap(q),h(),Ee=[],he="",se=null,ie=1,v(!1,!1))}function Y(){var e=document.location.href.split("?")[0],t="?init="+q[55]+","+q[45]+","+q[35]+","+q[25]+","+q[15]+","+q[5]+","+q[44]+","+q[14],a="&log="+B(Ee);a+="&lv="+$("#level option:selected").val(),location.href=e+t+a}function H(){var e=document.location.href.split("?")[0],t="?init="+q[55]+","+q[45]+","+q[35]+","+q[25]+","+q[15]+","+q[5]+","+q[44]+","+q[14],a="%26log="+B(Ee);a+="%26lv="+$("#level option:selected").val(),window.open("https://twitter.com/intent/tweet?text="+e+t+a+"%20%23colamone")}function G(){!function(e,t,a){var n,l=e.getElementsByTagName(t)[0];e.getElementById(a)||(n=e.createElement(t),n.id=a,n.async=!0,n.src="https://platform.twitter.com/widgets.js",l.parentNode.insertBefore(n,l))}(document,"script","twitter-wjs")}e.BoardGamejs=t,e.BoardGamejs.init=a;var q,z=null,D=!0,N=null,U=null,W=null,J=null,K=null,Q=null,V=null,Z=null,ee=null,te=null,ae=!1,ne=!1,le=null,oe=null,ie=null,re=0,ce=0,se=null,he="",de=0,ve=!0,fe=null,ge=[],ue="#333333",we="#640125",pe="#003856",me="#FFFFFF",be="#111111",Me="#444444",Ie="#888888",$e="#7fed7f",xe="#ff0066",ye="#00A0E9",Ae="#FFFFFF",Se="#FFFF00",Ce={1:[1,1,1,1,0,1,1,1,1],2:[1,1,1,1,0,1,1,0,1],3:[1,1,1,0,0,0,1,1,1],4:[1,1,1,0,0,0,1,0,1],5:[1,0,1,0,0,0,1,0,1],6:[1,0,1,0,0,0,0,1,0],7:[0,1,0,0,0,0,0,1,0],8:[0,1,0,0,0,0,0,0,0],"-1":[1,1,1,1,0,1,1,1,1],"-2":[1,0,1,1,0,1,1,1,1],"-3":[1,1,1,0,0,0,1,1,1],"-4":[1,0,1,0,0,0,1,1,1],"-5":[1,0,1,0,0,0,1,0,1],"-6":[0,1,0,0,0,0,1,0,1],"-7":[0,1,0,0,0,0,0,1,0],"-8":[0,0,0,0,0,0,0,1,0]},Pe={0:-1,10:-2,20:-3,30:-4,40:-5,50:-6,1:0,11:-8,21:0,31:0,41:-7,51:0,2:0,12:0,22:0,32:0,42:0,52:0,3:0,13:0,23:0,33:0,43:0,53:0,4:0,14:7,24:0,34:0,44:8,54:0,5:6,15:5,25:4,35:3,45:2,55:1},_e={},Te=3,Re=0,ke=0,je=0,Be=[],Ee=[],Fe=null;Fe=new Image,Fe.src="bk.gif";var Oe=null;try{window==parent&&"localStorage"in window&&null!==window.localStorage&&(Oe=localStorage,Oe.setItem("test",0))}catch(Xe){Oe=null}null===Oe&&(Oe={},Oe.getItem=function(){},Oe.setItem=function(){},navigator.cookieEnabled&&(Oe.hasItem=function(e){return new RegExp("(?:^|;\\s*)"+escape(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(document.cookie)},Oe.getItem=function(e){return e&&new RegExp("(?:^|;\\s*)"+escape(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(document.cookie)?unescape(document.cookie.replace(new RegExp("(?:^|.*;\\s*)"+escape(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*"),"$1")):null},Oe.setItem=function(e,t){e&&!/^(?:expires|max\-age|path|domain|secure)$/i.test(e)&&(document.cookie=escape(e)+"="+escape(t))}))}((this||0).self||global),$(function(){BoardGamejs.init()});