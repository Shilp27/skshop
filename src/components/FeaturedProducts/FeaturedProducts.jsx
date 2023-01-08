import React from 'react'
import Card from '../Card/Card'
import './FeaturedProducts.scss'
import useFetch from '../../hooks/useFetch.js'

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  )

  return (
    <div className='featuredProducts'>
      <div className='top'>
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure maxime
          esse libero id eligendi autem eos sapiente, debitis, natus sunt cumque
          deserunt modi ipsa quis asperiores soluta placeat, nemo minima.
        </p>
      </div>
      <div className='bottom'>
        {error
          ? 'Something went wrong'
          : loading
          ? 'loading'
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  )
}

export default FeaturedProducts
