<template>
    <header class="header">
        <div class="logo">
            <router-link to="/">UX TEAM APP</router-link>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>

<style>
    .header {
        background-color: var(--primary);
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
    }
    .logo a {
        color: var(--white);
        font-size: 18px;
        text-decoration: none;
    }
</style>