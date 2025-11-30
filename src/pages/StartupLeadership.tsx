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
          <Display id="ntuloc"
            title="NTU Learning Optimization Club"
            supporting={["Founder and President", "August 2023 — June 2025"]}
            images={[
              ["/images/ntuloc1.jpg", "NTU LOC Club"], 
              ["/images/ntuloc2.jpg", "Speeches for High School Students"]]}
            links={[
              ["https://ntu-learning-optimization-club.github.io/", "NTULOC Official Website"],
              ["https://www.youtube.com/watch?v=uUKqtxzOgb4", "My Speech on Effective Learning Methods"]
            ]}
          >
            <>
              <div className='mb-4'>
                NTULOC is a club I founded during my second year, motivated by my dissatisfaction with Taiwan’s education system, which emphasizes forced memorization and late-night cram schools over comprehensive understanding. Seeking to change these circumstances, I formed a club dedicated to researching and applying effective learning strategies to help high school students rethink how to learn.
              </div>
              <div className='mb-4'>
                As our club was the first of its kind, we were uncertain about our next steps. I began conducting one-on-one conversations with my partners, listening to their ideas and collecting feedback to improve my leadership. This built trust among us, as everyone felt their thoughts were valued. I also introduced project management methodologies and empowered teammates to lead their own initiatives within the club.
              </div>
              <div className='mb-4'>
                Through our efforts, we delivered speeches on effective learning methods, provided one-on-one online consultation services, and supported students using our database of knowledge. Over two years, we held 8 speeches across Taiwan, researched 20 learning methods, and helped over 200 high school students discover more effective ways to learn.
              </div>
            </>
          </Display>
          <Display id="ntucep"
            title="NTU Creative and Entrepreneurial Program"
            supporting={["NTUCEP, September 2024 — June 2025", "CTC Team Leader, September 2024 — December 2024"]}
            images={[
              ["/images/ntucep_1.png", "Our team and mentors at NTUCEP"],
              ["/images/ntucep_2.png", "Pitching to the judge panel at the demo day"]
            ]}
            links={[]}
          >
            <>
              <div className='mb-4'>
                I enrolled in the Creative and Entrepreneurial Program (NTUCEP) at the NTU D-School and led a multidisciplinary team with great ambitions. With little prior experience in business and marketing, I struggled to keep up with the team discussions at the beginning of the program. However, the constant frustration motivated me to learn rapidly from books, case studies, lectures from successful entrepreneurs, and interactions with my teammates.
              </div>
              <div className='mb-4'>
                As the leader, I also learned how to organize diverse opinions, motivate the team through difficult times, and present our ideas to prospective investors. As a result, I transformed from an inexperienced novice into a confident leader with entrepreneurial insight, now leveraging this knowledge to guide the next cohort of students.
              </div>
            </>
          </Display>
          <Display id="synality"
            title="Synality, a matchmaking startup"
            supporting={["Co-founder and CEO", "Dec 2024 — Feb 2025"]}
            images={[["/images/synality_1.jpg", "Our brainstorming process"], ["/images/synality_2.png", "Synality App Demo"]]}
            links={[["https://www.youtube.com/watch?v=PR5GrGPCx5Y", "Demo video for our second MVP"]]}
          >
            <>
              <div className='mb-4'>
                I co-founded Synality, a matchmaking startup, and led a team of three cofounders to develop a platform that leverages psychological principles to enhance user compatibility.
              </div>
              <div className='mb-4'>
                We iterated through three rounds of Minimum Viable Product (MVP) development and marketing surveys, gathering user feedback and performing cohort analysis to refine our product. During the iteration process, I read the book <i>Lean Startup</i> and applied its principles to our development cycle, enabling us to pivot effectively based on user insights.
              </div>
              <div className='mb-4'>
                Using Next.js, We built the full-stack web application and successfully launched it within 10 days.
              </div>
            </>
          </Display>
          <Display id="ntueesaad"
            title="Lecturer, Academic Department, NTUEE Student Association"
            supporting={["Sep 2023 — Jun 2024"]}
            images={[["/images/saad_1.png", "Maker courses I arranged (1)"], ["/images/saad_2.png", "Maker courses I arranged (2)"]]}
            links={[
              ["https://www.youtube.com/@ntueesaadocw/videos", "My lectures on NTUEESAAD OpenCourseWare"]
            ]}
          >
            <>
              <div className='mb-4'>
                As a lecturer and manager in the NTUEE Student Association's Academic Department, I led a core team to organize 25 lectures and speeches, focusing on maker skills such as Arduino and 2D manufacturing. Recognizing that many students needed access to maker equipment but lacked opportunities to learn, I initiated the <i>Maker for All</i> movement to broaden participation. 
              </div>
              <div className='mb-4'>
                To address the challenge of limited resources in the Makerspace, I introduced a <i>Train-the-Trainee</i> class, equipping multiple lecturers with the necessary skills and enabling us to offer more hands-on classes. I also taught our course planning team project management techniques to help them manage the increased workload. 
              </div>
              <div className='mb-4'>
                In addition to volunteering as an instructor for basic Arduino and laser-cut manufacturing, I designed accessible teaching materials and created an OpenCourseWare, uploading class recordings online to reach even more students.
              </div>
            </>
          </Display>
          <Display id="ntueecamp"
            title="NTUEE Summer Camp"
            supporting={["Leader, Advanced Teaching Group", "May 2023 — July 2023"]}
            images={[["/images/camp_1.jpg", "The custom-designed PCB of our product"], ["/images/camp_2.jpg", "Mass production pipeline"], ["/images/camp_3.jpg", "Our team"], ["/images/camp_4.png", "Teaching high school students Arduino programming and electronics"]]}
            links={[["https://www.youtube.com/watch?v=Ud5frjPIkrE", "NTUEE Camp 2023 Highlight Video"]]}
          >
            <>
              <div className='mb-4'>
                During the summer of 2023, I served as the Leader of the Advanced Teaching Group for the NTUEE Camp, guiding a team of over twenty members to design hands-on engineering projects for 120 high school students. Our capstone project—the light-tracking Arduino Sunflower robot—began as a rough idea drafted between exams, student meetings, and late-night prototyping sessions in the Makerspace. What started as scattered tasks and an overwhelming workload soon evolved into one of the most intense and meaningful collaborative experiences of my university life. Together, we built not only the curriculum and hardware, but also a production line capable of assembling and testing more than 150 robot kits, each requiring thousands of solder points and a small miracle of coordination.
              </div>
              <div className='mb-4'>
                The weeks leading up to the camp became a five-week marathon of problem-solving and perseverance. From debugging circuits at midnight to rewriting teaching materials on the spot, our group learned to depend on one another’s strengths and shoulder each other’s burdens. I found myself leading by doing—jumping onto the production line, supporting teammates through setbacks, and keeping morale afloat with humor and music that echoed through the Makerspace. Despite the pressure, the atmosphere remained warm, almost familial; every small victory and each shared laugh made the impossible feel within reach. What defined those weeks was not just technical achievement, but the camaraderie that turned exhaustion into momentum and responsibility into pride.
              </div>
              <div className='mb-4'>
                By the time 120 students arrived on campus, our Sunflower robots stood ready—each one a testament to months of resilience, teamwork, and heart. Teaching Arduino to such a large group, watching them bring their robots to life, and seeing their eyes light up with curiosity reminded me why all the struggle mattered. That summer, the Teaching Group became more than a team; it became a home. And the experience reaffirmed what I care most about: building learning environments where creativity, engineering, and human connection can flourish together.
              </div>
            </>
          </Display>
        </div>
      </div>
    </div>
  )
}

export default StartupLeadership