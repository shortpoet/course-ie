global.localStorage = {
  setItem: jest.fn(),
  getItem: jest.fn()
};

beforeEach(() => {
  localStorage.setItem.mockReset();
});
