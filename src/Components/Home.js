import React, { useContext } from 'react';
import { myApiContext } from '../store/ApiContext';
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsCalendarCheckFill } from 'react-icons/bs'
import { Link } from "react-router-dom"
import "./Home.css";

const Home = () => {

    const MyContext = useContext(myApiContext);

    return (
        <div className='container'>

            <div className='blog_card row'>
                {MyContext.map((data, index) => (
                    <div className='mycards col col-md-6 col-lg-4 col-sm-12' key={index}>
                        <div className="card">
                            <img src={data.img === "" ? "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" : data.img} className="card-img-top" alt="image001" height="250px" />
                            <div className="card-body">
                                <Link to={`/blog/${data.id}`} style={{ textDecoration: "none", color: "black" }}>
                                    <h3 className="card-text">{data.title}</h3>
                                </Link>
                                <div className='below_part'>
                                    <span>
                                        <span style={{ paddingRight: "5px" }}> <BsCalendarCheckFill /></span>30 August 2021
                                    </span>
                                    <Link to={`/blog/${data.id}`} style={{ textDecoration: "none", color: "black" }}>
                                        <h6>Start Reading <span><AiOutlineArrowRight /></span></h6>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Home;