import { baseApi } from "@/redux/api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: ({ searchValue, filterData }) => ({
        url: `/product`,
        method: "GET",
        params: {
          searchTerm: searchValue,
          category: filterData?.category,
          sortBy: filterData?.sortBy,
        },
      }),
    }),
  }),
});

export const { useGetAllProductsQuery } = productApi;
