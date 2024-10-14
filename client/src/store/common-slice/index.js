import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLoading: false,
    featureImageList: [],
}

export const getFeatureImages = createAsyncThunk(
    '/FeatureImages/getFeatureImages',
    async () => {
        const result = await axios.get(
            `${import.meta.env.VITE_API_URL}/api/common/feature/get`
        );

        return result?.data;
    }
);

export const deleteFeatureImage = createAsyncThunk(
    '/FeatureImages/deleteFeatureImage',
    async (id) => {
        const result = await axios.post(
            `${import.meta.env.VITE_API_URL}/api/common/feature/delete`,
            { id }
        );

        return result?.data;
    }
);

export const addFeatureImage = createAsyncThunk(
    '/FeatureImages/addFeatureImage',
    async (image) => {
        const result = await axios.post(
            `${import.meta.env.VITE_API_URL}/api/common/feature/add`,
            { image }
        );

        return result?.data;
    }
);

const commonSlice = createSlice({
    name: 'commonSlice',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(getFeatureImages.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getFeatureImages.fulfilled, (state, action) => {
                state.isLoading = false;
                state.featureImageList = action.payload.data;
            })
            .addCase(getFeatureImages.rejected, (state) => {
                state.isLoading = false;
                state.featureImageList = [];
            })
    }
})

export default commonSlice.reducer;