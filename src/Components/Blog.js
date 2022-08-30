import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { myApiContext } from '../store/ApiContext';
import axios from "axios"

const Blog = () => {

  const { id } = useParams();
  const [comment, setComment] = useState("");
  const [apiData, setApiData] = useState([]);
  const MyContext = useContext(myApiContext);


  const fetchApiData = async () => {

    const { data } = await axios.get("http://localhost:3000/comments");
    const particularData = data.filter(item => item.unique === id)
    setApiData(particularData);
  }

  const handleComment = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/comments", {
      comment: comment,
      name: "Udit Tyagi",
      unique: id
    }).then(res => {
      alert("data posted");
      setComment("")
    }).catch(err => console.log(err))
  }


  const getData = MyContext.filter(data => {
    return data.id === parseInt(id)
  });

  useEffect(() => {
    fetchApiData();
  }, [apiData]);
  return (
    <>
     <h2 className='text-center my-5'>{getData[0]?.title}</h2>
      <div className='container px-5'>
        <div className="card">
          <img src={getData[0]?.img} className="card-img-top" alt="blog_image" width="450px" />
        </div>

        <p className="card-text">{getData[0]?.content}</p>

        <form className='my-5' onSubmit={handleComment}>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Write your Comments..</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name='content' placeholder="Enter your Comment.... " value={comment} onChange={(e) => setComment(e.target.value)} ></textarea>
          </div>
          <button className='btn btn-success'>Send</button>
        </form>


        {/* show the comment */}
        <div className='my-5'>
          <h3>Comments :</h3>
          <hr />
          {apiData ?
            apiData.map((data, key) => (
              <div key={key}>
                <h5>{data.name} : </h5>
                <p style={{ paddingLeft: "1rem" }}>- {data.comment}</p>

              </div>
            ))

            : ""}
        </div>
      </div>
    </>
  )
}

export default Blog