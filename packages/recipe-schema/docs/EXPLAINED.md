# Wait, let me explain!

- [Wait, let me explain!](#wait--let-me-explain-)
  * [Schema types](#schema-types)
    + [Food Labs Schema](#food-labs-schema)
    + [Recipe Schema](#recipe-schema)
    + [Partials Schema](#partials-schema)
  * [Now put all together](#now-put-all-together)
  * [Examples](#examples)
- [Footnotes](#footnotes)
[^1]

Firstly I'm going to group things up into 3 parts + modifications

1. Food Labs are the top-level schema
1. A recipe is a lower level schema
1. Partials (variants, preparations, alterations, components etc)

## Schema types
Okay, so the way that this breaks down are the following three schemas

### Food Labs Schema
A food lab is a series of experiments.

In terms of this schema a Food Lab is a schema where there are multiple iterations on a recipe and/or it's components. It encompass everything that a recipe can but outputs all the variations[^2]. A food lab should be iterable meaning that each recipe or component has multiple iterations that the Food Lab is an parent/owner of and which those iterables do not apply to any other recipe or food lab.

### Recipe Schema
A recipe contains an utterly exhaustive text for a recipe. We are maintaining a list of ingredients, components, steps, tips and even equiptment, techniques and links. A typical recipe can be very simple or almost without direction but 

This schema is recursive. It needs to "find" all it's partials[^3] and apply them. Each partial type does it's work differently.

### Partials Schema
Remember that a partial is, at it's core, just overrides on a recipe. These overrides, when applied, either enhance an existing recipe or generate a new recipe (variant).

*_NOTE_*: Hypothetically, since a partial is just an override on an existing recipe it's no different than just applying a deeply nested structure on top of another and returning the results. Our partials will be much more limited. The partials in this recipe schema only allow for certain properties so an entire recipe cannot be completely modified. It keeps things "safe".

Lastly, partials are just a data structure, where it's stored or whatever is up to the developer of this schema's specification.

## Now put all together

## Benefits over other schemas
### Breadth
This is much more exhastive than other recipes. 

### Configurable

### Size
It's up to you but the spec does define how to size up or down any of either of the schemas available.

## Examples
Some examples to look at.

---

# Footnotes
[^1]: <small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>
[^2]: Similar if not exactly the same as the variant partial
[^3]: Depending on it's implementation the _finder_ function will do the work to get that info
