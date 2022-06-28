<script lang="ts">
  const platformIcons = {
    windows: 'images/logo/windows.png',
    mac: 'images/logo/mac.png',
    linux: 'images/logo/linux.png',
  };
  // your script goes here
  export let platforms: any;
</script>

<!-- markup (zero or more items) goes here -->
<div>
  {#each Object.entries(platforms).filter((item) => {
    return item[1] === true;
  }) as platform}
    <img src={platformIcons[platform[0]]} width="12px" alt={platform[0]} />
  {/each}
</div>

<style>
  /* your styles go here */

  img {
    padding-right: 3px;
  }
</style>
