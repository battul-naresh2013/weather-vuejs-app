<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="success">
      <b-navbar-brand>
        <router-link to="/">Weather Forecast</router-link>
      </b-navbar-brand>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'app-header',
};
</script>

<style scoped>
.navbar-brand a,
.nav-item a {
  color: #ffffff;
  text-decoration: none;
  font-weight: 600;
}
</style>
