"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_controller_1 = require("../base/base.controller");
const base_types_1 = require("../base/base.types");
class UserController extends base_controller_1.BaseController {
    constructor(host = "") {
        super(host, "user");
        this.ENDPOINT_STATUS = '';
        this.ENDPOINT_GET_REPORT_TOKEN = 'report';
    }
    async status(language = '') {
        let statusText = this.validateParamsTypes({
            'language': [language, 'string']
        });
        if (statusText == "") {
            return await this.apiFetch(this.ENDPOINT_STATUS, language);
        }
        else {
            return {
                statusCode: base_types_1.DPApiHttpStatus.ERROR_INVALID_PARAM_TYPE,
                statusText,
            };
        }
    }
}
exports.UserController = UserController;
