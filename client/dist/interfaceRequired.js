"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequiredDataHelper = void 0;
class RequiredDataHelper {
    constructor(data) {
        this.imageUrl = data.imageUrl;
        this.title = data.title;
        this.urlTitle = data.urlTitle;
        this.teaser = data.teaser;
        this.author = data.author;
        this.type = data.type;
        this.metaDescription = data.metaDescription;
    }
}
exports.RequiredDataHelper = RequiredDataHelper;
