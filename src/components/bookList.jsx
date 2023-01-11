import "../styles/bookList.css"
import { useState,useEffect } from "react";
import { useNavigate,useLocation } from "react-router-dom";

const BookList = () => {
    let location = useLocation()

    let [books,setBooks]=useState([])
    useEffect(()=>{
        let fetchData = async() => {
            let response = await fetch("http://localhost:3000/books")
            let data= await response.json()
            setBooks(data)
        }
        fetchData()
    },[books])   //its is used delete,[]
    let handleClick = (id,title)=>{   
        fetch(`http://localhost:3000/books/${id}`,{
            method:"DELETE"
        })
        alert(`${title} will be deleted permently`)

        // setBooks(books.filter(s=>s.id!=id))
        // alert(`${title} has been deleted`)
    } 
    let navigate = useNavigate()
    let handleRead=(id)=>{
        // navigate(`/admin/book-list/${id}`)
        if(location.pathname == '/admin/book-list'){
            navigate(`/admin/book-list/${id}`)
        }else{
            navigate(`/user/book-list/${id}`)
        }
    }
                                             
    return ( 
        <div className="bookList">
            <h1>Book List : {books.length}</h1>
            <div className="book_section">
                {books.map(data=>(
                    <div className="books">
                        <div className="bkImage">
                            <img src={data.thumbnailUrl} alt="" />
                        </div>
                        <div className="book">
                        <h1>{data.title}</h1>
                        <h2>{data.authors}</h2>
                        <h2>{data.categories}</h2>
                        <h4>Page Count : {data.pageCount}</h4>
                        { location.pathname == '/adim/book-list' && <button onClick={()=>handleClick(data.id,data.title)}>Remove</button> }
                        {/* <button onClick={()=>handleClick(data.id,data.title)}>Remove</button> */}
                        <button onClick={()=>handleRead(data.id)} id="read">Read more..</button>
                        </div>
                    </div>
                    
                ))}
            </div>
        </div>
     );
}
 
export default BookList;
