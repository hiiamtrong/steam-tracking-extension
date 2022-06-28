<script>
  import GameList from '../GameList/GameList.svelte';
  import Header from '../Header/Header.svelte';
  import SearchBar from '../SearchBar/SearchBar.svelte';
  import SortBar from '../SortBar/SortBar.svelte';

  // your script goes here
</script>

<!-- markup (zero or more items) goes here -->

<div id="layout">
  <Header />
  <SearchBar />
  <SortBar />
  <GameList />
</div>

<style>
  /* your styles go here */

  #layout {
    flex: 1;
    display: flex;
    flex-direction: column;
    background-color: 'red';
    overflow: hidden;
  }
</style>
