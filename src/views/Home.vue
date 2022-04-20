<template>
    <div class="body">
        <div class="container">
            <CardLayout title="UTMS TOOL" link-config="/utms-config" link-view="/utms-view">
                
                <template v-slot:body>
                    <ul>
                        <li>Clean utms from trello</li>
                        <li>Manage utms by day</li>
                        <li>Get utms information</li>
                    </ul>
                </template>

            </CardLayout>

        </div>

    </div>    
</template>

<script>
    import CardLayout from '@/views/CardLayout.vue'

    export default {
        name: 'Home',
        components: {
            CardLayout
        }
    }

</script>

<style>
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: center;
        margin: 20px;
        gap: 20px;
    }
</style>