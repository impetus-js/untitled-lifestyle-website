import React from 'react';
import Markdown from 'marked-react';

// https://sibiraj-s.github.io/marked-react/?path=/story/marked-react-custom-renderer--syntax-highlight
import recipe from '../content/musroom-risotto.recipe.yaml'
import content from '../content/musroom-risotto.core.content'

export default () => (
  <>
    <h2>Welcome to the demo app</h2>

    <div className="callout">
      <p><strong>Note: </strong>On first load there is an issue with the sidebar. Just refresh and you're fine. I have no interest in fixing it.</p>
      <p>Also, it kinda shows an error when it starts. Again, uninterested in making this a bulletproof solution 🤣</p>
    </div>

    <Markdown>{content}</Markdown>

    {/* <p>Click a recipe above to see the recpie. When the sidebar shows up click on those variations. Sidebar headings explain the stuff.</p>

    <p>The main page for a recipe will you show you the base schema and then you can click the sidebar items to see how it behaves with the different variations</p>

    <p>Once you click on a recipe you'll see a sidebar. That side bar is to show you the different variations on the schema.</p> */}
  </>
)

