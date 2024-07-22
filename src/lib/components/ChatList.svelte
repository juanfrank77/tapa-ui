<script>
  import ChatItem from './ChatItem.svelte';
</script><ul class="chat-list">

<ChatItem></ChatItem>
  <li class="chat-item active">
    <span class="chat-icon">🤖</span>
    <span class="chat-title">(Example) What is AI</span>
    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/434ab8e0e0e7300661ba42f9b8ddc089cc54cd4696df4eb4785933b409eaf822?apiKey=31043973fb624f0ca0d45dbff60ef3e5&" alt="Edit" class="action-icon" />
    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ed0efe55c20d450acfe52604e32656ebce9c4fc2131fdeab8704352cec31ab2?apiKey=31043973fb624f0ca0d45dbff60ef3e5&" alt="Delete" class="action-icon" />
  </li>
</ul>

<style>
.chat-list {
  list-style-type: none;
  padding: 0;
  margin: 15px 0 0;
  width: 100%;
}

.chat-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 6px 10px;
  border-radius: 8px;
  color: #000;
  font-weight: 400;
  margin-bottom: 15px;
}

.chat-item.active {
  background-color: var(--secondary-200);
  box-shadow: 4px 12px 32.8px rgba(77, 97, 143, 0.2);
  border-radius: 10px;
}

.chat-icon {
  font-size: 18px;
  line-height: 167%;
}

.chat-title {
  flex: 1;
  font-size: 16px;
  line-height: 150%;
}

.action-icon {
  width: 24px;
  aspect-ratio: 1;
  object-fit: contain;
}
</style>
