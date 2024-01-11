import React, {useState, useEffect} from 'react';
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs'
import api from "../../data/api.js"
const files = [
    {url: "https://www.senecacollege.ca/content/dam/projects/seneca/news-and-media/gallery/2019-01-11-rcaf-convocation/20190111001.jpg", desc: "SESS Winter Event, 2022", target: "https://www.senecacollege.ca/news-and-events/galleries/20190424-jane-campus-farewell.html"},
    {url: "https://www.senecacollege.ca/content/dam/projects/seneca/news-and-media/gallery/2019-01-11-rcaf-convocation/20190111017.jpg", desc: "NEM FALL Event, 2022", target: "https://www.senecacollege.ca/news-and-events/media-releases.html"},
    {url: "https://www.senecacollege.ca/content/dam/projects/seneca/news-and-media/gallery/jane-campus-farewell-april-24-2019/jane-campus-farewell-01.jpeg", desc: "Orientation Day, 2022", target:"https://www.senecacollege.ca/news-and-events/galleries/20190424-jane-campus-farewell.html"}
]

const ImageSlider = () =>{
    const [slide, setSlide] = useState(0);

    const nextSlide = () =>{
        const numSlides = files.length;

        if(slide === numSlides - 1)
            setSlide(0);
        else
            setSlide(slide + 1)
    }

    const prevSlide = () =>{
        const numSlides = files.length;
        
        if(slide === 0)
            setSlide(numSlides - 1)
        else
            setSlide(slide - 1)
    }
    
  
    return (
        <div className='image-slide-container'>
            <BsArrowLeftCircleFill className='arrow arrow-left' onClick={prevSlide}/>
            {
                files.map((item, idx)=>{
                    return(
                        <img src={item.url} alt={item.desc} key={idx} className={slide === idx? "image-slide" : "image-slide image-slide-hidden"} />     
                    ) 
                })
            }
            <BsArrowRightCircleFill className='arrow arrow-right' onClick={nextSlide}/>

            <div className='eventTitle' onClick={()=>{window.open(`${files[slide].target}`)}}>
                <p>{files[slide].desc}</p>
            </div>

            <span className='slide-indicator'>
                {
                    files.map((_, idx) => {
                        return(
                            <button key={idx} onClick={()=>setSlide(idx)} className={slide===idx? 'indicator' : 'indicator indicator-inactive'}></button>
                        )
                    })
                }
            </span>
        </div>
    )
 
};

export default ImageSlider;