<script lang="ts">
  import { onMount } from 'svelte';
  import { changeSortBy, changeSortOrder, games, getGames, loading } from '../../../store/game_detail.store';
  import { params } from '../../../store/routing.store';
  import Helper from '../../lib/helper';
  import CircularProgress from '../CircularProgress/CircularProgress.svelte';
  import GameItem from '../GameItem/GameItem.svelte';

  // your script goes here

  let myList;
  let gamesValue;

  let loadingValue;

  onMount(async () => {
    chrome.storage.local.get(['sort_by', 'sort_order'], async function (result) {
      if (result.sort_by) {
        changeSortBy(result.sort_by, false);
      }
      if (result.sort_order) {
        changeSortOrder(result.sort_order, false);
      }
      if ($params['gameId']) {
        const el = document.getElementById(`game_${$params['gameId']}`);

        if (!el) return;

        el.scrollIntoView({ behavior: 'smooth' });
      }
      await Helper.delay(1);
      await getGames();
    });
  });

  function scrolled() {
    if (Math.ceil(myList.offsetHeight + myList.scrollTop) >= myList.scrollHeight - 10 && !$loading) {
      getGames();
    }
  }

  loading.subscribe((value) => {
    loadingValue = value;
  });

  games.subscribe((value) => {
    gamesValue = value;
  });
</script>

<div id="game-list" on:scroll={scrolled} bind:this={myList}>
  {#if gamesValue.length}
    {#each gamesValue as game}
      <svelte:component this={GameItem} {game} />
    {/each}
  {:else if !loadingValue}
    <div class="not-found">No games found</div>
  {/if}

  {#if loadingValue}
    <div style="position: relative; height: 30px; padding: 20px;">
      <CircularProgress />
    </div>
  {/if}
</div>

<!-- markup (zero or more items) goes here -->
<style>
  /* your styles go here */
  #game-list {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 12px 12px 12px;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;
  }

  #game-list {
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
  }
  #game-list::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }

  .not-found {
    text-align: center;
    font-size: 18px;
    color: #999;
    padding: 12px;
  }
</style>
