import React from 'react'

export default function Category({name, icon}) {
  return (
    <div mt="4" pt="2" className="col-md-6 col-lg-3 mb-5 mt-5">
      <div className="popu-category-box rounded text-center">
        <div className="popu-category-icon icons-md">
          <img src={`/assets/${icon}.png`} alt='category logo' />
        </div>
        <div className="popu-category-content mt-4">
          <a className="text-dark stretched-link text-decoration-none" href="/jobs">
            <h5 className="fs-18">{name}</h5>
          </a>
        </div>
      </div>
    </div>
  )
}
