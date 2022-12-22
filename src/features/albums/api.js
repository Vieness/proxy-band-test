import {rootApi} from "../../app/rootApi";

const albums = rootApi.injectEndpoints({
    endpoints: (build) => ({
        getAlbums: build.query({
            query(params) {
                return {
                    url: 'albums',
                    params: params
                }
            },
            providesTags: ['GET_ALBUMS'],
            keepUnusedDataFor: 60
        })
    }),
    overrideExisting:false
})
export const {useGetAlbumsQuery} = albums;