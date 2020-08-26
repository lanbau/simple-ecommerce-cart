import React from 'react'
import { useSelector } from 'react-redux'
import Checkout from '../pages/Checkout'
import renderer from 'react-test-renderer'

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}))

describe('Checkout Page', () => {
  test('renders cart', () => {
    useSelector.mockImplementation((selector) => selector({
      cart: [
        {
          userId: 1,
          id: 2,
          title: 'qui est esse',
          body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
          price: 49,
          src: 'https://picsum.photos/200/300?random=1'
        },
        {
          userId: 2,
          id: 2,
          title: 'qui est esse',
          body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
          price: 49,
          src: 'https://picsum.photos/200/300?random=1'
        }
      ]
    }))
    const container = renderer
      .create(
        <Checkout />
      )
      .toJSON()
    expect(container).toMatchSnapshot()
  })
})