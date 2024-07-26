export interface ITourImageWithUrl {
  publicUrl: string;
}
export interface ITourImage {
  id: string;
  altText: number;
  name: string;
  image: ITourImageWithUrl;
}
