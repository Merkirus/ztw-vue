<template>
    <div>
        <AppLayoutLinks />
        <div class="tableLayout">
            <slot />
        </div>
    </div>
</template>

<script>
import AppLayoutLinks from './AppLayoutLinks.vue'

export default {
    name: "AppLayoutTable",
    components: {
        AppLayoutLinks
    }
}
</script>

<style scoped></style>