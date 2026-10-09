"use strict";

/* ====== ЗДЕСЬ МЕНЯЕМ ТЕКСТЫ ПОД СЕБЯ ====== */
const CONFIG={
  when:"Скоро узнаешь",
  where:"Это сюрприз",
  time:"Я напишу",
  dress:"Как захочется",
  iso:"", // например "2026-11-14T18:00": тогда после ответа «Да» появится кнопка «Добавить в календарь»
  photos:[["p1.jpg","Золотой час","закат, трава, Вика. Без обработки"],["p2.jpg","Воздушный поцелуй","лето, поле, машина. Оригинал"],["p3.jpg","Ковбойская шляпа","розовый цвет, дорога, закат"],["p4.jpg","Огоньки и ты","зима, огни, улыбка"],["p5.jpg","Вечер у воды","облака, вода, взгляд в сторону"]],
  coupons:[["Вечер","Один вечер, который выбираешь ты"],["Кофе","Кофе или какао в любой момент"],["Обнимашки","Без лимита и срока годности"]],
  code:"1234", // код сейфа, поставь свой
  hint:"Четыре цифры. Подумай, какая дата для нас особенная.",
  hint2:"Попробуй вспомнить самый первый день.",
  secret:"Секрет в том, что за всей этой страницей стоит один человек, который очень хочет тебя порадовать.",
  egg:"Ты нашла секрет. Ты лучшая ♥",
  stats:[["Обаяние",100],["Улыбка",100],["Забота",100],["Чувство стиля",100]], // карточка героя
  back:[["способность","делает любой день лучше"],["слабость","не замечает, какая она классная"],["редкость","единственный экземпляр"],["выпуск","с днём рождения"]],
  letter:"Вика.\n\nС днём рождения.\n\nСлов для этого было слишком много, поэтому получилась целая страница.\n\nСпасибо, что ты есть. Рядом с тобой всё становится теплее и интереснее.\n\nПусть этот год будет таким, каким ты его захочешь.\n\nС днём рождения ♥"
};
/* ИЗМЕНИТЬ ПРИЧИНЫ: правь список ниже, разделитель | */
const R="Твоя улыбка включает свет|Ты подмигиваешь — и мир добрее|Ты умеешь радоваться мелочам|С тобой любая погода уютная|Твой смех заразителен|Ты красиво молчишь рядом|Рядом с тобой будни — праздник|В твоих глазах целая история|Ты мягкая, как зимнее облако|Ты веришь в чудеса|Ты умеешь удивлять|Ты делаешь моё утро лучше|Ты настоящая|У тебя своё чувство стиля|Ты вдохновляешь|Ты слушаешь, а не просто слышишь|Ты тёплая даже в мороз|Твои объятия лечат|Ты смелая в мечтах|Ты умеешь прощать|Ты красиво говоришь «привет»|Ты моя любимая случайность|Ты заставляешь улыбаться без повода|Твой голос — мой любимый звук|Ты умеешь поддержать|Ты не боишься быть собой|С тобой легко|С тобой интересно|Ты упрямая, и это мило|Ты замечаешь красоту вокруг|Ты превращаешь вечер в сказку|Ты пахнешь домом|Ты умеешь мечтать вслух|Твоя доброта настоящая|Ты ловишь моменты|Ты красива в любом настроении|Ты находишь выход из всего|Ты самый тёплый человек|У тебя прекрасные идеи|Ты любишь жизнь|Ты умеешь заботиться|Ты светишься на фото и без них|Ты вкусно смеёшься|С тобой чай вкуснее|Ты делаешь тишину уютной|Твоя походка — моё кино|Ты танцуешь без музыки|Ты помнишь важные мелочи|С тобой хочется быть лучше|Ты моё «домой»|Ты рисуешь настроение в воздухе|Ты умная, и это прекрасно|Ты умеешь быть нежной|Ты сильнее, чем думаешь|Ты добавляешь красок|У тебя красивые руки|Ты умеешь ждать|Ты не сдаёшься|Ты мой повод для улыбки|Ты придаёшь смысл мелочам|С тобой не страшно|Ты любишь Новый год, как ребёнок|Ты делаешь зиму волшебной|Ты зимняя сказка|Ты красиво поправляешь волосы|Рядом с тобой я счастливее|Ты умеешь удивляться|Твой взгляд говорит больше слов|Ты мой любимый разговор|Ты вкладываешь душу во всё|Ты мой самый красивый сюрприз|Ты умеешь быть рядом|Ты бесконечно милая|Ты моя муза|У тебя доброе сердце|Ты шутишь так, что хочется записать|Ты выбираешь хорошее|Ты красиво мечтаешь о будущем|С тобой каждое «сегодня» особенное|Ты умеешь обнимать словами|Ты не такая, как все|Ты настоящее чудо|Ты украшаешь любой кадр|Ты мой любимый человек|Ты причина смотреть на звёзды|Ты добавляешь магии в обычное|Ты умеешь радовать|Ты тёплый свет в холодный вечер|Ты красивая внутри и снаружи|Ты мой лучший день|С тобой время летит|Ты умеешь любить|Ты вдохновляешь меня мечтать|Ты моя радость|Просто потому, что это ты|Ты лучшее, что случилось|Ты делаешь мир нежнее|Ты моя любимая история|Ты моё счастье|Потому что ты — Вика ♥".split("|");
/* ========================================= */

