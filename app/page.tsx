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
              <a className="button outline" href="#hero-check">
                Try a scenario
              </a>
            </div>
            <div className="audience-shortcuts">
              <a href="#teens">
                <UserRound />
                For teens
              </a>
              <a href="#kids">
                <Baby />
                For kids
              </a>
              <a href="#parents">
                <Users />
                For parents
              </a>
            </div>
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
      <section className="section learning-section">
        <div className="center-heading">
          <span className="eyebrow">EXPLORE. LEARN. MAKE A DIFFERENCE.</span>
          <h2>Small lessons. Lifelong digital skills.</h2>
          <p>Explore five ways to make your online world safer.</p>
        </div>
        <TopicCards />
      </section>
      <section className="family-section">
        <div className="section">
          <div className="center-heading">
            <span className="eyebrow">DIFFERENT JOURNEYS. A SHARED GOAL.</span>
            <h2>A safer internet is a team effort.</h2>
          </div>
          <AudienceGuide />
          <div className="blue-banner">
            <div>
              <h2>Good digital habits start here.</h2>
              <p>
                Practical lessons for a safer, kinder, and brighter online
                world.
              </p>
            </div>
            <Link href="/learn/" className="button">
              Start learning <ArrowRight size={19} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
