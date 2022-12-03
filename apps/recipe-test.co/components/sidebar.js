import React, { useEffect } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useUrlRemapper, childUrl, topUrl } from '../utils/hooks'
import { nestedRoutes } from '../utils/routes';

export default () => {
  const { isReady, asPath, query } = useRouter()
  const { pathname } = useUrlRemapper(asPath)

  // Because of that super annoying first render 🙄
  useEffect(() => {
    if (!isReady) {
      return;
    }
  }, [isReady]);

  return (
    <React.Fragment>
      {(query.recipe == undefined) || (
        <aside>
          {nestedRoutes.map(top => (
            <ul>
              <span><Link href={topUrl(pathname, top.base)}>{top.text}</Link></span>
              {top.childs && top.childs.map(child => (
                <li>
                  <Link href={childUrl(pathname, top.base, child.path)}>
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
