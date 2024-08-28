export interface IReview{
    event: {
        eventName: string
    }
    ratings: number
    review: string
    user?: {
        username: string
        email: string
        avatar: string | null
    }
}