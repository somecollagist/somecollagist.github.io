<template>
  <header id="navbar" :key="$route.path">
    <ul>
      <li id="navbar-home">
        <router-link to="/">
          somecollagist
        </router-link>
      </li>
      <div style="float:right">
        <li id="navbar-aboutme">
          <router-link to="/about">
            About me
          </router-link>
        </li>
        <li id="navbar-blog">
          <router-link to="/blog">
            Blog
          </router-link>
        </li>
        <li id="navbar-projects">
          <router-link to="/projects">
            Projects
          </router-link>
        </li>
        <li id="navbar-resume">
          <router-link to="/resume">
            Resumé
          </router-link>
        </li>
      </div>
    </ul>
  </header>
</template>

<style lang="scss">
  $navbar_height: 1rem;
  #navbar {
    margin: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
    height: fit-content;

    * {
      animation: fadeInDown 0.5s;
    }

    ul {
      width: 100%;
      list-style: none;
      display: table;
      margin: 0 auto;
      padding: 0;

      li {
        float: left;
        margin: 0.5rem 1rem;
      }
    }

    a:visited {
      color: var(--accent);
    }
  }
</style>