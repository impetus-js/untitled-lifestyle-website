import React from 'react';
import { useRouter } from 'next/router'

export default () => {
  const router = useRouter()

  return (
    <>
      <h2>[recipe.js]</h2>
      Recipe for: {router.query.recipe}
    </>
  )
}

