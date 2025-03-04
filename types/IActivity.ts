interface ActivityItemImage {
  publicUrl: string;
}
interface ActivityItemImages {
  altText: string;
  id: string;
  name: string;
  images: ActivityItemImage[];
}
export interface IActivityItem {
  id: string;
  title: string;
  shortTitle: string;
  anchor: string;
  tab: string;
  price: string;
  duration: string;
  difficulty: string;
  images: ActivityItemImages[];
}
interface ActivityItemHeading {
  id: string;
  title: string;
  activityItemsCount: string;
  activityItems: IActivityItem[];
}
export interface IActivity {
  id: string;
  title: string;
  activityItemHeading: ActivityItemHeading[];
}
