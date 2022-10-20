"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes = (0, express_1.Router)();
const filepath = '/home/drich/assets/full/encenadaport.jpg';
/* GET home page. */
routes.get('/api', function (req, res, next) {
    res.sendFile(filepath);
    // res.send(`hiya david this is /api with params of: ${req.query.id}`)
    // res.render('index', { title: 'Hiya David this is /api' })
});
exports.default = routes;
// module.exports = router
