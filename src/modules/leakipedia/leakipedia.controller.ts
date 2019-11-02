import 'isomorphic-unfetch';
//import unfetch from 'isomorphic-unfetch';

import { stringify } from 'query-string';

import {
  LeakipediaReportQuery,
  leakipediaReportQueryParser
} from '../../helpers';

import { ERROR_BAD_REQUEST } from '../base/base.consts';

import {
  DPApiResultBase,
  DPApiHttpStatus,
} from '../base/base.types';

import {
  DPApiResultLeakipediaStatus,
  DPApiResultLeakipediaReport,
  DPApiResultLeakipediaReportToken,
} from './leakipedia.types';

import { BaseController } from '../base/base.controller';

export class LeakipediaController extends BaseController {

  private readonly ENDPOINT_STATUS: string = '';
  private readonly ENDPOINT_REPORT: string = 'report';
  private readonly ENDPOINT_REPORT_TOKEN: string = 'reportToken';

  constructor(host: string = ""){
    super(host, "leakipedia");
  }

  async status(includeWiki: boolean= false, language: string = ''): Promise<DPApiResultLeakipediaStatus | DPApiResultBase> {
    let statusText: string = this.validateParamsTypes({
      'language': [language, 'string'],
      'includeWiki': [includeWiki, 'boolean']
    })

    if (statusText == ""){
      return await this.apiFetch( this.ENDPOINT_STATUS, language ) as DPApiResultLeakipediaStatus;
    } else {
      return {
        statusCode: DPApiHttpStatus.ERROR_INVALID_PARAM_TYPE,
        statusText,
      }
    }
  }

  async report(query: string, language: string = '', includeWiki: boolean = false, token: string = ''): Promise<DPApiResultLeakipediaReport | DPApiResultBase> {
    let result: DPApiResultLeakipediaReport | DPApiResultBase;
    
    let statusText: string = this.validateParamsTypes({
      'query': [query, 'string'],
      'token': [token, 'string'],
      'language': [language, 'string'],
      'includeWiki': [includeWiki, 'boolean']
    })

    if (statusText == ""){
      let reportQuery: LeakipediaReportQuery = leakipediaReportQueryParser(query);

      if (!reportQuery.error){
        const params = {
          query,
          token,
          language,
          includeWiki: (includeWiki?"1":"0")
        };
  
        result = await this.apiFetch( this.ENDPOINT_REPORT, language, params );
  
      } else {
        result={
          statusCode: DPApiHttpStatus.ERROR_BAD_REQUEST,
          statusText: ERROR_BAD_REQUEST,
        }
  
      }

    } else {
      result={
        statusCode: DPApiHttpStatus.ERROR_INVALID_PARAM_TYPE,
        statusText,
      }
    }

    return result;
  }

  async reportToken(query: string = '', language: string = ''): Promise<DPApiResultLeakipediaReportToken | DPApiResultBase> {
    let statusText: string = this.validateParamsTypes({
      'language': [language, 'string']
    });

    if (statusText == ""){
      return await this.apiFetch( this.ENDPOINT_REPORT_TOKEN, language ) as DPApiResultLeakipediaReportToken;
    } else {
      return {
        statusCode: DPApiHttpStatus.ERROR_INVALID_PARAM_TYPE,
        statusText,
      }
    }
  }

} 
