
import React from 'react'


import ReactDOM from 'react-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEvelope} from "@fortawesome/free-solid-svg-icons"
// import { fas, fad, fass, fasds } from '@awesome.me/kit-KIT_CODE/icons'


export default function Footer() {

  const year = new Date().getFullYear()

  return (
    <>
      {/* <div className='mt-5 container bg-dark rounded-pill p-3'>


    

      </div> */}
      <footer className='py-4 bg-dark mt-5'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <p className='mb-0 text-center text-white' style={{ fontFamily: "cursive", fontSize: "30px" }}>&copy; {year} . All Right Reserved By PakGames</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
