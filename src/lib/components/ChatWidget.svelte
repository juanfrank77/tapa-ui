<script>
    import mascot from '$lib/images/Tapa-mascot3.png';

    let isOpen = false;
    let messages = [
      { text: "Hello! I'm TAPA. Let's explore the world of AI together ", sender: "bot" },
      { text: "Hi! ", sender: "user" },
    ];
    let newMessage = "";
  
    function toggleChat() {
      isOpen = !isOpen;
    }
  
    function sendMessage() {
      if (newMessage.trim()) {
        messages = [...messages, { text: newMessage, sender: "user" }];
        newMessage = "";
      }
    }
  </script>
  
  <div class="chat-widget">
    {#if isOpen}
      <div class="chat-container">
        <div class="chat-header">
          <div class="user-info">
            <span class="avatar">
              <img alt="TAPA" src={mascot} />
            </span>
            <div>
              <p class="username">TAPA</p>
              <p class="status">Available</p>
            </div>
          </div>
          <div class="header-actions">
            <button on:click={toggleChat} class="action-button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"></path>
              </svg>
              <span class="sr-only">Minimize</span>
            </button>
            <button on:click={toggleChat} class="action-button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
              <span class="sr-only">Close</span>
            </button>
          </div>
        </div>
        <div class="chat-messages">
          {#each messages as message}
            <div class="message {message.sender}">
              <p>{message.text}</p>
            </div>
          {/each}
        </div>
        <div class="chat-input">
          <form on:submit|preventDefault={sendMessage} class="input-form">
            <input
              bind:value={newMessage}
              placeholder="Type your message..."
              autocomplete="off"
            />
            <button type="submit">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m22 2-7 20-4-9-9-4Z"></path>
                <path d="M22 2 11 13"></path>
              </svg>
              <span class="sr-only">Send</span>
            </button>
          </form>
        </div>
      </div>
    {:else}
      <button on:click={toggleChat} class="chat-toggle">Open TAPA</button>
    {/if}
  </div>
  
  <style>
    .chat-widget {
      position: fixed;
      bottom: 1rem;
      right: 1rem;
      z-index: 50;
    }
  
    .chat-container {
      width: 350px;
      background-color: #fff;
      border-radius: 0.5rem;
      border: 1px solid #e2e8f0;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    }
  
    .chat-header {
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding: 0.75rem 1rem;
      border-bottom: 1px solid #e2e8f0;
    }
  
    .user-info {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }
  
    .avatar {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 9999px;
      overflow: hidden;
    }
  
    .avatar img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  
    .username {
      font-size: 1.125rem;
      font-weight: 500;
      margin-bottom: 0.2rem;
    }
  
    .status {
      font-size: 0.75rem;
      color: var(--primary);
      margin-top: 0;
    }
  
    .header-actions {
      display: flex;
      gap: 0.5rem;
    }
  
    .action-button {
      background: none;
      border: none;
      cursor: pointer;
      padding: 0.5rem;
      border-radius: 9999px;
      transition: background-color 0.2s;
    }
  
    .action-button:hover {
      background-color: #f1f5f9;
    }
  
    .action-button svg {
      width: 1rem;
      height: 1rem;
    }
  
    .chat-messages {
      height: 400px;
      overflow-y: auto;
      padding: 1rem;
    }
  
    .message {
      max-width: 75%;
      padding: 0.5rem 0.75rem;
      border-radius: 0.5rem;
      margin-bottom: 1rem;
      margin-top: 0;
    }
  
    .message.bot {
      background-color: #f1f5f9;
      align-self: flex-start;
    }
  
    .message.user {
      background-color: var(--secondary);
      color: var(--white);
      align-self: flex-end;
      margin-left: auto;
    }
  
    .chat-input {
      border-top: 1px solid #e2e8f0;
      padding: 0.75rem 1rem;
    }
  
    .input-form {
      display: flex;
      gap: 0.5rem;
    }
  
    .input-form input {
      flex: 1;
      padding: 0.5rem 0.75rem;
      border: 1px solid #e2e8f0;
      border-radius: 0.375rem;
      font-size: 0.875rem;
    }
  
    .input-form button {
      background-color: var(--secondary);
      color: var(--white);
      border: none;
      border-radius: 0.375rem;
      padding: 0.5rem;
      cursor: pointer;
      transition: background-color 0.2s;
    }
  
    .input-form button:hover {
      background-color: #2563eb;
    }
  
    .input-form button svg {
      width: 1rem;
      height: 1rem;
    }
  
    .chat-toggle {
      background-color: var(--secondary);
      color: var(--white);
      border: none;
      border-radius: 0.375rem;
      padding: 0.5rem 1rem;
      cursor: pointer;
      transition: background-color 0.2s;
    }
  
    .chat-toggle:hover {
      background-color: #2563eb;
    }
  </style>