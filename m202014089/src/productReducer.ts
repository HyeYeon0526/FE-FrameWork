export type Product = { 
    id: number, 
    title: string, 
    category: string,
    price: number, 
    quantity: number, 
    available: boolean
}

export type State = { 
    products: Product[], 
    errorMsg: string, 
}

export const initialState: State = { 
    products: [], 
    errorMsg: '' 
}

export type Action = 
    { type: 'setProducts', payload: { products: Product[] } } | 
    { type: 'setErrorMsg', payload: { errorMsg: string } }

export type DispatchFunc = (action: Action) => void;

export type ReducerFunc = (state: State, action: Action) => State;

export function createProduct(): Product{      
    return {
        id: 0, 
        title: '', 
        category: '',
        price: 0, 
        quantity: 0, 
        available: false
    };

}

function merge(oldProduct: Product[], newProduct: Product[]): Product[] { const map = new Map<number, Product>(); 
    for (const product of oldProduct) 
        map.set(product.id, product); 
    return newProducts.map(product => { 
        const oldProduct = map.get(product.id);
        return (oldProduct && oldProduct.timestamp == product.timestamp) ? Product : product;
    });
}

export const reducer: ReducerFunc = ({ products, errorMsg }: State, action: Action) => { 
    switch (action.type) { 
        case 'setProducts': 
            products = merge(products, action.payload.products); 
            if (errorMsg) errorMsg = ''; 
            break;
         case 'setErrorMsg': 
            errorMsg = action.payload.errorMsg; 
            break; 
        default: 
            throw new Error('unknown action type');
        }
        return { products, errorMsg }; 
    }