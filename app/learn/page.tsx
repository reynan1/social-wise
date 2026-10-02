import type { Metadata } from 'next';
import { TopicCards } from '@/components/site';
export const metadata: Metadata = { title: 'Social Media Learning' };
export default function Learn(){
  return <main id="main">
          <section className="page-intro">
            <span className="eyebrow">THE LEARNING HUB</span>
            <h1>A smarter scroll<br/>starts <em>right here.</em></h1>
            <p>Explore five practical topics for your life online.<br/>Each one includes simple actions and a quick knowledge check.</p>
            <span className="intro-tag">5 topics · Your pace · Real-life skills</span>
          </section>
          <section className="section hub-topics">
            <TopicCards/>
          </section><section className="learning-note">
            <strong>Choose your own starting point.</strong>
            <p>There’s no perfect order. Start with a topic that matters to you today, then come back for the others.</p>
          </section>
        </main>}
