import React from 'react'
import CategoriesBoxes from './CategoriesBoxes'
import HomeBanner from './HomeBanner'

function HomePage() {
  return (
    <>  
    <HomeBanner/>
      {/* Agro Product Section */}

      <section className="text-gray-600 body-font w-4/5 mx-auto">
        <div className="container px-5 pt-24 pb-0 mx-auto">
          <div className="flex flex-col text-center w-full">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Categories - Agro Products</h1>
          </div>
        </div>
        <div className="container px-5 py-14 mx-auto">
          <div className="flex flex-wrap -m-4">
             <CategoriesBoxes title="Rice" image="-LdilhDx3sk"/>
             <CategoriesBoxes title="Wheat" image="joOVC9d-jis"/>
             <CategoriesBoxes title="Nuts" image="UhrHTmVBzzE"/>
             <CategoriesBoxes title="Sugar" image="u_Mwofs_zu0"/>
             <CategoriesBoxes title="Spices" image="dqVPEGkuR_U"/>
             <CategoriesBoxes title="Fruits" image="zeFy-oCUhV8"/>
             <CategoriesBoxes title="Vegetables" image="5aJVJvJ9rG8"/>
             <CategoriesBoxes title="Pulses" image="ZtEtw0lphgc"/>
          </div>
        </div>
      </section>




    {/* Dairy Product Section */}

      <section className="text-gray-600 body-font w-4/5 mx-auto">
        <div className="container px-5 pt-24 pb-0 mx-auto">
          <div className="flex flex-col text-center w-full">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Categories - Dairy Products</h1>
          </div>
        </div>
        <div className="container px-5 py-14 mx-auto">
          <div className="flex flex-wrap -m-4">
             <CategoriesBoxes title="Milk" image="bKy9GGCAVGE"/>
             <CategoriesBoxes title="Butter" image="094mP_CBdpM"/>
             <CategoriesBoxes title="Cheese" image="KaK2jp8ie8s"/>
             <CategoriesBoxes title="Curd" image="-hAvXEvW9Y0"/>
             <CategoriesBoxes title="Butter Milk" image="0sz-sfC_ekc"/>
             <CategoriesBoxes title="Fruits" image="7r1HxvVC7AY"/>
             <CategoriesBoxes title="Cream" image="6rreA768KXs"/>
             <CategoriesBoxes title="Yogurt" image="NFHeBysjCTI"/>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage