/* eslint-disable no-undef */
/**
 * @Author  dieudtq@gmail.com
 * @Version 1.0.0
 * @LastModifiedBy  dieudtq@nexlesoft.com
 * @LastModifiedTime 2020-02-09
 */

import { memo } from 'react'
import { Link } from 'react-router-dom'

import cssModuleNameTag from 'utils/cssModuleNameTag'
import Button from 'components/Atoms/Button'
import Play from '../../../../assets/svg/ic_play.svg'
import Add from '../../../../assets/svg/ic_add.svg'

import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const SearchCard = memo(props => {
  const { data, handleAdd } = props
  return (
    <div className={cssModules`root`}>
      <Link to="/video">
        <div className={cssModules`thumb`}>
          <img
            src={data.links ? data.links[0].href : '../../../../assets/video.png'}
            alt="Nasa Video"
          />
          <div className={cssModules`play`}>
            <Play />
          </div>
        </div>
      </Link>
      <div className={cssModules`sub`}>
        <div>{data.data[0].center}</div>
        <div>{data.data[0].date_created}</div>
      </div>
      <div className={cssModules`desc`}>
        <h1>{data.data[0].title}</h1>
        <p>
          {_.truncate(data.data[0].description, {
            length: 300,
            separator: /,? +/,
          })}
        </p>
      </div>
      <div className={cssModules`footer`}>
        <Button icon={<Add />} onClick={() => handleAdd(data, { action: 'ADD' })}>
          <span>Add to NASA Colections</span>
        </Button>
      </div>
    </div>
  )
})

SearchCard.defaultProps = {
  data: {
    title: 'Moon Facts: Fun Information About the Earths Moon',
    category: 'Space',
    time: '12 Feb, 2018',
    description:
      'The moon is the easiest celestial object to find in the night sky — when its there.Earths only natural satellite hovers above us bright and…',
    image: '../../../../assets/img/thumb_video',
  },
}

export default SearchCard
