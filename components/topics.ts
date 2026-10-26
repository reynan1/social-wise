export type LessonPair = [title: string, body: string];

export type LearningSource = {
  label: string;
  url: string;
};

export type LearningCard = {
  label: string;
  title: string;
  body: string;
  prompt: string;
};

export type LearningPlatform = {
  name: string;
  audience: string;
  description: string;
  bestFor: string;
  safety: string;
  url: string;
};

export type ParticipationStep = {
  number: string;
  title: string;
  explanation: string;
  example: string;
  tip: string;
  audience?: string;
  url?: string;
};

export type InformationSection = {
  label: string;
  title: string;
  intro: string;
  cards: ParticipationStep[];
};

export type LearningCheck = {
  question: string;
  answers: string[];
  correct: number;
  explanation: string;
};

export type Subtopic = LearningCheck & {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: string;
  color: string;
  time: string;
  intro: string;
  overview: string;
  keyPoints: string[];
  cardSectionTitle: string;
  cardSectionIntro: string;
  informationSections: InformationSection[];
  platforms?: LearningPlatform[];
  participationLoop?: ParticipationStep[];
  collaborationBoundaries?: ParticipationStep[];
  lessons: LessonPair[];
  action: string;
  cards: LearningCard[];
  sources: LearningSource[];
};

export type LearningTopic = LearningCheck & {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: string;
  color: string;
  time: string;
  intro: string;
  lessons: LessonPair[];
  action: string;
  sources?: LearningSource[];
  subtopics?: Subtopic[];
};

const onlineCommunityInformationSections: InformationSection[] = [
  {
    label: "LEARNING SPACES",
    title: "Choose a space that supports learning.",
    intro:
      "A platform is useful when its tools, audience, and moderation fit the learning goal.",
    cards: [
      {
        number: "01",
        title: "School-managed class spaces",
        explanation:
          "Google Classroom, Microsoft Teams, and other school platforms connect students, educators, assignments, files, and feedback in one place.",
        example: "Best for schoolwork, group projects, and parent check-ins through the school.",
        tip: "Use school-managed invitations and keep class codes and student details private.",
        audience: "Teens + guardians through a school",
        url: "https://edu.google.com/intl/en/workspace-for-education/products/classroom/",
      },
      {
        number: "02",
        title: "Khan Academy Community",
        explanation:
          "Lesson discussions give learners a place to ask specific questions, share tips, and clarify concepts while parents can support progress through coaching tools.",
        example: "Best for concept questions and self-paced study.",
        tip: "Discussion posts are public for eligible users; use a display name and never share private details.",
        audience: "Learners 13+; parents can coach",
        url: "https://support.khanacademy.org/hc/en-us/articles/4411209335181-How-can-I-access-discussions-under-articles-and-videos",
      },
      {
        number: "03",
        title: "Scratch Community",
        explanation:
          "Young creators share stories, games, and animations, remix projects, and learn from feedback in a moderated creative community.",
        example: "Best for creative projects and peer feedback.",
        tip: "Keep personal information private, comment constructively, give credit, and report concerns.",
        audience: "Young creators 8-16; parents + educators",
        url: "https://scratch.mit.edu/help/parents/",
      },
      {
        number: "04",
        title: "Parent-supported learning",
        explanation:
          "Parents can help choose the right space, review community rules, and ask what a teen learned without taking over the conversation.",
        example: "A parent checks the platform settings, then lets the teen explain the project or question.",
        tip: "Agree on check-ins and escalation steps before a problem appears.",
        audience: "Teen + trusted adult",
      },
    ],
  },
  {
    label: "THE PARTICIPATION LOOP",
    title: "From question to shared learning.",
    intro:
      "Move through these four steps to make the group smarter for everyone.",
    cards: [
      {
        number: "01",
        title: "Ask a specific question",
        explanation:
          "Name the topic, the exact part you do not understand, and the kind of help you need.",
        example: "Instead of 'I do not get this,' ask 'Why does the graph change direction here?'",
        tip: "Include the lesson, problem, or project you are working on.",
      },
      {
        number: "02",
        title: "Share what you tried",
        explanation:
          "Show your thinking, draft, code, notes, or first attempt so peers can respond to your process.",
        example: "'I used this formula and got 24. I expected 18, so I checked the first step.'",
        tip: "Share only the work needed for help; remove personal information first.",
      },
      {
        number: "03",
        title: "Respond to another idea",
        explanation:
          "Ask a follow-up question, point out a useful detail, or offer a respectful alternative.",
        example: "'Your example helped me see the pattern. Did you choose that method because of the first clue?'",
        tip: "Comment on the idea, not the person.",
      },
      {
        number: "04",
        title: "Summarize what you learned",
        explanation:
          "Turn the conversation into a takeaway so you remember it and the next learner can use it.",
        example: "'I learned to check the units before choosing the formula.'",
        tip: "Write one next step you can complete without the group.",
      },
    ],
  },
  {
    label: "COLLABORATE WITH BOUNDARIES",
    title: "Make the group safer for everyone.",
    intro:
      "Good collaboration includes privacy, attribution, moderation, and knowing when to ask an expert.",
    cards: [
      {
        number: "01",
        title: "Choose a group with guardrails",
        explanation:
          "Look for a clear purpose, community rules, active moderation, and a way to report problems.",
        example: "A class forum has teacher guidance, topic channels, and a clear report process.",
        tip: "Read the rules and notice who responds when something goes wrong.",
      },
      {
        number: "02",
        title: "Protect private information",
        explanation:
          "Learning does not require your address, school schedule, phone number, passwords, or live location.",
        example: "Ask about homework without posting your full name, school, or student ID.",
        tip: "Check image backgrounds and the audience before posting.",
      },
      {
        number: "03",
        title: "Credit the people who help",
        explanation:
          "Give credit when someone contributes an explanation, image, code, or idea so the learning trail stays visible.",
        example: "'Thanks to Maya for the diagram - I used her explanation to revise step two.'",
        tip: "Ask before reposting someone's work outside the original group.",
      },
      {
        number: "04",
        title: "Escalate high-stakes advice",
        explanation:
          "Safety, health, legal, or money decisions need a trusted adult or qualified professional who understands the full situation.",
        example: "Use a group to prepare questions for a professional, not to replace their advice.",
        tip: "If something feels urgent or risky, stop posting details and ask for help.",
      },
    ],
  },
];

