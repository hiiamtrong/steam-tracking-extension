import axios from 'axios';
import { writable, get } from 'svelte/store';
import type { IGame } from '../src/type/index.type';
import { uniqBy } from 'lodash';
import { config } from '../src/lib/config';

export const games = writable<IGame[]>([]);

export const searchString = writable<string>('');

export const limit = writable<number>(20);
export const page = writable<number>(0);

export const sortBy = writable<string>('discount');
export const sortOrder = writable<number>(-1);

export const loading = writable<boolean>(false);

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const getGames = async () => {
  try {
    if (get(loading)) {
      return;
    }

    loading.set(true);

    let url = `${config.SERVER_URL}/game_detail/search?limit=${get(limit)}&page=${get(page)}&sort_by=${get(
      sortBy
    )}&sort_order=${get(sortOrder)}`;

    if (get(searchString)) {
      url += `&query=${get(searchString)}`;
    }

    const { data } = await axios.get(url);
    await delay(1);
    games.update((current) => {
      return uniqBy([...current, ...data], 'steam_appid');
    });
    page.update((current) => current + 1);
  } catch (error) {
    console.log(error);
  } finally {
    loading.set(false);
  }
};

export const changeSearchString = (currentSearch: string) => {
  currentSearch = currentSearch.trim();
  searchString.set(currentSearch);

  games.set([]);

  page.set(0);

  getGames();
};

export const changeSortBy = (currentSortBy: string) => {
  sortBy.set(currentSortBy);

  games.set([]);

  page.set(0);
  getGames();
};

export const changeSortOrder = (currentSortOrder: number) => {
  sortOrder.set(currentSortOrder);

  games.set([]);

  page.set(0);
  getGames();
};
