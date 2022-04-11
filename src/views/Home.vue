<template>
    <div class="body">
        <div class="container">
            <Card title="UTMS TOOL">
                <ul>
                    <li>Clean utms from trello</li>
                    <li>Manage utms by day</li>
                    <li>Get utms information</li>
                </ul>
            </Card>

            <Card title="MENU TOOL">
                <ul>
                    <li>Manage the main menu</li>
                    <li>Automatization deploys</li>
                </ul>
            </Card>
            
            <Card title="TEMPLATES TOOL">
                <ul>
                    <li>Manage the templates</li>
                    <li>Automatization deploys</li>
                </ul>
            </Card>

            <Card title="AGREGAR OTRA" active="false"></Card>

        </div>

    </div>    
</template>

<script>
    import Card from '@/views/Card.vue'
    export default {
        name: 'Home',
        components: {
            Card
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