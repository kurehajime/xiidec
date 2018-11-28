!function(e){"use strict";e.BoardGamejs=function(){},e.BoardGamejs.init=function(){ce(),window.innerHeight<window.innerWidth?document.querySelector(".manual").classList.remove("hide"):document.querySelector(".manual").classList.add("hide");h=document.querySelector("#canv").getContext("2d"),(u=document.createElement("canvas")).width=Q,u.height=Q,(f=document.createElement("canvas")).width=Q,f.height=Q,(v=document.createElement("canvas")).width=Q,v.height=Q,(g=document.createElement("canvas")).width=Q,g.height=Q,(C=document.createElement("canvas")).width=Q,C.height=Q,(m=document.createElement("canvas")).width=Q,m.height=Q,(p=document.createElement("canvas")).width=Q,p.height=Q,(w=document.createElement("canvas")).width=Q,w.height=Q,(y=document.createElement("canvas")).width=Q,y.height=Q,(S=document.createElement("canvas")).width=Q,S.height=Q,(b=document.createElement("canvas")).width=Q,b.height=Q,A=Q/6,q=1,_=!0,h.canvas.style.width=Q/K+"px",h.canvas.style.height=Q/K+"px",h.canvas.width=Q,h.canvas.height=Q,s="ontouchstart"in window;s?(document.querySelector("#canv").addEventListener("touchstart",ue),document.querySelector("#canv").addEventListener("touchmove",de)):(document.querySelector("#canv").addEventListener("mousemove",se),document.querySelector("#canv").addEventListener("mouseup",ue));document.querySelector("#level").addEventListener("change",he),document.querySelector("#prevprev").addEventListener("click",Ie),document.querySelector("#prev").addEventListener("click",xe),document.querySelector("#next").addEventListener("click",qe),document.querySelector("#nextnext").addEventListener("click",Pe),document.querySelector("#replay").addEventListener("click",Ae),document.querySelector("#tweetlog").addEventListener("click",Le),document.querySelector("#newgame").addEventListener("click",Ce),document.querySelector("#collapsible").addEventListener("click",function(){document.querySelector(".manual").classList.toggle("hide")}),window.addEventListener("orientationchange",ce),ve(),re.getItem("level_1")||re.setItem("level_1",0);re.getItem("level_2")||re.setItem("level_2",0);re.getItem("level_3")||re.setItem("level_3",0);re.getItem("level_4")||re.setItem("level_4",0);re.getItem("level_5")||re.setItem("level_5",0);void 0!==re.getItem("level_save")&&"undefined"!==re.getItem("level_save")&&null!==re.getItem("level_save")?document.querySelector("#level").value=parseInt(re.getItem("level_save")):(re.setItem("level_save",1),document.querySelector("#level").value=1);var e=be();e.init?(i=function(e){var t;if(e){for(var l in t=Aijs.copyMap(Z))t[l]=0;var n=e.split(",");n.length<8&&(n=[1,2,3,4,5,6,7,8]);var a=[0,10,20,30,40,50,11,41],o=[55,45,35,25,15,5,44,14];for(l in o)t[o[l]]=parseInt(n[l]);for(l in a)t[a[l]]=-1*parseInt(n[l])}return t}(e.init),Z=Aijs.copyMap(i)):i=Aijs.copyMap(Z);e.log&&(ne=function(e,t){var l=[],n=Aijs.copyMap(t),a={q:0,w:1,e:2,a:3,s:4,d:5,z:6,x:7,c:8},o=(e=(e=(e=e.replace(/q/g,"q,").replace(/w/g,"w,").replace(/e/g,"e,")).replace(/a/g,"a,").replace(/s/g,"s,").replace(/d/g,"d,")).replace(/z/g,"z,").replace(/x/g,"x,").replace(/c/g,"c,")).split(",");l.push(n);for(var r=0;r<o.length;r++)if(""!==o[r]){var i=a[o[r].match(/[qweasdzxc]/)[0]],c=parseInt(o[r].match(/\d*/)[0]),s=10*(Math.floor(c/10)+Math.floor(i%3)-1)+(Math.floor(c%10)+Math.floor(i/3)-1);(n=Aijs.copyMap(n))[s]=parseInt(n[c]),n[c]=0,l.push(n)}return l}(e.log,i));e.lv&&(document.querySelector("#level").value=parseInt(e.lv));0!==ne.length?(document.querySelector("#log").classList.remove("hide"),document.querySelector("#prevprev").classList.remove("hide"),document.querySelector("#prev").classList.remove("hide"),document.querySelector("#next").classList.remove("hide"),document.querySelector("#nextnext").classList.remove("hide"),document.querySelector("#span_replay").classList.add("hide"),document.querySelector("#span_tweetlog").classList.add("hide"),document.querySelector("#next").focus()):(document.querySelector("#log").classList.add("hide"),document.querySelector("#prevprev").classList.add("hide"),document.querySelector("#prev").classList.add("hide"),document.querySelector("#next").classList.add("hide"),document.querySelector("#nextnext").classList.add("hide"),document.querySelector("#span_replay").classList.add("hide"),document.querySelector("#span_tweetlog").classList.add("hide"));oe.onload=function(){ge(I=!0,!1)},oe.onerror=function(){ge(!0,!1)},0!==oe.width&&ge(I=!0,!1);setTimeout(function(){0!==oe.width&&(I=!0),ge(!0,!1)},2500),we(),t=document,l="twitter-wjs",a=t.getElementsByTagName("script")[0],t.getElementById(l)||((n=t.createElement("script")).id=l,n.async=!0,n.src="https://platform.twitter.com/widgets.js",a.parentNode.insertBefore(n,a)),0===ne.length||(k=!(_=!1),o=window.setInterval(ie,1e3));var t,l,n,a;ge(!0,d=!1)};var h=null,s=!0,d=!1,u=null,f=null,v=null,g=null,C=null,m=null,p=null,w=null,y=null,S=null,b=null,M=!1,I=!1,x=null,A=null,q=null,P=0,L=0,T=null,E="",r=0,_=!0,k=!1,l=null,o=null,R=[],B=0,j="#333333",O="#640125",F="#003856",X="#FFFFFF",Y="#111111",G="#444444",H="#888888",z="#7fed7f",D="#148d14",W="#ff0066",$="#00A0E9",N="#FF66CC",U="#00CCFF",J="#FFFFFF",K=1;void 0!==window.devicePixelRatio&&1!=window.devicePixelRatio&&(K=window.devicePixelRatio);var i,Q=500*K,V={1:[1,1,1,1,0,1,1,1,1],2:[1,1,1,1,0,1,1,0,1],3:[1,1,1,0,0,0,1,1,1],4:[1,1,1,0,0,0,1,0,1],5:[1,0,1,0,0,0,1,0,1],6:[1,0,1,0,0,0,0,1,0],7:[0,1,0,0,0,0,0,1,0],8:[0,1,0,0,0,0,0,0,0],"-1":[1,1,1,1,0,1,1,1,1],"-2":[1,0,1,1,0,1,1,1,1],"-3":[1,1,1,0,0,0,1,1,1],"-4":[1,0,1,0,0,0,1,1,1],"-5":[1,0,1,0,0,0,1,0,1],"-6":[0,1,0,0,0,0,1,0,1],"-7":[0,1,0,0,0,0,0,1,0],"-8":[0,0,0,0,0,0,0,1,0]},Z=[-1,0,0,0,0,6,0,0,0,0,-2,-8,0,0,7,5,0,0,0,0,-3,0,0,0,0,4,0,0,0,0,-4,0,0,0,0,3,0,0,0,0,-5,-7,0,0,8,2,0,0,0,0,-6,0,0,0,0,1],c={},ee=3,te=0,le=0,t=0,ne=[],ae=[],oe=null;(oe=new Image).src="bk.gif";var re=null;try{window==parent&&"localStorage"in window&&null!==window.localStorage&&(re=localStorage).setItem("test",0)}catch(e){re=null}function ie(){null!==o&&1==k?qe():clearInterval(o)}function ce(){var e=document.querySelector("meta[name=viewport]");if(screen.width<500&&screen.height<500?screen.width<screen.height?e.setAttribute("content","width=500,user-scalable=no"):e.setAttribute("content","height=500,user-scalable=no"):screen.width<500?e.setAttribute("content","width=500,user-scalable=no"):screen.height<500&&e.setAttribute("content","height=500,user-scalable=no"),/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream){var t=screen.width,l=520;0!==Math.abs(window.orientation)&&(t=screen.height,l=900);var n=Math.round(t/l*1e3)/1e3;n==Math.round(n)&&(n+=1e-4),e.setAttribute("content","initial-scale="+n+", minimum-scale="+n+", maximum-scale="+n+", user-scalable=no")}}function se(e){a(e),ge(!1,!0)}function de(e){e.preventDefault(),e.stopPropagation()}function ue(e){a(e);var t=10*Math.floor(te/A)+Math.floor(le/A);if(null!==T||0!==ne.length)return Ce(),!0;if(!0===_)return _=!1,R=[],Z=Aijs.copyMap(i),ge(!(ae=[]),!1),T=null,d=!1,q=1,window.clearInterval(l),ge(!1,!1),!0;if(null===x)0<Z[t]*q&&(x=t);else{if(t==x)return x=null,void ge(!1,!1);0<=Aijs.getCanMovePanelX(x,Z).indexOf(t)&&(ge(!1,!0),fe(Z,t,q)&&(ge(!(d=!0),!0),setTimeout(function(){ge(d=!1,!1)},3e3)),Z[t]=Z[x],Z[x]=0,q*=-1,ae.push([x,t]),R=[x,t],x=null,E="thinking...",window.setTimeout(function(){ge(!1,!1)},50),we(),null===T&&window.setTimeout(function(){n(document.querySelector("#level").value),E="",we(),ge(!1,!1)},250))}ge(!1,!1)}function he(){var e=document.querySelector("#level").value;re.setItem("level_save",e),0<re.getItem("level_"+e)?document.querySelector("#wins").innerHTML=re.getItem("level_"+e)+" win!":document.querySelector("#wins").innerHTML="",Z=Aijs.copyMap(i),R=[],ge(!(ae=[]),!(c={}))}function n(e){var t,l,n=new Date,a=function(e){var t=0;for(var l in e)if(0!==e[l]){var n=Aijs.getCanMovePanelX(l,e);t+=n.length}return t}(Z)/2,o=0;switch(e=parseInt(e)){case 1:a<=7&&o++;break;case 2:a<=8&&o++;break;case 3:a<=10&&o++,a<=6&&o++;break;case 4:a<=11&&o++,a<=7&&o++;break;case 5:case 6:16<a&&o--,a<=12&&o++,a<=8&&o++}t=Aijs.thinkAI(Z,q,e+o+1)[0],(R=t)&&(fe(Z,t[1],q)&&(ge(!(d=!0),!0),setTimeout(function(){ge(d=!1,!1)},3e3)),Z[t[1]]=Z[t[0]],Z[t[0]]=0,ae.push([t[0],t[1]])),q*=-1,l=new Date,r=(l-n)/1e3}function fe(e,t,l){if(0<l){if(t%10==0)return!0}else if(l<0&&t%10==5)return!0;return!1}function ve(){for(var e in Z)Z[e]=0;for(var t=[1,2,3,4,5,6,7,8],l=[0,10,20,30,40,50,11,41],n=[55,45,35,25,15,5,44,14],a=t.length-1;0<=a;a--){var o=Math.floor(Math.random()*(a+1)),r=t[a];t[a]=t[o],t[o]=r}for(e in n)Z[n[e]]=t[e];for(e in l)Z[l[e]]=-1*t[e]}function a(e){if(null!=e){e.clientX||(e=e.touches?e.touches[0]:e.touches?e.touches[0]:event.touches[0]);var t=e.target.getBoundingClientRect();te=e.clientX-t.left,le=e.clientY-t.top,te*=K,le*=K}}function ge(e,t){var l,n,a,o,r,i=new Int8Array(Z);if(h.clearRect(0,0,Q,Q),!1===t&&(M=!1),!1===t||!1===M){h.drawImage(function(e){if(!1===e)return u;var t=u.getContext("2d");t.clearRect(0,0,Q,Q);var l=t.createLinearGradient(0,0,Q,Q);l.addColorStop(0,H),l.addColorStop(.3,G),l.addColorStop(1,Y);for(var n=0;n<6;n++)for(var a=0;a<6;a++)t.strokeStyle=j,0===a?t.fillStyle=O:5==a?t.fillStyle=F:(n+a)%2==0?t.fillStyle=X:(t.fillStyle=Y,t.fillStyle=l),t.beginPath(),t.fillRect(n*A,a*A,A,A),t.strokeRect(n*A,a*A,A,A);return u}(e),0,0,Q,Q),h.drawImage(function(e){if(!1===e)return f;var t=f.getContext("2d");return t.clearRect(0,0,Q,Q),t.globalAlpha=.07,t.fillStyle=J,t.beginPath(),t.arc(1*A,-3*A,7*A,0,2*Math.PI,!1),t.fill(),f}(e),0,0,Q,Q),null!==x&&(i[x]=0),h.drawImage(function(e,t){var l=C.getContext("2d");l.clearRect(0,0,Q,Q);var n,a=t[0]/10|0,o=t[0]%10,r=t[1]/10|0,i=t[1]%10,c=A-1*A/5,s=A-1*A/5,d=r*A+A/10,u=i*A+A/10,h=d+s/2,f=u+c/2,v=h,g=f,m=e[t[1]],p="",w=0;if(2!=t.length)return C;p=0<m?$:W;if(a==r||o==i)w=(a+o)%2==0&&0!==o&&5!=o?.5:.3,a<r&&(d=d-s+10,v-=s),r<a&&(d=d+s-10,v+=s),o<i&&(u=u-c+10,g-=c),i<o&&(u=u+c-10,g+=c),(n=l.createLinearGradient(h,f,v,g)).addColorStop(0,p),n.addColorStop(w,p),n.addColorStop(1,"rgba(255, 255, 255, 0)"),l.fillStyle=n,l.fillRect(d,u,c,s);else{var y,S,b,M,I,x,q,P;w=(a+o)%2==0&&0!==o&&5!=o?.3:.5,a<r&&o<i&&(S=u-c,b=(y=d)+s,x=(M=u)+c,q=(I=d)-s,P=u,v-=s,g-=c,h+=2*s,f+=2*c),r<a&&i<o&&(b=(y=d+s)+s,I=d+s,x=(M=(S=u)+c)+c,q=d,P=u+c,v+=s,g+=c,h-=2*s,f-=2*c),a<r&&i<o&&(b=(y=d)+s,x=(M=(S=u)+c)+c,q=(I=d)-s,P=u+c,v-=s,g+=c,h+=2*s,f-=2*c),r<a&&o<i&&(S=u-c,b=(y=d+s)+s,I=d+s,x=(M=u)+c,q=d,P=u,v+=s,g-=c,h-=2*s,f+=2*c),l.beginPath(),l.moveTo(y,S),l.lineTo(b,M),l.lineTo(I,x),l.lineTo(q,P),l.lineTo(y,S),l.closePath(),(n=l.createLinearGradient(h,f,v,g)).addColorStop(0,p),n.addColorStop(w,p),n.addColorStop(.97,"rgba(255, 255, 255, 0)"),l.fillStyle=n,l.fill()}return C}(i,R),0,0,Q,Q),h.drawImage(function(e){var t=g.getContext("2d");t.clearRect(0,0,Q,Q);for(var l=0;l<6;l++)for(var n=0;n<6;n++)if(0!==e[10*l+n]){var a=!1;0<e[10*l+n]&&0===n?a=!0:e[10*l+n]<0&&5==n&&(a=!0),t=me(t,l*A,n*A,e[10*l+n],a)}return g}(i),0,0,Q,Q);var c=b.getContext("2d");c.clearRect(0,0,Q,Q),c.drawImage(h.canvas,0,0,Q,Q),M=!0}else h.drawImage(b,0,0,Q,Q);h.drawImage(function(){var e=m.getContext("2d");e.clearRect(0,0,Q,Q);var t=te-A/2,l=le-A/2;null!==x&&me(e,t,l,Z[x],!1);return m}(),0,0,Q,Q),0===te&&0===le||!1!==_||h.drawImage(function(){var e=te-te%A,t=le-le%A,l=v.getContext("2d"),n=l.createRadialGradient(e,t,0,e,t,A);if(n.addColorStop(.3,z),n.addColorStop(1,D),l.clearRect(0,0,Q,Q),l.globalAlpha=.35,l.fillStyle=n,l.lineWidth=1,l.beginPath(),l.fillRect(e,t,A,A),!0===s&&null===x)return v;var a=e/A*10+t/A;if(0<Z[a]*q)for(var o=Aijs.getCanMovePanelX(a,Z),r=0;r<=o.length-1;r++)e=Math.floor(o[r]/10),t=Math.floor(o[r]%10),l.globalAlpha=.6,l.strokeStyle=z,l.lineWidth=A/20,l.beginPath(),l.arc(e*A+A/2,t*A+A/2,A/2-A/10,0,2*Math.PI,!1),l.stroke();return v}(),0,0,Q,Q),(d||null!==T)&&!1===_&&0==k&&h.drawImage((l=S.getContext("2d"),n="",a=Math.round(1.5*A),o=U,r=N,l.clearRect(0,0,Q,Q),l.globalAlpha=.4,l.textBaseline="middle",l.textAlign="center",l.shadowBlur=10,l.shadowColor="rgba(0, 0, 0, 0.5)",l.font="bold "+a+"px Play,sans-serif",l.globalAlpha=.3,l.shadowBlur=2,l.shadowColor="rgba(255, 255, 255, 1)",l.fillStyle=r,n=L,l.beginPath(),l.fillText(n,1*A,3.8*A),n="8",l.beginPath(),l.fillText(n,2*A,5.3*A),l.lineWidth=.2*A,l.strokeStyle=r,l.beginPath(),l.moveTo(.4*A,5.55*A),l.lineTo(2.6*A,3.55*A),l.closePath(),l.stroke(),n=P,l.fillStyle=o,l.beginPath(),l.fillText(n,4*A,.7*A),n="8",l.beginPath(),l.fillText(n,5*A,2.3*A),l.lineWidth=.2*A,l.strokeStyle=o,l.beginPath(),l.moveTo(3.4*A,2.55*A),l.lineTo(5.6*A,.55*A),l.closePath(),l.stroke(),S),0,0,Q,Q),h.drawImage(function(){var e=p.getContext("2d"),t=1.3*A,l=2.5*A;if(e.clearRect(0,0,Q,Q),""===E)return p;e.shadowBlur=10,e.shadowColor="rgba(100, 100, 100, 0.5)",e.shadowOffsetX=5,e.shadowOffsetY=5,e.globalAlpha=.9,e.fillStyle=J,pe(e,t,l,3.4*A,1*A,A/20);var n=Math.round(.36*A);return e.shadowBlur=0,e.shadowOffsetX=0,e.shadowOffsetY=0,e.shadowColor="rgba(0, 0, 0, 0)",e.font="bold "+n+"px Play,sans-serif",e.globalAlpha=1,e.fillStyle=j,e.textBaseline="middle",e.textAlign="center",e.beginPath(),e.fillText(E,3*A,3*A),p}(),0,0,Q,Q),!0===_&&h.drawImage(function(){var e=y.getContext("2d");e.clearRect(0,0,Q,Q),e.globalAlpha=.5,e.fillStyle="#000000",e.fillRect(0,0,Q,Q);var t=2*A,l=3.5*A;e.shadowBlur=20,e.shadowColor="rgba(0, 0, 0, 0.3)",e.shadowOffsetX=5,e.shadowOffsetY=5,e.globalAlpha=.8,e.fillStyle=J,e.beginPath(),pe(e,t,l,2*A,1*A,A/20),e.shadowColor="rgba(0, 0, 0, 0)",e.shadowBlur=0,e.shadowOffsetX=0,e.shadowOffsetY=0;var n=Math.round(.5*A),a="Play";return a+=B%10==0?" ":"",e.shadowBlur=0,e.shadowOffsetX=0,e.shadowOffsetY=0,e.shadowColor="rgba(0, 0, 0, 0)",e.font="bold "+n+"px Play,sans-serif",e.globalAlpha=1,e.fillStyle=j,e.textBaseline="middle",e.textAlign="center",e.beginPath(),e.fillText(a,3*A,4*A),a="colamone",n=Math.round(1*A),e.font="bold "+n+"px Play,sans-serif",e.fillStyle=J,e.shadowBlur=0,e.beginPath(),e.fillText(a,3*A,2*A),y}(),0,0,Q,Q)}function me(e,t,l,n,a){var o;if(0===n)return e;o=0<n?$:W;var r,i=h.createLinearGradient(t,l,t+A,l+A);i.addColorStop(0,"rgb(255, 255, 255)"),i.addColorStop(.4,o),i.addColorStop(1,o),e.shadowBlur=10,e.shadowColor="rgba(0, 0, 0, 1)",e.shadowOffsetX=2,e.shadowOffsetY=2,e.fillStyle=i,e.beginPath(),pe(e,t+A/10,l+A/10,A-1*A/5,A-1*A/5,A/20),e.shadowColor="rgba(0, 0, 0, 0)",e.shadowBlur=0,e.shadowOffsetX=0,e.shadowOffsetY=0,I&&(e.globalAlpha=.35,e.save(),e.clip(),e.drawImage((r=w.getContext("2d"),I&&r.drawImage(oe,0,0,Q/K,Q/K,0,0,Q,Q),w),t+A/10,l+A/10,A-1*A/5,A-1*A/5),e.restore(),e.globalAlpha=1),e.fillStyle=J;var c=Math.round(.18*A);e.textBaseline="middle",e.textAlign="center",e.font=c+"pt 'Play',Arial",e.beginPath(),e.fillText(Math.abs(n),t+A/2,l+A/2);for(var s=0;s<=V[n].length-1;s++)if(0!==V[n][s]){var d=t+A/4.16+Math.floor(A-1*A/5)/3*Math.floor(s%3),u=l+A/4.16+Math.floor(A-1*A/5)/3*Math.floor(s/3);e.fillStyle=J,e.beginPath(),e.arc(d,u,.06*A,0,2*Math.PI,!1),e.fill()}return a&&(e.shadowBlur=10,e.shadowColor="rgba(0, 0, 0, 1)",e.globalAlpha=1,e.fillStyle=J,c=Math.round(.5*A),e.textBaseline="middle",e.textAlign="center",e.font="bolder "+c+"pt Play,Arial ",e.beginPath(),e.fillText(Math.abs(n),t+A/2,l+A/2),e.globalAlpha=1,e.shadowColor="rgba(0, 0, 0, 0)",e.shadowBlur=0),e}function pe(e,t,l,n,a,o){e.beginPath(),e.moveTo(t+o,l),e.lineTo(t+n-o,l),e.arc(t+n-o,l+o,o,1.5*Math.PI,0,!1),e.lineTo(t+n,l+a-o),e.arc(t+n-o,l+a-o,o,0,.5*Math.PI,!1),e.lineTo(t+o,l+a),e.arc(t+o,l+a-o,o,.5*Math.PI,Math.PI,!1),e.lineTo(t,l+o),e.arc(t+o,l+o,o,Math.PI,1.5*Math.PI,!1),e.closePath(),e.fill()}function we(){Se();document.querySelector("#blue").innerHTML="Blue: "+P+"/8",document.querySelector("#red").innerHTML=" Red: "+L+"/8",document.querySelector("#time").innerHTML="("+r.toFixed(3)+"sec)",0===ne.length&&(1==T?(E="You win!",re.setItem("level_"+document.querySelector("#level").value,parseInt(re.getItem("level_"+document.querySelector("#level").value))+1),ye()):-1==T?(E="You lose...",re.setItem("level_"+document.querySelector("#level").value,0),ye()):0===T&&(E=c[JSON.stringify(Z)]>=ee?"3fold repetition":"-- Draw --",ye())),0<re.getItem("level_"+document.querySelector("#level").value)?document.querySelector("#wins").innerHTML=re.getItem("level_"+document.querySelector("#level").value)+" win!":document.querySelector("#wins").innerHTML=""}function ye(){0===ne.length&&(document.querySelector("#span_replay").classList.remove("hide"),document.querySelector("#span_tweetlog").classList.remove("hide"))}function Se(){var e=0,t=0,l=[0,10,20,30,40,50],n=[5,15,25,35,45,55];for(var a in l)0<1*Z[l[a]]&&(e+=Z[l[a]]);for(a in n)0<-1*Z[n[a]]&&(t+=Z[n[a]]);8<=e?T=1:t<=-8&&(T=-1),!function(e){var t=!1,l=!1;for(var n in e)if(0!==e[n]){var a=Aijs.getCanMovePanelX(n,e);if(0!==a.length&&(0<e[n]?t=!0:e[n]<0&&(l=!0)),t&&l)return!1}return!0}(Z)?!0===function(e){var t=JSON.stringify(e);{if(void 0===c[t])return!(c[t]=1);c[t]+=1}if(c[t]>=ee)return!0;return!1}(Z)&&(T=0):Math.abs(e)>Math.abs(t)?T=1:Math.abs(e)<Math.abs(t)?T=-1:Math.abs(e)==Math.abs(t)&&(T=0),P=Math.abs(e),L=Math.abs(t)}function be(){var e={};if(1<document.location.search.length)for(var t=document.location.search.substring(1).split("&"),l=0;l<t.length;l++){var n=t[l].split("="),a=decodeURIComponent(n[0]),o=decodeURIComponent(n[1]);e[a]=decodeURIComponent(o)}return e}function Me(e){var t="";for(var l in e){var n=e[l][0],a=e[l][1],o=Math.floor(a/10)-Math.floor(n/10),r=Math.floor(a%10)-Math.floor(n%10),i="";-1===o&&-1===r&&(i="q"),0===o&&-1===r&&(i="w"),1===o&&-1===r&&(i="e"),-1===o&&0===r&&(i="a"),0===o&&0===r&&(i="s"),1===o&&0===r&&(i="d"),-1===o&&1===r&&(i="z"),0===o&&1===r&&(i="x"),1===o&&1===r&&(i="c"),t+=n+i}return t}function Ie(){t=0,k=!1,Z=Aijs.copyMap(ne[t]),T=null,d=!1,we(),ge(!1,!1)}function xe(){t<=0||(k=!1,t-=1,Z=Aijs.copyMap(ne[t]),T=null,d=!1,we(),ge(!1,!1))}function qe(){t+1>ne.length-1||(t+=1,Z=Aijs.copyMap(ne[t]),we(),ge(!1,!1))}function Pe(){t=ne.length-1,k=!1,Z=Aijs.copyMap(ne[t]),we(),ge(!1,!1)}function Ce(){var e=document.location.href.split("?")[0];if(!0!==_){var t=be();t.lang&&(e+="?lang="+t.lang),navigator.onLine?location.href=e:(Z=Aijs.copyMap(i),ve(),E="",T=null,ge(!(q=1),!(ae=[])))}else ue(null)}function Ae(){var e=document.location.href.split("?")[0],t="?init="+i[55]+","+i[45]+","+i[35]+","+i[25]+","+i[15]+","+i[5]+","+i[44]+","+i[14],l="&log="+Me(ae);l+="&lv="+document.querySelector("#level").value,location.href=e+t+l}function Le(){var e=document.location.href.split("?")[0],t="?init="+i[55]+","+i[45]+","+i[35]+","+i[25]+","+i[15]+","+i[5]+","+i[44]+","+i[14],l="%26log="+Me(ae);l+="%26lv="+document.querySelector("#level").value,window.open("https://twitter.com/intent/tweet?text="+e+t+l+"%20%23colamone")}null===re&&(re={getItem:function(){},setItem:function(){}},navigator.cookieEnabled&&(re.hasItem=function(e){return new RegExp("(?:^|;\\s*)"+escape(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(document.cookie)},re.getItem=function(e){return e&&new RegExp("(?:^|;\\s*)"+escape(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(document.cookie)?unescape(document.cookie.replace(new RegExp("(?:^|.*;\\s*)"+escape(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*"),"$1")):null},re.setItem=function(e,t){e&&!/^(?:expires|max\-age|path|domain|secure)$/i.test(e)&&(document.cookie=escape(e)+"="+escape(t))}))}((this||0).self||global),document.addEventListener("DOMContentLoaded",function(){BoardGamejs.init()});