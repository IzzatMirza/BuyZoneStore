import React from 'react'
import { Link } from 'react-router-dom'

export default function Video() {
  return (
    <>
      {/* <h3 className='text-center animate__animated animate__swing animate__delay-3s' style={{ fontFamily: "fantasy" }}>Learn here</h3>
      <p className='text-center animate__animated animate__swing animate__delay-3s' style={{ fontFamily: "monospace" }}>You can download the video</p>
      <div className='container mt-5 animate__animated animate__backInDown animate__delay-1s'>
        <video className='mx-auto d-block' controls width={"250px"} src="Video.mp4"></video>
      </div> */}


<div className='container'>
  <div className='row'>

<div className='col-12 col-md-4 my2'>

                        <img className='responsive' src="Img1.png" alt="" />
                    

</div>


<div className='col-12 col-md-4 my-2'>

                        <img className='responsive' src="Img1.png" alt="" />
                    

</div>


<div className='col-12 col-md-4 my-2'>

                        <img className='responsive' src="Img1.png" alt="" />
                    

</div>
  </div>


</div>


<div className='d-grid gap-2 col-6 mx-auto'>

                          <button id='shadow' className='btn btn-warning justify-content-center  w-100 mt-5 animate__animated animate__swing animate__delay-4s'>
                                                    
                         <Link to="/contact" className="nav-link active" >Order Place</Link>
                                                    
                                           
                                                 </button>

                                                 </div>


    </>
  )
}
