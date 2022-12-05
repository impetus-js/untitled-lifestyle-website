export const routes = [{
  name: 'Mushroom Risotto',
  stub: 'mushroom-risotto',
  icon: '',
}, {
  name: 'Pommes Paolo',
  stub: 'pommes-paolo',
  icon: '',
}, {
  name: 'Christmas Salmon',
  stub: 'christmas-salmon',
  icon: '',
}, {
  name: 'Caramel Mousse',
  stub: 'caramel-mousse',
}]

export const topUrl = (pathname, base) => `/${pathname}/feature/${base}`

export const childUrl = (pathname, base, feature) => `/${pathname}/feature/${base}/${feature}`

export const recipe = (path) => {
  const parts = path.slice(1).replace('recipes/', '').split('/')

  return (parts.length < 1)
    ? ''
    : parts[0]
}