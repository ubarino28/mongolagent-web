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
const AV_COLORS = ["#525252","#737373","#404040","#525252","#404040","#737373","#525252","#404040"];

const SC: S[] = [
  {
    id:"salon", icon:"💆", label:"Гоо сайхны салон",
    business:"Lumière Salon", avBg:"#262626", avTxt:"L",
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
    business:"Khan Restaurant", avBg:"#404040", avTxt:"K",
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
    business:"FitZone Club", avBg:"#525252", avTxt:"F",
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
    business:"Zaya Fashion", avBg:"#737373", avTxt:"Z",
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
    business:"PetCare Эмнэлэг", avBg:"#404040", avTxt:"P",
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
    <div style={{width:"27px",height:"27px",borderRadius:"50%",background:sc.avBg,color:"white",fontSize:"0.68rem",fontWeight:800,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,alignSelf:"flex-end",boxShadow:"0 2px 6px #00000018"}}>{sc.avTxt}</div>
  );

  return (
    <div style={{borderRadius:"1.25rem",overflow:"hidden",border:"1px solid var(--border)",background:"var(--surface)",boxShadow:"0 24px 64px rgba(0,0,0,0.07)"}}>
      {/* Header */}
      <div style={{padding:"0.75rem 1rem",background:"white",borderBottom:"1px solid var(--border)",display:"flex",alignItems:"center",gap:"0.6rem"}}>
        <div style={{position:"relative",flexShrink:0}}>
          <div style={{width:"34px",height:"34px",borderRadius:"50%",background:sc.avBg,color:"white",fontWeight:800,fontSize:"0.82rem",display:"flex",alignItems:"center",justifyContent:"center"}}>{sc.avTxt}</div>
          <div style={{position:"absolute",bottom:"1px",right:"1px",width:"9px",height:"9px",borderRadius:"50%",background:"var(--text-light)",border:"2px solid white"}}/>
        </div>
        <div style={{flex:1}}>
          <div style={{fontSize:"0.8rem",fontWeight:700,color:"var(--text)",lineHeight:1.1}}>{sc.business}</div>
          <div style={{fontSize:"0.6rem",color:"var(--text-light)",fontWeight:600,marginTop:"1px"}}>онлайн · AI ажиллаж байна</div>
        </div>
        <div style={{display:"flex",gap:"0.55rem",opacity:0.3}}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.5 3.18 2 2 0 012.5 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.5a16 16 0 006.59 6.59l1.87-1.87a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="2" y="7" width="13" height="10" rx="2"/><path d="M17 9l4-2v10l-4-2"/></svg>
        </div>
      </div>

      {/* Messages */}
      <div ref={containerRef}
        onScroll={()=>{const el=containerRef.current;if(el) scrolledUp.current=el.scrollHeight-el.scrollTop-el.clientHeight>30;}}
        style={{height:"330px",overflowY:"auto",padding:"1rem 0.875rem",display:"flex",flexDirection:"column",gap:"0.55rem",background:"var(--surface2)",scrollbarWidth:"thin",scrollbarColor:"var(--border2) transparent"}}>

        {/* Date chip */}
        <div style={{textAlign:"center",marginBottom:"0.25rem"}}>
          <span style={{fontSize:"0.6rem",color:"var(--text-light)",background:"var(--surface3)",borderRadius:"100px",padding:"0.15rem 0.7rem",fontWeight:500}}>Өнөөдөр</span>
        </div>

        {bubbles.map(b=>{
          if(b.type==="thinking") return(
            <div key={b.id} style={{display:"flex",alignItems:"flex-end",gap:"6px"}}>
              <Av/>
              <div style={{padding:"0.5rem 0.75rem",borderRadius:"0.3rem 1rem 1rem 1rem",background:"white",boxShadow:"0 1px 8px #00000010",display:"flex",gap:"4px",alignItems:"center"}}>
                {[0,1,2].map(d=><span key={d} style={{width:"5px",height:"5px",borderRadius:"50%",background:"var(--border2)",display:"inline-block",animation:`tdot 1.2s ease-in-out ${d*0.18}s infinite`}}/>)}
              </div>
            </div>
          );
          if(b.from==="ai"&&b.type==="text") return(
            <div key={b.id} style={{display:"flex",alignItems:"flex-end",gap:"6px",maxWidth:"82%"}}>
              <Av/>
              <div style={{padding:"0.5rem 0.8rem",borderRadius:"0.3rem 1rem 1rem 1rem",background:"white",boxShadow:"0 1px 8px #00000010",fontSize:"0.78rem",color:"#374151",lineHeight:1.58}}>
                {b.text}
                {b.partial&&<span style={{display:"inline-block",width:"1.5px",height:"11px",background:"var(--text-mid)",marginLeft:"1px",verticalAlign:"middle",animation:"blink .65s step-end infinite"}}/>}
              </div>
            </div>
          );
          if(b.from==="user"&&b.type==="text") return(
            <div key={b.id} style={{display:"flex",justifyContent:"flex-end",flexDirection:"column",alignItems:"flex-end",gap:"3px"}}>
              <div style={{maxWidth:"76%",padding:"0.5rem 0.8rem",borderRadius:"1rem 0.3rem 1rem 1rem",background:"var(--accent)",fontSize:"0.78rem",color:"white",lineHeight:1.58}}>{b.text}</div>
              <div style={{fontSize:"0.57rem",color:"var(--text-light)",fontWeight:700,paddingRight:"2px"}}>✓✓</div>
            </div>
          );
          if(b.type==="card") return(
            <div key={b.id} style={{display:"flex",alignItems:"flex-end",gap:"6px"}}>
              <Av/>
              <div style={{borderRadius:"14px",overflow:"hidden",background:"white",border:"1px solid var(--border)",width:"185px",boxShadow:"0 4px 16px rgba(0,0,0,0.05)"}}>
                <div style={{background:"var(--surface2)",height:"68px",display:"flex",alignItems:"center",justifyContent:"center"}}>
                  <span style={{fontSize:"2rem"}}>{sc.card.emoji}</span>
                </div>
                <div style={{padding:"0.5rem 0.65rem"}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.2rem"}}>
                    <div style={{fontSize:"0.76rem",fontWeight:700,color:"var(--text)"}}>{sc.card.title}</div>
                    <div style={{fontSize:"0.54rem",fontWeight:700,color:"var(--text-mid)",background:"var(--surface3)",border:"1px solid var(--border)",borderRadius:"100px",padding:"0.1rem 0.35rem",whiteSpace:"nowrap"}}>{sc.card.tag}</div>
                  </div>
                  <div style={{fontSize:"0.74rem",fontWeight:700,color:"var(--text)",marginBottom:"0.45rem"}}>{sc.card.price}</div>
                  <div style={{display:"flex",flexDirection:"column",gap:"0.28rem"}}>
                    <button style={{borderRadius:"6px",border:"1px solid var(--border2)",background:"transparent",color:"var(--text-mid)",fontSize:"0.67rem",padding:"0.25rem",fontWeight:600,cursor:"default"}}>Дэлгэрэнгүй</button>
                    <button style={{borderRadius:"6px",border:"none",background:"var(--accent)",color:"white",fontSize:"0.67rem",padding:"0.28rem",fontWeight:600,cursor:"default"}}>Захиалах</button>
                  </div>
                </div>
              </div>
            </div>
          );
          if(b.type==="qpay") return(
            <div key={b.id} style={{display:"flex",alignItems:"flex-end",gap:"6px"}}>
              <Av/>
              <div style={{borderRadius:"14px",overflow:"hidden",background:"white",border:"1px solid var(--border)",width:"155px",boxShadow:"0 4px 16px rgba(0,0,0,0.06)"}}>
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
                    <div style={{fontSize:"0.6rem",color:"#9ca3af",marginTop:"1px"}}>{sc.business}</div>
                  </div>
                </div>
              </div>
            </div>
          );
          return null;
        })}
      </div>

      {/* Input bar */}
      <div style={{padding:"0.65rem 0.875rem",borderTop:"1px solid var(--border)",display:"flex",alignItems:"center",gap:"0.45rem",background:"white"}}>
        <div style={{display:"flex",gap:"0.45rem",flexShrink:0,color:"var(--text-light)",opacity:0.5}}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/></svg>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
        </div>
        <div style={{flex:1,padding:"0.4rem 0.875rem",borderRadius:"100px",background:isTyping?"white":"var(--surface2)",border:isTyping?"1.5px solid var(--border2)":"1px solid var(--border)",fontSize:"0.75rem",color:inputText?"var(--text)":"var(--text-light)",transition:"all 0.2s",minHeight:"32px",display:"flex",alignItems:"center",overflow:"hidden",whiteSpace:"nowrap"}}>
          {inputText ? (inputText.length > 38 ? inputText.slice(-35) : inputText) : "Aa"}
          {isTyping&&<span style={{display:"inline-block",width:"1.5px",height:"11px",background:"var(--text-mid)",marginLeft:"1px",verticalAlign:"middle",animation:"blink .65s step-end infinite"}}/>}
        </div>
        <div style={{width:"30px",height:"30px",borderRadius:"50%",flexShrink:0,background:"var(--accent)",display:"flex",alignItems:"center",justifyContent:"center",transform:isSending?"scale(0.86)":"scale(1)",transition:"transform 0.15s",opacity:isSending?0.7:1}}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
      </div>
    </div>
  );
}

function StatsPanel({appts,revenue,flash}:{appts:Appt[];revenue:number;flash:string}){
  return(
    <div style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
      {/* Revenue card */}
      <div style={{borderRadius:"1.25rem",overflow:"hidden",background:"var(--surface)",border:"1px solid var(--border2)",boxShadow:"0 4px 20px #00000007"}}>
        <div style={{height:"2px",background:"var(--accent)"}}/>
        <div style={{padding:"1.2rem 1.25rem"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.6rem"}}>
            <div style={{fontSize:"0.6rem",color:"var(--text-light)",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em"}}>Өнөөдрийн орлого</div>
            <div style={{fontSize:"0.59rem",fontWeight:700,color:"var(--text-mid)",background:"var(--surface3)",border:"1px solid var(--border)",borderRadius:"100px",padding:"0.15rem 0.55rem",whiteSpace:"nowrap"}}>
              📅 {appts.length} захиалга
            </div>
          </div>
          <div style={{position:"relative",marginBottom:"0.3rem"}}>
            <div style={{fontSize:"1.55rem",fontWeight:800,color:"var(--text)",letterSpacing:"-0.02em",lineHeight:1}}>
              {revenue.toLocaleString()}₮
            </div>
            {flash&&(
              <div style={{position:"absolute",top:"-2px",right:"0",fontSize:"0.7rem",fontWeight:700,color:"var(--text-mid)",background:"var(--surface3)",border:"1px solid var(--border)",borderRadius:"100px",padding:"0.15rem 0.5rem",animation:"fadeUp 0.35s ease"}}>
                ↑ {flash}
              </div>
            )}
          </div>
          <div style={{fontSize:"0.65rem",color:"var(--text-light)",marginBottom:"0.8rem"}}>AI автоматаар захиалга авсан</div>
          <div style={{height:"3px",borderRadius:"100px",background:"var(--border)",overflow:"hidden"}}>
            <div style={{height:"100%",width:"72%",borderRadius:"100px",background:"var(--accent)"}}/>
          </div>
          <div style={{fontSize:"0.59rem",color:"var(--text-light)",marginTop:"0.3rem"}}>Сарын зорилтын 72%</div>
        </div>
      </div>

      {/* Appointments */}
      <div style={{borderRadius:"1.25rem",padding:"1.2rem 1.25rem",background:"var(--surface)",border:"1px solid var(--border2)",boxShadow:"0 4px 20px #00000007"}}>
        <div style={{fontSize:"0.6rem",color:"var(--text-light)",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:"0.75rem"}}>Шинэ захиалгууд</div>
        <div style={{display:"flex",flexDirection:"column",gap:"0.4rem"}}>
          {appts.map((a,i)=>{
            const color=AV_COLORS[i%AV_COLORS.length];
            return(
              <div key={i} style={{display:"flex",alignItems:"center",gap:"0.5rem",padding:"0.45rem 0.55rem",borderRadius:"0.75rem",background:"var(--surface2)",border:"1px solid var(--border)",animation:!a.done?"slideIn 0.4s ease":"none"}}>
                <div style={{width:"28px",height:"28px",borderRadius:"50%",background:"var(--surface3)",color:"var(--text-mid)",fontSize:"0.68rem",fontWeight:800,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                  {a.name.slice(0,1)}
                </div>
                <div style={{flex:1,minWidth:0}}>
                  <div style={{fontSize:"0.73rem",fontWeight:600,color:"var(--text)",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}}>{a.name}</div>
                  <div style={{fontSize:"0.62rem",color:"var(--text-light)",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}}>{a.detail}</div>
                </div>
                <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"3px",flexShrink:0}}>
                  <div style={{fontSize:"0.62rem",fontWeight:600,color:"var(--text-light)"}}>{a.time}</div>
                  {!a.done&&<div style={{width:"6px",height:"6px",borderRadius:"50%",background:"var(--accent)"}}/>}
                </div>
              </div>
            );
          })}
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
    // replace instead of append — prevents duplicate entries on loop restart
    setAppts([...s.baseAppts,{...s.newAppt,done:false}]);
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
        <div className="chat-demo-tabs" style={{display:"flex",justifyContent:"center",gap:"0.4rem",marginBottom:"2rem",flexWrap:"wrap"}}>
          {SC.map((s,i)=>(
            <button key={s.id} onClick={()=>setActiveIdx(i)} style={{
              display:"flex",alignItems:"center",gap:"0.35rem",
              padding:"0.42rem 0.9rem",borderRadius:"100px",
              fontSize:"0.76rem",fontWeight:600,cursor:"pointer",transition:"all 0.2s",
              background:i===activeIdx?"var(--accent)":"white",
              color:i===activeIdx?"white":"var(--text-mid)",
              border:i===activeIdx?"none":"1px solid var(--border2)",
              boxShadow:i===activeIdx?"0 4px 14px rgba(0,0,0,0.18)":"0 1px 3px rgba(0,0,0,0.06)",
            }}>
              <span style={{fontSize:"0.9rem"}}>{s.icon}</span>{s.label}
            </button>
          ))}
        </div>

        {/* Grid: chat + stats */}
        <div className="chat-demo-grid" style={{display:"grid",gridTemplateColumns:"1fr 0.58fr",gap:"1.5rem",alignItems:"start"}}>
          <ChatWindow key={activeIdx} sc={sc} onPaid={handlePaid}/>
          <div className="chat-stats-panel">
            <StatsPanel appts={appts} revenue={revenue} flash={flash}/>
          </div>
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
