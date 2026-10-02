"use client";
import Link from "next/link";
import { useState } from "react";
import {
  CircleHelp,
  CheckCircle2,
  ArrowRight,
  UserRound,
  Baby,
  Users,
} from "lucide-react";
const checks = [
  {
    prompt: "A friend shares a suspicious link.",
    choices: ["Check before clicking", "Share it right away"],
    correct: 0,
    feedback:
      "Pause and verify the link with your friend through a trusted channel. Never enter your password on an unfamiliar page.",
  },
  {
    prompt: "An embarrassing photo appears in a group chat.",
    choices: ["Forward it to friends", "Check on the person privately"],
    correct: 1,
    feedback:
      "Do not reshare the photo. Offer support privately and ask a trusted adult for help if the harm continues.",
  },
  {
    prompt: "A surprising headline is going viral.",
    choices: ["Check the original source", "Trust the number of likes"],
    correct: 0,
    feedback:
      "Look for the original source, date, and independent evidence. Popularity does not make a claim true.",
  },
];
export function HeroCheck() {
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState<number | null>(null);
  const item = checks[index];
  return (
    <div className="hero-check" id="hero-check" tabIndex={-1}>
      <div className="check-title">
        <CircleHelp />
        <h2>What would you do?</h2>
      </div>
      <p>{item.prompt}</p>
      <div className="mini-choices">
        {item.choices.map((choice, i) => (
          <button
            key={choice}
            aria-pressed={answer === i}
            onClick={() => setAnswer(i)}
            className={
              answer === i
                ? i === item.correct
                  ? "picked right"
                  : "picked wrong"
                : ""
            }
          >
            <CheckCircle2 size={19} />
            {choice}
          </button>
        ))}
      </div>
      <div aria-live="polite">
        {answer !== null && (
          <div className="check-feedback">
            <strong>
              {answer === item.correct
                ? "Good thinking!"
                : "Pause and think again."}
            </strong>
            <p>{item.feedback}</p>
          </div>
        )}
      </div>
      <button
        className="next-check"
        onClick={() => {
          setIndex((index + 1) % checks.length);
          setAnswer(null);
        }}
      >
        Try another scenario <span>{index + 1}/3</span>
      </button>
    </div>
  );
}

const audiences = [
  {
    id: "teens",
    title: "Teens",
    icon: UserRound,
    text: "Make confident choices online.",
    heading: "Your feed. Your choices.",
    tips: [
      "Notice how scrolling makes you feel. Take a break when you need one.",
      "Check sources before sharing a surprising claim.",
      "Respect boundaries and stand up for kindness.",
    ],
    link: "social-media-awareness",
  },
  {
    id: "kids",
    title: "Kids",
    icon: Baby,
    text: "Learn safe habits, one step at a time.",
    heading: "Small steps to stay safe.",
    tips: [
      "Ask a trusted adult before opening an unfamiliar link.",
      "Keep your name, school, address, and passwords private.",
      "If something online makes you uncomfortable, stop and tell a trusted adult.",
    ],
    link: "online-safety-privacy",
  },
  {
    id: "parents",
    title: "Parents",
    icon: Users,
    text: "Start meaningful digital conversations.",
    heading: "Build trust, one conversation at a time.",
    tips: [
      "Ask what your child enjoys online and listen without judgment.",
      "Review privacy settings together and agree on healthy boundaries.",
      "Let children know they can ask for help without being blamed.",
    ],
    link: "cyberbullying-awareness",
  },
];

export function AudienceGuide() {
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <>
      <div className="audience-grid">
        {audiences.map(({ id, title, icon: Icon, text }) => (
          <button
            id={id}
            key={id}
            className={"audience-card " + id}
            aria-expanded={selected === id}
            aria-controls="audience-details"
            onClick={() => setSelected(selected === id ? null : id)}
          >
            <span className="audience-portrait">
              <img src="/family-hero.png" alt="" />
              <Icon size={27} />
            </span>
            <span className="audience-copy">
              <strong>{title}</strong>
              <span>{text}</span>
            </span>
            <span className="audience-arrow">
              <ArrowRight size={19} />
            </span>
          </button>
        ))}
      </div>
      <div id="audience-details" aria-live="polite">
        {audiences
          .filter((a) => a.id === selected)
          .map((a) => (
            <div className="audience-detail" key={a.id}>
              <h3>{a.heading}</h3>
              <ul>
                {a.tips.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <Link href={"/learn/" + a.link + "/"}>
                Explore a lesson together <ArrowRight size={17} />
              </Link>
            </div>
          ))}
      </div>
    </>
  );
}
