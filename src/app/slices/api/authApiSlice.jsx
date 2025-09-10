import { apiSlice } from "../apiSlice";

import { logout, setCredentials } from "../authSlice";

const AUTH_URL = "/api/v1/auth";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    sendLogout: builder.mutation({
      query: () => ({
        url: `${AUTH_URL}/logout`,
        method: "POST",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;

          dispatch(logout());
          setTimeout(() => {
            dispatch(apiSlice.util.resetApiState());
          }, 1000);
        } catch (error) {
          console.log(error);
        }
      },
    }),

    refresh: builder.mutation({
      query: () => ({
        url: `${AUTH_URL}/refresh`,
        method: "GET",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;

          const { accessToken } = data;
          dispatch(setCredentials({ accessToken }));
        } catch (error) {
          console.log(error);
        }
      },
    }),

    updatePassword: builder.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/updatePassword`,
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const {
  useSendLogoutMutation,
  useRefreshMutation,
  useUpdatePasswordMutation,
} = authApiSlice;
