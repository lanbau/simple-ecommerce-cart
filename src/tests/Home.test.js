import React from 'react'
import { useSelector } from 'react-redux'
import Home from '../pages/Home'
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}))

describe('Home Page With Books', () => {
  test('renders books', () => {
    useSelector.mockImplementation((selector) => selector({
      books: [{
          userId: 1,
          id: 1,
          title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
          body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
          price: 15,
          src: 'https://picsum.photos/200/300?random=1'
      }]
    }))
    const container = renderer
      .create(
          <MemoryRouter>
            <Home />
          </MemoryRouter>
      )
      .toJSON()
    expect(container).toMatchSnapshot()
  })
})