const $=s=>document.querySelector(s),RM=matchMedia("(prefers-reduced-motion:reduce)").matches;

function burst(el){if(RM)return;const r=el.getBoundingClientRect();for(let k=0;k<9;k++){const h=document.createElement("i"),a=Math.random()*6.28,d=40+Math.random()*70;h.className="h";h.textContent=["✦","♥","✿"][k%3];h.style.cssText="--px:"+(r.left+r.width/2)+"px;--py:"+(r.top+r.height/2)+"px;--dx:"+Math.cos(a)*d+"px;--dy:"+(Math.sin(a)*d-40)+"px";h.onanimationend=()=>h.remove();document.body.append(h)}}


/* ---------- конфетти ---------- */
const cf=$("#cf"),cc=cf.getContext("2d"),CP=[];
function rsz(){cf.width=innerWidth;cf.height=innerHeight}addEventListener("resize",rsz);rsz();
function confetti(x,y,n=80,power=1){if(RM)return;for(let i=0;i<n;i++){const a=-Math.PI/2+(Math.random()-.5)*2.4,s=(6+Math.random()*10)*power;CP.push({x,y,vx:Math.cos(a)*s,vy:Math.sin(a)*s,w:6+Math.random()*7,h:3+Math.random()*5,r:Math.random()*6,vr:(Math.random()-.5)*.4,c:["#f4b9d6","#fdf4f8","#5f9a68","#ffc46b","#ff7fb0"][i%5],l:0})}}
(function cl(){requestAnimationFrame(cl);if(!CP.length)return;cc.clearRect(0,0,cf.width,cf.height);for(let i=CP.length-1;i>=0;i--){const p=CP[i];p.vy+=.28;p.vx*=.992;p.x+=p.vx;p.y+=p.vy;p.r+=p.vr;p.l++;if(p.y>cf.height+20||p.l>420){CP.splice(i,1);continue}cc.save();cc.translate(p.x,p.y);cc.rotate(p.r);cc.fillStyle=p.c;cc.globalAlpha=Math.min(1,(420-p.l)/90);cc.fillRect(-p.w/2,-p.h/2,p.w,p.h);cc.restore()}if(!CP.length)cc.clearRect(0,0,cf.width,cf.height)})();

/* ---------- музыка ---------- */
const song=$("#song"),snd=$("#snd"),vol=$("#vol"),sbox=$("#sndbox");let wasPlaying=false,level=.7;
function label(){snd.textContent=!song.paused?"[ звук: вкл ]":"[ звук: выкл ]"}
function play(){song.volume=0;song.play().then(()=>{label();clearInterval(play.t);play.t=setInterval(()=>{if(song.volume<level-.02)song.volume=Math.min(level,song.volume+.02);else{song.volume=level;clearInterval(play.t)}},120)}).catch(label)}
song.addEventListener("error",()=>{sbox.hidden=true});
snd.onclick=()=>{if(song.paused)play();else{song.pause();label()}};
vol.oninput=()=>{level=vol.value/100;clearInterval(play.t);song.volume=level};

