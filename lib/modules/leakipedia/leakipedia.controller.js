"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("isomorphic-unfetch");
const helpers_1 = require("../../helpers");
const base_consts_1 = require("../base/base.consts");
const base_types_1 = require("../base/base.types");
const base_controller_1 = require("../base/base.controller");
class LeakipediaController extends base_controller_1.BaseController {
    constructor(host = "") {
        super(host, "leakipedia");
        this.ENDPOINT_STATUS = '';
        this.ENDPOINT_REPORT = 'report';
        this.ENDPOINT_REPORT_TOKEN = 'reportToken';
    }
    async status(includeWiki = false, language = '') {
        let statusText = this.validateParamsTypes({
            'language': [language, 'string'],
            'includeWiki': [includeWiki, 'boolean']
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
    async report(query, language = '', includeWiki = false, token = '') {
        let result;
        let statusText = this.validateParamsTypes({
            'query': [query, 'string'],
            'token': [token, 'string'],
            'language': [language, 'string'],
            'includeWiki': [includeWiki, 'boolean']
        });
        if (statusText == "") {
            let reportQuery = helpers_1.leakipediaReportQueryParser(query);
            if (!reportQuery.error) {
                const params = {
                    query,
                    token,
                    language,
                    includeWiki: (includeWiki ? "1" : "0")
                };
                result = await this.apiFetch(this.ENDPOINT_REPORT, language, params);
            }
            else {
                result = {
                    statusCode: base_types_1.DPApiHttpStatus.ERROR_BAD_REQUEST,
                    statusText: base_consts_1.ERROR_BAD_REQUEST,
                };
            }
        }
        else {
            result = {
                statusCode: base_types_1.DPApiHttpStatus.ERROR_INVALID_PARAM_TYPE,
                statusText,
            };
        }
        return result;
    }
    async reportToken(query = '', language = '') {
        let statusText = this.validateParamsTypes({
            'language': [language, 'string']
        });
        if (statusText == "") {
            return await this.apiFetch(this.ENDPOINT_REPORT_TOKEN, language);
        }
        else {
            return {
                statusCode: base_types_1.DPApiHttpStatus.ERROR_INVALID_PARAM_TYPE,
                statusText,
            };
        }
    }
}
exports.LeakipediaController = LeakipediaController;
