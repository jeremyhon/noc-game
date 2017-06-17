const performanceMock = {
  now: jest.fn(() => 0)
};
global.performance = performanceMock
