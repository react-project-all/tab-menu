import React, { useState } from 'react'
import productsData from '../util/productsData'
import "./Tab.css"

const Tab = () => {

  const [activeTab, setActiveTab] = useState(productsData[0].id)

  const currentTab = productsData.find(tab => tab.id === activeTab)

  return (
    <div className="products">

      {/* 탭 메뉴 */}
      <div className="tab-menu">
        {productsData.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={activeTab === tab.id ? "active" : ""}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 상품 리스트 */}
      <div className="product-list">
        {currentTab.subProducts.map((product, index) => (
          <a
            key={index}
            href={product.link}
            className="product-card"
          >
            <img src={product.image} alt={product.description} />

            <div className="hover-info">
              {product.description}
            </div>
          </a>
        ))}
      </div>

    </div>
  )
}

export default Tab