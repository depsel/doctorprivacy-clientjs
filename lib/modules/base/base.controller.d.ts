import 'isomorphic-unfetch';
import { DPApiResultBase } from './base.types';
export interface ValidateParamsTypesArray {
    [paramName: string]: [any, string];
}
export declare class BaseController {
    private host;
    private controllerName;
    constructor(host?: string, controllerName?: string);
    protected validateParamsTypes(params: ValidateParamsTypesArray): string;
    protected apiFetch(endPoint: string, language?: string, params?: {
        [key: string]: string;
    }): Promise<DPApiResultBase>;
}
