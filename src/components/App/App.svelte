<script lang="ts">
  import { currentRoute } from '../../../store/routing.store';
  import Detail from '../Detail/Detail.svelte';
  import Layout from '../Layout/Layout.svelte';

  let currentRouteValue;

  currentRoute.subscribe((route) => {
    currentRouteValue = route;
  });
</script>

<div role="main" class="root">
  {#if currentRouteValue === '/'}
    <!-- content here -->
    <Layout />
  {:else}
    <Detail />
    <!-- else content here -->
  {/if}
</div>

<style>
  .root {
    position: relative;
    height: 600px;
    width: 350px;
    display: flex;
    flex-direction: column;
    background: rgb(42, 71, 94);
    background: linear-gradient(90deg, rgba(42, 71, 94, 1) 0%, rgba(27, 40, 56, 1) 90%);
  }
</style>
