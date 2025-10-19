// types.ts

export interface Feeder11kV {
  nomenclature: string;
  name: string;
  band: string | null;
}

export interface Transformer {
  name: string; // e.g. "T1 15MVA"
  feeders11kV: Feeder11kV[];
}

export interface InjectionSubstation {
  name: string; // e.g. "EBUTE INJ: S/S"
  transformers: Transformer[];
}

export interface Feeder33kV {
  name: string; // e.g. "IPAKODO"
  injections: InjectionSubstation[];
}

export interface BusinessUnit {
  businessUnit: string; // e.g. "IKORODU"
  feeders33kV: Feeder33kV[];
}

export type PowerData = BusinessUnit[];
