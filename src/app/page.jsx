import { Inter } from 'next/font/google'
import Gmail from '../../public/icons/gmail.svg'
import Facebook from '../../public/icons/facebook.svg'
import LinkedIn from '../../public/icons/linkedin.svg'
import Computer from '../../public/icons/computer.svg'
import Rocket from '../../public/icons/rocket.svg'
import Laptop from '../../public/icons/laptop.svg'
const inter = Inter({ subsets: ['latin'] })

const expertiseList = [
  {
    heading: 'DeFi platforms',
    desc:
      'Our team of developers creates decentralized financial platforms. We don’t limit ourselves to crypto solutions only, we also apply smart contracts and open software solutions in other industries.',
  },
  {
    heading: 'Platform Migration',
    desc:
      'Give a fresh start to your old solutions. We update all the older functionality and software you’ve been developing by replatforming it to a new stack and with new architecture. Our team will fix existing issues, making your ecosystem a smooth, reliable, and effective platform.',
  },
  {
    heading: 'Dedicated Team',
    desc:
      'We offer our experienced teams that work with a modern stack of technologies. Our colleagues lead the development project from the first day to the end of the development cycle. Idealogic’s dedicated teams also support and maintain existing solutions while developing additional functionality if needed.',
  },
  {
    heading: 'NFTs',
    desc:
      'Idealogic designs NFT marketplaces that allow minting, management, and the sale of NFT units. Incorporate custom NFT solutions into your business ecosystem, designing core functionality with our teams.',
  },
  {
    heading: 'Product Design',
    desc:
      'Idealogic develops both front- and back-end. We design the UX and UI of the solutions we create for our clients trying to put maximum usability and understanding of business needs into the product. When our developers and designers work on the same solution, you get a complex result.',
  },
  {
    heading: 'Custom application development',
    desc:
      'Let us create any application you need to connect the clients with the services you provide. These multi-platform apps connect your clients with business ecosystems.',
  },
]
const approaches = [
  {
    id: 1,
    heading: 'Discovery phase',
    desc:
      'Work closely with our Product Managers and BAs (Business Analysts) to find out the key functions that should be in your new product.',
  },
  {
    id: 2,
    heading: 'Working together on PRD',
    desc:
      'Finalize the discovery with the PRD (product requirements document). This is the list of functionality and priorities for the development team.',
  },
  {
    id: 3,
    heading: 'Dedicated Team',
    desc:
      'Track the team’s progress while they work solely on your project. You will pay only for the hours spent on the tasks in the PRD.',
  },
  {
    id: 4,
    heading: 'Try out the MVP',
    desc:
      'Test the functionality and quality of the minimum value product. Collect feedback from your team and clients so we can make the product better.',
  },
  {
    id: 5,
    heading: 'Project Delivery',
    desc:
      'Assess the results of our work and go through the knowledge transfer process to use the full potential of the product.',
  },
  {
    id: 6,
    heading: 'Post-delivery Support',
    desc:
      'Idealogic offers you long-term relationships. We can work as a dedicated team maintaining, developing, and updating your existing software infrastructure.',
  },
]