export const subtopics: Subtopic[] = [
  {
    slug: "online-learning-communities",
    title: "Online Learning Communities",
    short: "Learn with peers.",
    description:
      "See how study groups, course forums, and creator communities turn questions into shared knowledge.",
    icon: "community",
    color: "blue",
    time: "4 min",
    intro:
      "Learning gets stronger when people explain, question, and build ideas together.",
    overview:
      "Online learning communities are groups where learners share questions, resources, explanations, and feedback around a common goal. They can be school forums, study groups, or creator communities.",
    keyPoints: [
      "Peer explanation can reveal gaps in your understanding.",
      "Clear norms and moderation help people participate safely.",
      "A useful summary turns a conversation into reusable knowledge.",
    ],
    cardSectionTitle: "Build a better learning community.",
    cardSectionIntro:
      "Use these habits to move from asking for answers to building knowledge together.",
    informationSections: onlineCommunityInformationSections,
    platforms: [
      {
        name: "Google Classroom",
        audience: "Teens + guardians through a school",
        description:
          "A teacher-led class space for assignments, feedback, resources, and communication. Guardians can receive classwork links or weekly summaries when the school enables those features.",
        bestFor: "Schoolwork and parent check-ins",
        safety:
          "Use school-managed invitations. Do not post class codes, private student information, or personal contact details publicly.",
        url: "https://edu.google.com/intl/en/workspace-for-education/products/classroom/",
      },
      {
        name: "Microsoft Teams for Education",
        audience: "Teens + educators in a class team",
        description:
          "Class teams organize conversations, files, channels, assignments, notes, and feedback so students can work together around a subject or project.",
        bestFor: "Group projects and ongoing discussion",
        safety:
          "Stay in the class team or private channel chosen by the educator. Keep sensitive conversations with a teacher or trusted adult, not in a public channel.",
        url: "https://support.microsoft.com/en-us/teams/education/quick-start/get-organized-in-your-class-team",
      },
      {
        name: "Khan Academy Community",
        audience: "Learners 13+; parents can coach",
        description:
          "Discussion areas under lessons let learners ask specific questions, share tips, and get clarification from other learners. Parents can support progress through coach and privacy settings.",
        bestFor: "Concept questions and self-paced study",
        safety:
          "Khan Academy says discussion posting is not available for under-13 child accounts and posts from older users are public. Use a display name and never share private details.",
        url: "https://support.khanacademy.org/hc/en-us/articles/4411209335181-How-can-I-access-discussions-under-articles-and-videos",
      },
      {
        name: "Scratch Community",
        audience: "Young creators 8-16; parents + educators",
        description:
          "Young people share stories, games, and animations, remix projects, and learn through feedback in a moderated creative community.",
        bestFor: "Creative projects and peer feedback",
        safety:
          "Review the community guidelines together: keep personal information private, comment constructively, give credit when remixing, and report concerns.",
        url: "https://scratch.mit.edu/help/parents/",
      },
    ],
    participationLoop: [
      {
        number: "01",
        title: "Ask a specific question",
        explanation:
          "Name the topic, the exact part you do not understand, and the kind of help you need. A focused question gives other learners a clear place to start.",
        example: "Instead of: 'I do not get this.' Try: 'Why does the graph change direction here?'",
        tip: "Include the lesson, problem, or project you are working on.",
      },
      {
        number: "02",
        title: "Share what you tried",
        explanation:
          "Show your thinking, draft, code, notes, or first attempt. This helps peers respond to your process instead of guessing what went wrong.",
        example: "'I used this formula and got 24. I expected 18, so I checked the first step.'",
        tip: "Share only the work needed for help; remove personal information first.",
      },
      {
        number: "03",
        title: "Respond to another idea",
        explanation:
          "Learning communities grow when members do more than ask. Ask a follow-up question, point out a useful detail, or offer a respectful alternative.",
        example: "'Your example helped me see the pattern. Did you choose that method because of the first clue?'",
        tip: "Comment on the idea, not the person. Be constructive when you disagree.",
      },
      {
        number: "04",
        title: "Summarize what you learned",
        explanation:
          "End the loop by turning the conversation into a takeaway. A short summary helps you remember and gives the next learner a useful starting point.",
        example: "'I learned to check the units before choosing the formula. I will retry the second example now.'",
        tip: "Write one next step you can complete without the group.",
      },
    ],
    collaborationBoundaries: [
      {
        number: "01",
        title: "Choose a group with guardrails",
        explanation:
          "Look for a clear purpose, community rules, active moderation, and a way to report problems. A learning group should make it easier to ask questions, not pressure people to reveal more than they want to share.",
        example: "A class forum has teacher guidance, topic channels, and a clear report process.",
        tip: "Read the rules and notice who is responsible for responding when something goes wrong.",
      },
      {
        number: "02",
        title: "Protect private information",
        explanation:
          "Learning does not require your home address, school schedule, phone number, passwords, live location, or private family details. Share the smallest amount of information needed for the question.",
        example: "Ask about a homework problem without posting your full name, school, or a photo of your student ID.",
        tip: "Before posting, check the background of images and the audience that can see the message.",
      },
      {
        number: "03",
        title: "Credit the people who help",
        explanation:
          "Give credit when someone contributes an explanation, example, image, code, or idea. Attribution makes the learning trail visible and helps the group build trust.",
        example: "'Thanks to Maya for the diagram - I used her explanation to revise step two.'",
        tip: "Ask before reposting someone's work outside the original group.",
      },
      {
        number: "04",
        title: "Escalate high-stakes advice",
        explanation:
          "A community can share experiences, but it is not a substitute for a qualified professional. Safety, health, legal, or money decisions need a trusted adult or expert who can understand the full situation.",
        example: "Use a group to find questions to ask a doctor, counselor, teacher, or financial professional - not to replace their advice.",
        tip: "If something feels urgent or risky, stop posting details and ask a trusted adult for help.",
      },
    ],
    lessons: [
      [
        "A community adds more than answers",
        "Online learning communities can help people compare approaches, explain their thinking, and notice gaps in what they understand. Research on online communities links thoughtful peer interaction with collaborative reflection and group knowledge building.",
      ],
      [
        "Use a simple participation loop",
        "Make your contribution useful: ask a specific question, share what you have tried, respond to another person's idea, and summarize what you learned. A clear question gives the group something better to build on than a one-word request for help.",
      ],
      [
        "Collaborate with boundaries",
        "Choose groups with clear rules or active moderation. Protect private information, credit other people's work, and treat disagreement as part of learning. If advice affects safety, health, or money, check it with a trusted expert instead of relying on a post.",
      ],
    ],
    question:
      "You are stuck on an assignment in a study group. Which post is most helpful?",
    answers: [
      "Can someone do this for me?",
      "Here is my attempt, the step where I got stuck, and what I have already tried.",
      "I will paste the answer I found without checking it.",
    ],
    correct: 1,
    explanation:
      "Showing your attempt helps peers respond to your actual need and keeps the group focused on learning rather than answer-swapping.",
    action:
      "Join one learning community and post one specific question that includes what you have already tried.",
    cards: [
      {
        label: "01 / ASK BETTER QUESTIONS",
        title: "Show your thinking",
        body: "A useful post gives the group a starting point: name the goal, show your attempt, and point to the exact moment you got stuck.",
        prompt: "Try it: replace 'I do not get this' with one specific question.",
      },
      {
        label: "02 / COLLABORATE WITH CARE",
        title: "Make room for other approaches",
        body: "Ask follow-up questions, acknowledge a helpful idea, and disagree with the reasoning rather than the person. Good groups make it safe to revise an answer.",
        prompt: "Try it: reply with one question before you reply with a correction.",
      },
      {
        label: "03 / LEAVE WITH A TAKEAWAY",
        title: "Turn conversation into learning",
        body: "Before you leave, summarize the idea that helped and the next step you will take. A short takeaway makes the group useful even after the chat ends.",
        prompt: "Try it: write a one-sentence summary after your next discussion.",
      },
    ],
    sources: [
      {
        label: "Identifying Learners' Interaction Patterns in an Online Learning Community",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8871948/",
      },
      {
        label: "Connections Matter: How Interactive Peers Affect Students in Online College Courses",
        url: "https://onlinelibrary.wiley.com/doi/10.1002/pam.21932",
      },
      {
        label: "Engagement in Online Learning: Student Attitudes and Behavior",
        url: "https://www.frontiersin.org/journals/education/articles/10.3389/feduc.2022.851019/full",
      },
    ],
  },
  {
    slug: "media-information-literacy",
    title: "Media & Information Literacy",
    short: "Read beyond the post.",
    description:
      "Build the habits to interpret, compare, and share media responsibly.",
    icon: "literacy",
    color: "yellow",
    time: "5 min",
    intro:
      "Being media literate means knowing how information is made, why it is shared, and what you can do with it responsibly.",
    overview:
      "Media and information literacy combines the ability to understand media systems with the skills to find, evaluate, use, and create information ethically.",
    keyPoints: [
      "A post can mix facts, opinions, predictions, and persuasion.",
      "Context includes the author, date, audience, purpose, and evidence.",
      "Responsible sharing considers privacy, harm, and reach.",
    ],
    cardSectionTitle: "Read beyond the post.",
    cardSectionIntro:
      "Use these checks to understand a message before you decide what to do with it.",
    informationSections: [
      {
        label: "ANALYZE THE MESSAGE",
        title: "Read before you react.",
        intro:
          "Use a simple scan to separate what a post says from what it wants you to feel or do.",
        cards: [
          {
            number: "01",
            title: "Name the claim",
            explanation: "Rewrite the post as one sentence that could be checked.",
            example: "'The post claims that the school changed its start time.'",
            tip: "Separate a claim from a joke, opinion, prediction, or reaction.",
          },
          {
            number: "02",
            title: "Find the context",
            explanation: "Look at the author, date, audience, and what may be missing.",
            example: "An old photo or cropped clip may be real but misleading now.",
            tip: "Open the original source instead of relying on a screenshot.",
          },
          {
            number: "03",
            title: "Notice the purpose",
            explanation: "Ask whether the post informs, sells, persuades, entertains, or provokes.",
            example: "A product review may also be sponsored content.",
            tip: "Look for who benefits if you believe or share the message.",
          },
          {
            number: "04",
            title: "Check the evidence",
            explanation: "Find the source behind a number, quote, image, or strong conclusion.",
            example: "A graph should name its data source and time period.",
            tip: "A confident tone is not evidence by itself.",
          },
        ],
      },
      {
        label: "SHARE RESPONSIBLY",
        title: "Make your next share safer.",
        intro:
          "Responsible participation includes knowing when not to amplify information.",
        cards: [
          {
            number: "01",
            title: "Pause",
            explanation: "Give yourself time when a post triggers anger, fear, or excitement.",
            example: "Save a surprising post instead of forwarding it immediately.",
            tip: "A short pause can stop an unverified claim from traveling.",
          },
          {
            number: "02",
            title: "Compare",
            explanation: "Look for independent coverage or a trusted source that can confirm the claim.",
            example: "Check an official school channel before sharing a closure rumor.",
            tip: "Comments can offer clues, but they are not proof.",
          },
          {
            number: "03",
            title: "Protect people",
            explanation: "Consider privacy, consent, and possible harm before adding reach.",
            example: "Do not repost a private photo just because it is already circulating.",
            tip: "If someone could be identified or harmed, leave it unshared.",
          },
          {
            number: "04",
            title: "Explain uncertainty",
            explanation: "When evidence is incomplete, say what is known and what still needs checking.",
            example: "'I have not found an official confirmation yet.'",
            tip: "Being honest about uncertainty is more useful than sounding certain.",
          },
        ],
      },
      {
        label: "PAUSE BEFORE YOU AMPLIFY",
        title: "Check the impact before you reshare.",
        intro:
          "Responsible use is more than finding information. It also means considering privacy, consent, harm, and the likely effect of adding reach.",
        cards: [
          {
            number: "01",
            title: "Save it for later",
            explanation: "If you are unsure, pause instead of reacting publicly or forwarding the post.",
            example: "Save a surprising video and return to it after you have checked the source.",
            tip: "A pause gives your judgment time to catch up with your emotion.",
          },
          {
            number: "02",
            title: "Check privacy and consent",
            explanation: "Consider whether the people, place, or conversation were meant to be shared beyond the original audience.",
            example: "Do not repost a private photo or expose someone's name just because it is already circulating.",
            tip: "Ask permission when another person could be identified.",
          },
          {
            number: "03",
            title: "Estimate possible harm",
            explanation: "Think about what your share could cause: embarrassment, harassment, panic, misinformation, or unsafe attention.",
            example: "A rumor about a student may feel funny to one group but become bullying when it spreads.",
            tip: "If the possible harm is high and the value is unclear, leave it unshared.",
          },
          {
            number: "04",
            title: "Verify before passing it on",
            explanation: "Find the original source and compare reliable coverage before you add your trust and audience to the message.",
            example: "Check an official announcement before sharing a claim about a school rule or public safety.",
            tip: "When you cannot verify it, say so or keep it private.",
          },
        ],
      },
    ],
    lessons: [
      [
        "Separate the claim, evidence, and opinion",
        "A post may contain a claim, a personal opinion, a prediction, or a call to action. Ask which part could be checked, what evidence is offered, and whether the language is trying to make you angry, afraid, or impressed.",
      ],
      [
        "Read the context around a message",
        "Check who created the content, when it was published, who the intended audience is, and what the creator may gain. Look for missing context, edited clips, unclear statistics, and links that do not lead to the original evidence.",
      ],
      [
        "Pause before you amplify",
        "Responsible use is more than finding information. It also means considering privacy, consent, harm, and the likely effect of resharing. If you are not sure, save the post for later and verify it before passing it on.",
      ],
    ],
    question:
      "A dramatic post makes a big claim but gives no source. What is the best next step?",
    answers: [
      "Share it with a question mark",
      "Check the creator, date, evidence, and independent coverage before sharing",
      "Trust it because many people commented on it",
    ],
    correct: 1,
    explanation:
      "A pause and a source check help you judge whether the claim is reliable, current, and relevant before your share adds more reach.",
    action:
      "Pick one post today and label its claim, evidence, opinion, audience, and purpose.",
    cards: [
      {
        label: "01 / CLAIM CHECK",
        title: "Name what is being claimed",
        body: "Rewrite the post as one sentence you could investigate. This separates a checkable claim from a reaction, joke, prediction, or opinion.",
        prompt: "Try it: start with 'The post is saying that...'",
      },
      {
        label: "02 / CONTEXT CHECK",
        title: "Look around the message",
        body: "Check the author, date, audience, purpose, and missing context. A cropped video or old statistic can change what the post means.",
        prompt: "Try it: find the original date and the full source.",
      },
      {
        label: "03 / SHARE CHECK",
        title: "Consider the effect of reach",
        body: "Every share can add attention, trust, or harm. If the evidence is weak, saving the post without amplifying it is a responsible choice.",
        prompt: "Try it: pause for one minute before you reshare a surprising post.",
      },
    ],
    sources: [
      {
        label: "UNESCO: Media and Information Literacy",
        url: "https://www.unesco.org/en/ami",
      },
      {
        label: "UNESCO: Media and Information Literacy Curriculum Framework",
        url: "https://www.unesco.org/mil4teachers/en/curriculum-framework",
      },
      {
        label: "European Commission: DigComp Framework",
        url: "https://joint-research-centre.ec.europa.eu/oldpage-digcomp/digcomp-framework_en",
      },
    ],
  },
  {
    slug: "responsible-content-creation",
    title: "Responsible Content Creation",
    short: "Make with purpose.",
    description:
      "Practice planning, editing, attribution, accessibility, and privacy when you publish.",
    icon: "creation",
    color: "green",
    time: "5 min",
    intro:
      "Creating content is a chance to communicate clearly, contribute something useful, and take responsibility for what you put into the world.",
    overview:
      "Responsible digital content creation is the practice of planning, making, editing, and publishing content with purpose, consent, attribution, accessibility, and likely impact in mind.",
    keyPoints: [
      "Purpose and audience shape the right format and tone.",
      "Online media still has owners, licenses, and attribution rules.",
      "Consent, privacy, accessibility, and accuracy matter before publishing.",
    ],
    cardSectionTitle: "Publish with purpose and care.",
    cardSectionIntro:
      "Follow the content from idea to publication with a responsible creator's checklist.",
    informationSections: [
      {
        label: "PLAN THE CONTENT",
        title: "Give the post a clear job.",
        intro:
          "A strong post starts with a purpose, audience, and format before the editing begins.",
        cards: [
          {
            number: "01",
            title: "Set the purpose",
            explanation: "Decide what the audience should understand, feel, or do.",
            example: "A tutorial teaches one process instead of trying to explain everything.",
            tip: "Finish: 'After seeing this, I want people to...'",
          },
          {
            number: "02",
            title: "Know the audience",
            explanation: "Choose language, examples, and tone that fit the people you want to reach.",
            example: "A class explainer can use shared course terms; a public post may need more context.",
            tip: "Avoid assuming everyone has the same background knowledge.",
          },
          {
            number: "03",
            title: "Match the format",
            explanation: "Use a caption, image, short video, thread, or guide based on the message.",
            example: "A step-by-step process may need numbered images rather than one long paragraph.",
            tip: "Make the most important idea visible early.",
          },
          {
            number: "04",
            title: "Edit for clarity",
            explanation: "Remove distractions, check claims, and make the next action easy to understand.",
            example: "A final edit replaces vague words with a specific instruction or example.",
            tip: "Read the post once as someone who has no inside context.",
          },
        ],
      },
      {
        label: "PUBLISH WITH CARE",
        title: "Respect the people and work behind the post.",
        intro:
          "Responsible creation includes ownership, consent, accessibility, privacy, and accuracy.",
        cards: [
          {
            number: "01",
            title: "Use original or allowed work",
            explanation: "Choose your own media, public-domain material, or content with a license that allows reuse.",
            example: "A Creative Commons image is used according to its license conditions.",
            tip: "Being easy to find online does not mean a work is free to copy.",
          },
          {
            number: "02",
            title: "Give attribution",
            explanation: "Name the creator and source so people can see where the material came from.",
            example: "A caption links to the photographer and identifies the license.",
            tip: "Ask permission when the license or context is unclear.",
          },
          {
            number: "03",
            title: "Include more people",
            explanation: "Use captions, readable contrast, text alternatives, and clear language where possible.",
            example: "A short video includes captions so the main idea is available without sound.",
            tip: "Accessibility is part of good communication, not an extra decoration.",
          },
          {
            number: "04",
            title: "Check consent and privacy",
            explanation: "Ask before showing people and remove details that could identify or expose them.",
            example: "A project photo hides private paperwork and includes permission from everyone pictured.",
            tip: "Review the background, tags, location, and audience before publishing.",
          },
        ],
      },
      {
        label: "MAKE CONTENT SAFER TO SHARE",
        title: "Check the post before it leaves your hands.",
        intro:
          "A safer post respects the people in it, removes unnecessary private details, and stays understandable when it travels beyond the original context.",
        cards: [
          {
            number: "01",
            title: "Ask permission",
            explanation: "People should have a say before their image, voice, story, or work becomes part of your post.",
            example: "Ask a friend before uploading a group photo, even if the photo was taken in public.",
            tip: "If someone says no, choose another image or make the person unidentifiable.",
          },
          {
            number: "02",
            title: "Remove private details",
            explanation: "Check the frame, caption, tags, location, and background for information someone did not agree to share.",
            example: "Crop out a student ID, home address, school timetable, or notification before posting a screenshot.",
            tip: "Share the smallest amount of personal information needed for your message.",
          },
          {
            number: "03",
            title: "Add access for more people",
            explanation: "Captions, readable contrast, text alternatives, and clear language help more people understand the content.",
            example: "A short video includes captions and a description of important visual information.",
            tip: "Treat accessibility as part of the content, not an optional extra.",
          },
          {
            number: "04",
            title: "Check facts and context",
            explanation: "Verify factual claims and imagine how the post could be interpreted by someone outside the original conversation.",
            example: "Add the date and source to a statistic so an old screenshot is not mistaken for current information.",
            tip: "Read the post once as a stranger who does not know the backstory.",
          },
        ],
      },
    ],
    lessons: [
      [
        "Create for an audience and a purpose",
        "Before you post, decide what you want someone to understand, feel, or do. A short caption, tutorial, review, or video works better when the format matches the audience and the message has a clear point.",
      ],
      [
        "Credit and license other people's work",
        "A photo, song, video, or graphic being online does not make it free to reuse. Prefer your own work, public-domain material, or content with a license that allows your use. Follow the license terms and give clear attribution.",
      ],
      [
        "Make content safer to share",
        "Ask permission before posting someone else, remove private details, add captions or text alternatives when useful, and check factual claims before publishing. Edit for clarity and imagine how the post could be understood out of context.",
      ],
    ],
    question:
      "You want to use a creator's photo in a school post. What is the responsible choice?",
    answers: [
      "Use it because it appeared in a public search",
      "Crop out the creator's name so the post looks cleaner",
      "Check the license or ask permission, then credit the creator",
    ],
    correct: 2,
    explanation:
      "Responsible creation respects ownership and consent. A license or permission tells you what reuse is allowed, and credit makes the source visible.",
    action:
      "Draft one post using your own media and add a simple purpose, audience, and attribution check before sharing.",
    cards: [
      {
        label: "01 / PURPOSE",
        title: "Give the post a job",
        body: "Decide what the audience should understand or do. A clear purpose helps you choose the right format, tone, length, and call to action.",
        prompt: "Try it: finish the sentence 'After seeing this, I want people to...'",
      },
      {
        label: "02 / CREDIT",
        title: "Make the source visible",
        body: "Use your own media when possible. Otherwise check the license or ask permission, then name the creator and the source in a way people can find.",
        prompt: "Try it: add an attribution line before you publish.",
      },
      {
        label: "03 / CARE",
        title: "Edit for people and context",
        body: "Check consent, private details, captions, accessibility, and factual claims. Imagine your post being seen by someone outside the original conversation.",
        prompt: "Try it: review the background and captions before sharing a photo or video.",
      },
    ],
    sources: [
      {
        label: "European Commission: DigComp 2.2 Digital Content Creation",
        url: "https://publications.jrc.ec.europa.eu/repository/bitstream/JRC128415/JRC128415_01.pdf",
      },
      {
        label: "UNESCO: Global Media and Information Literacy Assessment Framework",
        url: "https://unesdoc.unesco.org/in/rest/annotationSVC/DownloadWatermarkedAttachment/attach_import_61bd07e4-5df9-4729-a8d0-51083a23a9e5?_=224655eng.pdf",
      },
      {
        label: "Creative Commons: Licenses",
        url: "https://creativecommons.org/share-your-work/use-remix/cc-licenses/",
      },
    ],
  },
  {
    slug: "personal-development-online",
    title: "Personal Development Online",
    short: "Use social media to grow.",
    description:
      "Use social media for goals, inspiration, practice, connection, and positive contribution.",
    icon: "growth",
    color: "purple",
    time: "4 min",
    intro:
      "Social media can support growth when it helps you build skills, find encouragement, and take meaningful action offline.",
    overview:
      "Personal development online means using social media intentionally to learn, practice, connect, reflect, and contribute - while keeping your offline life in balance.",
    keyPoints: [
      "The accounts you follow can shape your goals and sense of possibility.",
      "Inspiration becomes growth when it turns into practice and reflection.",
      "Positive use still needs boundaries around attention and comparison.",
    ],
    cardSectionTitle: "Turn online inspiration into growth.",
    cardSectionIntro:
      "Use this simple path to move from a useful post to a real-world goal.",
    informationSections: [
      {
        label: "CURATE FOR GROWTH",
        title: "Build a feed that teaches you something.",
        intro:
          "The people and communities you follow influence what you notice, practice, and believe is possible.",
        cards: [
          {
            number: "01",
            title: "Follow with a purpose",
            explanation: "Choose creators and communities that support a skill, value, or question you care about.",
            example: "Follow a language teacher because you want regular practice, not just a popular account.",
            tip: "Write down what you hope an account will help you learn.",
          },
          {
            number: "02",
            title: "Mute what drains you",
            explanation: "You can protect attention without making a public announcement or starting an argument.",
            example: "Mute an account that repeatedly pulls you into comparison or stress.",
            tip: "Curating your feed is a normal part of managing your digital environment.",
          },
          {
            number: "03",
            title: "Notice the feeling",
            explanation: "A useful account should leave you with a question, idea, or sense of possibility more often than shame.",
            example: "After scrolling, ask whether you feel informed, inspired, pressured, or tired.",
            tip: "Use the feeling as information about what to change.",
          },
          {
            number: "04",
            title: "Reflect on the source",
            explanation: "Separate a creator's experience or opinion from evidence, expertise, and a paid recommendation.",
            example: "A study tip may be useful, but it is not automatically right for every learner.",
            tip: "Ask who benefits and what evidence supports the advice.",
          },
        ],
      },
      {
        label: "MOVE OFFLINE",
        title: "Turn inspiration into a real-world habit.",
        intro:
          "The point of a useful feed is what it helps you do, practice, or understand away from the screen.",
        cards: [
          {
            number: "01",
            title: "Save one idea",
            explanation: "Choose one useful post instead of collecting an endless list of things to do later.",
            example: "Save one drawing tutorial rather than twenty that you never open again.",
            tip: "Delete or organize saves that no longer match your goals.",
          },
          {
            number: "02",
            title: "Make it specific",
            explanation: "Turn inspiration into a small goal with a clear action and time.",
            example: "'Practice ten vocabulary words on Tuesday' is clearer than 'learn a language.'",
            tip: "Make the first step small enough to begin today.",
          },
          {
            number: "03",
            title: "Practice and reflect",
            explanation: "Use the idea, notice what changed, and adjust your next attempt.",
            example: "After a tutorial, write what worked and what you would try differently.",
            tip: "Progress is information, not a performance for the feed.",
          },
          {
            number: "04",
            title: "Keep life in balance",
            explanation: "Protect sleep, relationships, school, movement, and hobbies from being crowded out.",
            example: "Set a stopping point before opening the app and leave time for the activity itself.",
            tip: "Online inspiration should support your life, not replace it.",
          },
        ],
      },
      {
        label: "PROTECT YOUR ATTENTION AND SELF-IMAGE",
        title: "Use boundaries to keep your life bigger than your feed.",
        intro:
          "Positive use is not the same as unlimited use. Notice how social media affects you, then adjust what you see and when you step away.",
        cards: [
          {
            number: "01",
            title: "Notice how you feel",
            explanation: "Treat your mood after scrolling as useful information, not something to ignore or blame yourself for.",
            example: "You feel tense or smaller after an account's posts, even though you opened the app for inspiration.",
            tip: "Name the feeling: informed, inspired, pressured, lonely, tired, or compared.",
          },
          {
            number: "02",
            title: "Take a real break",
            explanation: "Step away before scrolling becomes automatic. A break gives your attention and emotions time to reset.",
            example: "Close the app after one useful idea and take a walk, drink water, or talk to someone offline.",
            tip: "Choose a stopping point before you open the app instead of waiting until you feel done.",
          },
          {
            number: "03",
            title: "Mute comparison triggers",
            explanation: "You can change your feed without judging the person behind an account or making a public conflict.",
            example: "Mute posts that repeatedly make you compare your body, grades, money, friendships, or progress.",
            tip: "Replace one unhelpful account with a creator or community that supports your actual goal.",
          },
          {
            number: "04",
            title: "Protect the rest of life",
            explanation: "Sleep, relationships, school, hobbies, movement, and quiet time all contribute to development too.",
            example: "A tutorial inspires a workout or art session, but the practice happens away from the screen.",
            tip: "Ask whether social media is supporting the activity or crowding it out.",
          },
        ],
      },
    ],
    lessons: [
      [
        "Choose feeds that stretch you",
        "Follow people and communities that teach a skill, widen your perspective, or model a value you want to practice. A useful feed should give you ideas to try, not only reasons to compare yourself with someone else.",
      ],
      [
        "Turn inspiration into a goal",
        "Save one idea, make it specific, and choose a small next step. A language video can become ten minutes of practice; a study creator can inspire a plan; a community post can lead to volunteering or a project.",
      ],
      [
        "Protect your attention and self-image",
        "Positive use is not the same as unlimited use. Notice how you feel, take breaks, mute accounts that pull you into comparison, and keep room for sleep, relationships, school, hobbies, and movement.",
      ],
    ],
    question:
      "Which plan uses social media as a tool for personal development?",
    answers: [
      "Follow every trend so you never miss anything",
      "Follow useful creators, choose one small goal, and practice it offline",
      "Measure your progress only by likes and follower counts",
    ],
    correct: 1,
    explanation:
      "Positive applications connect online inspiration to a goal, practice, and reflection. Metrics alone cannot tell you whether you are growing.",
    action:
      "Choose one account that supports a real goal, then schedule one small offline action for this week.",
    cards: [
      {
        label: "01 / CURATE",
        title: "Build a useful feed",
        body: "Choose accounts that teach a skill, widen your perspective, or encourage a value you want to practice. Your follows shape what feels normal and possible.",
        prompt: "Try it: follow one helpful account and mute one that drains your attention.",
      },
      {
        label: "02 / CONVERT",
        title: "Turn inspiration into action",
        body: "A saved post is only a starting point. Convert it into one small goal, a time to practice, and a way to notice your progress.",
        prompt: "Try it: turn one saved post into a 10-minute offline task.",
      },
      {
        label: "03 / BALANCE",
        title: "Keep your life bigger than your feed",
        body: "Positive use still needs limits. Protect sleep, relationships, movement, school, and hobbies so online inspiration supports your life instead of crowding it out.",
        prompt: "Try it: set a stopping point before you open the app.",
      },
    ],
    sources: [
      {
        label: "From Likes to Life Satisfaction: Positive Social Media Use and Positive Outcomes Across Adolescence",
        url: "https://onlinelibrary.wiley.com/doi/10.1002/jad.70168",
      },
      {
        label: "Social media use and adolescents' well-being: A note on flourishing",
        url: "https://pubmed.ncbi.nlm.nih.gov/37089739/",
      },
      {
        label: "UNICEF: Social media and adolescent mental health",
        url: "https://www.unicef.org/adolescentmentalhealthhub/highlights/social-media",
      },
    ],
  },
  {
    slug: "facts-vs-fake-news",
    title: "Facts vs. Fake News",
    short: "Check before you share.",
    description:
      "Use simple verification habits to evaluate claims, sources, images, and headlines.",
    icon: "factcheck",
    color: "coral",
    time: "5 min",
    intro:
      "Credibility is not a vibe. Slow down, look sideways, and trace a claim before you treat it as fact.",
    overview:
      "Information credibility is the strength of the evidence and sourcing behind a claim. Fact-checking is a process of testing the source, context, and independent support - not just judging whether a post feels true.",
    keyPoints: [
      "Emotional headlines can push you to share before you verify.",
      "Lateral reading means leaving the post to investigate the source elsewhere.",
      "Tracing evidence back to its original context can expose misleading edits.",
    ],
    cardSectionTitle: "Verify before you amplify.",
    cardSectionIntro:
      "Use the SIFT moves to slow down, investigate, compare, and trace information.",
    informationSections: [
      {
        label: "SIFT IN ACTION",
        title: "Verify before you amplify.",
        intro:
          "SIFT gives you a short process for moving from an emotional reaction to a better-supported judgment.",
        cards: [
          {
            number: "01",
            title: "Stop",
            explanation: "Notice your first reaction and pause before you like, comment, or share.",
            example: "A headline makes you angry, so you save it instead of forwarding it.",
            tip: "Write the claim in your own words before investigating it.",
          },
          {
            number: "02",
            title: "Investigate",
            explanation: "Look beyond the post to learn about the author, organization, purpose, and track record.",
            example: "Search the organization name and topic in a new tab.",
            tip: "Do not judge credibility only by logos, design, or follower counts.",
          },
          {
            number: "03",
            title: "Find better coverage",
            explanation: "Compare the claim with trusted reporting, official information, or relevant expertise.",
            example: "Check the official school or government channel for a rule change.",
            tip: "Look for independent agreement, not just repeated copies of one post.",
          },
          {
            number: "04",
            title: "Trace the original",
            explanation: "Follow quotes, images, statistics, and links back to their earliest useful context.",
            example: "Open the study behind a statistic and check what it actually measured.",
            tip: "If the original context cannot be found, describe the claim as unverified.",
          },
        ],
      },
      {
        label: "JUDGE THE EVIDENCE",
        title: "Look for quality, not confidence.",
        intro:
          "A reliable check considers the source, date, evidence, relevance, and uncertainty together.",
        cards: [
          {
            number: "01",
            title: "Check the source",
            explanation: "Identify who published the information and whether they have relevant expertise or accountability.",
            example: "A health claim should point to qualified evidence, not only an influencer story.",
            tip: "Ask what the source knows and what it may be trying to sell.",
          },
          {
            number: "02",
            title: "Check the date",
            explanation: "Information can be accurate in one moment and misleading when its context changes.",
            example: "A two-year-old announcement may not describe today's school policy.",
            tip: "Search for the most recent official update.",
          },
          {
            number: "03",
            title: "Check the match",
            explanation: "Make sure the evidence actually supports the claim being made, not a weaker or different claim.",
            example: "A small survey about opinions cannot prove that a product causes an outcome.",
            tip: "Read beyond the headline, chart label, or quote fragment.",
          },
          {
            number: "04",
            title: "Name uncertainty",
            explanation: "Good information literacy includes saying what you cannot yet confirm.",
            example: "'The image is real, but I have not confirmed when or where it was taken.'",
            tip: "Uncertainty is more trustworthy than a confident guess.",
          },
        ],
      },
      {
        label: "COMPARE EVIDENCE, NOT JUST COMMENTS",
        title: "Let evidence lead the conclusion.",
        intro:
          "Comments can add clues, but they are not proof. Compare the source, date, evidence, and independent reporting before you decide what to repeat.",
        cards: [
          {
            number: "01",
            title: "Check who is speaking",
            explanation: "Identify the author or organization and ask what expertise, access, or accountability they have.",
            example: "A claim about a school rule should be checked against the school, not only a popular account.",
            tip: "A large audience does not automatically make a source reliable.",
          },
          {
            number: "02",
            title: "Check when it happened",
            explanation: "A true statement can become misleading when an old date, event, or policy is presented as current.",
            example: "An old emergency notice may look like a new announcement when it is reposted without a date.",
            tip: "Find the most recent official update before sharing.",
          },
          {
            number: "03",
            title: "Check what the evidence proves",
            explanation: "Match the evidence to the exact claim. A quote, survey, or image may support only part of the story.",
            example: "A small opinion poll cannot prove that a product causes a health outcome.",
            tip: "Read the source behind the headline, chart, or clipped quote.",
          },
          {
            number: "04",
            title: "Explain disagreement",
            explanation: "When credible sources disagree, describe what is known, what is contested, and what remains uncertain.",
            example: "'Two sources agree on the date, but they interpret the cause differently.'",
            tip: "Do not turn uncertainty into a confident answer just to sound decisive.",
          },
        ],
      },
    ],
    lessons: [
      [
        "Slow the first reaction",
        "A headline may be designed to trigger anger, fear, or excitement. Take a breath before liking or sharing. Separate what the post says from what you already believe and what you would need to verify.",
      ],
      [
        "Use SIFT to investigate",
        "Stop before you amplify. Investigate the source and its purpose. Find better coverage from a trusted outlet or expert. Trace quotes, images, statistics, and links back to the original context.",
      ],
      [
        "Compare evidence, not just comments",
        "Comments can add clues, but they are not proof. Check the date, author, evidence, and independent reporting. If credible sources disagree, explain the uncertainty instead of presenting a confident answer you cannot support.",
      ],
    ],
    question:
      "A viral post says a new rule starts tomorrow. What should you do first?",
    answers: [
      "Share it quickly so people can prepare",
      "Check an official source and compare independent coverage before repeating it",
      "Use the number of likes as evidence that it is true",
    ],
    correct: 1,
    explanation:
      "A source check and lateral reading help you confirm whether the claim is current, authentic, and supported before it travels further.",
    action:
      "Practice SIFT on one viral claim: stop, investigate, find better coverage, and trace the original source.",
    cards: [
      {
        label: "01 / STOP",
        title: "Slow the first reaction",
        body: "Notice the emotion and the headline. A post that makes you instantly angry or excited may be asking for a share before you have checked the details.",
        prompt: "Try it: wait, breathe, and write the claim in your own words.",
      },
      {
        label: "02 / INVESTIGATE",
        title: "Look sideways",
        body: "Search for the author, organization, or original event outside the post. Compare what trusted sources say instead of judging credibility from design or popularity.",
        prompt: "Try it: open a new tab and search the source name plus the topic.",
      },
      {
        label: "03 / TRACE",
        title: "Follow the evidence back",
        body: "Check whether the quote, image, number, or link is being used in its original context. If you cannot verify it, say what is uncertain.",
        prompt: "Try it: find the earliest source you can and compare the wording.",
      },
    ],
    sources: [
      {
        label: "SIFT Method: Research Guide at Louisiana State University",
        url: "https://guides.lib.lsu.edu/ENG1001/SIFT",
      },
      {
        label: "News Literacy Project: News Literacy in America 2024",
        url: "https://newslit.org/srv/htdocs/wp-content/uploads/2024/10/NLP-Teen-Survey-Report-2024.pdf",
      },
      {
        label: "UK Parliament: How to evaluate sources",
        url: "https://commonslibrary.parliament.uk/research-briefings/cbp-10822/",
      },
    ],
  },
];

