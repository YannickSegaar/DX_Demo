// YRS: Updated Styled iFrame Extension for better customization of iFrame (20 March 2025):

export const CustomizedIframeExtension = {
    name: 'CustomizedIframe',
    type: 'response',
    match: ({ trace }) =>
      trace.type === 'ext_customizedIframe' || trace.payload?.name === 'ext_customizedIframe',
    render: ({ trace, element }) => {
      // Extract properties from the payload with expanded styling options
      const { 
        iframeUrl, 
        height = '600',
        padding = '15px',
        delay = 0,
        backgroundColor = '#ffffff',
        maxWidth = '1200px',
        // Border options
        borderWidth = '2px',
        borderColor = '#587C74',
        borderStyle = 'solid',
        borderRadius = '12px',
        // Shadow and glow effects
        shadowColor = 'rgba(88, 124, 116, 0.3)',
        shadowSize = '10px',
        glow = false,
        glowColor = 'rgba(88, 124, 116, 0.6)',
        glowSize = '15px',
        // Animation
        animateIn = true,
        // Additional styling
        headerBar = false,
        headerText = '',
        headerBgColor = '#587C74',
        headerTextColor = '#ffffff'
      } = trace.payload;
  
      // First, we need to modify the parent element to be full width
      element.style.width = '100%';
      element.style.maxWidth = '100%';
      element.style.margin = '0';
      element.style.padding = '0';
      element.style.display = 'flex';
      element.style.justifyContent = 'center';
      element.style.backgroundColor = 'transparent';
      element.style.border = 'none';
      
      // Create a container for the iframe
      const container = document.createElement('div');
      
      // Style the container to be centered with max-width
      container.style.width = 'calc(100% - ' + padding + ' * 2)';
      container.style.maxWidth = maxWidth;
      container.style.margin = '0 auto';
      container.style.padding = padding;
      container.style.boxSizing = 'border-box';
      
      // Create the main wrapper for styling
      const wrapper = document.createElement('div');
      
      // Apply border styling
      wrapper.style.border = `${borderWidth} ${borderStyle} ${borderColor}`;
      wrapper.style.borderRadius = borderRadius;
      wrapper.style.overflow = 'hidden'; // Ensures content respects border radius
      wrapper.style.backgroundColor = backgroundColor;
      
      // Apply shadow effect
      if (shadowSize !== '0') {
        wrapper.style.boxShadow = `0 4px ${shadowSize} ${shadowColor}`;
      }
      
      // Apply glow effect if enabled
      if (glow) {
        wrapper.style.boxShadow = `0 0 ${glowSize} ${glowColor}`;
      }
      
      // Optional header bar
      if (headerBar) {
        const header = document.createElement('div');
        header.style.backgroundColor = headerBgColor;
        header.style.color = headerTextColor;
        header.style.padding = '10px 15px';
        header.style.fontWeight = 'bold';
        header.style.borderBottom = `1px solid ${borderColor}`;
        header.textContent = headerText;
        wrapper.appendChild(header);
      }
      
      // Create the iframe element
      const iframeEl = document.createElement('iframe');
      
      // Set attributes and styling for the iframe
      iframeEl.style.width = '100%';
      iframeEl.style.height = height + 'px';
      iframeEl.style.border = 'none';
      iframeEl.style.display = 'block';
      
      // Essential attributes
      iframeEl.setAttribute('frameborder', '0');
      iframeEl.setAttribute('marginheight', '0');
      iframeEl.setAttribute('marginwidth', '0');
      iframeEl.setAttribute('allowfullscreen', 'true');
      
      // Set the source URL
      iframeEl.src = iframeUrl;
      
      // Add animation if enabled
      if (animateIn) {
        wrapper.style.opacity = '0';
        wrapper.style.transform = 'translateY(20px)';
        wrapper.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      }
      
      // Add the iframe to the wrapper
      wrapper.appendChild(iframeEl);
      
      // Add the wrapper to the container
      container.appendChild(wrapper);
      
      // Find the chat dialog element
      let chatDialog = element;
      while (chatDialog && !chatDialog.classList.contains('vfrc-chat--dialog')) {
        chatDialog = chatDialog.parentElement;
      }
      
      // If we found the chat dialog, we'll insert our container there directly
      if (chatDialog) {
        // Optionally, use a delay before inserting
        if (delay > 0) {
          setTimeout(() => {
            chatDialog.appendChild(container);
            if (animateIn) {
              setTimeout(() => {
                wrapper.style.opacity = '1';
                wrapper.style.transform = 'translateY(0)';
              }, 100);
            }
          }, delay * 1000);
        } else {
          chatDialog.appendChild(container);
          if (animateIn) {
            setTimeout(() => {
              wrapper.style.opacity = '1';
              wrapper.style.transform = 'translateY(0)';
            }, 100);
          }
        }
        
        // Remove the original element that would have contained the response
        if (element.parentElement) {
          element.parentElement.removeChild(element);
        }
      } else {
        // Fallback if we can't find the chat dialog
        element.appendChild(container);
        if (animateIn) {
          setTimeout(() => {
            wrapper.style.opacity = '1';
            wrapper.style.transform = 'translateY(0)';
          }, 100);
        }
      }
    },
  };


//   YRS: Customized iFrame Extension - VERSION 2 (20 March 2025)

// EPICX Purple-Themed CustomizedIframe Extension (March 2025):

