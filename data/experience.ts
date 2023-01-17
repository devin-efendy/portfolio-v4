const experience = [
  // {
  //   id: 'priceline--01',
  //   position: 'Software Developer Co-op',
  //   companyName: 'Priceline',
  //   date: 'May 2022 – Dec 2022',
  //   description:
  //     "I was primarily working on integrating Okta authentication and authorization for my team's new application to protect pages and APIs. This also allow users to have seamless transition between Priceline's applications through SSO. I also improved autocomplete functionality for one of Priceline's partner which provides better usability and support custom dictionaries. Lastly, I organized and hosted company-wide technology showcase event with 150+ attendees",
  //   location: 'Winnipeg, MB (remote)',
  //   technologies:
  //     'TypeScript, React, Node.js, Remix, GraphQL, Jest, React Testing Library',
  // },
  {
    id: 'priceline--00',
    position: 'Software Developer Co-op',
    companyName: 'Priceline',
    date: 'Sep 2021 – Dec 2021 | May 2022 - Dec 2022',
    description:
      "Worked on Next.js application to unify landing pages of Priceline's products. This involves building React components, writing tests, and using feature toggles and CMS. In addition to that, I built a GitHub Action that sends alerts to a Slack channel about the progress of Contentful migrations.",
    bullets: [
      'Spearheaded Okta integration for a new web app by creating Express auth middleware and token management using TypeScript and Node.js',
      "Built landing page templates for 3 products of different codebases and unified them in a single Next.js application, simplifying maintenance of partner's landing pages (TypeScript, React, Node.js, Express, Jest, React Testing Library)",
      'Improved locations autocomplete to reduce time spent searching for locations and provide better usability',
      'Created and improved core UI components for Priceline’s open-source component library using React, CSS, and Storybook',
      'Organized, coordinated, and hosted a company-wide technology showcase event with 170+ attendees',
    ],
    location: 'Winnipeg, MB (remote)',
    technologies:
      'TypeScript, React, Node.js, Next.js, HTML, CSS, Jest, React Testing Library, Contentful, LaunchDarkly, GitHub Action',
  },
  {
    id: 'ubisoft-00',
    position: 'Junior Programmer',
    companyName: 'Ubisoft Winnipeg',
    date: 'Jan 2021 – Apr 2021',
    description:
      'At Ubisoft, I worked with C#, .NET, .NET Core, Postgre SQL, and WPF applications. I was primarily developing new features on internal tool that consists of Windows desktop application and .NET backend application. It was very exciting to get some exposure to game development! I had opportunities to work with Unreal Engine and Unity as well.',
    bullets: [
      'Developed CRUD operations and new features for a 3D asset pipeline that retrieves, stores, and versions assets from Ubisoft’s game engine using C#, .NET, PostgreSQL, Entity Framework, and WPF',
      'Reduced load time by and the number of assets fetched from MinIO object storage by integrating a cache',
      'Identified and fixed various UI bugs in the desktop application, improving user experience',
    ],
    location: 'Winnipeg, MB (remote)',
    technologies: 'C#, .NET, .NET Core, PostgreSQL, WPF, OOP, REST API',
  },
  {
    id: 'bold-commerce--00',
    position: 'Software Developer Co-op',
    companyName: 'Bold Commerce',
    date: 'May 2020 – Aug 2020',
    description:
      "During my co-op term at Bold, I was working in Checkout Plugin & API team. The team develops plugin features and API endpoints for Bold Checkout. One of my main resposibility is to revamp one of Bold's internal plugin which gives customer a discount when they share their purchases to Facebook or Twitter. Doing so requires refactoring the code while adhering to Software Engineering principles (such as SOLID and Dependency Injection), reconfiguring deployment pipeline, and researching compatible packages as well as upgrading legacy dependencies.",
    bullets: [
      'Worked with the Checkout Plugin & API team. The team develops features for Bold Checkout plugins and API endpoints.',
      'Modernized a deprecated PHP/Laravel e-commerce plugin to be fully functional, which consisted of resolving dependency issues, re-writing core functionalities, and reconfiguring deployment pipeline',
      'Developed new features for a web application with React, Redux, PHP, MySQL, and Test-Driven Development',
      'Tested, debugged, and updated API endpoints across e-commerce platforms such as Shopify and BigCommerce, increasing feature parity',
    ],
    location: 'Winnipeg, MB (remote)',
    technologies:
      'PHP, Laravel, JavaScript, React, Node.js, MySQL, Docker, OOP',
  },
  {
    id: 'uofm--00',
    position: 'Teaching Assistant/Grader (Seasonal)',
    companyName: 'University of Manitoba',
    date: 'Sep 2019 – Dec 2022',
    description:
      'Courses: Programming Practices (C), Data Structures and Algorithms (Java), Operating Systems (C/C++)',
    bullets: [
      'Automated major marking processes using Python, Bash scripts, and regular expressions. Reducing marking time from 7 to 3 minutes per student',
      'Conducted lab sessions and assisted students to understand course materials (C, Unix, debugging, best practices)',
      'Courses: Programming Practices (C), Data Structures and Algorithms (Java), Operating Systems (C/C++)',
    ],
    location: 'Winnipeg, MB (remote)',
    technologies:
      'PHP, Laravel, JavaScript, React, Node.js, MySQL, Docker, OOP',
  },
]

export default experience