/* ---------- вход ---------- */
let live=false;
function unlock(withSound){document.body.classList.add("open");const g=$("#gate");g.classList.add("off");setTimeout(()=>g.remove(),1700);scrollTo(0,0);setTimeout(()=>{live=true},1300);sbox.hidden=!!song.error;if(withSound)play();else label()}
$("#go").onclick=()=>unlock(true);
$("#quiet").onclick=()=>unlock(false);

/* ---------- стена из 100 причин ---------- */
const N=R.length,wallBox=$("#wallbox"),bricks=$("#bricks"),broken=new Set();
for(let i=0;i<N;i++){const b=document.createElement("button");b.className="b "+(((i%10)+(i/10|0))%2?"g":"p");b.textContent=i+1;b.style.setProperty("--r",(Math.random()*16-8)+"deg");b.setAttribute("aria-label","Кирпич "+(i+1));b.onclick=()=>hit(i);bricks.append(b)}
const bs=[...bricks.children];
function show(i){$("#no").textContent="Причина №"+(i+1);const t=$("#txt");t.classList.remove("in");void t.offsetWidth;t.textContent=R[i];t.classList.add("in")}
function frags(el){if(RM)return;const r=el.getBoundingClientRect(),c=getComputedStyle(el).backgroundColor;for(let k=0;k<7;k++){const i=document.createElement("i");i.className="frag";const a=Math.random()*6.28,d=30+Math.random()*60;i.style.cssText="--px:"+(r.left+r.width/2)+"px;--py:"+(r.top+r.height/2)+"px;--c:"+c+";--dx:"+Math.cos(a)*d+"px;--dy:"+(Math.sin(a)*d-30)+"px";i.onanimationend=()=>i.remove();document.body.append(i)}}
function hit(i){if(broken.has(i))return;broken.add(i);frags(bs[i]);bs[i].classList.add("x");burst(bs[i]);wallBox.classList.remove("shake");void wallBox.offsetWidth;wallBox.classList.add("shake");show(i);const n=broken.size;$("#bar").style.width=n/N*100+"%";$("#count").textContent="Разбито "+n+" из "+N;wallBox.style.setProperty("--p",n/N);if(n===N)setTimeout(fall,500)}
function fall(){wallBox.classList.add("done");$("#no").textContent="";$("#txt").textContent="Стена пала. А за ней — ты.";$("#txt").classList.add("in");const r=wallBox.getBoundingClientRect();confetti(r.left+r.width/2,r.top+r.height/2,170,1.5);setTimeout(()=>confetti(r.left+r.width*.15,r.bottom,100,1.2),300);setTimeout(()=>confetti(r.right-r.width*.15,r.bottom,100,1.2),520)}
$("#rnd").onclick=()=>{const left=bs.map((_,i)=>i).filter(i=>!broken.has(i));if(left.length)hit(left[Math.random()*left.length|0])};

/* ---------- свечи ---------- */
const cds=[],cw=$("#candles");let mic=null,done=false;
for(let i=0;i<7;i++){const c=document.createElement("div");c.className="cd";c.innerHTML='<i class="fl"></i>';cw.append(c);cds.push(c)}
const lit=()=>cds.filter(c=>!c.classList.contains("out"));
function snuff(){const c=lit()[0];if(!c)return;c.classList.add("out");if(!lit().length&&!done){done=true;setTimeout(finish,800)}}
function stopMic(){if(mic){mic.s.getTracks().forEach(x=>x.stop());mic.ac.close();mic=null}}
function finish(){stopMic();cw.style.removeProperty("--lean");confetti(innerWidth/2,innerHeight*.65,150,1.25);$("#cakebtns").hidden=true;$("#cakehint").textContent="Свечи погасли. Загадай желание про себя, а потом нажми кнопку.";$("#wished").hidden=false;if(wasPlaying){wasPlaying=false;play()}}
$("#blow").onclick=()=>{stopMic();lit().forEach((_,i)=>setTimeout(snuff,i*180))};
$("#mic").onclick=async()=>{
  try{
    const s=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:false,noiseSuppression:false,autoGainControl:false}});
    const AC=window.AudioContext||window.webkitAudioContext,ac=new AC(),an=ac.createAnalyser();an.fftSize=512;if(ac.resume)ac.resume();ac.createMediaStreamSource(s).connect(an);
    wasPlaying=!song.paused;if(wasPlaying){song.pause();label()}
    mic={s,ac};const buf=new Uint8Array(an.fftSize);let t=0;$("#cakehint").textContent="Слушаю. Подуй в микрофон.";
    (function loop(){if(!mic)return;an.getByteTimeDomainData(buf);let m=0;for(const v of buf)m=Math.max(m,Math.abs(v-128));cw.style.setProperty("--lean",Math.min(55,m*.8)+"deg");if(m>40){if(++t%8===0)snuff()}else t=Math.max(0,t-1);requestAnimationFrame(loop)})();
  }catch(e){$("#cakehint").textContent="Микрофон недоступен. Нажми «Задуть кнопкой»."}
};

