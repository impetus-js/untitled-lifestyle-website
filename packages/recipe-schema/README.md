# cooking-recipe-schema
A new JSON schema specifically for food recipes. Meant to support food blogs, chefs[^1] and for me Food Labs.

I like to do food labs which has more complex requirements and partials are an important part of that. 

# Seeing schema
1. clone → `git clone https://github.com/mrpotatoes/untitled-lifestyle-website.git`
1. install → `npm i`
1. run → `yarn dev` or `npm run dev`
1. view → `__recipe-schema.yaml` or `__recipe-schema.json`

## TODOs
- [ ] Coming soon page
- [ ] Read those "Recipe standardizations" documents.
- [ ] Finalize `recipe` schema
- [ ] Finalize logo & name & brand
- [ ] Blog layouts & variations in `Bulma.io`
- [ ] Regular page layouts in `Bulma.io`
- [ ] Define schemas in code
  - [ ] Define the `recipe` schema 
  - [ ] Define the `menu` schema (needs to use recipe)
  - [ ] Define the `food-lab` schema
  - [ ] Define the `dinner-party` schema
  - [ ] Define the `units` schema (includes `unitType`)
  - [ ] Define the `flavors` schema (low priority, prolly more DB focused anyway)
- [ ] Define markdown frontmatter schema (and )
- [ ] Define required [directives](https://github.com/remarkjs/remark-directive) ([Codesandbox examples](https://codesandbox.io/examples/package/remark-directive))
- [ ] Find out if there is a way to automatically get nutritional information for ingredients.
- [ ] Make this a `Lerna` repo. These are the following schema packages:
  - [ ] `recipe-schema`
  - [ ] `menu-schema`
  - [ ] `dinner-party-schema`
  - [ ] `food-lab-schema`
  - [ ] `flavor-schema`
  - [ ] `nutrition-schema` (or API)

Nutrition APIs/DBs
- https://npm.io/search/keyword:nutrient
- https://tools.myfooddata.com/nutrition-facts-database-spreadsheet.php
- https://rapidapi.com/collection/nutrition
- https://www.nutritionix.com/
- https://www.researchgate.net/figure/The-nutrient-nutrient-network-Each-node-represents-a-nutrient-and-nodes-are-connected_fig4_264826549
- https://www.edamam.com/
- https://fdc.nal.usda.gov/api-guide.html

---

[^1]: If they so dared to go this crazy super structrued route

<!-- 

https://json-schema.org/implementations.html#validator-javascript

https://spin.atomicobject.com/2018/03/26/typescript-data-validation/

Autocomplete in JSON
  https://dev.to/brpaz/how-to-create-your-own-auto-completion-for-json-and-yaml-files-on-vs-code-with-the-help-of-json-schema-k1i

https://github.com/YousefED/typescript-json-schema
	- generate the schema

https://ajv.js.org/guide/typescript.html
	- validate the schema

-->
