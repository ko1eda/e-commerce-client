<template>
  <nav class="navbar tw-h-32 tw-border tw-px-32">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
      </a>
      <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
        <span/>
        <span/>
        <span/>
      </div>
    </div>

    <div id="navbarExampleTransparentExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item" href="https://bulma.io/">
          Home
        </a>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            Categories
          </a>
          <div class="navbar-dropdown is-boxed">
            <a class="navbar-item" href="https://bulma.io/documentation/overview/start/">
              Overview
            </a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item"/>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  
}
</script>
