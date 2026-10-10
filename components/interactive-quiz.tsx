"use client";

import { useState } from "react";

const letters = ["A", "B", "C", "D", "E"];
const questionBank = [
  ["A classmate is embarrassed in a photo. What should you do before posting?", ["Ask their permission", "Post it to close friends", "Add a funny filter", "Tag more friends", "Post it then delete it"]],
  ["Your feed makes you feel bad about yourself. What is a healthy next step?", ["Mute accounts and take a break", "Scroll faster", "Post a comparison", "Keep checking the feed", "Turn on more notifications"]],
  ["Someone claiming to be support asks for your login code. What should you do?", ["Keep it private and report them", "Send it quickly", "Send only part of it", "Ask for their code too", "Post it for advice"]],
  ["Which example is part of your digital footprint?", ["A repost that others can save", "Your phone battery", "Your screen size", "Your keyboard", "Your internet speed"]],
  ["A viral post says school is cancelled. What should you check?", ["An official school source", "The number of likes", "The comments first", "A random screenshot", "A friend’s guess"]],
  ["Which password habit is safest?", ["Use a long, unique password", "Use your birthday", "Reuse one password", "Use your pet’s name", "Share it with a friend"]],
  ["A group chat is targeting someone. What is the best response?", ["Do not reshare and tell a trusted adult", "Add another joke", "Screenshot it publicly", "Invite more people", "Pretend to agree"]],
  ["Why might two people see different posts in their feeds?", ["Platforms use activity signals to personalize feeds", "Phones show random facts", "Everyone sees exactly the same feed", "The newest phone decides", "Friends control the algorithm"]],
  ["What should you do with an unexpected suspicious link?", ["Open the official app instead and verify", "Click it immediately", "Forward it first", "Enter your password", "Download its attachment"]],
  ["Who should have a say before a photo is shared?", ["The people shown in the photo", "Only the person holding the phone", "The most popular friend", "Anyone who comments", "The platform"]],
  ["Which notification habit supports focus?", ["Turn off nonessential alerts", "Enable every alert", "Reply instantly", "Check overnight", "Share every alert"]],
  ["What should you look for in an influencer recommendation?", ["A sponsorship disclosure", "The number of emojis", "A perfect photo", "A viral sound", "The longest caption"]],
  ["An online conversation feels unsafe. What is a good next step?", ["Block or report and tell someone trusted", "Keep it secret", "Share your address", "Meet the person alone", "Send your password"]],
  ["Which location-sharing habit is safest?", ["Avoid posting live locations", "Post your routine publicly", "Share your school route", "Accept every location request", "Tag your home"]],
  ["Why pause before posting?", ["Posts can be screenshotted and reshared", "It guarantees more likes", "It removes all comments", "It makes posts private", "It prevents every mistake"]],
];
const parentQuestionBank = [
  ["Your child tells you someone is being unkind online. What should you do first?", ["Listen calmly and thank them for telling you", "Take away every device immediately", "Tell them to ignore it", "Contact the other child angrily", "Post about it publicly"]],
  ["What makes a family social media agreement effective?", ["Create it together with clear, realistic expectations", "Make rules without discussion", "Use only punishments", "Change rules every day", "Ban every platform"]],
  ["How can you teach your child about privacy?", ["Review audiences, tags, location, and personal information together", "Tell them privacy settings do not matter", "Ask them to accept everyone", "Post their schedule", "Share their passwords publicly"]],
  ["What is a helpful screen-time boundary?", ["Set predictable limits and explain the reason behind them", "Use devices as a constant reward", "Change limits without warning", "Track every second secretly", "Allow screens all night"]],
  ["How can parents model healthy digital habits?", ["Put your own phone away during shared family time", "Answer every alert immediately", "Use your phone during every conversation", "Keep notifications on overnight", "Scroll whenever your child speaks"]],
  ["Your child receives a suspicious message. How can you guide them?", ["Pause, save evidence if needed, and verify through an official channel", "Reply to the sender to investigate", "Send a login code", "Click every link", "Forward it to strangers"]],
  ["How should parents teach consent around photos?", ["Ask before sharing someone else’s image or story", "Assume family members always agree", "Post first and ask later", "Only ask if the photo is embarrassing", "Let popularity decide"]],
  ["Your child compares themselves with influencers. What is useful?", ["Discuss curated feeds and help them adjust what they see", "Say their feelings are silly", "Encourage more comparison", "Buy everything recommended", "Delete all friendships"]],
  ["What is a balanced approach to checking a child’s account?", ["Agree on transparent, safety-focused check-ins", "Read everything secretly forever", "Never discuss safety", "Share private messages with relatives", "Make checking a surprise punishment"]],
  ["What should a parent do when cyberbullying continues?", ["Document it, use reporting tools, and involve trusted adults", "Encourage retaliation", "Reshare the content", "Tell the child it is their fault", "Contact the bully directly in anger"]],
  ["How can you explain algorithms to a child?", ["A feed is selected by signals and is not the whole world", "The feed always shows objective truth", "Popular means correct", "The app knows every fact", "Friends control every post"]],
  ["What belongs in a family plan for an unsafe online situation?", ["Who to tell, how to block/report, and when to get more help", "A promise to keep every problem secret", "A rule never to save evidence", "A public argument", "A punishment chosen in anger"]],
  ["When should a parent involve another trusted adult?", ["When safety, threats, ongoing harm, or serious distress is involved", "Only after the child handles it alone", "Never", "Whenever a post gets few likes", "Only if a stranger asks"]],
  ["How should parents discuss influencer advertising?", ["Teach children to notice sponsorships and ask who benefits", "Treat every recommendation as unbiased", "Say ads are always dishonest", "Buy products to prove trust", "Count likes as evidence"]],
  ["What is the long-term goal of digital parenting?", ["Build judgment, skills, communication, and safer independence", "Control every online choice forever", "Remove every challenge", "Avoid all conversations", "Make children afraid of technology"]],
];

