import { Message } from "@/models/User";

export interface ApiResponse{
    success: boolean;
    message: string;
    isAcceptingMessages?: boolean;
    messages?: Array<Message> // for message data ig which is only what we are storing in database
}

// just a industry standard practice to provide ApiResponses in same format everytime
// ie to standardize all api responses 
// ie for api responses for fetching messages of a user and so on, api response for error for everything