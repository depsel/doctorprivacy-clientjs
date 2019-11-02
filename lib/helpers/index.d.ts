import { LeakipediaRiskLevel, LeakipediaLeakedDataCategory } from '../modules/leakipedia/leakipedia.types';
export declare type LeakipediaReportQuery = {
    error: boolean;
    emails?: string[];
    domain?: string;
};
export declare function stringToLeakedDataCategory(s: string, exceptionOnError?: boolean): LeakipediaLeakedDataCategory;
export declare function leakedDataCategoryToString(category: LeakipediaLeakedDataCategory, exceptionOnError?: boolean): string;
export declare function stringToRiskLevel(s: string, exceptionOnError?: boolean): LeakipediaRiskLevel;
export declare function riskLevelToString(risk: LeakipediaRiskLevel, exceptionOnError?: boolean): string;
export declare function stringsToDataCategories(strings: string[]): LeakipediaLeakedDataCategory[];
export declare function dataCategoriesToStrings(dataCategories: LeakipediaLeakedDataCategory[]): string[];
export declare function validateMailbox(mailbox: string): boolean;
export declare function validateDomain(domain: string): boolean;
export declare function validateEmail(email: string): boolean;
export declare function leakipediaReportQueryParser(query: string): LeakipediaReportQuery;
