import type { Book, DispatchFunc } from './BookReducer';
import { createBook } from './BookReducer';
import axios from 'axios'; axios.defaults.baseURL = "http://localhost:3000";

function onError(message: string, error: any, dispatch: DispatchFunc) { 
    const s = message + (error instanceof Error ? error.message : error); 
    dispatch({ type: 'setErrorMsg', payload: { errorMsg: s } }); 
}

export async function reloadBooks(dispatch: DispatchFunc) { 
    try { const response = await axios.get("/books"); 
        const books: Book[] = response.data; 
    dispatch({ type: 'setBooks', payload: { books } }); } 
        catch (error) { onError('조회 에러: ', error, dispatch); } 
}

export async function loadBook(id: number, dispatch: DispatchFunc): Promise<Book> { 
    try { const response = await axios.get("/books/" + id); 
        return response.data; } 
    catch (error) { 
        onError('조회 에러: ', error, dispatch); 
        return createBook(); } 
}

export async function updateBook(book: Book, dispatch: DispatchFunc) { 
    try { 
        await axios.put("/books/" + book.id, book); 
        reloadBooks(dispatch); }
    catch (error) {
         onError('저장 에러: ', error, dispatch); } 
} 

export async function deleteBook(id: number, dispatch: DispatchFunc) { 
    try { 
        await axios.delete("/books/" + id); 
        reloadBooks(dispatch); } 
    catch (error) { 
        onError('삭제 에러: ', error, dispatch); } 
}

export async function addBook(book: Book, dispatch: DispatchFunc) { 
    try { 
        await axios.post("/books/", book); 
        reloadBooks(dispatch); } 
    catch (error) { onError('저장 에러: ', error, dispatch); } 
}