const awarenessSubtopics: Subtopic[] = [
  {
    slug: "online-privacy-awareness",
    title: "Online Privacy Awareness",
    short: "Protect personal information.",
    description:
      "Learn what information can identify you, reveal your routines, or unlock your accounts.",
    icon: "shield",
    color: "blue",
    time: "4 min",
    intro:
      "Privacy is a daily practice: share with purpose, check the audience, and protect access.",
    overview:
      "Online privacy means making thoughtful choices about what information you share, who can see it, and which apps or people can use it. A post can reveal more than its caption: location tags, school details, routines, and image backgrounds can create a picture of your life.",
    keyPoints: [
      "Personal information includes identifiers, routines, locations, and account access details.",
      "Privacy settings help, but they do not replace careful sharing decisions.",
      "Protect other people's information with the same care you give your own.",
    ],
    cardSectionTitle: "Protect privacy before it becomes a problem.",
    cardSectionIntro:
      "Use these small checks before posting, joining an app, or giving someone access.",
    informationSections: [
      {
        label: "KNOW YOUR DATA",
        title: "Notice what a post can reveal.",
        intro:
          "Privacy is not only about secrets. It is also about patterns that help people locate, contact, or profile you.",
        cards: [
          {
            number: "01",
            title: "Direct identifiers",
            explanation:
              "Full names, phone numbers, email addresses, school names, home addresses, photos, and documents can connect an account to a real person.",
            example:
              "A public club form asks for a home address even though an email is enough to send the meeting details.",
            tip: "Ask what information is necessary before you provide it.",
          },
          {
            number: "02",
            title: "Patterns and locations",
            explanation:
              "Live locations, regular routes, school schedules, geotags, and photo backgrounds can reveal where you are or when you are away.",
            example:
              "A photo from practice shows the school sign and is posted while your family is still there.",
            tip: "Remove location data, check the background, and consider posting later.",
          },
          {
            number: "03",
            title: "Credentials and access",
            explanation:
              "Passwords, recovery links, one-time codes, and private account screens can give someone control of your account.",
            example:
              "A message that claims to be support asks for the code sent to your phone.",
            tip: "Keep login details private; use the platform's official help flow instead.",
          },
        ],
      },
      {
        label: "PRACTICE DATA MINIMIZATION",
        title: "Share the smallest useful amount.",
        intro:
          "You can participate online without turning every moment, relationship, or routine into public information.",
        cards: [
          {
            number: "01",
            title: "Choose the audience",
            explanation:
              "Before posting, decide whether the content belongs with close friends, a class group, or a public audience. Recheck tags and resharing settings.",
            example:
              "A family update stays in a private group instead of being posted publicly with a live location.",
            tip: "If the audience is unclear, pause and ask before posting.",
          },
          {
            number: "02",
            title: "Review permissions",
            explanation:
              "Apps may request access to your camera, microphone, contacts, photos, or location. Turn off access that is not needed for the feature.",
            example:
              "A photo editor keeps photo access, but loses location access after the edit is complete.",
            tip: "Revisit permissions when an app updates or your needs change.",
          },
          {
            number: "03",
            title: "Protect other people",
            explanation:
              "A friend, sibling, or classmate has a right to privacy too. Ask before posting their image, message, name, or story.",
            example:
              "You send a group photo to friends first and remove anyone who does not want to be included.",
            tip: "Consent matters even when a post feels harmless to you.",
          },
        ],
      },
      {
        label: "PAUSE BEFORE POSTING",
        title: "Pause before the post becomes permanent.",
        intro:
          "A short pause protects your privacy, other people's consent, and the meaning of the post once it leaves your intended audience.",
        cards: [
          {
            number: "01",
            title: "Pause before the post becomes permanent",
            explanation:
              "Ask who needs to see this, whether anyone else has consented, and what could be misunderstood out of context. A post can be copied, screenshotted, or reshared even after you delete it.",
            example:
              "You save a funny group photo privately, ask everyone pictured before posting, and remove details that could identify your school or location.",
            tip: "When in doubt, save it privately or ask a trusted adult before sharing.",
          },
          {
            number: "02",
            title: "Check consent clearly",
            explanation:
              "Consent means the people shown or quoted understand what you want to share and who may see it. A private message or group photo is not automatically yours to publish.",
            example:
              "Before posting a friend's voice note, you ask if they are comfortable with the audience and accept their no without arguing.",
            tip: "Ask before posting, and remove the content if someone changes their mind.",
          },
          {
            number: "03",
            title: "Imagine the out-of-context version",
            explanation:
              "A caption, joke, or photo may make sense to close friends but look different to a teacher, future employer, stranger, or someone who does not know the story.",
            example:
              "You edit a joke so the image and caption cannot be read as an accusation or an invitation to target someone.",
            tip: "Read the post as if you found it without the conversation that came before it.",
          },
        ],
      },
      {
        label: "THE THREE-QUESTION CHECK",
        title: "Make the pause easy to remember.",
        intro:
          "Before you publish, run the post through three questions. If one answer is unclear, keep the post private until you can decide safely.",
        cards: [
          {
            number: "01",
            title: "Who needs to see this?",
            explanation:
              "Match the audience to the purpose. A public post is not automatically better, and a larger audience can make mistakes harder to undo.",
            example:
              "A family update goes to close friends instead of a public story because only a few people need the information.",
            tip: "Choose the smallest audience that still works.",
          },
          {
            number: "02",
            title: "Has everyone agreed?",
            explanation:
              "Check with people who appear in a photo, video, screenshot, message, or story. Consent should cover the content and the intended audience.",
            example:
              "You ask a classmate before sharing a group project photo and accept their request to crop them out.",
            tip: "A quick question can protect trust better than an apology later.",
          },
          {
            number: "03",
            title: "Could it be misunderstood?",
            explanation:
              "Review the post without the private joke, chat, or backstory. Think about how a stranger, teacher, family member, or future audience could read it.",
            example:
              "You change a caption that could sound like an accusation, or save the post privately when the context cannot be explained.",
            tip: "When the meaning depends on missing context, do not publish yet.",
          },
        ],
      },
    ],
    lessons: [
      [
        "Personal information is more than a password",
        "Names, contact details, school information, locations, routines, photos, and account codes can all affect privacy. Think about what a stranger could infer by combining several ordinary posts.",
      ],
      [
        "Settings are a starting point",
        "Use private audiences, strong unique passwords, multifactor authentication, and limited app permissions. Then review those choices because platforms and relationships change.",
      ],
      [
        "Pause before the post becomes permanent",
        "Ask who needs to see this, whether anyone else has consented, and what could be misunderstood out of context. When in doubt, save it privately or ask a trusted adult.",
      ],
    ],
    question: "A post shows your school sign and live location. What is the safest next step?",
    answers: [
      "Leave it public because the photo is already online",
      "Remove the location and school clues, check the audience, and post later if needed",
      "Add your daily schedule so friends know where to find you",
    ],
    correct: 1,
    explanation:
      "Location and routine clues can make it easier to identify or find you. Reduce the details, choose a smaller audience, and consider delaying the post.",
    action:
      "Review one account's audience, location, and app-permission settings with a trusted adult or friend.",
    cards: [
      {
        label: "PRIVACY CHECK",
        title: "What could this post reveal?",
        body: "Look beyond the caption. Check faces, names, uniforms, signs, reflections, location tags, and timing.",
        prompt: "Before sharing, name one detail you can remove or hide.",
      },
      {
        label: "ACCOUNT ACCESS",
        title: "Protect the keys to your account.",
        body: "Passwords and one-time codes are private. Use the official app or website when you need help with an account.",
        prompt: "Turn on multifactor authentication for one important account.",
      },
      {
        label: "POSTING PAUSE",
        title: "Pause before the post becomes permanent.",
        body: "Ask who needs to see this, whether anyone else has consented, and what could be misunderstood out of context.",
        prompt: "Save one post privately or ask a trusted adult before sharing it.",
      },
      {
        label: "CONSENT CHECK",
        title: "Respect other people's privacy.",
        body: "A message, photo, voice note, or story can belong to someone else even when you received it. Ask before reposting or quoting it.",
        prompt: "Ask one person for permission before sharing something that includes them.",
      },
      {
        label: "CONTEXT CHECK",
        title: "Read it without the backstory.",
        body: "Imagine how a stranger or future audience could understand the post without your private conversation. Edit for clarity or keep it private.",
        prompt: "Rewrite one caption so it cannot be easily misunderstood out of context.",
      },
    ],
    sources: [
      {
        label: "UNICEF: Online privacy checklist for parents",
        url: "https://www.unicef.org/southafrica/unicef-parenting/child-care/online-privacy",
      },
      {
        label: "FTC: Protecting your child's privacy online",
        url: "https://consumer.ftc.gov/articles/protecting-your-childs-privacy-online",
      },
      {
        label: "CISA: Personal security and social media considerations",
        url: "https://www.cisa.gov/sites/default/files/2024-06/personal-security-considerations-action-guide-critical-infrastructure-workers_06-07-2024_508.pdf",
      },
    ],
  },
  {
    slug: "scam-phishing-awareness",
    title: "Scam & Phishing Awareness",
    short: "Spot pressure tactics.",
    description:
      "Recognize urgent messages, fake links, impersonation, and requests for money or account details.",
    icon: "search",
    color: "coral",
    time: "4 min",
    intro:
      "A message can look familiar and still be designed to rush you into a risky choice.",
    overview:
      "Scams use stories, urgency, authority, rewards, or fear to make people act before they verify. Phishing is a type of scam that tries to capture information through a message, link, attachment, or fake sign-in page.",
    keyPoints: [
      "Urgency and strong emotion are signals to slow down, not reasons to act faster.",
      "A familiar logo, username, or account does not prove that a message is genuine.",
      "Verify through a known channel and report suspicious messages instead of replying.",
    ],
    cardSectionTitle: "Slow down the scammer's script.",
    cardSectionIntro:
      "Use the warning signs and response steps together. One clue may be enough to pause.",
    informationSections: [
      {
        label: "SPOT THE WARNING SIGNS",
        title: "Pressure is part of the plan.",
        intro:
          "Scammers want a quick reaction. Look for a message that makes you afraid, excited, secretive, or responsible for fixing an emergency.",
        cards: [
          {
            number: "01",
            title: "Unexpected urgency",
            explanation:
              "Claims like 'act now,' 'your account will close,' or 'keep this secret' are designed to stop you from checking.",
            example:
              "A delivery message says you must pay within ten minutes or your package will be destroyed.",
            tip: "Stop. A real problem can usually be checked through the official app or website.",
          },
          {
            number: "02",
            title: "Requests for secrets",
            explanation:
              "Legitimate services do not need your password, one-time code, or full payment details in a surprise social message.",
            example:
              "A profile that looks like support asks you to send the code just delivered to your phone.",
            tip: "Never share login codes or passwords in a message.",
          },
          {
            number: "03",
            title: "Links and offers",
            explanation:
              "Shortened links, strange domains, unexpected attachments, and prizes that seem too good to be true deserve extra care.",
            example:
              "An ad offers an expensive item for a tiny payment and sends you to a look-alike store.",
            tip: "Do not use the link from the message; navigate to the known site yourself.",
          },
        ],
      },
      {
        label: "VERIFY WITHOUT GIVING ACCESS",
        title: "Check the story before you act.",
        intro:
          "Verification protects you when a message appears to come from a friend, company, school, or platform.",
        cards: [
          {
            number: "01",
            title: "Pause and save evidence",
            explanation:
              "Do not reply, click, download, or forward the message while you are deciding. Keep a screenshot if you need to report it.",
            example:
              "You screenshot a suspicious direct message, then close it without opening its attachment.",
            tip: "Strong feelings are a cue to take a second look.",
          },
          {
            number: "02",
            title: "Use a known route",
            explanation:
              "Open the official app, type the known address, or contact the person through a separate channel you already trust.",
            example:
              "You call a friend using the saved number to ask whether their account really sent the request.",
            tip: "Do not use contact details supplied by the suspicious message.",
          },
          {
            number: "03",
            title: "Report and delete",
            explanation:
              "Reporting helps platforms spot patterns and protects other people. Delete the message after you have preserved what you need.",
            example:
              "You report a fake prize account, block it, and tell a parent or teacher if anyone else may be targeted.",
            tip: "Asking for help is a safety skill, not an embarrassment.",
          },
        ],
      },
      {
        label: "REPORT INSTEAD OF ENGAGING",
        title: "Protect yourself and reduce the spread.",
        intro:
          "Do not argue with or embarrass a scammer. Use a calm response plan that preserves useful evidence and brings in help when the situation affects money or account access.",
        cards: [
          {
            number: "01",
            title: "Save evidence safely",
            explanation:
              "Keep the username, profile link, message, date, and any payment or login details that help explain what happened. Do not keep clicking suspicious links to collect more proof.",
            example:
              "You take a screenshot of the fake support message and copy the account name before closing the chat.",
            tip: "Store evidence privately and avoid forwarding harmful messages to more people.",
          },
          {
            number: "02",
            title: "Report and block",
            explanation:
              "Use the platform's report tool for the account, message, ad, or link. Block or restrict the sender so the conversation does not continue.",
            example:
              "You report the fake prize account, block it, and remove the message from your inbox after saving what is needed.",
            tip: "Do not warn or negotiate with the scammer; engagement can signal that your account is active.",
          },
          {
            number: "03",
            title: "Tell someone when access or money is involved",
            explanation:
              "If you shared a password or code, clicked a suspicious sign-in page, sent money, or see unfamiliar account activity, tell a trusted adult and use the official recovery or fraud-reporting route quickly.",
            example:
              "You tell a parent immediately, change the password from the official app, sign out other sessions, and contact the bank or service through a known number if money moved.",
            tip: "Fast, honest reporting can limit damage. Being targeted is not your fault.",
          },
        ],
      },
    ],
    lessons: [
      [
        "Urgency is a warning sign",
        "Scammers use fear, excitement, authority, or secrecy to narrow your choices. A pause gives you time to inspect the sender and the request.",
      ],
      [
        "Verify outside the message",
        "Use a known app, website, phone number, or trusted adult. A profile can be copied, hacked, or made to look official.",
      ],
      [
        "Report instead of engaging",
        "Do not argue with or embarrass a scammer. Save evidence, report the account or message, block it, and tell someone if money or account access is involved.",
      ],
    ],
    question: "A message from a familiar account asks for your login code urgently. What should you do?",
    answers: [
      "Keep the code private and verify through a known channel",
      "Send it because the account name looks familiar",
      "Send the code but change your password later",
    ],
    correct: 0,
    explanation:
      "Accounts can be impersonated or taken over. Keep the code private, contact the person or service another way, and report the suspicious message.",
    action:
      "Practice opening one platform's official help page without using a link from a message.",
    cards: [
      {
        label: "PAUSE",
        title: "Pressure is information.",
        body: "Urgency, secrecy, and emotional language can be used to interrupt your judgment.",
        prompt: "Write down the first safe action you can take before replying.",
      },
      {
        label: "VERIFY",
        title: "Check through a separate route.",
        body: "Use a known website, app, saved number, or trusted adult rather than the contact details in the message.",
        prompt: "Choose one trusted route for checking unusual requests.",
      },
      {
        label: "RESPOND",
        title: "Report instead of engaging.",
        body: "Do not argue with or embarrass a scammer. Save evidence, report the account or message, block it, and tell someone if money or account access is involved.",
        prompt: "Find the report and block options on a platform you use often.",
      },
      {
        label: "RECOVER",
        title: "Act quickly if access was exposed.",
        body: "Use the official account recovery flow, change the password, sign out other sessions, and tell a trusted adult if you shared a code or payment detail.",
        prompt: "Write down the official recovery page for one important account.",
      },
    ],
    sources: [
      {
        label: "CISA: Easy tips to avoid phishing scams",
        url: "https://www.cisa.gov/sites/default/files/2023-09/CISA_Web-Page-Animation_Phishing_Audio-Description.pdf",
      },
      {
        label: "FTC: Scams that start on social media",
        url: "https://consumer.ftc.gov/consumer-alerts/2020/10/scams-start-social-media",
      },
      {
        label: "FTC: How to spot social media scams",
        url: "https://consumer.ftc.gov/consumer-alerts/2026/04/how-spot-top-scams-started-social-media",
      },
    ],
  },
  {
    slug: "misinformation-awareness",
    title: "Misinformation Awareness",
    short: "Check before sharing.",
    description:
      "Learn how to question a claim, investigate its source, and find better coverage before amplifying it.",
    icon: "factcheck",
    color: "purple",
    time: "5 min",
    intro:
      "Popular, polished, and emotional content can still be incomplete or wrong.",
    overview:
      "Misinformation is false information shared without an intention to cause harm. Social feeds mix reporting, opinion, satire, advertising, mistakes, and manipulated content, so credibility depends on evidence and context rather than confidence or engagement.",
    keyPoints: [
      "Separate the claim from the post's tone, design, and number of shares.",
      "Investigate the source and look for independent reporting or primary evidence.",
      "If evidence is incomplete or sources disagree, explain the uncertainty.",
    ],
    cardSectionTitle: "Compare evidence, not just comments.",
    cardSectionIntro:
      "Use a short investigation loop to decide whether information is ready to trust or share.",
    informationSections: [
      {
        label: "IDENTIFY THE CLAIM",
        title: "Name what would need to be true.",
        intro:
          "A dramatic post may contain several claims. Separate them so each one can be checked fairly.",
        cards: [
          {
            number: "01",
            title: "Stop for a reaction",
            explanation:
              "Anger, fear, excitement, and certainty can make a post feel true before you inspect it.",
            example:
              "A headline makes you angry, so you save it instead of immediately forwarding it to a group chat.",
            tip: "Pause long enough to describe the claim in your own words.",
          },
          {
            number: "02",
            title: "Check date and context",
            explanation:
              "Old events, cropped images, edited videos, and quotes without surrounding context can create a misleading impression.",
            example:
              "A video described as happening today is traced to an older event in another country.",
            tip: "Search key words, dates, names, and the original image or quote.",
          },
          {
            number: "03",
            title: "Ask who benefits",
            explanation:
              "The purpose may be to inform, persuade, sell, entertain, provoke, or collect attention. Purpose does not prove a claim, but it adds context.",
            example:
              "A creator recommends a product while a sponsorship disclosure appears below the post.",
            tip: "Separate a person's opinion or interest from the evidence they provide.",
          },
        ],
      },
      {
        label: "USE SIFT",
        title: "Read laterally before you read deeply.",
        intro:
          "The SIFT method gives you four moves for testing online information: Stop, Investigate, Find better coverage, and Trace the claim to its original context.",
        cards: [
          {
            number: "01",
            title: "Investigate the source",
            explanation:
              "Look up the author, publisher, organization, or account outside the original post. Check expertise, track record, and purpose.",
            example:
              "You search the organization name and find that it is selling a service related to the claim.",
            tip: "Do not judge credibility from a professional-looking layout alone.",
          },
          {
            number: "02",
            title: "Find better coverage",
            explanation:
              "Search for reporting or analysis from independent, reliable sources. Agreement across sources is more useful than a high share count.",
            example:
              "You compare a claim with a public agency update and two established news reports.",
            tip: "Look for the strongest evidence, not just sources that confirm your first reaction.",
          },
          {
            number: "03",
            title: "Trace the original",
            explanation:
              "Follow quotes, statistics, images, or research back to their first available context and check whether the post represents them accurately.",
            example:
              "A headline about a study is compared with the study itself before you cite the result.",
            tip: "When the evidence is uncertain, say what is known and what is not.",
          },
        ],
      },
      {
        label: "MAKE UNCERTAINTY VISIBLE",
        title: "Say what the evidence can support.",
        intro:
          "Credible sources can disagree or lack enough evidence. Careful communication separates what is established, what is still being investigated, and what is only a possibility.",
        cards: [
          {
            number: "01",
            title: "Separate known from unknown",
            explanation:
              "Write down the part supported by evidence and the part that remains unclear. This prevents a small fact from becoming a much larger conclusion.",
            example:
              "A report confirms that an event happened, but does not yet explain its cause. You share only the confirmed part.",
            tip: "Use phrases such as 'the source reports' or 'this has not been verified'.",
          },
          {
            number: "02",
            title: "Explain meaningful disagreement",
            explanation:
              "Sources may use different methods, data, dates, or definitions. Compare the evidence instead of treating every disagreement as proof that nobody knows anything.",
            example:
              "Two studies reach different results because they examined different groups, so you describe the difference before drawing a conclusion.",
            tip: "Check whether the disagreement is about facts, interpretation, or the quality of the evidence.",
          },
          {
            number: "03",
            title: "Make uncertainty visible",
            explanation:
              "A careful explanation can say that a claim is unverified instead of presenting confidence you have not earned. Honest limits make information easier to trust.",
            example:
              "You write, 'I could not confirm this with an independent source, so I am not sharing it as fact.'",
            tip: "Do not turn a possibility into a prediction or a prediction into a fact.",
          },
        ],
      },
    ],
    lessons: [
      [
        "Comments are clues, not proof",
        "A large number of replies or shares tells you that content travelled, not that it is accurate. Look for the date, author, evidence, and context.",
      ],
      [
        "Use lateral reading",
        "Move outside the original post to investigate the source and compare independent coverage. This is often faster and more reliable than reading one page repeatedly.",
      ],
      [
        "Make uncertainty visible",
        "Credible sources can disagree or lack enough evidence. A careful explanation can say that a claim is unverified instead of presenting confidence you have not earned.",
      ],
    ],
    question: "Which action best tests a surprising social media claim?",
    answers: [
      "Share it and wait to see whether anyone objects",
      "Check the source, date, original evidence, and independent coverage",
      "Trust it because the graphic looks professional",
    ],
    correct: 1,
    explanation:
      "Credibility comes from evidence and context. Investigate the source, compare better coverage, and trace important claims back to their origin.",
    action:
      "Choose one post you saved today and practice the four SIFT moves before deciding whether to share it.",
    cards: [
      {
        label: "CLAIM",
        title: "What exactly is being said?",
        body: "Rewrite the post as a checkable claim. Separate facts, opinions, predictions, and missing context.",
        prompt: "Underline the one statement that would need evidence.",
      },
      {
        label: "SOURCE",
        title: "Who is behind the post?",
        body: "Investigate the author or publisher away from the original page. Purpose and expertise change how you read the claim.",
        prompt: "Open a second tab and look up the source independently.",
      },
      {
        label: "CONTEXT",
        title: "Can you trace it back?",
        body: "Find the original quote, image, dataset, study, or event and compare the context with the version in your feed.",
        prompt: "Write one sentence about what remains uncertain.",
      },
      {
        label: "UNCERTAINTY",
        title: "Make uncertainty visible.",
        body: "Credible sources can disagree or lack enough evidence. Say that a claim is unverified instead of presenting confidence you have not earned.",
        prompt: "Rewrite one confident sentence to show what is known and what is still unclear.",
      },
    ],
    sources: [
      {
        label: "UNESCO: Media and Information Literacy",
        url: "https://www.unesco.org/en/ami",
      },
      {
        label: "UNESCO: What is misinformation?",
        url: "https://www.unesco.org/en/query-list/m/misinformation",
      },
      {
        label: "Los Angeles Valley College Library: SIFT method",
        url: "https://lib.lavc.edu/information-evaluation/siftmethod",
      },
    ],
  },
  {
    slug: "social-media-addiction-screen-time",
    title: "Social Media Addiction & Screen Time",
    short: "Protect your attention.",
    description:
      "Notice patterns that feel hard to control and build healthier rhythms around sleep, focus, and connection.",
    icon: "growth",
    color: "green",
    time: "5 min",
    intro:
      "Healthy digital habits are about balance, purpose, and whether social media crowds out what matters.",
    overview:
      "People sometimes use the word addiction to describe social media use that feels difficult to control. For everyday learning, it is more useful to notice patterns and impact: what triggers checking, how you feel afterward, and whether use is crowding out sleep, school, movement, relationships, or hobbies.",
    keyPoints: [
      "There is no single screen-time number that fits every teen or family.",
      "Purpose, content, timing, and impact matter alongside minutes on a screen.",
      "Small boundaries, reflection, and offline alternatives can support healthier use.",
    ],
    cardSectionTitle: "Build a healthier relationship with your feed.",
    cardSectionIntro:
      "Use awareness and small experiments rather than shame or an all-or-nothing rule.",
    informationSections: [
      {
        label: "NOTICE THE PATTERN",
        title: "Ask what your attention is telling you.",
        intro:
          "A quick check-in can show whether you are using a platform intentionally or automatically.",
        cards: [
          {
            number: "01",
            title: "Name the trigger",
            explanation:
              "Boredom, stress, loneliness, notifications, and habit can all start a scroll. Knowing the trigger gives you another choice.",
            example:
              "You notice that you open a video app whenever homework feels difficult, even before deciding what you need.",
            tip: "Pause and name the feeling or task before you open the app.",
          },
          {
            number: "02",
            title: "Check what it crowds out",
            explanation:
              "Look for effects on sleep, schoolwork, movement, relationships, hobbies, and time to recover from stress.",
            example:
              "A late-night scroll makes it harder to sleep and leaves less time for the next morning's routine.",
            tip: "Focus on the activity being displaced, not only the timer number.",
          },
          {
            number: "03",
            title: "Notice how you feel",
            explanation:
              "Record whether an account or session leaves you informed, connected, calm, pressured, or upset. Feelings are useful feedback, not a verdict.",
            example:
              "You feel worse after comparison-heavy content, so you mute several accounts for a week.",
            tip: "Use your experience to curate the feed and choose better stopping points.",
          },
        ],
      },
      {
        label: "BUILD A HEALTHY RHYTHM",
        title: "Make the better choice easier.",
        intro:
          "Healthy boundaries work best when teens and parents discuss them together and connect them to real goals.",
        cards: [
          {
            number: "01",
            title: "Set a stopping point",
            explanation:
              "Choose device-free times or places that protect sleep, meals, homework, and conversations. A plan is easier to follow when it is specific.",
            example:
              "Your phone charges outside the bedroom and notifications pause during homework.",
            tip: "Start with one boundary you can repeat, then adjust it with experience.",
          },
          {
            number: "02",
            title: "Change the feed",
            explanation:
              "Mute, unfollow, filter words, and turn off nonessential notifications. These tools reduce cues that pull you back automatically.",
            example:
              "You turn off breaking-news alerts and keep a small list of accounts that support your goals.",
            tip: "Choose content that helps you feel informed, connected, or inspired rather than stuck.",
          },
          {
            number: "03",
            title: "Crowd in offline life",
            explanation:
              "A replacement activity makes a boundary more realistic: walk, music, reading, sport, making, rest, or time with people you trust.",
            example:
              "When you finish a short check-in, you put the phone down and practice guitar for ten minutes.",
            tip: "Pick an offline option before you need it.",
          },
        ],
      },
      {
        label: "SUPPORT WITHOUT SHAME",
        title: "Talk about impact, not character.",
        intro:
          "If use feels hard to control or is affecting daily life, support is more useful than blame.",
        cards: [
          {
            number: "01",
            title: "Share what you notice",
            explanation:
              "A teen can describe when use is hardest, what it replaces, and what kind of help feels acceptable. A parent can listen before setting a plan.",
            example:
              "You tell a trusted adult that late-night notifications are the hardest part, so you test sleep mode together.",
            tip: "Use specific observations instead of labels like lazy or addicted.",
          },
          {
            number: "02",
            title: "Review the experiment",
            explanation:
              "After a week, ask whether the change helped sleep, mood, focus, or connection. Keep what works and change what does not.",
            example:
              "A family reviews a device-free dinner rule and changes it to fit sports practice nights.",
            tip: "Healthy habits can be flexible and still be real habits.",
          },
          {
            number: "03",
            title: "Ask for extra support",
            explanation:
              "If social media use feels impossible to control or interferes with well-being, school, sleep, relationships, or daily life, talk with a trusted adult or qualified health professional.",
            example:
              "A teen asks a parent and pediatrician for help making a plan after repeated attempts have not helped.",
            tip: "Getting support early is a practical next step, not a failure.",
          },
        ],
      },
    ],
    lessons: [
      [
        "Minutes are only one part of the picture",
        "The same amount of time can feel different depending on purpose, content, timing, and what it replaces. Look at sleep, focus, movement, relationships, and how you feel.",
      ],
      [
        "Use small boundaries",
        "Try notification changes, device-free routines, or a planned check-in rather than expecting perfect control immediately. Review the result and adjust.",
      ],
      [
        "Ask for support when impact is serious",
        "If use feels hard to control or interferes with daily life, speak with a trusted adult and consider a qualified health professional. Support should be respectful and practical.",
      ],
    ],
    question: "Which plan supports a healthier relationship with social media?",
    answers: [
      "Use it whenever you feel stressed and ignore how you feel afterward",
      "Set a device-free bedtime, reduce notifications, and choose an offline activity",
      "Use a strict rule without discussing the reason or reviewing how it works",
    ],
    correct: 1,
    explanation:
      "A specific boundary, fewer attention cues, and a realistic offline replacement can protect sleep and attention while leaving room to learn what works.",
    action:
      "Try one small change for seven days: mute one distracting account or create a device-free routine before bed.",
    cards: [
      {
        label: "NOTICE",
        title: "What starts the scroll?",
        body: "Boredom, stress, notifications, and habit can all be triggers. Naming one makes the pattern easier to change.",
        prompt: "Write down the next trigger you notice without judging yourself.",
      },
      {
        label: "BOUNDARY",
        title: "Protect one important activity.",
        body: "Choose sleep, homework, meals, movement, or connection and create one repeatable device-free moment.",
        prompt: "Pick a place or time where notifications can pause.",
      },
      {
        label: "SUPPORT",
        title: "Talk about impact, not shame.",
        body: "If use feels difficult to control or is getting in the way of daily life, bring a specific example to a trusted adult.",
        prompt: "Complete the sentence: 'I need help when social media...'.",
      },
    ],
    sources: [
      {
        label: "AAP: Preventing problematic technology use",
        url: "https://www.aap.org/en/patient-care/media-and-children/center-of-excellence-on-social-media-and-youth-mental-health/qa-portal/qa-portal-library/qa-portal-library-questions/preventing-problematic-technology-use/",
      },
      {
        label: "AAP: Managing the impacts of social media on youth",
        url: "https://www.aap.org/en/patient-care/media-and-children/center-of-excellence-on-social-media-and-youth-mental-health/qa-portal/qa-portal-library/qa-portal-library-questions/managing-the-impacts-of-social-media-on-youth/",
      },
      {
        label: "AAP: Navigating Social Media teen wellness toolkit",
        url: "https://www.aap.org/en/patient-care/media-and-children/center-of-excellence-on-social-media-and-youth-mental-health/social-media-wellness-toolkit/",
      },
    ],
  },
  {
    slug: "online-safety-awareness",
    title: "Online Safety Awareness",
    short: "Reduce online risks.",
    description:
      "Use safer settings, stronger boundaries, and a clear response plan when something feels wrong online.",
    icon: "shield",
    color: "yellow",
    time: "5 min",
    intro:
      "Safety is easier to practice when you know what to change, what to save, and who can help.",
    overview:
      "Online safety includes privacy, account security, respectful communication, healthy boundaries, and knowing how to respond to harassment, impersonation, or unwanted contact. No single setting prevents every risk, so combine tools with judgment and support.",
    keyPoints: [
      "Review privacy and security settings when you join a platform or when its features change.",
      "Block and report unwanted contact instead of continuing a conversation that feels unsafe.",
      "Save evidence and involve a trusted adult early when there is a threat, exploitation, or repeated harm.",
    ],
    cardSectionTitle: "Create your safer response plan.",
    cardSectionIntro:
      "A plan reduces panic. Practice the first few steps before you need them.",
    informationSections: [
      {
        label: "REDUCE EVERYDAY RISKS",
        title: "Set up your accounts for safer choices.",
        intro:
          "Safety grows from a combination of settings, boundaries, and attention to who has access to you.",
        cards: [
          {
            number: "01",
            title: "Review privacy controls",
            explanation:
              "Check who can see your posts, tag you, message you, add you to groups, or view your location. Use the smallest audience that fits the purpose.",
            example:
              "You allow messages from friends, turn off live location, and review tags before they appear on your profile.",
            tip: "Settings change, so put a review on your calendar every few months.",
          },
          {
            number: "02",
            title: "Secure the device and account",
            explanation:
              "Use updates, unique passwords, multifactor authentication, screen locks, and careful downloads to reduce unauthorized access.",
            example:
              "You update the phone, remove an unused app, and turn on login alerts for your main account.",
            tip: "Ask a trusted adult before installing unfamiliar software or sharing account access.",
          },
          {
            number: "03",
            title: "Choose contacts carefully",
            explanation:
              "A follower, gamer tag, or mutual friend is not proof that a person is safe. Keep boundaries and do not accept pressure to move private or send intimate conversations elsewhere.",
            example:
              "You decline a request from someone you do not know and keep a conversation in the platform's reportable space.",
            tip: "You can change your mind, leave a chat, block, and report.",
          },
        ],
      },
      {
        label: "WHEN SOMETHING GOES WRONG",
        title: "Block, save, report, and tell.",
        intro:
          "You do not have to solve online harm alone. The order can change, but preserve safety and support first.",
        cards: [
          {
            number: "01",
            title: "Stop the contact",
            explanation:
              "Do not keep negotiating with someone who threatens, pressures, or harasses you. Block or restrict the account when it is safe to do so.",
            example:
              "After repeated unwanted messages, you stop replying and use the platform's block tool.",
            tip: "Do not meet an online contact in person without a trusted adult and a safe plan.",
          },
          {
            number: "02",
            title: "Save useful evidence",
            explanation:
              "Screenshots, usernames, links, dates, and messages can help a platform, school, parent, or official service understand what happened.",
            example:
              "You save the threatening message and account name before blocking, then store it somewhere private.",
            tip: "Do not forward harmful images or content to more people just to document it.",
          },
          {
            number: "03",
            title: "Tell a trusted adult",
            explanation:
              "A parent, caregiver, teacher, school counselor, or other trusted adult can help with reporting, account recovery, and safety planning.",
            example:
              "You show a caregiver the message and ask them to sit with you while you report it.",
            tip: "If the first person does not listen, tell another safe adult.",
          },
        ],
      },
      {
        label: "MAKE SAFETY A SHARED HABIT",
        title: "Talk before the difficult moment.",
        intro:
          "Teens and parents can agree on practical help without treating every online problem as a punishment.",
        cards: [
          {
            number: "01",
            title: "Agree on an escalation path",
            explanation:
              "Decide who to contact for a hacked account, threatening message, financial scam, bullying, or unwanted sexual request.",
            example:
              "A family writes down the platform report link, a trusted adult, and the local emergency route for immediate danger.",
            tip: "Make the plan easy to find and update it as platforms change.",
          },
          {
            number: "02",
            title: "Keep conversations open",
            explanation:
              "Young people are more likely to ask for help when they expect a calm response. Start with what happened and what support is needed.",
            example:
              "A parent asks, 'What would make this feel safer right now?' before discussing consequences.",
            tip: "Safety conversations work best before a crisis.",
          },
          {
            number: "03",
            title: "Use experts for high-risk situations",
            explanation:
              "Threats, exploitation, financial loss, self-harm concerns, or serious harassment may need platform support, school staff, law enforcement, or qualified professionals.",
            example:
              "A teen and caregiver use an official reporting service instead of trying to confront a threatening account.",
            tip: "If someone is in immediate danger, contact local emergency services.",
          },
        ],
      },
      {
        label: "SAFETY INCLUDES SUPPORT",
        title: "Make help part of the safety plan.",
        intro:
          "Clear family or school plans make it easier to ask for help. High-risk situations deserve people and services with the right training.",
        cards: [
          {
            number: "01",
            title: "Write down the next step",
            explanation:
              "A plan can name who to contact, where to report, how to secure an account, and what to do if the first person is unavailable.",
            example:
              "A family keeps a short list with a trusted adult, school counselor, platform report page, and account recovery route.",
            tip: "Keep the plan somewhere private but easy to find when you feel stressed.",
          },
          {
            number: "02",
            title: "Ask for help without blame",
            explanation:
              "A calm response helps people share what happened sooner. Start with safety and support before discussing mistakes or consequences.",
            example:
              "A teen says, 'I clicked something and I am worried,' and the adult helps secure the account before asking questions.",
            tip: "Focus on the next safe action, not on making someone feel ashamed.",
          },
          {
            number: "03",
            title: "Use the right service",
            explanation:
              "Threats, exploitation, serious harassment, financial loss, or immediate danger may need platform support, school staff, a bank, law enforcement, emergency services, or a qualified professional.",
            example:
              "A caregiver helps report a serious threat through the platform and contacts the appropriate local service instead of confronting the account.",
            tip: "If someone is in immediate danger, contact local emergency services first.",
          },
        ],
      },
    ],
    lessons: [
      [
        "Use layers of protection",
        "Privacy settings, strong account security, careful contacts, and thoughtful sharing work together. No single toggle can remove every online risk.",
      ],
      [
        "Respond instead of freezing",
        "When something feels wrong, stop contact, save what is useful, report through the platform, and tell a trusted adult. You do not need to investigate alone.",
      ],
      [
        "Safety includes support",
        "Clear family or school plans make it easier to ask for help. High-risk situations deserve people and services with the right training.",
      ],
    ],
    question: "Someone repeatedly sends unwanted messages and asks you to keep the conversation secret. What is a safer response?",
    answers: [
      "Keep replying so they do not get upset",
      "Move the conversation to a private app",
      "Stop contact, save useful evidence, block or report, and tell a trusted adult",
    ],
    correct: 2,
    explanation:
      "Pressure and secrecy are warning signs. You can end contact, preserve evidence, report the account, and involve a trusted adult for support.",
    action:
      "Write down one trusted adult and one platform reporting path you could use if something felt unsafe.",
    cards: [
      {
        label: "SETTINGS",
        title: "Make your default audience smaller.",
        body: "Review who can contact, tag, add, and locate you. Recheck settings after updates or changes in your life.",
        prompt: "Find the privacy and security page for one platform.",
      },
      {
        label: "RESPONSE",
        title: "Block, save, report, tell.",
        body: "A simple response plan protects your attention and gives trusted people enough information to help.",
        prompt: "Write the four verbs somewhere you can find them quickly.",
      },
      {
        label: "SUPPORT",
        title: "Safety includes support.",
        body: "Clear family or school plans make it easier to ask for help. High-risk situations deserve people and services with the right training.",
        prompt: "Name a calm adult and an official service you could contact without waiting for a crisis.",
      },
    ],
    sources: [
      {
        label: "UNICEF: How to keep your child safe online",
        url: "https://www.unicef.org/eca/how-keep-your-child-safe-online",
      },
      {
        label: "CISA: Social media safety guide",
        url: "https://www.cisa.gov/sites/default/files/publications/Social%20Media%20Guide_3.pdf",
      },
      {
        label: "NCMEC: Talking with young people about online safety",
        url: "https://www.missingkids.org/blog/2019/pre-update/qa-analyst",
      },
    ],
  },
];

