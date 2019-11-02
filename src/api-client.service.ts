import {
  DPApiHttpStatus,
  DPApiResultBase,
} from './modules/base/base.types';

import { BaseController } from './modules/base/base.controller';
import { UserController } from './modules/user/user.controller';
import { LeakipediaController } from './modules/leakipedia/leakipedia.controller';
import { EmailController } from './modules/email/email.controller';

export interface DPApiResultStatus extends DPApiResultBase {
  version: string;
}

export class DoctorPrivacyClient extends BaseController {
  private readonly ENDPOINT_STATUS: string = '';

  readonly user: UserController;
  readonly email: EmailController;
  readonly leakipedia: LeakipediaController;

  constructor(host: string = ""){
    super(host, '');

    this.user = new UserController(host);
    this.email = new EmailController(host);
    this.leakipedia = new LeakipediaController(host);
  }

  async status(language: string = ''): Promise<DPApiResultStatus> {
    return (await this.apiFetch(this.ENDPOINT_STATUS, language)) as DPApiResultStatus;
  }

}
