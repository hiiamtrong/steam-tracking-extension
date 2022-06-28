<script lang="ts">
  import { onMount } from 'svelte';
  import { games, getGames, loading } from '../../../store/game_detail.store';
  import CircularProgress from '../CircularProgress/CircularProgress.svelte';
  import GameItem from '../GameItem/GameItem.svelte';

  // your script goes here

  let myList;
  let gamesValue;

  let loadingValue;

  onMount(async () => {
    getGames();
  });

  function scrolled() {
    if (Math.ceil(myList.offsetHeight + myList.scrollTop) >= myList.scrollHeight) {
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
  <!-- {#if loadingValue}
    <Loading />
  {/if} -->
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
