import React from 'react';
import { Link } from 'react-router-dom';
import Product from '../components/Product';


const ProductPage = ({match}) => {
    console.log(match.params.id);
    return (  

<React.Fragment>
        <div>Strona produktu</div> <br/>
        <Product  id={match.params.id} /> <br/>
        <Link to="/products">Powrót do listy produktów</Link>
</React.Fragment>

    );
}
 
export default ProductPage;

