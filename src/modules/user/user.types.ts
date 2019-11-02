import { DPApiResultBase } from '../base/base.types';

export type UserStatus = typeof Object;
export type UserPermissions = typeof Object;

export interface DPApiResultUserStatus extends DPApiResultBase {
  user: UserStatus;
}
