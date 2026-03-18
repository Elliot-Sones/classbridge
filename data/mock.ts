export interface SummaryItem {
  icon: string;
  iconClass: string;
  title: string;
  description: string;
}

export interface Message {
  sender: string;
  time: string;
  text: string;
  sent?: boolean;
}

export interface Resource {
  icon: string;
  iconClass: string;
  name: string;
  description: string;
  url: string;
}

export interface Activity {
  badge: string;
  badgeClass: string;
  title: string;
  description: string;
  materials?: string[];
  steps?: string[];
}

export interface ProgressItem {
  subject: string;
  fillClass: string;
  percent: number;
}

export interface Assignment {
  title: string;
  due: string;
  dueSoon?: boolean;
  completed?: boolean;
}

export interface Student {
  initials: string;
  color: string;
  name: string;
  status: string;
  statusClass: string;
}

export interface CalendarDay {
  label: string;
  slots: { time: string; available: boolean; fullLabel: string }[];
}

export interface ResourceLibItem {
  emoji: string;
  name: string;
  attachment: string;
  url: string;
}

export interface Testimonial {
  quote: string;
  initials: string;
  color: string;
  name: string;
  role: string;
}

export interface Feature {
  icon: string;
  iconClass: string;
  title: string;
  description: string;
}

export interface ProblemSolutionItem {
  icon: string;
  text: string;
}

export const parentSummaries: SummaryItem[] = [
  {
    icon: "\u{1F522}",
    iconClass: "math",
    title: "Math \u2014 Multiplication Facts (\u00D77 and \u00D78)",
    description: "Today we practiced multiplication tables for 7 and 8. Emma did great with the \u00D77 facts! She\u2019s still building confidence with \u00D78, which is totally normal. Try practicing with the linked flashcards at home \u2014 just 5 minutes helps!",
  },
  {
    icon: "\u{1F331}",
    iconClass: "science",
    title: "Science \u2014 Parts of a Plant",
    description: "We labeled the parts of a plant (roots, stem, leaves, flower) and started our bean seed germination experiment. Each student planted a bean in a clear cup so we can watch the roots grow. Emma was very excited about this!",
  },
  {
    icon: "\u{1F4D6}",
    iconClass: "reading",
    title: "Reading \u2014 Charlotte\u2019s Web, Chapters 5\u20136",
    description: "We read chapters 5\u20136 aloud and discussed friendship themes. Great discussion question for home: \u201CWhy do you think Charlotte decided to help Wilbur?\u201D",
  },
  {
    icon: "\u{1F30E}",
    iconClass: "social",
    title: "Social Studies \u2014 Community Helpers",
    description: "We talked about different community helpers (firefighters, doctors, mail carriers). Ask Emma about the community helper she chose for her mini-project!",
  },
];

export const studentSummaries: SummaryItem[] = [
  {
    icon: "\u{1F522}",
    iconClass: "math",
    title: "Math \u2014 Multiplication (\u00D77 and \u00D78)",
    description: "We practiced our 7 and 8 times tables. Remember the trick: for \u00D78, just double the \u00D74 answer!",
  },
  {
    icon: "\u{1F331}",
    iconClass: "science",
    title: "Science \u2014 We Planted Beans!",
    description: "We put beans in clear cups to watch them grow. Check your bean every day and draw what you see in your science journal!",
  },
  {
    icon: "\u{1F4D6}",
    iconClass: "reading",
    title: "Reading \u2014 Charlotte\u2019s Web",
    description: "We read chapters 5 and 6. Think about: Why did Charlotte want to help Wilbur?",
  },
];

export const parentMessages: Message[] = [
  {
    sender: "Mrs. Sones",
    time: "Today, 3:20 PM",
    text: "Hi! Just wanted to let you know Emma did a wonderful job presenting her community helper project today. She was confident and well-prepared \u2014 you should be proud! \u{1F31F}",
  },
  {
    sender: "Mrs. Sones",
    time: "Monday, 2:45 PM",
    text: "Quick heads up \u2014 we\u2019re starting the plant life cycle unit this week. If you have any clear cups and beans at home, Emma can start a second experiment to compare! Materials list is in the activity section below.",
  },
];

