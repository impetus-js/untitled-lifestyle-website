import React from 'react';
import { useRouter } from 'next/router'

export default () => {
  const router = useRouter()

  return (
    <>
      <h2>[variation.js]</h2>
      Recipe for: {router.query.variation}
    </>
  )
}

