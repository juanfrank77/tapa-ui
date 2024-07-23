<script>
  import Collapse from "$lib/icons/Collapse.svelte";
  import { sidebarOpen } from "$lib/stores/sidebar";

  function toggleSidebar() {
    $sidebarOpen = !$sidebarOpen;
  }

</script>

<header>
  <button class="toggle" on:click={toggleSidebar}>
    <Collapse />  
  </button>

  <div class="settings-group">
  <button class="header-btn">
    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/151ee6bfedc1649513b176bd3b34c07a9daa65c63cebf79b6f544e3312405458?apiKey=31043973fb624f0ca0d45dbff60ef3e5&" alt="Minimize" class="header-icon" />
  </button>
  <button class="header-btn">
    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/20689e5ddec04daf1af2f385fba7b99a22ff374adf8e1c8503e308c46d37d3d8?apiKey=31043973fb624f0ca0d45dbff60ef3e5&" alt="Maximize" class="header-icon" />
  </button>
  </div>
</header>

<style>
  header {
    display: flex;
    justify-content: space-between;
  }

  .toggle {
    display: block;
    border: none;
    padding: 0.3rem;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.2);
    box-shadow: 4px 12px 32.8px rgba(77, 97, 143, 0.2);
    cursor: pointer;
  }

  .settings-group {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    padding: 10px;
    width: fit-content;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.2);
    box-shadow: 4px 12px 32.8px rgba(77, 97, 143, 0.2);
  }

  .header-btn {
    border: none;
    background-color: transparent;
    height: 36px;
    padding: 8px;
    cursor: pointer;
  }

  .header-icon {
    width: 24px;
    aspect-ratio: 1;
    object-fit: contain;
  }
</style>