/**
 * @Author  dieudtq@gmail.com
 * @Version 1.0.0
 * @LastModifiedBy  dieudtq@gmail.com
 * @LastModifiedTime 2020-02-09
 */

import { memo, useState } from 'react'
import { Link } from 'react-router-dom'

import Button from 'components/Atoms/Button'
import VideoItem from 'components/Molecules/VideoItem'
import Modal from 'containers/DetailModal'
import cssModuleNameTag from 'utils/cssModuleNameTag'
import Add from '../../../../assets/svg/ic_add.svg'

import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const Home = props => {
  const { nasa, deleteNasa, likeNasa, history, editNasa } = props

  const [isModalOpened, openModal] = useState(false)
  function toogleModal() {
    openModal(!isModalOpened)
  }

  const handleEdit = data => {
    toogleModal()
    editNasa(data, { action: 'EDIT' })
  }

  return (
    <>
      <div className={cssModules`header`}>
        <h1>NASA Collection</h1>
        <Link to="/search">
          <Button icon={<Add />} theme="primary">
            <span>Add new item</span>
          </Button>
        </Link>
      </div>
      <div className={cssModules`home-container`}>
        {nasa.map(item => (
          <VideoItem
            key={item.id}
            data={item}
            likeNasa={likeNasa}
            deleteNasa={deleteNasa}
            editNasa={editNasa}
            history={history}
            handleEdit={handleEdit}
          />
        ))}
      </div>
      <Modal isOpen={isModalOpened} onClose={toogleModal} history={history} />
    </>
  )
}

export default memo(Home)
