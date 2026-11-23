(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){var d=document.documentElement,rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
[].forEach.call(document.querySelectorAll('.stg'),function(g){[].forEach.call(g.children,function(c,i){c.style.transitionDelay=(i*110)+'ms';});});
function cnt(el){var to=parseFloat(el.getAttribute('data-count')),dec=(el.getAttribute('data-count').split('.')[1]||'').length,t0=null,dur=1600;if(rm){el.textContent=to.toFixed(dec);return;}function f(t){if(!t0)t0=t;var p=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-p,3);el.textContent=(to*e).toFixed(dec);if(p<1)requestAnimationFrame(f);}requestAnimationFrame(f);}
var els=[].slice.call(document.querySelectorAll('.rv,[data-count]'));
if(rm||!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in');if(e.hasAttribute('data-count'))e.textContent=e.getAttribute('data-count');});}
else{var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var ts=(e.target.__rv||[]).concat(els.indexOf(e.target)>-1?[e.target]:[]);ts.forEach(function(t){t.classList.add('in');if(t.hasAttribute('data-count'))cnt(t);});io.unobserve(e.target);}});},{rootMargin:'0px 0px -6% 0px',threshold:.01});
 els.forEach(function(e){var o=e;if(e.classList.contains('rv-c')||e.classList.contains('rv-w')){o=e.parentElement;}if(o!==e){(o.__rv=o.__rv||[]).push(e);}io.observe(o);});
 setTimeout(function(){els.forEach(function(e){var r=e.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)e.classList.add('in');});},1200);}
var px=[].slice.call(document.querySelectorAll('[data-px]')),pr=document.getElementById('prog'),tk=false;
function upd(){var h=innerHeight;if(!rm)px.forEach(function(el){var r=el.parentElement.getBoundingClientRect();if(r.bottom<0||r.top>h)return;var s=+el.getAttribute('data-px');el.style.transform='translate3d(0,'+((r.top+r.height/2-h/2)*s).toFixed(1)+'px,0) scale(1.14)';});
 if(pr){var m=d.scrollHeight-h;pr.style.width=(m>0?scrollY/m*100:0)+'%';}d.classList.toggle('scd',scrollY>60);tk=false;}
addEventListener('scroll',function(){if(!tk){requestAnimationFrame(upd);tk=true;}},{passive:true});addEventListener('resize',upd);upd();
[].forEach.call(document.querySelectorAll('.hs'),function(s){var down=false,x0=0,s0=0,mv=0;s.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse')return;down=true;mv=0;x0=e.clientX;s0=s.scrollLeft;s.classList.add('drag');});addEventListener('pointerup',function(){down=false;s.classList.remove('drag');});s.addEventListener('pointermove',function(e){if(!down)return;mv=Math.abs(e.clientX-x0);s.scrollLeft=s0-(e.clientX-x0);});s.addEventListener('click',function(e){if(mv>6){e.preventDefault();e.stopPropagation();}},true);});
})();
(function(){function $(i){return document.getElementById(i);}
var SZ=[[5,6,7,8,9,10,11,12],[4,5,6,7,8,9,10,11,12,13,14],[3,4,5,6,7,8,9,10,11,12,13],[35,36,37,38,39,40,41,42,43,44,45,46,47]],sys=0,sv=$('sz-v');
if(sv){var CUT=[[6.5,9.5,99],[5.5,8.5,11.5],[4.5,7.5,10.5],[38,42,46]],NM=['US women','US men','UK','EU'];
 function opts(){sv.innerHTML=SZ[sys].map(function(v){return '<option value="'+v+'"'+(v===SZ[sys][Math.floor(SZ[sys].length/2)]?' selected':'')+'>'+NM[sys]+' '+v+'</option>';}).join('');}
 function sz(){var v=+sv.value,c=CUT[sys],s=v<c[0]?'S':v<c[1]?'M':v<c[2]?'L':'XL';$('sz-o').textContent=s;$('sz-t').textContent='for '+NM[sys]+' '+v+(s==='XL'?'. Many makers stop at L, so look for a big-foot range.':'');
  [].forEach.call(document.querySelectorAll('#sz-r svg'),function(e){e.classList.toggle('on',e.getAttribute('data-s')===s);});[].forEach.call(document.querySelectorAll('#sz-tb tr'),function(r){r.classList.toggle('on',r.getAttribute('data-s')===s);});}
 [].forEach.call(document.querySelectorAll('#sz-s button'),function(b){b.addEventListener('click',function(){sys=+b.getAttribute('data-i');[].forEach.call(document.querySelectorAll('#sz-s button'),function(x){x.classList.toggle('on',x===b);x.setAttribute('aria-pressed',x===b);});opts();sz();});});sv.addEventListener('change',sz);opts();sz();}
var fp=$('fi-p');if(fp){var ps=[].slice.call(fp.querySelectorAll('path')),sec=fp.closest('.cz-fi');function fk(){var r=sec.getBoundingClientRect(),p=Math.max(0,Math.min(1,(innerHeight*.9-r.top)/(innerHeight*.7))),rows=Math.ceil(p*9);ps.forEach(function(e){e.classList.toggle('on',+e.getAttribute('data-r')<rows);});}addEventListener('scroll',fk,{passive:true});fk();}
var ct=$('cm-t');if(ct){var act=0;function cm(){var t=+ct.value,need=Math.max(0,Math.min(1,(22-t)/42+[0,.08,.18,-.1][act])),y,th,cut;
 y=need>.75?['Alpaca or a wool and alpaca blend','The warmest choice for very cold days.']:need>.5?['Merino wool','Warm, breathable and soft enough for all day.']:need>.3?['Merino blend or lambswool','Comfortable warmth without overheating.']:['Cotton or bamboo blend','Light and breathable for mild days.'];
 th=need>.75?'Thick, fully cushioned':need>.5?'Medium cushion':need>.3?'Light cushion':'Thin';cut=['Loose-cuff lounge socks or slipper socks with grips','Crew socks','Crew or over-the-calf hiking socks with a cushioned sole','Loose bed socks, nothing tight at the cuff'][act];
 if(act===3&&need>.6)y=['Cashmere or alpaca','Soft and warm, with a relaxed cuff for sleep.'];
 $('cm-to').innerHTML=t+'&deg;C';var m=$('cm-m');m.style.height=(15+need*85)+'%';m.style.setProperty('--w',(15+need*85)+'%');
 $('cm-r').innerHTML='<h3>'+y[0]+'</h3><p>'+y[1]+'</p><dl><div><dt>Thickness</dt><dd>'+th+'</dd></div><div><dt>Cut</dt><dd>'+cut+'</dd></div></dl>';}
 [].forEach.call(document.querySelectorAll('#cm-a button'),function(b){b.addEventListener('click',function(){act=+b.getAttribute('data-v');[].forEach.call(document.querySelectorAll('#cm-a button'),function(x){x.classList.toggle('on',x===b);x.setAttribute('aria-pressed',x===b);});cm();});});ct.addEventListener('input',cm);cm();}
})();
