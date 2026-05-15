const SAMPLES = [
  // ── TWEETS: AI ──────────────────────────────────────────────────────────────
  {
    id: 1, type: "tweet", isAI: true,
    author: "@growth_mindset_daily", avatar: "🚀",
    text: "The intersection of curiosity and persistence is where all meaningful work happens.\n\nMost people quit right before the breakthrough.\n\nKeep going. 💪 #growth #mindset #buildinpublic"
  },
  {
    id: 2, type: "tweet", isAI: true,
    author: "@techfounder_tips", avatar: "💡",
    text: "5 things no one tells you about building a startup:\n\n1. The idea is the easy part\n2. Execution separates winners from dreamers\n3. Your network IS your net worth\n4. Failure is just feedback\n5. Consistency > intensity\n\nSave this. You'll need it. 🔖"
  },
  {
    id: 3, type: "tweet", isAI: true,
    author: "@productivityhacks", avatar: "⚡",
    text: "Stop waiting for the perfect moment.\n\nThe perfect moment is NOW.\n\nYour future self will thank you for starting today. 🌟 #productivity #success #motivation"
  },
  {
    id: 4, type: "tweet", isAI: true,
    author: "@deepthought_tech", avatar: "🧠",
    text: "AI isn't replacing humans — it's amplifying human potential.\n\nThe question isn't: will AI take my job?\n\nThe real question is: how will I use AI to 10x my output?\n\nThose who adapt will thrive. Those who don't... won't. 🤔"
  },
  {
    id: 5, type: "tweet", isAI: true,
    author: "@leadershipunlocked", avatar: "🏆",
    text: "The best leaders I've ever met had one thing in common:\n\nThey listened more than they spoke.\n\nIn a world obsessed with visibility, silence is a superpower. 🌊 #leadership #success"
  },
  {
    id: 6, type: "tweet", isAI: true,
    author: "@entrepreneurmode", avatar: "🔥",
    text: "Unpopular opinion: Work-life balance is a myth.\n\nWhat actually exists is work-life integration.\n\nWhen you love what you do, the line disappears. ✨\n\nAgree or disagree? Drop a 🙌 or 👎"
  },
  {
    id: 7, type: "tweet", isAI: true,
    author: "@dailyinsight_co", avatar: "💼",
    text: "Here's what separates top performers from everyone else:\n\nThey don't manage time — they manage energy.\n\nSchedule your hardest tasks when you're at peak energy.\n\nWatch what happens. 📈 #performance #habits"
  },
  {
    id: 8, type: "tweet", isAI: true,
    author: "@buildingempires", avatar: "🌐",
    text: "The most underrated skill in 2024:\n\nKnowing when to stop optimizing and just ship.\n\nDone is better than perfect. Always. 🚢 #buildinpublic #saas #startup"
  },
  {
    id: 9, type: "tweet", isAI: true,
    author: "@mindfulprofessional", avatar: "🎯",
    text: "Gratitude isn't just a feeling — it's a strategy.\n\nEvery morning I write 3 things I'm grateful for.\n\nIn 6 months, my anxiety dropped. My output tripled.\n\nCoincidence? I think not. 🙏 #mentalhealth #success"
  },
  {
    id: 10, type: "tweet", isAI: true,
    author: "@codewisdom_dev", avatar: "💻",
    text: "The best code is the code you don't have to write.\n\nSimplicity isn't laziness — it's mastery.\n\nSenior devs delete more code than they write. 🔥 #programming #softwaredevelopment"
  },

  // ── TWEETS: HUMAN ───────────────────────────────────────────────────────────
  {
    id: 11, type: "tweet", isAI: false,
    author: "@marzipan_dev", avatar: "🧁",
    text: "my PR has been open for 11 days and every time someone comments 'looks good, minor nit' and then adds a 40-line refactor suggestion"
  },
  {
    id: 12, type: "tweet", isAI: false,
    author: "@kelseywanders", avatar: "🗺️",
    text: "flew into the wrong Portland once (Maine, not Oregon) and didn't realize until I was already at baggage claim. anyway that's why I always double-check now"
  },
  {
    id: 13, type: "tweet", isAI: false,
    author: "@dariajokes", avatar: "🐸",
    text: "my coworker just said 'we should move fast and break things' about a healthcare application and I had to go for a very long walk"
  },
  {
    id: 14, type: "tweet", isAI: false,
    author: "@thebreadmonger", avatar: "🍞",
    text: "tried to explain sourdough starter to my dad and he looked at me like I was describing a hostage situation which honestly is accurate"
  },
  {
    id: 15, type: "tweet", isAI: false,
    author: "@heliozygote", avatar: "🌞",
    text: "the specific exhaustion of attending a meeting that should have been an email that was responding to a slack that was summarizing a doc that no one read"
  },
  {
    id: 16, type: "tweet", isAI: false,
    author: "@plinko_ceo", avatar: "🎰",
    text: "hot take: standup meetings are for managers not for developers. change my mind (you can't)"
  },
  {
    id: 17, type: "tweet", isAI: false,
    author: "@annaoftheswamp", avatar: "🌿",
    text: "opened a 'quick question' slack message from my PM and it was 4 paragraphs and a loom video. logging off"
  },
  {
    id: 18, type: "tweet", isAI: false,
    author: "@quantumtoaster", avatar: "🍞",
    text: "nothing will humble you like googling a bug for 2 hours and finding the solution in a forum post from 2009 where the answer is 'nevermind fixed it'"
  },
  {
    id: 19, type: "tweet", isAI: false,
    author: "@felix_types", avatar: "⌨️",
    text: "interviewer: where do you see yourself in 5 years\nme: not doing behavioral interviews I can tell you that much"
  },
  {
    id: 20, type: "tweet", isAI: false,
    author: "@notarobot_probably", avatar: "🤷",
    text: "love when a recipe says 'quick and easy, done in 15 minutes' and step 1 is 'the day before, marinate overnight'"
  },

  // ── LINKEDIN: AI ────────────────────────────────────────────────────────────
  {
    id: 21, type: "linkedin", isAI: true,
    author: "Jessica T. | Growth Leader | Ex-FAANG", avatar: "💼",
    text: "I left my six-figure job at 32 to pursue my passion.\n\nEveryone thought I was crazy.\n\nHere's what I learned in 18 months:\n\n• Discomfort is the price of growth\n• Your network is your net worth\n• Execution beats perfection every time\n• The journey isn't linear — and that's okay\n\nThe best decision I ever made.\n\nWhat risk did you take that changed everything? Drop it below. 👇"
  },
  {
    id: 22, type: "linkedin", isAI: true,
    author: "Marcus W. | CEO & Founder | Speaker", avatar: "🎤",
    text: "I failed 3 businesses before building a $10M company.\n\nHere's what failure actually taught me:\n\n1. Failure isn't the opposite of success — it's part of it\n2. The market is always right, even when it hurts\n3. Team > idea, always\n4. Cash flow is king\n5. Your mindset determines your ceiling\n\nStop fearing failure. Start learning from it.\n\nTag someone who needs to hear this today. ♻️"
  },
  {
    id: 23, type: "linkedin", isAI: true,
    author: "Priya S. | HR Director | Culture Architect", avatar: "🌱",
    text: "We don't have a talent problem. We have a leadership problem.\n\nAfter 15 years in HR, here's what I know:\n\n→ People don't leave companies. They leave managers.\n→ Culture isn't a perk. It's a strategy.\n→ The best retention tool is genuine recognition.\n→ Psychological safety drives innovation.\n\nInvest in your leaders. Watch your retention numbers transform.\n\nAgree? What would you add? 💬"
  },
  {
    id: 24, type: "linkedin", isAI: true,
    author: "Derek L. | Sales Excellence | Revenue Growth", avatar: "📈",
    text: "The top 1% of salespeople do something different.\n\nThey don't sell products.\n\nThey sell outcomes.\n\nHere's the game-changer framework I use:\n\n✅ Understand the pain deeply\n✅ Map the solution to the outcome\n✅ Quantify the impact in dollars\n✅ Make the no more expensive than the yes\n\nSales is about value creation, not persuasion.\n\nSave this for your next discovery call. 🔖"
  },
  {
    id: 25, type: "linkedin", isAI: true,
    author: "Aisha M. | Future of Work | Remote Advocate", avatar: "🌍",
    text: "Remote work didn't break company culture.\n\nBad management was always the problem.\n\nThe companies calling people back to the office aren't solving a culture problem. They're avoiding a leadership problem.\n\nThe data is clear:\n→ Productivity is up\n→ Talent pools are global\n→ Employee satisfaction is higher\n\nThe future of work is flexible. The leaders who embrace it will win the talent war.\n\nWhat's your take? 🤔"
  },
  {
    id: 26, type: "linkedin", isAI: true,
    author: "Noah R. | Product Visionary | Angel Investor", avatar: "🦅",
    text: "I've reviewed 500+ pitch decks.\n\nHere's what separates the ones that get funded:\n\nIt's not the idea.\nIt's not the market size.\nIt's not even the deck.\n\nIt's the founder's ability to articulate WHY they are the only person who can solve this problem.\n\nConviction is contagious.\n\nBuilders: what's the story only YOU can tell? 🚀"
  },
  {
    id: 27, type: "linkedin", isAI: true,
    author: "Sarah K. | Mindful Leadership | Keynote Speaker", avatar: "🧘",
    text: "Burnout isn't a badge of honor. It's a warning sign.\n\nI ignored it for two years. My body finally said enough.\n\nHere's what I wish I had known:\n\n🔹 Rest is productive\n🔹 Boundaries are a business strategy\n🔹 Saying no is leadership\n🔹 Your health IS your wealth\n\nTake care of yourself first. Everything else follows.\n\nWho needed to hear this today? Tag them. ❤️"
  },

  // ── LINKEDIN: HUMAN ─────────────────────────────────────────────────────────
  {
    id: 28, type: "linkedin", isAI: false,
    author: "Carlos Mendez | Infrastructure Eng", avatar: "🔧",
    text: "We had a 4-hour outage last Tuesday. The postmortem was genuinely uncomfortable — turns out two separate on-call rotations each assumed the other team was handling alerts for the shared service. Writing up the blameless report took longer than the fix. The hard part isn't the technical fix, it's agreeing on what the system boundary actually is."
  },
  {
    id: 29, type: "linkedin", isAI: false,
    author: "Tamsin Okafor | UX Research", avatar: "🔍",
    text: "Spent three months advocating for a user research round before we shipped a major redesign. Got pushed back at every sprint review — 'we don't have time.' We shipped. Within six weeks, support tickets were up 40% for the exact flows we hadn't tested. Now we have time for research AND a redesign. Funny how that works."
  },
  {
    id: 30, type: "linkedin", isAI: false,
    author: "Ben Hargrove | Principal Engineer", avatar: "🛠️",
    text: "Counterintuitive thing I've learned after 12 years: the engineers who are hardest to replace aren't the ones who write the most code. They're the ones who remember why a decision was made three years ago and can explain it to someone joining today. We underinvest massively in institutional memory."
  },
  {
    id: 31, type: "linkedin", isAI: false,
    author: "Linnea Bjork | Product Manager", avatar: "📋",
    text: "Just wrapped up a product review where I had to kill a feature I personally championed for two quarters. The data was clear. It was a bad feeling and the right call. I'm writing this partly to remind myself that being willing to be wrong in public is actually the job, not a failure mode."
  },
  {
    id: 32, type: "linkedin", isAI: false,
    author: "Rajiv Patel | Staff Data Scientist", avatar: "📊",
    text: "The most useful thing I do for junior data scientists on my team isn't reviewing their models. It's helping them write emails explaining the limitations of their models to stakeholders who don't want to hear about limitations. That skill is not taught anywhere and it's more than half the job."
  },
  {
    id: 33, type: "linkedin", isAI: false,
    author: "Miriam Castillo | Engineering Manager", avatar: "👷",
    text: "Honest reflection after switching from IC to manager: I was not prepared for how much of the job is just absorbing bad news before it gets to my team and figuring out what's actually signal vs. what's noise from leadership. Nobody wrote that in the job description."
  },
  {
    id: 34, type: "linkedin", isAI: false,
    author: "Theo Winslow | DevOps Lead", avatar: "⚙️",
    text: "We finally retired a cron job today that had been running since 2011. No one knew what it did. We were all too scared to turn it off. We turned it off six months ago in staging, nothing broke, turned it off in prod last week, nothing broke. It generated a CSV that was emailed to an address that no longer exists. 13 years."
  },

  // ── BLOG: AI ────────────────────────────────────────────────────────────────
  {
    id: 35, type: "blog", isAI: true,
    author: "Brandon K.", avatar: "✍️",
    text: "In today's fast-paced digital landscape, productivity has become the currency of success. But what separates high performers from the rest isn't working harder — it's working smarter. The most successful individuals have mastered the art of deep work, ruthlessly eliminating distractions while diving deep into the tasks that truly move the needle. Whether you're an entrepreneur, a creative, or a corporate professional, the principles remain the same: focus, intentionality, and relentless execution. In this post, we'll explore five game-changing strategies to transform your productivity and unlock your full potential."
  },
  {
    id: 36, type: "blog", isAI: true,
    author: "Insight Daily", avatar: "📰",
    text: "Leadership has evolved dramatically in the modern era. Gone are the days when a corner office and a title were enough to command respect. Today's most effective leaders understand that authentic connection is the foundation of everything. They listen actively, communicate with radical transparency, and create psychological safety — an environment where team members feel empowered to take risks without fear of judgment. At the end of the day, the measure of a great leader isn't found in quarterly reports. It's found in the quiet confidence of a team that knows they are seen, heard, and valued."
  },
  {
    id: 37, type: "blog", isAI: true,
    author: "FutureTech Weekly", avatar: "🔭",
    text: "Artificial intelligence is no longer a distant promise — it's reshaping industries at an unprecedented pace. From healthcare diagnostics to financial modeling, the applications are both vast and deeply transformative. But perhaps the most profound shift isn't happening in boardrooms or research labs. It's happening in how individuals relate to their own capabilities. As AI handles routine cognitive tasks, humans are freed to focus on what we do best: empathy, creativity, and complex judgment. The future belongs not to those who fear AI, but to those who learn to collaborate with it."
  },
  {
    id: 38, type: "blog", isAI: true,
    author: "MindBodySuccess", avatar: "🧘",
    text: "We live in a culture that glorifies busyness. Packed calendars, back-to-back meetings, and the relentless ping of notifications have become status symbols rather than warning signs. But science tells a different story. Chronic stress doesn't just impair performance — it literally shrinks the prefrontal cortex, the seat of decision-making and creativity. High performers who sustain excellence over decades share a counterintuitive secret: they treat rest as a performance variable, not a luxury. Strategic recovery isn't slacking off. It's the foundation that makes everything else possible."
  },
  {
    id: 39, type: "blog", isAI: true,
    author: "The Growth Lab", avatar: "📈",
    text: "Building a personal brand in 2024 isn't optional — it's essential. In a world where attention is the scarcest resource, your brand is the bridge between your expertise and your audience. But here's what most people get wrong: personal branding isn't about self-promotion. It's about consistent, generous value creation. The creators who win long-term aren't those who shout the loudest. They're the ones who show up consistently, share authentically, and prioritize their audience's success over their own recognition. Start there, and the rest will follow."
  },
  {
    id: 40, type: "blog", isAI: true,
    author: "Velocity Business", avatar: "🚀",
    text: "The most common mistake early-stage founders make isn't running out of money or choosing the wrong market. It's premature scaling — pouring fuel on a fire before confirming the fire actually exists. Product-market fit isn't a feeling. It's a measurable, repeatable signal: retention curves that flatten, word-of-mouth that compounds, users who would be genuinely devastated if the product disappeared. Until those signals are clear and consistent, every dollar spent on growth is a dollar wasted. Validate first. Scale second. In that order, always."
  },
  {
    id: 41, type: "blog", isAI: true,
    author: "ClearThought Media", avatar: "💭",
    text: "Communication is the invisible infrastructure of every organization. When it works, no one notices. When it breaks down, everything grinds to a halt. The most costly organizational failures — missed deadlines, misaligned teams, failed product launches — can almost always be traced back to a communication breakdown somewhere upstream. Effective organizational communication isn't just about sending clearer emails. It's about designing systems where the right information reaches the right people at the right time, with enough context to act on it decisively."
  },

  // ── BLOG: HUMAN (verified pre-2022 sources) ─────────────────────────────────
  {
    id: 42, type: "blog", isAI: false,
    author: "Venkatesh Rao, Ribbonfarm (2007)", avatar: "🔮",
    text: "Yet-to-be-understood technology is not magic. Arthur C. Clarke is probably to blame here for starting off this dull line of thinking about imaginative reality with his quote, 'Any sufficiently advanced technology is indistinguishable from magic.' Possibly true (though trite) as a statement about advanced technology. Irrelevant and distracting as a statement about magic.\n\nMagic is an imaginative conception of the lawfulness of a universe where matter has the attributes of consciousness, and can be engaged purely through intention. It is the product of our (primarily emotional and existential rather than intellectual) yearning to connect with the physical world beyond living organisms."
  },
  {
    id: 43, type: "blog", isAI: false,
    author: "Paul Graham, paulgraham.com", avatar: "💡",
    text: "The way to get startup ideas is not to try to think of startup ideas. It's to look for problems, preferably problems you have yourself.\n\nAt YC we call these 'made-up' or 'sitcom' startup ideas. Imagine one of the characters on a TV show was starting a startup. The writers would have to invent something for it to do.\n\nThe verb you want to be using with respect to startup ideas is not 'think up' but 'notice.' At YC we call ideas that grow naturally out of the founders' own experiences 'organic' startup ideas."
  },
  {
    id: 44, type: "blog", isAI: false,
    author: "Gizmodo (2019)", avatar: "📱",
    text: "Gadgets have to work a lot harder to suck in 2019 than they have in years past. They have to bankrupt companies, reveal our data, or be so overpriced they even make Apple look cheap. The gadgets below did all that, but some went even further. Some were pointless Skymall dreck, and some nearly ruined much nicer and better gadgets.\n\nRing's pioneering video doorbell seemed like a good idea at first. The gadget let lazy people and paranoid homeowners alike see who was knocking without leaving the comfort of their couch or panic room. Few could have guessed that Ring would partner with police departments, making it easy for cops to confiscate home security footage. Ring also launched a neighborhood watch app that enables profiling and has failed to protect its network from hackers. That and the fact that Ring is now an Amazon-owned private surveillance company that feeds on America's worst fears."
  },
  {
    id: 45, type: "blog", isAI: false,
    author: "Visakan Veerasamy, visakanv.com", avatar: "✍️",
    text: "Be honest about what you don't know. Be honest with yourself, most importantly. The clearer you are about this, the better positioned you will be to learn and improve. As a bonus, you'll find that being intellectually honest in a candid way encourages people to be honest with you in turn. It just makes for a healthy atmosphere. Practice communicating your uncertainty in a constructive, inviting way. It's refreshing to be around people like that."
  },
  {
    id: 46, type: "blog", isAI: false,
    author: "Visakan Veerasamy, visakanv.com", avatar: "✍️",
    text: "Have a schedule and respect it. I hated calendars and timetables as a kid, and spent many years dealing with subconscious stress of having to deal with any sort of deadline. But truths are true whether we like them or not: We have limited time and an unlimited set of things to do. In the absence of good routines, we fall into bad ones. If you're not deciding in advance how you're going to spend your time and energy, then other things will decide for you – the urgency of an interruption from somebody, the ease of an unimportant task. This compounds."
  },
  {
    id: 47, type: "blog", isAI: false,
    author: "Paul Graham, paulgraham.com", avatar: "💡",
    text: "I made it myself. In 1995 I started a company to put art galleries online. But galleries didn't want to be online. It's not how the art business works. So why did I spend 6 months working on this stupid idea? Because I didn't pay attention to users.\n\nYou can either build something a large number of people want a small amount, or something a small number of people want a large amount. Choose the latter. Not all ideas of that type are good startup ideas, but nearly all good startup ideas are of that type."
  },
  {
    id: 48, type: "blog", isAI: false,
    author: "Gizmodo (2019)", avatar: "📱",
    text: "We all knew Moviepass was a grift, but in 2019 it truly imploded in spectacular fashion. It barred folks from certain screenings, tried to prevent users from changing passwords, and to top everything off, leaked the credit card data for 58,000 users. After a slow, excruciating march to death, MoviePass finally bit the dust in September. In the end, MoviePass was the ultimate cautionary tale of something being too good to be true."
  },
  {
    id: 49, type: "blog", isAI: false,
    author: "Venkatesh Rao, Ribbonfarm (2007)", avatar: "🔮",
    text: "No, I think we get closest to our natural conception of magic if we understand it as a lawfulness that governs the connectedness/disconnectedness of a universal consciousness. When I am able to summon up that broomstick, I become one with the broomstick in some way. Evil, in this sort of magical universe, is a perverse condition of resistance to such connection.\n\nIn our regular world, the only thing that yields to pure intention, without any manifest action, is our own thoughts. Think of a pink elephant. You intend it, it is done. Neither physical lawfulness, nor 'agency' lawfulness behaves this way."
  },
  {
    id: 50, type: "blog", isAI: false,
    author: "Neal Stephenson, WIRED (1996)", avatar: "🌐",
    text: "In which the hacker tourist ventures forth across the wide and wondrous meatspace of three continents, acquainting himself with the customs and dialects of the exotic Manhole Villagers of Thailand, the U-Turn Tunnelers of the Nile Delta, the Cable Nomads of Lantao Island, the Slack Control Wizards of Chelmsford, the Subterranean Ex-Telegraphers of Cornwall, and other previously unknown and unchronicled folk; also, biographical sketches of the two long-dead Supreme Ninja Hacker Mage Lords of global telecommunications, and other material pertaining to the business and technology of Undersea Fiber-Optic Cables, as well as an account of the laying of the longest wire on Earth, which should not be without interest to the readers of WIRED."
  },
];
