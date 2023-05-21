import Laptop from "../public/icons/laptop.svg";
import ML from "../public/icons/ml.svg";
import Design from "../public/icons/prototype.svg";
import WebApp from "../public/icons/coding.svg";
import Team from "../public/icons/united.svg";
import Block from "../public/icons/block.svg";
import Card from "../public/icons/card.svg";
// import second from '../src/app/OurWorks'

export const navLinks = [
  {
    id: 1,
    item: "Services",
    href: "/services",
    
  },
  {
    id: 2,
    item: "About us",
    href: "/our-approach",
  },
  {
    id: 3,
    item: "Our Works",
    href: "/our-work",
  },
];


export const expertiseList = [
  {
    heading: "Custom web & app development",
    desc: "Let us create any application you need to connect the clients with the services you provide. These multi-platform apps connect your clients with business ecosystems.",
    content: <WebApp/>
  },
  {
    heading: "Product Design",
    desc: "Idealogic develops both front- and back-end. We design the UX and UI of the solutions we create for our clients trying to put maximum usability and understanding of business needs into the product. When our developers and designers work on the same solution, you get a complex result.",
    content: <Design/>

  },
  {
    heading: "Blockchain Development",
    desc: "Our team of developers creates decentralized financial platforms. We don’t limit ourselves to crypto solutions only, we also apply smart contracts and open software solutions in other industries.",
    content: <Block/>

  },
  {
    heading: "NFTs",
    desc: "Idealogic designs NFT marketplaces that allow minting, management, and the sale of NFT units. Incorporate custom NFT solutions into your business ecosystem, designing core functionality with our teams.",
    content: <Card/>

  },
  {
    heading: "Dedicated Team",
    desc: "We offer our experienced teams that work with a modern stack of technologies. Our colleagues lead the development project from the first day to the end of the development cycle. Idealogic’s dedicated teams also support and maintain existing solutions while developing additional functionality if needed.",
    content: <Team/>

  },
  {
    heading: "AI/ML Solutions",
    desc: "Unlock the future of artificial intelligence and machine learning with our advanced solutions. Our team of data scientists and AI engineers harness data-driven insights to create intelligent algorithms, predictive models, and automation tools. From natural language processing to predictive analytics, we empower your business with smart, data-powered decision-making.",
    content: <ML/>

  },
];

export const approaches = [
  {
    id: 1,
    heading: "Discovery phase",
    desc: "Work closely with our Product Managers and BAs (Business Analysts) to find out the key functions that should be in your new product.",
  },
  {
    id: 2,
    heading: "Working together on PRD",
    desc: "Finalize the discovery with the PRD (product requirements document). This is the list of functionality and priorities for the development team.",
  },
  {
    id: 3,
    heading: "Dedicated Team",
    desc: "Track the team’s progress while they work solely on your project. You will pay only for the hours spent on the tasks in the PRD.",
  },
  {
    id: 4,
    heading: "Try out the MVP",
    desc: "Test the functionality and quality of the minimum value product. Collect feedback from your team and clients so we can make the product better.",
  },
  {
    id: 5,
    heading: "Project Delivery",
    desc: "Assess the results of our work and go through the knowledge transfer process to use the full potential of the product.",
  },
  {
    id: 6,
    heading: "Post-delivery Support",
    desc: "Idealogic offers you long-term relationships. We can work as a dedicated team maintaining, developing, and updating your existing software infrastructure.",
  },
];