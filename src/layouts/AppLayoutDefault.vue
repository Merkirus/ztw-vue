<template>
    <AppLayoutLinks />
    <div>
    <slot />
    </div>
</template>

<script>
import AppLayoutLinks from './AppLayoutLinks.vue'

export default {
    name: "AppLayoutDefault",
    components: {
    AppLayoutLinks
}
}
</script>

<style scoped></style>