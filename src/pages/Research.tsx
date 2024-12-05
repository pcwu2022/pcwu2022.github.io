import React from 'react'
import Links from '../components/Links'

const Research = () => {
  return (
    <div className='m-0 p-0 h-max'>
      <Links />
      <div className='w-full p-4'>
        <div className='p-8'>
          <div className='text-2xl font-bold mb-4'>Research</div>
          <div>
            <div className='inline-block w-1/3'>
            </div>
            <div className='inline-block w-2/3' id='analog'>
              <div className='text-2xl font-bold mb-2'>SAR ADC, PLL, and SerDes Design</div>
              <div className='text-sm font-semibold mb-2 text-blue-100'>High-Speed Circuit Lab, Fall, 2024, In progress</div>
              <div className='text-sm font-semibold mb-2 text-blue-100'>Instructor: Prof. Tai-Cheng Lee, NTU</div>
              <br />
              <div className='mb-4'>My current research topic is on mixed signals, including domain knowledge extension, paper reviews, and behavior model simulation. In the fall semester, I conducted MATLAB simulations on several ADC models based on references from the literature. My simulations include the conventional SAR ADC, a monotonic-switching SAR ADC, a split-capacitor SAR ADC with a variable-window function, a merge-switched capacitor SAR ADC, and a redundant-capacitor SAR ADC. The simulation also includes comparator noise, capacitor mismatch, parasitic capacitance, and power comparison, providing insights into the ADC design philosophies.</div>
              <div className='mb-4'>While ADC design has been the primary focus of my recent research, I have also explored other mixed-signal topics, including phase-locked loops (PLLs) and continuous-time linear equalizers (CTLEs) for SerDes front-end design. My study involved reading foundational texts, such as Professor Razavi’s PLL textbook, and reviewing research papers on CTLE biasing strategies and feed-forward equalizers (FFEs).</div>
              <div className='mb-4'>During the ongoing winter break, I plan to extend my research by simulating PLL designs discussed in Razavi’s textbook and deepening my understanding of CTLE biasing techniques and FFE implementation details.</div>
            </div>
          </div>
        </div>
          
      </div>
    </div>
  )
}

export default Research
