import React from 'react'
import { useSelector } from 'react-redux'
import Book from '../pages/Book'
import renderer from 'react-test-renderer'

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}))

describe('Single Book Page', () => {
  test('renders book', () => {
    useSelector.mockImplementation((selector) => selector({
      book: {
          userId: 1,
          id: 1,
          title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
          body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
          price: 15,
          src: 'https://picsum.photos/200/300?random=1'
      }
    }))
    const container = renderer
      .create(
        <Book />
      )
      .toJSON()
    expect(container).toMatchSnapshot()
  })
})