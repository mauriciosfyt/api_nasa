import React, { useEffect, useState } from 'react';
import { fetchNasaImageOfTheDay } from '../../services/api';

const NasaImage = () => {
  const [imageData, setImageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getImage = async () => {
      try {
        const data = await fetchNasaImageOfTheDay();
        setImageData(data);
        setLoading(false);
      } catch (error) {
        setError("Erro ao carregar a imagem da NASA.");
        setLoading(false);
      }
    };
    
    getImage();
  }, []);

  if (loading) return <div className="loading">Carregando...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="App">
      <h1>Imagem do Dia - NASA</h1>
      {imageData && (
        <div className="media-container">
          <h2>{imageData.title}</h2>
          <p><strong>Data:</strong> {imageData.date}</p>
          <p><strong>Descrição:</strong> {imageData.explanation}</p>
          {imageData.media_type === 'image' && (
            <img 
              src={imageData.url} 
              alt={imageData.title}
            />
          )}
          {imageData.media_type === 'video' && (
            <iframe
              title={imageData.title}
              src={imageData.url}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          )}
        </div>
      )}
    </div>
  );
};

export default NasaImage;
