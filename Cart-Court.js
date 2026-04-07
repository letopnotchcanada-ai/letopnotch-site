(function () {
  function getCartCount() {
    try {
      const raw = localStorage.getItem("letopnotch_cart");
      const cart = raw ? JSON.parse(raw) : [];
      if (!Array.isArray(cart)) return 0;
      return cart.reduce((sum, item) => sum + (Number(item.quantity) || 0), 0);
    } catch (error) {
      return 0;
    }
  }
  
  function updateCartCount() {
    const count = getCartCount();
    const labels = document.querySelectorAll("[data-cart-count]");
    labels.forEach((label) => {
      label.textContent = `Cart (${count})`;
    });
  }
  
  document.addEventListener("DOMContentLoaded", updateCartCount);
  window.addEventListener("storage", updateCartCount);
  window.updateCartCountUI = updateCartCount;
})();