const parentalGuidanceSubtopics: Subtopic[] = [
  {
    slug: "healthy-screen-time-limits",
    title: "Setting Healthy Screen-Time Limits",
    short: "Plan for balance.",
    description:
      "Create flexible family routines that protect sleep, learning, movement, relationships, and rest.",
    icon: "growth",
    color: "green",
    time: "5 min",
    intro:
      "Healthy limits work best when they are built around family priorities, not only a timer.",
    overview:
      "Screen-time limits are most useful when they help a child or teen participate in the parts of life that matter: sleep, school, movement, family, friends, hobbies, and recovery. A family media plan gives everyone a chance to discuss routines, set boundaries, and revise them as needs change.",
    keyPoints: [
      "Look at what screen use supports or crowds out, not only the number of minutes.",
      "Build rules together and make them specific enough to practice.",
      "Review the plan when schedules, responsibilities, or developmental needs change.",
    ],
    cardSectionTitle: "Make the family plan practical.",
    cardSectionIntro:
      "Use these cards to turn a general screen-time rule into a routine your family can understand and adjust.",
    informationSections: [
      {
        label: "START WITH PRIORITIES",
        title: "Protect the activities that help children thrive.",
        intro:
          "A plan starts with sleep, learning, movement, relationships, and the child's need for age-appropriate independence.",
        cards: [
          {
            number: "01",
            title: "Protect sleep and transitions",
            explanation:
              "Choose device-free routines before bed, during sleep, and when the family needs to get ready for school or work.",
            example:
              "Devices charge outside bedrooms and the family uses a short wind-down routine before lights out.",
            tip: "Explain the purpose of the boundary so it feels like care, not a surprise punishment.",
          },
          {
            number: "02",
            title: "Make room for offline life",
            explanation:
              "Screens should not crowd out homework, physical activity, reading, creative hobbies, family time, or friendships.",
            example:
              "A teen finishes a short walk and homework block before opening social media for the evening.",
            tip: "Name a realistic offline replacement instead of only saying what to stop.",
          },
          {
            number: "03",
            title: "Include the child's voice",
            explanation:
              "Children and teens are more likely to understand a plan when they can explain what they use media for and help solve difficult moments.",
            example:
              "A parent asks which school group chats are essential before setting a no-phone homework block.",
            tip: "Listen for the difference between connection, learning, entertainment, and automatic checking.",
          },
        ],
      },
      {
        label: "MAKE LIMITS WORK",
        title: "Use clear routines, not only warnings.",
        intro:
          "Specific cues and consistent follow-through make a family plan easier to remember and less likely to become an argument.",
        cards: [
          {
            number: "01",
            title: "Set places and times",
            explanation:
              "Decide when devices are welcome, when they pause, and where they charge. Clear rules reduce repeated negotiation.",
            example:
              "The dining table is screen-free, homework uses one screen at a time, and notifications pause during study.",
            tip: "Keep the rule short enough that everyone can repeat it.",
          },
          {
            number: "02",
            title: "Plan the transition",
            explanation:
              "Stopping can be difficult when a video, game, or conversation has no natural ending. Give notice and decide what comes next.",
            example:
              "A parent gives a ten-minute reminder, then helps a child save their game before starting dinner.",
            tip: "A calm transition is more useful than a last-second demand.",
          },
          {
            number: "03",
            title: "Review and revise",
            explanation:
              "A family plan is not permanent. Check whether the boundary supports sleep, school, well-being, and trust, then adjust it with the child.",
            example:
              "The family changes a weekend rule during exam season and revisits it after the schedule returns to normal.",
            tip: "Treat the plan as a shared experiment, not a test someone can fail.",
          },
        ],
      },
      {
        label: "ADJUST AS THE CHILD GROWS",
        title: "Review the plan before conflict forces a change.",
        intro:
          "A plan should change with age, responsibilities, school demands, and new platforms. Review it together instead of waiting for a conflict.",
        cards: [
          {
            number: "01",
            title: "Match the child's stage",
            explanation:
              "A younger child may need more help with transitions and content choices, while an older teen may need more privacy, independence, and coaching around judgment.",
            example:
              "A family replaces a simple device timer with a conversation about notifications, group chats, and self-directed routines as a teen grows.",
            tip: "Ask what responsibility the child is ready to practice next.",
          },
          {
            number: "02",
            title: "Plan for changing schedules",
            explanation:
              "School projects, exams, sports, holidays, work, and family changes can affect when and why screens are useful. A good plan can flex without disappearing.",
            example:
              "The family adjusts a homework boundary during exam week, then returns to a normal routine after the deadline.",
            tip: "Make temporary changes clear so they do not become confusing permanent rules.",
          },
          {
            number: "03",
            title: "Review together",
            explanation:
              "Set a regular check-in to ask what is working, what feels unfair or difficult, what online risks have changed, and which responsibility can be handed over.",
            example:
              "At the start of a new school term, a parent and teen review sleep, school apps, social notifications, and device-free times.",
            tip: "Use the review to solve problems, not to collect evidence for a punishment.",
          },
        ],
      },
    ],
    lessons: [
      [
        "Balance matters more than a magic number",
        "There is no single screen-time limit that fits every child or family. Consider what media is for and whether it is crowding out sleep, movement, learning, relationships, or rest.",
      ],
      [
        "Make the rule visible and mutual",
        "Specific places, times, transitions, and offline alternatives help children understand what happens next. Adults should model the habits they ask children to practice.",
      ],
      [
        "Adjust as the child grows",
        "A plan should change with age, responsibilities, school demands, and new platforms. Review it together instead of waiting for a conflict.",
      ],
    ],
    question: "Which approach is most likely to support a healthy family media plan?",
    answers: [
      "Use one strict number for every child and never revisit it",
      "Set shared routines around sleep, school, movement, and connection, then review them together",
      "Only discuss screen use after a child breaks a rule",
    ],
    correct: 1,
    explanation:
      "A useful plan connects boundaries to family priorities, includes the child's perspective, and changes as routines and needs change.",
    action:
      "Choose one device-free routine and one offline activity to add to your family's plan this week.",
    cards: [
      {
        label: "PRIORITIES",
        title: "What should screens never crowd out?",
        body: "Start with sleep, school, movement, relationships, hobbies, and time to recover from stress.",
        prompt: "Name one priority your family wants to protect first.",
      },
      {
        label: "ROUTINE",
        title: "Make the boundary specific.",
        body: "A place, time, transition, and next activity are easier to follow than a vague request to use devices less.",
        prompt: "Write one short rule everyone can remember.",
      },
      {
        label: "REVIEW",
        title: "Adjust as the child grows.",
        body: "A plan should change with age, responsibilities, school demands, and new platforms. Review it together instead of waiting for a conflict.",
        prompt: "Set a date to revisit one family media rule together.",
      },
      {
        label: "GROW",
        title: "Hand over the next responsibility.",
        body: "Use the review to decide which choice the child can practice independently, such as managing notifications, protecting sleep, or checking privacy settings.",
        prompt: "Choose one digital responsibility to explain, practice, and review.",
      },
    ],
    sources: [
      {
        label: "HealthyChildren.org: How to make a family media plan",
        url: "https://www.healthychildren.org/english/family-life/media/pages/how-to-make-a-family-media-use-plan.aspx",
      },
      {
        label: "HealthyChildren.org: Parental controls and healthy media limits",
        url: "https://www.healthychildren.org/English/family-life/Media/Pages/parental-controls-for-kids-setting-safe-and-healthy-media-limits.aspx",
      },
      {
        label: "HealthyChildren.org: Kids and tech tips for parents",
        url: "https://www.healthychildren.org/English/family-life/Media/Pages/Tips-for-Parents-Digital-Age.aspx",
      },
    ],
  },
  {
    slug: "parental-monitoring-supervision",
    title: "Parental Monitoring & Supervision",
    short: "Supervise with trust.",
    description:
      "Use age-appropriate tools transparently while helping children build their own safety and judgment skills.",
    icon: "shield",
    color: "blue",
    time: "5 min",
    intro:
      "Supervision works best when it protects safety without turning every online moment into surveillance.",
    overview:
      "Parental controls and monitoring tools can help manage content, contacts, purchases, privacy, and time. They are most effective when adults explain what a tool does, involve the child in the plan, and gradually hand over responsibility as skills and trust grow.",
    keyPoints: [
      "Choose a tool for a clear safety or family goal rather than monitoring everything by default.",
      "Tell children what is being checked, why it matters, and how long the arrangement will last.",
      "Pair controls with co-use, teaching, and regular review so independence can grow.",
    ],
    cardSectionTitle: "Supervise with purpose and transparency.",
    cardSectionIntro:
      "The goal is not perfect visibility. The goal is safer choices and growing confidence.",
    informationSections: [
      {
        label: "SUPERVISE WITH PURPOSE",
        title: "Match the tool to the real concern.",
        intro:
          "A focused plan is easier to explain and review than a hidden system that collects more information than the family needs.",
        cards: [
          {
            number: "01",
            title: "Name the goal",
            explanation:
              "Decide whether the concern is sleep, purchases, age-inappropriate content, unknown contacts, privacy, or a specific safety issue.",
            example:
              "A family uses purchase approval because a child can access a shared tablet, not because every message needs to be read.",
            tip: "If you cannot explain the goal in one sentence, pause before adding a new tool.",
          },
          {
            number: "02",
            title: "Explain the settings",
            explanation:
              "Tell the child what is limited, what is visible to an adult, and what to do if a setting blocks something useful by mistake.",
            example:
              "A parent shows how content filters and contact limits work before the child starts a new platform.",
            tip: "Transparency turns a control into a lesson about how digital systems work.",
          },
          {
            number: "03",
            title: "Protect sensitive data",
            explanation:
              "Parents should also protect the child's messages, location, photos, and account information. Collect and share only what is needed for safety.",
            example:
              "A parent stores a safety concern privately instead of forwarding a child's screenshot to a large family chat.",
            tip: "A child's privacy remains important even when an adult is responsible for safety.",
          },
        ],
      },
      {
        label: "GROW INDEPENDENCE",
        title: "Move from checking to coaching.",
        intro:
          "Supervision should change as children learn to make safer choices and explain their reasoning.",
        cards: [
          {
            number: "01",
            title: "Learn together first",
            explanation:
              "Explore a new app, game, or platform with the child. Ask what they enjoy, what feels confusing, and where the safety settings are.",
            example:
              "A teen gives a parent a tour of a group chat and together they review privacy, blocking, and reporting options.",
            tip: "Let the child teach you something so the conversation is two-way.",
          },
          {
            number: "02",
            title: "Set review points",
            explanation:
              "Agree when you will revisit the tool and what signs would lead to more or less supervision. Avoid making a temporary setting feel permanent.",
            example:
              "After a month of safe account use, a parent and teen review whether a restriction still fits.",
            tip: "Use progress and behavior, not age alone, to guide the next step.",
          },
          {
            number: "03",
            title: "Plan for mistakes",
            explanation:
              "Children need to know what to do after a wrong click, uncomfortable message, or broken rule. A calm recovery plan can prevent secrecy.",
            example:
              "A teen agrees to tell a parent after clicking a suspicious link so they can secure the account together.",
            tip: "Make asking for help safer than hiding the problem.",
          },
        ],
      },
      {
        label: "COACHING FOR INDEPENDENCE",
        title: "Prepare children to make safer choices alone.",
        intro:
          "Use co-viewing, platform tours, review points, and recovery plans to help children make safer choices even when an adult is not watching.",
        cards: [
          {
            number: "01",
            title: "Co-view and discuss",
            explanation:
              "Spend time with a child in the app, game, or platform. Notice what they see, ask how features work, and practice choices together without taking over.",
            example:
              "A parent watches a short video with a child, then asks how the recommendation appeared and how to change the feed.",
            tip: "Use shared time to teach judgment, not only to search for problems.",
          },
          {
            number: "02",
            title: "Take a platform tour",
            explanation:
              "Ask the child to show privacy settings, contact controls, blocking, reporting, purchases, and account recovery. Let them lead part of the tour.",
            example:
              "A teen shows a parent how to restrict messages and report an account, then explains which setting they would use first.",
            tip: "Knowing where the tools are makes a future response faster and calmer.",
          },
          {
            number: "03",
            title: "Practice the recovery plan",
            explanation:
              "Rehearse what to do after a wrong click, lost password, unwanted message, or exposed personal detail: stop, save what helps, secure the account, and ask for support.",
            example:
              "A family practices opening the official recovery page without using a link from a suspicious message.",
            tip: "A plan practiced in a calm moment is easier to use during stress.",
          },
        ],
      },
    ],
    lessons: [
      [
        "Monitoring should have a reason",
        "Choose controls for a specific goal such as content, contacts, purchases, privacy, or time. More visibility is not automatically more safety.",
      ],
      [
        "Transparency protects trust",
        "Explain what a tool checks and why. Invite questions, protect sensitive information, and avoid turning supervision into secret surveillance.",
      ],
      [
        "Coaching prepares children for independence",
        "Use co-viewing, platform tours, review points, and recovery plans to help children make safer choices even when an adult is not watching.",
      ],
    ],
    question: "Which supervision plan best supports safety and trust?",
    answers: [
      "Install a hidden monitoring tool and never discuss it",
      "Explain a focused safety tool, use it transparently, and review it as skills grow",
      "Let a child manage every setting without learning what the platform does",
    ],
    correct: 1,
    explanation:
      "Supervision is strongest when it has a clear purpose, is explained openly, protects privacy, and gradually supports independence.",
    action:
      "Choose one platform to explore together and write down its privacy, contact, report, and account-recovery settings.",
    cards: [
      {
        label: "PURPOSE",
        title: "What is the tool for?",
        body: "A clear goal keeps supervision focused: content, contacts, purchases, privacy, sleep, or a specific safety concern.",
        prompt: "Name the one concern your current setting is meant to address.",
      },
      {
        label: "TRUST",
        title: "Explain what is visible.",
        body: "Tell children what a parent can see, why the setting exists, and when the arrangement will be reviewed.",
        prompt: "Practice explaining one setting in plain language.",
      },
      {
        label: "COACH",
        title: "Coaching prepares children for independence.",
        body: "Use co-viewing, platform tours, review points, and recovery plans to help children make safer choices even when an adult is not watching.",
        prompt: "Ask your child to show you one safety feature and explain when they would use it.",
      },
      {
        label: "RECOVERY",
        title: "Practice the next safe step.",
        body: "Rehearse what to do after a wrong click, lost password, unwanted message, or exposed personal detail so asking for help feels normal.",
        prompt: "Write a four-step recovery plan your family can remember.",
      },
    ],
    sources: [
      {
        label: "HealthyChildren.org: Parental controls and healthy media limits",
        url: "https://www.healthychildren.org/English/family-life/Media/Pages/parental-controls-for-kids-setting-safe-and-healthy-media-limits.aspx",
      },
      {
        label: "UNICEF: Online privacy checklist for parents",
        url: "https://www.unicef.org/southafrica/unicef-parenting/child-care/online-privacy",
      },
      {
        label: "UNICEF: Supporting a child through a negative online experience",
        url: "https://www.unicef.org/parenting/child-care/supporting-child-negative-online-experience",
      },
    ],
  },
  {
    slug: "parent-child-communication",
    title: "Parent-Child Communication",
    short: "Keep the door open.",
    description:
      "Use regular, judgment-free conversations to understand online experiences and solve problems together.",
    icon: "community",
    color: "purple",
    time: "4 min",
    intro:
      "The most useful digital parenting tool is a child knowing they can talk to you.",
    overview:
      "Children and teens may avoid sharing online problems if they expect immediate punishment, embarrassment, or dismissal. Frequent low-pressure conversations help parents learn what platforms feel like from the child's perspective and make it easier to respond when something goes wrong.",
    keyPoints: [
      "Ask about online life regularly, not only after a problem appears.",
      "Listen for feelings and context before jumping to solutions.",
      "Agree on how to handle difficult situations so asking for help stays safe.",
    ],
    cardSectionTitle: "Turn digital life into an ongoing conversation.",
    cardSectionIntro:
      "Use curiosity, active listening, and calm problem-solving to make the door easier to open.",
    informationSections: [
      {
        label: "KEEP THE DOOR OPEN",
        title: "Ask, listen, and stay curious.",
        intro:
          "A conversation does not have to begin with a warning. It can begin with genuine interest in what a child is learning, making, or experiencing online.",
        cards: [
          {
            number: "01",
            title: "Ask open questions",
            explanation:
              "Questions such as 'What do you like about this app?' or 'How did that make you feel?' invite more than a yes-or-no answer.",
            example:
              "During a car ride, a parent asks what makes a group chat helpful and what makes it stressful.",
            tip: "Ask one question, then leave space for the child to answer in their own way.",
          },
          {
            number: "02",
            title: "Listen before solving",
            explanation:
              "Reflect back what you heard before giving advice. Understanding the situation helps you avoid reacting to a small detail or making assumptions.",
            example:
              "A parent says, 'It sounds like you felt pressured to answer quickly,' before discussing next steps.",
            tip: "Validation is not the same as approving every choice.",
          },
          {
            number: "03",
            title: "Create regular check-ins",
            explanation:
              "Short conversations about ordinary online experiences build a relationship that can hold more difficult topics later.",
            example:
              "A family includes a weekly question about something interesting, confusing, or uncomfortable online.",
            tip: "Keep some conversations device-free and give your full attention.",
          },
        ],
      },
      {
        label: "HANDLE DIFFICULT MOMENTS",
        title: "Solve the problem without closing the conversation.",
        intro:
          "Parents can hold boundaries while still making it clear that honesty and help-seeking are valued.",
        cards: [
          {
            number: "01",
            title: "Start calm",
            explanation:
              "Take a breath and focus on safety. A strong first reaction can make a child hide the next problem instead of asking for help.",
            example:
              "After a concerning message, an adult says, 'I am glad you told me. Let us make this safer together.'",
            tip: "Delay the lecture until everyone understands what happened.",
          },
          {
            number: "02",
            title: "Make a shared plan",
            explanation:
              "Decide together whether to block, report, save evidence, change a setting, contact school staff, or ask a professional for help.",
            example:
              "A parent and teen list the safest next action, then agree when they will check that it worked.",
            tip: "Give the child a role so the plan builds skill, not only dependence.",
          },
          {
            number: "03",
            title: "Keep the follow-up",
            explanation:
              "Return to the issue later. Ask whether the situation changed, whether the child feels safer, and what the family should learn from it.",
            example:
              "Two days after reporting harassment, a parent checks in without demanding a full replay of the story.",
            tip: "A follow-up communicates that support lasts longer than the first conversation.",
          },
        ],
      },
      {
        label: "SAFETY AND BOUNDARIES",
        title: "Keep limits and trust in the same conversation.",
        intro:
          "Parents can set limits while keeping a calm route for honesty, problem-solving, and follow-up. The goal is a safer relationship with technology and with each other.",
        cards: [
          {
            number: "01",
            title: "Make the boundary clear",
            explanation:
              "Explain what the limit is, what safety concern or family priority it protects, and when the rule can be reviewed.",
            example:
              "A parent says that phones charge outside bedrooms to protect sleep, then agrees to revisit the plan after two weeks.",
            tip: "A reason and a review point make a limit easier to understand.",
          },
          {
            number: "02",
            title: "Keep honesty safe",
            explanation:
              "Let children know they can report a mistake, uncomfortable message, or risky situation without losing the chance to be heard.",
            example:
              "A teen admits they clicked a suspicious link, and the parent helps secure the account before discussing safer choices.",
            tip: "Start with 'Thank you for telling me' when immediate danger is not present.",
          },
          {
            number: "03",
            title: "Solve and follow up together",
            explanation:
              "Give the child a role in blocking, reporting, changing settings, or choosing a safer routine. Return later to see whether the plan helped.",
            example:
              "A parent and child report harassment together, check the privacy settings, and talk again after the weekend.",
            tip: "Follow-up turns one difficult moment into a skill for the next one.",
          },
        ],
      },
    ],
    lessons: [
      [
        "Talk before there is a crisis",
        "Regular questions about online activities make it easier for children to bring up harmful content, pressure, or mistakes later.",
      ],
      [
        "Listen for meaning, not only facts",
        "A child may need empathy, context, or help deciding what to do. Reflecting back what you heard can create space before advice.",
      ],
      [
        "Safety and boundaries can coexist",
        "Parents can set limits while keeping a calm route for honesty, problem-solving, and follow-up. The goal is a safer relationship with technology and with each other.",
      ],
    ],
    question: "What response best keeps communication open after a child reports a concerning online message?",
    answers: [
      "Take the device away immediately and refuse to discuss it",
      "Thank them for telling you, listen to what happened, and make a safety plan together",
      "Tell them to solve it alone so they learn independence",
    ],
    correct: 1,
    explanation:
      "A calm response helps a child keep asking for help. Parents can listen, set necessary boundaries, and involve the right support without shutting down communication.",
    action:
      "Ask one curious, judgment-free question about your child's online life and listen without interrupting.",
    cards: [
      {
        label: "ASK",
        title: "What is your online world like today?",
        body: "Open questions about interests, friends, pressure, and feelings can reveal more than a yes-or-no safety check.",
        prompt: "Ask one question that begins with what, how, or tell me about.",
      },
      {
        label: "LISTEN",
        title: "Reflect before you react.",
        body: "Repeat the feeling or situation you heard before offering a solution. Understanding comes before problem-solving.",
        prompt: "Try saying, 'It sounds like...' before giving advice.",
      },
      {
        label: "FOLLOW UP",
        title: "Safety and boundaries can coexist.",
        body: "Parents can set limits while keeping a calm route for honesty, problem-solving, and follow-up. The goal is a safer relationship with technology and with each other.",
        prompt: "Choose a low-pressure time to review one family rule together.",
      },
      {
        label: "PLAN",
        title: "Solve the next problem together.",
        body: "Give the child a role in blocking, reporting, changing settings, or choosing a safer routine so limits become learning opportunities.",
        prompt: "Agree on one safe next step and when you will check back.",
      },
    ],
    sources: [
      {
        label: "HealthyChildren.org: Talk frequently about your child's online world",
        url: "https://www.healthychildren.org/English/family-life/Media/Pages/talk-frequently.aspx",
      },
      {
        label: "HealthyChildren.org: Communication skills start at home",
        url: "https://www.healthychildren.org/English/family-life/family-dynamics/communication-discipline/Pages/Components-of-Good-Communication.aspx",
      },
      {
        label: "HealthyChildren.org: Kids and tech tips for parents",
        url: "https://www.healthychildren.org/English/family-life/Media/Pages/Tips-for-Parents-Digital-Age.aspx",
      },
    ],
  },
  {
    slug: "responsible-online-behavior",
    title: "Responsible Online Behavior",
    short: "Model digital citizenship.",
    description:
      "Help children practice privacy, kindness, consent, critical thinking, and accountability online.",
    icon: "heart",
    color: "coral",
    time: "5 min",
    intro:
      "Children learn responsible digital behavior through clear expectations and the examples adults set every day.",
    overview:
      "Responsible online behavior means treating people with respect, protecting privacy, checking information, asking before sharing, and repairing harm when a mistake happens. Parents do not need to know every platform to model these habits and practice them with their children.",
    keyPoints: [
      "Model the behavior you want children to use: pause, verify, protect privacy, and speak kindly.",
      "Teach children that online actions affect real people and can be copied or reshared.",
      "Use mistakes as opportunities to repair harm and learn a better next step.",
    ],
    cardSectionTitle: "Practice responsible digital citizenship.",
    cardSectionIntro:
      "Turn values into observable actions that parents and children can use across apps, games, group chats, and school platforms.",
    informationSections: [
      {
        label: "MODEL THE HABIT",
        title: "Show what responsible use looks like.",
        intro:
          "Children notice how adults use devices, talk about other people, and respond to mistakes. Modeling gives rules a real example.",
        cards: [
          {
            number: "01",
            title: "Protect privacy and consent",
            explanation:
              "Ask before posting a child's photo or story, avoid sharing private family details, and respect other people's boundaries online.",
            example:
              "A parent asks before sharing a family photo and removes a location tag that is not needed.",
            tip: "Treat a child's digital identity as something they help shape.",
          },
          {
            number: "02",
            title: "Pause before amplifying",
            explanation:
              "Adults can demonstrate how to check a source, date, evidence, and context before forwarding a surprising post.",
            example:
              "A parent says, 'I am going to check the official source before I send this to the family chat.'",
            tip: "Make the checking process visible instead of only saying 'be careful online.'",
          },
          {
            number: "03",
            title: "Use respectful language",
            explanation:
              "Kindness includes how people disagree, joke, correct misinformation, and respond when someone is hurt.",
            example:
              "A parent disagrees with a comment by addressing the idea without insulting the person who posted it.",
            tip: "Model repair: apologize, correct the post, and explain what you will do differently.",
          },
        ],
      },
      {
        label: "PRACTICE THE RESPONSE",
        title: "Teach a simple pause-and-repair loop.",
        intro:
          "Children will make mistakes online. A repeatable response helps them act responsibly instead of hiding or escalating the problem.",
        cards: [
          {
            number: "01",
            title: "Pause and assess",
            explanation:
              "Before posting or replying, ask whether the content is true enough, kind enough, private enough, and appropriate for the audience.",
            example:
              "A child saves a heated reply, checks the context, and returns after calming down.",
            tip: "A draft or pause button can be a safety tool.",
          },
          {
            number: "02",
            title: "Repair when harm happens",
            explanation:
              "If a child shares something hurtful or misleading, help them remove it, apologize where appropriate, correct the information, and involve an adult when needed.",
            example:
              "A child deletes a rumor, tells the group it was unverified, and checks on the person affected.",
            tip: "Repair focuses on impact and a safer next action, not humiliation.",
          },
          {
            number: "03",
            title: "Know when to escalate",
            explanation:
              "Bullying, threats, exploitation, financial harm, or serious privacy violations need support beyond a child managing the conversation alone.",
            example:
              "A parent helps save evidence and use the platform or school reporting process after repeated harassment.",
            tip: "Responsible behavior includes asking for help early.",
          },
        ],
      },
      {
        label: "REPAIR IS PART OF DIGITAL CITIZENSHIP",
        title: "Help mistakes become learning moments.",
        intro:
          "A mistake does not have to become a permanent identity. Help children take responsibility, make amends, and learn a better response.",
        cards: [
          {
            number: "01",
            title: "Name what happened",
            explanation:
              "Start with the observable action and its impact. Avoid labels that make a child feel they are the problem instead of someone who can make a better choice.",
            example:
              "Instead of 'You are careless,' say, 'That screenshot included someone's private message and it was shared without permission.'",
            tip: "Describe the behavior and impact before discussing consequences.",
          },
          {
            number: "02",
            title: "Make amends",
            explanation:
              "Depending on the situation, repair may mean deleting the post, correcting the information, apologizing, checking on the person affected, or reporting the harm.",
            example:
              "A child removes a rumor, tells the group it was unverified, and sends a sincere apology to the person involved.",
            tip: "Do not force contact if an apology could create more harm; ask a trusted adult for guidance.",
          },
          {
            number: "03",
            title: "Practice the better response",
            explanation:
              "Help the child decide what they can do next time: pause, ask permission, verify, save a draft, use a report tool, or ask for help.",
            example:
              "Before posting another group photo, the child checks who appears in it and asks the group first.",
            tip: "A specific replacement action is easier to remember than a general warning.",
          },
        ],
      },
    ],
    lessons: [
      [
        "Model what you want to teach",
        "Children learn from how adults handle privacy, disagreement, forwarded information, screen habits, and mistakes. Explain your choices when it helps them learn.",
      ],
      [
        "Make responsibility concrete",
        "Pause, check, ask permission, protect privacy, speak respectfully, repair harm, and ask for help are actions children can practice across platforms.",
      ],
      [
        "Repair is part of digital citizenship",
        "A mistake does not have to become a permanent identity. Help children take responsibility, make amends, and learn a better response.",
      ],
    ],
    question: "Which parent behavior best models responsible online citizenship?",
    answers: [
      "Forward every surprising post quickly so the family can discuss it",
      "Ask permission before sharing, check information, and repair mistakes openly",
      "Avoid all conversations about online behavior because children learn it alone",
    ],
    correct: 1,
    explanation:
      "Responsible behavior is learned through repeated examples: privacy and consent, critical thinking, respectful communication, and honest repair.",
    action:
      "Choose one online habit to model visibly this week, such as checking a source or asking before posting a family photo.",
    cards: [
      {
        label: "MODEL",
        title: "Let children see the pause.",
        body: "Show how you check a source, protect privacy, ask permission, or step away from a heated reply.",
        prompt: "Explain one responsible choice while you make it.",
      },
      {
        label: "REPAIR",
        title: "Repair is part of digital citizenship.",
        body: "A mistake does not have to become a permanent identity. Help children take responsibility, make amends, and learn a better response.",
        prompt: "Practice a short apology that names the impact and the repair.",
      },
      {
        label: "NEXT TIME",
        title: "Practice the better response.",
        body: "Decide what to do next time: pause, ask permission, verify, save a draft, report the harm, or ask for help.",
        prompt: "Choose one replacement action and rehearse it together.",
      },
      {
        label: "ESCALATE",
        title: "Know when help is needed.",
        body: "Threats, exploitation, serious harassment, and privacy violations deserve trusted adults and official support.",
        prompt: "Name the person or service your family would contact first.",
      },
    ],
    sources: [
      {
        label: "UNICEF: Netiquette for your child",
        url: "https://www.unicef.org/asia-pacific/place-for-parents/netiquettes-your-child",
      },
      {
        label: "UNICEF: Safeguarding your child in the digital age",
        url: "https://www.unicef.org/pakistan/media/5556/file/Safeguarding%2520Your%2520Child%2520In%2520The%2520Digital%2520Age.pdf",
      },
      {
        label: "HealthyChildren.org: Kids and tech tips for parents",
        url: "https://www.healthychildren.org/English/family-life/Media/Pages/Tips-for-Parents-Digital-Age.aspx",
      },
    ],
  },
];

