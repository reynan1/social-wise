"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Sparkles,
  Menu,
  X,
  Compass,
  Eye,
  ShieldCheck,
  Search,
  HeartHandshake,
  Check,
  MessageCircle,
  LockKeyhole,
  Bookmark,
  MoreHorizontal,
  UsersRound,
  BookOpenCheck,
  PenLine,
  Sprout,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";
import {
  topics,
  type LearningCard,
  type LearningCheck,
  type Subtopic,
} from "./topics";
export function TopicIcon({
  name,
  size = 25,
}: {
  name: string;
  size?: number;
}) {
  const Icon =
    (
      {
        compass: Compass,
        eye: Eye,
        shield: ShieldCheck,
        search: Search,
        heart: HeartHandshake,
        community: UsersRound,
        literacy: BookOpenCheck,
        creation: PenLine,
        growth: Sprout,
        factcheck: BadgeCheck,
      } as Record<string, typeof Compass>
    )[name] || Compass;
  return <Icon size={size} strokeWidth={1.7} />;
}
export function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [quizMenuOpen, setQuizMenuOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="nav-wrap">
        <Link href="/" className="brand" aria-label="SocialWise home">
          <span className="brand-icon">
            <Sparkles size={23} />
          </span>
          Social<span>Wise</span>
        </Link>
        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav
          id="navigation"
          className={open ? "navigation open" : "navigation"}
          aria-label="Main navigation"
        >
          <Link
            onClick={() => setOpen(false)}
            className={path === "/" ? "active" : ""}
            href="/"
          >
            Home
          </Link>
          <Link
            onClick={() => setOpen(false)}
            className={path === "/about/" || path === "/about" ? "active" : ""}
            href="/about/"
          >
            About
          </Link>
          <Link
            onClick={() => setOpen(false)}
            className={path.startsWith("/learn") ? "active" : ""}
            href="/learn/"
          >
            Social Media Learning
          </Link>
        </nav>
        <div className="quiz-menu">
          <button
            className="button nav-cta"
            type="button"
            aria-expanded={quizMenuOpen}
            aria-haspopup="menu"
            onClick={() => setQuizMenuOpen(!quizMenuOpen)}
          >
            Start Quiz <Sparkles size={16} />
          </button>
          {quizMenuOpen && (
            <div className="quiz-menu-panel" role="menu">
              <span className="quiz-menu-label">Choose your quiz</span>
              <Link href="/quiz/teens/" role="menuitem" onClick={() => setQuizMenuOpen(false)}>
                <strong>For Teens</strong>
                <small>Social media awareness & learning · 15 questions</small>
              </Link>
              <Link href="/quiz/parents/" role="menuitem" onClick={() => setQuizMenuOpen(false)}>
                <strong>For Parents</strong>
                <small>Practical social media parenting · 15 questions</small>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
export function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <Link href="/" className="brand">
          <span className="brand-icon">
            <Sparkles size={21} />
          </span>
          Social<span>Wise</span>
        </Link>
        <p>A better digital world starts with us.</p>
        <div>
          <Link href="/about/">About</Link>
          <Link href="/learn/">Explore learning</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>SocialWise · Learn. Think. Participate.</span>
        <span>Made for your life online.</span>
      </div>
    </footer>
  );
}
const scenarios = [
  {
    tag: "THE GROUP CHAT",
    name: "Class crew",
    handle: "A moment to make a difference",
    message:
      "Someone just dropped an embarrassing photo of a classmate into your group chat. Everyone’s reacting.",
    question: "What’s your next move?",
    options: [
      "React and pass it on",
      "Check in with them privately",
      "Ignore it and keep scrolling",
    ],
    correct: 1,
    feedback:
      "A little support goes a long way. Don’t reshare the photo. Check in privately, and involve a trusted adult if the harm continues.",
    lesson: "cyberbullying-awareness",
  },
  {
    tag: "THE VIRAL POST",
    name: "On your feed",
    handle: "Popular doesn’t always mean true",
    message:
      "“School is cancelled tomorrow!” A screenshot with your school logo is getting shared everywhere.",
    question: "Before you share it…",
    options: [
      "Check the official school channel",
      "Trust the logo",
      "Ask how many people shared it",
    ],
    correct: 0,
    feedback:
      "Good instinct: go to the source. Check an official school announcement before sharing. A logo and lots of reposts do not verify a claim.",
    lesson: "facts-vs-fake-news",
  },
  {
    tag: "THE UNEXPECTED DM",
    name: "A new message",
    handle: "Your account. Your boundaries.",
    message:
      "“You’ve won a prize! Send your password and login code now to claim it.” The profile looks official.",
    question: "What would you do?",
    options: [
      "Send the code quickly",
      "Ask a friend to send theirs",
      "Keep it private and report",
    ],
    correct: 2,
    feedback:
      "Keep your login details to yourself. Report the message and use the platform’s official help channel if you need to check your account.",
    lesson: "online-safety-privacy",
  },
];
export function Scenario() {
  const [current, setCurrent] = useState(0);
  const [answer, setAnswer] = useState<number | null>(null);
  const s = scenarios[current];
  return (
    <div className="scenario-stage">
      <div className="orbit-label">
        <ShieldCheck size={16} /> Your space. Your choices.
      </div>
      <div className="scenario-card">
        <div className="scenario-top">
          <span>
            <span className="live-dot" /> REAL-LIFE CHECK
          </span>
          <span>0{current + 1} / 03</span>
        </div>
        <div className="post-head">
          <div className="avatar">
            <MessageCircle size={23} />
          </div>
          <div>
            <strong>{s.name}</strong>
            <small>{s.handle}</small>
          </div>
          <MoreHorizontal size={20} />
        </div>
        <div className="post-message">
          <span className="mini-label">{s.tag}</span>
          <p>{s.message}</p>
        </div>
        <h3>{s.question}</h3>
        <div className="scenario-options">
          {s.options.map((o, i) => (
            <button
              key={o}
              disabled={answer !== null}
              className={
                answer === i
                  ? i === s.correct
                    ? "choice correct"
                    : "choice incorrect"
                  : "choice"
              }
              onClick={() => setAnswer(i)}
            >
              <span className="choice-letter">
                {String.fromCharCode(65 + i)}
              </span>
              {o}
              {answer === i && i === s.correct && <Check size={18} />}
            </button>
          ))}
        </div>
        <div aria-live="polite">
          {answer !== null ? (
            <div className="scenario-feedback">
              <strong>
                {answer === s.correct
                  ? "That’s a thoughtful choice."
                  : "Let’s think it through."}
              </strong>
              <p>{s.feedback}</p>
              <Link href={"/learn/" + s.lesson + "/"}>Explore this topic</Link>
            </div>
          ) : (
            <p className="scenario-hint">
              <LockKeyhole size={13} /> Just practice. Your choice stays here.
            </p>
          )}
        </div>
        <div className="scenario-bottom">
          <div className="scenario-dots">
            {scenarios.map((_, i) => (
              <button
                key={i}
                aria-label={"Try scenario " + (i + 1)}
                aria-current={current === i ? "step" : undefined}
                className={current === i ? "selected" : ""}
                onClick={() => {
                  setCurrent(i);
                  setAnswer(null);
                }}
              />
            ))}
          </div>
          <button
            className="text-button"
            onClick={() => {
              setCurrent((current + 1) % scenarios.length);
              setAnswer(null);
            }}
          >
            {answer === null ? "Try another" : "Next scenario"}
          </button>
        </div>
      </div>
      <div className="little-note">
        <Sparkles size={18} />
        <span>
          Small choices.
          <br />
          <strong>Better digital habits.</strong>
        </span>
      </div>
    </div>
  );
}
export function TopicCards() {
  return (
    <div className="flex justify-center items-center gap-15">
      {topics.map((topic, i) => (
        <Link
          className={"topic-card " + topic.color}
          key={topic.slug}
          href={"/learn/" + topic.slug + "/"}
        >
          <div className="topic-card-top">
            <span className="topic-icon">
              <TopicIcon name={topic.icon} />
            </span>
            <span className="topic-number">0{i + 1}</span>
          </div>
          <h3>{topic.title}</h3>
          <p>{topic.description}</p>
          <div className="topic-card-bottom">
            <span>Explore topic</span>
            <span className="round-plus" aria-hidden="true">
              +
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export function SubtopicCards({
  items,
  topicSlug = 'social-media-learning',
}: {
  items: Subtopic[];
  topicSlug?: string;
}) {
  return (
    <div className="subtopic-grid">
      {items.map((item, i) => (
        <Link
          className={'subtopic-card ' + item.color}
          key={item.slug}
          href={'/learn/' + topicSlug + '/' + item.slug + '/'}
        >
          <div className="subtopic-card-top">
            <span className="subtopic-number">0{i + 1}</span>
            <span className="topic-icon">
              <TopicIcon name={item.icon} size={24} />
            </span>
          </div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <div className="subtopic-card-bottom">
            <span>{item.time} lesson</span>
            <span aria-hidden="true">
              <ArrowRight size={15} />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export function SubtopicInsightCards({ cards }: { cards: LearningCard[] }) {
  const [active, setActive] = useState(0);
  const selected = cards[active];

  return (
    <div className="subtopic-insight">
      <div className="subtopic-insight-tabs" role="tablist" aria-label="Lesson ideas">
        {cards.map((card, index) => (
          <button
            key={card.label}
            id={'insight-tab-' + index}
            className={active === index ? 'active' : ''}
            role="tab"
            aria-selected={active === index}
            aria-controls="insight-panel"
            onClick={() => setActive(index)}
          >
            <span className="insight-tab-number">0{index + 1}</span>
            <span>
              <strong>{card.title}</strong>
              <small>{active === index ? 'OPENED' : 'TAP TO OPEN'}</small>
            </span>
            <span className="insight-tab-arrow" aria-hidden="true">
              {active === index ? '⌃' : '⌄'}
            </span>
          </button>
        ))}
      </div>

      <div
        className="subtopic-insight-panel"
        id="insight-panel"
        role="tabpanel"
        aria-labelledby={'insight-tab-' + active}
      >
        <span className="eyebrow">{selected.label}</span>
        <h3>{selected.title}</h3>
        <p>{selected.body}</p>
        <div className="insight-prompt">
          <Sparkles size={15} />
          <span>{selected.prompt}</span>
        </div>
      </div>

      <div className="subtopic-insight-progress" aria-label={'Idea ' + (active + 1) + ' of ' + cards.length}>
        <span style={{ width: `${((active + 1) / cards.length) * 100}%` }} />
        <small>
          {active + 1} of {cards.length} ideas
        </small>
      </div>
    </div>
  );
}

export function Quiz({ topic }: { topic: LearningCheck }) {
  const [answer, setAnswer] = useState<number | null>(null);
  return (
    <section className="quiz">
      <span className="eyebrow">PUT IT INTO PRACTICE</span>
      <h2>Quick check.</h2>
      <p className="quiz-question">{topic.question}</p>
      <div className="quiz-options">
        {topic.answers.map((a, i) => (
          <button
            className={
              "choice " +
              (answer === i
                ? i === topic.correct
                  ? "correct"
                  : "incorrect"
                : "")
            }
            key={a}
            onClick={() => setAnswer(i)}
            aria-pressed={answer === i}
          >
            <span className="choice-letter">{String.fromCharCode(65 + i)}</span>
            {a}
          </button>
        ))}
      </div>
      <div aria-live="polite">
        {answer !== null && (
          <div className="quiz-feedback">
            <strong>
              {answer === topic.correct
                ? "You’ve got it."
                : "Not quite. Try a different choice."}
            </strong>
            <p>{topic.explanation}</p>
            <button className="text-button" onClick={() => setAnswer(null)}>
              Reset question
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
