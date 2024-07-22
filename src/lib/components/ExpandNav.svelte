<script>
    import Collapse from "$lib/icons/Collapse.svelte";
    let isCollapsed;
</script>

<button on:click class="group">
    <Collapse />
</button>

<style>
button {
    display: flex;
    flex-direction: column; 
    justify-content: center; 
    align-items: center;
    border: none;
    padding: 10px;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.2);
    box-shadow: 4px 12px 32.8px rgba(77, 97, 143, 0.2);
    cursor: pointer;
}
</style>