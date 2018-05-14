export default {
  get: jest.fn((...params) => Promise.resolve(...params)),
};
