---
## Note
While no one actually is looking at this schema so I'm really writing this for myself; I plan to start work on this again but slowly. One major change will be that I plan to change this from a `Recipe Schema` to an `Instructions/Directions Schema`. The schema that I was hyper-lazily putting together was incredibly verbose so that there was the flexibility to render an extremely detailed recipe or bare bones (more of what would be done in an actual resturant).

I've changed my mind on this and instead, since this will be useful on the website still, I will make the `Recipe Schema` **_extend_** the `Instructions/Directions Schema`. If that's possible (should be, I don't see why not off the top of the dome). Then, that offers the oppertunity to use the `Instructions/Directions Schema` in other projects or websites where it makes sense for highly detailed or verbose instructions.

And, of course, this schema still needs to be "renderable" so I'll have a bunch of examples to show it off[^rendering]

---

# Recipe Schema
A new JSON schema specifically for food recipes. Meant to support food blogs, chefs[^1] and for me Food Labs.

I like to do food labs which has more complex requirements and partials are an important part of that. 

## Work in progress
I'm back at it, finally. 

## Trying it out
1. clone → `git clone https://github.com/mrpotatoes/untitled-lifestyle-website.git`
1. install → `npm i`
1. run → `yarn dev` or `npm run dev`
1. view → `__recipe-schema.yaml` or `__recipe-schema.json`

----
### Footnotes
[^rendering]: Clearly this will be for myself since I don't believe anyone will care about this schema, not really.

