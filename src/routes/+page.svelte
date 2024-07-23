<script>
  import { PUBLIC_APP_NAME } from '$env/static/public';
  import ChatArea from '$lib/components/ChatArea.svelte';
  import Header from '$lib/sections/Header.svelte';
</script>

<svelte:head>
	<title>{PUBLIC_APP_NAME}</title>
</svelte:head>

<Header />
<ChatArea />