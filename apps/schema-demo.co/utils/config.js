export const recipieRoutes = [{
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

export const nestedRoutes = [{
  text: 'Core Schema Functionality',
  base: 'core',
  desc: 'Any extra info that I may want on hover or something, who knows?',
  childs: [{
    path: 'version',
    text: 'Schema Version',
  }, {
    path: 'invalid',
    text: 'Invalid Schema',
  }, {
    path: 'components',
    text: 'Components',
  }, {
    path: 'tips',
    text: 'Tips',
  }, {
    path: 'techniques',
    text: 'Techniques',
  }]
}, {
  text: 'Calculated Values',
  base: 'calculated-values',
  desc: 'Any extra info that I may want on hover or something, who knows?',
  childs: [{
    path: 'notes',
    text: 'All Notes',
  }, {
    path: 'images',
    text: 'All Images',
  }, {
    path: 'all-ngredients',
    text: 'All Ingredients',
  }, {
    path: 'all-equiptment',
    text: 'All Equiptment',
  }, {
    path: 'total-nutrition',
    text: 'Total Nutrition',
  }, {
    path: 'total-time',
    text: 'Total Time',
  }, {
    path: 'total-cost',
    text: 'Total Cost',
  }]
}, {
  text: 'Partials',
  base: 'partials',
  desc: 'Any extra info that I may want on hover or something, who knows?',
  childs: [{
    text: 'Preparations',
    path: '',
  }, {
    text: 'Variations',
    path: '',
  }, {
    text: 'Alterations',
    path: '',
  }, {
    text: 'Components',
    path: '',
  }, {
    text: 'Full recipe',
    path: '',
  }]
}, {
  text: 'Complex Functionality',
  base: 'complex',
  desc: 'Any extra info that I may want on hover or something, who knows?',
  childs: [{
    text: 'Scaled down',
    path: '',
  }, {
    text: 'Steps',
    path: '',
  }, {
    text: 'Steps w/images',
    path: '',
  }, {
    text: 'Recursive Steps',
    path: '',
  }, {
    text: 'Yields',
    path: '',
  }, {
    text: 'Units',
    path: '',
  }]
}]
