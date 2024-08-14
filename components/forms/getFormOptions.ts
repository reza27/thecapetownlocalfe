import { IActivity, IActivityItem } from "../../types/IActivity";

export const getFormOptions = (activity: IActivity) => {
  let itemsArr: Array<IActivityItem> = [];
  let activityItemHeadings = activity?.activityItemHeading;

  itemsArr = activityItemHeadings?.flatMap((item) =>
    item.activityItems.map((activityItem) => activityItem)
  );

  return itemsArr ? itemsArr : [];
};
