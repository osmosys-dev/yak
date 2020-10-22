export interface Vocabulary {
    id: string;
    languageId: string;
    seqNo: number;
    word: string;
    translated: string;
    plural: string;
    sentence: string;
    synonyms?: string[];
    declination?: string[];
}
