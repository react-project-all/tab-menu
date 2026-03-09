import React, { useState } from 'react'
import productsData from '../util/productsData'
import './Tab.css'

const Tab = () => {
  const [activeTab, setActiveTab] = useState(productsData[0].id)

  const currentTab =
    productsData.find((tab) => tab.id === activeTab) || productsData[0]

  return (
    <section className="product-tab-section">
      <div className="tab-menu">
        {productsData.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="tab-layout">
        <a href={currentTab.mainProduct.link} className="main-product">
          <img
            src={currentTab.mainProduct.image}
            alt={currentTab.mainProduct.description}
          />

          <div className="main-product-text">
            <h3>{currentTab.mainProduct.description}</h3>
            <span>MORE SEE →</span>
          </div>
        </a>

        <div className="sub-product-grid">
          {currentTab.subProducts.map((product, index) => (
            <a
              key={`${product.link}-${index}`}
              href={product.link}
              className="sub-product-card"
            >
              <img src={product.image} alt={product.description} />

              <div className="sub-product-hover">
                <p>{product.description}</p>
                <span>제품 보러가기 →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Tab