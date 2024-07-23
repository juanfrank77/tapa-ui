<script>
    import './styles.css';
    import Sidebar from '$lib/components/Sidebar.svelte';
    import { sidebarOpen } from '$lib/stores/sidebar';

</script>

<div class="app">
  <aside class="sidebar" class:close={$sidebarOpen}>
    <Sidebar />
  </aside>
  <main>
    <slot />
  </main>
</div>

<style>
    .app {
        display: flex
    }

    .sidebar {
        background-color: var(--white);
        transition: transform 0.3s ease-in-out;
    }

    main {
        background-color: #fff;
        padding: 15px;
    }

    .close {
        transform: translateX(-100%);
        display: none;
    }

    /* Hide aside on mobile resolutions */
    @media screen and (max-width: 768px) {
        .app {
            width: 100%;
        }

        .sidebar {
            display: block;
        }

        .close {
            display: none;
        }

    }

</style>