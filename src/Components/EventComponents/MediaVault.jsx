import React, { useState, useEffect } from "react";
import image23 from "../../assets/images/EventImages/image 23.png";
import image24 from "../../assets/images/EventImages/image 24.png";
import ios1 from "../../assets/images/EventImages/20230216_224351069_iOS 1.png";
import ios2 from "../../assets/images/EventImages/20230216_222552740_iOS 2.png";
import Wrapper from "../../assets/styles/EventWrappers/MediaVault";
import { nanoid } from "nanoid";
import Gallery from "./Gallery";
import MediaVaultContainer from "./MediaVaultContainer";
import api from "../../data/api"

const DummyDatafromDB = [
  {
      "id": "va3P30ukCtmYDFOswsnZ",
      "name": "National Engineering Month Event",
      "gallery": [
          "https://firebasestorage.googleapis.com/v0/b/sess-website.appspot.com/o/images%2FEventImages%2FNEM2022_event%2F20230328_162801240_iOS.jpg?alt=media&token=37bd4e5d-cb84-4a0b-8b17-0dba7e2fb5e5",
          "https://firebasestorage.googleapis.com/v0/b/sess-website.appspot.com/o/images%2FEventImages%2FNEM2022_event%2F20230328_163014211_iOS%201.heic?alt=media&token=aae330b5-93ac-42bc-ad7b-3bc343ee748e",
          "https://firebasestorage.googleapis.com/v0/b/sess-website.appspot.com/o/images%2FEventImages%2FNEM2022_event%2F20230328_163027787_iOS.heic?alt=media&token=5d348a5a-ff06-49dc-b073-aea18eb39132",
          "https://firebasestorage.googleapis.com/v0/b/sess-website.appspot.com/o/images%2FEventImages%2FNEM2022_event%2F20230328_163039088_iOS.heic?alt=media&token=fbe773cb-3642-4558-ba64-08ebe94d9424",
          "https://firebasestorage.googleapis.com/v0/b/sess-website.appspot.com/o/images%2FEventImages%2FNEM2022_event%2F20230328_163356795_iOS.heic?alt=media&token=d6a7491d-929d-4ff4-8613-e477df04a059",
          "https://firebasestorage.googleapis.com/v0/b/sess-website.appspot.com/o/images%2FEventImages%2FNEM2022_event%2F20230328_163404760_iOS.heic?alt=media&token=d1ee2e1f-6ee0-43dc-8f54-83f596b363f1",
          "https://firebasestorage.googleapis.com/v0/b/sess-website.appspot.com/o/images%2FEventImages%2FNEM2022_event%2F20230328_163405962_iOS.heic?alt=media&token=ba54d039-536c-4bb7-9dbe-75f87b0fb80d",
          "https://firebasestorage.googleapis.com/v0/b/sess-website.appspot.com/o/images%2FEventImages%2FNEM2022_event%2F20230328_163422292_iOS.heic?alt=media&token=696fec5f-9e3f-42d2-9fe3-237a89fd1da4"
      ],
      "image": "https://firebasestorage.googleapis.com/v0/b/sess-website.appspot.com/o/images%2FEventImages%2FNEM2022_event%2F20230328_162801240_iOS.jpg?alt=media&token=37bd4e5d-cb84-4a0b-8b17-0dba7e2fb5e5"
  }
]


function MediaVault() {
  const [activeId, setActiveId] = useState(null);
  const [mediaVaults, setMediaVaults] = useState([]);

  useEffect(()=>{
    const fetchMediaVaultData = async () => {
      try {
        const response = await api.get("/event/completedEvents");
        console.log(`DATA vault: ${response.data}`);
        setMediaVaults(response.data);
      } catch (error) {
        
      }
    }

    fetchMediaVaultData();
    
  }, [])
  // TODO 
  // Click on a MediaVaultContainer, then it opens a corresponding Gallery
  // Fix the css for mediaVault container
  // responsiveness for media vault
  // <Gallery activeId={activeId} setActiveId={setActiveId} vaultPhotos={mediaVaults[i].gallery}/>


  return (
    <Wrapper className="content-grid">
      <div className="title">
        <p>Media Vault</p>
        <hr />
        <div className="vault-container">
          {mediaVaults.map((media, index) => {
            return (
              <MediaVaultContainer
                key={media.id}
                {...media}
                setActiveId={setActiveId}
              />
            );
          })}
        </div>
      </div>

  
      <Gallery activeId={activeId} setActiveId={setActiveId} />
    </Wrapper>
  );
}

export default MediaVault;
