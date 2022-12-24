import {rootApi} from "../../app/rootApi";

const users = rootApi.injectEndpoints({
    endpoints: (build) => ({
        getUsers: build.query({
            query(params) {
                return {
                    url: 'users',
                    params: params
                }

            },
            providesTags: ['GET_USERS'],
            keepUnusedDataFor: 60
        })
    }),
    overrideExisting: false
})
export const {useGetUsersQuery} = users;