import { BaseController } from '../base/base.controller';

import {
  DPApiResultBase,
  DPApiHttpStatus,
} from '../base/base.types';

import {
  DPApiResultUserStatus,
} from './user.types';

export class UserController extends BaseController {

  private readonly ENDPOINT_STATUS: string = '';
  private readonly ENDPOINT_GET_REPORT_TOKEN: string = 'report';

  constructor(host: string = ""){
    super(host, "user");
  }

  async status(language: string = ''): Promise<DPApiResultUserStatus | DPApiResultBase> {
    let statusText: string = this.validateParamsTypes({
      'language': [language, 'string']
    });

    if (statusText == ""){
      return await this.apiFetch( this.ENDPOINT_STATUS, language ) as DPApiResultUserStatus;
    } else {
      return {
        statusCode: DPApiHttpStatus.ERROR_INVALID_PARAM_TYPE,
        statusText,
      }
    }
  }

}
