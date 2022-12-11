import React from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
import { childUrl, topUrl } from '../utils/url'
import { nestedRoutes } from '../utils/config';
import { useUrlRemapper } from '../utils/state'

export default () => {
  const { asPath, query } = useRouter()
  const { pathname } = useUrlRemapper(asPath)

  const handleClick = (key) => (e) => {
    console.log(key)
  };

  return (
    <React.Fragment>
      {(query.recipe == undefined) || (
        <aside>
          {nestedRoutes.map(top => (
            <ul>
              <span><Link href={topUrl(pathname, top.base)} key={top.base} onClick={handleClick}>{top.text}</Link></span>
              {top.childs && top.childs.map(child => (
                <li>
                  <Link href={childUrl(pathname, top.base, child.path)} key={child.path} onClick={handleClick(child.path)}>
                    {child.text}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </aside>
      )}
    </React.Fragment>
  );
}
