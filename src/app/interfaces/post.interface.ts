export interface IPostRequest {
    title: string;
    text: string;
    author: string;
    img: string;
}

export interface IPostResponse extends IPostRequest {
    id: number;
}