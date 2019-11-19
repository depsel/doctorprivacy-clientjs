import { LeakipediaSource } from "../leakipedia/leakipedia.types";
export declare type Bitpos = number;
export interface HIBPUnknownBreaches {
    [bitPos: number]: LeakipediaSource;
}
export declare class HIBPSearchResponseEntity {
    results: {
        [email: string]: number[];
    };
    unknownBreaches?: HIBPUnknownBreaches;
}
export interface HIBPKnownBreaches {
    [name: string]: Bitpos;
}
export declare class HIBPSearchDto {
    emails: string[];
    knownBreaches?: HIBPKnownBreaches;
}
