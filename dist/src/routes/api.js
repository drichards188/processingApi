"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resizeImage = void 0;
const sharp_1 = __importDefault(require("sharp"));
const fs_1 = __importDefault(require("fs"));
const express_1 = require("express");
//add file path head here to filehead
const filehead = '/home/drich/assets/';
const routes = (0, express_1.Router)();
routes.get('/api', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let id = '';
        if (typeof req.query.id === 'string') {
            id = req.query.id;
        }
        const width = parseInt(req.query.width);
        const height = parseInt(req.query.height);
        const filepath = filehead + 'full/' + id;
        if (fs_1.default.existsSync(filepath)) {
            if (!fs_1.default.existsSync(filepath)) {
                const thumbFile = yield (0, exports.resizeImage)(id, filepath, width, height);
                res.sendFile(thumbFile);
            }
            else {
                res.sendFile(filehead + '/thumb/' + req.query.id);
            }
        }
        else {
            res.send('oopsies... desired image not found');
        }
    });
});
const resizeImage = (id, filepath, width, height) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, sharp_1.default)(filepath)
            .resize({ width: width, height: height })
            .toFile(filehead + id);
    }
    catch (error) {
        console.log(error);
    }
    return filehead + id;
});
exports.resizeImage = resizeImage;
exports.default = routes;
