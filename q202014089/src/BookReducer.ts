export type Book = {  id: number, title: string, author: string, price: number, categoryId: number, timestamp: number } 

export type State = { books: Book[], errorMsg: string, } 

export const initialState: State = { books: [], errorMsg: '' }

export type Action = { type: 'setBooks', payload: { books: Book[] } } | { type: 'setErrorMsg', payload: { errorMsg: string } } 

export type DispatchFunc = (action: Action) => void; 

export type ReducerFunc = (state: State, action: Action) => State;

export function createBook(): Book { return { id: 0, title: '', author: '', price: 0, categoryId: 0, timestamp: 0 }; } 

function merge(oldBooks: Book[], newBooks: Book[]): Book[] { const map = new Map<number, Book>(); 
    
    for (const book of oldBooks) map.set(book.id, book); 
    
    return newBooks.map(book => { 
        const oldBook = map.get(book.id); 
        return (oldBook && oldBook.timestamp == book.timestamp) ? oldBook : book; }); } 
        
export const reducer: ReducerFunc = ({ books, errorMsg }: State, action: Action) => { 
    switch (action.type) {
         case 'setBooks': books = merge(books, action.payload.books); 
            if (errorMsg) errorMsg = ''; 
            break; 
         case 'setErrorMsg': errorMsg = action.payload.errorMsg; 
            break;
            default: 
        throw new Error('unknown action type'); 
    }
    return { books, errorMsg }; 
}