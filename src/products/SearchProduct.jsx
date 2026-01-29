import React from 'react'
import { useForm } from 'react-hook-form'

export default function SearchProduct(props) {
  let {register, handleSubmit, formState}=useForm()

    function collectFormData(data){
    console.log(data);
    props.searchProductbyNameFunction(data.productName)  ;
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit(collectFormData)}>
        <div class="mb-3">
          <input type="text" class="form-control" placeholder='Enter ProducT Name' 
          {...register('productName', {required:true, message:'username is required'})}
          />
          {formState.errors?.productName?alert('product name is required'):''}
          {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
        </div>
        <input type="submit" class="btn btn-primary"/>
      </form>
    </div>
  )
}