import { AppWrapper } from '../utils/state'
import Layout from '../layouts/main'
import './styles.css'

// This default export is required in a new `pages/_app.js` file.
export default ({ Component, pageProps }) => (
  <AppWrapper>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </AppWrapper>
)
