/**
 * @Author  dieudtq@gmail.com
 * @Version 1.0.0
 * @LastModifiedBy  dieudtq@nexlesoft.com
 * @LastModifiedTime 2020-02-09
 */
/* eslint-disable no-undef */

import { memo } from 'react'
import { Link } from 'react-router-dom'

import cssModuleNameTag from 'utils/cssModuleNameTag'
import Button from 'components/Atoms/Button'
import Play from '../../../../assets/svg/ic_play.svg'
import Favorite from '../../../../assets/svg/ic_fav_not.svg'
import UnFavorite from '../../../../assets/svg/ic_fav.svg'
import Delete from '../../../../assets/svg/ic_delete.svg'
import Edit from '../../../../assets/svg/ic_edit.svg'

import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const VideoItem = memo(props => {
  const { data, deleteNasa, likeNasa, handleEdit } = props

  return (
    <div className={cssModules`root`}>
      <Link to="/video">
        <div className={cssModules`thumb`}>
          <img src={data.image ? data.image : '../../../../assets/video.png'} alt="Nasa Video" />
          <div className={cssModules`play`}>
            <Play />
          </div>
        </div>
      </Link>
      <div className={cssModules`sub`}>
        <div>{data.center}</div>
        <div>{data.date_created}</div>
      </div>
      <div className={cssModules`desc`}>
        <h1>{data.title}</h1>
        <p>
          {_.truncate(data.description, {
            length: 300,
            separator: /,? +/,
          })}
        </p>
      </div>
      <div className={cssModules`footer`}>
        <Button
          icon={data.like ? <UnFavorite /> : <Favorite />}
          onClick={() => likeNasa(data.id)}
        />
        <Button icon={<Delete />} onClick={() => deleteNasa(data.id)} />
        <Button icon={<Edit />} onClick={() => handleEdit(data)} />
      </div>
    </div>
  )
})

VideoItem.defaultProps = {
  data: {
    title: 'Moon Facts: Fun Information About the Earths Moon',
    category: 'Space',
    time: '12 Feb, 2018',
    description:
      'The moon is the easiest celestial object to find in the night sky — when its there.Earths only natural satellite hovers above us bright and…',
    image: '../../../../assets/img/thumb_video',
  },
}

export default VideoItem
