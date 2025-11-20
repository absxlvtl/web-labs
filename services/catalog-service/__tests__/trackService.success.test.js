const trackService = require('../service/trackService');

describe('trackService - success', () => {
  test('create and get track', async () => {
    const payload = { title: 'Test track', artistId: 'a-1' };
    const created = await trackService.create(payload);
    expect(created).toHaveProperty('id');
    const fetched = await trackService.getById(created.id);
    expect(fetched).not.toBeNull();
    expect(fetched.title).toBe('Test track');
  }, 10000);
});
