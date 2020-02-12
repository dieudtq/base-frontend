/* eslint-disable no-undef */
import { shallow } from 'enzyme'

import Button from '../index'

describe('Test Button and Text inside div', () => {
  const wrapper = shallow(<Button />)

  it('Test init status', () => {
    expect(wrapper.find('h4').length).toBe(1)
    expect(
      wrapper
        .find('h4')
        .at(0)
        .text(),
    ).toBe('Initial data...')
  })

  it('Test button click', () => {
    wrapper.find('button').simulate('click')
    expect(
      wrapper
        .find('h4')
        .at(0)
        .text(),
    ).toBe('Data updated...')
  })

  it('Test State after button click', () => {
    wrapper.find('button').simulate('click')

    expect(wrapper.state().data).toBe('Data updated...')
    expect(wrapper.state('data')).toBe('Data updated...')
  })
})
