import React from 'react'

function Messages() {
  return (
    <div className='messageBody'>
      <p className='para'>Messages</p>
   <a className=''href='/home'>Home</a>
      
      <h3 className='activities'>&#9999;Your Messages</h3>
      <div className='select'>
        <div>     
      <select  name='records'>
        <option>All</option>
   
        <option>5</option>
        <option>10</option>
       

      </select>
      records
      </div>
      <div>
        <label>My serch</label>
        <input></input>
      </div>
      </div>

      <div>
        <input className='data' list='browsers' name='browser' placeholder='#'></input>
        <datalist id='browsers'>
          <option value='5'/>
          <option value='10'/>
          <option value='15'/>

        </datalist>
       
      
      <input  type="number" id="burgers" name="burgers" min="1" max="15" placeholder='category' />
      <input  type="number" id="burgers" name="burgers" min="1" max="15" placeholder='subject' />
      <input  type="number" id="burgers" name="burgers" min="1" max="15" placeholder='Delivered on' />

        </div>
        <div>
          <input className='datatable' placeholder='No data available in table'></input>
        </div>
        </div>
  )
}

export default Messages