import { writable, get } from 'svelte/store';
import type { IGame } from '../src/type/index.type';
import { uniqBy } from 'lodash';
import Helper from '../src/lib/helper';
import { config } from '../src/config/config';

export const games = writable<IGame[]>([]);

export const searchString = writable<string>('');

export const limit = writable<number>(20);
export const page = writable<number>(0);

export const sortBy = writable<string>('discount');
export const sortOrder = writable<number>(-1);

export const loading = writable<boolean>(false);

export const hashMap = writable<{ [key: string]: boolean }>({});
export const getGames = async () => {
  try {
    if (get(loading)) {
      return;
    }

    if (get(hashMap)[get(page)]) {
      return;
    }

    loading.set(true);

    let url = `${config.SERVER_URL}/game_detail/search?limit=${get(limit)}&page=${get(page)}&sort_by=${get(
      sortBy
    )}&sort_order=${get(sortOrder)}`;

    if (get(searchString)) {
      url += `&query=${get(searchString)}`;
    }

    const res = await fetch(url, {
      method: 'GET',
    });
    const data = await res.json();
    hashMap.update((current) => {
      return { ...current, [get(page)]: true };
    });

    if (data.length) {
      await Helper.delay(1);
      games.update((current) => {
        return uniqBy([...current, ...data], 'steam_appid');
      });
      page.update((current) => current + 1);
    }
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
  hashMap.set({});

  page.set(0);
};

export const changeSortBy = (currentSortBy: string, clean: boolean = true) => {
  sortBy.set(currentSortBy);
  chrome.storage.local.set({ sort_by: currentSortBy });

  if (clean) {
    games.set([]);
    hashMap.set({});
    page.set(0);
  }
};

export const changeSortOrder = (currentSortOrder: number, clean: boolean = true) => {
  sortOrder.set(currentSortOrder);
  chrome.storage.local.set({ sort_order: currentSortOrder });
  if (clean) {
    games.set([]);
    hashMap.set({});
    page.set(0);
  }
};
