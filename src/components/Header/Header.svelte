<script>
  // your script goes here
  const steamLogo = 'images/logo/steam-32.png';
  const githubLogo = 'images/logo/github-512.png';
  const title = 'Steam Tracking';
</script>

<!-- markup (zero or more items) goes here -->
<div id="header">
  <div id="header_left">
    <img src={steamLogo} alt="logo" />
    <div id="title">{title}</div>
  </div>

  <div id="header_right">
    <img src={githubLogo} width="32px" alt="logo" href="" />
  </div>
</div>

<style>
  /* your styles go here */

  #header {
    height: 50px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5em;
  }

  #header_left {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #header_right {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #title {
    font-size: 1.5em;
    color: white;
    margin-left: 5px;
  }
</style>
