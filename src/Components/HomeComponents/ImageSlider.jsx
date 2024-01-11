import React, {useState, useEffect} from 'react';
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs'
import api from "../../data/api.js"
const files = [
    {
        "id": "va3P30ukCtmYDFOswsnZ",
        "name": "National Engineering Month Event",
        "gallery": [
            "https://firebasestorage.googleapis.com/v0/b/sess-website.appspot.com/o/images%2FEventImages%2FNEM2022_event%2F20230328_163014211_iOS%201.png?alt=media&token=abd2fa09-9cd8-490b-91c4-2f3455e4d238",
            "https://firebasestorage.googleapis.com/v0/b/sess-website.appspot.com/o/images%2FEventImages%2FNEM2022_event%2F20230328_163027787_iOS.png?alt=media&token=0cd79eb9-9ba8-41f4-bce4-6ea46c7b3e54",
            "https://firebasestorage.googleapis.com/v0/b/sess-website.appspot.com/o/images%2FEventImages%2FNEM2022_event%2F20230328_170816370_iOS.png?alt=media&token=99faaecd-728d-4897-8049-3d2dfb372aec",
            "https://firebasestorage.googleapis.com/v0/b/sess-website.appspot.com/o/images%2FEventImages%2FNEM2022_event%2F20230328_171034390_iOS.png?alt=media&token=c4e37335-38bf-4a1b-a00b-c926d16c9bba",
            "https://firebasestorage.googleapis.com/v0/b/sess-website.appspot.com/o/images%2FEventImages%2FNEM2022_event%2F20230328_171047670_iOS.png?alt=media&token=c0cc152f-e279-4a8b-87e1-31fb3419cb07",
            "https://firebasestorage.googleapis.com/v0/b/sess-website.appspot.com/o/images%2FEventImages%2FNEM2022_event%2F20230328_172632060_iOS.png?alt=media&token=08530333-9526-4239-8117-746593a12535",
            "https://firebasestorage.googleapis.com/v0/b/sess-website.appspot.com/o/images%2FEventImages%2FNEM2022_event%2F20230328_172851770_iOS.png?alt=media&token=111f2ee3-8e8f-4f99-86b4-dcb404f5643c",
            "https://firebasestorage.googleapis.com/v0/b/sess-website.appspot.com/o/images%2FEventImages%2FNEM2022_event%2F20230328_172952530_iOS.png?alt=media&token=182e97cb-6598-47a1-9a04-3f3ec8b4a41e",
            "https://firebasestorage.googleapis.com/v0/b/sess-website.appspot.com/o/images%2FEventImages%2FNEM2022_event%2F20230328_173311670_iOS.png?alt=media&token=d6010da3-f181-4b3f-86dd-f0e78b501756",
            "https://firebasestorage.googleapis.com/v0/b/sess-website.appspot.com/o/images%2FEventImages%2FNEM2022_event%2F20230328_174839120_iOS.png?alt=media&token=d0e217b1-83fa-453e-b908-b16619573a59",
            "https://firebasestorage.googleapis.com/v0/b/sess-website.appspot.com/o/images%2FEventImages%2FNEM2022_event%2F20230328_180445450_iOS.png?alt=media&token=5164f655-acfd-45c8-83cf-2241877b5c18",
            "https://firebasestorage.googleapis.com/v0/b/sess-website.appspot.com/o/images%2FEventImages%2FNEM2022_event%2F20230328_180914290_iOS.png?alt=media&token=1a9afa82-8d14-4477-b2e1-aa943891e60f",
            "https://firebasestorage.googleapis.com/v0/b/sess-website.appspot.com/o/images%2FEventImages%2FNEM2022_event%2F20230328_181122600_iOS.png?alt=media&token=60de1376-6e75-4507-8dfb-34311a232aa3",
            "https://firebasestorage.googleapis.com/v0/b/sess-website.appspot.com/o/images%2FEventImages%2FNEM2022_event%2F20230328_192753451_iOS.png?alt=media&token=aef9bd14-8e4e-4722-89be-b97a05e7de4e"
        ],
        "image": "https://firebasestorage.googleapis.com/v0/b/sess-website.appspot.com/o/images%2FEventImages%2FNEM2022_event%2F20230328_163014211_iOS%201.png?alt=media&token=abd2fa09-9cd8-490b-91c4-2f3455e4d238"
    }
]

const ImageSlider = () =>{
    const [slide, setSlide] = useState(0);
    const [filesDB, setFiles] = useState([]);
    useEffect(() => {
        const fetchMediaVaultData = async () => {
          try {
            const response = await api.get("/event/completedEvents");
            setFiles(response.data);
          } catch (error) {
            console.log(error);
            return
          }
        };
    
        fetchMediaVaultData();
      }, []);

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
                        <img src={item.image} alt={item.image} key={idx} className={slide === idx? "image-slide" : "image-slide image-slide-hidden"} />     
                    ) 
                })
            }
            <BsArrowRightCircleFill className='arrow arrow-right' onClick={nextSlide}/>

            {/* D: should link to gallery
            <div className='eventTitle' onClick={()=>{window.open(`${files[slide].target}`)}}>
                <p>{files[slide].name}</p>
            </div> */}

            <div className='eventTitle' >
                <p>{files[slide].name}</p>
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