/**
 * @Author  dieudtq@gmail.com
 * @Version 1.0.0
 * @Since   2020-02-09
 */

import { memo } from 'react'
import cssModuleNameTag from 'utils/cssModuleNameTag'
import Close from '../../../../assets/svg/ic_close.svg'

import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const Video = props => {
  const { history } = props
  const handleClose = () => {
    history.push('/')
  }
  return (
    <div className={cssModules`root`}>
      <div className={cssModules`header`}>
        <h1>We Are NASA</h1>
        <Close onClick={handleClose} />
      </div>
      <video width="100%" controls autoPlay="autoplay">
        <source src="http://techslides.com/demos/sample-videos/small.mp4" type="video/mp4" />
        <track kind="captions" />
        Your browser does not support HTML5 video.
      </video>
    </div>
  )
}

export default memo(Video)
