import { DPApiResultBase } from '../base/base.types';
export declare type UserStatus = typeof Object;
export declare type UserPermissions = typeof Object;
export interface DPApiResultUserStatus extends DPApiResultBase {
    user: UserStatus;
}
