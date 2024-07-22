<script>
import ChatMessages from './ChatMessages.svelte';
import ChatInput from './ChatInput.svelte';
import ChatFooter from './ChatFooter.svelte';
</script>

<section class="chat-area">
  <ChatMessages />
  <ChatInput />
  <ChatFooter />
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
