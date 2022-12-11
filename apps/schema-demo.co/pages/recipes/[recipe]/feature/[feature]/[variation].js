import React from 'react';
import { useRouter } from 'next/router'
import { useAppContext } from '../../../../../utils/state'

export default () => {
  const { recipe } = useAppContext()
  const { query } = useRouter()

  return (
    <>
      <h2>[variation.js]</h2>
      <p>Recipe: {recipe.curr}</p>
      <p>Variation: {query.variation}</p>

      <hr />

      <h3>{query.variation} schema</h3>
      ...

      <h3>{query.variation} but rendered</h3>
      ...
    </>
  )
}

