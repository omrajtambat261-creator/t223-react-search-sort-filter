import React from 'react'
import { useForm } from 'react-hook-form';


export default function SearchProduct(props) {
  let {register, handleSubmit, formState}=useForm()

    function collectFormData(data){
    console.log(data);
    props.searchProductbyNameFunction(data.productName)  ;
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit(collectFormData)}>
        <div className='d-flex'>
          <div className="mb-3 ms-5 pe-2">
          <input type="text" className="form-control" placeholder='Enter Product Name' 
          {...register('productName', {required:true, message:'username is required'})}
          />
          {formState.errors?.productName?alert('product name is required'):''}
          {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
        </div>
        <input type="submit" className="btn btn-primary rounded"/>
        </div>
      </form>
    </div>
  )
}