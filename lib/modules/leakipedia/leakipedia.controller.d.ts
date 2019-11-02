import 'isomorphic-unfetch';
import { DPApiResultBase } from '../base/base.types';
import { DPApiResultLeakipediaStatus, DPApiResultLeakipediaReport, DPApiResultLeakipediaReportToken } from './leakipedia.types';
import { BaseController } from '../base/base.controller';
export declare class LeakipediaController extends BaseController {
    private readonly ENDPOINT_STATUS;
    private readonly ENDPOINT_REPORT;
    private readonly ENDPOINT_REPORT_TOKEN;
    constructor(host?: string);
    status(includeWiki?: boolean, language?: string): Promise<DPApiResultLeakipediaStatus | DPApiResultBase>;
    report(query: string, language?: string, includeWiki?: boolean, token?: string): Promise<DPApiResultLeakipediaReport | DPApiResultBase>;
    reportToken(query?: string, language?: string): Promise<DPApiResultLeakipediaReportToken | DPApiResultBase>;
}
