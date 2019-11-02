"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_controller_1 = require("./modules/base/base.controller");
const user_controller_1 = require("./modules/user/user.controller");
const leakipedia_controller_1 = require("./modules/leakipedia/leakipedia.controller");
const email_controller_1 = require("./modules/email/email.controller");
class DoctorPrivacyClient extends base_controller_1.BaseController {
    constructor(host = "") {
        super(host, '');
        this.ENDPOINT_STATUS = '';
        this.user = new user_controller_1.UserController(host);
        this.email = new email_controller_1.EmailController(host);
        this.leakipedia = new leakipedia_controller_1.LeakipediaController(host);
    }
    async status(language = '') {
        return (await this.apiFetch(this.ENDPOINT_STATUS, language));
    }
}
exports.DoctorPrivacyClient = DoctorPrivacyClient;
