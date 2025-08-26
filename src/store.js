import { configureStore } from '@reduxjs/toolkit';
import { setupListerners } from '@reduxjs/toolkit/query';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/'}),
    endpoints: (builder) => ({
        getPokemonByName: builder.query({
            query: (name)=> `pokemon/${name}`
        }),
    }),
});

export const { useGetPokemonByNameQuery }= pokemonApi;

export const store = configureStore({
    reducer:{
        [pokemonApi.reducerPath]: pokemonApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(pokemonApi.middleware),
})

setupListerners(store.dispatch);
