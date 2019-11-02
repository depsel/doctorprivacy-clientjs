"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DPApiHttpStatus;
(function (DPApiHttpStatus) {
    // Server side errors
    DPApiHttpStatus[DPApiHttpStatus["ERROR_BAD_REQUEST"] = 400] = "ERROR_BAD_REQUEST";
    // Privileges errors
    DPApiHttpStatus[DPApiHttpStatus["ERROR_TOO_MANY_MAILBOXES"] = 460] = "ERROR_TOO_MANY_MAILBOXES";
    DPApiHttpStatus[DPApiHttpStatus["ERROR_INVALID_REPORT_TOKEN"] = 461] = "ERROR_INVALID_REPORT_TOKEN";
    // Client Api errors
    DPApiHttpStatus[DPApiHttpStatus["ERROR_INVALID_PARAM_TYPE"] = 480] = "ERROR_INVALID_PARAM_TYPE";
    DPApiHttpStatus[DPApiHttpStatus["ERROR_MALFORMED_JSON_RESULT"] = 481] = "ERROR_MALFORMED_JSON_RESULT";
    // Exceptions
    DPApiHttpStatus[DPApiHttpStatus["ERROR_EXCEPTION"] = 580] = "ERROR_EXCEPTION";
})(DPApiHttpStatus = exports.DPApiHttpStatus || (exports.DPApiHttpStatus = {}));
