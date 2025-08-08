<template>
  <div id="oh-no-face">
    :(
  </div>

  <div id="not-found-container">
    <h1>404</h1>
    
    <h2 class="monospace">stay_calm!()</h2>
    <h3>You still know where your towel is... right?</h3>
    <h4><router-link to="/">Back to the origins...</router-link></h4>
  </div>
</template>

<style lang="scss">
  #oh-no-face {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;

		opacity: 10%;
		font-size: 40em;
		font-weight: bolder;
	}

  div#not-found-container {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;

    h1 {
      font-weight: bold;
      font-size: 5rem;
    }
  }
</style>