<script>
import Sidebar from './Sidebar.svelte';
import ChatArea from './ChatArea.svelte';
</script>

<main class="chat-interface">
  <Sidebar />
  <ChatArea />
</main>

<style>
.chat-interface {
  display: flex;
  gap: 20px;
}

@media (max-width: 991px) {
  .chat-interface {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }
}
</style>
