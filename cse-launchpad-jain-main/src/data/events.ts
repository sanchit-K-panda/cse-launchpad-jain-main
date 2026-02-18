export interface EventData {
  slug: string;
  title: string;
  tag: string;
  description: string;
  seats: number;
  article: {
    purpose: string;
    learn: string;
    audience: string;
    format: string;
    outcomes: string;
    whyItMatters: string;
  };
}

export const events: EventData[] = [
  {
    slug: "codenexus",
    title: "CodeNexus: Tech x Innovation Conclave",
    tag: "Industry Alignment",
    description:
      "A one-day industry-startup convergence event focused on sustainable energy, electrification, and smart solutions. Industry leaders and student innovators collaborate on real-world challenges, exploring computational engineering capabilities and their intersection with emerging startup opportunities across clean-tech sectors.",
    seats: 200,
    article: {
      purpose:
        "CodeNexus is designed to bridge the gap between academic engineering talent and real-world industry challenges. The event brings together leading companies in sustainable energy, electrification, and smart infrastructure with ambitious student innovators who are ready to build the next generation of clean-tech solutions. By creating a shared space for dialogue, prototyping, and strategic collaboration, CodeNexus accelerates the path from classroom knowledge to market-ready innovation.",
      learn:
        "Attendees will gain hands-on exposure to computational engineering tools used in industry, understand how large enterprises approach sustainable energy challenges, and learn frameworks for translating technical prototypes into viable business propositions. Sessions cover topics including smart grid optimization, battery technology frontiers, IoT-driven energy management, and the economics of clean-tech startups. Participants will also receive mentorship on aligning their technical skills with investor expectations in the sustainability sector.",
      audience:
        "CodeNexus is ideal for engineering students with an interest in sustainable technology, early-stage founders building in the clean-tech space, researchers exploring commercial applications of their work, and industry professionals seeking fresh perspectives from the next generation of innovators. Whether you are a first-year student curious about the energy transition or a final-year student with a working prototype, this event offers actionable value.",
      format:
        "The event follows a structured single-day format beginning with keynote addresses from industry leaders, followed by interactive workshop tracks where participants work on real challenge statements provided by partner companies. The afternoon features a rapid prototyping sprint where teams present solutions, followed by a networking mixer connecting students directly with hiring managers, venture scouts, and technical mentors.",
      outcomes:
        "Participants leave CodeNexus with a validated understanding of industry needs, a portfolio-worthy project from the prototyping sprint, direct connections to potential employers and investors, and a certificate of participation. Top-performing teams receive invitations to extended incubation programs and potential pilot project opportunities with sponsoring companies.",
      whyItMatters:
        "The clean-tech sector represents one of the fastest-growing investment categories globally, yet there remains a significant talent and innovation gap between what universities produce and what the industry needs. CodeNexus directly addresses this gap by creating structured pathways for students to engage with real industry problems, ensuring that the next wave of sustainable innovation is driven by well-prepared, entrepreneurially-minded engineers.",
    },
  },
  {
    slug: "failforward-live",
    title: "FailForward Live: The Pivot Sessions",
    tag: "Founder Stories",
    description:
      "An interactive talk session featuring founders who share their raw, unfiltered journeys—from critical failures and existential pivots to securing funding. Includes open Q&A where attendees can dig into the frameworks behind resilience, strategic reinvention, and the psychology of building under pressure.",
    seats: 150,
    article: {
      purpose:
        "FailForward Live exists to normalize failure as a critical component of the entrepreneurial journey. In a culture that often celebrates only success stories, this event creates a safe, honest space where founders share the moments that nearly ended their ventures—and the strategic thinking that pulled them through. The goal is to equip aspiring founders with the mental models and tactical frameworks needed to navigate uncertainty, pivot effectively, and emerge stronger from setbacks.",
      learn:
        "Attendees will hear firsthand accounts of startup failures, near-death experiences, and the pivots that led to eventual success. Each speaker breaks down their decision-making process during crisis moments, covering topics like when to pivot versus when to persevere, how to manage team morale during downturns, strategies for communicating bad news to investors, and frameworks for rapid strategic reassessment. The Q&A sessions allow deep dives into specific situations, giving attendees practical tools they can apply immediately.",
      audience:
        "This event is designed for anyone contemplating or actively pursuing entrepreneurship—from students with a startup idea to early-stage founders navigating their first challenges. It is equally valuable for aspiring product managers, venture capital analysts, and anyone interested in understanding the psychological and strategic dimensions of building under uncertainty. No prior startup experience is required; curiosity and openness to learning from failure are the only prerequisites.",
      format:
        "FailForward Live runs as a series of moderated fireside chats, each featuring a founder paired with an experienced moderator who draws out the most instructive moments of their journey. Each session lasts approximately 30 minutes, followed by 15 minutes of open Q&A. The event concludes with a panel discussion where all speakers reflect on common patterns in failure and recovery, offering synthesized advice for the audience.",
      outcomes:
        "Participants leave with a fundamentally shifted perspective on failure—seeing it as data rather than defeat. They gain practical frameworks for crisis management, pivot decision-making, and psychological resilience. Many attendees report that FailForward Live was the event that gave them the confidence to actually start their venture, knowing that failure is not the end but a necessary waypoint on the path to building something meaningful.",
      whyItMatters:
        "The startup ecosystem suffers from survivorship bias—we hear about the unicorns but rarely about the thousands of ventures that failed or pivoted dramatically before finding success. This creates unrealistic expectations and fragile founders who crumble at the first sign of adversity. FailForward Live combats this by building a community that values transparency, resilience, and continuous learning, producing founders who are better prepared for the realities of building a company.",
    },
  },
  {
    slug: "venturemind",
    title: "VentureMind: Inside the Capital Machine",
    tag: "Investor Mindset",
    description:
      "An expert talk series with active venture capitalists explaining their evaluation criteria, investment thesis construction, and what truly differentiates fundable startups. Covers term sheet anatomy, valuation mechanics, cap table strategy, and the unwritten rules of fundraising.",
    seats: 120,
    article: {
      purpose:
        "VentureMind pulls back the curtain on how venture capital actually works—not the idealized version presented in media, but the real mechanics of how investors evaluate opportunities, construct portfolios, and make funding decisions. By giving founders direct access to the thinking frameworks of active VCs, this event eliminates the information asymmetry that often disadvantages first-time founders in fundraising conversations.",
      learn:
        "Attendees will learn how VCs construct their investment thesis, what metrics and signals they prioritize at different stages, the anatomy of a term sheet and what each clause really means, how valuation is determined and negotiated, cap table management best practices, the difference between what VCs say publicly and how they actually make decisions, red flags that immediately disqualify a startup, and how to build relationships with investors long before you need to raise capital.",
      audience:
        "This series is essential for founders who are planning to raise venture capital within the next 6-18 months, as well as those who want to understand whether VC is even the right funding model for their venture. It is also valuable for students interested in careers in venture capital, private equity, or corporate development, as it provides an insider view of the investment profession that is rarely available in academic settings.",
      format:
        "VentureMind is structured as a multi-session series, with each session focusing on a specific aspect of the venture capital process. Sessions alternate between expert presentations and interactive workshops where attendees practice skills like pitch delivery, term sheet negotiation, and financial modeling. Each session features a different VC guest, providing diverse perspectives across fund sizes, stages, and sectors.",
      outcomes:
        "By the end of the series, participants will be able to read and negotiate a term sheet, understand how VCs evaluate their startup relative to other opportunities, build a fundraising strategy aligned with their company's stage and needs, and have established initial relationships with active investors. Several past attendees have gone on to successfully raise their first rounds within months of completing the series.",
      whyItMatters:
        "Fundraising is one of the most critical and least understood aspects of building a startup. Founders who enter fundraising conversations without understanding how VCs think consistently leave value on the table—or worse, take deals that misalign incentives and hamper long-term growth. VentureMind ensures that every founder in our ecosystem approaches capital raising as a strategic exercise rather than a desperate scramble.",
    },
  },
  {
    slug: "raiselab",
    title: "RaiseLab: From Idea to Investment",
    tag: "Fundraising",
    description:
      "A comprehensive deep-dive session covering every fundraising stage—from bootstrapping tactics to institutional rounds. Includes live pitch simulations with real investor feedback, pitch deck teardowns, valuation frameworks, and due diligence preparation workshops.",
    seats: 180,
    article: {
      purpose:
        "RaiseLab is the definitive fundraising bootcamp for founders at every stage. Whether you are pre-revenue and considering bootstrapping, preparing for your first angel round, or scaling toward a Series A, this event provides the complete toolkit for raising capital effectively. The emphasis is on practical, immediately applicable skills—not theory. Every session includes hands-on exercises that participants complete with their own startups.",
      learn:
        "Attendees will master the full spectrum of fundraising, from pre-seed through Series A and beyond. Topics include crafting a compelling narrative that resonates with different investor types, building a pitch deck that tells a story rather than just presenting data, financial modeling for startups with limited revenue history, bootstrapping strategies that preserve optionality, angel investor psychology and how to close individual checks, navigating accelerator programs and their equity implications, and preparing for institutional due diligence.",
      audience:
        "RaiseLab is designed for founders who have at least a concept or early prototype and are ready to think seriously about their funding strategy. It is equally valuable for technical founders who feel uncomfortable with the business side of fundraising and for business-oriented founders who need to understand the financial mechanics. Team leads, CFOs of early-stage companies, and startup advisors will also find significant value in the frameworks presented.",
      format:
        "The event runs as a full-day intensive workshop with four main blocks: Narrative & Deck (building your fundraising story), Numbers & Models (financial projections and valuation), Practice & Feedback (live pitch simulations with real investor panelists), and Strategy & Planning (building your fundraising timeline and target list). Each block includes both instruction and hands-on work, ensuring participants leave with tangible outputs rather than just notes.",
      outcomes:
        "Participants exit RaiseLab with a refined pitch deck, a preliminary financial model, feedback from real investors on their pitch delivery, a customized fundraising strategy document, and a peer network of fellow founders going through similar fundraising journeys. The event has a strong track record of accelerating fundraising timelines, with many participants closing their rounds significantly faster than industry averages.",
      whyItMatters:
        "The difference between a successful fundraise and a failed one often comes down to preparation and strategy rather than the quality of the underlying business. Too many promising startups fail to reach their potential because their founders approach fundraising reactively rather than strategically. RaiseLab ensures that every founder in our community has access to the same caliber of fundraising preparation that was previously available only to founders with extensive networks and prior experience.",
    },
  },
  {
    slug: "ecosystem-x",
    title: "Ecosystem X: Builders & Backers Forum",
    tag: "CXO Keynotes",
    description:
      "Exclusive keynote interactions with entrepreneurs, CXOs, and policy leaders who have built entire ecosystems from the ground up. Features structured networking opportunities, fireside chats, and breakout sessions on market creation, regulatory navigation, and exponential thinking.",
    seats: 250,
    article: {
      purpose:
        "Ecosystem X is the flagship networking and inspiration event of CSE Launchpad, designed to connect aspiring founders with the architects of major technology and business ecosystems. Unlike conventional keynote events, Ecosystem X is structured to maximize meaningful interaction between speakers and attendees, ensuring that every participant leaves with new relationships, perspectives, and opportunities that would otherwise take years to develop.",
      learn:
        "Attendees will gain insights into how successful ecosystem builders think about market creation, platform strategy, and long-term competitive positioning. Sessions cover topics including regulatory navigation for emerging technologies, building network effects, creating developer and partner ecosystems, government relations and policy influence, scaling across geographies and cultures, and the leadership principles that enable exponential organizational growth.",
      audience:
        "Ecosystem X is curated for ambitious founders who think beyond single-product businesses, aspiring to build platforms and ecosystems that create lasting value. It is equally relevant for policy professionals, corporate innovation leaders, and senior students preparing for careers at the intersection of technology and strategy. The event attracts a diverse audience that enriches networking opportunities and cross-pollination of ideas.",
      format:
        "The event spans a full day with a carefully designed flow: morning keynotes from headline speakers set the intellectual framework, followed by moderated fireside chats that dig deeper into specific topics. The afternoon features parallel breakout sessions where attendees choose deep-dive tracks aligned with their interests. The event concludes with a structured networking session using a curated matching algorithm that connects attendees with the most relevant speakers and peers.",
      outcomes:
        "Participants leave Ecosystem X with an expanded professional network including direct connections to CXOs and ecosystem builders, a deeper understanding of platform and ecosystem strategy, actionable frameworks for thinking about market creation and competitive moats, and often, specific introductions to potential partners, investors, or mentors. The event consistently ranks as the most impactful in our annual calendar based on participant feedback.",
      whyItMatters:
        "The most valuable companies in the world are not single-product businesses—they are ecosystems. Yet the skills and mindsets required to build ecosystems are rarely taught in academic settings and are difficult to develop without direct exposure to people who have done it. Ecosystem X provides this exposure in a concentrated, high-impact format, ensuring that the next generation of founders thinks big enough to create lasting, systemic change.",
    },
  },
  {
    slug: "ai-forge",
    title: "AI Forge: Building Intelligent Products",
    tag: "Workshop",
    description:
      "A hands-on workshop focused on AI model integration, real-world product building, and rapid prototyping. Learn to leverage modern AI tools and frameworks to create intelligent products that solve genuine user problems.",
    seats: 100,
    article: {
      purpose:
        "AI Forge is a practitioner-focused workshop designed to bridge the gap between understanding AI concepts and actually building products with them. While many events discuss AI at a theoretical level, AI Forge puts tools in your hands from the first hour. Participants work through the complete lifecycle of building an AI-powered product—from identifying the right problem to solve, selecting appropriate models, integrating APIs, building user interfaces, and deploying functional prototypes. The goal is not to produce AI researchers, but to create founders and builders who can leverage AI as a core product capability.",
      learn:
        "Participants will learn practical AI product development including how to evaluate when AI is the right solution versus a simpler approach, working with large language models and embedding APIs, building retrieval-augmented generation systems for domain-specific applications, prompt engineering and fine-tuning strategies, integrating computer vision and natural language processing into web and mobile applications, cost optimization for AI inference at scale, and user experience design principles specific to AI-powered products. Each concept is taught through hands-on exercises using real tools and frameworks.",
      audience:
        "AI Forge is designed for developers, technical founders, and product builders who want to incorporate AI into their products but lack hands-on experience. Basic programming knowledge is required—participants should be comfortable with Python or JavaScript. No prior machine learning experience is necessary. The workshop is equally valuable for solo founders building AI-first products and for team members at existing startups looking to add AI capabilities to their product roadmap.",
      format:
        "The workshop runs as a full-day hands-on intensive. The morning session covers AI product strategy and foundational concepts through short lectures followed by immediate practice. The afternoon is dedicated to a build sprint where participants work individually or in small teams to create a functional AI-powered prototype. Expert mentors circulate throughout to provide guidance and troubleshoot issues. The day concludes with demo presentations where participants showcase their prototypes and receive feedback from AI industry professionals.",
      outcomes:
        "Every participant leaves AI Forge with a working AI-powered prototype, practical experience with modern AI development tools, a framework for evaluating AI product opportunities, and connections to a community of fellow AI builders. The prototypes developed during AI Forge have frequently evolved into full products, with several participants going on to raise funding for AI-focused startups that originated as workshop projects.",
      whyItMatters:
        "AI is rapidly becoming a foundational capability for every technology product, yet the gap between AI research and practical product development remains enormous. Most founders either over-invest in building AI capabilities from scratch or under-utilize available tools because they lack hands-on experience. AI Forge closes this gap by producing builders who understand both the possibilities and limitations of current AI technology, enabling them to make intelligent build-versus-buy decisions and create products that genuinely leverage AI's strengths.",
    },
  },
  {
    slug: "launchstack",
    title: "LaunchStack: MVP to Market Sprint",
    tag: "Workshop",
    description:
      "A hands-on workshop teaching lean startup execution, validation, and deployment strategy. Learn to go from idea to launched MVP using modern tools, rapid prototyping methods, and customer validation frameworks.",
    seats: 120,
    article: {
      purpose:
        "LaunchStack is an intensive workshop designed to compress months of startup development into a single, focused sprint. The premise is simple: most startup ideas fail not because they are bad ideas, but because founders spend too long building the wrong thing before testing it with real users. LaunchStack teaches the discipline of rapid validation, minimal viable product construction, and market deployment using modern no-code and low-code tools alongside traditional development approaches. The goal is to have every participant leave with a product that is live and in front of real users.",
      learn:
        "Participants will master the lean startup methodology through direct application, covering problem-solution fit validation techniques, customer interview frameworks that reveal genuine needs versus stated preferences, rapid prototyping using modern development tools, landing page and waitlist strategies for demand validation, MVP scoping—identifying the smallest possible product that tests your core hypothesis, deployment and launch strategies including product hunt and community-driven growth, setting up analytics and feedback loops for continuous learning, and the decision framework for when to iterate, pivot, or persevere based on early user data.",
      audience:
        "LaunchStack is ideal for aspiring founders who have an idea but have not yet built anything, as well as early-stage founders who have been building for months without launching. It is also valuable for technical professionals who want to develop their product thinking and learn how to validate ideas before committing significant engineering resources. The workshop accommodates both technical and non-technical participants, with parallel tracks for code-based and no-code approaches to MVP development.",
      format:
        "The workshop follows a sprint format with clear milestones throughout the day. The morning begins with a compressed lecture on lean methodology, followed by a problem validation exercise where participants test their assumptions with peers acting as potential customers. The middle session covers rapid prototyping, with participants building their MVP using the tools best suited to their skill level. The afternoon focuses on deployment, launch strategy, and setting up measurement systems. The day ends with live launches where participants deploy their products and begin collecting real user feedback.",
      outcomes:
        "Participants leave LaunchStack with a live, deployed MVP, initial user feedback and data, a clear validation roadmap for the next 30 days, experience with modern development and deployment tools, and a peer accountability group for continued progress. The workshop has an exceptional completion rate, with the vast majority of participants successfully deploying a product by the end of the day—many for the first time in their entrepreneurial journey.",
      whyItMatters:
        "The single biggest killer of startup potential is the endless build cycle—founders spending months or years perfecting a product that nobody wants. LaunchStack directly combats this by instilling the discipline of rapid validation and market-first thinking. In today's technology landscape, the tools for building and deploying products are more accessible than ever, but the methodology for doing so effectively remains poorly understood. LaunchStack ensures that every founder in our ecosystem ships early, learns fast, and iterates based on evidence rather than assumptions.",
    },
  },
];
