<div class="chat-input">
  <div class="input-actions">
    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b3f44ae4ca5c2616b5fbc09317b72dfd79aeb9d76181e33cd4df6025f420c8e?apiKey=31043973fb624f0ca0d45dbff60ef3e5&" alt="Attach file" class="action-icon" />
    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/892fe69ccf194bd5212f0d600318780b9a9d55a3a6735e4e95b142e52ff33a32?apiKey=31043973fb624f0ca0d45dbff60ef3e5&" alt="Format text" class="action-icon" />
    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/73147fce953d2e3a89e26a88ccc1dde87de5a4cc9eab41d42b64119761ca1dc2?apiKey=31043973fb624f0ca0d45dbff60ef3e5&" alt="More options" class="action-icon" />
  </div>
  <div class="input-wrapper">
    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e0f544e95ba713516530319d248c7a1c80779e1c883fd1f5c91f38587eb53b1?apiKey=31043973fb624f0ca0d45dbff60ef3e5&" alt="Send message" class="send-icon" />
  </div>
</div>

<style>
.chat-input {
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
  width: 100%;
}

.input-actions {
  display: flex;
  gap: 14px;
  padding: 0px 15px;
}

.action-icon, .send-icon {
  width: 24px;
  aspect-ratio: 1;
  object-fit: contain;
}

.input-wrapper {
  display: flex;
  flex: 1;
  justify-content: flex-end;
  padding: 8px 16px;
  border: 1px solid #d9d9d9;
  border-radius: 200px;
  background-color: #fff;
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
</style>
