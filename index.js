"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.myFunc = void 0;
const express_1 = __importDefault(require("express"));
const api_1 = __importDefault(require("./src/routes/api"));
const app = (0, express_1.default)();
const port = 3000;
const myFunc = (num) => {
    return num * num;
};
exports.myFunc = myFunc;
app.use('/api', api_1.default);
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
app.listen(port, () => {
    console.log(`Server is running at https://localhost:${port}`);
});
