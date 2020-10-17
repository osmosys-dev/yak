export interface Verb {
    id: string;
    flashcardId: string;
    seqNo: number;
    verb: string;
    translated: string;
    pastTense: string[];
    pastSentence: string;
    presentTense: string[];
    presentSentence:string;
    futureTense: string[];
    futureSentence:string;
}