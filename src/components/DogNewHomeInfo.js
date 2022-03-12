import React from 'react'

import Modal from './Modal.js';
import Lightbox from './Lightbox.js';
import { GatsbyImage } from "gatsby-plugin-image"

import defaultDog from '../img/default_dog.png'

const DogNewHomeInfo = props => (
  <div className="is-parent column is-12" key={props.id}>
    <div className="box notification is-full">
      <div className="columns">
        <div className="column is-6" >
          <GatsbyImage
            alt="dog info"
            key={ `folder-image-${props.id}`}
            className="dog-info"
            image={props.image.childImageSharp.gatsbyImageData} 
          />
          <p>
          {
            props.description
          }
          </p>
        </div>
        <div className="column is-6">
          <div style={{padding: "20px 0px"}}>
            <h2 className="is-size-5"><strong>Galeria:</strong></h2>
            <ul className="gallery">
              {
                props.galleryImages && props.galleryImages.map(({image}, idx) => {
                  return (
                    <li key={idx} className="gallery-image">
                      <GatsbyImage
                        alt="dog"
                        key={ `folder-image-${props.id}`}
                        className="dog"
                        image={props.image.childImageSharp.gatsbyImageData} 
                        onClick={e => props.openLightbox(idx, e)}
                      />
                    </li>
                  )
                })
              }
            </ul>
          </div>
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
        </div>
      </div>
    </div>
  </div>
)

export default DogNewHomeInfo
