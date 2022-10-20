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
const sharp_1 = __importDefault(require("sharp"));
const fs_1 = __importDefault(require("fs"));
const express_1 = require("express");
const routes = (0, express_1.Router)();
/* GET home page. */
routes.get('/api', function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const filepath = '/home/drich/assets/full/' + req.query.id;
        if (fs_1.default.existsSync(filepath)) {
            if (!fs_1.default.existsSync(filepath)) {
                //todo add error handling
                const thumbFile = yield resizeImage(req.query.id, filepath, parseInt(req.query.width), parseInt(req.query.height));
                res.sendFile(thumbFile);
            }
            else {
                res.sendFile('/home/drich/assets/thumb/' + req.query.id);
            }
        }
        else {
            res.send('desired image not found');
        }
    });
});
const resizeImage = (id, filepath, width, height) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, sharp_1.default)(filepath)
            .resize({ width: width, height: height })
            .toFile('/home/drich/assets/thumb/' + id);
    }
    catch (error) {
        console.log(error);
    }
    return '/home/drich/assets/thumb/' + id;
});
exports.default = routes;
