export interface Medium {
    id: string;
    flashcardId: string;
    seqNo: number;
    recording: boolean;
    recordingFile: string;
    images: boolean;
    imagesCollection: string[];
}