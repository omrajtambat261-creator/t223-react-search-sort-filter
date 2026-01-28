import React from 'react'
import DisplayProduct from './DisplayProduct'
import useFetch from '../customHooks/useFetch'
import FilterProducts from './FilterProducts'

export default function FetchProducts() {
  let {loading:productsLoading, data:productsObject }=useFetch("https://dummyjson.com/products")
  let {loading:categoriesLoading, data:categories}=useFetch("https://dummyjson.com/products/category-list")

  

  
  return (
    <div className='bg-secondary m-4 rounded-3 shadow-lg'>
      <div className='container mt-3'>
      <div className='row bg-warning text-center p-3 rounded-5'>
        <div className='col-4'> 
          {categories===null?"Loading":<FilterProducts categoriesArray={categories}/>}
        </div>
        <div className='col-4'>
          {categories===null?"Loading":<FilterProducts categoriesArray={categories}/>}
        </div>
        <div className='col-4'>
          {categories===null?"Loading":<FilterProducts categoriesArray={categories}/>}
        </div>

      </div>

      <div className='mt-4'>
        {productsObject===null?"Loading":<DisplayProduct productsArray={productsObject.products}/>}
      </div>
    </div>
    </div>
    
  )
}
