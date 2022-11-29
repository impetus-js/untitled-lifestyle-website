# Wait, let me explain!

- [Wait, let me explain!](#wait--let-me-explain-)
  * [Schema types](#schema-types)
    + [Food Labs Schema](#food-labs-schema)
    + [Recipe Schema](#recipe-schema)
    + [Partials Schema](#partials-schema)
- [Footnotes](#footnotes)

Firstly I'm going to group things up into 3 parts + modifications

1. Food Labs are the top-level schema
1. A recipe is a lower level schema
1. Partials (variants, preparations, alterations, components etc)

## Schema types
Okay, so the way that this breaks down is the following

### Food Labs Schema
A food lab is a series of experiments.

In terms of this schema a Food Lab is a schema where there are multiple iterations on a recipe and/or it's components. It encompass everything that a recipe can but outputs all the variations[^1] in 

### Recipe Schema
This schema is recursive. It needs to "find" all it's partials

### Partials Schema
Remember that a partial is, at it's core, just overrides on a recipe. These overrides, when applied, either enhance an existing recipe or generate a new recipe (variant).

<!-- , hypothetically, could be any part of a recipe so long as it fits the shape. Meaning that you can modify  -->

Lastly, partials are just a data structure, where it's stored or whatever is up to the developer of this schema's specification.

## Now put all together

## Examples
Some examples to look at.

---

# Footnotes
[^1]: Similar if not exactly the same as the variant partial