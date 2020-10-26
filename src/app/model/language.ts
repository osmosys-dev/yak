export interface Language {
    id: string;
    userId: string;
    name: string;
    conversation: number;
    vocabulary: number;
    verb: number;
    lastAdded?: string;
    url: string;
    seqNo: number;
    flashcardsCount?: number;
}