export const studentMessages: Message[] = [
  {
    sender: "You",
    time: "Today, 11:30 AM",
    text: "Mrs. Sones, I don\u2019t understand the \u00D78 table very well. Can you show me again?",
    sent: true,
  },
  {
    sender: "Mrs. Sones",
    time: "Today, 12:15 PM",
    text: "Of course, Emma! Here\u2019s a helpful trick: for 8\u00D76, think of it as double 4\u00D76. So 4\u00D76 = 24, then double it = 48! I\u2019ll go over more tricks with you tomorrow during math time. You\u2019re doing great \u2014 keep practicing! \u{1F4AA}",
  },
];

export const teacherMessages: Message[] = [
  {
    sender: "Emma W. (Student)",
    time: "Today, 11:30 AM",
    text: "Mrs. Sones, I don\u2019t understand the \u00D78 table very well. Can you show me again?",
  },
  {
    sender: "Parent of Liam B.",
    time: "Today, 9:15 AM",
    text: "Hi Mrs. Sones \u2014 Liam mentioned the plant experiment. We\u2019d love to do one at home too. Are there specific instructions we should follow?",
  },
  {
    sender: "Parent of Sophia T.",
    time: "Yesterday, 4:30 PM",
    text: "Thank you for the multiplication tips! Sophia has been practicing and is much more confident now. \u{1F60A}",
  },
];

export const parentResources: Resource[] = [
  { icon: "\u{1F49B}", iconClass: "khan", name: "Khan Academy", description: "Multiplication & division practice", url: "https://www.khanacademy.org/math/arithmetic/arith-review-multiply-divide" },
  { icon: "\u{1F3A5}", iconClass: "pbs", name: "PBS LearningMedia", description: "Plant life cycle videos", url: "https://pbslearningmedia.org" },
  { icon: "\u{1F30D}", iconClass: "natgeo", name: "National Geographic Kids", description: "Science articles & activities", url: "https://kids.nationalgeographic.com" },
  { icon: "\u{1F4D6}", iconClass: "scholastic", name: "Scholastic Parents", description: "Charlotte\u2019s Web reading guide", url: "https://www.scholastic.com/parents/" },
  { icon: "\u{1F3B2}", iconClass: "mathplay", name: "Math Playground", description: "Fun multiplication games", url: "https://www.mathplayground.com" },
  { icon: "\u{1F4DA}", iconClass: "readworks", name: "ReadWorks", description: "Reading comprehension passages", url: "https://www.readworks.org" },
];

export const studentResources: Resource[] = [
  { icon: "\u{1F3B2}", iconClass: "mathplay", name: "Math Playground", description: "Practice multiplication with fun games!", url: "https://www.mathplayground.com" },
  { icon: "\u{1F49B}", iconClass: "khan", name: "Khan Academy", description: "Multiplication video lessons", url: "https://www.khanacademy.org/math/arithmetic/arith-review-multiply-divide" },
  { icon: "\u{1F30D}", iconClass: "natgeo", name: "Nat Geo Kids", description: "Cool plant and animal articles", url: "https://kids.nationalgeographic.com" },
  { icon: "\u{1F4DA}", iconClass: "readworks", name: "ReadWorks", description: "Reading practice stories", url: "https://www.readworks.org" },
];

export const activities: Activity[] = [
  {
    badge: "Hands-On Activity",
    badgeClass: "hands-on",
    title: "Plant Germination Experiment (Home Edition)",
    description: "Grow your own bean plant at home alongside the classroom experiment! Compare growth rates and conditions. Take photos to share with the class.",
    materials: ["Clear plastic cup", "Paper towels", "3-4 dried beans", "Water", "Sunny windowsill"],
    steps: [
      "Fold a wet paper towel and line the inside of the cup",
      "Place beans between the towel and the cup wall",
      "Add a small amount of water to the bottom",
      "Place in a sunny window and observe daily",
      "Take a photo each day to track growth",
    ],
  },
  {
    badge: "Homework",
    badgeClass: "homework",
    title: "Multiplication Practice Worksheet (\u00D77 and \u00D78)",
    description: "20 practice problems focusing on multiplication facts. Due Thursday. Tip from Mrs. Sones: practice the \u00D78 table using the finger trick!",
  },
  {
    badge: "Reading",
    badgeClass: "reading",
    title: "Charlotte\u2019s Web \u2014 Read Chapters 7\u20138",
    description: "Continue reading at home. Discussion question: \u201CWhat does Charlotte\u2019s plan tell us about being a good friend?\u201D Due Friday.",
  },
];

