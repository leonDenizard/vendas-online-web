import axios from "axios";
import { useState } from "react";

export const useRequests = () => {
  const [loading, setLoading] = useState(false);

  const getRequest = async (url: string) => {
    setLoading(true);
    return await axios({
      method: "get",
      url: url,
    })
      .then((result) => {
        return result.data;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const postRequest = async (url: string, body: any) => {
    setLoading(true);
    const returnData = await axios({
      method: "post",
      url: url,
      data: body,
    })
      .then((result) => {
        return result.data;
      })
      .catch((error) => {
        alert(error.request.status);
        console.log(error);
      });
    setLoading(false);
    return returnData;
  };

  return {
    loading,
    getRequest,
    postRequest,
  };
};
