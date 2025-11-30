import React from 'react'
import Links from '../components/Links'
import Display from '../components/Display';

const Research = () => {
  return (
    <div className='m-0 p-0 h-max'>
      <Links />
      <div className='w-full max-w-7xl mx-auto px-2 py-2 md:px-8 lg:px-12'>
        <div className='p-6 md:p-8'>
          <div className='text-2xl font-bold mb-4'>Research</div>
          <Display id="formal"
            title="In Search of the Smallest Vocabulary Set Using Formal Methods"
            supporting={[
              "National Taiwan University, Spring, 2025", 
              "Advisor: Prof. Chung-Yang (Ric) Huang, NTU"
            ]}
            images={[
              ["/images/formal.png", "Algorithm for the SVS Problem"],
              ["/images/formal_runtime.png", "Runtime Comparison of Different Methods"]
            ]}
            links={[
              ["/documents/in_search_of_the_smallest_vocabulary_set_using_formal_methods_2025.pdf", "Report: Formal Verification"]
            ]}
          >
            <>
              <div className='mb-4'>
              Prior to this research project, I was trying to figure out the most efficient sequence for learning a vocabulary set in a natural language using an algorithmic approach. 
              I soon found out that it was an NP-hard variation of the Target Set Selection problem, which could be solved using the formal verification methods taught in SoCV,and thus I used this topic as my research project. 
              </div><div className='mb-4'>
              By encoding the set of vocabulary words into Boolean clauses, the problem can be decomposed into subproblems that are reduced to the Boolean satisfiability problem (SAT) using a polynomial-time reduction function. 
              Furthermore, by treating each subproblem as a state in a finite-state machine, I can use algorithms such as Bounded Model Checking, Interpolation-Based Unbounded Model Checking, and Property-Directed Reachability to iteratively expand the reachable Boolean state space. 
              </div><div className='mb-4'>
              From this project, I learned that by formulating practical problems as finite-state machines, formal verification methods can be extended beyond circuit satisfiability, providing rigorous algorithmic guarantees for complex real-world systems.
              </div>
            </>
          </Display>
          <Display id="analog"
            title="SAR ADC and PLL Design"
            supporting={[
              "High-Speed Circuit Lab, Fall, 2024", 
              "Advisor: Prof. Tai-Cheng Lee, NTU"
            ]}
            images={[
              ["/images/adc1.png", "ADC capacitor mismatch simulation"], 
              ["/images/adc2.png", "ADC switching behavior model"]
            ]}
            links={[]}
          >
            <>
                <div className='mb-4'>
                My research topic for the fall semester of the third year was on mixed signals, including domain knowledge extension, paper reviews, and behavior model simulation.
                I conducted MATLAB simulations on several ADC models based on references from the literature.
                My simulations include the conventional SAR ADC, a monotonic-switching SAR ADC, a split-capacitor SAR ADC with a variable-window function, a merge-switched capacitor SAR ADC, and a redundant-capacitor SAR ADC.
                The simulation also includes comparator noise, capacitor mismatch, parasitic capacitance, and power comparison.
                These results provide insights into the ADC design philosophies.
                </div>
                <div className='mb-4'>
                While ADC design has been the primary focus of my recent research, I have also explored other mixed-signal topics, including phase-locked loops (PLLs) and continuous-time linear equalizers (CTLEs) for SerDes front-end design.
                My study involved reading foundational texts, such as Professor Razavi’s PLL textbook, and reviewing research papers on CTLE biasing strategies and feed-forward equalizers (FFEs).
                </div></>
          </Display>
          <Display id="quantum"
            title="The Impact of Quantum Computing on Cryptocurrencies"
            supporting={[
              "National Taiwan University, Spring, 2025 (Coursework)",
              "Lecturer: Prof. Hao-Chung Cheng, NTU"
            ]}
            images={[
              ["/images/quantum.png", "A Quantum Algorithm for ECDLP"]
            ]}
            links={[
              ["/documents/the_impact_on_quantum_computing_on_cryptocurrencies_2025.pdf", "Report: Quantum Computing & Cryptocurrencies"]
            ]}
          >
            <>
            <div className='mb-4'>
            During the coursework project of <i>Quantum Information and Computation</i>, we surveyed the impact of quantum computing on cryptocurrencies, Bitcoin in particular.
            </div><div className='mb-4'>
            In this study, we explained how the ECDSA algorithm works in the Bitcoin blockchain, and derived its possible attack methods using mathematical proofs.
            Our exploration on attack methods include the traditional Pollard's Rho Algorithm that uses Floyd's Cycle Finding Algorithm to efficiently guess the private key, and also the quantum ECDLP solver similar to the Shor Algorithm for factorization.
            Moreover, we further explored the post-quantum security algorithms that can be used to replace ECDSA in the future, including hash-based signatures, lattice-based signatures, and multivariate polynomial signatures.
            </div>
            </>
          </Display>
          <Display  id="mos2"
            title="Separation and Transfer of Monolayer Molybdenum Disulfide"
            supporting={[
              "National Synchrotron Radiation Research Center, Spring, 2021", 
              "Advisor: Prof. Chia-Hao Chen, NSRRC"
            ]}
            images={[
              ["/images/mos23.png", "MoS2 Under Raman Spectroscopy"], 
              ["/images/mos22.png", "MoS2 Under Microscope"]
            ]}
            links={[["/documents/mos2_project.pdf", "Report: MoS2 Project (Chinese)"]]}
          >
            <>
              <div className='mb-4'>My research in high school is on the separation and transfer of monolayer Molybdenum Disulfide (MoS₂) using decane-dithiol and gold-plated silicon substrate, measured under a Raman spectroscopy microscope. MoS₂ exists as a bulk, or multilayer structure; however, similar to graphene, when a monolayer is separated from the bulk, it exhibits completely different properties. For example, a monolayer MoS₂ is a direct band gap semiconductor used in lasers, LEDs, and photoelectric diodes. However, producing MoS₂ with a thickness of several Angstroms isn’t an easy task. By conventional methods, it requires one week of soaking the MoS₂ in thiol solution, heating the MoS₂ to 773K for hours, and another week to transfer the monolayer MoS₂ onto another silicon substrate. Our research experiments on various parameters that affect the separation and transfer procedures, including exposure to UV light, ultrasonic agitation, heating, and timing.</div>
              <div className='mb-4'>In experiments involving the cleavage of long carbon chains, we concluded that both heating and UV irradiation provide sufficient energy for the cleavage of dithiol long carbon chains. Subsequently, ultrasonic agitation facilitates the detachment of MoS₂ from the gold surface, allowing it to transfer onto silicon substrates coated with silicon dioxide. This transfer technique demonstrates broad applicability, enabling the deposition of MoS₂ onto various substrates, not limited to silicon dioxide-coated silicon substrates.</div>
            </>
          </Display>
          
        </div>
          
      </div>
    </div>
  )
}

export default Research