export function InteractiveQuiz({ topics, isParent }: { topics: string[]; isParent: boolean }) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [complete, setComplete] = useState(false);
  const topic = topics[current];
  const [question, choices] = (isParent ? parentQuestionBank : questionBank)[current];
  const score = answers.filter((answer) => answer === 0).length;
  const average = Math.round((score / topics.length) * 100);
  const choose = (answer: number) => {
    const next = [...answers];
    next[current] = answer;
    setAnswers(next);
  };
  const next = () => current === topics.length - 1 ? setComplete(true) : setCurrent(current + 1);
  const restart = () => { setCurrent(0); setAnswers([]); setComplete(false); };

  return <main id="main">
    <section className="page-intro"><span className="eyebrow">{isParent ? "PARENT QUIZ" : "TEEN QUIZ"}</span><h1>{isParent ? "Guide with confidence." : "Make your scroll smarter."}</h1><p>{isParent ? "Practice practical ways to support your child online." : "Test your social media awareness and online safety skills."}</p><span className="intro-tag">15 questions · A–E answers · 70% to pass</span></section>
    <section className="section quiz-list"><div className="interactive-quiz">
      {!complete ? <>
        <div className="quiz-progress"><span>Question {current + 1} of {topics.length}</span><span>{Math.round((current / topics.length) * 100)}%</span></div>
        <div className="quiz-progress-bar"><span style={{ width: `${((current + 1) / topics.length) * 100}%` }} /></div>
        <span className="eyebrow">QUESTION {current + 1} · {topic}</span><h2>{question}</h2>
        <p className="quiz-prompt">Choose the best answer.</p>
        <div className="quiz-options">{letters.map((letter, index) => <button className={`choice ${answers[current] === index ? "selected" : ""}`} aria-pressed={answers[current] === index} key={letter} onClick={() => choose(index)}><span className="choice-letter">{letter}</span>{choices[index]}</button>)}</div>
        <button className="button quiz-next" disabled={answers[current] === undefined} onClick={next}>{current === topics.length - 1 ? "See my grade" : "Next question →"}</button>
      </> : <div className="quiz-result"><span className="eyebrow">QUIZ COMPLETE</span><h2>{average >= 70 ? "You passed!" : "Keep learning and try again."}</h2><div className="quiz-score"><strong>{average}%</strong><span>Average score</span></div><p>You answered <strong>{score} of {topics.length}</strong> questions correctly.</p><p className="quiz-result-note">{average >= 70 ? "Great work — you are building safer, kinder digital habits." : "Review the learning topics and retake the quiz when you are ready."}</p><button className="button quiz-next" onClick={restart}>Retake quiz</button></div>}
    </div></section>
  </main>;
}
