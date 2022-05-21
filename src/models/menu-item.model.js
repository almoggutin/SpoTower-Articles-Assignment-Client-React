import { v4 as uuidv4 } from 'uuid';

class MenuItem {
    constructor(category, articles) {
        this.id = uuidv4();

        this.category = category;
        this.articles = articles;
    }
}

export default MenuItem;
