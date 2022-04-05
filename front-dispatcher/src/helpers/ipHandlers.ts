import axios from "axios";
import { apiStrings, IPApiStrings } from "../strings/strings";
export interface IPApiResponse {
  ip: string;
  hostname: string;
  city: string;
  region: string;
  country: string;
  loc: string;
  org: string;
  postal: string;
  timezone: string;
}
export const getClientRegion = async () => {
  try {
    const response = await axios.get<IPApiResponse>(IPApiStrings.url);
    const { country } = response.data;
    return apiStrings.Country.includes(country)
      ? country.toLowerCase()
      : IPApiStrings.defaultCountry;
  } catch (error) {
    return IPApiStrings.defaultCountry;
  }
};
