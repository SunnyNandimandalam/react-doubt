import React from 'react'; 
import Rating from '@material-ui/lab/Rating';

const data = [ 
    { 
        id:1,
        name:"Leather Straps Wristwatch",
        price:"120",
        url:"https://dummyjson.com/image/i/products/61/thumbnail.jpg",
        available:20,
        buttonColor:true,
        rating:0,
    }, 
    { 
        id:2,
        name:"Steel Analog Couple Watches",
        price:"99",
        url:"https://dummyjson.com/image/i/products/66/thumbnail.jpg",
        available:12,
        buttonColor:true,
        rating:0,

    }, 
    { 
        id:3,
        name:"Royal Blue Premium Watch",
        price:"250",
        url:"https://dummyjson.com/image/i/products/63/thumbnail.webp",
        available:9,
        buttonColor:true,
        rating:0,
    }, 
    { 
        id:4,
        name:"Waterproof Leather Brand Watch",
        price:"37",
        url:"https://dummyjson.com/image/i/products/62/thumbnail.jpg",
        available:3,
        buttonColor:true,
        rating:0,
    }, 
    { 
        id:5,
        name:"Fashion Magnetic Wrist Watch",
        price:"57",
        url:"https://dummyjson.com/image/i/products/67/thumbnail.jpg",
        available:10,
        buttonColor:true,
        rating:0,
    }, 
    { 
        id:6,
        name:"Stylish Luxury Digital Watch",
        price:"29",
        url:"https://dummyjson.com/image/i/products/68/thumbnail.webp",
        available:15,
        buttonColor:true,
        rating:0,
    }, 
    { 
        id:7,
        name:"Leather Strap Skeleton Watch",
        price:"35",
        url:"https://dummyjson.com/image/i/products/64/thumbnail.jpg",
        available:4,
        buttonColor:true,
        rating:0,
    }, 
    { 
        id:8,
        name:"Golden Watch Pearls Bracelet Watch",
        price:"190",
        url:"https://dummyjson.com/image/i/products/69/thumbnail.jpg",
        available:11,
        buttonColor:true,
        rating:0,
    },
    {
        id:9,
        name:"Stainless Steel Wrist Watch",
        price:"47",
        url:"https://dummyjson.com/image/i/products/65/thumbnail.webp",
        available:7,
        buttonColor:true,
        rating:0,
    } 
] 

const CardItems = (props) => { 
    const handleAddClick = (index)=>{ 
        data[index].buttonColor = false; 
        props.data.setCount((prev)=> prev+1);
        props.data.setAdd((prev)=>!prev);
        data[index].available -= 1;
    } 
    const handleRemoveClick = (index)=>{ 
        data[index].buttonColor = true; 
        props.data.setCount((prev)=> prev-1);
        props.data.setAdd((prev)=>!prev);
        data[index].available += 1;
    } 
    const handleRating = (index,newValue) => {
        data[index].rating = newValue.target.defaultValue;
       props.data.setRatingValue(newValue);
    }
  return ( 
    <> 
    <section className="py-5">
        <div className='cardItem container'>
            
        { 
          data &&  data.map((item,index)=>{
                return ( 
                 <div  key={index}> 
                    <div className='card' > 
                        <img className='image' src={item.url}  alt='Something'/>
                  <h5>{item.name}</h5>
                  <p>${item.price}</p>
                  <p>Available : {item.available}</p>
                    <div>
                    <Rating value={item.rating} onChange={(newValue) =>handleRating(index,newValue)}/>
                    </div>
                    {(item.buttonColor) ?
                        <button className='btn btn-danger' value={item.rating} onClick={() => handleAddClick(index)}>ADD TO CART</button>
                        :
                        <button className='btn btn-dark' value={item.index} onClick={()=> handleRemoveClick(index)}>REMOVE</button>
                    }
                    </div>
                 </div> 
                ) 
            }) 
        } 
        </div>
        </section>
    </> 
  ) 
} 
 
export default CardItems;