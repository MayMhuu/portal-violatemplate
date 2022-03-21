import { createAsyncThunk } from '@reduxjs/toolkit';
import {getApiResponse} from '../../utils/common'

export const fetchOverviewRequest = createAsyncThunk(
  'fetchOverviewRequest',
  async (
    { api, url, body },
    { fulfillWithValue, rejectWithValue },
  ) => {
    try {
      const response = await api.post(url, body);
      if (response.data.err === 200) {
        return fulfillWithValue(response.data);
      } else return rejectWithValue(response.data.message);
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const fetchRequestSummary = createAsyncThunk(
    'fetchRequestSummary',
    async (
      { api, url, body },
      { fulfillWithValue, rejectWithValue },
    ) => {
      try {
        const response = await api.post(url, body);
        if (response.data.err === 200) {
          return fulfillWithValue(response.data);
        } else return rejectWithValue(response.data.message);
      } catch (err) {
        return rejectWithValue(err);
      }
    },
)

export const fetchRecentRequest = createAsyncThunk(
  "fetchRecentRequest",
  async ({ api, URL, body }, thunkAPI) => {
    return await getApiResponse(api, URL, body, { ...thunkAPI });
  }
);

export const fetchApprovedRequest = createAsyncThunk(
  "fetchApprovedRequest",
  async ({ api, URL, body }, thunkAPI) => {
    return await getApiResponse(api, URL, body, { ...thunkAPI });
  }
);