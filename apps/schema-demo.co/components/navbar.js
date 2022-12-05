import React from 'react';
import Link from 'next/link'
import { routes } from '../utils/url'
import { useAppContext } from '../utils/state'

export default () => {
  const { recipe } = useAppContext()

  const handleClick = (key) => (e) => {
    recipe.set(key)
  };

  return (
    <React.Fragment>
      {routes.map(route =>
        <Link href={`/recipes/${route.stub}`} key={route.stub} onClick={handleClick(route.stub)}>
          {route.name}
        </Link>)}
    </React.Fragment>
  )
}