import { apiSlice } from "./apiSlice";

const characterApi = apiSlice.injectEndpoints({
     endpoints: (builder) => ({
          getCharacters: builder.query({
               query: (page) => "character/?page=" + page,
          }),
          getCharacter: builder.query({
               query: (id) => "character/" + id,
          }),
     }),
     overrideExisting: false,
});

// hooks
export const { useGetCharactersQuery, useGetCharacterQuery } = characterApi;
