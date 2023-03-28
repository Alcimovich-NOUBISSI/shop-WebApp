import './OrderItems.css'

const OrderItems = (props) => {
  return (
    <div className='items_contaner row mb-1'>
      <div className='col-md-2 rounded-5 p-1 item_image'> <img alt="produit" src={props.imageUrl}/> </div> 
      <div className='col-md-6'> <p>{props.name}</p> </div> 
      <div className='col-md-4 text-end'> <p> $ {props.price}</p> </div>
    </div>
  );
}

export default OrderItems;