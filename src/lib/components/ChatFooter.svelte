<footer class="chat-footer">
  <p class="disclaimer">Content generated may be inaccurate about people, places, or facts.</p>
  <div class="footer-links">
    <a href="#" class="footer-link">Terms</a>
    <a href="#" class="footer-link">Privacy</a>
  </div>
</footer>

<style>
.chat-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
  width: 100%;
  font-size: 12px;
  color: #5f7df6;
  text-align: center;
  line-height: 24px;
}

.disclaimer {
  font-family: Inter, sans-serif;
  padding: 0 60px;
}

.footer-links {
  display: flex;
  gap: 20px;
  padding: 0 20px;
}

.footer-link {
  font-family: Inter, sans-serif;
  color: inherit;
  text-decoration: none;
}

@media (max-width: 991px) {
  .chat-footer {
    flex-direction: column;
    align-items: center;
  }
  
  .disclaimer {
    max-width: 100%;
    padding: 0 20px;
    margin-bottom: 10px;
  }
}
</style>
