<script>
// Function to hide Wapkiz Download Now ads based on attributes and position
function hideGeneratedElements() {
  // Hide all fixed elements at the bottom of the page
  document.querySelectorAll('div').forEach((div) => {
    // Check if the div is positioned fixed and located at the bottom of the page
    const style = window.getComputedStyle(div);
    if (
      style.position === 'fixed' &&
      style.bottom === '0px' &&
      style.zIndex === '2147483647'
    ) {
      div.style.display = 'none !important';
    }
  });

  // Hide all iframes with specific attributes
  document.querySelectorAll('iframe').forEach((iframe) => {
    if (iframe.src.includes('cank.xyz') || iframe.id.startsWith('qCb')) {
      iframe.style.display = 'none !important';
    }
  });

  // Hide buttons that match specific styles
  document.querySelectorAll('button').forEach((button) => {
    if (button.innerText.trim().toLowerCase() === 'download now') {
      button.style.display = 'none !important';
    }
  });
}

// Execute the function to hide the elements
hideGeneratedElements();
</script>
  
