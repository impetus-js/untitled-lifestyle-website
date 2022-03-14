PARTIALS
A partial has all the same properties as a recipe. The intention is that they can be imported to append or change the parent recipe. Since all the properties are the same that means it is easy to create a partial. Keeps one in the same mindset. This flexibility also adds complexity and more power to hang oneself (I mention this in notes for a few of the partials and for full recipe "partial"). 

Each partial behaves in different ways but they are all other externally sourced (file, url) YAML/Markdown files that are applied to the existing recipe. The only thing about partials  how to create/have a unique ID to reference other partials. How/where they are stored and retrieval process therein.

Notes:
  - All partial declarations within a recipe are arrays that point to a file/api somewhere.
  - Each partial's behavior is different. Some append, some modify.
  - Partials use URI Schemes to determine where to find the partial. Supported schemes:
    - file://path/to/file.yaml
    - url://host.io/path/to/resource.yaml
    - db://host.io/connection/partials
  - TODO: Type this up into TypeScript somehow and ENFORCE IT

--------- Equipment
All the gear that is required for this app. Equipment can link to other partials and those will be pulled in. This appends everything together and groups them as well. The list is  de-duped based on IDs and ignores groups.

While equipment itself is a partial Equipment/tools can also exist in preparations, components or instructions and all those need to be pulled out and de-duped so that they can be listed easily. Also because it isn't required to list all tools manually under equipment nor it's  partials it allows authors to focus primarily on the recipe. Just add any gear, as it comes up during writing in the equipment section of the related area. They will be pulled out later for convenience.

--------- Preparations
I want to be able to show not only the workstation but also what the end product is supposed to look like. I personally have the most issues here because this takes up a bunch of my time when getting things done. Having it all layed out for me before I even start is fantastic.

--------- Variations
A variation is a recipe but merged with an existing one creating a new recipe but does not live on it's own or cannot be read as a recipe on it's own.

Variants are MERGED into the recipie. A variant is single use. ie they are merged into the recipe and only one variant can be applied at a time. From an integration standpoint it's like running a merge on two objects and the properties that have differences are applied (aka a deep merge).

If viewing on a website it'll change the url to have ?variant={{ID}} and it'll apply the changes to the content with links to more variants.

NOTE: A variation can be a full recipe. Meaning that all the properties of a recipe are filled out. For a variation that would be overkill and it would make more sense to create a new recipe.

--------- Alterations
An alteration is an in-line recipie diff. So while it has changes to a recipe like a variation these are view inline versus as a new recipe with the changes living on it's own.

The concept of an alteration is very, very similar to variations with the noticeable difference being that alterations are view inline with the content versus a replacement. Think of a web client. If you click on "view alterations" it'll show the differences between one step/ingrediant and another inline and there will be all the metadata associated with that ingrediant, links and why. It could show as a diff like on github or it could look like a modal/popup/tooltip instead.

Can also be used as "Suggestions"

--------- Components
A component is a partial recipe. Meaning it does not have all the required properties of a recipe like 'type' or 'name'. All the fields are meant to be additions to another recipe.

A component is APPENDED to the existing schema for whatever existing properties exist on the component and recipe. For instance if a component has ingredients, preparations and variants then all these properties will be APPENDED to the existing recipe. This allows for authors to have their recipies organized in such a fashion that allows for resuable components.


NOTE: A component can also be a full recipe. Meaning that all the properties of a recipe are filled out. For a variation that would be overkill and it would make more sense to create a new recipe.

--------- Full Recipe import.
I add this in here as it is important to note that since a variation or component (type set to one or the other) and it would make sense that a full menu could be important. And they can but it is not a feature that I will suport in version 1.0. The behavior can be chosen as a flag as append or merge. Thing is, though, that if merge is chosen then it's like a variation. Authors must have some fore-thought about how to use any of the partial types.