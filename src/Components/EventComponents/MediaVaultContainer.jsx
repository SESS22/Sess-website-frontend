function MediaVaultContainer({ id, name, image, setActiveId }) {
    return (
      <div className="container" onClick={() => setActiveId(id)}>
    
        <img className="image" src={image} alt=""/>
        
        <div className="middle">
          <div className="text">
            <p>{name}</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default MediaVaultContainer;
  