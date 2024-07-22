<script>
    import './styles.css';
    import Header from '$lib/sections/Header.svelte';
    import Sidebar from '$lib/components/Sidebar.svelte';

    let isNavOpen = false;
    let isNavCollapsed = false;

</script>

<div class="app">
    <aside class="sidebar">
        <Sidebar />
    </aside>
    <main>
        <Header />  
        <slot />
    </main>
</div>

<style>
    .app {
        display: grid;
        grid-template-columns: 28% 72%;
        grid-template-rows: 100vh;
        grid-gap: 10px;
    }

    aside {
        grid-column: 1;
        background-color: var(--white);
        width: 100%;
    }

    main {
        grid-column: 2;
        background-color: #fff;
        padding: 15px;
    }

    /* Hide aside on mobile resolutions */
    @media screen and (max-width: 768px) {
        .app {
            display: block;
        }
        aside {
            display: none;
        }
    }

</style>