/* ---------- желание, письмо ---------- */
function lanterns(){for(let i=0;i<9;i++){const l=document.createElement("i");l.className="lan";l.style.left=(8+Math.random()*84)+"%";l.style.setProperty("--sx",(Math.random()*120-60)+"px");l.style.animationDelay=i*.35+"s";l.onanimationend=()=>l.remove();document.body.append(l)}}
function typeLetter(){const el=$("#typed"),txt=CONFIG.letter;if(RM){el.textContent=txt;return}let i=0;el.classList.add("go");(function n(){el.textContent=txt.slice(0,++i);if(i<txt.length)setTimeout(n,/[.\n,]/.test(txt[i-1])?260:38);else el.classList.remove("go")})()}
$("#wished").onclick=()=>{$("#wished").hidden=true;lanterns();$("#finale").hidden=false;addDots([["letter","Письмо"],["invite","Приглашение"]]);setTimeout(()=>$("#letter").scrollIntoView({behavior:"smooth"}),900);setTimeout(typeLetter,1700)};

/* ---------- приглашение ---------- */
for(const k of["when","where","time","dress"])$("#c-"+k).textContent=CONFIG[k];
const ans=$("#ans"),no=$("#nope"),box=$("#rsvp");
function yes(){ans.textContent="Тогда до встречи. Я очень жду ♥";box.hidden=true;$(".ask").hidden=true;if(CONFIG.iso)$("#ics").hidden=false;const r=ans.getBoundingClientRect();confetti(r.left+r.width/2,r.top,190,1.6);setTimeout(()=>confetti(r.left+r.width/2,r.top,120,1.2),350)}
$("#yes1").onclick=$("#yes2").onclick=yes;
function dodge(){const b=box.getBoundingClientRect();if(!no.classList.contains("no")){const r=no.getBoundingClientRect();no.classList.add("no");no.style.left=(r.left-b.left)+"px";no.style.top=(r.top-b.top)+"px";void no.offsetWidth;no.style.transition="left .35s cubic-bezier(.3,1.4,.5,1),top .35s cubic-bezier(.3,1.4,.5,1)"}
  no.style.left=Math.random()*(b.width-no.offsetWidth)+"px";no.style.top=Math.random()*(b.height-no.offsetHeight)+"px"}
no.addEventListener("pointerenter",dodge);no.addEventListener("pointerdown",e=>{e.preventDefault();dodge()});
no.onclick=()=>{ans.textContent="«Нет» не принимается ♥"};
$("#ics").onclick=()=>{const d=new Date(CONFIG.iso),e=new Date(+d+36e5*3),z=x=>x.toISOString().replace(/[-:]|\.\d{3}/g,""),t=["BEGIN:VCALENDAR","VERSION:2.0","BEGIN:VEVENT","DTSTART:"+z(d),"DTEND:"+z(e),"SUMMARY:День рождения Вики","LOCATION:"+CONFIG.where,"END:VEVENT","END:VCALENDAR"].join("\r\n"),a=document.createElement("a");a.href=URL.createObjectURL(new Blob([t],{type:"text/calendar"}));a.download="invite.ics";a.click()};

