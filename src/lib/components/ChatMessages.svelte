<div class="chat-messages">
  <div class="model-selector">
    <span class="model-name">Llama-3-70B-Instruct</span>
    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c6e69703a86beac58218d8f5dde87feb4abefebc3450023d491acc2be4a72c8e?apiKey=31043973fb624f0ca0d45dbff60ef3e5&" alt="Model options" class="model-icon" />
  </div>
  
  <div class="message user-message">
    <div class="user-avatar">
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/36518dfe05fa98af2c11b5f6a7618a08868d8435a80bc35daf35073028b3505c?apiKey=31043973fb624f0ca0d45dbff60ef3e5&" alt="User avatar" />
    </div>
    <p class="message-content">What is artificial intelligence?</p>
  </div>
  
  <div class="message ai-message">
    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2a521b7b8b9b6dc7171678391473550c9e0453680c9da99a6469d4d241cca7d?apiKey=31043973fb624f0ca0d45dbff60ef3e5&" alt="AI avatar" class="ai-avatar" />
    <p class="message-content">Artificial Intelligence (AI) is a branch of computer science that aims to create machines capable of performing tasks that typically require human intelligence. These tasks include learning from experience, understanding natural language, recognizing patterns, solving problems, and making decisions. AI systems work by simulating human intelligence through the use of algorithms, data, and computational power, enabling them to perform tasks without explicit programming and to improve their performance over time.</p>
  </div>
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
  padding: 16px 24px;
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

.user-message {
  align-items: center;
}

.ai-message {
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

@media (max-width: 991px) {
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
