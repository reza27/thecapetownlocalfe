import { IBookingRequest } from "../../types/IBookingRequest";
import { IIndemnityForm } from "../../types/IIndemnityForm";

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

      await this.httpClient.post(endpoint, data);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async PostIndemnityForm(data: IIndemnityForm) {
    try {
      const endpoint = process.env.NEXT_PUBLIC_APP_ENV
        ? process.env.NEXT_PUBLIC_LOCAL_URL + "/api/indemnity"
        : process.env.NEXT_PUBLIC_PROD_URL + "/api/indemnity";

      await this.httpClient.post(endpoint, data);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export default TCTLService;
