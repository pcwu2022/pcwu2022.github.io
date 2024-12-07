import React from 'react'
import Links from '../components/Links'
import Display from '../components/Display';

const Research = () => {
  return (
    <div className='m-0 p-0 h-max'>
      <Links />
      <div className='w-full p-4'>
        <div className='p-8'>
          <div className='text-2xl font-bold mb-4'>Research</div>
          <Display 
            id="analog"
            title="SAR ADC, PLL, and SerDes Design"
            supporting={[
              "High-Speed Circuit Lab, Fall, 2024, In progress", 
              "Advisor: Prof. Tai-Cheng Lee, NTU"
            ]}
            images={[
              ["/images/adc1.png", "ADC capacitor mismatch simulation"], 
              ["/images/adc2.png", "ADC switching behavior model"]
            ]}
            links={[]}
          >
            <>
              <div className='mb-4'>My current research topic is on mixed signals, including domain knowledge extension, paper reviews, and behavior model simulation. In the fall semester, I conducted MATLAB simulations on several ADC models based on references from the literature. My simulations include the conventional SAR ADC, a monotonic-switching SAR ADC, a split-capacitor SAR ADC with a variable-window function, a merge-switched capacitor SAR ADC, and a redundant-capacitor SAR ADC. The simulation also includes comparator noise, capacitor mismatch, parasitic capacitance, and power comparison, providing insights into the ADC design philosophies.</div>
              <div className='mb-4'>While ADC design has been the primary focus of my recent research, I have also explored other mixed-signal topics, including phase-locked loops (PLLs) and continuous-time linear equalizers (CTLEs) for SerDes front-end design. My study involved reading foundational texts, such as Professor Razavi’s PLL textbook, and reviewing research papers on CTLE biasing strategies and feed-forward equalizers (FFEs).</div>
              <div className='mb-4'>During the ongoing winter break, I plan to extend my research by simulating PLL designs discussed in Razavi’s textbook and deepening my understanding of CTLE biasing techniques and FFE implementation details.</div>
            </>
          </Display>
          <Display 
            id="mos2"
            title="Separation and Transfer of Monolayer Molybdenum Disulfide"
            supporting={[
              "National Synchrotron Radiation Research Center, Spring, 2021", 
              "Advisor: Prof. Chia-Hao Chen, NSRRC"
            ]}
            images={[
              ["/images/mos23.png", "MoS2 Under Raman Spectroscopy"], 
              ["/images/mos22.png", "MoS2 Under Microscope"]
            ]}
            links={[]}
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
