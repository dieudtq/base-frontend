/**
 * @Author  dieudtq@gmail.com
 * @Version 1.0.0
 * @LastModifiedBy  dieudtq@gmail.com
 * @LastModifiedTime 2020-02-09
 */

import React, { memo } from 'react'

const Video = () => (
  <div>
    <video width="100%" controls autoPlay="autoplay">
      <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
      <track kind="captions" />
      Your browser does not support HTML5 video.
    </video>
  </div>
)

export default memo(Video)
