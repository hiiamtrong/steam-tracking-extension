<script lang="ts">
  // your script goes here
  export let tag: string;
</script>

<div class="tag">{tag}</div>

<!-- markup (zero or more items) goes here -->
<style>
  /* your styles go here */
  .tag {
    display: inline-block;
    padding: 5px;
    margin: 5px 5px 5px 0;
    border-radius: 5px;
    background: rgb(148 190 226 / 20%);
    color: #67c1f5;
    font-size: 10px;
  }
</style>
