import React from 'react';
import './InventoryItem.css';
import useProducts from '../../../hooks/useProducts';
import ManageItem from '../ManageItem/ManageItem';
import { Link } from 'react-router-dom';

const InventoryItem = () => {
    const [products, setProduct] = useProducts([]);
    return (
        <div>
            <h2 className='text-center text-secondary mt-3'>Inventory Items</h2>

            <div className='item mt-4'>
                {
                    products.slice(0, 6).map(product => <ManageItem
                        key={product._id}
                        product={product}
                    ></ManageItem>)
                }

            </div>
            <Link to='/manageinventory'>
                <button  className='d-block mx-auto text-decoration-none m-3 btn btn-outline-dark'>Manage Inventory</button>
            </Link>
        </div>
    );
};

export default InventoryItem;