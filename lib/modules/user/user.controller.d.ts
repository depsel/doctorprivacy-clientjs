import { BaseController } from '../base/base.controller';
import { DPApiResultBase } from '../base/base.types';
import { DPApiResultUserStatus } from './user.types';
export declare class UserController extends BaseController {
    private readonly ENDPOINT_STATUS;
    private readonly ENDPOINT_GET_REPORT_TOKEN;
    constructor(host?: string);
    status(language?: string): Promise<DPApiResultUserStatus | DPApiResultBase>;
}
