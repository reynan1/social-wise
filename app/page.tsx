import Link from "next/link";
import {
  GraduationCap,
  Lightbulb,
  Users,
  ArrowRight,
  UserRound,
  Baby,
} from "lucide-react";
import { TopicCards } from "@/components/site";
import { HeroCheck, AudienceGuide } from "@/components/blue-home";
import { MemoryMatch } from "@/components/memory-match";
export default function Home() {
  return (
    <main id="main">
      <section className="blue-hero">
        <div className="blue-hero-inner">
          <div className="blue-hero-copy">
            <span className="eyebrow">
              BRIGHTER PEOPLE. A SAFER DIGITAL TOMORROW.
            </span>
            <h1>
              Be smart. Be kind.
              <br />
              Be <span>safe online.</span>
            </h1>
            <p>
              Helping kids, teens, and parents build better
              <br className="desktop-break" /> digital habits—together.
            </p>
            <div className="hero-actions">
              <Link className="button primary" href="/learn/">
                Explore learning <ArrowRight size={19} />
              </Link>
              <MemoryMatch />
            </div>
{/*             <div className="audience-shortcuts">
              <a href="#teens">
                <UserRound />
                For teens
              </a>
              <a href="#parents">
                <Users />
                For parents
              </a>
            </div> */}
          </div>
          <div className="hero-art">
            <img
              src="/family-hero.png"
              alt="A parent, two teenagers, and a child learning together around a tablet"
              width="1536"
              height="1024"
              fetchPriority="high"
            />
           <HeroCheck /> 
          </div>
        </div>
      </section>
      <div className="blue-values">
        <span>
          <GraduationCap />
          Learn with confidence
        </span>
        <span>
          <Lightbulb />
          Think before you share
        </span>
        <span>
          <Users />
          Look out for each other
        </span>
      </div>
    </main>
  );
}
