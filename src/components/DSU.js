import React from 'react'

function DSU() {
  return (
    <div className='body'>
      <h1>Daily Status Updates</h1>
         <p>Write your today's Status Updates</p> 
         <div className='bt'> 
         <button>Home</button>
         <button>Daily Status Updates</button>
         </div>
       <h3>Today's Activities Details</h3>
        
        <div>
          <label>Morning 9:00-10.00 AM</label>
        <input type = 'text' placeholder='Write Activities Worked between 9:00-10.00 AM'></input>
        </div>
        <div>
        <label>Morning 10:00-11:00 AM</label>
        <input type = 'text'  placeholder='Write Activities Worked between 9:00-10.00 AM'></input>
        </div>
        <div>
          <label>Morning 11:00-12:00 AM</label>
        <input type = 'text' placeholder='Write Activities Worked between 9:00-10.00 AM'></input>
        </div>
        <div>
        <label>Afternoon 1:00-2:00 PM</label>
        <input type = 'text' placeholder='Write Activities Worked between 9:00-10.00 AM'></input>
        </div>
        <div>
        <label>Afternoon 2:00-3:00 PM</label>
        <input type = 'text' placeholder='Write Activities Worked between 9:00-10.00 AM'></input>
        </div><div>
        <label>Afternoon 3:00-4:00 PM</label>
        <input type = 'text' placeholder='Write Activities Worked between 9:00-10.00 AM'></input>
        </div>
        <div>
        <label>Evening 4:00-5:00 PM</label>
        <input type = 'text' placeholder='Write Activities Worked between 9:00-10.00 AM'></input>
        </div>
       
        <div>
        <label>Evening 5:00-6:00 PM</label>
        <input type = 'text' placeholder='Write Activities Worked between 9:00-10.00 AM'></input>
        </div> 
        <div>
        <label>Evening 6:00- Till you leave Office</label>
        <input type = 'text' placeholder='Write Activities Worked between 9:00-10.00 AM'></input>
        </div> 

        <button>Upload Today's Status</button>
       
    </div>
  )
}

export default DSU