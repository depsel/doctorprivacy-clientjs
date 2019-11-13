import { LeakipediaSource } from "../leakipedia/leakipedia.types";

export class HIBPSearchResponseEntity {
  results!: { [email: string]: number[] }
  unknownBreaches?: { [name: string]: LeakipediaSource };
}

export class HIBPSearchDto {
  emails!: string[];
  breachesIds?: { [name: string]: number };
}

