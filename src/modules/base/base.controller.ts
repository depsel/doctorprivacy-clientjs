import 'isomorphic-unfetch';

import { stringify } from 'query-string';

import {
  DPApiHttpStatus,
  DPApiResultBase,
} from './base.types';

import {
  ERROR_BAD_REQUEST,
  ERROR_INVALID_PARAM_TYPE,
  ERROR_MALFORMED_JSON_RESULT
} from './base.consts';

export interface ValidateParamsTypesArray { [ paramName: string]: [ any, string ] };

export class BaseController {
  private host: string;
  private controllerName: string;

  constructor(host: string = "", controllerName: string = ''){
    if (typeof host !== 'string') host="";
    host=host.trim();
    
    if (host=="") host="https://engine.doctorprivacy.com/api/";
    if (host.charAt(host.length-1)!="/") host+="/";

    if (typeof controllerName !== 'string') controllerName="";
    controllerName=controllerName.trim();
    
    if (controllerName!="" && controllerName.charAt(controllerName.length-1)!="/") controllerName+="/";

    this.host = host;
    this.controllerName = controllerName;
  }

  protected validateParamsTypes(params: ValidateParamsTypesArray): string {
    let result: string = "";

    for (let paramName in params){
      let paramValue: any;
      let paramType: string;
      [paramValue, paramType] = params[paramName];

      if (typeof paramValue !== paramType) result += (result == ""? ERROR_INVALID_PARAM_TYPE + ": ":", ") + paramName;
    }

    return result;
  }

  protected async apiFetch(endPoint: string, language: string = '', params: { [key: string]: string } = {}): Promise<DPApiResultBase>{
    let result: DPApiResultBase;
    let headers: { [key: string]: string }; // Record<string,string>
    let fetchResult: Response;

    let query: string;

    try {
      query = '?' + stringify(params);
    } catch {
      query = '';
    }

    if (language !== '') headers = { "Accept-Language": language }; else headers = {}

    if (endPoint == "") endPoint = "/";

    try{
      fetchResult = await fetch(this.host + this.controllerName + endPoint + query, { headers });

      try {
        if (fetchResult.ok){
          result = await fetchResult.json() as DPApiResultBase;
          if (!result.statusCode) result.statusCode = fetchResult.status;
        } else
          result = {
            statusCode: fetchResult.status,
            statusText: fetchResult.statusText
          };
          

      } catch (error){
        result = {
          statusCode: DPApiHttpStatus.ERROR_MALFORMED_JSON_RESULT,
          statusText: ERROR_MALFORMED_JSON_RESULT,
        }
      }
  
    } catch(error){
      result={
        statusCode: DPApiHttpStatus.ERROR_EXCEPTION,
        statusText: error
      }
    }

    return result;
  }

}
