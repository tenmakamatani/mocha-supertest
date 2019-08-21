"use strict";

const assert = require("assert");
const request = require("supertest");

const app = require("../index");

describe("GET /", () => {

    it("Whether the string 'ok' will return", (done) => {
        request(app)
            .get("/")
            .expect(/ok/)
            .expect(200, done);
    });

});

describe("POST /", () => {

    it("Whether the string 'Mr.hoge' will return", (done) => {
        request(app)
            .post("/")
            .send({ name: "hoge" })
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200)
            .then((res) => {
                assert.equal(res.body.name, "Mr.hoge");
            });
    });

});