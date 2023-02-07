export interface RequiredData {
    imageUrl: string;
    title:string;
    urlTitle: string;
    teaser: string;
    author: string;
    type: string;
    metaDescription: string;
  }
  export class RequiredDataHelper {
    imageUrl!: string;
    title:string;
    urlTitle!: string;
    teaser!: string;
    author!: string;
    type!: string;
    metaDescription!: string;
    constructor(data: RequiredData) {
      this.imageUrl = data.imageUrl;
      this.title = data.title;
      this.urlTitle=data.urlTitle;
      this.teaser = data.teaser;
      this.author = data.author;
      this.type = data.type;
      this.metaDescription = data.metaDescription;
    }
  }