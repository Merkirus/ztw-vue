<template>
    <div>
        <AppLayoutLinks />
        <div class="formLayout">
            <slot />
        </div>
    </div>
</template>

<script>
import AppLayoutLinks from './AppLayoutLinks.vue'

export default {
    name: "AppLayoutForm",
    components: {
        AppLayoutLinks
    }
}
</script>

<style scoped></style>