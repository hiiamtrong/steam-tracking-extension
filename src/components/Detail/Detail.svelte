<script lang="ts">
  import { onMount } from 'svelte';

  import { get, isEmpty } from 'lodash';
  import { params, setRoute } from '../../../store/routing.store';
  import type { IGame } from '../../type/index.type';
  import Platforms from '../GameItem/Platforms.svelte';
  import TagGame from '../GameItem/TagGame.svelte';
  import Loading from '../Loading/loading.svelte';
  import './Detail.css';
  import { config } from '../../config/config';
  // your script goes here

  let game: IGame;
  let divDetail: HTMLDivElement;
  let loading;
  let chosenScreenshot;
  let steamLink;

  function onClick() {
    setRoute('/');
  }

  onMount(async () => {
    try {
      loading = true;
      const res = await fetch(`${config.SERVER_URL}/game_detail/${get($params, 'gameId')}`, {
        method: 'GET',
      });
      const data = await res.json();
      game = data;
      if (game.background && divDetail) {
        divDetail.style.backgroundImage = `url(${game.background})`;
      }

      if (game.screenshots) {
        chosenScreenshot = game.screenshots[0];
      }
      steamLink = 'https://store.steampowered.com/app/' + game.steam_appid + '/#game_area_purchase';
    } catch (error) {
      console.log(error);
    } finally {
      loading = false;
    }
  });
</script>

<div class="detail" class:background={game && game.background} bind:this={divDetail}>
  {#if loading}
    <Loading />
    <!-- content here -->
  {:else if game}
    <!-- content here -->
    <!-- else content here -->
    <!-- svelte-ignore a11y-missing-attribute -->
    <a class="back_btn" on:click={onClick}>
      <span class="material-symbols-outlined" style="color: white; font-size: 20px;"> undo </span>
      <span class="back_btn_title"> Back to home</span>
    </a>

    <img class="game_image" src={game.header_image} alt={'image'} />

    <div class="game_detail">
      <div class="game_detail_name">
        {game.name}
      </div>

      <div>
        {#if game.developers}
          <!-- content here -->
          <div class="info">
            <div class="game_detail_item_title">Developers: &nbsp;</div>
            <div class="game_detail_developer_content">
              {game.developers.join(', ')}
            </div>
          </div>
        {/if}

        {#if game.publishers}
          <!-- content here -->
          <div class="info">
            <div class="game_detail_item_title">Publishers: &nbsp;</div>
            <div class="game_detail_publisher_content">
              {game.developers.join(', ')}
            </div>
          </div>
        {/if}

        {#if game.release_date.date}
          <!-- content here -->
          <div class="info">
            <div class="game_detail_item_title">Released: &nbsp;</div>
            {#if game.release_date.coming_soon}
              <!-- content here -->
              <span class="game_coming_soon">Coming soon</span>
            {:else}
              {game.release_date.date}
              <!-- else content here -->
            {/if}
            <div />
          </div>
        {/if}

        {#if game.short_description}
          <!-- content here -->
          <div class="game_detail_category">{game.short_description}</div>
        {/if}

        {#if game.genres}
          <!-- content here -->
          <div style="margin: 10px 0;">
            <div class="game_detail_item_title">Tags: &nbsp;</div>
            {#each game.genres as genre}
              <TagGame tag={genre.description} />
            {/each}
          </div>
        {/if}

        {#if game.screenshots}
          <!-- content here -->
          <div style="margin: 10px 0;">
            <div class="game_detail_chosen_screenshot">
              <img src={chosenScreenshot.path_full} alt={chosenScreenshot.id} />
            </div>

            <div class="game_detail_screenshot">
              {#each game.screenshots as screenshot}
                <img
                  class:game_detail_match_chosen_screenshot={screenshot.id === chosenScreenshot.id}
                  src={screenshot.path_thumbnail}
                  alt={`${screenshot.id}`}
                  on:click={() => {
                    chosenScreenshot = screenshot;
                  }}
                />
              {/each}
            </div>
          </div>
        {/if}

        <div class="game_detail_buybox">
          <div class="game_detail_buybox_header">
            <span>Buy {game.name}</span>
            <Platforms platforms={game.platforms} />
          </div>

          <div class="game_detail_buybox_price">
            {#if game.release_date.coming_soon && !game.price_overview}
              ???
              <!-- content here -->
            {:else}
              <!-- else content here -->
              {#if (game.is_free && get(game, 'price_overview.discount_percent') != 100) || !game.price_overview}
                <div class="game_detail_free">Free</div>
              {:else}
                <div class="game_detail_price">
                  {#if game.price_overview.discount_percent != 0}
                    <span class="game_detail_price_discount">
                      {game.price_overview.discount_percent}%
                    </span>
                  {/if}

                  <div class="game_detail_price_value">
                    {#if game.price_overview.discount_percent != 0}
                      <div class="game_detail_price_initial">
                        {game.price_overview.initial_formatted}
                      </div>
                    {/if}

                    <div class="game_detail_price_final">
                      {game.price_overview.final_formatted}
                    </div>
                  </div>
                </div>
              {/if}
            {/if}

            <a href={steamLink} target="_blank" class="game_detail_buybox_addtocart">Go to Steam</a>
          </div>
        </div>

        {#if game.detailed_description}
          <!-- content here -->
          <div style="margin-top: 30px;" />
          <hr />
          <div class="game_detail_description">
            {@html game.detailed_description}
          </div>
          <hr />
        {/if}

        {#if !isEmpty(game.support_info) && (game.support_info.url || game.support_info.email)}
          <!-- content here -->
          <div class="game_detail_item_title">Support: &nbsp;</div>
          <div class="game_detail_support_info">
            {#if game.support_info.url}
              <!-- content here -->
              <div class="game_detail_support">
                <span class="material-symbols-outlined game_detail_support_icon"> public </span>
                <a class="game_detail_support_url" target="_blank" href={game.support_info.url}
                  >{game.support_info.url}</a
                >
              </div>
            {/if}

            {#if game.support_info.email}
              <!-- content here -->
              <div class="game_detail_support">
                <span class="material-symbols-outlined game_detail_support_icon"> mail </span>
                <a class="game_detail_support_url" target="_blank" href={`mailto:${game.support_info.email}`}
                  >{game.support_info.email}</a
                >
              </div>
            {/if}
          </div>
        {/if}

        {#if game.legal_notice}
          <!-- content here -->
          <hr />
          <div>{@html game.legal_notice}</div>
        {/if}
      </div>
    </div>
  {:else}
    <!-- else content here -->
    <div>Game not found</div>
  {/if}
</div>

<!-- markup (zero or more items) goes here -->
<style>
  /* your styles go here */
  .game_detail_description :global(img) {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }

  * :global(a) {
    color: #67c1f5;
    text-decoration: none;
  }
</style>
