interface IGoogleReviewText {
  text: String;
  languageCode: String;
}

interface IGoogleReviewAuthorAttribution {
  displayName: string;
  uri: String;
  photoUri: String;
}

export interface IGoogleReview {
  name: String;
  relativePublishTimeDescription: String;
  rating: number;
  text: IGoogleReviewText;
  originalText: IGoogleReviewText;
  authorAttribution: IGoogleReviewAuthorAttribution;
  publishTime: String;
  flagContentUri: String;
  googleMapsUri: String;
}

export interface IGoogleReviewObject {
  reviews: IGoogleReview[];
}

interface IGoogleReviewErrorDetail {
  code: 429;
  message: "Quota exceeded for quota metric 'GetPlaceRequest' and limit 'GetPlaceRequest per day' of service 'places.googleapis.com' for consumer 'project_number:785333139350'.";
  status: "RESOURCE_EXHAUSTED";
  details: [];
  reviews: IGoogleReview[];
}

export interface IGoogleReviewError {
  error: IGoogleReviewErrorDetail;
}

// {
//       "name": "places/ChIJl829y7BDzB0RT6NBopoEm18/reviews/ChdDSUhNMG9nS0VJQ0FnSUN2dXRDaGhRRRAB",
//       "relativePublishTimeDescription": "in the last week",
//       "rating": 5,
//       "text": {
//         "text": "Kurt was such a wonderful and experienced guide!! I had the best hike up lion's head and the best sunset spot! He was very attentive and took care of our safety! Passionate guide! Awesome!!!",
//         "languageCode": "en"
//       },
//       "originalText": {
//         "text": "Kurt was such a wonderful and experienced guide!! I had the best hike up lion's head and the best sunset spot! He was very attentive and took care of our safety! Passionate guide! Awesome!!!",
//         "languageCode": "en"
//       },
//       "authorAttribution": {
//         "displayName": "Tasha Yoga",
//         "uri": "https://www.google.com/maps/contrib/115810012959195028635/reviews",
//         "photoUri": "https://lh3.googleusercontent.com/a-/ALV-UjWH8oumr-YrtHX4DNkYuUwwIIK84t_BnW-jkjX-rTzRPL4FcNjdgw=s128-c0x00000000-cc-rp-mo"
//       },
//       "publishTime": "2024-12-10T08:01:58.263879Z",
//       "flagContentUri": "https://www.google.com/local/review/rap/report?postId=ChdDSUhNMG9nS0VJQ0FnSUN2dXRDaGhRRRAB&d=17924085&t=1",
//       "googleMapsUri": "https://www.google.com/maps/reviews/data=!4m6!14m5!1m4!2m3!1sChdDSUhNMG9nS0VJQ0FnSUN2dXRDaGhRRRAB!2m1!1s0x1dcc43b0cbbdcd97:0x5f9b049aa241a34f"
//     }
