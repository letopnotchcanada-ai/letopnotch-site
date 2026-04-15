// clarity.js - Microsoft Clarity tracking with session persistence fix
(function() {
  'use strict';
  
  console.log("🔵 Clarity script starting...");
  
  // Configuration - tells Clarity to save recordings properly
  window.clarityConfig = {
    projectId: "wbqbtjde93",
    upload: "https://m.clarity.ms/collect",
    track: true,
    content: true,
    cookies: ["_clck", "_clsk"]
  };
  
  // Load Clarity tracking code
  (function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);
    t.async=1;
    t.src="https://www.clarity.ms/tag/"+i;
    
    // Error handling
    t.onerror = function() {
      console.error("❌ Clarity failed to load - possible ad blocker");
    };
    
    // Success handler
    t.onload = function() {
      console.log("✅ Clarity loaded successfully");
      
      // Force start session immediately
      if (window.clarity) {
        try {
          clarity("start");
          console.log("✅ Clarity session started");
        } catch(e) {
          console.error("❌ Clarity start error:", e);
        }
      }
    };
    
    y=l.getElementsByTagName(r)[0];
    y.parentNode.insertBefore(t,y);
  })(window, document, "clarity", "script", "wbqbtjde93");
  
  // Session tracking variables
  let sessionStartTime = Date.now();
  let hasEngaged = false;
  let pageViewTracked = false;
  
  // Track page view - critical for recordings
  function trackPageView() {
    if (window.clarity && !pageViewTracked) {
      try {
        clarity("set", "page", window.location.pathname);
        clarity("set", "url", window.location.href);
        pageViewTracked = true;
        console.log("📊 Clarity page tracked:", window.location.pathname);
      } catch(e) {
        console.error("❌ Page tracking error:", e);
      }
    }
  }
  
  // Track engagement - Clarity requires 3+ seconds for recording to save
  function recordEngagement() {
    if (!hasEngaged && window.clarity) {
      const sessionLength = (Date.now() - sessionStartTime) / 1000;
      
      // Only record if session is long enough
      if (sessionLength > 3) {
        try {
          clarity("set", "engaged", "true");
          clarity("set", "session_duration", Math.floor(sessionLength));
          hasEngaged = true;
          console.log("✅ Engagement recorded: " + sessionLength.toFixed(1) + "s");
        } catch(e) {
          console.error("❌ Engagement tracking error:", e);
        }
      }
    }
  }
  
  // Initialize when DOM is ready
  function init() {
    trackPageView();
    
    // Track engagement on any user interaction
    const events = ["click", "scroll", "mousemove", "touchstart", "keydown"];
    events.forEach(function(eventName) {
      document.addEventListener(eventName, recordEngagement, { 
        once: true, 
        passive: true 
      });
    });
    
    console.log("✅ Clarity engagement listeners attached");
  }
  
  // Start when ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  
  // CRITICAL: Ensure data upload before page closes
  window.addEventListener("beforeunload", function() {
    if (window.clarity && hasEngaged) {
      try {
        clarity("stop");
        console.log("📤 Clarity session stopped - uploading data");
      } catch(e) {
        console.error("❌ Stop error:", e);
      }
    }
  });
  
  // Track visibility changes (user switches tabs)
  document.addEventListener("visibilitychange", function() {
    if (document.hidden && window.clarity && hasEngaged) {
      try {
        // Force upload when user leaves tab
        clarity("set", "tab_hidden", "true");
      } catch(e) {
        console.error("❌ Visibility error:", e);
      }
    }
  });
  
})();
