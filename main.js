addEventListener('load',()=>setTimeout(()=>document.body.classList.remove('loading'),500));
const h=document.querySelector('.hdr'),px=[...document.querySelectorAll('[data-parallax]')];
function onS(){h.classList.toggle('s',scrollY>40);px.forEach(e=>{const r=e.parentElement.getBoundingClientRect();e.style.transform=`translateY(${r.top*-.25}px)`})}
addEventListener('scroll',onS,{passive:true});onS();
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach((e,i)=>{e.style.transitionDelay=(i%4)*90+'ms';io.observe(e)});
const co=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const el=e.target,to=+el.dataset.to,s=el.dataset.suf||'+',t0=performance.now();
(function f(t){const p=Math.min(1,(t-t0)/1800),v=Math.round(to*(1-Math.pow(1-p,3)));el.textContent=v+(p==1?s:'');if(p<1)requestAnimationFrame(f)})(t0);co.unobserve(el)}),{threshold:.5});
document.querySelectorAll('.num').forEach(e=>co.observe(e));
const b=document.querySelector('.burger'),n=document.querySelector('nav');b.onclick=()=>n.classList.toggle('open');n.onclick=()=>n.classList.remove('open');
const g=[...document.querySelectorAll('.g')],lb=document.querySelector('.lb'),li=lb.querySelector('img'),lp=lb.querySelector('p');let k=0;
function show(i){k=(i+g.length)%g.length;li.src=g[k].href;lp.textContent=g[k].querySelector('span').textContent;lb.classList.add('on')}
g.forEach((a,i)=>a.onclick=e=>{e.preventDefault();show(i)});lb.querySelector('button').onclick=()=>lb.classList.remove('on');
lb.querySelector('.pv').onclick=()=>show(k-1);lb.querySelector('.nx').onclick=()=>show(k+1);
addEventListener('keydown',e=>{if(!lb.classList.contains('on'))return;if(e.key=='Escape')lb.classList.remove('on');if(e.key=='ArrowLeft')show(k-1);if(e.key=='ArrowRight')show(k+1)});
