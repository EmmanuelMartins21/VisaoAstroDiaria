import React, { useState, useEffect } from 'react';
import config from '../../config/config.json';
import { NasaApiService } from '../../services/NasaApiService';
import { ImagemNasa } from '../../types/ImagemNasa';
import './ImagemCard.css';

const nasaService = new NasaApiService(
  config.nasa_api.base_url,
  config.nasa_api.api_key
);

const ImagemCard: React.FC = () => {
  const [imagem, setImagem] = useState<ImagemNasa | null>(null);
  const [error, setError] = useState<string | null>(null);

  const isVideo = (url: string): boolean => {
    return /\.(mp4|webm|ogg|mov)$/i.test(url);
  };

  const fetchApod = async () => {
    try {
      const data = await nasaService.getApod();
      setImagem(data);
      setError(null);
    } catch (e: any) {
      setError(e.message || 'Erro ao carregar imagem');
    }
  };

  useEffect(() => {
    fetchApod();
    const interval = setInterval(fetchApod, 12 * 60 * 60 * 1000); // 12h
    return () => clearInterval(interval);
  }, []);

  if (error) return <div className="imagem-card error">{error}</div>;
  if (!imagem) return <div className="imagem-card loading">Carregando...</div>;

  const formattedDate = new Date(imagem.data).toLocaleDateString();
  console.log(`Exibindo imagem: ${imagem.titulo} (${imagem.data})`);
  console.log(`URL da imagem: ${imagem.url}`);

  return (
    <div className="imagem-card">
      {isVideo(imagem.url) ? (
        <video controls width="100%" title={imagem.titulo}>
          <source src={imagem.url} />
          Seu navegador não suporta vídeos HTML5.
        </video>
      ) : (
        <img src={imagem.url} alt={imagem.titulo} />
      )}
      <div className="imagem-info">
        <h2>{imagem.titulo}</h2>
        <p>{formattedDate}</p>
      </div>
    </div>
  );
};

export default ImagemCard;
