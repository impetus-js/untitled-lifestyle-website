export default () => (
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
  </div>
)
