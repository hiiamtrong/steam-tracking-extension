<script>
  // your script goes here
</script>

<div class="sliding-tiles" />

<!-- markup (zero or more items) goes here -->
<style>
  /* your styles go here */
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  /**
  * Spinning dots - scaled
  *
  * @author jh3y - https://github.com/jh3y
*/
  @-webkit-keyframes sliding-tile {
    0% {
      -webkit-transform: translate(-50%, -50%) translate(-50%, -50%);
      transform: translate(-50%, -50%) translate(-50%, -50%);
    }
    25% {
      -webkit-transform: translate(-50%, -50%) translate(50%, -50%);
      transform: translate(-50%, -50%) translate(50%, -50%);
    }
    50% {
      -webkit-transform: translate(-50%, -50%) translate(50%, 50%);
      transform: translate(-50%, -50%) translate(50%, 50%);
    }
    75% {
      -webkit-transform: translate(-50%, -50%) translate(-50%, 50%);
      transform: translate(-50%, -50%) translate(-50%, 50%);
    }
    100% {
      -webkit-transform: translate(-50%, -50%) translate(-50%, -50%);
      transform: translate(-50%, -50%) translate(-50%, -50%);
    }
  }
  @keyframes sliding-tile {
    0% {
      -webkit-transform: translate(-50%, -50%) translate(-50%, -50%);
      transform: translate(-50%, -50%) translate(-50%, -50%);
    }
    25% {
      -webkit-transform: translate(-50%, -50%) translate(50%, -50%);
      transform: translate(-50%, -50%) translate(50%, -50%);
    }
    50% {
      -webkit-transform: translate(-50%, -50%) translate(50%, 50%);
      transform: translate(-50%, -50%) translate(50%, 50%);
    }
    75% {
      -webkit-transform: translate(-50%, -50%) translate(-50%, 50%);
      transform: translate(-50%, -50%) translate(-50%, 50%);
    }
    100% {
      -webkit-transform: translate(-50%, -50%) translate(-50%, -50%);
      transform: translate(-50%, -50%) translate(-50%, -50%);
    }
  }

  .sliding-tiles:after,
  .sliding-tiles:before {
    -webkit-animation: sliding-tile 1.25s infinite linear;
    animation: sliding-tile 1.25s infinite linear;
    background-color: white;
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    height: 10px;
    width: 10px;
  }

  .sliding-tiles:after {
    -webkit-animation: sliding-tile 1.25s -0.625s infinite linear;
    animation: sliding-tile 1.25s -0.625s infinite linear;
  }
</style>
