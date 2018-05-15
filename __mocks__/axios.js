export default {
  get: jest.fn((...params) =>
    Promise.resolve({
      params,
      data: 1
    })
  )
};
