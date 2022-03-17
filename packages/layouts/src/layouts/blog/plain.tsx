
export default () => (
  <>
    <div id="root">
      {/* <!-- top navigation --> */}
      <div className="main-navigation">
        <nav className="nav">
          <div className="container">
            {/* <!-- this is always shown --> */}
            <div className="nav-left">
              <a className="nav-item is-tab" href="index.html">nekosora</a>
            </div>
            {/* <!-- this is only shown on mobile platform dimensions --> */}
            <div className="nav-center is-hidden-desktop is-hidden-tablet">
              <a className="nav-item is-tab" href="post.html">static post</a>
              <a className="nav-item is-tab" href="category.html">category</a>
              <a className="nav-item is-tab" href="about.html">about</a>
              <a className="nav-item is-tab" href="contact.html">contact</a>
            </div>
            {/* <!-- this is shown in every other dimension (desktops, tablets) --> */}
            <div className="nav-right is-hidden-mobile">
              <a className="nav-item is-tab" href="post.html">static post</a>
              <a className="nav-item is-tab" href="category.html">category</a>
              <a className="nav-item is-tab" href="about.html">about</a>
              <a className="nav-item is-tab" href="contact.html">contact</a>
            </div>
          </div>
        </nav>
        {/* <!-- end top navigation --> */}
      </div>

      {/* <!-- main header (text and image hero) --> */}
      <div className="main-header">
        <section className="hero is-medium">
          <div className="hero-body">
            <div className="container">
              <div className="columns is-mobile is-centered">
                <div className="column is-7 has-text-centered">
                  <div className="buffer">
                    <h3 className="title is-3">A blog, probably</h3>
                  </div>
                  <div className="buffer">
                    <h4 className="subtitle is-4">I mean, it can be</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* <!-- end main header --> */}

      {/* <!-- main content --> */}
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
                    <p>Nulla semper ipsum consequat magna vestibulum ornare. Donec dictum nibh vitae orci pellentesque
                      rhoncus a sed dolor. Integer non suscipit ex. Quisque tristique est ac vulputate dictum. Vestibulum
                      tristique ante in nulla vulputate interdum. Pellentesque habitant morbi tristique senectus et netus
                      et malesuada fames ac turpis egestas. Morbi sed ex elementum, consectetur leo et, auctor augue.
                      Maecenas tincidunt vitae libero non lobortis</p>
                    <p>Vivamus a quam consectetur, egestas orci ac, dapibus ante. Vivamus eget tortor venenatis, placerat
                      neque quis, commodo neque. Sed et auctor ligula, in congue lectus. Aenean tempus convallis lectus a
                      tristique. Integer luctus tincidunt diam. Aliquam erat volutpat. Mauris risus est, congue ut
                      suscipit nec, consequat imperdiet purus. Nunc metus neque, viverra id dolor nec, consectetur mattis
                      lectus. Cras odio ex, rutrum id enim a, congue pellentesque erat. Nam non ultrices tellus. Sed eget
                      odio nec enim vulputate volutpat sit amet mattis odio. Sed sodales, odio quis venenatis efficitur,
                      tortor sapien tincidunt tortor, quis venenatis augue massa eu massa. Praesent suscipit, velit non
                      fermentum accumsan, felis lorem vulputate purus, a consequat lacus elit in nulla. Morbi ac fringilla
                      tortor. Mauris fermentum ac ipsum a posuere. Duis mattis mollis mauris et dictum.</p>
                    <p>Phasellus placerat aliquam porttitor. Donec dolor ipsum, gravida egestas fringilla dapibus, dapibus
                      ac sapien. Praesent lacus erat, placerat quis cursus ut, blandit laoreet felis. Vivamus pharetra
                      quam nibh, ac cursus nulla porttitor a. Quisque non dui nisl. In ultricies quis lectus ac cursus.
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec
                      vulputate, nulla et dictum venenatis, ipsum orci luctus dolor, id fringilla diam dui sit amet diam.
                      Vestibulum ut sapien blandit, dictum neque eu, gravida lorem.</p>
                    <p>Sed porta mattis nisl sed mattis. Aenean massa sem, vestibulum sed orci ut, tincidunt lobortis
                      neque. Phasellus hendrerit dictum ipsum et posuere. Proin lobortis eget velit at ultrices. Maecenas
                      laoreet laoreet odio, quis rutrum enim varius vel. Nunc venenatis purus sit amet diam porta aliquet.
                      Suspendisse imperdiet, urna eu eleifend pulvinar, diam neque pretium mi, in convallis enim purus a
                      ante. Nunc erat lorem, aliquam vitae interdum vel, consequat sit amet ipsum. Nullam hendrerit
                      porttitor consectetur. Curabitur libero risus, elementum ac risus scelerisque, tempus vehicula
                      risus. Aliquam condimentum vulputate laoreet. Aliquam consequat quis ante sed tincidunt. Cras dictum
                      odio id efficitur pretium. Curabitur aliquet feugiat bibendum. Aenean bibendum lorem eget elit
                      tincidunt, porttitor egestas purus lobortis. Quisque ut arcu metus.</p>
                    <p>Nulla semper ipsum consequat magna vestibulum ornare. Donec dictum nibh vitae orci pellentesque
                      rhoncus a sed dolor. Integer non suscipit ex. Quisque tristique est ac vulputate dictum. Vestibulum
                      tristique ante in nulla vulputate interdum. Pellentesque habitant morbi tristique senectus et netus
                      et malesuada fames ac turpis egestas. Morbi sed ex elementum, consectetur leo et, auctor augue.
                      Maecenas tincidunt vitae libero non lobortis</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- end of post --> */}
          </div>
        </div>
      </div>
      {/* <!-- end of main content --> */}
    </div>

    {/* <!-- footer --> */}
    <div className="hero-footer footer footer-custom">
      <div className="container">
        <div className="has-text-centered">
          <span className="icon">
            <i className="fa fa-github"></i>
          </span>
          <p>template by <a href="http://github.com/plasticneko">github.com/plasticneko</a></p>
        </div>
      </div>
    </div>
  </>
)
