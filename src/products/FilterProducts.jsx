import React from 'react'
import useFetch from '../customHooks/useFetch'

export default function FilterProducts(props) {
    let categories = props.categoriesArray
    
  return (
    <>
      <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Filter By Categories
            </button>
            <ul className="dropdown-menu">
                <li key={'all'}><a className="dropdown-item" href="#" >All</a></li>
                {categories.map(category => {return (
                    <li key={category}><a className="dropdown-item" href="#" >{category}</a></li>
                )})}
            </ul>
        </div>
    </>
  )
}