/* ---------- карточка героя ---------- */
const hc=$("#hc"),stats=$("#stats");
stats.innerHTML=CONFIG.stats.map(s=>"<li><span>"+s[0]+"</span><i></i><b>0</b></li>").join("");
$("#bk").innerHTML=CONFIG.back.map(r=>"<p><span>"+r[0]+"</span>"+r[1]+"</p>").join("");
function tilt(x,y){hc.style.setProperty("--ry",(x-.5)*34+"deg");hc.style.setProperty("--rx",-(y-.5)*28+"deg");hc.style.setProperty("--mx",x*100+"%");hc.style.setProperty("--my",y*100+"%")}
hc.addEventListener("pointermove",e=>{const r=hc.getBoundingClientRect();tilt((e.clientX-r.left)/r.width,(e.clientY-r.top)/r.height)});
hc.addEventListener("pointerleave",()=>tilt(.5,.5));
let gyro=false;
function onTilt(e){if(e.gamma==null)return;tilt(Math.max(0,Math.min(1,.5+e.gamma/60)),Math.max(0,Math.min(1,.5+(e.beta-50)/70)))}
function askMotion(){if(gyro)return;gyro=true;const D=window.DeviceOrientationEvent;if(D&&typeof D.requestPermission==="function")D.requestPermission().then(s=>{if(s==="granted")addEventListener("deviceorientation",onTilt)}).catch(()=>{});else if(D)addEventListener("deviceorientation",onTilt)}
hc.onclick=()=>{hc.classList.toggle("flip");askMotion();const r=hc.getBoundingClientRect();confetti(r.left+r.width/2,r.top+r.height/2,40,.8)};
hc.onkeydown=e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();hc.click()}};
new IntersectionObserver((e,o)=>{if(!e[0].isIntersecting)return;o.disconnect();[...stats.children].forEach((li,i)=>{const v=CONFIG.stats[i][1],bar=li.querySelector("i"),b=li.querySelector("b");setTimeout(()=>{bar.style.setProperty("--w",v+"%");let n=0;const t=setInterval(()=>{n=Math.min(v,n+3);b.textContent=n;if(n>=v)clearInterval(t)},24)},i*220)})},{threshold:.4}).observe(hc);


/* ---------- галерея ---------- */
const gal=$("#gallery"),gt=$("#galtrack");
CONFIG.photos.forEach(p=>{const f=document.createElement("figure");f.className="gf";f.innerHTML='<div class="gframe"><img src="'+p[0]+'" alt="'+p[1]+'"></div><figcaption><b>'+p[1]+'</b><span>'+p[2]+'</span></figcaption>';gt.append(f)});
function gscroll(){const r=gal.getBoundingClientRect(),span=gal.offsetHeight-innerHeight,p=Math.min(1,Math.max(0,-r.top/Math.max(1,span))),max=Math.max(0,gt.scrollWidth-gt.parentElement.clientWidth);gt.style.transform="translate3d("+(-p*max)+"px,0,0)";$("#galbar").style.transform="scaleX("+p+")"}

/* ---------- найди пару ---------- */
const SY=["♥","✦","✿","☾","★","♪"],mg=$("#mgrid");let first=null,lock=false,moves=0,pairs=0;
function mem(){mg.innerHTML="";moves=0;pairs=0;first=null;lock=false;$("#mmoves").textContent="Ходов: 0";$("#mmsg").textContent="";
  [...SY,...SY].sort(()=>Math.random()-.5).forEach(src=>{const c=document.createElement("button");c.className="mc";c.dataset.k=src;c.innerHTML='<span class="mb">?</span><span class="mf">'+src+'</span>';c.setAttribute("aria-label","Карточка");c.onclick=()=>flipc(c);mg.append(c)})}
function flipc(c){if(lock||c.classList.contains("up")||c.classList.contains("ok"))return;c.classList.add("up");if(!first){first=c;return}
  moves++;$("#mmoves").textContent="Ходов: "+moves;
  if(first.dataset.k===c.dataset.k){first.classList.add("ok");c.classList.add("ok");burst(c);first=null;if(++pairs===SY.length){$("#mmsg").textContent="Все пары найдены за "+moves+" ходов ♥";const r=mg.getBoundingClientRect();confetti(r.left+r.width/2,r.top+r.height/2,150,1.4)}}
  else{lock=true;const a=first;first=null;setTimeout(()=>{a.classList.remove("up");c.classList.remove("up");lock=false},800)}}
