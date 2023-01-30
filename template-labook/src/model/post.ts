import { POST_TYPES } from "./enumPost"

export type post ={
    id: string,
    photo: string,
    description: string,
    type: POST_TYPES,
    createdAt: Date,
    authorId: string
}