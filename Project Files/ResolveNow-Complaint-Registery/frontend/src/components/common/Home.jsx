import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Image1 from '../../Images/Image1.png'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Footer from './FooterC'


const Home = () => {
   return (
      <>
         <Navbar style={{ backgroundColor: '#0D47A1' }} variant="dark">
            <Container>
               <Navbar.Brand className="text-white d-flex align-items-center" href="/">
             <img
               src="/logo.png" 
                  width="60"
                  height="60"
                  className="d-inline-block align-top me-2"
                  alt="Logo"
               />
                   ResolveNow
            </Navbar.Brand>

               <ul className="navbar-nav">
                  <li className="nav-item mb-2">
                     <Link to={'/'}
                        className={`nav-link text-light `}
                     >
                        Home
                     </Link>
                  </li>
                  {/* <li className="nav-item mb-2">
                     <Link
                        to={'/About'}
                        className={`nav-link text-light `}
                     >
                        About
                     </Link>
                  </li> */}
                  <li className="nav-item mb-2">
                     <Link
                     to={'/signup'}
                        className={`nav-link text-light `}
                     >
                        SignUp
                     </Link>
                  </li>
                  <li className="nav-item mb-2">
                     <Link
                     to={'/login'}
                        className={`nav-link text-light `}
                     >
                        Login
                     </Link>
                  </li>
               </ul>
            </Container>
         </Navbar>
         <Container className='home-container'>
            <div className="left-side">
               <img src={Image1} alt="" />
            </div>
            <div className="right-side">
               <p>
                  <span className='f-letter'>Welcome to ResolveNow,</span><br />
                  <span className='s-letter'> Your Personal Complaint Assistant Platform for Fast Resolution</span> <br />
                  <span className='t-letter'>Raise, Track, and Resolve – All in One Place</span><br />
                  <Link to={'/Login'}><Button className='mt-3 register'>Register your Compliant</Button></Link>
               </p>
            </div>
         </Container>
         <Footer/>
      </>
   )
}

export default Home
