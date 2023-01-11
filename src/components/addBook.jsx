import "../styles/addBook.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
    let navigate = useNavigate()

    let [title, setTitle] = useState("")
    let [categories, setCategories] = useState("")
    let [authors, setAuthors] = useState("")
    let [pageCount, setPageCount] = useState("")
    let [shortDescription, setShortDescription] = useState("")
    let [longDescription, setLongDescription] = useState("")
    let [thumbnailUrl, setThumbnailURL] = useState("")

    let handleClick = (e) => {
        e.preventDefault();

        //data to be posted
        let bookData = {title, categories, authors, pageCount, shortDescription, longDescription, thumbnailUrl }

        //posting to server
        fetch("http://localhost:3000/books", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bookData)
        })
        alert("Book added successfully")
        navigate('/admin/book-list')
    }
    //title, category,authors,pageCount,shortDescription,longDescription,thumbnailUrl
    return (
       
        <div className="addBook">
            <div className="space">
            <div className="cover">
            <h1>Add a Book</h1>
            <div className="form">
                <form action="" onSubmit={handleClick}>
                    <div className="title">
                        <label htmlFor="">TITLE : </label>
                        <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" required placeholder="title of the book" />
                    </div>
                    <div className="category">
                        <label htmlFor="">CATEGORIES : </label>
                        <input value={categories} onChange={(e) => setCategories(e.target.value)} type="text" required placeholder="category of the book" />
                    </div>
                    <div className="authors">
                        <label htmlFor="">AUTHORS : </label>
                        <input value={authors} onChange={(e) => setAuthors(e.target.value)} type="text" required placeholder="authors of the book" />
                    </div>
                    <div className="pageCount">
                        <label htmlFor="">PAGE COUNT : </label>
                        <input value={pageCount} onChange={(e) => setPageCount(e.target.value)} type="text" required placeholder="number of pages" />
                    </div>
                    <div className="shortDescription">
                        <label htmlFor="">SHORT DESCRIPTION : </label>
                        <textarea value={shortDescription} onChange={(e) => setShortDescription(e.target.value)} name="" id="" cols="30" rows="4" placeholder="enter the description"></textarea>
                    </div>
                    <div className="longDescription">
                        <label htmlFor="">LONG DESCRIPTION : </label>
                        <textarea value={longDescription} onChange={(e) => setLongDescription(e.target.value)} name="" id="" cols="30" rows="4" placeholder="enter the description"></textarea>
                    </div>
                    <div className="thumbnailUrl">
                        <label htmlFor="">THUMBNAIL URL : </label>
                        <input value={thumbnailUrl} onChange={(e) => setThumbnailURL(e.target.value)} type="text" placeholder="thumbnail URl" />
                    </div>
                    <button> Add Book</button>
                </form>
            </div>
            </div>
            </div>
        </div>
        
    );
}

export default AddBook;