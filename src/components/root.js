/**
 * @Author  dieudtq@gmail.com
 * @Version 1.0.0
 * @LastModifiedBy  dieudtq@gmail.com
 * @LastModifiedTime 2020-02-09
 */

import { memo } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import cssModuleNameTag from 'utils/cssModuleNameTag'

import Home from 'containers/Home'
import Video from 'components/Pages/Video'
import Search from 'containers/Search'
import styles from './Root.scss'

const cssModules = cssModuleNameTag(styles)

export default memo(() => (
  <Router basename="base-frontend/">
    <div className={cssModules`root`}>
      <Route exact path="/" component={Home} />
      <Route path="/video" component={Video} />
      <Route path="/search" component={Search} />
    </div>
  </Router>
))
