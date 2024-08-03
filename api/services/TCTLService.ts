import { IBookingRequest } from "../../types/IBookingRequest";

class TCTLService {
  httpClient: any;
  constructor(httpClient) {
    this.httpClient = httpClient;
  }

  async PostBookingRequestForm(data: IBookingRequest) {
    try {
      const endpoint = process.env.NEXT_PUBLIC_APP_ENV
        ? process.env.NEXT_PUBLIC_LOCAL_URL + "/api/mail"
        : process.env.NEXT_PUBLIC_PROD_URL + "/api/mail";

      const response = await this.httpClient.post(endpoint, data);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export default TCTLService;
