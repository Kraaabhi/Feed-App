const request = require('supertest');
const app = require('../src/app');


describe('Feed API', () => {
  describe('GET /api/feed', () => {
    it('should return all feeds if no search term is provided', async () => {
      const res = await request(app).get('/api/feed');
      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('total');
      expect(res.body).toHaveProperty('feed');
      expect(res.body).toHaveProperty('page');
      expect(res.body.feed.length).toBeGreaterThan(0);
    });
    it('should search for feed in name and description fields', async () => {
      const res = await request(app).get('/api/feed?searchTerm=the king');
      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('total');
      expect(res.body).toHaveProperty('feed');
      expect(res.body).toHaveProperty('page');
      expect(res.body.feed.length).toBeGreaterThan(0);
      expect(res.body.feed[0].description.toLowerCase()).toContain('laboriosam occaecati modi sit voluptatem. quis harum rerum similique at. the lion king. et porro eum quia eligendi doloribus aut. tenetur provident maxime quod illum vitae excepturi. nemo ipsum non.');
    });

    it('should support exact match when search term is enclosed in double quotes', async () => {
      const res = await request(app).get('/api/feed?searchTerm="The King"');
      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('total');
      expect(res.body).toHaveProperty('feed');
      expect(res.body).toHaveProperty('page');
      expect(res.body.total).toBe(2);
      expect(res.body.feed[0].description.toLowerCase()).toEqual('vitae dolor natus aut aut. totam dolor porro. rem est repellendus voluptas eos soluta. the lord of the rings: the return of the king');
    });

    it('should allow sorting by name', async () => {
      const res = await request(app).get('/api/feed?sortBy=name');
      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('total');
      expect(res.body).toHaveProperty('feed');
      expect(res.body).toHaveProperty('page');
      expect(res.body.feed.length).toBeGreaterThan(0);
      expect(res.body.feed[0].name.toLowerCase()).toEqual('central creative producer');
    });

    it('should allow sorting by dateLastEdited', async () => {
      const res = await request(app).get('/api/feed?sortBy=dateLastEdited&sortOrder=desc');
      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('total');
      expect(res.body).toHaveProperty('feed');
      expect(res.body).toHaveProperty('page');
      expect(res.body.feed.length).toBeGreaterThan(0);
      expect(res.body.feed[0].name.toLowerCase()).toEqual('regional marketing developer');
    });
    it('should return first page if   no page no  is provided', async () => {
        const res = await request(app).get('/api/feed');
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('total');
        expect(res.body).toHaveProperty('feed');
       expect(res.body).toHaveProperty('page');
       expect(res.body.page).toBe(1);
        expect(res.body.feed.length).toBeGreaterThan(0);
      });
    it('should use page numbers style of pagination', async () => {
      const res = await request(app).get('/api/feed?page=2&limit=1');
      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('total');
      expect(res.body).toHaveProperty('feed');
      expect(res.body).toHaveProperty('page');
      expect(res.body.feed.length).toBe(1);
    });
  });
});
  