export default function Home() {
  return (
    <>
      <section className="bg-black lg:px-28 ">
        <div className="container mx-auto flex flex-col gap-14  lg:flex  lg:flex-row  items-center justify-center min-h-fit lg:min-h-screen   p-5">
          <div className="text-white lg:w-[50%] h-fit ">
            <h1 className="text-4xl sm:text-6xl mb-5">
              Custom software development company
            </h1>
            <p className="text-lg sm:text-2xl mb-5">
              Idealogic materializes ideas into software. Find out what
              solutions we can create for your business
            </p>
            <button className="bg-[#fdda4a] py-4 min-w-[250px] sm:min-w-[300px] text-black font-semibold rounded-md">
              Get in touch
            </button>
          </div>
          <div className=" flex self-center  lg:flex-col gap-4  lg:self-start md:pt-3 lg:pt-14">
            <a
              href=""
              className="bg-[hsla(0,0%,100%,.1)] w-12 aspect-square p-3 rounded-full"
            >
              <Gmail />
            </a>
            <a
              href=""
              className="bg-[hsla(0,0%,100%,.1)] w-12 aspect-square p-3 rounded-full"
            >
              <LinkedIn />
            </a>
            <a
              href=""
              className="bg-[hsla(0,0%,100%,.1)] w-12 aspect-square p-3 rounded-full"
            >
              <Facebook />
            </a>
          </div>
        </div>
      </section>
      <section className="  mt-10 lg:px-28 ">
        <div className="container flex flex-col  mx-auto  p-5 ">
          <h1 className="text-3xl lg:text-4xl text-left  ">
            Idealogic focuses on work with startups
          </h1>
          <div className="flex flex-col md:flex md:flex-row gap-5 mt-5 lg:mt-14">
            <div className="bg-[#ffda44]  flex-1   p-5 md:p-10 rounded-lg flex flex-col items-start justify-center ">
              <Computer />
              <h2 className="text-2xl mt-5">Minimum viable product</h2>
              <ul className="list-disc pl-5 mt-5">
                <li className="mt-2 ">Market analysis</li>
                <li className="mt-2 ">Product development planning</li>
                <li className="mt-2 ">MVP development</li>
                <li className="mt-2 ">QA and software support</li>
                <li className="mt-2 ">Product design</li>
                <li className="mt-2 ">UI/UX of the product</li>
              </ul>
            </div>
            <div className="bg-black flex-1   p-5 md:p-10  rounded-lg flex flex-col items-start justify-center ">
              <Rocket />
              <h2 className="text-2xl mt-5 text-white">
                Launch and post-launch support
              </h2>
              <ul className="list-disc pl-5 mt-5 text-white">
                <li className="mt-2 ">Product redesign</li>
                <li className="mt-2 ">Product development</li>
                <li className="mt-2 ">
                  Market analysis and market fit development
                </li>
                <li className="mt-2 ">Post-release support</li>
                <li className="mt-2 ">QA and updates</li>
                <li className="mt-2 ">Platform Migration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="  mt-10 lg:mt-14 lg:px-28">
        <div className="container flex flex-col  mx-auto  p-5 ">
          <h1 className="text-3xl lg:text-4xl text-left ">
            We have strong expertise in these areas:
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-5 mt-5 lg:mt-14 ">
            {expertiseList.map((x) => {
              return (
                <div
                  className="bg-white p-5 rounded-lg drop-shadow-lg hover:drop-shadow-2xl hover:transition-all hover:duration-1000 hover:ease-out "
                  key={x.heading}
                >
                  <Laptop className=" hover:bg-[#ffda44]  hover:rounded-full overflow-visible" />
                  <h2 className="text-3xl mt-5">{x.heading}</h2>
                  <p className="text-lg mt-3">{x.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <section className="bg-[#121519] text-white mt-10 lg:mt-14 lg:px-28">
        <div className="container mx-auto p-5">
          <h1 className="text-3xl mt-5">
            We offer a straightforward and transparent approach to any project
          </h1>
          <div className="mt-7  lg:max-w-4xl">
            {approaches.map((x) => {
              return (
                <div className="md:flex md:gap-4 mt-10 lg:mt-16" key={x.id}>
                  <div className="flex items-center gap-3">
                    <h1 className="text-3xl md:text-6xl  text-[#ffda44]">
                      {x.id}.
                    </h1>
                    <span className="text-2xl font-extrabold md:hidden text-white">
                      {x.heading}
                    </span>
                  </div>
                  <div>
                    <h1 className="text-3xl  hidden md:block">{x.heading}</h1>
                    <p className="pl-9 mt-2 text-lg sm:text-xl md:pl-0 ">
                      {x.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
