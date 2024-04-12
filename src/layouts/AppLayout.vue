<template>
    <component :is=$route.meta.layout>
        <slot />
    </component>
</template>

<script>
export default {
    name: "AppLayout"
}
</script>