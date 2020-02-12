/**
 * @Author  dieudtq@gmail.com
 * @Version 1.0.0
 * @LastModifiedBy  dieudtq@gmail.com
 * @LastModifiedTime 2020-02-09
 */

import { memo, useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { debounce } from 'lodash'

import SearchCard from 'components/Molecules/SearchCard'
import Modal from 'containers/DetailModal'
import Loadding from 'components/Atoms/Loadding'
import cssModuleNameTag from 'utils/cssModuleNameTag'
import IconBack from '../../../../assets/svg/ic_back.svg'

import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const DataList = ({ loadding, items, handleAdd }) => {
  if (loadding) {
    return <Loadding />
  }
  if (items && items.length) {
    return items.map(item => (
      <SearchCard key={item.data[0].nasa_id} data={item} handleAdd={handleAdd} />
    ))
  }
  return null
}

const Search = props => {
  const { total, search, items, add, history, loadding } = props

  // Ref and focus to Search Input
  const myInput = useRef()
  useEffect(() => myInput.current && myInput.current.focus())

  const [isModalOpened, openModal] = useState(false)
  function toogleModal() {
    openModal(!isModalOpened)
  }

  const onSearchAction = debounce(() => {
    search(myInput.current.value)
  }, 1000)

  const handleAdd = (data, action) => {
    toogleModal()
    add(data, action)
  }

  return (
    <>
      <div className={cssModules`header`}>
        <Link to="/">
          <IconBack />
          <span>Back to Collection</span>
        </Link>
        <h1>Search from Nasa</h1>
        <input placeholder="Type something to search..." onChange={onSearchAction} ref={myInput} />
        <p>{total} result</p>
      </div>
      <div className={cssModules`search-container`}>
        {/* {loadding && <Loadding />}
        {!loadding &&
          items &&
          items.map(item => (
            <SearchCard key={item.data[0].nasa_id} data={item} handleAdd={handleAdd} />
          ))} */}
        <DataList loadding={loadding} items={items} handleAdd={handleAdd} />
      </div>
      <Modal isOpen={isModalOpened} onClose={toogleModal} history={history} />
    </>
  )
}

export default memo(Search)
