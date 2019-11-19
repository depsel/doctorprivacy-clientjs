import { LeakipediaSource } from "../leakipedia/leakipedia.types";

export type Bitpos = number;

export interface HIBPUnknownBreaches { [bitPos: number]: LeakipediaSource };

export class HIBPSearchResponseEntity {
  results!: { [email: string]: number[] }
  unknownBreaches?: HIBPUnknownBreaches;
}

export interface HIBPKnownBreaches { [name: string]: Bitpos };

export class HIBPSearchDto {
  emails!: string[];
  knownBreaches?: HIBPKnownBreaches;
}
