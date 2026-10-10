import { notFound } from "next/navigation";
import { InteractiveQuiz } from "@/components/interactive-quiz";

export function generateStaticParams() {
  return [{ audience: "teens" }, { audience: "parents" }];
}

const teenTopics = ["Sharing with consent", "Healthy feeds", "Login safety", "Digital footprints", "Checking claims", "Strong passwords", "Group chat kindness", "Algorithms", "Suspicious links", "Photo privacy", "Notifications", "Sponsored content", "Unsafe conversations", "Location privacy", "Pause before posting"];
const parentTopics = ["Family conversations", "Responding to harm", "Privacy settings", "Screen boundaries", "Modeling wellbeing", "Suspicious messages", "Consent online", "Social comparison", "Account security", "Bullying support", "Understanding feeds", "Family agreements", "Proportional checks", "Sponsored content", "Building independence"];

export default async function QuizPage({ params }: { params: Promise<{ audience: string }> }) {
  const { audience } = await params;
  if (audience !== "teens" && audience !== "parents") notFound();
  const isParent = audience === "parents";
  return <InteractiveQuiz topics={isParent ? parentTopics : teenTopics} isParent={isParent} />;
}
