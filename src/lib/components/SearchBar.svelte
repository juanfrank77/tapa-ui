<form class="search-form">
  <label for="searchInput" class="visually-hidden">Search your chats</label>
  <input type="text" id="searchInput" placeholder="Search your chats" class="search-input" />
  <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/86a07b7d9033036d975c21f68df9e9413097977a3a01e80edb7bf848e7341499?apiKey=31043973fb624f0ca0d45dbff60ef3e5&" alt="Search icon" class="search-icon" />
</form>

<style>
.search-form {
  display: flex;
  align-items: center;
  border: 1px solid #656565;
  border-radius: 12px;
  background-color: #fff;
  padding: 16px 24px;
  margin-top: 31px;
  max-width: 452px;
}

.search-input {
  flex: 1;
  border: none;
  background: transparent;
  font-family: Inter, sans-serif;
  font-size: 16px;
  color: #656565;
  line-height: 28px;
}

.search-icon {
  width: 24px;
  aspect-ratio: 1;
  object-fit: contain;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>
