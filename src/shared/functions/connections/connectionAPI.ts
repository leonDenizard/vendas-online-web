import axios from "axios";

import {
  ERROR_ACCESS_DENIED,
  ERROR_CONNECTION,
} from "../../constants/errosStatus";
import { MethodEnum } from "../../enums/methods.enum";

export default class ConnectionAPI {
  static async call<T>(url: string, method: string, body?: object): Promise<T> {
    switch (method) {
      case MethodEnum.GET:
        return (await axios.get<T>(url)).data;

      case MethodEnum.DELETE:
        return (await axios.delete<T>(url)).data;

      case MethodEnum.POST:
        return (await axios.post<T>(url, body)).data;

      case MethodEnum.PUT:
        return (await axios.put<T>(url, body)).data;

      case MethodEnum.PACTH:
      default:
        return (await axios.patch<T>(url, body)).data;
    }
  }

  static async connect<T>(
    url: string,
    method: string,
    body?: object,
  ): Promise<T> {
    return ConnectionAPI.call<T>(url, method, body).catch((error) => {
      if (error.response) {
        switch (error.response.status) {
          case 401:
          case 404:
            throw new Error(ERROR_ACCESS_DENIED);
          default:
            throw new Error(ERROR_CONNECTION);
        }
      }
      throw new Error(ERROR_ACCESS_DENIED);
    });
  }
}

export const connectionAPIGet = async <T>(url: string): Promise<T> => {
  return ConnectionAPI.connect(url, MethodEnum.GET);
};
export const connectionAPIDelete = async <T>(url: string): Promise<T> => {
  return ConnectionAPI.connect(url, MethodEnum.DELETE);
};
export const connectionAPIPost = async <T>(
  url: string,
  body: object,
): Promise<T> => {
  return ConnectionAPI.connect(url, MethodEnum.POST, body);
};
export const connectionAPIPut = async <T>(
  url: string,
  body: object,
): Promise<T> => {
  return ConnectionAPI.connect(url, MethodEnum.PUT, body);
};
export const connectionAPIPacht = async <T>(
  url: string,
  body: object,
): Promise<T> => {
  return ConnectionAPI.connect(url, MethodEnum.PACTH, body);
};
