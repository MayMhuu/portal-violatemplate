import { createSlice } from '@reduxjs/toolkit';
import {
  fetchOverviewRequest,
  fetchRequestSummary,
  fetchRecentRequest,
  fetchApprovedRequest,
} from './dashboardApi';

const initialState = {
  status: 'pending',
  overViewRequest: [],
  requestSummary: [],
  recentRequest: {
    recentLoad: true,
    dataRecent: [],
  },
  approvedRequest: {
    dataApproved: [],
  },
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOverviewRequest.pending, (state, action) => {
      state.error = null;
    });
    builder.addCase(fetchOverviewRequest.fulfilled, (state, action) => {
      state.overViewRequest = action.payload;
    });
    builder.addCase(fetchOverviewRequest.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    });
    builder.addCase(fetchRequestSummary.pending, (state, action) => {
      state.error = null;
    });
    builder.addCase(fetchRequestSummary.fulfilled, (state, action) => {
      state.requestSummary = action.payload;
    });
    builder.addCase(fetchRequestSummary.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    });
    builder.addCase(fetchRecentRequest.pending, (state, action) => {
      state.error = null;
      state.recentRequest.recentLoad = true;
    });
    builder.addCase(fetchRecentRequest.fulfilled, (state, action) => {
      state.recentRequest.dataRecent = action.payload;
      state.recentRequest.recentLoad = false;
    });
    builder.addCase(fetchRecentRequest.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
      state.recentRequest.recentLoad = false;
    });
    builder.addCase(fetchApprovedRequest.pending, (state, action) => {
      state.error = null;
    });
    builder.addCase(fetchApprovedRequest.fulfilled, (state, action) => {
      state.approvedRequest.dataApproved = action.payload;
    });
    builder.addCase(fetchApprovedRequest.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    });
  },
});

export const dashboard = (state) => state.dashboard;
export default dashboardSlice.reducer;