$("#mrst").onclick=mem;mem();

/* ---------- купоны со скретч-слоем ---------- */
function scratch(d){const cv=d.querySelector("canvas"),x=cv.getContext("2d");let w=0,h=0,mv=0,cleared=false,down=false;
  w=cv.width=d.clientWidth;h=cv.height=d.clientHeight;const g=x.createLinearGradient(0,0,w,h);g.addColorStop(0,"#f4b9d6");g.addColorStop(1,"#c98fb0");x.fillStyle=g;x.fillRect(0,0,w,h);x.fillStyle="rgba(28,42,32,.6)";x.font="700 15px Inter,sans-serif";x.textAlign="center";x.fillText("сотри, чтобы узнать",w/2,h/2+5);
  function check(){const a=x.getImageData(0,0,w,h).data;let n=0;for(let i=3;i<a.length;i+=64)if(a[i]===0)n++;if(n/(a.length/64)>.5){cleared=true;cv.style.opacity=0;cv.style.pointerEvents="none";const r=d.getBoundingClientRect();confetti(r.left+r.width/2,r.top+r.height/2,90,1.1)}}
  function erase(e){if(!down||cleared)return;const r=cv.getBoundingClientRect();x.globalCompositeOperation="destination-out";x.beginPath();x.arc(e.clientX-r.left,e.clientY-r.top,22,0,6.283);x.fill();if(++mv%8===0)check()}
  cv.addEventListener("pointerdown",e=>{down=true;cv.setPointerCapture(e.pointerId);erase(e)});cv.addEventListener("pointermove",erase);["pointerup","pointercancel"].forEach(n=>cv.addEventListener(n,()=>{down=false}))}
CONFIG.coupons.forEach(c=>{const d=document.createElement("div");d.className="coupon";d.innerHTML='<p class="ck">[ купон ]</p><p class="ct">'+c[0]+'</p><p class="cs">'+c[1]+'</p><canvas></canvas>';$("#cgrid").append(d)});
[...$("#cgrid").children].forEach(scratch);

/* ---------- тест ---------- */
const Q=[["Кто здесь самая красивая?",["Вика","Конечно, Вика","Вика, без вариантов"]],["Кто делает любой день лучше?",["Вика","Тоже Вика","Угадай с трёх раз: Вика"]],["Кого хочется обнять прямо сейчас?",["Вику","Вику, очень крепко","Вику, и не отпускать"]]];
let qi=0;
function quiz(){const box=$("#quiz");
  if(qi>=Q.length){box.innerHTML='<p class="qn">[ Результат ]</p><p class="res"><span id="pc">0</span>%</p><p class="rt">Вика — лучшая. Тест это подтвердил.</p><div><button class="btn" id="qr">Пройти ещё раз</button></div>';
    const pc=$("#pc");let v=0;const id=setInterval(()=>{v+=4;pc.textContent=Math.min(v,100);if(v>=100){clearInterval(id);const r=pc.getBoundingClientRect();confetti(r.left+r.width/2,r.top,100,1.2)}},35);$("#qr").onclick=()=>{qi=0;quiz()};return}
  box.innerHTML='<p class="qn">[ Вопрос '+(qi+1)+' из '+Q.length+' ]</p><p class="qt">'+Q[qi][0]+'</p><div class="opts">'+Q[qi][1].map(o=>'<button class="btn ghost opt">'+o+'</button>').join("")+'</div>';
  const bs2=[...box.querySelectorAll(".opt")];bs2.forEach(b=>b.onclick=()=>{b.classList.add("ok");bs2.forEach(x=>{x.disabled=true});burst(b);setTimeout(()=>{qi++;quiz()},900)})}
quiz();

