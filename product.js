import Card from '../components/card';
import Nav from './navbar';
import Footer from './footer';
import Products from "../Json/Data.json"
import { useState } from 'react';
import { AiOutlineSearch } from "react-icons/ai";


function Product() {

   const [search, setSearch] = useState(Products);

   const handleSearch = (e) => {
      const searchedValue = e.target.value;
      if (searchedValue) {
         const filterData = Products?.filter((product) =>
         (
            (product.description?.toLowerCase().includes(searchedValue.toLowerCase()))
         ));
         setSearch([...filterData]);
      } else {
         setSearch([...Products]);
      }
   };





   return (
      <>
         <Nav />
         <form>
            <input type='text' placeholder='Search Gold, Diamond Jwellery and more....... ' class="form-control mt-4 w-25 field ms-3" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleSearch} /><AiOutlineSearch className='search-icon' />
         </form>
         <hr />
         <div className='container  my-2'>
            <div className='row'>
               {
                  search.map(item => (
                     <Card
                        name={item.name}
                        price={item.price}
                        image={item.image}
                        title={item.description}
                      id={item.id}
                      item={item}
 
                     />
                  ))}

            </div>
         </div>
         <Footer />
      </>

   )
}

export default Product;  