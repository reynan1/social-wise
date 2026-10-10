"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  BadgeCheck,
  Ban,
  Bell,
  BellOff,
  BookOpen,
  BookOpenCheck,
  Brain,
  CircleAlert,
  ClipboardCheck,
  Compass,
  Ear,
  Eye,
  EyeOff,
  FileSignature,
  Flag,
  Footprints,
  Globe2,
  Hand,
  HandHeart,
  Handshake,
  Heart,
  HeartHandshake,
  HeartPulse,
  House,
  Info,
  KeyRound,
  Leaf,
  LifeBuoy,
  ListChecks,
  ListFilter,
  Lock,
  LockKeyhole,
  MapPin,
  Megaphone,
  MessageCircleMore,
  MessageSquare,
  Mic2,
  MonitorSmartphone,
  Newspaper,
  Palette,
  PauseCircle,
  RefreshCw,
  Ruler,
  Scale,
  ScanFace,
  SearchCheck,
  Share2,
  ShieldCheck,
  Smile,
  Sparkles,
  Smartphone,
  Star,
  Tags,
  Target,
  UserRound,
  Users,
  UsersRound,
  Volume2,
  WifiOff,
  Workflow,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const keywords = [
  "PRIVACY", "CONSENT", "VERIFY", "KINDNESS", "AWARENESS", "LEARN",
  "SAFETY", "BOUNDARIES", "SUPPORT", "BALANCE", "CONTEXT", "REPORT",
  "TRUST", "PAUSE", "GUIDE", "TOGETHER", "EMPATHY", "RESPECT",
  "DIGITAL", "FOOTPRINT", "PASSWORD", "SECURE", "ACCOUNT", "SCAM",
  "SOURCE", "FACTS", "EVIDENCE", "THINK", "SHARE", "PERMISSION",
  "LOCATION", "PRIVATE", "PUBLIC", "SCREEN", "FOCUS", "OFFLINE",
  "NOTIFY", "MUTE", "BLOCK", "SAFER", "KIND", "HELP", "LISTEN",
  "TALK", "FAMILY", "PARENT", "TEEN", "ROLEMODEL", "AGREEMENT",
  "LIMITS", "ROUTINE", "WELLBEING", "FEELINGS", "REPORTING", "RESOLVE",
  "CREATOR", "SPONSORED", "INFLUENCE", "ALGORITHM", "FEED", "CURATE",
  "REFLECT", "CHOICE", "VOICE", "COMMUNITY", "CREDIBLE",
];

const levels = { easy: 2, medium: 4, hard: 8 } as const;
const levelLabels = {
  easy: { name: "Easy", rows: "2 Rows" },
  medium: { name: "Normal", rows: "4 Rows" },
  hard: { name: "Hard", rows: "8 Rows" },
} as const;

const keywordIcons: Record<string, LucideIcon> = {
  PRIVACY: LockKeyhole,
  CONSENT: Handshake,
  VERIFY: SearchCheck,
  KINDNESS: HeartHandshake,
  AWARENESS: Eye,
  LEARN: BookOpen,
  SAFETY: ShieldCheck,
  SUPPORT: UsersRound,
  BOUNDARIES: MessageCircleMore,
  BALANCE: Scale,
  CONTEXT: Info,
  REPORT: Flag,
  TRUST: BadgeCheck,
  PAUSE: PauseCircle,
  GUIDE: Compass,
  TOGETHER: HandHeart,
  EMPATHY: Heart,
  RESPECT: Hand,
  DIGITAL: MonitorSmartphone,
  FOOTPRINT: Footprints,
  PASSWORD: KeyRound,
  SECURE: Lock,
  ACCOUNT: UserRound,
  SCAM: CircleAlert,
  SOURCE: Newspaper,
  FACTS: BookOpenCheck,
  EVIDENCE: ClipboardCheck,
  THINK: Brain,
  SHARE: Share2,
  PERMISSION: ClipboardCheck,
  LOCATION: MapPin,
  PRIVATE: EyeOff,
  PUBLIC: Globe2,
  SCREEN: Smartphone,
  FOCUS: Target,
  OFFLINE: WifiOff,
  NOTIFY: Bell,
  MUTE: BellOff,
  BLOCK: Ban,
  SAFER: Sparkles,
  KIND: Smile,
  HELP: LifeBuoy,
  LISTEN: Ear,
  TALK: MessageSquare,
  FAMILY: House,
  PARENT: Users,
  TEEN: UserRound,
  ROLEMODEL: Star,
  AGREEMENT: FileSignature,
  LIMITS: Ruler,
  ROUTINE: RefreshCw,
  WELLBEING: Leaf,
  FEELINGS: HeartPulse,
  REPORTING: Megaphone,
  RESOLVE: Wrench,
  CREATOR: Palette,
  SPONSORED: Tags,
  INFLUENCE: Volume2,
  ALGORITHM: Workflow,
  FEED: Newspaper,
  CURATE: ListFilter,
  REFLECT: ScanFace,
  CHOICE: ListChecks,
  VOICE: Mic2,
  COMMUNITY: UsersRound,
  CREDIBLE: BadgeCheck,
};

