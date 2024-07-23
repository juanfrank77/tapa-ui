<script>
import SearchBar from './SearchBar.svelte';
import NewChatButton from './NewChatButton.svelte';
import ChatList from './ChatList.svelte';
import UserProfile from './UserProfile.svelte';
import logo from '$lib/images/tapa-logo.png'
</script>

<div class="sidebar-content">
  <img src={logo} alt="Tapa logo" class="logo" />
  <SearchBar />
  <NewChatButton />
  <div class="organize-chats">
    <p>Organize your chats</p>
    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/67ad49bf12cdfa3469a3cc19fbee97eecd93dc29db2d66e8a39a3d9e40bd6d11?apiKey=31043973fb624f0ca0d45dbff60ef3e5&" alt="Organize icon" class="icon" />
  </div>
  <ChatList />
  <UserProfile />
</div>


<style>

.sidebar-content {
  background-color: #f8f8f8;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 42px 14px 16px;
}

.logo {
  width: 153px;
  max-width: 100%;
  margin: 0 auto;
  aspect-ratio: 1.59;
  object-fit: contain;
}

.organize-chats {
  display: flex;
  justify-content: center;
  gap: 20px;
  font-size: 18px;
  color: #4ea6fd;
  margin-top: 27px;
}

.icon {
  width: 24px;
  aspect-ratio: 1;
  object-fit: contain;
  align-self: auto;
}

</style>
