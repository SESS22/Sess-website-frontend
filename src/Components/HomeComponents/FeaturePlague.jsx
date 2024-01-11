import React from 'react';

const FeaturePlaque = ({plaqueData}) =>{
    // Object: plaqueData = {icon:"", title:"", article"", link:""}
    return(
        <div className='featureDiv'>
            <img src={`${plaqueData.icon}`} alt="iconForPlaque" />
            <p>{plaqueData.title}</p>
            <article>
                {plaqueData.article}
            </article>
            
            <button onClick={() => window.open(`${plaqueData.link}`)}> Read More</button>
        </div>
    )
};

export default FeaturePlaque;