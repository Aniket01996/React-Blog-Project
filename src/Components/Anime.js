import React from 'react'
import Navbar from './Navbar'
import "./Components.css"
import { useContext } from 'react'
import { store } from './ContextAPI'
import { Link } from 'react-router-dom'
import { AiOutlineArrowDown } from 'react-icons/ai'

const Anime = () => {
    const [data] = useContext(store);
    return (
        <>
            <Navbar />
            <div className="page-heading">Anime <hr className="hr-under"></hr></div>
            <div className='latest'>
                <div>
                    {
                        data.filter((item) => { return item.category === "Anime" && item.id === 102 }).map((element) => (
                            <div className='latest1' key={element.id}>
                                <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
                                <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
                                <p>{element.DataDescription}</p>
                            </div>
                        ))
                    }
                </div>
                <div>
                    {
                        data.filter((item) => { return item.category === "Anime" && item.id === 103 }).map((element) => (
                            <div className='latest2' key={element.id}>
                                <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
                                <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
                                <p>{element.DataDescription}</p>
                            </div>
                        ))
                    }
                </div>
                <div>
                    {
                        data.filter((item) => { return item.category === "Anime" && item.id === 104 }).map((element) => (
                            <div className='latest3' key={element.id}>
                                <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
                                <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
                                <p>{element.DataDescription}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='data-container'>
                <div className='data'>
                    {
                        data.filter((item) => { return item.category === "Anime" && item.id === 105 }).map((element) => (
                            <div className='data1' key={element.id}>
                                <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
                                <div className='data-description'>
                                    <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
                                    <p>{element.DataDescription}</p>
                                </div>
                            </div>
                        ))
                    }
                    <hr></hr>
                    {
                        data.filter((item) => { return item.category === "Anime" && item.id === 106 }).map((element) => (
                            <div className='data2' key={element.id}>
                                <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
                                <div className='data-description'>
                                    <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
                                    <p>{element.DataDescription}</p>
                                </div>
                            </div>
                        ))
                    }
                    <hr></hr>
                    {
                        data.filter((item) => { return item.category === "Anime" && item.id === 107 }).map((element) => (
                            <div className='data3' key={element.id}>
                                <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
                                <div className='data-description'>
                                    <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
                                    <p>{element.DataDescription}</p>
                                </div>
                            </div>
                        ))
                    }
                    <hr></hr>
                    {
                        data.filter((item) => { return item.category === "Anime" && item.id === 108 }).map((element) => (
                            <div className='data4' key={element.id}>
                                <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
                                <div className='data-description'>
                                    <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
                                    <p>{element.DataDescription}</p>
                                </div>
                            </div>
                        ))
                    }
                    <hr></hr>
                    {
                        data.filter((item) => { return item.category === "Anime" && item.id === 109 }).map((element) => (
                            <div className='data5' key={element.id}>
                                <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
                                <div className='data-description'>
                                    <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
                                    <p>{element.DataDescription}</p>
                                </div>
                            </div>
                        ))
                    }
                    <hr></hr>
                    {
                        data.filter((item) => { return item.category === "Anime" && item.id === 110 }).map((element) => (
                            <div className='data6' key={element.id}>
                                <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
                                <div className='data-description'>
                                    <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
                                    <p>{element.DataDescription}</p>
                                </div>
                            </div>
                        ))
                    }
                    <hr></hr>
                    {
                        data.filter((item) => { return item.category === "Anime" && item.id === 111 }).map((element) => (
                            <div className='data7' key={element.id}>
                                <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
                                <div className='data-description'>
                                    <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
                                    <p>{element.DataDescription}</p>
                                </div>
                            </div>
                        ))
                    }
                    
                    {
                        data.filter((item) => { return item.category === "Anime" && item.id === 112 }).map((element) => (
                            <div className='data8' key={element.id}>
                                <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
                                <div className='data-description'>
                                    <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
                                    <p>{element.DataDescription}</p>
                                </div>
                            </div>
                        ))
                    }
                <hr />
                    {
                        data.filter((item) => { return item.category === "Anime" && item.id === 113 }).map((element) => (
                            <div className='data12' key={element.id}>
                                <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
                                <div className='data-description'>
                                    <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
                                    <p>{element.DataDescription}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='top-posts'>
                    <div className='top-posts-heading'>Top Posts <hr className="hr-under3"></hr></div>
                    {
                        data.filter((item) => { return item.category === "Anime" && item.id === 114 }).map((element) => (
                            <div className='top-post1' key={element.id}>
                                <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
                                <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
                                <h1>1</h1>
                            </div>
                        ))
                    }
                    <hr></hr>
                    {
                        data.filter((item) => { return item.category === "Anime" && item.id === 115 }).map((element) => (
                            <div className='top-post2' key={element.id}>
                                <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
                                <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
                                <h1>2</h1>
                            </div>
                        ))
                    }
                    <hr></hr>
                    {
                        data.filter((item) => { return item.category === "Anime" && item.id === 116 }).map((element) => (
                            <div className='top-post3' key={element.id}>
                                <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
                                <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
                                <h1>3</h1>
                            </div>
                        ))
                    }
                    <hr></hr>
                    {
                        data.filter((item) => { return item.category === "Anime" && item.id === 117 }).map((element) => (
                            <div className='top-post4' key={element.id}>
                                <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
                                <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
                                <h1>4</h1>
                            </div>
                        ))
                    }
                    <hr></hr>
                </div>
                <div className='advertisement'>Advertisement</div>
            </div>
            <div className='load-more'><AiOutlineArrowDown />LOAD MORE</div>
        </>
    )
}

export default Anime