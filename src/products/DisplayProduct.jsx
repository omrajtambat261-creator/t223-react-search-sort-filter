import React from 'react'

export default function DisplayProduct(props) {
  let products = props.productsArray
  console.log(products);


  
  return (
    <div className='row'>
      {products.map(product => {return(
        <div key={product.id} className='col-3 mb-5'>
          <div className="card" style={{width:'18rem'}}>
            <img src={product.thumbnail} className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className='card-text'>{product.category}</p>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
              <a href="https://instagram.com" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      )})}
    </div>
  )
}
