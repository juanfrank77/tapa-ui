<script>
import ChatMessages from './ChatMessages.svelte';
import ChatFooter from './ChatFooter.svelte';
import ChatWidget from './ChatWidget.svelte';
</script>

<section class="chat-area">
  <ChatMessages />
  <ChatFooter />
  <ChatWidget />
</section>

<style>
.chat-area {
  width: 100%;
}

@media (max-width: 991px) {
  .chat-area {
    width: 100%;
    margin-left: 0;
  }
}
</style>
