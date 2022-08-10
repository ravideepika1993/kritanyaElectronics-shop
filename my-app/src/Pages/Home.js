import React from 'react'
import { Link } from 'react-router-dom';
import Slider from '../inc/Slider'
import './Home.css';
import VMV from './VMV';
import Services from './Services';
import Footer from './Footer';




const Home = () => {
  return (
    <div>
      <Slider />
      
      <section>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 text-center '>
              <h className="heading">Our Company</h>
              <p className='para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

</p>
            <Link to="/about" className='btn-btn'>Read More</Link>
</div>
          </div>
        </div>
      </section>
      <VMV />
      <Services />
      <Footer />
    </div>
    
  )
}
export default Home;
