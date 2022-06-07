import { MessagesRepository } from "./messages.repository";


export class MessagesService {
    messagesRepo: MessagesRepository;

    constructor() {
        this.messagesRepo = new MessagesRepository();
    }

    findOne(id) {
        return this.messagesRepo.findOne(id);
    }

    findAll() {
        return this.messagesRepo.findAll();
    }

    create(content) {
        return this.messagesRepo.create(content);
    }
}