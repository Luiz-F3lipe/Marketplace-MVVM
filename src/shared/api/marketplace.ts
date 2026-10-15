import axios, { AxiosInstance } from "axios";
import { Platform } from "react-native";

const getBaseUrl = () => {
  return Platform.select({
    ios: "http://localhost:3001",
    android: "http://192.168.15.70:3001",
  });
}

const BASE_URL = getBaseUrl();
export class MarketPlaceApiClient {
  private instance: AxiosInstance;
  private isRefreshing = false;

  constructor() {
    this.instance = axios.create({
      baseURL: BASE_URL,
    });
  }

  getInstance() {
    return this.instance;
  }
}

export const marketPlaceApiClient = new MarketPlaceApiClient().getInstance();