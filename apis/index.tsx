import _axios from "axios";
import alphavantage from "alphavantage";
import { API_KEY } from "../config";

export const axios = _axios.create({
    baseURL: process.env.serverURL,
});

export const alpha = alphavantage({ key: API_KEY });