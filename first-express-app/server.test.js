
const request = require("supertest");
const server = require("./server");

describe("server", () => {

  describe("GET /hello", () => {
    it("should return 'Hello World'", async () => {
      const res = await request(server).get("/hello");
      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual({ text: 'boop!' });
    });
  });

  describe("GET /cats", () => {
    it("should return an array", async () => {
      const res = await request(server).get("/cats");
      expect(res.statusCode).toEqual(200);
      expect(Array.isArray(res.body.cats)).toBe(true)
    })
  })

  describe("GET /cats/:id", () => {
    it("should return a cat obj for valid id", async () => {
      const res = await request(server).get("/cats/100");
      expect(res.body.name).toEqual("Garfield")
    })
    it("should return 404 for invalid id", async () => {
      const res = await request(server).get("/cats/777");
      expect(res.statusCode).toEqual(404)
    })
  })

});
