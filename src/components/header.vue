<template>
    <!-- navbar-1.vue -->
    <b-navbar toggleable="md" type="dark" variant="primary">
    
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    
        <b-navbar-brand href="#">
            Lohnt sich das?
            <font-awesome-icon icon="home" />
        </b-navbar-brand>
    
        <b-collapse is-nav id="nav_collapse">
    
            <b-navbar-nav>
                <b-nav-item href="#">Rechner</b-nav-item>
    
            </b-navbar-nav>
    
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
    
                <b-nav-item href="#">AGBs</b-nav-item>
                <b-nav-item href="#">Impressum</b-nav-item>
                <b-nav-item href="#">Datenschutz</b-nav-item>
    
            </b-navbar-nav>
    
        </b-collapse>
    </b-navbar>
</template>

<style>
    
</style>
