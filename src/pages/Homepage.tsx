import React from 'react'
import { Link } from 'react-router-dom'
import Links from '../components/Links'
import InnerLink from '../components/InnerLink'
import Highlights from '../components/Highlights';

const Homepage = () => {
  return (
    <div className='m-0 p-0 h-max'>
      <Links />
      <div className='w-full p-4'>
        <div className='inline-block align-top w-1/3 p-8'>
          <div className='w-full mb-8'>
            <img src="/images/2024makentu.png" alt="My Photo" style={{
              borderRadius: "50%"
            }}/>
          </div>
          <div className='text-2xl font-bold mb-4'>Po-Chun Wu</div>
          <div className='font-semibold mb-2'>National Taiwan University (NTU)</div>
          <div className='mb-2'>
            <span className='font-semibold'>Electrical Engineering</span><br />
            <span className='text-blue-200'>2022 - (2026)</span>
          </div>
          <div className='mb-2'>
            <span className='font-semibold'>Creative and Entrepreneurial Program</span><br />
            <span className='text-blue-200'>2024 - (2025)</span>
          </div>
          <div className='text-cyan-100 mb-2'>
            <div><Link to='#entrepreneur'>#Entrepreneur</Link></div>
            <div><Link to='#leader'>#Leader</Link></div>
            <div><Link to='#maker'>#Maker</Link></div>
          </div>
          <br />
          <div className=''>
            <div className='inline-block mr-4 rounded-lg align-top'>
              <Link to="https://www.linkedin.com/in/po-chun-wu-a683b027b/">
              <img width="30" height="30" src="/icons/linkedin.png" alt="LinkedIn" />
              </Link>
            </div>
            <div className='inline-block mr-4 rounded-lg align-top'>
              <Link to="https://www.facebook.com/pcwu2022/">
              <img width="30" height="30" src="https://store-images.s-microsoft.com/image/apps.37935.9007199266245907.b029bd80-381a-4869-854f-bac6f359c5c9.91f8693c-c75b-4050-a796-63e1314d18c9" alt="Facebook" />
              </Link>
            </div>
            <div className='inline-block mr-4 rounded-lg align-top'>
              <Link to="https://github.com/pcwu2022">
              <img width="30" height="30" src="https://avatars.githubusercontent.com/u/59704711?s=200&v=4" alt="Github" />
              </Link>
            </div>
          </div>
        </div>
        <div className='inline-block align-top w-2/3 p-8'>
          <div className='text-2xl font-bold mb-4'>About Me</div>
          <div className='mb-4' id='introduction'>I'm Po-Chun, a junior undergraduate at National Taiwan University, majoring in electrical engineering. My lab research mainly focuses on <InnerLink to="/research#analog">analog and mixed-signal IC design</InnerLink>. Still, my interests also include computer architecture, microwave circuits, algorithms, communication systems, bioengineering, and programming in general.</div>
          <div className='mb-4' id='entrepreneur'><b>I'm an Entrepreneur.</b> I see opportunities, enlighten others with my vision, and execute them passionately. I founded the NTU Learning Optimization Club in my sophomore year, and the Chinese Chess Association in high school. I'm the initiator of a two-year-long project to create an online replica of the NTUEE Makerspace. I'm also the current CEO of NTU Pair, a networking app startup, and a team leader in the creative and entrepreneurial program.</div>
          <div className='mb-4' id='leader'><b>I'm a Leader.</b> I value cooperation, teamwork, and culture. I  planned and executed over 25 lectures and activities throughout my one year of service in the student association. Additionally, I mentored my freshmen groupmates, equipping them with the skills necessary to excel in their future leadership roles. I've also led a team of 20 people to teach high-school students maker skills in the NTUEE summer camp.</div>
          <div className='mb-4' id='maker'><b>I'm a Maker.</b> I see problems, use my knowledge as a toolbox, and solve them. For hardware, I designed and built a programmable glowing bike, the props for the NTUEE Light Dance, and an AR device for motorists to navigate around the city, for which we won the best maker award in the annual MakeNTU competition. For software, I created a random restaurant selector for NTU students, some JavaScript solitaire games, and an online hospital simulation system for SLEK, a medical student organization.</div>
        </div>
        <div className='text-2xl font-bold mb-4 p-8 pb-4'>Highlights</div>
        <div className='w-full p-8 pt-0'>
          <Highlights 
            title='SAR ADC, PLL, and SerDes Design'
            image='/images/adc1.png'
            link='/research/#analog'
          />
          <Highlights 
            title='Monolayer Molybdenum Disulfide'
            image='/images/mos22.png'
            link='/research/#mos2'
          />
          <Highlights 
            title='NTU Pair'
            image='/images/ntupair1.png'
            link='/projects/#ntupair'
          />
          <Highlights 
            title='Virtual Makerspace'
            image='/images/vmks1.png'
            link='/projects/#vmks'
          />
        </div>
      </div>
    </div>
  )
}

export default Homepage
