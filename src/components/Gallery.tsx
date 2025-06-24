import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.webp'
import img3 from '../assets/img3.webp'

const Gallery = () => {
  return (
    <div className="gallery-container">
      <h2>Galeria de producciones</h2>
      <p>Explora nuestro contenido multimedia.</p>
      <div>
        <img src={img1} alt="soy una imagen" />
      </div>
      <div>
        <img src={img2} alt="soy una imagen" />
      </div>
      <div>
        <img src={img3} alt="soy una imagen" />
      </div>
    </div>
  )
}

export default Gallery 