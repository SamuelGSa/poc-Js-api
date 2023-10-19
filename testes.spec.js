const axios = require('axios');
const app = require('./index');

describe('Testando o endpoint GET', () => {
  it('Deve retornar Status 200', async () => {
    const response = await axios.get('http://localhost:3000');
    expect(response.status).toBe(200);
  });
});