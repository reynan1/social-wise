import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, ScanEye, HeartHandshake, Sparkles } from 'lucide-react';
export const metadata:Metadata={title:'About the Project'};
export default function About(){
  return <main id="main">
            <section className="about-hero">
              <span className="eyebrow">THE WHY BEHIND SOCIALWISE</span>
              <h1>Connected to the world.<br/><em>Grounded in what matters.</em></h1>
              <p>Building Social Media Awareness Among Teenagers<br/>for Safe and Responsible Digital Participation.</p>
              <div className="about-statement">
                <span>OUR PURPOSE</span>
                <h2>Help teenagers feel more confident, thoughtful, and safe in the spaces they use every day.</h2>
              </div>
            </section>
            <section className="section about-body">
              <div>
                <span className="eyebrow">A SPACE TO LEARN</span>
                <h2>Less pressure.<br/>More perspective.</h2>
              </div>
              <div>
                <p>Social media is a place to connect, create, learn, and be heard. It also asks us to make decisions about trust, privacy, and how we treat one another—often in just a few seconds.</p>
                <p>SocialWise is an educational project that makes those decisions easier to understand. 
                  Through short lessons and everyday scenarios, teenagers can practice the skills that help them participate responsibly.</p>
                <p>There’s no judgment here. Just practical knowledge, room to reflect, and small steps toward better digital habits.</p>
              </div>
            </section>
            <section className="section outcomes">
              <span className="eyebrow">WHAT WE’RE WORKING TOWARD</span>
              <div className="outcome-grid">{
                [{
                  icon:ShieldCheck,
                  title:'Safer participation',
                  text:'Protect personal information and recognize situations that deserve a pause.'
                 },{
                  icon:ScanEye,
                  title:'Independent thinking',
                  text:'Question online claims, look for evidence, and notice how feeds shape what we see.'
                 },{
                  icon:HeartHandshake,
                  title:'Kinder communities',
                  text:'Respect boundaries, support others, and respond thoughtfully to online harm.'
                 }].map((
                  {icon:Icon,title,text}
                  )=><div key={title}>
                      <Icon size={32}/>
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </div>
                  )}
              </div>
              </section>
              <section className="mission-banner">
                <div>
                  <span className="eyebrow">START WITH ONE SMALL STEP</span>
                  <h2>Your next scroll can be different.</h2>
                  <p>Choose a topic and bring one new habit into your digital life.</p>
                </div>
                <Link className="button dark" href="/learn/">Start learning <Sparkles size={18}/></Link>
              </section>
      </main>}
