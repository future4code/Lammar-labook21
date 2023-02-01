import { POST_TYPES } from "../enumPost";

export interface PostInputDTO{
    photo: string,
    description: string,
    type: POST_TYPES,
    author_id: string
}