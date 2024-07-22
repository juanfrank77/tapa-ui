<script>
  import ExpandNav from '$lib/components/ExpandNav.svelte';
  import ChatHeader from '$lib/components/ChatHeader.svelte';
</script>

<header>
  <ExpandNav />
  <ChatHeader />
</header>

<style>
  header {
    display: flex;
    justify-content: space-between;
  }

</style>