/* ---------- сейф ---------- */
const dv=[0,0,0,0];let tries=0;
dv.forEach((_,i)=>{const c=document.createElement("div");c.className="dg";c.innerHTML='<button aria-label="Больше">▲</button><output>0</output><button aria-label="Меньше">▼</button>';const o=c.children[1];c.children[0].onclick=()=>{dv[i]=(dv[i]+1)%10;o.textContent=dv[i]};c.children[2].onclick=()=>{dv[i]=(dv[i]+9)%10;o.textContent=dv[i]};$("#digits").append(c)});
$("#shint").textContent=CONFIG.hint;
$("#try").onclick=()=>{const sb=$("#safebox");if(dv.join("")===CONFIG.code){sb.classList.add("open");$("#secret").textContent=CONFIG.secret;$("#secret").hidden=false;$("#try").hidden=true;const r=sb.getBoundingClientRect();confetti(r.left+r.width/2,r.top+r.height/2,170,1.5)}else{sb.classList.remove("bad");void sb.offsetWidth;sb.classList.add("bad");if(++tries>=3)$("#shint").textContent=CONFIG.hint+" "+CONFIG.hint2}};

/* ---------- слайд с тортом встаёт по центру экрана ---------- */
let snapped=false;
new IntersectionObserver(e=>{const r=e[0].intersectionRatio;if(r>.45&&!snapped){snapped=true;$("#cake").scrollIntoView({behavior:"smooth",block:"center"})}else if(r<.1)snapped=false},{threshold:[0,.1,.45]}).observe($("#cake"));

/* ---------- пасхалка: пять нажатий на имя ---------- */
let eggs=0;$("h1").onclick=()=>{if(++eggs===5){eggs=0;const t=$("#toast");t.textContent=CONFIG.egg;t.hidden=false;confetti(innerWidth/2,innerHeight*.5,120,1.2);setTimeout(()=>{t.hidden=true},3500)}};

/* ---------- боковая навигация ---------- */
const dots=$("#dots");
function addDots(list){list.forEach(([id,l])=>{const b=document.createElement("button");b.className="dot";b.dataset.id=id;b.dataset.l=l;b.setAttribute("aria-label",l);b.onclick=()=>{const el=document.getElementById(id);if(el)el.scrollIntoView({behavior:"smooth",block:id==="gallery"?"start":"center"})};dots.append(b)})}
addDots([["hero","Начало"],["wall","Причины"],["card","Герой"],["gallery","Галерея"],["memory","Пары"],["coupons","Купоны"],["test","Тест"],["safe","Сейф"],["cake","Торт"]]);
function nav(){let best=null,bd=1e9;for(const b of dots.children){const el=document.getElementById(b.dataset.id);if(!el||!el.offsetHeight)continue;const r=el.getBoundingClientRect(),mid=innerHeight/2,d=r.top<=mid&&r.bottom>=mid?0:Math.min(Math.abs(r.top-mid),Math.abs(r.bottom-mid));if(d<bd){bd=d;best=b}}[...dots.children].forEach(b=>b.classList.toggle("on",b===best))}

/* ---------- анимации листания в стиле Apple ---------- */
const slides=[...document.querySelectorAll(".slide")],cl=v=>Math.min(1,Math.max(0,v));let busy=false;
function fx(){busy=false;const vh=innerHeight;gscroll();
  if(!RM)slides.forEach(s=>{const r=s.getBoundingClientRect();if(!r.height||r.bottom<-80||r.top>vh+80)return;
    const e=cl((vh-r.top)/(vh*.5)),l=cl((vh*.3-r.bottom)/(vh*.3));
    s.style.transform="scale("+((.955+.045*e)*(1-.035*l)).toFixed(4)+")";s.style.opacity=((.35+.65*e)*(1-.45*l)).toFixed(3)});
  nav()}
addEventListener("scroll",()=>{if(!busy){busy=true;requestAnimationFrame(fx)}},{passive:true});addEventListener("resize",fx);
if(!RM){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const t=e.target;setTimeout(()=>t.classList.add("in"),t.matches("h2,.galhead")?0:140);io.unobserve(t)}}),{threshold:.12});
  document.querySelectorAll(".slide:not(.hero) h2,.slide:not(.hero) .sub,.wboard,.cardstage,.mboard,.cgrid,.quiz .qbox,.saferow,.cakerow,.ticket,.rsvp,.galhead").forEach(t=>{t.classList.add("pre");io.observe(t)})}
fx();
