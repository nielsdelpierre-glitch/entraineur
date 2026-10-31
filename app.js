const $=id=>document.getElementById(id);
const KEY="lentraineur_v1";
const plan=[["LUNDI","Force A","Jambes · poussée · tronc"],["MARDI","Escalade","Pas de tractions supplémentaires"],["MERCREDI","Course","Intervalles ou endurance facile"],["JEUDI","Boxe / sac","Technique · corde à sauter"],["VENDREDI","Force B","Tractions · kettlebell · sangles"],["SAMEDI","Endurance","Course facile ou vélo gravel"],["DIMANCHE","Récupération","Repos ou yoga doux"]];
let data=JSON.parse(localStorage.getItem(KEY)||'{"logs":[],"week":1,"cycle":"Préparation générale MMA"}');
function save(){localStorage.setItem(KEY,JSON.stringify(data));}
function render(){
 $("weekLabel").textContent=`SEMAINE ${String(data.week).padStart(2,"0")} / 12`;
 $("weekInput").value=data.week;$("cycleName").value=data.cycle;
 $("weekPlan").innerHTML=plan.map((p,i)=>`<div class="item"><div><b>${p[0]} · ${p[1]}</b><small>${p[2]}</small></div><span class="tag">${i===1?"FIXE":"PLANIFIÉ"}</span></div>`).join("");
 $("programList").innerHTML=plan.map(p=>`<div class="item"><div><b>${p[0]} · ${p[1]}</b><small>${p[2]}</small></div></div>`).join("");
 const weekLogs=data.logs.filter(x=>{const d=new Date(x.date);const now=new Date();return d.getFullYear()===now.getFullYear()&&Math.floor((now-d)/(7*864e5))===0});
 $("sessionsCount").textContent=weekLogs.length;$("minutesCount").innerHTML=weekLogs.reduce((a,x)=>a+x.duration,0)+'<em> min</em>';
 $("totalSessions").textContent=data.logs.length;$("totalHours").innerHTML=Math.round(data.logs.reduce((a,x)=>a+x.duration,0)/60*10)/10+'<em> h</em>';
 $("logList").innerHTML=data.logs.length?data.logs.slice().reverse().map(x=>`<div class="item"><div><b>${esc(x.activity)}</b><small>${new Date(x.date).toLocaleDateString("fr-FR")} · ${x.duration} min · RPE ${x.rpe}${x.distance?` · ${x.distance} km`:""}${x.notes?`<br>${esc(x.notes)}`:""}</small></div></div>`).join(""):'<div class="note">Aucune séance enregistrée. Le travail commence ici.</div>';
}
function esc(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
document.querySelectorAll(".tab").forEach(b=>b.addEventListener("click",()=>{document.querySelectorAll(".tab,.page").forEach(x=>x.classList.remove("active"));b.classList.add("active");$(b.dataset.page).classList.add("active");}));
function openLog(){$("logDialog").showModal();}
$("quickLog").onclick=openLog;
$("saveLog").onclick=e=>{e.preventDefault();const duration=Number($("duration").value);if(!duration)return;data.logs.push({activity:$("activity").value,duration,rpe:Number($("rpe").value),distance:Number($("distance").value)||0,notes:$("notes").value,date:new Date().toISOString()});save();$("logDialog").close();$("logForm").reset();render();};
$("weekInput").onchange=()=>{data.week=Math.max(1,Math.min(12,Number($("weekInput").value)||1));save();render();};
$("cycleName").onchange=()=>{data.cycle=$("cycleName").value;save();};
$("exportBtn").onclick=()=>{const blob=new Blob([JSON.stringify(data,null,2)],{type:"application/json"});const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="lentraineur-sauvegarde.json";a.click();URL.revokeObjectURL(a.href);};
$("importFile").onchange=async e=>{try{const imported=JSON.parse(await e.target.files[0].text());if(!Array.isArray(imported.logs))throw Error();data=imported;save();render();alert("Sauvegarde importée.");}catch{alert("Fichier JSON non valide.");}};
$("clearBtn").onclick=()=>{if(confirm("Effacer toutes les séances et réglages enregistrés sur cet appareil ?")){data={logs:[],week:1,cycle:"Préparation générale MMA"};save();render();}};
if("serviceWorker" in navigator)window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));
render();