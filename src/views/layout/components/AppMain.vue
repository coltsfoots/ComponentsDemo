<template>
	<section class="app-main" style="min-height: calc(100vh - 84px);">
		<transition name="fade" mode="out-in">
			<keep-alive :include="cachedViews">
				<router-view class="app-container" id="app-container"></router-view>
			</keep-alive>
		</transition>
	</section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    cachedViews() {
      return this.$store.state.tagsView.cachedViews
    }
  }
}
</script>

<style lang="scss">

</style>
