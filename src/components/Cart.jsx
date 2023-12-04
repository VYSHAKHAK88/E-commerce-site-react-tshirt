import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { deleteFromCart } from '../redux/cartSlice';
function Cart() {
  const cartArray = useSelector((state)=>state.cartReducer.cart)
  console.log(cartArray);
  const dispatch = useDispatch()
  return (
    <div className='container' style={{marginTop:'8rem'}}>

      {
        cartArray.length>0?
        
        <div className='container'>
          <h3 className='fw-bolder m-5 text-primary'>Cart summary</h3>
          <table className='container mt-5 table border rounded p-5'>
            <thead>
                <tr>
                  <th>#</th>
                  <th>Product Name</th>
                  <th>Product Image</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
            </thead>
            <tbody>
              {
                cartArray.map((product,index)=>(
                  <tr key={index}>
                      <td>{index+1}</td>
                      <td>{product.title}</td>
                      <td><img style={{height:'8rem', width:'7rem'}} className='img-fluid' src={product.image} alt="" /></td>
                      <td className='text-center'>$ {product.price}</td>
                      <td> <button onClick={()=>dispatch(deleteFromCart(product.id))} className='btn px-1'> <i className="fa-solid fa-trash text-danger fa-2x"></i> </button> </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
             
       : <p style={{fontSize:'2rem'}} className='fw-bolder text-danger mb-5'>Cart is Empty!!!</p>
      }
    </div>
  )
}

export default Cart