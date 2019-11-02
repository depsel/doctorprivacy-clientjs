import { DPApiResultBase } from './modules/base/base.types';
import { BaseController } from './modules/base/base.controller';
import { UserController } from './modules/user/user.controller';
import { LeakipediaController } from './modules/leakipedia/leakipedia.controller';
import { EmailController } from './modules/email/email.controller';
export interface DPApiResultStatus extends DPApiResultBase {
    version: string;
}
export declare class DoctorPrivacyClient extends BaseController {
    private readonly ENDPOINT_STATUS;
    readonly user: UserController;
    readonly email: EmailController;
    readonly leakipedia: LeakipediaController;
    constructor(host?: string);
    status(language?: string): Promise<DPApiResultStatus>;
}
