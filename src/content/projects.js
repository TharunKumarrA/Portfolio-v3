export const projects = [
  {
    slug: "sustain",
    title: "SustAIn",
    headline: "Making the footprint of AI visible.",
    summary:
      "A Chrome extension that estimates energy use, carbon emissions, and water consumption associated with AI queries.",
    role: "Co-developer",
    category: "AI & sustainability",
    year: "2025",
    technologies: ["React", "Flask", "Vertex AI", "AutoML", "ExpressJS"],
    featuredOrder: 1,
    image: {
      src: "/projects/sustain.webp",
      alt: "SustAIn application interface",
    },
    links: {
      repository: "https://github.com/SustAIn-GDG/SustAIn-Chrome-Extension",
      live: "https://chromewebstore.google.com/detail/sustain/bhjkhbmcamcpeebfobejnhnkghkfhegp?utm_source=item-share-cb",
    },
    caseStudy: {
      situation:
        "AI tools make it easy to ask questions, but the environmental resources behind a response are much less visible. SustAIn brings estimates into the browsing experience.",
      task: "Co-develop a browser extension that presents useful sustainability information alongside AI usage.",
      actions: [
        "Built a Chrome extension interface for energy, carbon, and water estimates.",
        "Worked with a classification model trained through Google AutoML on Vertex AI.",
        "Implemented retry, fallback, and timeout handling around requests.",
      ],
      result:
        "The extension was released through the Chrome Web Store and submitted to the GDG On-Campus Solutions Challenge 2025.",
      considerations: [
        "Environmental values are model-based estimates, not direct measurements of a provider’s infrastructure.",
        "Resilient request handling matters when the extension depends on external services.",
      ],
    },
  },
  {
    slug: "pragati-2025",
    title: "Pragati ’25",
    headline: "From event discovery to registration.",
    summary:
      "A business festival platform bringing event information, registration, payments, and a chatbot into one experience.",
    role: "Frontend lead & project coordinator",
    category: "Event platform",
    year: "2025",
    technologies: ["Next.js", "Tailwind CSS", "GSAP", "Node.js"],
    featuredOrder: 2,
    image: {
      src: "/projects/pragati-2025.webp",
      alt: "Pragati ’25 application interface",
    },
    links: {
      repository: "https://github.com/Pragati-2025/",
      live: "https://pragati-frontend-2025.vercel.app/",
    },
    caseStudy: {
      situation:
        "A university business festival needed a clear digital journey from discovering events to completing registration.",
      task: "Lead frontend development and coordinate a 14-member team delivering the festival platform.",
      actions: [
        "Built responsive interfaces with Next.js and Tailwind CSS.",
        "Integrated payment and chatbot functionality into the event experience.",
        "Coordinated development across the project and supported the organizer-facing workflow.",
      ],
      result:
        "Delivered the official Pragati ’25 website and its participant registration experience.",
      considerations: [
        "Participants and organizers need different views of the same event information.",
        "Payment and registration flows need clear states so users understand what happened and what to do next.",
      ],
    },
  },
  {
    slug: "raga-classifier",
    title: "Raga Classifier",
    headline: "Finding patterns in Indian classical music.",
    summary:
      "An audio-classification application using a hybrid CNN-LSTM model to identify Indian classical ragas.",
    role: "Project contributor",
    category: "Machine learning",
    year: "2025",
    technologies: ["Python", "TensorFlow", "Streamlit"],
    featuredOrder: null,
    image: {
      src: "/projects/raga-classifier.webp",
      alt: "Raga Classifier application interface",
    },
    links: {
      repository: "https://github.com/ananthakrishna7/dl-raga-classifier",
    },
    caseStudy: {
      situation:
        "An audio-classification application using a hybrid CNN-LSTM model to identify Indian classical ragas.",
      task: "Contribute to the project through project contributor work.",
      actions: [
        "An audio-classification application using a hybrid CNN-LSTM model to identify Indian classical ragas.",
      ],
      result: "The implementation is available in the linked repository.",
      considerations: [],
    },
  },
  {
    slug: "anokha-2026",
    title: "Anokha ’26",
    headline: "A connected platform for a tech festival.",
    summary:
      "A tech festival platform spanning event registration, payments, administrative tools, and support applications.",
    role: "Development team lead",
    category: "Event platform",
    year: "2026",
    technologies: [],
    featuredOrder: null,
    image: null,
    links: {
      reference: "https://www.linkedin.com/in/tharun-kumarr/",
    },
    caseStudy: {
      situation:
        "Anokha ’26 required participant registration and supporting operational applications.",
      task: "Lead a development team delivering the tech festival platform.",
      actions: [
        "Led development across event registration, payment gateways, and administrative and support applications.",
      ],
      result: "The work is documented in my LinkedIn profile.",
      considerations: [],
    },
  },
  {
    slug: "amritotsavam-2025",
    title: "Amritotsavam 2025",
    headline: "A shared stage for a campus festival.",
    summary:
      "A cultural festival website with registration workflows and an internal dashboard for organizers.",
    role: "Lead developer",
    category: "Full-stack application",
    year: "2025",
    technologies: ["Next.js", "Tailwind CSS", "Node.js"],
    featuredOrder: 3,
    image: {
      src: "/projects/amritotsavam-2025.webp",
      alt: "Amritotsavam 2025 application interface",
    },
    links: {
      repository: "https://github.com/TharunKumarrA/Amritotsavam_Frontend_2025",
      live: "https://amritotsavam.cb.amrita.edu/",
    },
    caseStudy: {
      situation:
        "Amrita’s annual cultural festival needed a website for participants and practical tools for its organizers.",
      task: "Lead development of the festival website and support its registration and administrative workflows.",
      actions: [
        "Built the site with Next.js, Tailwind CSS, and Node.js.",
        "Developed registration workflows and an internal administrative dashboard.",
        "Created responsive interfaces for participants and festival organizers.",
      ],
      result:
        "Delivered the official Amritotsavam 2025 website with participant registration and organizer tools.",
      considerations: [
        "A public event page and an internal dashboard have different information priorities.",
        "Registration clarity and maintainable content are central to a time-sensitive event platform.",
      ],
    },
  },
  {
    slug: "portfolio-v2",
    title: "Portfolio v2",
    headline: "An exploration of digital identity.",
    summary:
      "The previous version of this portfolio: a study in typography, grids, and motion built with Next.js.",
    role: "Designer & developer",
    category: "Personal project",
    year: "2025",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    featuredOrder: null,
    image: {
      src: "/projects/portfolio-v2.webp",
      alt: "Portfolio v2 application interface",
    },
    links: {
      repository: "https://github.com/TharunKumarrA/Portfolio-v2",
      live: "https://tharunkumarra.vercel.app/",
    },
    caseStudy: {
      situation:
        "The previous version of this portfolio: a study in typography, grids, and motion built with Next.js.",
      task: "Build the application as a personal project project.",
      actions: [
        "The previous version of this portfolio: a study in typography, grids, and motion built with Next.js.",
      ],
      result: "The implementation is available in the linked repository.",
      considerations: [],
    },
  },
  {
    slug: "mediclined",
    title: "Mediclined",
    headline: "Connecting campus healthcare workflows.",
    summary:
      "A hackathon prototype exploring doctor availability, pharmacy workflows, and medical records in a university setting.",
    role: "Team contributor",
    category: "Hackathon prototype",
    year: "2024",
    technologies: ["Next.js", "Node.js", "MongoDB", "MySQL", "ESP32"],
    featuredOrder: null,
    image: {
      src: "/projects/mediclined.webp",
      alt: "Mediclined application interface",
    },
    links: {
      repository: "https://github.com/Project-Mediclined",
    },
    caseStudy: {
      situation:
        "A hackathon prototype exploring doctor availability, pharmacy workflows, and medical records in a university setting.",
      task: "Contribute to the project through team contributor work.",
      actions: [
        "A hackathon prototype exploring doctor availability, pharmacy workflows, and medical records in a university setting.",
      ],
      result:
        "A working prototype was developed during the hackathon; the team reached the top 10.",
      considerations: [],
    },
  },
  {
    slug: "anokha-2024",
    title: "Anokha 2024",
    headline: "A home for a university tech fest.",
    summary:
      "An event-registration website built collaboratively for Amrita’s national technical festival.",
    role: "Frontend developer",
    category: "Event platform",
    year: "2024",
    technologies: ["Next.js", "Tailwind CSS", "GSAP"],
    featuredOrder: null,
    image: {
      src: "/projects/anokha-2024.webp",
      alt: "Anokha 2024 application interface",
    },
    links: {
      repository: "https://github.com/anokha-24/anokha_web",
    },
    caseStudy: {
      situation:
        "An event-registration website built collaboratively for Amrita’s national technical festival.",
      task: "Build the application as a event platform project.",
      actions: [
        "An event-registration website built collaboratively for Amrita’s national technical festival.",
      ],
      result: "The implementation is available in the linked repository.",
      considerations: [],
    },
  },
  {
    slug: "molecule-visualizer",
    title: "Molecule Visualizer",
    headline: "Making molecular geometry tangible.",
    summary:
      "An interactive application for constructing molecules, exploring bonds, and visualizing molecular geometry in 3D.",
    role: "Frontend & algorithm contributor",
    category: "Interactive visualization",
    year: "2024",
    technologies: ["React", "PlotlyJS", "Gemini API", "MUI"],
    featuredOrder: null,
    image: {
      src: "/projects/molecule-visualizer.webp",
      alt: "Molecule Visualizer application interface",
    },
    links: {
      repository: "https://github.com/TharunKumarrA/Molecule-Visualiser",
    },
    caseStudy: {
      situation:
        "An interactive application for constructing molecules, exploring bonds, and visualizing molecular geometry in 3D.",
      task: "Contribute to the project through frontend & algorithm contributor work.",
      actions: [
        "An interactive application for constructing molecules, exploring bonds, and visualizing molecular geometry in 3D.",
      ],
      result: "The implementation is available in the linked repository.",
      considerations: [],
    },
  },
  {
    slug: "library-management-v2",
    title: "Library Management V2",
    headline: "A more usable digital library.",
    summary:
      "A multi-user e-book application with a Vue frontend, search, administrator workflows, and caching.",
    role: "Developer",
    category: "Full-stack coursework",
    year: "2024",
    technologies: ["Vue.js", "Flask", "SQLite", "Tailwind CSS"],
    featuredOrder: null,
    image: {
      src: "/projects/library-management-v2.webp",
      alt: "Library Management V2 application interface",
    },
    links: {
      repository: "https://github.com/TharunKumarrA/Library-Mgmt-V2",
    },
    caseStudy: {
      situation:
        "A multi-user e-book application with a Vue frontend, search, administrator workflows, and caching.",
      task: "Build the application as a full-stack coursework project.",
      actions: [
        "A multi-user e-book application with a Vue frontend, search, administrator workflows, and caching.",
      ],
      result: "The implementation is available in the linked repository.",
      considerations: [],
    },
  },
  {
    slug: "library-management",
    title: "Library Management",
    headline: "The foundations of a digital library.",
    summary:
      "A Flask and Jinja application for managing books, sections, and reader requests.",
    role: "Developer",
    category: "Backend coursework",
    year: "2024",
    technologies: ["HTML", "CSS", "Jinja2", "Flask"],
    featuredOrder: null,
    image: {
      src: "/projects/library-management.webp",
      alt: "Library Management application interface",
    },
    links: {
      repository: "https://github.com/TharunKumarrA/Library-Mgmt-System",
    },
    caseStudy: {
      situation:
        "A Flask and Jinja application for managing books, sections, and reader requests.",
      task: "Build the application as a backend coursework project.",
      actions: [
        "A Flask and Jinja application for managing books, sections, and reader requests.",
      ],
      result: "The implementation is available in the linked repository.",
      considerations: [],
    },
  },
  {
    slug: "fc-team-forge",
    title: "FC Team Forge",
    headline: "Less organizing. More football.",
    summary:
      "A team-selection application using player positions and statistics to help organize football matches.",
    role: "Developer",
    category: "Algorithm & application",
    year: "2024",
    technologies: ["Vue.js", "Tailwind CSS", "Ngrok", "MySQL"],
    featuredOrder: null,
    image: {
      src: "/projects/fc-team-forge.webp",
      alt: "FC Team Forge application interface",
    },
    links: {
      repository: "https://github.com/TharunKumarrA/FC-TeamForge",
    },
    caseStudy: {
      situation:
        "A team-selection application using player positions and statistics to help organize football matches.",
      task: "Build the application as a algorithm & application project.",
      actions: [
        "A team-selection application using player positions and statistics to help organize football matches.",
      ],
      result: "The implementation is available in the linked repository.",
      considerations: [],
    },
  },
  {
    slug: "ai-study-mate",
    title: "AI Study Mate",
    headline: "A companion for focused study.",
    summary:
      "A learning application combining AI explanations, study resources, a chatbot, and planning tools.",
    role: "Frontend contributor",
    category: "Learning application",
    year: "2024",
    technologies: ["Vue.js", "Tailwind CSS", "Gemini API"],
    featuredOrder: null,
    image: {
      src: "/projects/ai-study-mate.webp",
      alt: "AI Study Mate application interface",
    },
    links: {
      repository: "https://github.com/Thanus-Kumaar/AI-Study-Mate",
    },
    caseStudy: {
      situation:
        "A learning application combining AI explanations, study resources, a chatbot, and planning tools.",
      task: "Contribute to the project through frontend contributor work.",
      actions: [
        "A learning application combining AI explanations, study resources, a chatbot, and planning tools.",
      ],
      result:
        "The application is no longer actively maintained; the repository preserves the implementation.",
      considerations: [],
    },
  },
  {
    slug: "union-budget-explorer",
    title: "Union Budget Explorer",
    headline: "Making revenue records explorable.",
    summary:
      "A database course project for storing, querying, and analyzing non-tax revenue records.",
    role: "Team contributor",
    category: "Database coursework",
    year: "2024",
    technologies: ["Vue.js", "MySQL", "Node.js"],
    featuredOrder: null,
    image: {
      src: "/projects/union-budget-explorer.webp",
      alt: "Union Budget Explorer application interface",
    },
    links: {
      repository: "https://github.com/TharunKumarrA/Union-Budget-Explorer",
    },
    caseStudy: {
      situation:
        "A database course project for storing, querying, and analyzing non-tax revenue records.",
      task: "Contribute to the project through team contributor work.",
      actions: [
        "A database course project for storing, querying, and analyzing non-tax revenue records.",
      ],
      result: "The implementation is available in the linked repository.",
      considerations: [],
    },
  },
];
