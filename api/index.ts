import _axios from "axios";
import alphavantage from "alphavantage";
import { serverURL } from "../next.config";
import { API_KEY } from "../config";

export const axios = _axios.create({
    baseURL: serverURL,
});

export const alpha = alphavantage({ key: API_KEY });