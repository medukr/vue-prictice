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


    <li>
      <a href="#" class="waves-effect waves-orange pointer">Счет</a>
    </li>
    <li>
      <a href="#" class="waves-effect waves-orange pointer">История</a>
    </li>
    <li>
      <a href="#" class="waves-effect waves-orange pointer">Планирование</a>
    </li>
    <li>
      <a href="#" class="waves-effect waves-orange pointer">Новая запись</a>
    </li>
    <li>
      <a href="#" class="waves-effect waves-orange pointer">Категории</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Sidebar",
  props:['value'],
  data: () => ({
    links: [
      {title: 'Счет', url: '', to: {name: 'Home'}, exact: true},
      {title: 'История', url: '', to: {name: 'History'}},
      {title: 'Планирование', url: '', to: {name: 'Planning'}},
      {title: 'Новая запись', url: '', to: {name: 'Record'}},
      {title: 'Категории', url: '', to: {name: 'Categories'}}
    ]
  })
}
</script>

<style scoped>

</style>