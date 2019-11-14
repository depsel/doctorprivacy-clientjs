import { LeakipediaSource } from "../leakipedia/leakipedia.types";

type Bitpos = number;

export class HIBPSearchResponseEntity {
  results!: { [email: string]: number[] }
  unknownBreaches?: { [bitPos: number]: LeakipediaSource };
}

export class HIBPSearchDto {
  emails!: string[];
  knownBreaches?: { [name: string]: Bitpos };
}
