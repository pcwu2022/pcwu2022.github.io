import React from 'react'
import Links from '../components/Links'
import Display from '../components/Display';

const StartupLeadership  = () => {
  return (
    <div className='m-0 p-0 h-max'>
      <Links />
      <div className='w-full max-w-7xl mx-auto p-4 md:px-8 lg:px-12'>
        <div className='p-8'>
          <div className='text-2xl font-bold mb-4'>Startup Leadership</div>
            <Display 
              id="ntuloc"
              title="NTU Learning Optimization Club"
              supporting={["Founder and President", "August 2023 - July 2025"]}
              images={[
                ["/images/ntuloc1.jpg", "NTU LOC Team Photo"], 
                ["/images/ntuloc2.jpg", "Speeches for High School Students"]]}
              links={[
                ["https://ntu-learning-optimization-club.github.io/", "NTU LOC Official Website"]
              ]}
            >
              <>
                <div className='mb-4'>
                NTULOC is a club I founded during my second year, tailored to researching effective learning methods and transferring the knowledge to high school students, motivated by my dissatisfaction with our education system's focus on forceful memorization rather than comprehensive understanding. 
                Through my leadership, our club delivered speeches on how effective learning methods can enhance the students’ academic performance, and we held one-on-one online consultation services to provide support using our database of knowledge. 
                As a result, we held 8 speeches across Taiwan, researched 20 learning methods, and helped over 200 high school students discover more effective ways to learn.
                </div>
              </>
            </Display>
          </div>
      </div>
    </div>
  )
}

export default StartupLeadership