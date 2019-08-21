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