<script>
  import pic from '$lib/images/sparkler.png';
  // boolean variable to determine if there are messages yet or not
  let firstMessage = true;

  let newMessage = "";

  let messages = [
    { text: " ", sender: "ai" },
  ]

  function sendMessage() {
    if (newMessage.trim()) {
      firstMessage = false;
      messages = [ { text: newMessage, sender: "user" }];
      newMessage = "";
      // create a timeout of 2 seconds and then add a message from bot to the messages array
      setTimeout(() => {
        messages = [...messages, { text: "Artificial Intelligence (AI) is a branch of computer science that aims to create machines capable of performing tasks that typically require human intelligence. These tasks include learning from experience, understanding natural language, recognizing patterns, solving problems, and making decisions. AI systems work by simulating human intelligence through the use of algorithms, data, and computational power, enabling them to perform tasks without explicit programming and to improve their performance over time.", sender: "ai" }];
      }, 2000);
    }
  }

</script>

<select class="model-selector">
  <option value="Llama-3-70B-Instruct">Llama-3-70B-Instruct</option>
  <option value="Llama-3.1-70B-Instruct">Llama-3.1-70B-Instruct</option>
  <option value="Mixtral-8x7B-Instruct">Mixtral-8x7B-Instruct</option>
  <option value="Yi-1.5-34B-Chat">Yi-1.5-34B-Chat</option>
  <option value="Phi-3-small-8k-Instruct">Phi-3-small-8k-Instruct</option>
  <option value="Dbrx-Instruct">Dbrx-Instruct</option>
  <option value="Falcon-2-11b">Falcon-2-11b</option>
</select>
<div class="chat-messages">
{#if firstMessage}
  <div class="first-message">
    <h1>Welcome to TAPA!</h1>
    <p>
      Get started by selecting your preferred model from the drop down menu
      above and sending a prompt. You can also use your mic, upload an
      image/file, or choose one of the many prompts available.
    </p>
  </div>
{:else}
  <div class="messages-block">
    {#each messages as message}
      {#if message.sender === "user"}
        <div class="message {message.sender}">
          <div class="user-avatar">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/36518dfe05fa98af2c11b5f6a7618a08868d8435a80bc35daf35073028b3505c?apiKey=31043973fb624f0ca0d45dbff60ef3e5&" alt="User avatar" />
          </div>
          <p class="message-content">{message.text}</p>
        </div>
        {:else}
        <div class="message {message.sender}">
          <div class="ai-avatar">
            <img src={pic} alt="AI avatar" />
          </div>
          <p class="message-content">{message.text}</p>
        </div>
      {/if}
    {/each}
  </div>
{/if}
</div>

<div class="chat-input">
  <div class="input-actions">
    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b3f44ae4ca5c2616b5fbc09317b72dfd79aeb9d76181e33cd4df6025f420c8e?apiKey=31043973fb624f0ca0d45dbff60ef3e5&" alt="Attach file" class="action-icon" />
    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/892fe69ccf194bd5212f0d600318780b9a9d55a3a6735e4e95b142e52ff33a32?apiKey=31043973fb624f0ca0d45dbff60ef3e5&" alt="Format text" class="action-icon" />
    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/73147fce953d2e3a89e26a88ccc1dde87de5a4cc9eab41d42b64119761ca1dc2?apiKey=31043973fb624f0ca0d45dbff60ef3e5&" alt="More options" class="action-icon" />
  </div>
  <form on:submit|preventDefault={sendMessage} class="input-form">
    <input
      bind:value={newMessage}
      placeholder="Type your message..."
      autocomplete="off"
      class="input-field"
    />
    <button type="submit" class="submit-btn">
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e0f544e95ba713516530319d248c7a1c80779e1c883fd1f5c91f38587eb53b1?apiKey=31043973fb624f0ca0d45dbff60ef3e5&" alt="Send message" class="send-icon" />
    </button>
  </form>
</div>

<style>
.chat-messages {
  display: flex;
  flex-direction: column;
  margin-top: 59px;
  padding: 0 28px;
}

.model-selector {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px;
  border: 2px solid #656565;
  border-radius: 12px;
  background-color: #fcfcfc;
  font-family: Inter, sans-serif;
  font-size: 16px;
  color: #282828;
  line-height: 150%;
  width: fit-content;
  margin: 0 auto 29px;
}

.first-message {
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 51px 74px rgba(74, 99, 117, 0.07), 0 11.392px 16.529px rgba(74, 99, 117, 0.04), 0 3.392px 4.921px rgba(74, 99, 117, 0.03);
  border-radius: 8px;
  border: 1px solid var(--primary-400);
  margin: 0 auto;
  padding: 1.5rem 1rem;
  max-width: 45%;
}

.model-icon {
  width: 24px;
  aspect-ratio: 1;
  object-fit: contain;
}

.message {
  display: flex;
  gap: 16px;
  margin-bottom: 15px;
}

.user {
  align-items: center;
}

.ai {
  align-items: baseline;
}

.user-avatar, .ai-avatar {
  width: 38px;
  height: 38px;
  border-radius: 19px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(199, 183, 183, 0.25);
  box-shadow: 0 51px 74px rgba(74, 99, 117, 0.07), 0 11.392px 16.529px rgba(74, 99, 117, 0.04), 0 3.392px 4.921px rgba(74, 99, 117, 0.03);
}

.message-content {
  padding: 15px;
  border-radius: 14px;
  border: 1px solid #ccc;
  font-family: Inter, sans-serif;
  font-size: 16px;
  line-height: 28px;
  color: #282828;
  box-shadow: 0 51px 74px rgba(74, 99, 117, 0.07), 0 11.392px 16.529px rgba(74, 99, 117, 0.04), 0 3.392px 4.921px rgba(74, 99, 117, 0.03);
}

.ai-message .message-content {
  background-color: #fff;
}

.chat-input {
  display: flex;
  margin-top: 100px;
  width: 100%;
}

.input-actions {
  display: flex;
  gap: 14px;
  padding: 10px 15px;
}

.action-icon, .send-icon {
  width: 24px;
  aspect-ratio: 1;
  object-fit: contain;
}

.input-form {
  display: flex;
  width: 100%;
  padding: 8px 16px;
  border: 1px solid #d9d9d9;
  border-radius: 200px;
  background-color: #fff;
}

.input-field {
  width: 100%;
  border: none;
  outline: none;
  font-size: 16px;
  line-height: 28px;
  color: #282828;
}

.submit-btn {
  border: none;
  background-color: transparent;
  cursor: pointer;
}

@media (max-width: 768px) {
  .chat-input {
    max-width: 100%;
    flex-wrap: wrap;
    margin-top: 0;
  }
  
  .input-wrapper {
    max-width: 100%;
    padding: 8px 20px;
  }
}

@media (max-width: 768px) {
  .chat-messages {
    max-width: 100%;
    padding: 0 20px;
  }
  
  .model-selector {
    max-width: 100%;
    padding: 16px 20px;
  }
  
  .message-content {
    max-width: 100%;
  }
}
</style>