export function MemoryMatch() {
  const [open, setOpen] = useState(false);
  const [level, setLevel] = useState<keyof typeof levels>("easy");
  const [cards, setCards] = useState<string[]>([]);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [matched, setMatched] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const start = (chosen: keyof typeof levels) => {
    const rows = levels[chosen];
    const pairCount = (rows * 4) / 2;
    const selected = [...keywords]
      .sort(() => Math.random() - 0.5)
      .slice(0, pairCount);
    const deck = [...selected, ...selected].sort(() => Math.random() - 0.5);

    setLevel(chosen);
    setCards(deck);
    setFlipped([]);
    setMatched([]);
    setMoves(0);
    setOpen(true);
  };

  useEffect(() => {
    if (flipped.length !== 2) return;

    setMoves((value) => value + 1);
    if (cards[flipped[0]] === cards[flipped[1]]) {
      setMatched((value) => [...value, ...flipped]);
    }

    const timer = setTimeout(() => setFlipped([]), 700);
    return () => clearTimeout(timer);
  }, [flipped, cards]);

  const flip = (index: number) => {
    if (flipped.length === 2 || flipped.includes(index) || matched.includes(index)) return;
    setFlipped([...flipped, index]);
  };

  const finished = cards.length > 0 && matched.length === cards.length;

  return (
    <>
      <button className="button outline" type="button" onClick={() => start(level)}>
        Memory Match Game
      </button>

      {mounted && open && createPortal(
        <div
          className="game-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Memory match game"
        >
          <div className="game-modal ">
            <button
              className="game-close"
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close game"
            >
              ×
            </button>

            <div className="game-head !mr-10">
              <div>
                <span className="eyebrow !font-bold">PLAY &amp; LEARN</span>
                <h2>Memory <span>Match</span></h2>
                <p>Find the matching pairs</p>
              </div>
              <div className="game-decoration" aria-hidden="true">
                <span>?</span>
                <b>★</b>
              </div>
            </div>

            <div className="game-levels game-levels-top !mb-5 !mt-5" aria-label="Choose a difficulty">
              {(Object.keys(levels) as Array<keyof typeof levels>).map((option) => (
                <div className="grid  items-center">
                    <button
                      className={level === option ? "active" : ""}
                      key={option}
                      type="button"
                      onClick={() => start(option)}
                      aria-pressed={level === option}
                    >
                      <strong className="text-bold !text-xl">{levelLabels[option].name}</strong>
                      
                    </button>
                  <p className="text-center !mt-2">{levelLabels[option].rows}</p>
                </div>
              ))}
            </div>

            <div className={`memory-grid rows-${levels[level]}`}>
              {cards.map((card, index) => {
                const revealed = flipped.includes(index) || matched.includes(index);
                const isMatched = matched.includes(index);
                const Icon = keywordIcons[card];

                return (
                  <button
                    className={`memory-card ${revealed ? "revealed" : ""} ${isMatched ? "matched" : ""}`}
                    aria-label={revealed ? `${card} card` : "Hidden memory card"}
                    aria-pressed={revealed}
                    key={`${card}-${index}`}
                    type="button"
                    onClick={() => flip(index)}
                  >
                    {revealed ? (
                      <>
                        <span className="memory-card-icon"><Icon aria-hidden size={24} /></span>
                        <span>{card}</span>
                      </>
                    ) : (
                      <span className="!font-bold !text-xl memory-question">?</span>
                    )}
                  </button>
                );
              })}
            </div>

            {finished && (
              <div className="game-won">
                <strong>Great memory!</strong>
                <span>You matched every pair in {moves} moves.</span>
                <button className="text-button" type="button" onClick={() => start(level)}>
                  Play again
                </button>
              </div>
            )}
          </div>
        </div>,
        document.body,
      )}
    </>
  );
}
