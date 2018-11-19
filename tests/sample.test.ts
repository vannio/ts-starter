describe('testing framework', () => {
  test('should handle promises', async () => {
    const three = await 3;
    expect(three).toBe(3);
  });
});
