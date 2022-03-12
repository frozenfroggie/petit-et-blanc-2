import React from 'react'
import classNames from 'classnames'
import { Link } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image"

import defaultDog from '../img/default_dog.png'

const DogTile = props => (
  <div
    className="is-parent column is-6"
    key={props.id}
    onClick={() => props.showDog(props.idx, props.officialName || props.title)}>
    <Link to={props.slug}>
      <article className={classNames("is-child", "dog-tile")}>
        <div className={classNames({"dog-for-sale-ribbon": props.forSale})}></div>
        <GatsbyImage
              alt="dog tile"
              key={ `folder-image-${props.id}`}
              className={classNames("dog", {"dog-default": !(props.image && props.image.childImageSharp)})} 
              image={props.image.childImageSharp.gatsbyImageData} 
            />
        <div className="title is-size-5">
          <div className={classNames({"dog-for-sale": props.forSale})}></div>
          { props.officialName || props.title }
        </div>
      </article>
    </Link>
  </div>
)

export default DogTile
