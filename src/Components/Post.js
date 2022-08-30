import React, { useState } from 'react'
import axios from "axios";
import "./Post.css";

const Post = () => {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    img: "",
    content: ""
  });

  const changeInputValue = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData(prev => {
      return { ...prev, [name]: value }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, img, content } = formData;
    axios.post("http://localhost:3000/posts", {
      title: title,
      img: img,
      content: content
    }).then(res => {
      alert('Blog posted Succesfully! ');
      setFormData({
        id: "",
        title: "",
        img: "",
        content: ""
      })
    })

  }
  return (
    <div className='container my-5'>
      <h2 className='text-center my-4'>Add Your Blog</h2>
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Title</label>
          <input type="text" class="form-control" id="exampleFormControlInput1" name='title' placeholder="Title " value={formData.title} onChange={changeInputValue} />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Image</label>
          <input type="text" class="form-control" id="exampleFormControlInput1" name='img' placeholder="Enter the image URL only.. " value={formData.img} onChange={changeInputValue} />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Write here..</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name='content' placeholder="Enter your content here..... " value={formData.content} onChange={changeInputValue} ></textarea>
        </div>

        <button className='btn btn-success'>Post</button>
      </form>
    </div>
  )
}

export default Post