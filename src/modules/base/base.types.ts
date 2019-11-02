export enum DPApiHttpStatus {
  // Server side errors
  ERROR_BAD_REQUEST = 400,

  // Privileges errors
  ERROR_TOO_MANY_MAILBOXES = 460,
  ERROR_INVALID_REPORT_TOKEN = 461,

  // Client Api errors
  ERROR_INVALID_PARAM_TYPE = 480,
  ERROR_MALFORMED_JSON_RESULT = 481,

  // Exceptions
  ERROR_EXCEPTION = 580,
}

export interface DPApiResultBase {
  statusCode?: number;
  statusText?: string;
}
