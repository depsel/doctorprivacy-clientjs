"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_controller_1 = require("../base/base.controller");
class EmailController extends base_controller_1.BaseController {
    constructor(host = "") {
        super(host, "email");
    }
}
exports.EmailController = EmailController;
