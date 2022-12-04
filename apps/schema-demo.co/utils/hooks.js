import { useState, useEffect } from 'react';
import { isConstructorDeclaration } from 'typescript';

export const topUrl = (pathname, base) => `/${pathname}/feature/${base}`

export const childUrl = (pathname, base, feature) => `/${pathname}/feature/${base}/${feature}`

export const basePath = (location) => {
  if (!location) {
    return {
      base: '',

    }
  }
}

export const isValidPath = (url) => !(/\[|\]/.test(url))

export const useUrlRemapper = (url) => {
  const [pathname, setPathname] = useState()
  useEffect(() => {
    const path = window.location.pathname
      .slice(1)
      .split('/')
      .slice(0, 2)
      .join('/')

    setPathname(path)
  }, []);

  return {
    pathname: pathname || '',
  };
};

