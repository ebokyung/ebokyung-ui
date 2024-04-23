import { image } from './card-image.css';
export const CardImage = ({ src, alt }: { src: string; alt: string }) => {
  return <img src={src} alt={alt} className={image} />;
};
