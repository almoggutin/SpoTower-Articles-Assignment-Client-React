import { v4 as uuidv4 } from 'uuid';

class Article {
    constructor(title, category, summary, description) {
        this.id = uuidv4();
        this.title = title;
        this.category = category;
        this.summary = summary;
        this.description = description;
    }
}

export default Article;
