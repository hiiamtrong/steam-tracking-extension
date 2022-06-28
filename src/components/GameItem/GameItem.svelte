<script lang="ts">
  import { setParams, setRoute } from '../../../store/routing.store';
  import { get } from 'lodash';
  import type { IGame } from '../../type/index.type';
  import Platforms from './Platforms.svelte';

  export let game: IGame;

  function onCick() {
    setRoute('/detail');
    setParams({ gameId: game.steam_appid });
  }
</script>

<div class="game_item" on:click={onCick}>
  <div class="game_item_left">
    <img class="game_image" src={game.header_image} alt={'image'} />
  </div>

  <div class="game_item_right">
    <div style="display: flex; flex-direction: column;">
      <span class="game_name">{game.name}</span>
    </div>

    <div style="display: flex; flex-direction: row; align-items: flex-end;">
      <div class="game_infor">
        <Platforms platforms={game.platforms} />
        {#if game.release_date.coming_soon}
          <div style="display: flex; align-items: center;">
            <span class="game_coming_soon">Coming soon</span>
            <span style="width: 3px;" />
            <span class="material-symbols-outlined" style="font-size: 12px; color:#67c1f5"> calendar_month </span>
          </div>
          <!-- content here -->
        {:else}
          <div class="game_release-date">
            {game.release_date.date}
          </div>
          <!-- else content here -->
        {/if}
      </div>

      {#if game.release_date.coming_soon && !game.price_overview}
        ???
        <!-- content here -->
      {:else}
        <!-- else content here -->
        {#if (game.is_free && get(game, 'price_overview.discount_percent') != 100) || !game.price_overview}
          <div>Free</div>
        {:else}
          <div class="game_price">
            {#if game.price_overview.discount_percent != 0}
              <div class="game_price-discount">
                {game.price_overview.discount_percent}%
              </div>
            {/if}

            <div style="display: flex;flex-direction: column; align-items: flex-end;   justify-content: space-between;">
              {#if game.price_overview.discount_percent != 0}
                <div class="game_price-initial">
                  {game.price_overview.initial_formatted}
                </div>
              {/if}

              <div class="game_price-final">
                {game.price_overview.final_formatted}
              </div>
            </div>
          </div>
        {/if}
      {/if}
    </div>
  </div>
</div>

<!-- markup (zero or more items) goes here -->
<style>
  /* your styles go here */
  .game_item {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 3px;
    margin: 5px 0;
    color: white;
    border-radius: 5px;
    background: rgb(148 190 226 / 10%);

    border: 4px solid rgba(0, 0, 0, 0);
  }

  .game_item_left {
    display: flex;
    height: 60px;
  }

  .game_item_right {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
  }

  .game_infor {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    width: 100%;
  }

  .game_price {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    background-color: rgba(190, 238, 17, 0.2);
    padding: 3px 5px;
    border-radius: 2px;
    flex: 1;
  }

  .game_name {
    font-size: 11px;
    text-transform: uppercase;
    font-weight: 700;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .game_image {
    object-fit: contain;
    border-radius: 3px;
    margin-right: 5px;
  }
  .game_release-date {
    font-size: 10px;
  }

  .game_coming_soon {
    font-size: 10px;
    color: #67c1f5;
  }

  .game_price-discount {
    font-size: 15px;
    margin-right: 5px;
    color: #beee11;
    font-weight: 600;
  }

  .game_price-initial {
    text-decoration: line-through;
    text-decoration-color: red;
    font-size: 10px;
  }

  .game_price-final {
    color: #beee11;
  }
</style>
