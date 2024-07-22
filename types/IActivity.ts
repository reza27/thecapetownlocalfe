
interface ActivityItemImage {
    publicUrl:string;
}
interface ActivityItemImages {
    altText:string;
    id:string;
    name:string;
    images: ActivityItemImage[]
}
interface ActivityItem {
    id:string;
    title:string;
    anchor:string;
    tab:string;
    price:string;
    duration:string;
    images:ActivityItemImages[]

}
interface ActivityItemHeading {
    id: string;
    title: string;
    activityItemsCount: string;
    activityItems: ActivityItem;
}
export interface IActivity {
    id: string;
    title: string;
    activityItemHeading: ActivityItemHeading;
}