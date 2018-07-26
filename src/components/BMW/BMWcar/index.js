//Dependencies
import React,{Component} from 'react';
import { Icon } from 'react-materialize';
import { Link } from 'react-router-dom';
//Internals
import PRODUCTS from '../../Data';

class BMWcar extends Component {
  render() {
    return (
      <div className="items">
      {PRODUCTS.map((product) => {
        console.log(product);
        if (product.category === "flowerHorn") {
          console.log(product.id);
          return(
            <div className="item">
              <Link to={`/products/${product.id}`}>
              <div className="product-img">
                <img alt={product.name} src={product.img} />
              </div>
              <div className="product-details">
                <h1 id="product-name">{product.name}</h1>
                <h4 id="product-description">{product.description}</h4>
              </div>
              </Link>
              <div className="price-add">
                <h5 id="product-price">${product.price}</h5>
              </div>
            </div>
          )
        }
      })}
    </div>
    )
  }
}

//#region  old code
// const BMWcar = () => (
//   <div className="items">
//     {PRODUCTS.map((product) => {
//       if (product.category === "flowerHorn") {
//         return(
//           <div className="item">
//             <Link to={`/products/${product.id}`}>
//             <div className="product-img">
//               <img alt={product.name} src={product.img} />
//             </div>
//             <div className="product-details">
//               <h1 id="product-name">{product.name}</h1>
//               <h4 id="product-description">{product.description}</h4>
//             </div>
//             </Link>
//             <div className="price-add">
//               <h5 id="product-price">${product.price}</h5>
//             </div>
//           </div>
//         )
//       }
//     })}
//   </div>
// )
//#endregion
export default BMWcar;
