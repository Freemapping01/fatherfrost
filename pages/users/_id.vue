<template>
    <h1>Пользователь {{ id }}</h1>
</template>

<script>
export default {
    
    computed: {
        id () {
            return this.$route.params.id
        }
    }
}
</script>