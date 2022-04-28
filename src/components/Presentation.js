import React from 'react'

function Presentation() {
  return (
    <div>
    <label className='lb1'> choose currenet batch</label>
    <select className='select1'>
        <option>select batch...</option>
        <option>2202</option>
        <option>2201</option>
        <option>2112</option>
        <option>2109</option>
        <option>2108</option>
    </select>
    <button className='bt1'>get topics</button>
    <button className='bt1'>choose participent</button>
    <button className='bt1'>choose topic</button>
    <button className='bt1'>review presentation</button>
    <div className='pdiv'>
    <div className='pdiv1'>
        <h1>Participant Here</h1>
    </div>
    <div className='pdiv1'>
        <h1>Topic Here</h1>
    </div>
    </div>
</div>
  )
}

export default Presentation