export interface Medium {
    id: string;
    languageId: string;
    seqNo: number;
    recording: boolean;
    recordingFile: string;
    images: boolean;
    imagesCollection: string[];
}
