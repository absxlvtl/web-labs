const trackService = require('../service/trackService');

describe('trackService - failure', () => {
  test('create fails without title', async () => {
    expect.assertions(1);
    try {
      await trackService.create({ artistId: 'a-1' });
    } catch (err) {
      expect(err.code).toBe('TITLE_REQUIRED');
    }
  });
});
