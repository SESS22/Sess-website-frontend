import React, { useState, useEffect } from "react";
import Wrapper from "../../assets/styles/EventWrappers/MediaVault";
import Gallery from "./Gallery";
import MediaVaultContainer from "./MediaVaultContainer";
import api from "../../data/api";

function MediaVault() {
  const [activeId, setActiveId] = useState(null);
  const [mediaVaults, setMediaVaults] = useState([]);
  const [vaultPhotos, setVaultPhotos] = useState([]);
  console.log(vaultPhotos);
  useEffect(() => {
    if (activeId !== null) {
      const activeLink = mediaVaults.find((link) => {
        if (link.id === activeId) {
          setVaultPhotos(link.gallery)
        }
      });
    }
  }, [activeId]);
  useEffect(() => {
    const fetchMediaVaultData = async () => {
      try {
        const response = await api.get("/event/completedEvents");
        setMediaVaults(response.data);
      } catch (error) {}
    };

    fetchMediaVaultData();
  }, []);
 
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

      {activeId && <Gallery activeId={activeId} setActiveId={setActiveId} vaultPhotos={vaultPhotos}/>}
    </Wrapper>
  );
}

export default MediaVault;