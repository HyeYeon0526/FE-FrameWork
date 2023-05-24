import type { Product, DispatchFunc } from './productReducer';
import { createProduct } from './productReducer';
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:3000";

function onError(message: string, error: any, dispatch: DispatchFunc) { 
    const s = message + (error instanceof Error ? error.message : error);
    dispatch({ type: 'setErrorMsg', payload: { errorMsg: s } }); 
}

export async function reloadProducts(dispatch: DispatchFunc) { 
    try { const response = await axios.get("/products");
        const products: Product[] = response.data; 
        dispatch({ type: 'setProducts', payload: { products } });
    } catch (error) { onError('조회 에러: ', error, dispatch);
    }
}
export async function loadProduct(id: number, dispatch: DispatchFunc): Promise<Product> {
    try { 
        const response = await axios.get("/products/" + id); 
        return response.data;
    } catch (error) { 
        onError('조회 에러: ', error, dispatch); return createProduct();
    }
}

export async function updateProduct(product: Product, dispatch: DispatchFunc) { 
    try { await axios.put("/products/" + product.id, product);
    reloadProducts(dispatch);
    } catch (error) { 
        onError('저장 에러: ', error, dispatch);
    }
}

export async function deleteProduct(id: number, dispatch: DispatchFunc) { 
    try { await axios.delete("/products/" + id); 
    reloadProducts(dispatch);
     } catch (error) { 
        onError('삭제 에러: ', error, dispatch);
    }
}

export async function addProduct(product: Product, dispatch: DispatchFunc) { 
    try { await axios.post("/products/", product); 
    reloadProducts(dispatch);

    } catch (error) { 
        onError('저장 에러: ', error, dispatch);
    }
}