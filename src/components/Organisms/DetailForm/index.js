/**
 * @Author  dieudtq@gmail.com
 * @Version 1.0.0
 * @LastModifiedBy  dieudtq@nexlesoft.com
 * @LastModifiedTime 2020-02-09
 */
/* eslint-disable no-undef */

import React, { useEffect } from 'react'
import uuid from 'uuid/v4'

import Button from 'components/Atoms/Button'
import Input from 'components/Atoms/Input'
import TextArea from 'components/Atoms/TextArea'
import Modal from 'components/Molecules/Modal'
import Select, { Option } from 'components/Atoms/Select'

import Check from '../../../../assets/svg/ic_check.svg'

export default function DetailForm(props) {
  const { onClose, isOpen, detail, action, addNasa, handleEditNasa, history } = props
  const [title, setTitle] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [type, setType] = React.useState(1)
  const [image, setImage] = React.useState('')
  const [video, setVideo] = React.useState('')
  const [time, setTime] = React.useState('')
  const [category, setCategory] = React.useState('')

  useEffect(() => {
    if (!_.isEmpty(detail)) {
      if (action.action === 'ADD') {
        setTitle(detail.data[0].title)
        setTime(detail.data[0].date_created)
        setCategory(detail.data[0].center)
        setDescription(detail.data[0].description)
        setImage(detail.links ? detail.links[0].href : '../../../../assets/video.png')
      } else {
        setTitle(detail.title)
        setTime(detail.time)
        setCategory(detail.category)
        setDescription(detail.description)
        setImage(detail.image ? detail.image : '../../../../assets/video.png')
      }
    }
  }, [detail])

  function addItem() {
    if (action.action === 'ADD') {
      const item = {
        title,
        image,
        video,
        type,
        description,
        time,
        category,
        like: false,
        id: uuid(),
      }
      addNasa(item)
    } else {
      const item = {
        title,
        image,
        video,
        type,
        description,
        time,
        category,
        id: detail.id,
        like: detail.like,
      }
      handleEditNasa(item, { action: 'EDIT_NASA' })
    }
    onClose()
    history.push('/')
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {action.action === 'ADD' ? <h1>Add to NASA collection</h1> : <h1>Edit items</h1>}
      <Input name="Title" label="Title" value={title} onChange={e => setTitle(e.target.value)} />
      <TextArea
        name="Description"
        label="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <Select name="Type" label="Type" value={type} onChange={e => setType(e.target.value)}>
        <Option index="1" value="image">
          Image
        </Option>
        <Option index="2" value="video">
          Video
        </Option>
      </Select>
      <Input
        name="Link"
        label="Link preview image url *"
        value={image}
        onChange={e => setImage(e.target.value)}
      />
      <Input
        name="Link file"
        label="Link file url *"
        value={video}
        onChange={e => setVideo(e.target.value)}
      />
      <Button icon={<Check />} theme="primary" handleClick={() => addItem()}>
        {action.action === 'ADD' ? <span>Add to NASA collection</span> : <span>Save</span>}
      </Button>
    </Modal>
  )
}
