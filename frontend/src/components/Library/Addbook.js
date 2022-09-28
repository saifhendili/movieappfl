import React,{useState} from 'react'
import { addBook } from '../../Redux/Actions/BookActions'
import { useDispatch, useSelector } from "react-redux";
  
function Addbook() {
    const [title,settitre]=useState("")
    const [rating,setrating]=useState()
    const [author,setauthor]=useState("")
    const [language,setlanguage]=useState("")
    const [cover,setcover]=useState("")
    const [pdf,setpdf]=useState("")
    const dispatch = useDispatch();

    const onCoverChanger=e=>{
        setcover(e.target.files[0]);
    }
    const onPdfChanger=e=>{
        setpdf(e.target.files[0]);
    }
    const onsubmit = (e) => {
        e.preventDefault();
     
        const formData=new FormData();
        formData.append("title",title);
        formData.append("rating",rating)
        formData.append("author",author)
        formData.append("language",language)
        formData.append("cover",cover)
        formData.append("pdf",pdf)
      e.target.reset()
        
        dispatch(addBook(formData))
       
    }

  return (
    <div class="container-fluid flex-grow-1 container-p-y">
    <h4 class="font-weight-bold py-3 mb-0">Dashboard</h4>
    <div class="text-muted small mt-0 mb-4 d-block breadcrumb">
 
    <div class="card mb-4">
                            <h6 class="card-header">Add Book</h6>
                            <div class="card-body">
                                <form  onSubmit={(e) => onsubmit(e)} enctype="multipart/form-data" >
                                    <div class="form-group">
                                        <label class="form-label">Title</label>
                                        <input type="text" class="form-control" name="title" value={title} onChange={(e) => settitre(e.target.value)} placeholder="Titre"/>
                                        <div class="clearfix"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label">Rating</label>
                                        <input type="number" class="form-control" name="rating" value={rating} onChange={(e) => setrating(e.target.value)} placeholder="Rating"/>
                                        <div class="clearfix"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label">Author</label>
                                        <input type="text" class="form-control" name="author" value={author} onChange={(e) => setauthor(e.target.value)} placeholder="Author"/>
                                        <div class="clearfix"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label">Language</label>
                                        <input type="text" class="form-control" name="language" value={language} onChange={(e) => setlanguage(e.target.value)} placeholder="Author"/>
                                        <div class="clearfix"></div>
                                    </div>
   
                                    <div class="form-group">
                                        <label class="form-label w-100">Image Cover</label>
                                        <input type="file"id="customFile"  onChange={(e) =>onCoverChanger(e)} name="cover"/>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label w-100">Pdf Book</label>
                                        <input type="file" id="PdfFile"  onChange={(e) =>onPdfChanger(e)} name="pdf"/>
                                    </div>
              
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>

                      
    </div>
  



</div>
)
}

export default Addbook;