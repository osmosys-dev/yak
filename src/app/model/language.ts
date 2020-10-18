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

export function compareLanguages(l1: Language, l2: Language) {
    const compare = l1.seqNo - l2.seqNo;
    if (compare > 0) {
      return 1;
    } else if (compare < 0) {
      return -1;
    } else {return 0; }
  }
