import { LeakipediaSource } from "../leakipedia/leakipedia.types";
export declare class HIBPSearchResponseEntity {
    results: {
        [email: string]: number[];
    };
    unknownBreaches?: {
        [name: string]: LeakipediaSource;
    };
}
export declare class HIBPSearchDto {
    emails: string[];
    breachesIds?: {
        [name: string]: number;
    };
}
