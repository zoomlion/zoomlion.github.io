// Hugo Blog JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Add smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Optional: Add copy button to code blocks
  const codeBlocks = document.querySelectorAll('.post-content pre');
  codeBlocks.forEach(block => {
    const button = document.createElement('button');
    button.className = 'copy-button';
    button.textContent = 'Copy';
    button.style.cssText = 'position: absolute; top: 5px; right: 5px; padding: 4px 8px; font-size: 12px; cursor: pointer;';
    
    button.addEventListener('click', async function() {
      const code = block.querySelector('code');
      if (code) {
        await navigator.clipboard.writeText(code.textContent);
        button.textContent = 'Copied!';
        setTimeout(() => {
          button.textContent = 'Copy';
        }, 2000);
      }
    });
    
    block.style.position = 'relative';
    block.appendChild(button);
  });
});
