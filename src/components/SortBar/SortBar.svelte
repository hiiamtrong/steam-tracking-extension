<script>
  import { get } from 'svelte/store';
  import { changeSortBy, changeSortOrder, sortBy, sortOrder } from '../../../store/game_detail.store';

  // your script goes here

  const onChangeSort = () => {
    changeSortBy(sortByValue);
  };

  let sortByValue;
  let sortOrderValue;

  sortBy.subscribe((value) => {
    sortByValue = value;
  });

  sortOrder.subscribe((value) => {
    sortOrderValue = value;
  });
</script>

<div id="sort_bar">
  <!-- svelte-ignore a11y-no-onchange -->
  <select id="sort_select" bind:value={sortByValue} on:change={onChangeSort}>
    <option value="release_date"> Release Date </option>
    <option value="name"> Name </option>
    <option value="price"> Price </option>
    <option value="discount"> Discount </option>
    <option value="recommend"> Recommendation </option>
    <option value="metacritic"> Metacritic </option>
  </select>

  <button class="sort_btn" on:click={() => changeSortOrder(-get(sortOrder))}>
    {#if sortOrderValue == 1}
      <span class="material-symbols-outlined" style="color: white;font-size: 15px;">north</span>
    {:else}
      <span class="material-symbols-outlined" style="color: white;font-size: 15px;">south</span>
    {/if}
  </button>
</div>

<style>
  /* your styles go here */

  #sort_bar {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 5px;
  }

  #sort_select {
    background-color: transparent;
    color: white;
    border: 1px solid rgb(37, 83, 122);
    height: 25px;
  }

  *:focus {
    outline: none;
  }

  #sort_select option {
    margin: 40px;
    background: rgb(37, 83, 122);

    color: #fff;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.4);
  }

  .sort_btn {
    cursor: pointer;
    background: rgb(37, 83, 122);
    border: 1px solid rgb(37, 83, 122);
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px;
  }
</style>
