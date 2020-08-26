<template>
  <ul class="sidenav app-sidenav" :class="{'open':value}">
    <router-link
        v-for="link in links"
        :key="link.to.name"
        tag="li"
        active-class="active"
        :to="link.to"
        :exact="link.exact"
    >
      <a href="#" class="waves-effect waves-orange pointer">{{ link.title }}</a>
    </router-link>
  </ul>
</template>

<script>
export default {
  name: "Sidebar",
  props:['value'],
  data: () => ({
    links: [
      {title: 'Счет', url: '', to: {name: 'home'}, exact: true},
      {title: 'История', url: '', to: {name: 'history'}},
      {title: 'Планирование', url: '', to: {name: 'planning'}},
      {title: 'Новая запись', url: '', to: {name: 'record'}},
      {title: 'Категории', url: '', to: {name: 'categories'}}
    ]
  })
}
</script>

<style scoped>

</style>