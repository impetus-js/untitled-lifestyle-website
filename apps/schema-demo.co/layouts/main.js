import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'

import Sidebar from '../components/sidebar'
import Navbar from '../components/navbar'

export default ({ children }) => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div id="page-wrapper">
      <header>
        <h1><Link href="/">[DEMO] Recipe Schema</Link></h1>
      </header>

      <nav>
        <Navbar />
      </nav>

      <main>
        {/* Sidebar */}
        <Sidebar />

        {/* Body Content */}
        <article>
          {children}
        </article>
      </main>

      <footer>
        <p>Copyright &#169; 2023 <a href="#">My Site</a></p>
      </footer>
    </div>
  )
}