export const weeklyProgress: ProgressItem[] = [
  { subject: "Math", fillClass: "math", percent: 72 },
  { subject: "Science", fillClass: "science", percent: 85 },
  { subject: "Reading", fillClass: "reading", percent: 90 },
  { subject: "Social Studies", fillClass: "social", percent: 60 },
];

export const assignments: Assignment[] = [
  { title: "Multiplication Worksheet (\u00D77, \u00D78)", due: "Due Thursday", dueSoon: true },
  { title: "Read Charlotte\u2019s Web Ch. 7\u20138", due: "Due Friday" },
  { title: "Draw bean plant in Science Journal", due: "Due Friday" },
  { title: "Community Helper Mini-Project", due: "Completed!", completed: true },
  { title: "Take photo of bean plant (home)", due: "Due next Monday" },
];

export const students: Student[] = [
  { initials: "EW", color: "#3b82f6", name: "Emma W.", status: "New message", statusClass: "new-msg" },
  { initials: "LB", color: "#8b5cf6", name: "Liam B.", status: "Parent msg", statusClass: "new-msg" },
  { initials: "ST", color: "#2d8a4e", name: "Sophia T.", status: "Active today", statusClass: "active" },
  { initials: "NR", color: "#e8634a", name: "Noah R.", status: "Active today", statusClass: "active" },
  { initials: "AJ", color: "#f59e0b", name: "Ava J.", status: "Last seen yesterday", statusClass: "pending" },
  { initials: "MC", color: "#6366f1", name: "Mason C.", status: "Active today", statusClass: "active" },
  { initials: "OL", color: "#ec4899", name: "Olivia L.", status: "Last seen yesterday", statusClass: "pending" },
  { initials: "JD", color: "#14b8a6", name: "James D.", status: "Active today", statusClass: "active" },
];

export const calendarDays: CalendarDay[] = [
  {
    label: "Wednesday, March 18",
    slots: [
      { time: "8:00 AM", available: false, fullLabel: "Wed Mar 18, 8:00 AM" },
      { time: "8:30 AM", available: true, fullLabel: "Wed Mar 18, 8:30 AM" },
      { time: "3:00 PM", available: false, fullLabel: "Wed Mar 18, 3:00 PM" },
      { time: "3:30 PM", available: true, fullLabel: "Wed Mar 18, 3:30 PM" },
      { time: "4:00 PM", available: true, fullLabel: "Wed Mar 18, 4:00 PM" },
    ],
  },
  {
    label: "Thursday, March 19",
    slots: [
      { time: "8:00 AM", available: true, fullLabel: "Thu Mar 19, 8:00 AM" },
      { time: "8:30 AM", available: true, fullLabel: "Thu Mar 19, 8:30 AM" },
      { time: "3:00 PM", available: false, fullLabel: "Thu Mar 19, 3:00 PM" },
      { time: "3:30 PM", available: false, fullLabel: "Thu Mar 19, 3:30 PM" },
      { time: "4:00 PM", available: true, fullLabel: "Thu Mar 19, 4:00 PM" },
      { time: "4:30 PM", available: true, fullLabel: "Thu Mar 19, 4:30 PM" },
    ],
  },
  {
    label: "Friday, March 20",
    slots: [
      { time: "8:00 AM", available: true, fullLabel: "Fri Mar 20, 8:00 AM" },
      { time: "8:30 AM", available: false, fullLabel: "Fri Mar 20, 8:30 AM" },
      { time: "3:00 PM", available: true, fullLabel: "Fri Mar 20, 3:00 PM" },
      { time: "3:30 PM", available: true, fullLabel: "Fri Mar 20, 3:30 PM" },
      { time: "4:00 PM", available: true, fullLabel: "Fri Mar 20, 4:00 PM" },
    ],
  },
  {
    label: "Monday, March 23",
    slots: [
      { time: "8:00 AM", available: true, fullLabel: "Mon Mar 23, 8:00 AM" },
      { time: "8:30 AM", available: true, fullLabel: "Mon Mar 23, 8:30 AM" },
      { time: "3:00 PM", available: false, fullLabel: "Mon Mar 23, 3:00 PM" },
      { time: "3:30 PM", available: true, fullLabel: "Mon Mar 23, 3:30 PM" },
      { time: "4:00 PM", available: true, fullLabel: "Mon Mar 23, 4:00 PM" },
      { time: "4:30 PM", available: true, fullLabel: "Mon Mar 23, 4:30 PM" },
    ],
  },
];

