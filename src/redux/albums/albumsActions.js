import { FETCH_ALBUMS } from "./albumsTypes"
export const fetchAlbums = (data) => {
    return {
        type: FETCH_ALBUMS,
        data,
    };
};