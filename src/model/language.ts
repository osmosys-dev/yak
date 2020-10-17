export interface Language {
    _id: string;
    name: string;
    conversation: number;
    vocabulary: number;
    verb: number;
    lastAdded: string;
    url: string;
    seqNo: number;
    flashcardsCount?: number;
    }