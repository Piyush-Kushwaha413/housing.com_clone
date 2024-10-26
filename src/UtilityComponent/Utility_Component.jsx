import React from 'react'

function Utility_Component({text, icon}) {
  return (
    <button class="uiverse">
    <div class="wrapper">
      
        
        <span className='inline-flex items-center gap-2'> {icon} {text}</span>
    
        <div class="circle circle-12"></div>
        <div class="circle circle-11"></div>
        <div class="circle circle-10"></div>
        <div class="circle circle-9"></div>
        <div class="circle circle-8"></div>
        <div class="circle circle-7"></div>
        <div class="circle circle-6"></div>
        <div class="circle circle-5"></div>
        <div class="circle circle-4"></div>
        <div class="circle circle-3"></div>
        <div class="circle circle-2"></div>
        <div class="circle circle-1"></div>
    </div>
</button>
  )
}

export default Utility_Component