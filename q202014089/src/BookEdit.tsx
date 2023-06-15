import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components';
import type { DispatchFunc, Book } from './BookReducer'
import { createBook } from './BookReducer'
import { loadBook, updateBook, addBook, deleteBook } from './BookService';

const Div = styled.div` 
    & > div { margin-bottom: 20px; } 
    & input[type=text], input[type=email], input[type=tel] { padding: 8px; width: 300px; font-size: 12pt; } 
    & select { padding: 8px; width: 300px; font-size: 12pt; } 
    & > div > label { margin-right: 20px; font-size: 12pt; }
    & button { padding: 0.4em 1.5em; font-size: 12pt; margin-right: 5px; } `;

type Props = { dispatch: DispatchFunc } 

const BookEdit = React.memo(({ dispatch }: Props) => {
    const navigate = useNavigate();
    const params = useParams();
    const id: number = params.id ? parseInt(params.id) : 0;
    const [book, setBook] = useState<Book>(createBook()); const load = async () => {
        const book1: Book = await loadBook(Number(id), dispatch); setBook(book1);
    }
    useEffect(() => { if (id) load(); }, []);
    const onChange = (e: any) => setBook({ ...book, [e.target.name]: e.target.value });
    const onSave = () => {
        if (book.id) 
            updateBook({ ...book, timestamp: Date.now() }, dispatch);
        else addBook(book, dispatch);
        navigate('/'); 
    const onDelete = () => {
        if (confirm('삭제하시겠습니까?')) {
            deleteBook(id, dispatch);
            navigate('/');
        }
    }
    const onCancel = () => navigate('/');
    return (
        <Div>
            <h1>책 {id ? '수정' : '등록'}</h1>
            <div>
                <input type="text" placeholder="제목" onChange={onChange} name="bookTitle" value={book.title} />
            </div>
            <div>
                <input type="text" placeholder="저자" onChange={onChange} name="author" value={book.author} /> 
            </div> 
            <div> 
                <input type="text" placeholder="가격" onChange={onChange} name="price" value={book.price} />
            </div> 
            <div> 
                <input type="text" placeholder="카테고리" onChange={onChange} name="categoryId" value={book.categoryId} /> 
            </div> 
                <div> 
                <select value={book.categoryId} name="categotyId" onChange={onChange}>
                    <option value={0}>카테고리를 선택하세요</option>
                    <option value={1}>소설</option>
                    <option value={2}>경제</option>
                    <option value={3}>역사</option>
                    <option value={4}>과학</option>
                </select> 
            </div> 
            <div> 
                <button type="button" onClick={onSave}>저장</button> {(id > 0) && <button type="button" onClick={onDelete}>삭제</button>} 
                <button type="button" onClick={onCancel}>취소</button>
            </div> 
        </Div>
    )
})

export default BookEdit;