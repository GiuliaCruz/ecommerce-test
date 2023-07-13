import './HomeScreen.css';
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'

import Product from "../components/Product";

import { getProducts as listProducts} from '../redux/actions/productActions';
 
const HomeScreen = () => {

    const dispach = useDispatch();

    const getProducts = useSelector(state => state.getProducts);
    const {products, loading, error} = getProducts;

    useEffect(()=> {
        dispach(listProducts())
    }, [dispach]) 

    return <div className="homescreen">
        <h2 className="homescreen__title">Latest Products</h2>
        
        <div className="homescreen__products">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
        </div>
    </div>
};

export default HomeScreen;