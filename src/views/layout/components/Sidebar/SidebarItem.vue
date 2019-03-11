<template>
	<div class="menu-warpper">
		<template v-for="item in routes" v-if="!item.hidden&&item.children">
			<router-link v-if="item.children.length===1 && !item.children[0].children && !item.alwaysShow" :to="item.path + '/' + item.children[0].path" :key="item.children[0].name">
				<el-menu-item :index="item.path+'/'+item.children[0].path" :class="{'submenu-title-noDropdown':!isNest}">
					<svg-icon v-if="item.children[0].meta&&item.children[0].meta.icon" :icon-class="item.children[0].meta.icon"></svg-icon>
					<span v-if="item.children[0].meta&&item.children[0].meta.title">{{item.children[0].meta.title}}</span>
				</el-menu-item>
			</router-link>
		</template>
	</div>
</template>

<script>
export default {
  name: 'SidebarItem',
  props: {
    routes: {
      type: Array
    },
    isNest: {
      type: Boolean,
      default: false
    }
  },
  created() {
    console.log(this.routes)
  }
}
</script>

<style scoped>
.nest-menu a{
  text-indent: 25px;
}
</style>
