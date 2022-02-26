import React from 'react'
import './Home.css'
import Landing from '../../components/landing/Landing'
import CategoryIcon from '../../components/category/CategoryIcon'
import Footer from '../../components/footer/Footer'

export default function Home() {
  const categories = ["Information Technology", "Healthcare", "Banking", "Manufacturing", "Food & Beverages", "Retail", "Customer Service", "Engineering"]
  return (
    <div className='page-content'>
      <section className='bg-home2' id='landing'>
        <Landing />
      </section>
      {/* gap */}
      <section className="section" id="categories">
        <div className="container">
          <div className="justify-content-center row">
            <div className="col-lg-6">
              <div className="section-title text-center">
                <h3 className="title">Select Job Industry </h3>
                <p className="text-muted">Select your desired job industry, we'll give you all the entry level jobs you need.</p>
              </div>
            </div>
          </div>
          <div className="row">
            {categories.map((name, index) => <CategoryIcon name={name} icon={name} key={index} />)}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
