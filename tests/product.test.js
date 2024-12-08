const request = require('supertest');
const app = require('../server');

describe('Product API', () => {
    it('should add a product', async () => {
        const res = await request(app).post('/api/products/add').send({
            name: 'Test Product',
            description: 'This is a test product',
            price: 100,
            category: 'Test',
        });
        expect(res.statusCode).toBe(201);
        expect(res.body.product).toHaveProperty('name', 'Test Product');
    });
});
