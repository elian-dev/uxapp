<template>
    <div class="card">
        
        <div class="card-header">
            <h2>{{ title }}</h2>
        </div>

        <div class="card-body">
             <slot name="body"></slot>
        </div>

        <div class="card-footer">
            <button class="btn btn-tertiary"><router-link :to="linkConfig" >config</router-link></button>
            <button class="btn btn-primary"><router-link :to="linkView" >view</router-link></button>
        </div>
        
    </div>
</template>

<script>
    export default {
        name: 'CardLayout',
        props: {
            title: {
                type: String,
                default: 'Card'
            },
            linkConfig: {
                type: String,
                default: '/'
            },
            linkView: {
                type: String,
                default: '/'
            },
            active: {
                type: Boolean,
                default: true
            }
        }
    }
</script>

<style>
    .card {
        min-width: 300px;
        background-color: var(--color-background-card);
        border-radius: 5px;
        padding: 20px;
        margin-bottom: 20px;
        height: 180px;
        position: relative;
        box-shadow: 0 0 20px 4px var(--color-box-shadow);
    }
    .card-footer {
        position: absolute;
        bottom: 0px;
        right: 0px;
    }
</style>