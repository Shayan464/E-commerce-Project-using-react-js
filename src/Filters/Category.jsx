import React from 'react'

const Category = ({selectedcategory,setSelectedCategory,setCurrentPage,getUniqueCategories,allProducts}) => {
  return (
    <>
    <label className="text-lg px-2 text-white font-bold">Category:</label>
          <select
            className="ml-1 mb-2 border border-yellow-200 bg-yellow-600 rounded px-7 py-1 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            value={selectedcategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              setCurrentPage(1);
            }}
          >
            <option value="">All categories</option>
            {getUniqueCategories(allProducts).map((category, idx) => (
              <option key={idx} value={category}>
                {category}
              </option>
            ))}
          </select>
          </>
  )
}

export default Category