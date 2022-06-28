import { writable } from 'svelte/store';

export const currentRoute = writable<string>('/');

export const setRoute = (route: string) => {
  currentRoute.set(route);
};

export const params = writable<{ [key: string]: string }>({});

export const setParams = (_params: { [key: string]: any }) => {
  params.set(_params);
};
