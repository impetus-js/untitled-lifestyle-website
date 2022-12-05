import React from 'react';
import Link from 'next/link'
import { recipieRoutes } from '../utils/config'
import { useAppContext } from '../utils/state'

export default () => {
  const { recipe } = useAppContext()

  const handleClick = (key) => (e) => {
    recipe.set(key)
  };

  return (
    <React.Fragment>
      {recipieRoutes.map(route =>
        <Link href={`/recipes/${route.stub}`} key={route.stub} onClick={handleClick(route.stub)}>
          {route.name}
        </Link>)}
    </React.Fragment>
  )
}