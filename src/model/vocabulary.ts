export interface Vocabulary {
    id: string;
    flashcardId: string;
    seqNo: number;
    word: string;
    translated: string;
    plural: string;
    sentence: string;
    synonyms?: string[];
    declination?: string[]; 
}