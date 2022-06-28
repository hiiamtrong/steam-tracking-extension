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
    <a href="https://github.com/hiiamtrong/steam-tracking-extension" target="_blank">
      <img src={githubLogo} width="32px" alt="logo" /></a
    >
  </div>
</div>

<style>
  /* your styles go here */

  #header {
    height: 50px;

    background-color: #2a3f4d;
    opacity: 0.9;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1em;
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
