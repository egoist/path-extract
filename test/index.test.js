import extract from '../src'

test('main', () => {
  expect(extract('/:id', '/wow')).toEqual({id: 'wow'})
  expect(extract('/foo*', '/foo/bar/baz')).toEqual({'*': '/bar/baz'})
  expect(extract('/foo', '/bar')).toBe(null)
})
