import { IActivity, ActivityItem } from "../../types/IActivity";

export const getFormOptions = (activity: IActivity) => {
  let itemsArr: Array<ActivityItem> = [];
  let activityItemHeadings = activity?.activityItemHeading;

  itemsArr = activityItemHeadings?.flatMap((item) =>
    item.activityItems.map((activityItem) => activityItem)
  );

  return itemsArr ? itemsArr : [];
};
