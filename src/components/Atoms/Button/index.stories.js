import React from 'react'
import { storiesOf } from '@storybook/react'
import Add from '../../../../assets/svg/ic_add.svg'
import Check from '../../../../assets/svg/ic_check.svg'
import Button from '.'

storiesOf('Button', module)
  .add('Default', () => <Button>Default</Button>)
  .add('With theme', () => (
    <>
      <Button theme="primary">
        <span>Primary theme button</span>
      </Button>
      <Button>
        <span>Default theme button</span>
      </Button>
    </>
  ))
  .add('With Icon', () => (
    <>
      <Button icon={<Add />} theme="primary">
        <span>Add Icon</span>
      </Button>
      <Button icon={<Check />} theme="primary">
        <span>Check Icon</span>
      </Button>
    </>
  ))
