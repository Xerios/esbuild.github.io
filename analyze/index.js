"use strict";(()=>{var d=document,c=Math,q=requestAnimationFrame,te=localStorage,U=window;var be=Object.prototype.hasOwnProperty,vt=Array.prototype.indexOf,$e,Yt=/\.\w+\.map$/,Vt=/^\(disabled\):/,Et=navigator.platform.indexOf("Mac")>=0,et=()=>(U.performance||Date).now(),tt=e=>{try{return te.getItem(e)}catch(t){return null}},lt=(e,t)=>{try{te.setItem(e,t)}catch(r){}},ye=e=>Yt.test(e);var Ce=e=>e.replace(Vt,""),xe=e=>$e?$e.format(e):e+"",Ke=e=>{let t=e.toFixed(1).split(".",2);return xe(+t[0])+"."+t[1]},le=e=>e===1?"1 byte":e<1024?xe(e)+" bytes":e<1024*1024?Ke(e/1024)+" kb":e<1024*1024*1024?Ke(e/(1024*1024))+" mb":Ke(e/(1024*1024*1024))+" gb",H=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),We=e=>{let t=.6+.4*c.max(0,c.cos(e)),r=.5+.2*c.max(0,c.cos(e+c.PI*2/3));return"hsl("+e*180/c.PI+"deg, "+c.round(100*t)+"%, "+c.round(100*r)+"%)"},K=e=>d.createTextNode(e),rt=e=>{let t=d.createElement("code");return t.textContent=e,t},Me=(e,t)=>{let r=d.createElement("span");return r.className=e,r.textContent=t,r},Be=(e,t)=>{let r=e.split("/");if(!t)return r;for(let s=0;s<=r.length;s++)if(t[s]!==r[s]){t.length=s;break}return t},Ct=(e,t)=>{let r=e.split("/");if(!t)return r.reverse();for(let s=0;s<=r.length;s++)if(t[s]!==r[r.length-s-1]){t.length=s;break}return t},xt=e=>{let t=e.lastIndexOf("/");return t<0?".":e.slice(0,t)},Mt=(e,t)=>{let r=e.split("/"),s=t==="."?[]:t.split("/"),n=0;for(;n<s.length&&r[0]===s[n];)r.shift(),n++;if(n===s.length)r.unshift(".");else for(;n<s.length;)r.unshift(".."),n++;return r.join("/")},Nt=e=>{let t=e.split("/");for(let r=t.length-1;r>=0;r--)if(t[r]==="node_modules")return t=t.slice(r+1),t.length>1&&/^index\.(?:[jt]sx?)$/.test(t[t.length-1])&&t.pop(),t.join("/");return null},ve=!1,bt=matchMedia("(prefers-color-scheme: dark)"),yt=()=>Re&&Re(),Ze=null,Qe=null,Re=null,Ue=e=>Ze=e,je=e=>Qe=e,ze=e=>Re=e;d.addEventListener("keydown",()=>ve=!0,{capture:!0});d.addEventListener("mousedown",()=>ve=!1,{capture:!0});U.addEventListener("wheel",e=>Ze&&Ze(e),{passive:!1});U.addEventListener("resize",()=>Qe&&Qe());try{bt.addEventListener("change",yt)}catch(e){bt.addListener(yt)}try{$e=new Intl.NumberFormat}catch(e){}var it=d.getElementById("dragTarget"),qt=d.getElementById("importButton"),ot=0,nt,It=(e,t=e.dataTransfer)=>t&&t.types&&vt.call(t.types,"Files")!==-1,Ot=e=>{if(e.length===1){let t=new FileReader;t.onload=()=>Ge(t.result),t.readAsText(e[0])}};d.ondragover=e=>{e.preventDefault()};d.ondragenter=e=>{e.preventDefault(),It(e)&&(it.style.display="block",ot++)};d.ondragleave=e=>{e.preventDefault(),It(e)&&--ot===0&&(it.style.display="none")};d.ondrop=e=>{e.preventDefault(),it.style.display="none",ot=0,e.dataTransfer&&e.dataTransfer.files&&Ot(e.dataTransfer.files)};qt.onclick=function(){nt&&d.body.removeChild(nt);let e=d.createElement("input");e.type="file",e.style.display="none",d.body.appendChild(e),nt=e,e.click(),e.onchange=()=>e.files&&Ot(e.files)};d.body.addEventListener("paste",e=>{e.clipboardData&&(e.preventDefault(),Ge(e.clipboardData.getData("text/plain")))});var St=e=>{let t=e.inputs;for(let r in t)if(t[r].format)return!0;return!1};var Ne=(e,t)=>t.t-e.t||+(e.e>t.e)-+(e.e<t.e),Ie=(e,t,r)=>{let s=t.split("/"),n=s.length,i=e,u="";e.t+=r;for(let a=0;a<n;a++){let l=s[a],o=i.o,m=o[l],p=l+(a+1<n?"/":"");u+=p,be.call(o,l)||(m={n:p,e:u,t:0,o:{}},o[l]=m),m.t+=r,i=m}return n};var Pt,Lt,Rt,Xe=d.createElement("canvas"),j=Xe.getContext("2d"),Z=1,at,dt,st=0,Je,ke={},ut=null,Ye=e=>ut=e,Ve=(e,t,r,s,n)=>{let i=ke[t]||Se;if(i instanceof Array){let u=U.devicePixelRatio||1;if(Pt!==e||Lt!==u||Rt!==n){let a=c.round(64*u)/64,l,o,m;Z=n,Z=c.log2(Z),Z-=c.floor(Z),l=Z,o=c.min(1,8*l),Z=c.pow(2,Z),m=8*c.SQRT2/Z,Pt=e,Lt=u,Rt=n,Xe.width=Xe.height=c.round(64*a),j.scale(a,a),j.fillStyle=i[0],j.fillRect(0,0,64,64),j.globalAlpha=.25,j.fillStyle=i[1],j.fillRect(0,0,64,64),j.globalAlpha=.67,j.strokeStyle=i[1],j.beginPath();for(let p=0;p<=64;p+=16)j.moveTo(p-32,p+32),j.lineTo(p+32,p-32);if(j.lineWidth=m*(1-(o-l)/2),j.stroke(),o+l>0){j.beginPath();for(let p=8;p<64;p+=16)j.moveTo(p-32,p+32),j.lineTo(p+32,p-32);j.lineWidth=m*(o+l)/2,j.stroke()}at=e.createPattern(Xe,"repeat"),Z/=a}return r/=64*Z*u,r-=c.floor(r),r*=64*Z*u,at.setTransform(new DOMMatrix([Z,0,0,Z,r,s])),at}return i},Ae=e=>{let t=ke[e]||Se;return t instanceof Array?`url('data:image/svg+xml,<svg width="26" height="26" xmlns="http://www.w3.org/2000/svg"><rect width="26" height="26" fill="${t[0]}"/><rect width="26" height="26" fill="${t[1]}" fill-opacity="25%"/><path d="M22.5 -3.5L-3.5 22.5M35.5 9.5L9.5 35.5" stroke="${t[1]}" stroke-opacity="67%" stroke-width="9.19239"/></svg>')`:t},Ht=(e,t)=>{if(dt!==e){let r=e.outputs;dt=e,st=0,Je={n:"",e:"",t:0,o:{}};for(let s in r){if(ye(s))continue;let i=r[s].inputs;for(let u in i)Ie(Je,Ce(u),i[u].bytesInOutput)}}st!==t&&(st=t,ke={},Oe.innerHTML="",t===1?wt(ke,Je,0,c.PI*2):t===2&&(Ft(ke,Je),Oe.innerHTML=Zt),ut&&ut())},wt=(e,t,r,s)=>{let n=t.t,i=t.o,u=[];e[t.e]=We(r+s/2);for(let a in i)u.push(i[a]);for(let a of u.sort(Ne)){let l=a.t/n*s;wt(e,a,r,l),r+=l}},He=We(3.5),we=We(1),Se="#CCC",Kt=[He,we],$t=e=>e?e===1?He:e===2?we:Kt:Se,Fe=(e,t)=>e===Se?"":e===we?t+"ESM":e===He?t+"CJS":t+"ESM & CJS",Ft=(e,t)=>{let r=t.o,s=0,n=!1;for(let i in r)s|=Ft(e,r[i]),n=!0;if(!n){let i=dt.inputs[t.e],u=i&&i.format;s=u==="esm"?2:u==="cjs"?1:0}return e[t.e]=$t(s),s},Oe=d.createElement("div"),Zt='<span class="chit" style="background:'+we+'"></span>ESM <small>modern, faster, smaller</small><span class="chit" style="background:'+He+'"></span>CommonJS <small>legacy, slower, larger</small><span class="chit" style="background:'+Se+'"></span>Other';Oe.id="colorLegend";var Dt=d.getElementById("summaryPanel"),kt=e=>e===1?"file":"files",At=(e,t)=>{let r=e.inputs,s=e.outputs,n=0,i=0,u=0,a=0,l=0,o=0,m=0,p,I,L;for(let g in r){let O=r[g],x=O.format;x==="esm"?l+=O.bytes:x==="cjs"?o+=O.bytes:m+=O.bytes,n++,u+=O.bytes}for(let g in s)ye(g)||(i++,a+=s[g].bytes);p=c.round(200*l/u),I=c.round(200*o/u),Dt.innerHTML="<table><tr><td><h2>"+H(le(u))+"</h2>"+H(xe(n))+" input "+kt(n)+'</td><td class="symbol">&rarr;</td><td><h2>'+H(le(a))+"</h2>"+H(xe(i))+" output "+kt(i)+"</td></tr></table>"+(l||o?'<a href="javascript:void 0" class="formatBreakdown"><span class="side">'+xe(c.round(100*o/u))+'% CJS</span><div class="bar"><div style="background:'+He+";width:"+I+'px"></div><div style="background:#CCC;width:'+(200-p-I)+'px"></div><div style="background:'+we+";width:"+p+'px"></div></div><span class="side">'+xe(c.round(100*l/u))+"% ESM</span></a>":""),L=Dt.querySelector(".formatBreakdown"),L&&(L.onclick=t)};var Ee=d.createElement("div"),_t,pt,qe=null,Wt=()=>Ee.parentElement!==null,_e=()=>{Ee.remove(),qe&&(qe.focus(),qe=null)},Qt=e=>{let t=e.inputs,r=e.outputs,s={},n={},i=[],u={};for(let l in r){let o=r[l],m=o.entryPoint;if(m){s[m]=l,i.push(l);for(let p of o.imports)!p.external&&!be.call(u,p.path)&&(u[p.path]=!0)}}let a=[];for(let l of i){let o=r[l].entryPoint;be.call(u,l)||(n[o]={e:o,d:void 0,i:"entry-point"},a.push(o))}if(!a.length)for(let l of i){let o=r[l].entryPoint;n[o]={e:o,d:void 0,i:"entry-point"},a.push(o)}for(;a.length>0;){let l=[];for(let o of a){let m=t[o];for(let p of m.imports)!p.external&&!be.call(n,p.path)&&(n[p.path]={e:o,d:p.original,i:p.kind},l.push(p.path))}a=l}return{h:s,g:n}},Pe=(e,t,r)=>{let s=e.inputs[t],n=d.activeElement;if(!s)return;(!pt||_t!==e)&&(_t=e,pt=Qt(e)),ve&&n&&n.focus&&n.tagName==="A"&&(qe=n);let i=d.createElement("div");i.className="dialog",i.innerHTML="<h2>"+H(t)+"</h2><p>Original size: <b>"+H(le(s.bytes))+"</b>"+(r===null?"":"<br>Bundled size: <b>"+H(le(r))+"</b>")+(s.format==="esm"?"<br>Module format: <b>ESM</b>":s.format==="cjs"?"<br>Module format: <b>CommonJS</b>":"")+"</p>",el(i,pt,t);let u=d.createElement("a");u.className="closeButton",u.href="javascript:void 0",u.onclick=_e,u.innerHTML="&times;",i.appendChild(u),i.tabIndex=0,Ee.id="whyFile",Ee.innerHTML="",Ee.appendChild(i),Ee.onmousedown=a=>{a.target===Ee&&_e()},d.body.appendChild(Ee),i.focus(),i.onkeydown=a=>{a.key==="Escape"&&!a.shiftKey&&!a.metaKey&&!a.ctrlKey&&!a.altKey&&(a.preventDefault(),_e())}},el=(e,t,r)=>{let s=t.g,n=r,i=[{e:r,c:null}];for(;;){let o=s[n];if(!o)return;if(n===o.e)break;i.push({e:o.e,c:{e:n,d:o.d,i:o.i}}),n=o.e}i.reverse();let u=t.h,a,l="Entry point";e.appendChild(K("This file is included in the bundle because:"));for(let o of i){if(be.call(u,o.e)){let L=d.createElement("div");a=d.createElement("div"),a.className="outputFile",L.className="outputPath",L.textContent="Output file ",L.appendChild(rt(u[o.e])),a.appendChild(L),e.appendChild(a)}else if(!a)return;let m=K(l+" "),p=K(` is included in the bundle.
`);a.firstChild&&a.appendChild(K(`
`)),a.appendChild(m),a.appendChild(rt(o.e)),a.appendChild(p);let I=o.c;if(I){let L=I.d||Nt(I.e)||Mt(I.e,xt(o.e)),g=d.createElement("pre"),O=d.createElement("span");if(O.className=be.call(u,I.e)?"longArrow":"arrow",I.i==="import-statement")g.appendChild(Me("keyword","import ")),g.appendChild(Me("string",JSON.stringify(L))),g.appendChild(K(";")),l="Imported file";else if(I.i==="require-call")g.appendChild(K("require(")),g.appendChild(Me("string",JSON.stringify(L))),g.appendChild(K(");")),l="Required file";else if(I.i==="dynamic-import")g.appendChild(K("import(")),g.appendChild(Me("string",JSON.stringify(L))),g.appendChild(K(");")),l="Dynamically-imported file";else if(I.i==="import-rule")g.appendChild(K("@import ")),g.appendChild(Me("string",JSON.stringify(L))),g.appendChild(K(";")),l="Imported stylesheet";else if(I.i==="url-token")g.appendChild(K("url(")),g.appendChild(Me("string",JSON.stringify(L))),g.appendChild(K(")")),l="URL reference";else return;p.textContent=` contains:
`,g.appendChild(O),g.appendChild(K(`
`)),a.appendChild(g)}else m.textContent="So "+m.textContent.toLowerCase()}};var Bt=(e,t)=>{for(;t;){if(t===e)return!0;t=t.r}return!1},tl=e=>{let t=e.inputs,r=e.outputs,s={n:"",e:"",t:0,o:{}},n=a=>{let l=a.o,o=[];for(let m in l)o.push(n(l[m]));return{e:a.e,t:a.t,l:o.sort(Ne),r:null}},i=(a,l)=>{let o=0;for(let m of a.l){let p=i(m,l+1);m.r=a,p>o&&(o=p)}return o+1};for(let a in t)Ie(s,Ce(a),0);for(let a in r){if(ye(a))continue;let o=r[a].inputs;for(let m in o)Ie(s,Ce(m),o[m].bytesInOutput)}let u=n(s);for(;u.l.length===1;)u=u.l[0];return{a:u,f:i(u,0)}},ft=(e,t,r)=>{if(e===t)return;let s=t.r,n=s.t||1,i=0;ft(e,s,r);for(let u of s.l){if(u===t){r.u+=r.s*i/n,r.s=u.t/n*r.s;break}i+=u.t}r.p+=1},De=e=>50*8*c.log(1+c.log(1+e/8)),jt=e=>{let t=d.createElement("div"),r=d.createElement("main"),s=tl(e),n=s.a,i=null,u=g=>{n!==g&&(n=g,p(),L())},a=g=>{i!==g&&(i=g,p(),L())},l=()=>{let g=d.createElement("div"),O=d.createElement("canvas"),x=O.getContext("2d"),B=()=>{let f=2*c.ceil(De(s.f)),C=U.devicePixelRatio||1;w=c.min(c.round(innerWidth*.4),f),z=w,W=w>>1,A=z>>1,O.style.width=w+"px",O.style.height=z+"px",O.width=c.round(w*C),O.height=c.round(z*C),x.scale(C,C),pe()},he=(f,C,N,P,se,$,k)=>{let V=De(C+1);if(V>A)return k;f===i&&($|=8);let de=(N+V)/2,ee=P+se;if(ee-k<1.5/de)return k;let X=2/de;if(se>X&&(X=se),$&2)x.fillStyle=Ve(x,f.e,W,A,1),x.beginPath(),x.arc(W,A,N,P,P+X,!1),x.arc(W,A,V,P+X,P,!0),x.fill(),i&&($&8||f.r===i)&&(x.fillStyle="rgba(255, 255, 255, 0.3)",x.fill());else{let ce=X===c.PI*2,Tt=$&4||ce?V:N;$&1&&N>0&&x.arc(W,A,N,P+X,P,!0),x.moveTo(W+Tt*c.cos(P),A+Tt*c.sin(P)),x.arc(W,A,V,P,P+X,!1),ce||x.lineTo(W+N*c.cos(P+X),A+N*c.sin(P+X))}let me=f.t,ge=$&10,Te=0,ne=-1/0;for(let ce of f.l)ne=he(ce,C+1,V,P+se*Te/me,ce.t/me*se,ge,ne),Te+=ce.t,ge|=4;return ee},pe=()=>{x.clearRect(0,0,w,z),he(F,G,De(G),J,re,3,-1/0),x.strokeStyle="#222",x.beginPath(),he(F,G,De(G),J,re,1,-1/0),x.stroke(),G===0&&(x.fillStyle="#222",x.font="bold 16px sans-serif",x.textAlign="center",x.textBaseline="middle",x.fillText(le(S.t),W,A))},Q=-c.PI/2,w=0,z=0,W=0,A=0,Y=null,ie=0,T=0,R=Q,_=c.PI*2,S=n,fe=T,oe=R,ae=_,F=n,G=T,J=R,re=_,h=f=>{let C=(k,V,de,ee,X)=>{let me=De(V+1);if(me>A)return null;if(se>=de&&se<me){let ne=$-ee;if(ne/=c.PI*2,ne-=c.floor(ne),ne*=c.PI*2,ne<X)return k===F?k.r:k}let ge=k.t,Te=0;for(let ne of k.l){let ce=C(ne,V+1,me,ee+X*Te/ge,ne.t/ge*X);if(ce)return ce;Te+=ne.t}return null},N=f.pageX,P=f.pageY;for(let k=O;k;k=k.offsetParent)N-=k.offsetLeft,P-=k.offsetTop;N-=W,P-=A;let se=c.sqrt(N*N+P*P),$=c.atan2(P,N);return C(F,G,De(G),J,re)},b=()=>{let f=(et()-ie)/350;f<0||f>1?(f=1,Y=null,F=S,fe=0,oe=Q,ae=c.PI*2):(f<.5?f*=4*f*f:(f=1-f,f*=4*f*f,f=1-f),Y=q(b)),G=T+(fe-T)*f,J=R+(oe-R)*f,re=_+(ae-_)*f,pe()},y=d.createElement("div"),v=(f,C,N)=>{y.style.display="block",y.style.left=f+"px",y.style.top=C+"px",y.innerHTML=N},E=()=>{y.style.display="none"},D=null,M=[];return B(),ze(pe),je(B),Ue(null),O.onmousemove=f=>{let C=h(f);if(a(C),C&&C!==F.r){let N=C.e;if(C.r){let P=C.r.e.length;N=H(N.slice(0,P))+"<b>"+H(N.slice(P))+"</b>"}else N="<b>"+H(N)+"</b>";ue===2?N+=H(Fe(Ae(C.e)," \u2013 ")):N+=" \u2013 "+H(le(C.t)),v(f.pageX,f.pageY+20,N),O.style.cursor="pointer"}else E()},O.onmouseout=()=>{a(null),E()},O.onclick=f=>{let C=h(f);if(!C)return;E();let N=[];C!==F.r?N=M.concat(n):M.length>0&&(C=M.pop(),N=M.slice()),C.l.length>0?(u(C),M=N):(f.preventDefault(),Pe(e,C.e,C.t))},g.className="left",g.appendChild(O),g.appendChild(Oe),y.className="tooltip",r.appendChild(y),r.appendChild(g),[pe,()=>{if(D!==i&&(D=i,i||(O.style.cursor="auto",E()),Y===null&&(Y=q(b))),S!==n){if(M.length=0,Y===null&&(Y=q(b)),ie=et(),Bt(F,n)){let f={p:G,u:J,s:re};ft(F,n,f),G=f.p,J=f.u,re=f.s,fe=0,oe=Q,ae=c.PI*2,F=n}else if(Bt(n,F)){let f={p:0,u:Q,s:c.PI*2};ft(n,F,f),fe=f.p,oe=f.u,ae=f.s}else ie=-1/0,F=n;T=G,R=J,_=re,S=n}}]},o=()=>{let g=d.createElement("div"),O=()=>{let w=n.r,z=n.l,W=d.createElement("div"),A=1;W.className="bars";for(let T of z){let R=T.t;R>A&&(A=R)}if(x.length=0,B.length=0,w){let T=d.createElement("a");T.className="row",T.tabIndex=0,W.appendChild(T);let R=d.createElement("div");R.className="name",T.appendChild(R);let _=d.createElement("div");_.className="size",T.appendChild(_),T.href="javascript:void 0",R.textContent="../",T.onclick=()=>{u(w),ve&&B.length>0&&B[0].focus()},T.onfocus=T.onmouseover=()=>a(w),T.onblur=T.onmouseout=()=>a(null),x.push(w),B.push(T)}for(let T of z){let R=T.e.slice(n.e.length),_=le(T.t),S=d.createElement("a");S.className="row",S.tabIndex=0,W.appendChild(S);let fe=/^[^/]*\/?/.exec(R)[0],oe=d.createElement("div");oe.className="name",oe.innerHTML=H(fe)+"<span>"+R.slice(fe.length)+"</span>",S.appendChild(oe);let ae=d.createElement("div");ae.className="size",S.appendChild(ae);let F=d.createElement("div"),G=Ae(T.e);F.className=T.t?"bar":"bar empty",F.style.background=G,F.style.width=100*T.t/A+"%",ae.appendChild(F);let J=d.createElement("div");J.className="last",J.textContent=ue===2?Fe(G,""):_,F.appendChild(J),S.href="javascript:void 0",S.onclick=re=>{re.preventDefault(),T.l.length>0?(u(T),ve&&B.length>0&&B[0].focus()):Pe(e,T.e,T.t)},S.onfocus=S.onmouseover=()=>a(T),S.onblur=S.onmouseout=()=>a(null),x.push(T),B.push(S)}let Y=d.createElement("div");Y.className="dir",Y.textContent="Directory: ";let ie=d.createElement("div");ie.className="segments",Y.appendChild(ie);for(let T=n;T;T=T.r){let R=T.e||"/",_=d.createElement("a");T.r&&(R=R.slice(T.r.e.length)),_.textContent=R,T!==n&&(_.href="javascript:void 0",_.onclick=S=>{S.preventDefault(),u(T),ve&&B.length>0&&B[!x[0]&&B.length>1?1:0].focus()}),ie.insertBefore(_,ie.firstChild),n==s.a&&(_.tabIndex=-1,x.unshift(n),B.unshift(_))}g.innerHTML="",g.appendChild(Y),g.appendChild(W)},x=[],B=[],he=n,pe=null,Q=null;return g.className="details",r.appendChild(g),O(),[O,()=>{if(he!==n&&(he=n,O()),pe!==i){pe=i,Q&&(Q.classList.remove("hover"),Q=null);for(let w=i;w;w=w.r){let z=x.indexOf(w);if(z>=0){Q=B[z],Q.classList.add("hover");break}}}}]},[m,p]=l(),[I,L]=o();return Ye(()=>{m(),I()}),t.id="sunburstPanel",t.innerHTML='<div class="summary"><p>This visualization shows how much space each input file takes up in the final bundle. Input files that take up 0 bytes have been completely eliminated by tree-shaking.</p></div>',t.appendChild(r),t};var ll=e=>{let t=e.outputs,r=0,s=0,n=[],i,u=l=>" \u2013 "+le(l),a=l=>{let o=l.o,m=[];for(let p in o)m.push(a(o[p]));return{n:l.n,e:l.e,m:u(l.t),t:l.t,l:m.sort(Ne)}};for(let l in t){let o=l.split("/");o.pop(),i=Be(o.join("/"),i)}for(let l in t){if(ye(l))continue;let m={n:i?l.split("/").slice(i.length).join("/"):l,e:"",t:0,o:{}},p=t[l],I=p.inputs,L=p.bytes;for(let g in I){let O=Ie(m,Ce(g),I[g].bytesInOutput);O>s&&(s=O)}m.t=L,r+=L,n.push(a(m))}e:for(;;){let l;for(let o of n){let m=o.l;if(!m.length)continue;if(m.length>1||m[0].l.length!==1)break e;let p=m[0].n;if(l===void 0)l=p;else if(l!==p)break e}if(l===void 0)break;for(let o of n){let m=o.l;if(m.length){m=m[0].l;for(let p of m)p.n=l+p.n;o.l=m}}s--}for(let l of n){let o=0;for(let m of l.l)o+=m.t;o<l.t&&l.l.push({n:"(unassigned)",e:"",m:u(l.t-o),t:l.t-o,l:[]})}return n.sort(Ne),{a:{n:"",e:"",m:"",t:r,l:n},f:s+1}},zt=e=>{let t=ll(e),r=t.a.t,s=0,n=r,i=d.createElement("div"),u=d.createElement("main"),a=d.createElement("canvas"),l=a.getContext("2d"),o=0,m=0,p=0,I=0,L=1,g=null,O=null,x="",B="14px sans-serif",he={},pe="bold "+B,Q={},w=0,z=Q,W=h=>{O!==h&&(O=h,a.style.cursor=h&&!h.l.length?"pointer":"auto",h||oe(),_())},A=(h,b)=>{let y=h[b];return y===void 0&&(y=l.measureText(String.fromCharCode(b)).width,h[b]=y),y},Y=()=>{let h=U.devicePixelRatio||1;o=i.clientWidth+2*50,m=t.f*24+1,p=o-1e3>>1,I=p+1e3,p<0&&(p=0),I>o&&(I=o),I-=p,L=r/I,a.style.width=o+"px",a.style.height=m+"px",u.style.height=m+"px",a.width=c.round(o*h),a.height=c.round(m*h),l.scale(h,h),R()},ie=(h,b)=>{let y=w,v=h.length,E=0;for(;E<v&&(y+=A(z,h.charCodeAt(E)),!(y>b));)E++;return h.slice(0,E)+"..."},T=(h,b,y,v,E)=>{let D=I/(n-s),M=p+(y-s)*D,f=h.t*D,C=M+f;if(C<v+1.5)return v;if(M+f<0||M>o)return C;let N=f<2?2:f,P=(M>0?M:0)+5,se=b+24/2,$="",k="",V,de=0,ee=f+M-P,X=h.e?Ve(l,h.e,p-s*D,24,D*L):Se,me="black",ge=-1/0;E&1?(me=x,l.font=pe,z=he,w=3*A(z,46)):(l.fillStyle=X,l.fillRect(M,b,N,24),(E&2||O&&h.e===O.e)&&(l.fillStyle="rgba(255, 255, 255, 0.3)",l.fillRect(M,b,N,24),E|=2)),w<ee&&($=h.n,V=l.measureText($).width,V<=ee?de+=V:($=ie($,ee),de=ee),l.fillStyle=me,l.fillText($,P,se)),E&1&&(l.font=B,z=Q,w=3*A(z,46)),de+w<ee&&(k=ue===2?Fe(X," \u2013 "):h.m,V=l.measureText(k).width,de+V>ee&&(k=ie(k,ee-de)),l.globalAlpha=.5,l.fillText(k,P+de,se),l.globalAlpha=1);for(let Te of h.l)ge=T(Te,b+24,y,ge,E&-2),y+=Te.t;return E&1||(l.strokeStyle="#222",l.strokeRect(M,b,N,24)),C},R=()=>{let h=getComputedStyle(d.body),b=0,y=-1/0;g=null,x=h.getPropertyValue("--fg-on"),l.clearRect(0,0,o,m),l.textBaseline="middle";for(let v of t.a.l)y=T(v,0,b,y,1),b+=v.t},_=()=>{g===null&&(g=q(R))},S=d.createElement("div"),fe=(h,b,y)=>{S.style.display="block",S.style.left=h+"px",S.style.top=b+"px",S.innerHTML=y;let v=S.offsetWidth;for(let E=S;E;E=E.offsetParent)v+=E.offsetLeft;v>o&&(S.style.left=h+o-v+"px")},oe=()=>{S.style.display="none"},ae=h=>{let b=(M,f,C)=>{if(E>=C&&E<C+M.t){if(v>=f&&v<f+24&&M.e)return M;if(v>=f+24)for(let N of M.l){let P=b(N,f+24,C);if(P)return P;C+=N.t}}return null},y=h.pageX,v=h.pageY;for(let M=a;M;M=M.offsetParent)y-=M.offsetLeft,v-=M.offsetTop;let E=s+(n-s)/I*(y-p),D=0;for(let M of t.a.l){let f=b(M,0,D);if(f)return f;D+=M.t}return null},F=(h,b,y)=>{let v=s,E=n,D=0;if(y!==null){let M=v+(E-v)/I*(y-p),f=c.pow(1.01,b);v=M+(v-M)*f,E=M+(E-M)*f}else D=h*(E-v)/I;v+D<0?D=-v:E+D>r&&(D=r-E),v+=D,E+=D,v<0&&(v=0),E>r&&(E=r),(s!==v||n!==E)&&(s=v,n=E,_())},G=h=>{let b=ae(h);if(W(b),b){let y=b.e,v=y.length-b.n.length;y=H(y.slice(0,v))+"<b>"+H(y.slice(v))+"</b>",ue===2?y+=H(Fe(Ae(b.e)," \u2013 ")):y+=" \u2013 "+H(le(b.t)),fe(h.pageX,h.pageY+20,y)}else oe()},J=!1;a.onmousedown=h=>{if(J=!1,h.button!==2){let b=h.pageX,y=E=>{let D=E.pageX-b;!J&&c.abs(D)<3||(J=!0,F(-D,0,null),b=E.pageX)},v=()=>{d.removeEventListener("mousemove",y),d.removeEventListener("mouseup",v)};h.preventDefault(),d.addEventListener("mousemove",y),d.addEventListener("mouseup",v)}},a.onmousemove=h=>{G(h)},a.onmouseout=h=>{W(null)},a.onclick=h=>{if(J)return;let b=ae(h);W(b),b&&!b.l.length&&Pe(e,b.e,b.t)},Ue(h=>{if(Wt())return;let b=h.deltaX,y=h.deltaY,v=h.ctrlKey||h.metaKey;(v||c.abs(b)>c.abs(y))&&h.preventDefault(),F(b,y,v?h.pageX:null),G(h)}),Y(),Promise.resolve().then(Y),ze(R),Ye(R),je(Y),i.id="flamePanel",i.innerHTML='<div class="summary"><p>This visualization shows which input files were placed into each output file in the bundle. Use the scroll wheel with the '+(Et?"command":"control")+" key to zoom in and out.</p></div>",S.className="tooltip",u.appendChild(a),i.appendChild(u),i.appendChild(S);let re=d.createElement("section");return re.appendChild(Oe),i.appendChild(re),i};var Gt,rl=e=>{let t=e.inputs,r={},s=[];for(let n in t){let i=t[n];for(let u of i.imports)if(u.original&&u.original[0]!=="."){let a=r[u.original]||(r[u.original]=[]);a.includes(u.path)||a.push(u.path)}}for(let n in r){let i=r[n];if(i.length>1){let u=d.createElement("div"),a=d.createElement("ul"),l,o;u.className="warning",u.innerHTML="The import path <code>"+H(n)+"</code> resolves to multiple files in the bundle:";for(let m of i)l=Be(m,l);for(let m of i){let p=m.split("/");l&&(p=p.slice(l.length)),o=Ct(p.join("/"),o)}for(let m of i.sort()){let p=m.split("/").map(H),I=d.createElement("li"),L='<pre><a href="javascript:void 0">',g="";l&&l.length&&(L+='<span class="dim">'+p.slice(0,l.length).join("/")+"/</span>",p=p.slice(l.length)),o&&o.length&&(g='<span class="dim">'+(p.length>o.length?"/":"")+p.slice(p.length-o.length).join("/")+"</span>",p.length-=o.length),I.innerHTML=L+"<b>"+p.join("/")+"</b>"+g+"</a></pre>",a.appendChild(I),I.querySelector("a").onclick=()=>{Pe(e,m,null)}}u.appendChild(a),s.push(u)}}return s},Jt=e=>{if(Gt===e)return;Gt=e;let t=d.getElementById("warningsPanel"),r=rl(e),s=r.length;if(s){t.innerHTML='<div class="expand">\u26A0\uFE0F This bundle has <b><a href="javascript:void 0">'+s+" warning"+(s===1?"":"s")+"</a></b><span>.</span></div>";let n=t.querySelector("span"),i=d.createElement("div");i.className="content";for(let u of r)i.appendChild(u);t.appendChild(i),t.querySelector("a").onclick=()=>{i.style.display==="block"?(n.textContent=".",i.style.display="none"):(n.textContent=":",i.style.display="block")}}else t.innerHTML=""};var nl=d.getElementById("startPanel"),il=d.getElementById("resultsPanel"),mt=d.getElementById("chartPanel"),ct=d.getElementById("useSunburst"),ht=d.getElementById("useFlame"),Le=0,ue=0,gt=e=>typeof e=="object"&&e!==null&&!(e instanceof Array),Ge=e=>{let t=JSON.parse(e),r=St(t),s=i=>{Le!==i&&(Le===1?ct.classList.remove("active"):Le===2&&ht.classList.remove("active"),Le=i,mt.innerHTML="",Le===1?(mt.appendChild(jt(t)),ct.classList.add("active"),lt("chart","sunburst")):Le===2&&(mt.appendChild(zt(t)),ht.classList.add("active"),lt("chart","flame")))},n=i=>{ue!==i&&(ue=i,Ht(t,ue))};if(!gt(t)||!gt(t.inputs)||!gt(t.outputs))throw new Error("Invalid metafile format");nl.style.display="none",il.style.display="block",ct.onclick=()=>s(1),ht.onclick=()=>s(2),Le=0,ue=0,At(t,()=>n(ue===1?2:1)),Jt(t),_e(),s(tt("chart")==="flame"?2:1),n(1)},ol=d.body.dataset,Xt=()=>{ol.theme=tt("theme")+"",Re&&Re()};Xt();U.addEventListener("storage",Xt);d.getElementById("loadExample").onclick=()=>{fetch("example-metafile.json").then(e=>e.text()).then(Ge)};})();