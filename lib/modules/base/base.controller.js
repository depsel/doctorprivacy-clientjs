"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("isomorphic-unfetch");
const query_string_1 = require("query-string");
const base_types_1 = require("./base.types");
const base_consts_1 = require("./base.consts");
;
class BaseController {
    constructor(host = "", controllerName = '') {
        if (typeof host !== 'string')
            host = "";
        host = host.trim();
        if (host == "")
            host = "https://engine.doctorprivacy.com/api/";
        if (host.charAt(host.length - 1) != "/")
            host += "/";
        if (typeof controllerName !== 'string')
            controllerName = "";
        controllerName = controllerName.trim();
        if (controllerName != "" && controllerName.charAt(controllerName.length - 1) != "/")
            controllerName += "/";
        this.host = host;
        this.controllerName = controllerName;
    }
    validateParamsTypes(params) {
        let result = "";
        for (let paramName in params) {
            let paramValue;
            let paramType;
            [paramValue, paramType] = params[paramName];
            if (typeof paramValue !== paramType)
                result += (result == "" ? base_consts_1.ERROR_INVALID_PARAM_TYPE + ": " : ", ") + paramName;
        }
        return result;
    }
    async apiFetch(endPoint, language = '', params = {}) {
        let result;
        let headers; // Record<string,string>
        let fetchResult;
        let query;
        try {
            query = '?' + query_string_1.stringify(params);
        }
        catch (_a) {
            query = '';
        }
        if (language !== '')
            headers = { "Accept-Language": language };
        else
            headers = {};
        if (endPoint == "")
            endPoint = "/";
        try {
            fetchResult = await fetch(this.host + this.controllerName + endPoint + query, { headers });
            try {
                if (fetchResult.ok) {
                    result = await fetchResult.json();
                    if (!result.statusCode)
                        result.statusCode = fetchResult.status;
                }
                else
                    result = {
                        statusCode: fetchResult.status,
                        statusText: fetchResult.statusText
                    };
            }
            catch (error) {
                result = {
                    statusCode: base_types_1.DPApiHttpStatus.ERROR_MALFORMED_JSON_RESULT,
                    statusText: base_consts_1.ERROR_MALFORMED_JSON_RESULT,
                };
            }
        }
        catch (error) {
            result = {
                statusCode: base_types_1.DPApiHttpStatus.ERROR_EXCEPTION,
                statusText: error
            };
        }
        return result;
    }
}
exports.BaseController = BaseController;
