<template>
  <tap-section class="main-header" centered>
    <a class="header-link" href="/">
      <img src="../img/logo_fullwidth.svg" alt="Logo">
    </a>
  </tap-section>
</template>

<style scoped>
  @import "@vars";

  .main-header {
    background-color: var(--header-background);
    height: 60px;
    font-size: 4rem;
    color: #fff;

    & .header-link {
      display: flex;

      & img {
        height: 40px;
      }
    }
  }
</style>

<script>
import Icon from '../components/Icon.vue'
import TapSection from '../components/TapSection.vue'

export default {
  components: {
    Icon,
    TapSection
  }
}
</script>
