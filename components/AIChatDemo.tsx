"use client";
import { useState, useEffect, useRef, useCallback } from "react";

interface Msg { from: "user"|"ai"; type: "text"|"card"|"qpay"; text?: string; }
interface Appt { name: string; detail: string; time: string; done: boolean; }
interface S {
  id: string; icon: string; label: string;
  business: string; avBg: string; avTxt: string;
  msgs: Msg[];
  card: { emoji: string; title: string; price: string; tag: string; tagColor: string; };
  qpay: string;
  baseRev: number; addRev: number;
  baseAppts: Appt[];
  newAppt: { name: string; detail: string; time: string; };
}

const QR = [1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1];

const SC: S[] = [
  {
    id:"salon", icon:"💆", label:"Гоо сайхны салон",
    business:"Lumière Salon", avBg:"linear-gradient(135deg,#f9a8d4,#ec4899)", avTxt:"L",
    msgs:[
      {from:"user",type:"text",text:"Сайн уу! Үс засуулахыг хүсч байна 😊"},
      {from:"ai",  type:"text",text:"Сайн байна уу! Манайд дараах үйлчилгээ бэлэн байна:"},
      {from:"ai",  type:"card"},
      {from:"user",type:"text",text:"Авъя! Маргааш 14:00 цагт боломжтой юу?"},
      {from:"ai",  type:"text",text:"Тийм, маргааш 14:00 чөлөөтэй 😊 Нэрээ хэлнэ үү?"},
      {from:"user",type:"text",text:"Оюунаа"},
      {from:"ai",  type:"text",text:"Баярлалаа! Утасны дугаараа хэлнэ үү?"},
      {from:"user",type:"text",text:"99001234"},
      {from:"ai",  type:"text",text:"Оюунаа, 10,000₮ урьдчилгаа QPay-ээр төлнө үү 👇"},
      {from:"ai",  type:"qpay"},
      {from:"user",type:"text",text:"Төлсөн!"},
      {from:"ai",  type:"text",text:"✅ Маргааш 14:00д таныг хүлээж байна! 💜"},
    ],
    card:{emoji:"✂️",title:"Үс засах",price:"25,000₮-аас",tag:"Дээд эрэлттэй",tagColor:"#16a34a"},
    qpay:"10,000₮", baseRev:1245000, addRev:25000,
    baseAppts:[
      {name:"Дэлгэрмаа",detail:"Хумс",time:"11:00",done:true},
      {name:"Номуун",detail:"Нүүр",time:"12:30",done:true},
    ],
    newAppt:{name:"Оюунаа",detail:"Үс засах",time:"14:00"},
  },
  {
    id:"restaurant", icon:"🍽️", label:"Ресторан",
    business:"Khan Restaurant", avBg:"linear-gradient(135deg,#fb923c,#dc2626)", avTxt:"K",
    msgs:[
      {from:"user",type:"text",text:"Сайн уу! Маргааш 7 хүний ширээ 19:00 цагт захиалах боломжтой юу?"},
      {from:"ai",  type:"text",text:"Сайн байна уу! Маргааш 19:00 цагаас сул ширээ байхгүй байна, Та 20:00 | 21:00 | 22:00 цагуудаас захиалах боломжтой 😊"},
      {from:"user",type:"text",text:"20:00 цагаас захиалая"},
      {from:"ai",  type:"card"},
      {from:"ai",  type:"text",text:"Нэр болон утасны дугаараа хэлнэ үү?"},
      {from:"user",type:"text",text:"Болд, 99112233"},
      {from:"ai",  type:"text",text:"20,000₮ урьдчилгаа QPay-ээр төлнө үү 👇"},
      {from:"ai",  type:"qpay"},
      {from:"user",type:"text",text:"Төлсөн!"},
      {from:"ai",  type:"text",text:"✅ Маргааш 20:00д 7 хүний ширээ баталгаажлаа! 🍽️"},
    ],
    card:{emoji:"🍽️",title:"Оройн зоог",price:"7 хүн · 20:00",tag:"Маргааш",tagColor:"#d97706"},
    qpay:"20,000₮", baseRev:620000, addRev:20000,
    baseAppts:[
      {name:"Сарнай",detail:"4 хүн · 18:00",time:"18:00",done:true},
      {name:"Анар",detail:"2 хүн · 19:00",time:"19:00",done:true},
    ],
    newAppt:{name:"Болд",detail:"7 хүн · 20:00",time:"20:00"},
  },
  {
    id:"fitness", icon:"💪", label:"Фитнес клуб",
    business:"FitZone Club", avBg:"linear-gradient(135deg,#34d399,#059669)", avTxt:"F",
    msgs:[
      {from:"user",type:"text",text:"Сайн уу! Сарын гишүүнчлэл хэд вэ?"},
      {from:"ai",  type:"text",text:"Сайн байна уу! Манайд дараах subscription байна:"},
      {from:"ai",  type:"card"},
      {from:"user",type:"text",text:"Авъя! Яаж бүртгүүлэх вэ?"},
      {from:"ai",  type:"text",text:"Нэр болон утасны дугаараа хэлнэ үү?"},
      {from:"user",type:"text",text:"Дэлгэр, 99445566"},
      {from:"ai",  type:"text",text:"89,000₮ QPay-ээр төлнө үү 👇"},
      {from:"ai",  type:"qpay"},
      {from:"user",type:"text",text:"Төлсөн!"},
      {from:"ai",  type:"text",text:"✅ Гишүүнчлэл идэвхжлээ! Маргаашаас ирж болно 💪"},
    ],
    card:{emoji:"💪",title:"Сарын гишүүнчлэл",price:"89,000₮/сар",tag:"Хамгийн алдартай",tagColor:"#059669"},
    qpay:"89,000₮", baseRev:3540000, addRev:89000,
    baseAppts:[
      {name:"Мөнхбаяр",detail:"Сарын гишүүнчлэл",time:"өчигдөр",done:true},
      {name:"Цэцэг",detail:"Сарын гишүүнчлэл",time:"өнөөдөр",done:true},
    ],
    newAppt:{name:"Дэлгэр",detail:"Сарын гишүүнчлэл",time:"одоо"},
  },
  {
    id:"shop", icon:"👗", label:"Хувцасны дэлгүүр",
    business:"Zaya Fashion", avBg:"linear-gradient(135deg,#67e8f9,#0891b2)", avTxt:"Z",
    msgs:[
      {from:"user",type:"text",text:"Сайн уу! Энэ цамц L хэмжээтэй байна уу?"},
      {from:"ai",  type:"text",text:"Сайн байна уу! Тийм, L хэмжээ байна 😊"},
      {from:"ai",  type:"card"},
      {from:"user",type:"text",text:"Захиалья, хэзээ хүргэх вэ??"},
      {from:"ai",  type:"text",text:"Захиалга баталгаажснаас хойш 24-48 цагын дотор хүргэгдэнэ. Та хүргүүлэх хаяг болон утасны дугаараа өгөөрэй"},
      {from:"user",type:"text",text:"Чингэлтэй 3-р хороо, 24-53 тоот орцны код #2244B, 99232311"},
      {from:"ai",  type:"text",text:"Таны захиалгын нийт дүн 65,000₮ QPay-ээр төлнө үү 👇"},
      {from:"ai",  type:"qpay"},
      {from:"user",type:"text",text:"За төлчихлөө!"},
      {from:"ai",  type:"text",text:"✅ Захиалга баталгаажлаа! Захиалгатай холбоотой ажилтантай холбогдох бол хэлээрэй, баярлалаа."},
    ],
    card:{emoji:"👗",title:"Цамц – L хэмжээ",price:"65,000₮",tag:"3 үлдсэн",tagColor:"#ea580c"},
    qpay:"65,000₮", baseRev:2340000, addRev:65000,
    baseAppts:[
      {name:"Сарнай",detail:"Өмд M",time:"10:00",done:true},
      {name:"Болд",detail:"Куртка XL",time:"11:30",done:true},
    ],
    newAppt:{name:"Сарнай",detail:"Цамц L",time:"одоо"},
  },
  {
    id:"vet", icon:"🐾", label:"Амьтны эмнэлэг",
    business:"PetCare Эмнэлэг", avBg:"linear-gradient(135deg,#7dd3fc,#0284c7)", avTxt:"P",
    msgs:[
      {from:"user",type:"text",text:"Сайн уу! Нохойгоо үзлэгт оруулах цаг захиалахыг хүсч байна"},
      {from:"ai",  type:"text",text:"Сайн байна уу! Дараах цагуудад боломжтой байна. Эмч Дэлгэрсайхан 13:00 14:00 15:00, Эмч Болдбаатар 14:00 16:00, Эмч Мөнхэрдэнэ 10:00 11:00"},
      {from:"user",type:"text",text:"Дэлгэрсайхан эмч 14 цагаас захиалга авья"},
      {from:"ai",  type:"card"},
      {from:"ai",  type:"text",text:"Та нэр болон утасны дугаараа өгнө үү?"},
      {from:"user",type:"text",text:"Анар, 99887766"},
      {from:"ai",  type:"text",text:"10,000₮ урьдчилгаа QPay-ээр төлнө үү 👇"},
      {from:"ai",  type:"qpay"},
      {from:"user",type:"text",text:"Төлсөн!"},
      {from:"ai",  type:"text",text:"✅ Маргааш Дэлгэрсайхан эмчийн 14:00 цагын захиалга амжилттай бүртгэгдлээ! 🐾"},
    ],
    card:{emoji:"🐾",title:"Дэлгэрсайхан эмч · 14:00",price:"30,000₮",tag:"Маргааш",tagColor:"#0284c7"},
    qpay:"10,000₮", baseRev:890000, addRev:30000,
    baseAppts:[
      {name:"Мөнгөнчимэг",detail:"Муурны үзлэг",time:"10:00",done:true},
      {name:"Тэгшбаяр",detail:"Нохойн вакцин",time:"11:30",done:true},
    ],
    newAppt:{name:"Анар",detail:"Нохойн үзлэг · 14:00",time:"14:00"},
  },
];