export const topics: LearningTopic[] = [
  {
    slug: "social-media-learning",
    title: "Social Media Learning",
    short: "Create, explore, share.",
    description:
      "Use social platforms as creative tools for ideas, practice, collaboration, and learning.",
    icon: "compass",
    color: "lime",
    time: "6 min",
    intro:
      "Social media can be more than a place to scroll. Used intentionally, it can help you discover ideas, learn from other people, and make something of your own.",
    lessons: [
      [
        "Your feed can spark a creative mindset",
        "Research from Pew found that 71% of teens say social media is a place where they can show their creative side. Tutorials, ideas, and examples can help you experiment, collaborate, and find motivation—but inspiration only becomes creativity when you try something yourself.",
      ],
      [
        "Use the tools in a creator’s loop",
        "Recording captures an idea or a work-in-progress. Storage—like Pinterest boards or Instagram and TikTok drafts—keeps ideas organized for later. Sharing lets you exchange feedback and see new perspectives. Try this loop: capture → save → make a small change → share with people you trust.",
      ],
      [
        "Choose a platform for the job",
        "Pinterest is useful for collecting visual references and organizing boards. Instagram can support visual storytelling with images, captions, music, polls, and editing tools. YouTube can teach skills through tutorials and let you explain a project to someone else. Pick the tool that fits the work instead of chasing every trend.",
      ],
      [
        "Keep the online spark connected to real life",
        "Prioritize content that helps you practice a hobby or explore a question. Watch a tutorial, then close the app and draw, cook, code, write, or build. Notice if scrolling is crowding out sleep, friends, schoolwork, or hands-on practice. Social media works best as a launchpad for creativity, not a replacement for creating.",
      ],
    ],
    question:
      "Which plan uses social media to build creativity in a healthy way?",
    answers: [
      "Watch tutorial after tutorial without trying anything",
      "Save a few ideas, make your own small project, and share it with trusted people",
      "Copy a creator’s work exactly and post it as your own",
    ],
    correct: 1,
    explanation:
      "Creativity grows when you move from inspiration to making. Saving ideas, experimenting, and giving credit to original creators keeps the process active and respectful.",
    action:
      "Choose one creative interest. Save one useful tutorial, spend 20 minutes making something offline, and write down what you learned.",
    sources: [
      {
        label: "Pew Research Center: Teen life on social media in 2022",
        url: "https://www.pewresearch.org/internet/2022/11/16/connection-creativity-and-drama-teen-life-on-social-media-in-2022/",
      },
      {
        label: "Research on social media, creativity, and learning",
        url: "https://www.tandfonline.com/doi/full/10.1080/0144929X.2021.1917660",
      },
      {
        label: "AAP: The good and bad of social media",
        url: "https://www.aap.org/en/patient-care/media-and-children/center-of-excellence-on-social-media-and-youth-mental-health/the-good-and-bad-of-social-media-what-research-tells-us/",
      },
      {
        label: "AAP: The 5 Cs of Media Use",
        url: "https://www.aap.org/en/patient-care/media-and-children/center-of-excellence-on-social-media-and-youth-mental-health/5cs-resource-hub/",
      },
      {
        label: "AAP: Glossary of Digital Media Platforms",
        url: "https://www.aap.org/en/patient-care/media-and-children/center-of-excellence-on-social-media-and-youth-mental-health/glossary-of-digital-media-platforms/",
      },
    ],
    subtopics,
  },
  {
    slug: "social-media-awareness",
    title: "Social Media Awareness",
    short: "Scroll with intention.",
    description:
      "Recognize online influence and build a healthier relationship with your feed.",
    icon: "eye",
    color: "pink",
    time: "4 min",
    intro: "A little awareness can change how you feel after you scroll.",
    lessons: [
      [
        "Notice how content makes you feel",
        "A highlight reel leaves out ordinary days and difficult moments. If an account regularly makes you feel worse about yourself, mute or unfollow it. Your attention is yours to manage.",
      ],
      [
        "Recognize persuasion",
        "An influencer’s recommendation may be an advertisement. Look for sponsorship disclosures, ask who benefits, and separate a personal opinion from evidence.",
      ],
      [
        "Create space for offline life",
        "Try turning off nonessential notifications and choosing a stopping point before you open an app. Make room for sleep, hobbies, friends, and activities that help you feel grounded.",
      ],
    ],
    question:
      "Your feed keeps making you compare your life with other people’s. What is a useful next step?",
    answers: [
      "Keep scrolling until you feel better",
      "Assume their posts show their whole life",
      "Mute unhelpful accounts and take a break",
    ],
    correct: 2,
    explanation:
      "Curating your feed and stepping away can give you perspective. You do not owe any account your attention.",
    action:
      "Choose one account that helps you learn and one notification you can switch off.",
    subtopics: awarenessSubtopics,
  },
  {
    slug: "parental-guidance-digital-parenting",
    title: "Parental Guidance & Digital Parenting",
    short: "Guide with trust.",
    description:
      "Build family habits that balance boundaries, independence, communication, and care.",
    icon: "heart",
    color: "green",
    time: "6 min",
    intro:
      "Digital parenting is less about perfect control and more about helping children build confidence, judgment, and safe habits online.",
    lessons: [
      [
        "Build a family media plan",
        "Set boundaries around sleep, school, movement, relationships, and rest. Make the plan specific enough to practice, then revisit it as routines and responsibilities change.",
      ],
      [
        "Supervise with purpose",
        "Parental controls can support content, contact, privacy, purchase, and time goals. Explain what a tool does, protect the child's data, and pair monitoring with coaching and trust.",
      ],
      [
        "Keep communication open",
        "Regular, judgment-free conversations help children share online experiences before they become crises. Listen first, make a safety plan together, and model responsible behavior yourself.",
      ],
    ],
    question: "Which approach best supports healthy digital parenting?",
    answers: [
      "Use hidden monitoring for every activity and avoid discussing it",
      "Create shared routines, explain focused supervision, and keep conversations open",
      "Leave children to solve every online problem without adult support",
    ],
    correct: 1,
    explanation:
      "Digital parenting works best when boundaries, transparent tools, communication, and adult role modeling work together.",
    /*
    explanation:
      "Login codes can let someone into your account. Use the platform’s official help flow instead of sharing a code in a message.",
    */
    action:
      "Choose one family media routine to discuss together and one platform safety feature to explore with your child.",
    sources: [
      {
        label: "HealthyChildren.org: How to make a family media plan",
        url: "https://www.healthychildren.org/english/family-life/media/pages/how-to-make-a-family-media-use-plan.aspx",
      },
      {
        label: "HealthyChildren.org: Talk frequently about your child's online world",
        url: "https://www.healthychildren.org/English/family-life/Media/Pages/talk-frequently.aspx",
      },
      {
        label: "UNICEF: Supporting a child through a negative online experience",
        url: "https://www.unicef.org/parenting/child-care/supporting-child-negative-online-experience",
      },
    ],
    subtopics: parentalGuidanceSubtopics,
  },
];
