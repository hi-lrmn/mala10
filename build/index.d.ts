export declare class mala10 {
  constructor(options?: {
    name?: string;
    author?: string;
    color?: string;
    theme?: "mala10";
    brightness?: number;
    thumbnail?: string;
    requester?: string;
  });

  public setName(name: string): this;
  public setAuthor(author: string): this;
  public setColor(color: string): this;
  public setTheme(theme: string | "mala10"): this;
  public setBrightness(brightness: number): this;
  public setThumbnail(thumbnail: string): this;
  public setRequester(requester: string): this;

  public build(): Promise<Buffer>;
}