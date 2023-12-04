import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className='container-fluid' style={{ backgroundColor: '#008080', color: 'white', padding: '20px 0' }}>
    <div className='row justify-content-evenly'>

      <div className='col-md-6 col-lg-4 ms-2'>
        <h4 className='text-warning'>
          <i className="fa-brands fa-shopify fa-beat me-1"></i>TEEREX T-SHIRTS
        </h4>
         <p>
           Designed and built with all the love in the world by the luminar team with the help of our contributors
         </p>
        <p>Code licensed MIT, docs CC BY 3.0.1</p>
        <p>Currently v1.3.2</p>
      </div>

      <div className='col-md-6 col-lg-4'>
        <h4 className='ms-1 text-warning'>Links</h4>
        <ul className='list-unstyled ms-1'>
          <li><Link to={'/'} style={{ textDecoration: 'none', color: '#ADD8E6' }}>Home</Link></li>
          <li><Link to={'/cart'} style={{ textDecoration: 'none', color: '#ADD8E6' }}>Cart</Link></li>
          <li><Link to={'/wishlist'} style={{ textDecoration: 'none', color: '#ADD8E6' }}>Wishlist</Link></li>
        </ul>
      </div>

      <div className='col-md-6 col-lg-4'>
        <h4 className='ms-1 text-warning'>Guides</h4>
        <ul className='list-unstyled ms-1'>
          <li><Link to={'https://getbootstrap.com/'} style={{ textDecoration: 'none', color: '#ADD8E6' }}>React</Link></li>
          <li><Link to={'https://getbootstrap.com/'} style={{ textDecoration: 'none', color: '#ADD8E6' }}>React Bootstrap</Link></li>
          <li><Link to={'https://getbootstrap.com/'} style={{ textDecoration: 'none', color: '#ADD8E6' }}>Routing</Link></li>
        </ul>
      </div>

      <div className='col-md-6 col-lg-4'>
        <h4 className='ms-1 text-warning'>Contact Us</h4>
        <div className='sub d-flex mt-3'>
          <input type="text" className='form-control ms-1' placeholder='Enter your Email' />
          <button className='btn btn-primary ms-2 me-1'><i className="fa-solid fa-arrow-right"></i></button>
        </div>
        <div className='icons fs-4 d-flex justify-content-between mt-3'>
        <Link to={'https://getbootstrap.com/'} style={{textDecoration:'none',color:'#ADD8E6'}}><i className="fa-solid fa-envelope ms-1"></i></Link>
        <Link to={'https://getbootstrap.com/'} style={{textDecoration:'none',color:'#ADD8E6'}}><i className="fa-brands fa-twitter"></i></Link>
        <Link to={'https://getbootstrap.com/'} style={{textDecoration:'none',color:'#ADD8E6'}}><i className="fa-brands fa-linkedin"></i></Link>
        <Link to={'https://getbootstrap.com/'} style={{textDecoration:'none',color:'#ADD8E6'}}><i className="fa-brands fa-instagram"></i></Link>
        <Link to={'https://getbootstrap.com/'} style={{textDecoration:'none',color:'#ADD8E6'}}><i className="fa-brands fa-github"></i></Link>
        <Link to={'https://getbootstrap.com/'} style={{textDecoration:'none',color:'#ADD8E6'}}><i className="fa-brands fa-facebook me-1"></i></Link>
          {/* Add other social media icons here */}
        </div>
      </div>

    </div>
    <p className='text-center mt-2'>Copyright © 2023 TEEREX T-shirt. Built with React.</p>
  </div>
  )
}

export default Footer