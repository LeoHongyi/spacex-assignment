import axios from 'axios';
import { Filters, launchResponseType } from '../types';
import { disabledSearch, toISOString } from '../utils';

const axiosInstance = axios.create({
  baseURL: 'https://api.spacexdata.com/v5/',
});

export const LaunchAPI = {
  queryByOptions: function (
    limit: number,
    page: number,
    params?: Filters
  ): Promise<launchResponseType> {
    let data = {
      query:
        params && !disabledSearch(params)
          ? {
              date_utc: {
                $gte: toISOString(params?.startDate as string),
                $lte: toISOString(params?.endDate as string),
              },
              name: {
                $regex: params?.searchText,
              },
            }
          : {},
      options: {
        limit,
        page,
        sort: {
          date_utc: params?.sortBy ? params?.sortBy : 'desc',
        },
      },
    };
    if (params?.status !== 'all') {
      data = Object.assign(
        { query: { success: params?.status === 'success' } },
        data
      );
    }
    return axiosInstance.request({
      method: 'POST',
      url: 'launches/query',
      data,
    });
  },
};