export const stats = [
  { number: "24", label: "Students" },
  { number: "18", label: "Parents Active" },
  { number: "5", label: "New Messages" },
  { number: "92%", label: "Engagement" },
];

export const teacherResources: ResourceLibItem[] = [
  { emoji: "\u{1F49B}", name: "Khan Academy \u2014 Multiplication & Division", attachment: "Attached to: Math (Week of Mar 16)", url: "https://www.khanacademy.org/math/arithmetic/arith-review-multiply-divide" },
  { emoji: "\u{1F3A5}", name: "PBS LearningMedia \u2014 Plant Life Cycles", attachment: "Attached to: Science (Week of Mar 16)", url: "https://pbslearningmedia.org" },
  { emoji: "\u{1F30D}", name: "National Geographic Kids", attachment: "Attached to: Science (Ongoing)", url: "https://kids.nationalgeographic.com" },
  { emoji: "\u{1F4D6}", name: "Scholastic \u2014 Charlotte\u2019s Web Guide", attachment: "Attached to: Reading (Week of Mar 16)", url: "https://www.scholastic.com/parents/" },
  { emoji: "\u{1F3B2}", name: "Math Playground", attachment: "Attached to: Math (Ongoing)", url: "https://www.mathplayground.com" },
  { emoji: "\u{1F4DA}", name: "ReadWorks \u2014 Comprehension Passages", attachment: "Attached to: Reading (Ongoing)", url: "https://www.readworks.org" },
];

export const testimonials: Testimonial[] = [
  {
    quote: "I finally know what my daughter is learning in class. The daily summaries are a game-changer \u2014 I can actually help with homework without guessing.",
    initials: "MR",
    color: "#3b82f6",
    name: "Maria R.",
    role: "Parent of a 3rd grader",
  },
  {
    quote: "My shy students actually ask for help now. The private messaging removed the fear of looking \u2018dumb\u2019 in front of the class. It\u2019s been incredible.",
    initials: "JS",
    color: "#2d8a4e",
    name: "Ms. Johnson",
    role: "4th Grade Teacher",
  },
  {
    quote: "The hands-on activity guides are wonderful. My son and I did the plant experiment together \u2014 he was so excited to show his teacher the next day.",
    initials: "DK",
    color: "#e8634a",
    name: "David K.",
    role: "Parent of a 2nd grader",
  },
];

export const features: Feature[] = [
  {
    icon: "\u{1F4DA}",
    iconClass: "blue",
    title: "Daily Learning Summaries",
    description: "Know exactly what your child learned today \u2014 from math concepts to science experiments \u2014 written by their teacher in plain language.",
  },
  {
    icon: "\u{1F512}",
    iconClass: "green",
    title: "Private Communication",
    description: "Message the teacher privately. No public posts, no judgment. Students can ask for help without peers seeing. Only you and the teacher.",
  },
  {
    icon: "\u{1F393}",
    iconClass: "coral",
    title: "Curated Home Resources",
    description: "Hand-picked videos, practice exercises, and activities from trusted sources like Khan Academy and PBS \u2014 matched to what\u2019s being taught this week.",
  },
  {
    icon: "\u270D\uFE0F",
    iconClass: "amber",
    title: "Hands-On Activity Guides",
    description: "Fun take-home activities with materials lists and step-by-step instructions. Learn together as a family with activities that reinforce classroom lessons.",
  },
];

export const problems: ProblemSolutionItem[] = [
  { icon: "\u{1F636}", text: "Parents ask \u201CWhat did you learn today?\u201D and get \u201CNothing\u201D as an answer" },
  { icon: "\u{1F62C}", text: "Students afraid to ask questions publicly on Google Classroom" },
  { icon: "\u{1F616}", text: "Parents accidentally teach different methods, confusing kids" },
  { icon: "\u{1F61E}", text: "No way for parents to participate in classroom activities from home" },
];

export const solutions: ProblemSolutionItem[] = [
  { icon: "\u{1F4DD}", text: "Teacher posts a daily summary so parents know exactly what was covered" },
  { icon: "\u{1F510}", text: "Private messaging lets students get help without fear of embarrassment" },
  { icon: "\u{1F393}", text: "Curated resources aligned with classroom methods prevent confusion" },
  { icon: "\u{1F468}\u200D\u{1F469}\u200D\u{1F467}", text: "Take-home activity guides let families extend learning together" },
];
