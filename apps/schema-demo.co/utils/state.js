import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import * as URL from '../utils/url'

export const AppContext = createContext();
export const useAppContext = () => useContext(AppContext)

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

export const AppWrapper = ({ children }) => {
  const router = useRouter()
  const [recipe, setRecipe] = useState()
  const [variation, setVariation] = useState()
  const state = {
    recipe: {
      curr: recipe,
      set: setRecipe,
    },
    variation: {
      curr: variation,
      set: setVariation,
    },
  }

  // Because of that super annoying first render 🙄
  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    setRecipe(URL.recipe(router.asPath))
  }, [router.isReady]);

  return (
    <AppContext.Provider value={state}>
      {children}
    </AppContext.Provider>
  );
}
