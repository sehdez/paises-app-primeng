import { Translation } from './paisCompleto';
export interface Pais {
    flags:      Flags;
    name:       Name;
    cca2:       string;
    cca3:       string;
    capital:    string[];
    population: number;
    translation: Translation
}

export interface Flags {
    png: string;
    svg: string;
}

export interface Name {
    common:     string;
    official:   string;
    nativeName: { [key: string]: NativeName };
}

export interface NativeName {
    official: string;
    common:   string;
}