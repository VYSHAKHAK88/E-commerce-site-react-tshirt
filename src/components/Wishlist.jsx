import React from 'react'
import { useSelector } from 'react-redux'
import { Col, Row,Card,Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import {removeCartItems} from '../redux/wishlistSlice'
import { deleteFromWishlist } from '../redux/wishlistSlice';
function Wishlist() {
 const wishlistArray =  useSelector((state)=>state.WishlistReducer.wishlist)??[];
 console.log(wishlistArray);
 const dispatch = useDispatch()
 const addToCartFromWishlist = (product)=>{
  dispatch(addToCart(product))
  dispatch(deleteFromWishlist(product.id))
 }
  return (
    <div style={{marginTop:'10rem'}}>
      <Row className='mb-5 ms-5'>
{
wishlistArray.length>0?
wishlistArray.map((product,index)=>(
  <Col key={index} className='mb-4' sm={12} md={6} lg={4} xl={3} >
  <Card style={{ width: '18rem', height:'32rem' }}>
   <Card.Img height={'220px'} variant="top" src={product.image} />
    <Card.Body>
     <Card.Title className='text-warning fw-bolder'>{product?.title.slice(0,70)}</Card.Title> 
      <Card.Text>
    <p>
      {product?.description.slice(0,50)}...
    </p>
    <p className='fw-bolder'>$ {product?.price}</p>
      </Card.Text>
         <div className='d-flex justify-content-between'>
          <Button onClick={()=>dispatch(deleteFromWishlist(product.id))} className='btn btn-light'><i className="fa-solid fa-heart-circle-minus fa-2x text-danger"></i></Button>
          <Button onClick={()=>addToCartFromWishlist(product)}  className='btn btn-light'><i className='fa-solid fa-cart-plus fa-2x text-success'></i></Button>
        </div>
      </Card.Body>
     </Card>
 </Col>
)):<p style={{fontSize:'2rem'}} className='fw-bolder text-danger ms-4'>Wishlist is Empty!!!</p>
}
      </Row>
    </div>
  )
}




export default Wishlist