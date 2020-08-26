import React from 'react'
import { useSelector } from 'react-redux'
import Order from '../pages/Order'
import renderer from 'react-test-renderer'

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}))

describe('Orders Page', () => {
  test('renders orders', () => {
    useSelector.mockImplementation((selector) => selector({
      orders: [
        {
          id: '123',
          date: '2020-08-26T15:16:25.542Z',
          items: [
            {
              userId: 1,
              id: 2,
              title: 'qui est esse',
              body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
              price: 41,
              src: 'https://picsum.photos/200/300?random=1'
            },
            {
              userId: 2,
              id: 2,
              title: 'qui est esse',
              body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
              price: 41,
              src: 'https://picsum.photos/200/300?random=1'
            }
          ]
        }
      ]
    }))
    const container = renderer
      .create(
        <Order />
      )
      .toJSON()
    expect(container).toMatchSnapshot()
  })
})