const PAUSE_BEFORE=400, PAUSE_AFTER=500, THINKING_DUR=950, ENTER_PAUSE=300, DONE_PAUSE=5000;
function rand(a:number,b:number){return a+Math.floor(Math.random()*(b-a));}
type Phase="idle"|"typing-user"|"sending"|"thinking"|"typing-ai"|"card-in"|"done";
interface Bubble{id:number;from:"user"|"ai";type:string;text?:string;partial?:boolean;}

function ChatWindow({sc,onPaid}:{sc:S;onPaid:()=>void}){
  const [bubbles,setBubbles]=useState<Bubble[]>([]);
  const [inputText,setInputText]=useState("");
  const [phase,setPhase]=useState<Phase>("idle");
  const [msgIdx,setMsgIdx]=useState(0);
  const [charIdx,setCharIdx]=useState(0);
  const containerRef=useRef<HTMLDivElement>(null);
  const scrolledUp=useRef(false);
  const nextId=useRef(0);
  const paidFired=useRef(false);

  useEffect(()=>{
    if(scrolledUp.current) return;
    const el=containerRef.current;
    if(el) el.scrollTop=el.scrollHeight;
  },[bubbles]);

  useEffect(()=>{
    if(phase==="done"){
      if(!paidFired.current){paidFired.current=true;onPaid();}
      const t=setTimeout(()=>{
        setBubbles([]);setInputText("");setMsgIdx(0);setCharIdx(0);
        scrolledUp.current=false;nextId.current=0;paidFired.current=false;
        setPhase("idle");
      },DONE_PAUSE);
      return ()=>clearTimeout(t);
    }
    if(msgIdx>=sc.msgs.length){setPhase("done");return;}
    const msg=sc.msgs[msgIdx];

    if(phase==="idle"){
      const t=setTimeout(()=>setPhase(msg.from==="user"?"typing-user":"thinking"),PAUSE_BEFORE);
      return ()=>clearTimeout(t);
    }
    if(phase==="typing-user"&&msg.type==="text"){
      const txt=msg.text!;
      if(charIdx<txt.length){
        const t=setTimeout(()=>{setInputText(txt.slice(0,charIdx+1));setCharIdx(c=>c+1);},rand(18,45));
        return ()=>clearTimeout(t);
      } else {
        const t=setTimeout(()=>{setInputText("");setPhase("sending");},ENTER_PAUSE);
        return ()=>clearTimeout(t);
      }
    }
    if(phase==="sending"){
      setBubbles(prev=>[...prev,{id:nextId.current++,from:"user",type:"text",text:msg.text}]);
      const t=setTimeout(()=>{setMsgIdx(i=>i+1);setCharIdx(0);setPhase("idle");},PAUSE_AFTER);
      return ()=>clearTimeout(t);
    }
    if(phase==="thinking"){
      setBubbles(prev=>{
        if(prev.some(b=>b.type==="thinking")) return prev;
        return [...prev,{id:nextId.current++,from:"ai",type:"thinking"}];
      });
      const t=setTimeout(()=>{
        setBubbles(prev=>prev.filter(b=>b.type!=="thinking"));
        setPhase(msg.type==="text"?"typing-ai":"card-in");
        setCharIdx(0);
      },THINKING_DUR);
      return ()=>clearTimeout(t);
    }
    if(phase==="typing-ai"&&msg.type==="text"){
      const txt=msg.text!;
      if(charIdx<txt.length){
        const t=setTimeout(()=>{
          setBubbles(prev=>{
            const next=[...prev];
            const last=next[next.length-1];
            if(!last||last.type!=="text"||last.from!=="ai"||!last.partial){
              next.push({id:nextId.current++,from:"ai",type:"text",text:txt.slice(0,charIdx+1),partial:true});
            } else {
              next[next.length-1]={...last,text:txt.slice(0,charIdx+1)};
            }
            return next;
          });
          setCharIdx(c=>c+1);
        },rand(18,42));
        return ()=>clearTimeout(t);
      } else {
        setBubbles(prev=>{
          const next=[...prev];
          if(next[next.length-1]?.partial) next[next.length-1]={...next[next.length-1],partial:false};
          return next;
        });
        const t=setTimeout(()=>{setMsgIdx(i=>i+1);setCharIdx(0);setPhase("idle");},PAUSE_AFTER);
        return ()=>clearTimeout(t);
      }
    }
    if(phase==="card-in"){
      setBubbles(prev=>[...prev,{id:nextId.current++,from:"ai",type:msg.type}]);
      const t=setTimeout(()=>{setMsgIdx(i=>i+1);setCharIdx(0);setPhase("idle");},PAUSE_AFTER+300);
      return ()=>clearTimeout(t);
    }
  },[phase,charIdx,msgIdx]);

  const isTyping=phase==="typing-user";
  const isSending=phase==="sending";
  const Av=()=>(
    <div style={{width:"26px",height:"26px",borderRadius:"50%",background:sc.avBg,color:"white",fontSize:"0.68rem",fontWeight:800,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,alignSelf:"flex-end"}}>{sc.avTxt}</div>
  );

  return (
    <div style={{borderRadius:"1.5rem",overflow:"hidden",border:"1px solid var(--border2)",background:"var(--surface)",boxShadow:"0 20px 60px #6366f115"}}>
      <div style={{padding:"0.75rem 1rem",background:"var(--surface)",borderBottom:"1px solid var(--border)",display:"flex",alignItems:"center",gap:"0.55rem"}}>
        <div style={{width:"32px",height:"32px",borderRadius:"50%",background:sc.avBg,color:"white",fontWeight:800,fontSize:"0.82rem",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>{sc.avTxt}</div>
        <div style={{flex:1}}>
          <div style={{fontSize:"0.8rem",fontWeight:700,color:"var(--text)",lineHeight:1.1}}>{sc.business}</div>
          <div style={{fontSize:"0.6rem",color:"#10b981",fontWeight:600,display:"flex",alignItems:"center",gap:"3px"}}>
            <span style={{width:"5px",height:"5px",borderRadius:"50%",background:"#10b981",display:"inline-block"}}/>
            онлайн · AI ажиллаж байна
          </div>
        </div>
        <div style={{display:"flex",gap:"3px"}}>{[0,1,2].map(i=><div key={i} style={{width:"3.5px",height:"3.5px",borderRadius:"50%",background:"var(--text-light)"}}/>)}</div>
      </div>

      <div ref={containerRef} onScroll={()=>{const el=containerRef.current;if(el) scrolledUp.current=el.scrollHeight-el.scrollTop-el.clientHeight>30;}}
        style={{height:"320px",overflowY:"auto",padding:"0.875rem",display:"flex",flexDirection:"column",gap:"0.5rem",background:"#f7f6f4",scrollbarWidth:"thin",scrollbarColor:"var(--border2) transparent"}}>
        {bubbles.map(b=>{
          if(b.type==="thinking") return(
            <div key={b.id} style={{display:"flex",alignItems:"flex-end",gap:"5px"}}>
              <Av/>
              <div style={{padding:"0.45rem 0.7rem",borderRadius:"1rem 1rem 1rem 0.2rem",background:"white",border:"1px solid #ede9fe",display:"flex",gap:"4px",alignItems:"center"}}>
                {[0,1,2].map(d=><span key={d} style={{width:"5px",height:"5px",borderRadius:"50%",background:"#a78bfa",display:"inline-block",animation:`tdot 1.2s ease-in-out ${d*0.18}s infinite`}}/>)}
              </div>
            </div>
          );
          if(b.from==="ai"&&b.type==="text") return(
            <div key={b.id} style={{display:"flex",alignItems:"flex-end",gap:"5px",maxWidth:"82%"}}>
              <Av/>
              <div style={{padding:"0.5rem 0.75rem",borderRadius:"1rem 1rem 1rem 0.2rem",background:"white",border:"1px solid #ede9fe",fontSize:"0.79rem",color:"#374151",lineHeight:1.55,boxShadow:"0 1px 4px #0000000a"}}>
                {b.text}
                {b.partial&&<span style={{display:"inline-block",width:"1.5px",height:"12px",background:"#8b5cf6",marginLeft:"1px",verticalAlign:"middle",animation:"blink .65s step-end infinite"}}/>}
              </div>
            </div>
          );
          if(b.from==="user"&&b.type==="text") return(
            <div key={b.id} style={{display:"flex",justifyContent:"flex-end"}}>
              <div style={{maxWidth:"76%",padding:"0.5rem 0.75rem",borderRadius:"1rem 1rem 0.2rem 1rem",background:"linear-gradient(135deg,#6366f1,#8b5cf6)",fontSize:"0.79rem",color:"white",lineHeight:1.55,boxShadow:"0 2px 12px #6366f128"}}>{b.text}</div>
            </div>
          );
          if(b.type==="card") return(
            <div key={b.id} style={{display:"flex",alignItems:"flex-end",gap:"5px"}}>
              <Av/>
              <div style={{borderRadius:"14px",overflow:"hidden",background:"white",border:"1px solid #ede9fe",width:"185px",boxShadow:"0 2px 10px #6366f110"}}>
                <div style={{background:"linear-gradient(135deg,#f5f3ff,#ede9fe)",height:"70px",display:"flex",alignItems:"center",justifyContent:"center"}}>
                  <span style={{fontSize:"2rem"}}>{sc.card.emoji}</span>
                </div>
                <div style={{padding:"0.5rem 0.65rem"}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.2rem"}}>
                    <div style={{fontSize:"0.77rem",fontWeight:700,color:"#1f2937"}}>{sc.card.title}</div>
                    <div style={{fontSize:"0.55rem",fontWeight:700,color:sc.card.tagColor,background:sc.card.tagColor+"18",border:`1px solid ${sc.card.tagColor}35`,borderRadius:"100px",padding:"0.1rem 0.35rem",whiteSpace:"nowrap"}}>{sc.card.tag}</div>
                  </div>
                  <div style={{fontSize:"0.75rem",fontWeight:700,color:"#6366f1",marginBottom:"0.45rem"}}>{sc.card.price}</div>
                  <div style={{display:"flex",flexDirection:"column",gap:"0.28rem"}}>
                    <button style={{borderRadius:"6px",border:"1.5px solid #c4b5fd",background:"transparent",color:"#6366f1",fontSize:"0.68rem",padding:"0.25rem",fontWeight:600,cursor:"default"}}>Дэлгэрэнгүй</button>
                    <button style={{borderRadius:"6px",border:"none",background:"linear-gradient(135deg,#6366f1,#8b5cf6)",color:"white",fontSize:"0.68rem",padding:"0.27rem",fontWeight:600,cursor:"default"}}>📅 Захиалах</button>
                  </div>
                </div>
              </div>
            </div>
          );
          if(b.type==="qpay") return(
            <div key={b.id} style={{display:"flex",alignItems:"flex-end",gap:"5px"}}>
              <Av/>
              <div style={{borderRadius:"14px",overflow:"hidden",background:"white",border:"1px solid #bfdbfe",width:"155px"}}>
                <div style={{background:"linear-gradient(135deg,#1d4ed8,#2563eb)",padding:"0.4rem 0.65rem",display:"flex",alignItems:"center",gap:"0.35rem"}}>
                  <div style={{width:"16px",height:"16px",borderRadius:"3px",background:"white",display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <div style={{width:"10px",height:"10px",background:"#1d4ed8",borderRadius:"2px"}}/>
                  </div>
                  <span style={{fontSize:"0.7rem",color:"white",fontWeight:800,letterSpacing:"0.04em"}}>QPay</span>
                </div>
                <div style={{padding:"0.6rem 0.65rem"}}>
                  <div style={{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:"1.5px",marginBottom:"0.45rem"}}>
                    {QR.map((on,i)=><div key={i} style={{aspectRatio:"1",borderRadius:"1px",background:on?"#1e3a5f":"transparent"}}/>)}
                  </div>
                  <div style={{textAlign:"center"}}>
                    <div style={{fontSize:"0.92rem",fontWeight:800,color:"#1d4ed8"}}>{sc.qpay}</div>
                    <div style={{fontSize:"0.6rem",color:"#6b7280",marginTop:"1px"}}>{sc.business}</div>
                  </div>
                </div>
              </div>
            </div>
          );
          return null;
        })}
      </div>

      <div style={{padding:"0.6rem 0.875rem",borderTop:"1px solid var(--border)",display:"flex",alignItems:"center",gap:"0.45rem",background:"var(--surface)"}}>
        <div style={{display:"flex",gap:"0.45rem",flexShrink:0}}>{["🎤","🖼️"].map(ico=><div key={ico} style={{fontSize:"0.85rem",opacity:0.4}}>{ico}</div>)}</div>
        <div style={{flex:1,padding:"0.4rem 0.875rem",borderRadius:"100px",background:isTyping?"white":"#f0ede9",border:isTyping?"1.5px solid #a78bfa":"1px solid #e5e2dd",fontSize:"0.76rem",color:inputText?"#374151":"#b0aaa4",transition:"all 0.2s",minHeight:"32px",display:"flex",alignItems:"center"}}>
          {inputText||"Aa"}
          {isTyping&&<span style={{display:"inline-block",width:"1.5px",height:"12px",background:"#8b5cf6",marginLeft:"1px",verticalAlign:"middle",animation:"blink .65s step-end infinite"}}/>}
        </div>
        <div style={{width:"30px",height:"30px",borderRadius:"50%",flexShrink:0,background:"linear-gradient(135deg,#6366f1,#8b5cf6)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 2px 8px #6366f128",transform:isSending?"scale(0.88)":"scale(1)",transition:"transform 0.15s"}}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
      </div>
    </div>
  );
}

function StatsPanel({appts,revenue,flash}:{appts:Appt[];revenue:number;flash:string}){
  return(
    <div style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
      <div style={{borderRadius:"1.25rem",padding:"1.25rem",background:"var(--surface)",border:"1px solid var(--border2)",boxShadow:"0 4px 20px #00000006"}}>
        <div style={{fontSize:"0.62rem",color:"var(--text-light)",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:"0.5rem"}}>Өнөөдрийн орлого</div>
        <div style={{position:"relative",marginBottom:"0.3rem"}}>
          <div style={{fontSize:"1.55rem",fontWeight:800,color:"var(--text)",letterSpacing:"-0.02em",lineHeight:1}}>
            {revenue.toLocaleString()}₮
          </div>
          {flash&&(
            <div style={{position:"absolute",top:"-2px",right:"0",fontSize:"0.7rem",fontWeight:700,color:"#16a34a",background:"#dcfce7",border:"1px solid #bbf7d0",borderRadius:"100px",padding:"0.15rem 0.5rem",animation:"fadeUp 0.35s ease"}}>
              ↑ {flash}
            </div>
          )}
        </div>
        <div style={{fontSize:"0.67rem",color:"var(--text-light)",marginBottom:"0.75rem"}}>AI автоматаар захиалга авсан</div>
        <div style={{height:"3px",borderRadius:"100px",background:"var(--border)",overflow:"hidden"}}>
          <div style={{height:"100%",width:"72%",borderRadius:"100px",background:"linear-gradient(90deg,#6366f1,#8b5cf6)"}}/>
        </div>
        <div style={{fontSize:"0.6rem",color:"var(--text-light)",marginTop:"0.3rem"}}>Сарын зорилтын 72%</div>
      </div>

      <div style={{borderRadius:"1.25rem",padding:"1.25rem",background:"var(--surface)",border:"1px solid var(--border2)",flex:1}}>
        <div style={{fontSize:"0.62rem",color:"var(--text-light)",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:"0.75rem"}}>Шинэ захиалгууд</div>
        <div style={{display:"flex",flexDirection:"column",gap:"0.45rem"}}>
          {appts.map((a,i)=>(
            <div key={i} style={{display:"flex",alignItems:"center",gap:"0.55rem",padding:"0.45rem 0.6rem",borderRadius:"0.65rem",background:a.done?"var(--surface2)":"#f0fdf4",border:a.done?"1px solid var(--border)":"1px solid #bbf7d0",animation:!a.done?"slideIn 0.4s ease":"none"}}>
              <div style={{fontSize:"0.72rem"}}>{a.done?"✅":"🆕"}</div>
              <div style={{flex:1,minWidth:0}}>
                <div style={{fontSize:"0.74rem",fontWeight:600,color:"var(--text)",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}}>{a.name}</div>
                <div style={{fontSize:"0.63rem",color:"var(--text-light)"}}>{a.detail}</div>
              </div>
              <div style={{fontSize:"0.63rem",fontWeight:600,color:a.done?"var(--text-light)":"#16a34a",whiteSpace:"nowrap"}}>{a.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function AIChatDemo(){
  const [activeIdx,setActiveIdx]=useState(0);
  const sc=SC[activeIdx];
  const [appts,setAppts]=useState<Appt[]>(()=>[...SC[0].baseAppts]);
  const [revenue,setRevenue]=useState(SC[0].baseRev);
  const [flash,setFlash]=useState("");
  const flashTimer=useRef<ReturnType<typeof setTimeout>|null>(null);

  useEffect(()=>{
    setAppts([...sc.baseAppts]);
    setRevenue(sc.baseRev);
    setFlash("");
  },[activeIdx]);

  const handlePaid=useCallback(()=>{
    const s=SC[activeIdx];
    setAppts(prev=>[...prev,{...s.newAppt,done:false}]);
    const start=s.baseRev;
    const end=s.baseRev+s.addRev;
    const dur=1800;const t0=performance.now();
    const step=(now:number)=>{
      const p=Math.min((now-t0)/dur,1);
      const e=1-Math.pow(1-p,3);
      setRevenue(Math.round(start+(end-start)*e));
      if(p<1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
    setFlash(`+${s.addRev.toLocaleString()}₮`);
    if(flashTimer.current) clearTimeout(flashTimer.current);
    flashTimer.current=setTimeout(()=>setFlash(""),3200);
  },[activeIdx]);

  return(
    <section data-animate style={{padding:"7rem 0"}}>
      <div style={{maxWidth:"78rem",margin:"0 auto",padding:"0 1.25rem"}}>
        <div style={{textAlign:"center",marginBottom:"2.5rem"}}>
          <div className="section-tag" style={{display:"inline-flex",marginBottom:"1rem"}}>Live Demo</div>
          <h2 style={{fontSize:"clamp(1.7rem,3.5vw,2.4rem)",fontWeight:800,letterSpacing:"-0.02em",lineHeight:1.15}}>
            Ийм байдлаар ажиллана —{" "}
            <span className="gradient-text">24/7, автоматаар</span>
          </h2>
        </div>

        {/* Tabs */}
        <div style={{display:"flex",justifyContent:"center",gap:"0.5rem",marginBottom:"2rem",flexWrap:"wrap"}}>
          {SC.map((s,i)=>(
            <button key={s.id} onClick={()=>setActiveIdx(i)} style={{display:"flex",alignItems:"center",gap:"0.4rem",padding:"0.5rem 1rem",borderRadius:"100px",fontSize:"0.8rem",fontWeight:600,cursor:"pointer",transition:"all 0.2s",
              background:i===activeIdx?"linear-gradient(135deg,#6366f1,#8b5cf6)":"var(--surface2)",
              color:i===activeIdx?"white":"var(--text-mid)",
              border:i===activeIdx?"none":"1px solid var(--border2)",
              boxShadow:i===activeIdx?"0 4px 14px #6366f130":"none",
            }}>
              <span>{s.icon}</span>{s.label}
            </button>
          ))}
        </div>

        {/* Grid: chat + stats */}
        <div style={{display:"grid",gridTemplateColumns:"1fr 0.6fr",gap:"1.5rem",alignItems:"start"}}>
          <ChatWindow key={activeIdx} sc={sc} onPaid={handlePaid}/>
          <StatsPanel appts={appts} revenue={revenue} flash={flash}/>
        </div>
      </div>

      <style>{`
        @keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
        @keyframes tdot{0%,60%,100%{transform:translateY(0);opacity:.35}30%{transform:translateY(-5px);opacity:1}}
        @keyframes fadeUp{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}
        @keyframes slideIn{from{opacity:0;transform:translateX(-8px)}to{opacity:1;transform:translateX(0)}}
      `}</style>
    </section>
  );
}
