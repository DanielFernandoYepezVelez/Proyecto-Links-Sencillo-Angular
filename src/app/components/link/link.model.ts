export class Link {
  public title: string;
  public link: string;
  public votes: number;

  constructor(title: string, link: string, votes?: number) {
    this.title = title;
    this.link = link;
    this.votes = votes || 0;
  }

  public voteUp() {
    this.votes++;
  }

  public voteDown() {
    this.votes--;
  }
}