export const CustomizedIframeExtension2 = {
    name: 'CustomizedIframe',
    type: 'response',
    match: ({ trace }) =>
      trace.type === 'ext_customizedIframe2' || trace.payload?.name === 'ext_customizedIframe2',
    render: ({ trace, element }) => {
      // Extract properties from the payload with EPICX purple styling
      const { 
        iframeUrl, 
        height = '600',
        padding = '15px',
        delay = 0,
        backgroundColor = '#ffffff',
        maxWidth = '1200px',
        // Border options - EPICX purple colors
        borderWidth = '2px',
        borderColor = '#A061F7',
        borderStyle = 'solid',
        borderRadius = '12px',
        // Shadow and glow effects - EPICX purple theme
        shadowColor = 'rgba(160, 97, 247, 0.3)',
        shadowSize = '10px',
        glow = false,
        glowColor = 'rgba(75, 25, 62, 0.6)',
        glowSize = '15px',
        // Animation
        animateIn = true,
        // Additional styling - EPICX header gradient
        headerBar = false,
        headerText = '',
        headerBgColor = 'linear-gradient(90deg, #4b193e 0%, #291d3f 50%, #18233E 100%)',
        headerTextColor = '#ffffff'
      } = trace.payload;
  
      // First, we need to modify the parent element to be full width
      element.style.width = '100%';
      element.style.maxWidth = '100%';
      element.style.margin = '0';
      element.style.padding = '0';
      element.style.display = 'flex';
      element.style.justifyContent = 'center';
      element.style.backgroundColor = 'transparent';
      element.style.border = 'none';
      
      // Create a container for the iframe
      const container = document.createElement('div');
      
      // Style the container to be centered with max-width
      container.style.width = 'calc(100% - ' + padding + ' * 2)';
      container.style.maxWidth = maxWidth;
      container.style.margin = '0 auto';
      container.style.padding = padding;
      container.style.boxSizing = 'border-box';
      
      // Create the main wrapper for styling
      const wrapper = document.createElement('div');
      
      // Apply border styling with EPICX purple
      wrapper.style.border = `${borderWidth} ${borderStyle} ${borderColor}`;
      wrapper.style.borderRadius = borderRadius;
      wrapper.style.overflow = 'hidden'; // Ensures content respects border radius
      wrapper.style.backgroundColor = backgroundColor;
      
      // Apply shadow effect with EPICX purple
      if (shadowSize !== '0') {
        wrapper.style.boxShadow = `0 4px ${shadowSize} ${shadowColor}`;
      }
      
      // Apply glow effect if enabled with EPICX purple
      if (glow) {
        wrapper.style.boxShadow = `0 0 ${glowSize} ${glowColor}`;
      }
      
      // Optional header bar with EPICX purple gradient
      if (headerBar) {
        const header = document.createElement('div');
        
        // Check if headerBgColor is a gradient or solid color
        if (headerBgColor.includes('gradient')) {
          header.style.background = headerBgColor;
        } else {
          header.style.backgroundColor = headerBgColor;
        }
        
        header.style.color = headerTextColor;
        header.style.padding = '10px 15px';
        header.style.fontWeight = 'bold';
        header.style.borderBottom = `1px solid ${borderColor}`;
        header.style.fontFamily = "'Nunito Sans', sans-serif";
        header.textContent = headerText;
        wrapper.appendChild(header);
      }
      
      // Create the iframe element
      const iframeEl = document.createElement('iframe');
      
      // Set attributes and styling for the iframe
      iframeEl.style.width = '100%';
      iframeEl.style.height = height + 'px';
      iframeEl.style.border = 'none';
      iframeEl.style.display = 'block';
      
      // Essential attributes
      iframeEl.setAttribute('frameborder', '0');
      iframeEl.setAttribute('marginheight', '0');
      iframeEl.setAttribute('marginwidth', '0');
      iframeEl.setAttribute('allowfullscreen', 'true');
      
      // Set the source URL
      iframeEl.src = iframeUrl;
      
      // Add animation if enabled
      if (animateIn) {
        wrapper.style.opacity = '0';
        wrapper.style.transform = 'translateY(20px)';
        wrapper.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      }
      
      // Add the iframe to the wrapper
      wrapper.appendChild(iframeEl);
      
      // Add the wrapper to the container
      container.appendChild(wrapper);
      
      // Find the chat dialog element
      let chatDialog = element;
      while (chatDialog && !chatDialog.classList.contains('vfrc-chat--dialog')) {
        chatDialog = chatDialog.parentElement;
      }
      
      // If we found the chat dialog, we'll insert our container there directly
      if (chatDialog) {
        // Optionally, use a delay before inserting
        if (delay > 0) {
          setTimeout(() => {
            chatDialog.appendChild(container);
            if (animateIn) {
              setTimeout(() => {
                wrapper.style.opacity = '1';
                wrapper.style.transform = 'translateY(0)';
              }, 100);
            }
          }, delay * 1000);
        } else {
          chatDialog.appendChild(container);
          if (animateIn) {
            setTimeout(() => {
              wrapper.style.opacity = '1';
              wrapper.style.transform = 'translateY(0)';
            }, 100);
          }
        }
        
        // Remove the original element that would have contained the response
        if (element.parentElement) {
          element.parentElement.removeChild(element);
        }
      } else {
        // Fallback if we can't find the chat dialog
        element.appendChild(container);
        if (animateIn) {
          setTimeout(() => {
            wrapper.style.opacity = '1';
            wrapper.style.transform = 'translateY(0)';
          }, 100);
        }
      }
    },
};