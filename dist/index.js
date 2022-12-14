"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.myFunc = exports.app = void 0;
const express_1 = __importDefault(require("express"));
const api_1 = __importDefault(require("./routes/api"));
exports.app = (0, express_1.default)();
const port = 3000;
const myFunc = (num) => {
    return num * num;
};
exports.myFunc = myFunc;
exports.app.get('/api', api_1.default);
exports.app.get('/', (req, res) => {
    res.send('image api is at /api endpoint. use id param for filename as well as width and height to resize such as => http://localhost:3000/api?id=encenadaport.jpg&height=100&width=200');
});
exports.app.listen(port, () => {
    console.log(`Server is running at https://localhost:${port}`);
});
