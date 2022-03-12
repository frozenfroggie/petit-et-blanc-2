import React from 'react'
import classNames from 'classnames'
import { GatsbyImage } from "gatsby-plugin-image"

import Modal from './Modal.js';
import Lightbox from './Lightbox.js';
import defaultDog from '../img/default_dog.png'

// {
//   props.galleryImages && props.galleryImages.map(({image}, idx) => {
//     return (
//       <li key={idx} className="column is-3">
//         <GatsbyImage 
//           alt="dog image"
//           key={idx}
//           className="gallery-image" 
//           image={image.childImageSharp.gatsbyImageData} 
//           onClick={e => props.openLightbox(idx, e)}
//         />
//       </li>
//     )
//   })
// }

const GalleryFolderInside = props => {
  return (
  <div
    className="is-parent column is-12"
    key={props.id}>
        <ul className="columns is-multiline gallery-folder-list">
          {
            props.galleryImages && props.galleryImages.map(({image}, idx) => {
              return (
                <li key={idx} className="column is-4">
                  <GatsbyImage
                    alt="dog image"
                    key={idx}
                    className="gallery-folder-image" 
                    image={image.childImageSharp.gatsbyImageData} 
                    onClick={e => props.openLightbox(idx, e)}
                  />
                </li>
              )
            })
          }
          {
            props.lightbox &&
            <Modal>
              <Lightbox
                backdropClosesModal
                images={props.photos}
                currentImage={props.currentImage}
                onClose={() => props.onClose()}
                />
            </Modal>
          }
        </ul>
  </div>
)}

export default GalleryFolderInside
