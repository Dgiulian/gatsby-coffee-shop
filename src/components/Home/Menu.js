import React, { useState, useEffect } from "react"
import Image from "gatsby-image"
import Title from "../shared/Title"

const getCategories = items => {
  const categoriesSet = new Set(items.map(item => item.category))
  return Array.from(["all", ...categoriesSet])
}

export default function Menu({ items }) {
  const [filteredItems, setFilteredItems] = useState(items)
  const [selectedCategory, setSelectedCategory] = useState("all")
  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredItems([...items])
    } else {
      setFilteredItems(items.filter(item => item.category === selectedCategory))
    }
  }, [selectedCategory, items])
  const categories = getCategories(items)

  if (!items.length) {
    return (
      <section className="menu py-5">
        <div className="container">
          <Title title="best of our menu" />
          <div className="row">
            <col-10 className="col-sm-6 mx-auto text-center text-capitalize">
              <h1>There are no items to display</h1>
            </col-10>
          </div>
        </div>
        Menu
      </section>
    )
  }
  return (
    <section>
      <div className="menu py-5 container">
        <Title title="best of our menu" />
        <div className="row mb-5">
          <div className="col-10 mx-auto text-center">
            {categories.map((category) => (
              <button
                key={category}
                className="btn btn-yellow mx-2 text-capitalize"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="row mb-5">
          {filteredItems.map(item => (
            <div key={item.id} className="col-11 col-md-6 my-3 d-flex ">
              <div>
                <Image fixed={item.image.childImageSharp.fixed} />
              </div>
              <div className="flex-grow-1 px-3">
                <div className="d-flex justify-content-between">
                  <h6 className="mb-0">
                    <small>{item.title}</small>
                  </h6>
                  <h6 className="mb-0 text-yellow">
                    <small>${item.price}</small>
                  </h6>
                  <p>{item.category}</p>
                </div>
                <div className="text-muted">
                  <small>{item.description}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
