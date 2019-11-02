import { BaseController } from '../base/base.controller';

export class EmailController extends BaseController {

  constructor(host: string = ""){
    super(host, "email");
  }

}
