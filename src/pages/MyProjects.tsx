import React from 'react'
import Links from '../components/Links'
import Display from '../components/Display';
import { Link } from 'react-router-dom';

const MyProjects = () => {
  return (
    <div className='m-0 p-0 h-max'>
      <Links />
      <div className='w-full max-w-7xl mx-auto p-4 md:px-8 lg:px-12'>
        <div className='p-8'>
          <Link
            to="/projects"
            className="block mb-6 px-6 py-3 border-blue-800 border-2 text-white font-semibold rounded-md shadow hover:bg-blue-700 transition-colors duration-200 text-lg text-center"
          >
            View My Creations Online
          </Link>
          <div className='text-2xl font-bold mb-4'>Projects</div>
          <Display id="ntupair"
            title="NTU Pair"
            supporting={["A Self-designed Matchmaking Platform", "December 2022 — February 2023"]}
            images={[["/images/ntupair1.png", "NTU Pair UI"]]}
            links={[["https://www.youtube.com/watch?v=ELeGZ4Aa1mE", "NTU Pair User Guide (YouTube)"], ["https://github.com/pcwu2022/ntupair_readonly", "Github (Readonly Version)"]]}
          >
            <>
              <div className='mb-4'>NTU Pair is an innovative matchmaking platform I developed to foster meaningful connections among NTU students. Instead of swiping left (reject) and right (accept) to react to the other users’ selfies, the platform utilizes psychological assessments to analyze users' personalities, preferences, and compatibility. By leveraging matching algorithms, individuals with similar traits would be recommended to chat together, enhancing the likelihood of meaningful interactions.</div>
              <div className='mb-4'>I started this project simply because I wanted to show off my web programming skills and prove to myself I could create a full-stack application without the help of others. However, my philosophy of building this system was to “build what I want it to be like,” not “to build what my customers want,” and thus although there were 1,700 NTU-verified users, many of them did not like the interface and user experience. Worse, the website was hacked within two hours of launch, injecting 3,000 robot accounts and cross-site scripting because I knew nothing about information security.</div>
              <div className='mb-4'>After four days of emergency debugging and contacting users, I was depressed and shut down the system. Although it restarted with improved security, nobody trusted the site again.</div>
              <div className='mb-4'>Two years have passed since the NTU Pair failure. Since then, I learned that doing what I imagine is not sufficient to create value for the customers; moreover, it’s even worse to put my ego in front of reality. Sometimes, it’s just better to have partners to brainstorm and develop together. Using others’ code is not a shame whatsoever. Only by standing on the shoulders of a giant can we make the best out of our skills.</div>
            </>
          </Display>
          <Display id='vmks'
            title='Virtual Makerspace'
            supporting={["An Online Replica of The NTUEE Makerspace", "May 2023 — August 2023"]}
            images={[["/images/vmks1.png", "Virtual Makerspace Homepage"], ["/images/vmks2.png", "Boards and Tools Page"], ["/images/vmks3.jpeg", "Virtual Makerspace Team"]]}
            links={[]}
          >
            <>
              <div className="mb-4">In my first year as a student association member, my life revolved around the NTUEE Makerspace, which is a paradise for those who love to create things from scratch. However, the Makerspace was often messy due to the lack of proper organization and management. People come and go now and then, and tools often get lost or misplaced. Hence, I came up with the idea of creating an online replica of the makerspace, combining the current borrowing form, the 3D printing reservation form, the “all tools and ICs” Excel page, and a brand new virtual 3D model of the Makerspace that behaves as Google street view. All the systems combine into one big metaverse, where students can check online if an object is present in the Makerspace, find where it is on the website, and borrow it immediately. This system would then revolutionize our way of using the Makerspace, and provide ease and efficiency to both the students and the administrators.</div>
              <div className="mb-4">Making such a dream come true is never easy. From the NTU Pair experience, I knew that I needed more people to accomplish this grand construction; thus, I formed a team of 25 to kickstart the project in May 2023. Since the team members were almost new to web programming, I decided to design lectures to teach them the basics myself. For the next two months, I wrote teaching material, thought of programming exercises, and held physical programming classes for my team members to learn. Meanwhile, I learned some basics of project management and how to organize a group, while implementing the methods of management in our team.</div>
              <div className="mb-4">This was my first time leading a big team, and also my first time managing those who have direct reports themselves. I established my “standards of group meetings” after an embarrassing failure as a meeting host. I also got into quarrels with the managers and my co-founder several times, and each one led to a small change in the way of management, as well as the team culture as a whole.</div>
              <div className="mb-4">After three months, we created a prototype of the website with some basic functions. As the summer approached its end, the project was halted for the fall semester. For another month of development in winter and another two months in summer, the project is handed over to the information department of the NTUEE student association for annual maintenance, which signals the end of my journey as the visionary of NTUEE Virtual Makerspace.</div>
            </>
          </Display>
          <Display id="makentu2025"
            title="Robotic Chameleon — Cockroach Catcher"
            supporting={[
              "First Place, Silicon Motion Corporate Award",
              "2025 MakeNTU Competition, May 2025"
            ]}
            images={[
              ["/images/makentu2025_1.jpg", "Presenting on stage for the final round"],
              ["/images/makentu2025_2.jpg", "Receiving the  corporate award"],
              ["/images/makentu2025_3.jpg", "Our prototype"]
            ]}
            links={[["https://www.youtube.com/shorts/4OHnhSw4PyA", "A short demo video of our project (YouTube)"]]}
          >
            <>
              <div className="mb-4">
                For the 2025 MakeNTU Competition, our team built a robotic chameleon capable of tracking and catching cockroaches using computer vision and a Raspberry Pi. Different from my previous attempts for the competition, this time we aimed to complete the project from the first line of code to the final presentation within just 24 hours with minimal preparation.
              </div>
              <div className="mb-4">
                The system utilized a phone camera to capture consecutive images of the environment, which were then processed my a computer vision algorithm to identify cockroaches based on their shape and color. Once a cockroach was detected, the phone would send the coordinates on the image to the Raspberry Pi, which would then warp those coordinates into real-world positions using perspective transformation and feed the positions into a PID controller algorithm to determine the movement of the chameleon. The chameleon was equipped with a mechanical tongue made from a servo motor, which could rapidly fire to catch the cockroach once it was within range.
              </div>
              <div className="mb-4">
                In the end, we successfully finished our project in less than 24 consecutive hours, and we made it to the final round on stage. Our efforts were recognized by the judging panel sponsored by Silicon Motion, awarding us first place in the corporate award category.
              </div>
            </>
          </Display>
          <Display id="makentu2024"
            title="HelpMet — An AR Navigation Assistant for Motorcyclists"
            supporting={["Best Maker Award, 2024 MakeNTU Competition", "May 2024"]}
            images={[["/images/makentu2024_1.jpg", "Presenting on stage for the final round"], ["/images/makentu2024_2.jpg", "Receiving the Best Maker Award"], ["/images/makentu2024_3.png", "Our product demo"]]}
            links={[["https://youtu.be/tlTyyKNcEA0?t=353", "A vlog made by my teammate showcasing our project (YouTube)"]]}
          >
            <>
                <div className="mb-4">
                  The MakeNTU 2024 competition was my second time attending this maker event held by NTUEE. We created a navigation assistant mounted inside a motorcycle helmet, using speech recognition and AR technologies to help riders navigate safely. Our aim was to help motorcyclists "leave home happily and return safely." In Taiwan, over 50,000 motorcycle accidents occur annually, often due to distracted driving while using navigation devices. Our project minimizes distraction by keeping navigation info visible and riders focused on the road.
                </div>
              <div className="mb-4">
                Our prototype used a Raspberry Pi as the main controller, connected to a microphone for voice input, an OLED display for AR output, and an online website to simulate motorcycle movement around the city and location tracking (because it is hard to demonstrate moving around during demo time). The system can recognize voice commands to set destinations and provide turn-by-turn navigation instructions given by the Google Maps API. The instructions would then be displayed on the OLED screen inside the helmet, using the reflection of the helmet visor to create an AR effect.
              </div>
              <div className="mb-4">
                My role in this project was the system architect. Since the APIs voice recognition modules, and input commands were all asynchronous by nature, I designed a multi-threaded architecture to handle different tasks simultaneously. This architecture idea was brought from hardware flip-flop designs, where check bits and clock signals are used to synchronize different modules. By implementing this architecture, our system was able to respond to user commands in real-time, providing a smooth and efficient navigation experience. 
              </div>
            </>
          </Display>
          <Display id="sleksystem"
            title="Online Medical Diagnosis and Simulation Systems"
            supporting={["Product Developer at SLEKMED", "August 2023 — February 2025"]}
            images={[["/images/slek_1.jpg", "Our team at the CTCI headquarters office"], ["/images/slek_2.jpg", "Our team in front of the competition poster"], ["/images/slek_3.png", "Demonstration of the Online Diagnosis Process"]]}
            links={[
              ["https://slek-system.vercel.app/projects/hyponatremia", "An online simulation of Hyponatremia diagnosis and simulation"], 
              ["https://ssp.moe.gov.tw/cases/1047", "The showcase of our project on the Ministry of Education website"], 
              ["https://www.ctci.org.tw/8838/talent/41184/45319/45576/", "CTCI AI Competition 2024 Official Page"]]}
          >
            <>
              <div className='mb-4'>
                In the summer of 2023, I joined SLEKMED, an educational startup composed of 60 medical students, tailored to help high school students explore and understand medical-related academic studies. Serving as one of the two product developers with a tech background, I collaborated with medical students to create web-based diagnosis simulation systems as teaching aids. During my time at SLEKMED, I worked on two major projects: the Hyponatremia Diagnosis Simulation System and the Online-Hospital AI Simulation system.
              </div>
              <div className='mb-4'>
                The Hyponatremia system allowed students to practice diagnosing and treating hyponatremia cases through an interactive web interface. Collaborating with medical students, we designed the algorithm to simulate real-life scenarios, including patient history, symptoms, and lab results. Students could make decisions on diagnosis and treatment, receiving immediate feedback on their choices. Our system was awarded funding from the Ministry of Education's <i>Start-up Simulation Platform for University and Tertiary College</i> program, recognizing its potential to enhance medical education.
              </div>
              <div className='mb-4'>
                The Online-Hospital AI Simulation System was a different approach to medical education. This system used Notion and Gather as the user interface, allowing students to navigate a virtual hospital environment and use Notion's databases to simulate writing medical records, ordering tests, and prescribing treatments. To simulate patient interactions, we integrated an AI chatbot, enabling dynamic conversations with virtual patients. This project won the first place in the <i>2024 CTCI AI Competiton</i> with a grand award of 400K NTD, standing out among 40+ teams nationwide.
              </div>
            </>
          </Display>
          <Display id="lightbike"
            title="Light Bike"
            supporting={["An LED show mounted on a bicycle", "September 2024"]}
            images={[["/images/lightbike.jpg", "My Light Bike"]]}
            links={[["https://youtube.com/shorts/hiSOKbT3xVI?feature=share", "A short demo video of my project (YouTube)"]]}
          >
            <>
              <div className="mb-4">
                I built a programmable LED light show for a bicycle using LED strips and a D1 Mini microcontroller. The system can be remotely controlled via a website, allowing dynamic lighting effects while riding.
              </div>
            </>
          </Display>
          <Display id="lightdance"
            title="NTUEE Light Dance Props"
            supporting={["Props for NTUEE Light Dance", "January 2023 — March 2023"]}
            images={[["/images/lightdance_1.jpg", "Making the Light Dance Props"], ["/images/lightdance_2.jpg", "Light Dance Performance"]]}
            links={[["https://www.youtube.com/watch?v=u10oLI85Ip0", "NTUEE Light Dance 2023 Performance (YouTube)"]]}
          >
            <>
              <div className="mb-4">
                NTUEE Light Dance is an annual performance organized by the NTUEE Student Association, where students showcase their creativity through synchronized light shows. In 2023, I contributed to the event by designing and building LED props for the performers. Our theme that year was <i>Bartender</i>, and my team and I created three LED bar cupboards that can be transformed into an arsenal during the performance. We also created a bar counter that can be split in half during the show. These props served as the main stage decorations, enhancing the visual impact of the performance.
              </div>
            </>
          </Display>
        </div>
      </div>
    </div>
  )
}

export default MyProjects
