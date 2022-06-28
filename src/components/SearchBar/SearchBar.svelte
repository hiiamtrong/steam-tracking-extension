<script>
  import { debounce } from 'lodash';
  import { onMount } from 'svelte';
  import { changeSearchString, searchString } from '../../../store/game_detail.store';
  // your script goes here
  const searchLogo = 'images/logo/search.png';

  let searchInput = '';
  let searchStringValue = '';

  searchString.subscribe((value) => {
    searchStringValue = value;
  });

  onMount(() => {
    searchInput = $searchString;
  });

  const search = debounce(() => {
    if (searchInput.trim() !== searchStringValue) {
      changeSearchString(searchInput);
    }
  }, 1000);
</script>

<div id="search-box">
  <input id="search_input" placeholder="Search" bind:value={searchInput} on:input={search} />
  <button id="search_button">
    <img src={searchLogo} width="20px" alt="search logo" />
  </button>
</div>

<!-- markup (zero or more items) goes here -->
<style>
  #search-box {
    width: 100%;
    display: flex;
  }

  #search_input {
    flex: 1;
    background-color: #316282;
    color: white;
    height: 20px;
    padding: 5px 10px;
    font-weight: 600;

    font-size: 16px;
    border: 1px solid #3a7398;
  }

  #search_button {
    background-color: #316282;
    height: 33;
    border: 1px solid #3a7398;
  }

  #search_input::placeholder {
    color: #eee;
    opacity: 1; /* Firefox */
    font-weight: 400;
    font-size: 18px;
  }

  #search_input:focus {
    outline: none;
  }
</style>
