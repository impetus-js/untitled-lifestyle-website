import { Container, Columns } from 'react-bulma-components'
import content from '../../content/lorem'
import Nav from '../../components/navigation-plain'
import Header from '../../components/header-mid'
import Footer from '../../components/footer-plain'

export default () => (
  <>
    <div id="root">
      <Nav />
      <Header />

      <div className="main-content">
        <div className="container">
          <div className="columns is-mobile">
            {/* <!-- side bar --> */}
            <div className="column is-4 is-narrow">
              <div className="section">
                <div className="sidebar">
                  {/* <!-- side bar header--> */}
                  <div className="sidebar-header-single">
                    <h4 className="title is-4">Some Post with Passion</h4>
                    <h5 className="subtitle is-5">A Subtitle without Passion</h5>
                  </div>
                  {/* <!-- end of side bar header --> */}
                  {/* <!-- side bar content --> */}
                  <div className="sidebar-list-single">
                    <p>Posted on January 21st 2019, 10:00am</p>
                    <p>Written by Author</p>
                  </div>
                  {/* <!-- end of side bar content --> */}
                  {/* <!-- side bar footer --> */}
                  <div className="sidebar-footer-single">
                    <p><a href="index.html">Back to Home</a></p>
                  </div>
                  {/* <!-- end of side bar footer --> */}
                </div>
              </div>
            </div>
            {/* <!-- end of side bar --> */}
            {/* <!-- post --> */}
            <div className="column is-8">
              <div className="section">
                <div className="post-single">
                  <div className="post-single-content">
                    {content.lorem.map((p: string, i: number) => (<p key={i} >{p}</p>))}
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- end of post --> */}
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </>
)
