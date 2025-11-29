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
          <Display 
            id="ntupair"
            title="NTU Pair"
            supporting={["A Self-designed Matchmaking Platform", "December 2022 - February 2023"]}
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
          <Display
            id='vmks'
            title='Virtual Makerspace'
            supporting={["An Online Replica of The NTUEE Makerspace", "May 2023 - September 2024"]}
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
        </div>
          
      </div>
    </div>
  )
}

export default MyProjects
