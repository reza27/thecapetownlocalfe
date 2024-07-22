
interface IHomeTourImageData {
    id:string;
    publicUrl:string;
}
interface IHomeTourImage {
    altText:string;
    image:IHomeTourImageData[]
}

export interface IHomeTour {
    id:string;
    title:string;
    anchor:string;
    tab:string;
    images:IHomeTourImage[]
}

export interface IHomeTours {
    homeTour:IHomeTour
}
