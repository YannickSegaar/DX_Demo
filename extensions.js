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


// YRS: BOOKING PROCESS EXTENSION - VERSION 1 (20 March 2025)

// EPICX Booking Extension - Full Implementation
export const EPICXBookingExtension = {
    name: 'EPICXBooking',
    type: 'response',
    match: ({ trace }) =>
      trace.type === 'ext_epicxBooking' || trace.payload?.name === 'ext_epicxBooking',
    render: ({ trace, element }) => {
      // Extract properties from the payload with default values
      const { 
        title = 'EPICX Boekingsassistent',
        step1Title = 'Kies een Locatie',
        step1Description = 'Selecteer een van onze EPICX locaties om te beginnen.',
        step2Title = 'Kies een Activiteit',
        step2Description = 'Selecteer de activiteit die je wilt doen.',
        step3Title = 'Bevestig je Boeking',
        step3Description = 'Je hebt gekozen voor',
        cancelLabel = 'Annuleren',
        backLabel = 'Terug',
        nextLabel = 'Volgende',
        completeLabel = 'Voltooien',
        height = '600',
        borderColor = '#A061F7',
        padding = '0',
        delay = 0,
        maxWidth = '460px',
      } = trace.payload || {};
  
      // Location data
      const locations = [
        {
          id: 'zoetermeer',
          name: 'EPICX Zoetermeer',
          address: 'Saloméschouw 154, 2726 JX Zoetermeer',
          phone: '079-2073001'
        },
        {
          id: 'denhaag',
          name: 'EPICX Den Haag',
          address: 'Groene zoom 9, 2491 EJ Den Haag',
          phone: '070-2092025'
        }
      ];
  
      // Activity data for Zoetermeer
      const zoetermeerActivities = [
        {
          id: 'puppy-party',
          name: 'Puppy Party',
          description: 'Speciaal voor kinderen van 3 t/m 6 jaar. Tijdens de Puppy Jump is alleen de Jump Arena geopend en exclusief voor de allerkleinsten.',
          price: '€ 11,99 p.p voor 90 min',
          image: 'https://epicx.eu/wp-content/uploads/2024/10/900.24562_Puppy_Party.png',
          bookingUrl: 'https://epicxzoetermeer.dewi-online.nl/iframe/club/74/reservations/direct/activity/220'
        },
        {
          id: 'adventure-city',
          name: 'Adventure City',
          description: 'Ervaar Active Pixel, Laser Game, Jump Arena, en Ninja Tag in ons uitgebreide avonturenpark.',
          price: 'Vanaf € 11,99',
          image: 'https://epicx.eu/wp-content/uploads/2024/06/sfeerimpressie_03-1-1020x1024.png',
          bookingUrl: 'https://epicxzoetermeer.dewi-online.nl/iframe/club/74/reservations/direct/category/615'
        },
        {
          id: 'happy-hour',
          name: 'Happy Hour',
          description: 'Geniet van speciale kortingen tijdens onze Happy Hours! Een geweldige kans om meer plezier te hebben voor minder geld.',
          price: 'Speciale tarieven',
          image: 'https://epicx.eu/wp-content/uploads/2024/10/900.24562_Happy_Hour.png',
          bookingUrl: 'https://epicxzoetermeer.dewi-online.nl/iframe/club/74/reservations/direct/category/615'
        },
        {
          id: 'family-friday',
          name: 'Family Friday',
          description: 'Vrijdagavond is familie-avond! Kom samen met het hele gezin en geniet van onze speciale gezinsarrangementen.',
          price: 'Speciale gezinstarieven',
          image: 'https://epicx.eu/wp-content/uploads/2024/09/900.24562_Family_Friday.png',
          bookingUrl: 'https://epicxzoetermeer.dewi-online.nl/iframe/club/74/reservations/direct/category/615'
        }
      ];
  
      // Activity data for Den Haag
      const denhaagActivities = [
        {
          id: 'adventure-city',
          name: 'Adventure City',
          description: 'Ervaar Active Pixel, Laser Game en Mega Bounce in ons uitgebreide avonturenpark.',
          price: 'Vanaf € 11,99',
          image: 'https://epicx.eu/wp-content/uploads/2024/06/sfeerimpressie_03-1-1020x1024.png',
          bookingUrl: 'https://mtdh.dewi-online.nl/iframe/club/152/reservations/direct/category/1044'
        },
        {
          id: 'kidsplay',
          name: 'Kidsplay',
          description: 'Fun House en Peuterzone speciaal voor de jongere kinderen. Veilig spelen en plezier maken!',
          price: 'Vanaf € 9,99',
          image: 'https://epicx.eu/wp-content/uploads/2024/06/Sfeerimpressie_01-8-1021x1024.jpg',
          bookingUrl: 'https://mtdh.dewi-online.nl/iframe/club/152/reservations/direct/category/1044'
        },
        {
          id: 'clay-cafe',
          name: 'Clay Café Lab',
          description: 'Creatieve activiteiten met pottenbakken en verven. Laat je creativiteit de vrije loop!',
          price: 'Vanaf € 12,99',
          image: 'https://epicx.eu/wp-content/uploads/2023/11/Sfeerimpressie_01-1-1021x1024.jpg',
          bookingUrl: 'https://mtdh.dewi-online.nl/iframe/club/152/reservations'
        }
      ];
  
      // Clear element first
      element.innerHTML = '';
  
      // Create a container for the extension
      const container = document.createElement('div');
      container.style.width = '100%';
      container.style.display = 'flex';
      container.style.justifyContent = 'center';
      container.style.alignItems = 'center';
      container.style.maxWidth = '100%';
      container.style.margin = '0';
      container.style.padding = padding;
      container.style.boxSizing = 'border-box';
  
      // Create the main wrapper
      const wrapper = document.createElement('div');
      wrapper.className = 'epicx-booking-extension';
      wrapper.dataset.extensionId = 'epicx-booking';
  
      // Apply styling and initial states
      wrapper.style.width = '100%';
      wrapper.style.maxWidth = maxWidth;
      wrapper.style.height = `${height}px`;
      wrapper.style.backgroundColor = 'white';
      wrapper.style.borderRadius = '10px';
      wrapper.style.overflow = 'hidden';
      wrapper.style.position = 'relative';
      wrapper.style.border = `2px solid ${borderColor}`;
      wrapper.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
      wrapper.style.display = 'flex';
      wrapper.style.flexDirection = 'column';
      wrapper.style.fontFamily = "'Nunito Sans', sans-serif";
      wrapper.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      wrapper.style.opacity = '0';
      wrapper.style.transform = 'translateY(20px)';
  
      // Create booking state object to track user selections
      const bookingState = {
        currentStep: 1,
        selectedLocation: null,
        selectedLocationName: null,
        selectedActivity: null,
        selectedActivityName: null,
        selectedActivityUrl: null,
        carouselPositions: {
          zoetermeer: 0,
          denhaag: 0
        }
      };
  
      // Construct the HTML content
      wrapper.innerHTML = `
        <style>
          /* Base styles for extension */
          .epicx-booking-extension * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Nunito Sans', sans-serif;
          }
          
          /* Header */
          .extension-header {
            background: linear-gradient(90deg, #4b193e 0%, #291d3f 50%, #18233E 100%);
            color: white;
            padding: 16px;
            text-align: center;
            font-weight: 600;
            font-size: 18px;
          }
          
          /* Content area */
          .extension-content {
            flex: 1;
            overflow-y: auto;
            padding: 20px;
            position: relative;
          }
          
          /* Progress indicator */
          .progress-container {
            display: flex;
            justify-content: center;
            margin-bottom: 20px;
          }
          
          .progress-steps {
            display: flex;
            align-items: center;
          }
          
          .step-indicator {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background-color: #e0e0e0;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #555;
            font-weight: 600;
            font-size: 14px;
            position: relative;
          }
          
          .step-indicator.active {
            background-color: #A061F7;
            color: white;
          }
          
          .step-indicator.completed {
            background-color: #A061F7;
            color: white;
          }
          
          .step-connector {
            width: 40px;
            height: 2px;
            background-color: #e0e0e0;
          }
          
          .step-connector.active {
            background-color: #A061F7;
          }
          
          /* Step content */
          .step-content {
            display: none;
          }
          
          .step-content.active {
            display: block;
            animation: fadeIn 0.3s ease-out;
          }
          
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          .step-title {
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 10px;
            color: #18233E;
          }
          
          .step-description {
            margin-bottom: 20px;
            color: #666;
          }
          
          /* Location cards */
          .location-cards {
            display: flex;
            flex-direction: column;
            gap: 15px;
            margin-bottom: 20px;
          }
          
          .location-card {
            border: 2px solid #A061F7;
            border-radius: 10px;
            overflow: hidden;
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
          }
          
          .location-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          }
          
          .location-card.selected {
            border-color: #E61462;
            background-color: rgba(160, 97, 247, 0.05);
          }
          
          .location-card-header {
            background: linear-gradient(90deg, #4b193e 0%, #291d3f 50%, #18233E 100%);
            color: white;
            padding: 12px;
            font-weight: 600;
            font-size: 18px;
          }
          
          .location-card-content {
            padding: 15px;
          }
          
          .location-card-address {
            color: #555;
            font-size: 14px;
            margin-bottom: 5px;
          }
          
          .location-card-phone {
            color: #555;
            font-size: 14px;
          }
          
          .location-check {
            position: absolute;
            top: 15px;
            right: 15px;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            background-color: #E61462;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.3s ease;
          }
          
          .location-card.selected .location-check {
            opacity: 1;
          }
          
          /* Activity carousel */
          .activity-carousel {
            position: relative;
            margin: 0 -20px;
            padding: 0 20px;
          }
          
          .carousel-container {
            overflow: hidden;
            position: relative;
            margin: 0 auto;
          }
          
          .carousel-track {
            display: flex;
            transition: transform 0.5s ease-in-out;
          }
          
          .activity-card {
            flex: 0 0 100%;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            overflow: hidden;
            background-color: white;
            margin-right: 15px;
            border: 2px solid #A061F7;
            height: 350px;
            display: flex;
            flex-direction: column;
          }
          
          .activity-card-image {
            height: 160px;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
          }
          
          .activity-card-content {
            padding: 15px;
            flex: 1;
            display: flex;
            flex-direction: column;
          }
          
          .activity-card-title {
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 10px;
            color: #18233E;
          }
          
          .activity-card-description {
            color: #666;
            font-size: 14px;
            margin-bottom: 15px;
            flex: 1;
          }
          
          .activity-card-price {
            color: #A061F7;
            font-weight: 600;
            margin-bottom: 10px;
          }
          
          .book-btn {
            background: linear-gradient(90deg, #4b193e 0%, #291d3f 50%, #18233E 100%);
            color: white;
            border: none;
            border-radius: 5px;
            padding: 10px 15px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            width: 100%;
          }
          
          .book-btn:hover {
            background: linear-gradient(90deg, #5c1f4d 0%, #35264d 50%, #25304c 100%);
            transform: translateY(-2px);
          }
          
          .carousel-controls {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 15px;
            gap: 10px;
          }
          
          .carousel-dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color: #ddd;
            cursor: pointer;
            transition: all 0.3s ease;
          }
          
          .carousel-dot.active {
            background-color: #A061F7;
            transform: scale(1.2);
          }
          
          .carousel-btn {
            background-color: #A061F7;
            color: white;
            border: none;
            border-radius: 50%;
            width: 36px;
            height: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.3s ease;
          }
          
          .carousel-btn:hover {
            background-color: #18233E;
            transform: scale(1.1);
          }
          
          .carousel-btn:disabled {
            background-color: #ddd;
            cursor: not-allowed;
            opacity: 0.5;
          }
          
          .carousel-btn-icon {
            width: 20px;
            height: 20px;
          }
          
          /* iframe container */
          .iframe-container {
            margin-top: 20px;
            border-radius: 10px;
            overflow: hidden;
            border: 2px solid #A061F7;
            height: 400px;
            background-color: #f8f9fa;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #666;
            position: relative;
          }
          
          .iframe-container iframe {
            width: 100%;
            height: 100%;
            border: none;
          }
          
          /* Buttons */
          .nav-buttons {
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
          }
          
          .btn {
            background-color: #A061F7;
            color: white;
            border: none;
            border-radius: 5px;
            padding: 10px 20px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
          }
          
          .btn:hover {
            background-color: #18233E;
          }
          
          .btn-secondary {
            background-color: #e0e0e0;
            color: #333;
          }
          
          .btn-secondary:hover {
            background-color: #d0d0d0;
          }
          
          .btn:disabled {
            background-color: #ddd;
            cursor: not-allowed;
            opacity: 0.5;
          }
          
          /* Loading spinner */
          .loading-spinner {
            width: 40px;
            height: 40px;
            border: 4px solid rgba(160, 97, 247, 0.2);
            border-radius: 50%;
            border-top: 4px solid #A061F7;
            animation: spin 1s linear infinite;
          }
          
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        </style>
        
        <div class="extension-header">
          ${title}
        </div>
        
        <div class="extension-content">
          <!-- Progress Indicator -->
          <div class="progress-container">
            <div class="progress-steps">
              <div class="step-indicator active" id="step-indicator-1">1</div>
              <div class="step-connector" id="connector-1-2"></div>
              <div class="step-indicator" id="step-indicator-2">2</div>
              <div class="step-connector" id="connector-2-3"></div>
              <div class="step-indicator" id="step-indicator-3">3</div>
            </div>
          </div>
          
          <!-- Step 1: Location Selection -->
          <div class="step-content active" id="step-1">
            <div class="step-title">${step1Title}</div>
            <div class="step-description">${step1Description}</div>
            
            <div class="location-cards">
              ${locations.map(location => `
                <div class="location-card" data-location="${location.id}" data-location-name="${location.name}">
                  <div class="location-card-header">${location.name}</div>
                  <div class="location-card-content">
                    <div class="location-card-address">${location.address}</div>
                    <div class="location-card-phone">${location.phone}</div>
                  </div>
                  <div class="location-check">✓</div>
                </div>
              `).join('')}
            </div>
            
            <div class="nav-buttons">
              <button class="btn btn-secondary" id="cancel-btn">${cancelLabel}</button>
              <button class="btn" id="next-from-locations" disabled>${nextLabel}</button>
            </div>
          </div>
          
          <!-- Step 2: Activity Selection -->
          <div class="step-content" id="step-2">
            <div class="step-title">${step2Title}</div>
            <div class="step-description">${step2Description}</div>
            
            <!-- Zoetermeer Activities Carousel -->
            <div class="activity-carousel" id="zoetermeer-activities" style="display: none;">
              <div class="carousel-container">
                <div class="carousel-track" id="zoetermeer-carousel-track">
                  ${zoetermeerActivities.map(activity => `
                    <div class="activity-card" data-activity="${activity.id}" data-activity-name="${activity.name}" data-activity-url="${activity.bookingUrl}">
                      <div class="activity-card-image" style="background-image: url('${activity.image}');"></div>
                      <div class="activity-card-content">
                        <div class="activity-card-title">${activity.name}</div>
                        <div class="activity-card-description">${activity.description}</div>
                        <div class="activity-card-price">${activity.price}</div>
                        <button class="book-btn" data-activity="${activity.id}" data-activity-name="${activity.name}" data-activity-url="${activity.bookingUrl}">Boek ${activity.name}</button>
                      </div>
                    </div>
                  `).join('')}
                </div>
              </div>
              
              <div class="carousel-controls">
                <button class="carousel-btn" id="zoetermeer-prev" disabled>
                  <svg class="carousel-btn-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
                ${zoetermeerActivities.map((_, index) => `
                  <div class="carousel-dot ${index === 0 ? 'active' : ''}" data-location="zoetermeer" data-index="${index}"></div>
                `).join('')}
                <button class="carousel-btn" id="zoetermeer-next">
                  <svg class="carousel-btn-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
            
            <!-- Den Haag Activities Carousel -->
            <div class="activity-carousel" id="denhaag-activities" style="display: none;">
              <div class="carousel-container">
                <div class="carousel-track" id="denhaag-carousel-track">
                  ${denhaagActivities.map(activity => `
                    <div class="activity-card" data-activity="${activity.id}" data-activity-name="${activity.name}" data-activity-url="${activity.bookingUrl}">
                      <div class="activity-card-image" style="background-image: url('${activity.image}');"></div>
                      <div class="activity-card-content">
                        <div class="activity-card-title">${activity.name}</div>
                        <div class="activity-card-description">${activity.description}</div>
                        <div class="activity-card-price">${activity.price}</div>
                        <button class="book-btn" data-activity="${activity.id}" data-activity-name="${activity.name}" data-activity-url="${activity.bookingUrl}">Boek ${activity.name}</button>
                      </div>
                    </div>
                  `).join('')}
                </div>
              </div>
              
              <div class="carousel-controls">
                <button class="carousel-btn" id="denhaag-prev" disabled>
                  <svg class="carousel-btn-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
                ${denhaagActivities.map((_, index) => `
                  <div class="carousel-dot ${index === 0 ? 'active' : ''}" data-location="denhaag" data-index="${index}"></div>
                `).join('')}
                <button class="carousel-btn" id="denhaag-next">
                  <svg class="carousel-btn-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
            
            <div class="nav-buttons">
              <button class="btn btn-secondary" id="back-to-locations-btn">${backLabel}</button>
              <button class="btn" id="next-from-activities" disabled>${nextLabel}</button>
            </div>
          </div>
          
          <!-- Step 3: Booking Confirmation -->
          <div class="step-content" id="step-3">
            <div class="step-title">${step3Title}</div>
            <div class="step-description">${step3Description} <span id="selected-activity-display">activiteit</span> bij <span id="selected-location-display">locatie</span>.</div>
            
            <div class="iframe-container" id="booking-iframe-container">
              <div id="iframe-placeholder" style="text-align: center; padding: 20px;">
                <div class="loading-spinner" style="margin: 0 auto 20px;"></div>
                <p>De boekingsmodule wordt geladen...</p>
              </div>
              <!-- iframe will be inserted here -->
            </div>
            
            <div class="nav-buttons">
              <button class="btn btn-secondary" id="back-to-activities-btn">${backLabel}</button>
              <button class="btn" id="complete-btn">${completeLabel}</button>
            </div>
          </div>
        </div>
      `;
  
      // Add the wrapper to the container
      container.appendChild(wrapper);
      element.appendChild(container);
  
      // Make the extension visible with animation
      setTimeout(() => {
        wrapper.style.opacity = '1';
        wrapper.style.transform = 'translateY(0)';
      }, 100);
  
      // Setup event listeners
      function setupEventListeners() {
        // Location selection
        const locationCards = wrapper.querySelectorAll('.location-card');
        const nextFromLocationsBtn = wrapper.querySelector('#next-from-locations');
        const cancelBtn = wrapper.querySelector('#cancel-btn');
        const nextFromActivitiesBtn = wrapper.querySelector('#next-from-activities');
        const backToLocationsBtn = wrapper.querySelector('#back-to-locations-btn');
        const backToActivitiesBtn = wrapper.querySelector('#back-to-activities-btn');
        const completeBtn = wrapper.querySelector('#complete-btn');
  
        // Add click event to location cards
        locationCards.forEach(card => {
          card.addEventListener('click', () => {
            // Remove selected class from all cards
            locationCards.forEach(c => c.classList.remove('selected'));
            
            // Add selected class to clicked card
            card.classList.add('selected');
            
            // Update booking state
            bookingState.selectedLocation = card.dataset.location;
            bookingState.selectedLocationName = card.dataset.locationName;
            
            // Enable next button
            if (nextFromLocationsBtn) {
              nextFromLocationsBtn.disabled = false;
            }
          });
        });
  
        // Next button from location selection
        if (nextFromLocationsBtn) {
          nextFromLocationsBtn.addEventListener('click', () => {
            if (bookingState.selectedLocation) {
              goToStep(2);
            }
          });
        }
  
        // Cancel button
        if (cancelBtn) {
          cancelBtn.addEventListener('click', () => {
            cancelBooking();
          });
        }
  
        // Back to locations button
        if (backToLocationsBtn) {
          backToLocationsBtn.addEventListener('click', () => {
            goToStep(1);
          });
        }
  
        // Back to activities button
        if (backToActivitiesBtn) {
          backToActivitiesBtn.addEventListener('click', () => {
            goToStep(2);
          });
        }
  
        // Next button from activities
        if (nextFromActivitiesBtn) {
          nextFromActivitiesBtn.addEventListener('click', () => {
            if (bookingState.selectedActivity) {
              goToStep(3);
            }
          });
        }
  
        // Complete button
        if (completeBtn) {
          completeBtn.addEventListener('click', () => {
            completeBooking();
          });
        }
  
        // Setup carousel navigation
        setupCarousels();
      }
  
      // Setup carousels
      function setupCarousels() {
        // Zoetermeer carousel controls
        const zoetermeerPrevBtn = wrapper.querySelector('#zoetermeer-prev');
        const zoetermeerNextBtn = wrapper.querySelector('#zoetermeer-next');
        const zoetermeerDots = wrapper.querySelectorAll('#zoetermeer-activities .carousel-dot');
        
        // Den Haag carousel controls
        const denhaagPrevBtn = wrapper.querySelector('#denhaag-prev');
        const denhaagNextBtn = wrapper.querySelector('#denhaag-next');
        const denhaagDots = wrapper.querySelectorAll('#denhaag-activities .carousel-dot');
        
        // Book buttons
        const bookButtons = wrapper.querySelectorAll('.book-btn');
        
        // Add click events to carousel buttons
        if (zoetermeerPrevBtn) {
          zoetermeerPrevBtn.addEventListener('click', () => {
            moveCarousel('zoetermeer', -1);
          });
        }
        
        if (zoetermeerNextBtn) {
          zoetermeerNextBtn.addEventListener('click', () => {
            moveCarousel('zoetermeer', 1);
          });
        }
        
        if (denhaagPrevBtn) {
          denhaagPrevBtn.addEventListener('click', () => {
            moveCarousel('denhaag', -1);
          });
        }
        
        if (denhaagNextBtn) {
          denhaagNextBtn.addEventListener('click', () => {
            moveCarousel('denhaag', 1);
          });
        }
        
        // Add click events to carousel dots
        zoetermeerDots.forEach(dot => {
          dot.addEventListener('click', () => {
            jumpToSlide('zoetermeer', parseInt(dot.dataset.index, 10));
          });
        });
        
        denhaagDots.forEach(dot => {
          dot.addEventListener('click', () => {
            jumpToSlide('denhaag', parseInt(dot.dataset.index, 10));
          });
        });
        
        // Add click events to book buttons
        bookButtons.forEach(button => {
          button.addEventListener('click', () => {
            selectActivity(
              button.dataset.activity,
              button.dataset.activityName,
              button.dataset.activityUrl
            );
          });
        });
      }
  
      // Move carousel
      function moveCarousel(location, direction) {
        const carouselTrack = wrapper.querySelector(`#${location}-carousel-track`);
        if (!carouselTrack) return;
        
        const activities = location === 'zoetermeer' ? zoetermeerActivities : denhaagActivities;
        const currentPosition = bookingState.carouselPositions[location];
        const newPosition = currentPosition + direction;
        
        // Validate new position
        if (newPosition < 0 || newPosition >= activities.length) return;
        
        // Update position
        bookingState.carouselPositions[location] = newPosition;
        
        // Move carousel
        carouselTrack.style.transform = `translateX(-${newPosition * 100}%)`;
        
        // Update UI
        updateCarouselControls(location);
      }
  
      // Jump to specific slide
      function jumpToSlide(location, index) {
        const carouselTrack = wrapper.querySelector(`#${location}-carousel-track`);
        if (!carouselTrack) return;
        
        const activities = location === 'zoetermeer' ? zoetermeerActivities : denhaagActivities;
        
        // Validate index
        if (index < 0 || index >= activities.length) return;
        
        // Update position
        bookingState.carouselPositions[location] = index;
        
        // Move carousel
        carouselTrack.style.transform = `translateX(-${index * 100}%)`;
        
        // Update UI
        updateCarouselControls(location);
      }
  
      // Update carousel controls
      function updateCarouselControls(location) {
        const prevBtn = wrapper.querySelector(`#${location}-prev`);
        const nextBtn = wrapper.querySelector(`#${location}-next`);
        const dots = wrapper.querySelectorAll(`#${location}-activities .carousel-dot`);
        const currentPosition = bookingState.carouselPositions[location];
        const activities = location === 'zoetermeer' ? zoetermeerActivities : denhaagActivities;
        
        // Update buttons
        if (prevBtn) {
          prevBtn.disabled = currentPosition === 0;
        }
        
        if (nextBtn) {
          nextBtn.disabled = currentPosition === activities.length - 1;
        }
        
        // Update dots
        dots.forEach((dot, index) => {
          dot.classList.toggle('active', index === currentPosition);
        });
      }
  
      // Select activity
      function selectActivity(activityId, activityName, activityUrl) {
        bookingState.selectedActivity = activityId;
        bookingState.selectedActivityName = activityName;
        bookingState.selectedActivityUrl = activityUrl;
        
        // Update UI
        const nextBtn = wrapper.querySelector('#next-from-activities');
        if (nextBtn) {
          nextBtn.disabled = false;
        }
        
        // Show selected activity name
        const selectedActivityDisplay = wrapper.querySelector('#selected-activity-display');
        const selectedLocationDisplay = wrapper.querySelector('#selected-location-display');
        
        if (selectedActivityDisplay) {
          selectedActivityDisplay.textContent = activityName;
        }
        
        if (selectedLocationDisplay) {
          selectedLocationDisplay.textContent = bookingState.selectedLocationName;
        }
        
        // Directly go to step 3
        goToStep(3);
      }
  
      // Go to specific step
      function goToStep(step) {
        bookingState.currentStep = step;
        
        // Hide all steps
        const stepContents = wrapper.querySelectorAll('.step-content');
        stepContents.forEach(content => {
          content.classList.remove('active');
        });
        
        // Show selected step
        const targetStep = wrapper.querySelector(`#step-${step}`);
        if (targetStep) {
          targetStep.classList.add('active');
        }
        
        // Update progress indicator
        updateProgress(step);
        
        // Step-specific logic
        if (step === 2) {
          // Show activities for selected location
          const zoetermeerActivities = wrapper.querySelector('#zoetermeer-activities');
          const denhaagActivities = wrapper.querySelector('#denhaag-activities');
          
          if (zoetermeerActivities) {
            zoetermeerActivities.style.display = bookingState.selectedLocation === 'zoetermeer' ? 'block' : 'none';
          }
          
          if (denhaagActivities) {
            denhaagActivities.style.display = bookingState.selectedLocation === 'denhaag' ? 'block' : 'none';
          }
          
          // Reset carousel position
          const activeCarouselTrack = wrapper.querySelector(`#${bookingState.selectedLocation}-carousel-track`);
          if (activeCarouselTrack) {
            activeCarouselTrack.style.transform = 'translateX(0)';
            bookingState.carouselPositions[bookingState.selectedLocation] = 0;
            updateCarouselControls(bookingState.selectedLocation);
          }
        }
        
        if (step === 3 && bookingState.selectedActivityUrl) {
          loadBookingIframe(bookingState.selectedActivityUrl);
        }
      }
  
      // Update progress indicator
      function updateProgress(currentStep) {
        // Update step indicators
        const stepIndicators = wrapper.querySelectorAll('.step-indicator');
        const connectors = wrapper.querySelectorAll('.step-connector');
        
        stepIndicators.forEach((indicator, index) => {
          const stepNum = index + 1;
          
          // Reset classes
          indicator.classList.remove('active', 'completed');
          
          // Set appropriate classes
          if (stepNum < currentStep) {
            indicator.classList.add('completed');
          } else if (stepNum === currentStep) {
            indicator.classList.add('active', 'completed');
          }
        });
        
        // Update connectors
        connectors.forEach((connector, index) => {
          const connectionNum = index + 1;
          connector.classList.toggle('active', connectionNum < currentStep);
        });
      }
  
      // Load booking iframe
      function loadBookingIframe(url) {
        const iframeContainer = wrapper.querySelector('#booking-iframe-container');
        const placeholder = wrapper.querySelector('#iframe-placeholder');
        
        if (!iframeContainer) return;
        
        // Create iframe
        const iframe = document.createElement('iframe');
        iframe.src = url;
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.style.border = 'none';
        iframe.allowFullscreen = true;
        
        // Set loading and error handlers
        iframe.onload = function() {
          if (placeholder) {
            placeholder.style.display = 'none';
          }
        };
        
        iframe.onerror = function() {
          if (placeholder) {
            placeholder.innerHTML = 'Er is een fout opgetreden bij het laden van de boekingsmodule. Probeer het later opnieuw.';
          }
        };
        
        // Clear existing iframe if any
        const existingIframe = iframeContainer.querySelector('iframe');
        if (existingIframe) {
          existingIframe.remove();
        }
        
        // Add iframe to container
        iframeContainer.appendChild(iframe);
      }
  
      // Cancel booking
      function cancelBooking() {
        // Signal to Voiceflow that booking was cancelled
        if (window.voiceflow && window.voiceflow.chat) {
          window.voiceflow.chat.interact({
            type: 'request',
            payload: {
              type: 'booking-cancel'
            }
          });
        }
      }
  
      // Complete booking
      function completeBooking() {
        // Prepare data to send back to Voiceflow
        const completionData = {
          location: bookingState.selectedLocationName,
          activity: bookingState.selectedActivityName,
          bookingUrl: bookingState.selectedActivityUrl
        };
        
        // Signal to Voiceflow that booking is complete
        if (window.voiceflow && window.voiceflow.chat) {
          window.voiceflow.chat.interact({
            type: 'request',
            payload: {
              type: 'booking-complete',
              data: completionData
            }
          });
        }
      }
  
      // Initialize event listeners with a slight delay to ensure DOM is ready
      setTimeout(() => {
        setupEventListeners();
      }, delay + 100);
    }
  };


  // YRS: BOOKING PROCESS EXTENSION - VERSION 2 (20 March 2025)


  // EPICX Booking Extension - Full Implementation with fixes
export const EPICXBookingExtension2 = {
    name: 'EPICXBooking',
    type: 'response',
    match: ({ trace }) =>
      trace.type === 'ext_epicxBooking2' || trace.payload?.name === 'ext_epicxBooking2',
    render: ({ trace, element }) => {
      // Extract properties from the payload with default values
      const { 
        title = 'EPICX Boekingsassistent',
        step1Title = 'Kies een Locatie',
        step1Description = 'Selecteer een van onze EPICX locaties om te beginnen.',
        step2Title = 'Kies een Activiteit',
        step2Description = 'Selecteer de activiteit die je wilt doen.',
        step3Title = 'Bevestig je Boeking',
        step3Description = 'Je hebt gekozen voor',
        cancelLabel = 'Annuleren',
        backLabel = 'Terug',
        nextLabel = 'Volgende',
        completeLabel = 'Voltooien',
        height = '650', // Increased height for better visibility
        width = '460px', // Fixed width for consistent display
        borderColor = '#A061F7',
        padding = '0',
        delay = 0,
      } = trace.payload || {};
  
      // Location data
      const locations = [
        {
          id: 'zoetermeer',
          name: 'EPICX Zoetermeer',
          address: 'Saloméschouw 154, 2726 JX Zoetermeer',
          phone: '079-2073001'
        },
        {
          id: 'denhaag',
          name: 'EPICX Den Haag',
          address: 'Groene zoom 9, 2491 EJ Den Haag',
          phone: '070-2092025'
        }
      ];
  
      // Activity data for Zoetermeer
      const zoetermeerActivities = [
        {
          id: 'puppy-party',
          name: 'Puppy Party',
          description: 'Speciaal voor kinderen van 3 t/m 6 jaar. Tijdens de Puppy Jump is alleen de Jump Arena geopend en exclusief voor de allerkleinsten.',
          price: '€ 11,99 p.p voor 90 min',
          image: 'https://epicx.eu/wp-content/uploads/2024/10/900.24562_Puppy_Party.png',
          bookingUrl: 'https://epicxzoetermeer.dewi-online.nl/iframe/club/74/reservations/direct/activity/220'
        },
        {
          id: 'adventure-city',
          name: 'Adventure City',
          description: 'Ervaar Active Pixel, Laser Game, Jump Arena, en Ninja Tag in ons uitgebreide avonturenpark.',
          price: 'Vanaf € 11,99',
          image: 'https://epicx.eu/wp-content/uploads/2024/06/sfeerimpressie_03-1-1020x1024.png',
          bookingUrl: 'https://epicxzoetermeer.dewi-online.nl/iframe/club/74/reservations/direct/category/615'
        },
        {
          id: 'happy-hour',
          name: 'Happy Hour',
          description: 'Geniet van speciale kortingen tijdens onze Happy Hours! Een geweldige kans om meer plezier te hebben voor minder geld.',
          price: 'Speciale tarieven',
          image: 'https://epicx.eu/wp-content/uploads/2024/10/900.24562_Happy_Hour.png',
          bookingUrl: 'https://epicxzoetermeer.dewi-online.nl/iframe/club/74/reservations/direct/category/615'
        },
        {
          id: 'family-friday',
          name: 'Family Friday',
          description: 'Vrijdagavond is familie-avond! Kom samen met het hele gezin en geniet van onze speciale gezinsarrangementen.',
          price: 'Speciale gezinstarieven',
          image: 'https://epicx.eu/wp-content/uploads/2024/09/900.24562_Family_Friday.png',
          bookingUrl: 'https://epicxzoetermeer.dewi-online.nl/iframe/club/74/reservations/direct/category/615'
        }
      ];
  
      // Activity data for Den Haag
      const denhaagActivities = [
        {
          id: 'adventure-city',
          name: 'Adventure City',
          description: 'Ervaar Active Pixel, Laser Game en Mega Bounce in ons uitgebreide avonturenpark.',
          price: 'Vanaf € 11,99',
          image: 'https://epicx.eu/wp-content/uploads/2024/06/sfeerimpressie_03-1-1020x1024.png',
          bookingUrl: 'https://mtdh.dewi-online.nl/iframe/club/152/reservations/direct/category/1044'
        },
        {
          id: 'kidsplay',
          name: 'Kidsplay',
          description: 'Fun House en Peuterzone speciaal voor de jongere kinderen. Veilig spelen en plezier maken!',
          price: 'Vanaf € 9,99',
          image: 'https://epicx.eu/wp-content/uploads/2024/06/Sfeerimpressie_01-8-1021x1024.jpg',
          bookingUrl: 'https://mtdh.dewi-online.nl/iframe/club/152/reservations/direct/category/1044'
        },
        {
          id: 'clay-cafe',
          name: 'Clay Café Lab',
          description: 'Creatieve activiteiten met pottenbakken en verven. Laat je creativiteit de vrije loop!',
          price: 'Vanaf € 12,99',
          image: 'https://epicx.eu/wp-content/uploads/2023/11/Sfeerimpressie_01-1-1021x1024.jpg',
          bookingUrl: 'https://mtdh.dewi-online.nl/iframe/club/152/reservations'
        }
      ];
  
      // Clear element first
      element.innerHTML = '';
  
      // Create a container for the extension
      const container = document.createElement('div');
      container.style.width = '100%';
      container.style.display = 'flex';
      container.style.justifyContent = 'center';
      container.style.alignItems = 'center';
      container.style.maxWidth = '100%';
      container.style.margin = '0';
      container.style.padding = padding;
      container.style.boxSizing = 'border-box';
  
      // Create the main wrapper
      const wrapper = document.createElement('div');
      wrapper.className = 'epicx-booking-extension';
      wrapper.dataset.extensionId = 'epicx-booking';
  
      // Apply styling and initial states with fixed dimensions
      wrapper.style.width = width;
      wrapper.style.maxWidth = width;
      wrapper.style.minWidth = width;
      wrapper.style.height = `${height}px`;
      wrapper.style.minHeight = `${height}px`;
      wrapper.style.maxHeight = `${height}px`;
      wrapper.style.backgroundColor = 'white';
      wrapper.style.borderRadius = '10px';
      wrapper.style.overflow = 'hidden';
      wrapper.style.position = 'relative';
      wrapper.style.border = `2px solid ${borderColor}`;
      wrapper.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
      wrapper.style.display = 'flex';
      wrapper.style.flexDirection = 'column';
      wrapper.style.fontFamily = "'Nunito Sans', sans-serif";
      wrapper.style.transition = 'opacity 0.3s ease';
      wrapper.style.opacity = '0';
  
      // Create booking state object to track user selections
      const bookingState = {
        currentStep: 1,
        selectedLocation: null,
        selectedLocationName: null,
        selectedActivity: null,
        selectedActivityName: null,
        selectedActivityUrl: null,
        carouselPositions: {
          zoetermeer: 0,
          denhaag: 0
        }
      };
  
      // Construct the HTML content with fixed card dimensions
      wrapper.innerHTML = `
        <style>
          /* Base styles for extension */
          .epicx-booking-extension * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Nunito Sans', sans-serif;
          }
          
          /* Header */
          .extension-header {
            background: linear-gradient(90deg, #4b193e 0%, #291d3f 50%, #18233E 100%);
            color: white;
            padding: 16px;
            text-align: center;
            font-weight: 600;
            font-size: 18px;
            z-index: 10;
          }
          
          /* Content area */
          .extension-content {
            flex: 1;
            overflow-y: auto;
            padding: 20px;
            position: relative;
            height: calc(${height}px - 53px); /* Total height minus header */
          }
          
          /* Progress indicator */
          .progress-container {
            display: flex;
            justify-content: center;
            margin-bottom: 20px;
          }
          
          .progress-steps {
            display: flex;
            align-items: center;
          }
          
          .step-indicator {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background-color: #e0e0e0;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #555;
            font-weight: 600;
            font-size: 14px;
            position: relative;
          }
          
          .step-indicator.active {
            background-color: #A061F7;
            color: white;
          }
          
          .step-indicator.completed {
            background-color: #A061F7;
            color: white;
          }
          
          .step-connector {
            width: 40px;
            height: 2px;
            background-color: #e0e0e0;
          }
          
          .step-connector.active {
            background-color: #A061F7;
          }
          
          /* Step content */
          .step-content {
            display: none;
            height: calc(100% - 50px); /* Height minus progress indicator */
            overflow-y: auto;
          }
          
          .step-content.active {
            display: block;
            animation: fadeIn 0.3s ease-out;
          }
          
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          .step-title {
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 10px;
            color: #18233E;
          }
          
          .step-description {
            margin-bottom: 20px;
            color: #666;
          }
          
          /* Location cards */
          .location-cards {
            display: flex;
            flex-direction: column;
            gap: 15px;
            margin-bottom: 20px;
          }
          
          .location-card {
            border: 2px solid #A061F7;
            border-radius: 10px;
            overflow: hidden;
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
          }
          
          .location-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          }
          
          .location-card.selected {
            border-color: #E61462;
            background-color: rgba(160, 97, 247, 0.05);
          }
          
          .location-card-header {
            background: linear-gradient(90deg, #4b193e 0%, #291d3f 50%, #18233E 100%);
            color: white;
            padding: 12px;
            font-weight: 600;
            font-size: 18px;
          }
          
          .location-card-content {
            padding: 15px;
          }
          
          .location-card-address {
            color: #555;
            font-size: 14px;
            margin-bottom: 5px;
          }
          
          .location-card-phone {
            color: #555;
            font-size: 14px;
          }
          
          .location-check {
            position: absolute;
            top: 15px;
            right: 15px;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            background-color: #E61462;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.3s ease;
          }
          
          .location-card.selected .location-check {
            opacity: 1;
          }
          
          /* Activity carousel - FIXED WIDTH CARD STYLING */
          .activity-carousel {
            position: relative;
            margin: 0;
            padding: 0;
            width: 100%;
          }
          
          .carousel-container {
            overflow: hidden;
            position: relative;
            margin: 0 auto;
            width: 100%;
          }
          
          .carousel-track {
            display: flex;
            transition: transform 0.5s ease-in-out;
            width: 100%;
          }
          
          .activity-card {
            flex: 0 0 100%; /* Takes full width of container */
            width: calc(100% - 10px); /* Fixed width minus margins */
            max-width: calc(100% - 10px);
            margin-right: 10px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            overflow: hidden;
            background-color: white;
            border: 2px solid #A061F7;
            height: 350px;
            display: flex;
            flex-direction: column;
          }
          
          .activity-card-image {
            height: 160px;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
          }
          
          .activity-card-content {
            padding: 15px;
            flex: 1;
            display: flex;
            flex-direction: column;
          }
          
          .activity-card-title {
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 10px;
            color: #18233E;
          }
          
          .activity-card-description {
            color: #666;
            font-size: 14px;
            margin-bottom: 15px;
            flex: 1;
          }
          
          .activity-card-price {
            color: #A061F7;
            font-weight: 600;
            margin-bottom: 10px;
          }
          
          .book-btn {
            background: linear-gradient(90deg, #4b193e 0%, #291d3f 50%, #18233E 100%);
            color: white;
            border: none;
            border-radius: 5px;
            padding: 10px 15px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            width: 100%;
          }
          
          .book-btn:hover {
            background: linear-gradient(90deg, #5c1f4d 0%, #35264d 50%, #25304c 100%);
            transform: translateY(-2px);
          }
          
          /* Carousel controls - improved positioning */
          .carousel-controls {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 15px;
            gap: 10px;
            padding: 0 5px;
          }
          
          .carousel-dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color: #ddd;
            cursor: pointer;
            transition: all 0.3s ease;
          }
          
          .carousel-dot.active {
            background-color: #A061F7;
            transform: scale(1.2);
          }
          
          .carousel-btn {
            background-color: #A061F7;
            color: white;
            border: none;
            border-radius: 50%;
            width: 36px;
            height: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.3s ease;
            flex-shrink: 0;
          }
          
          .carousel-btn:hover {
            background-color: #18233E;
            transform: scale(1.1);
          }
          
          .carousel-btn:disabled {
            background-color: #ddd;
            cursor: not-allowed;
            opacity: 0.5;
          }
          
          .carousel-btn-icon {
            width: 20px;
            height: 20px;
          }
          
          /* Improved iframe container for better visibility */
          .iframe-container {
            margin-top: 20px;
            border-radius: 10px;
            overflow: hidden;
            border: 2px solid #A061F7;
            height: 450px; /* Increased height for better visibility */
            background-color: #f8f9fa;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #666;
            position: relative;
          }
          
          .iframe-container iframe {
            width: 100%;
            height: 100%;
            border: none;
          }
          
          /* Navigation buttons - fixed positioning at bottom */
          .nav-buttons {
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
            position: relative;
            bottom: 0;
            left: 0;
            width: 100%;
          }
          
          .btn {
            background-color: #A061F7;
            color: white;
            border: none;
            border-radius: 5px;
            padding: 10px 20px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
          }
          
          .btn:hover {
            background-color: #18233E;
          }
          
          .btn-secondary {
            background-color: #e0e0e0;
            color: #333;
          }
          
          .btn-secondary:hover {
            background-color: #d0d0d0;
          }
          
          .btn:disabled {
            background-color: #ddd;
            cursor: not-allowed;
            opacity: 0.5;
          }
          
          /* Loading spinner */
          .loading-spinner {
            width: 40px;
            height: 40px;
            border: 4px solid rgba(160, 97, 247, 0.2);
            border-radius: 50%;
            border-top: 4px solid #A061F7;
            animation: spin 1s linear infinite;
          }
          
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          /* Custom scrollbar for better UX */
          .extension-content::-webkit-scrollbar {
            width: 8px;
          }
          
          .extension-content::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 10px;
          }
          
          .extension-content::-webkit-scrollbar-thumb {
            background: #A061F7;
            border-radius: 10px;
          }
          
          .extension-content::-webkit-scrollbar-thumb:hover {
            background: #8224e3;
          }
        </style>
        
        <div class="extension-header">
          ${title}
        </div>
        
        <div class="extension-content">
          <!-- Progress Indicator -->
          <div class="progress-container">
            <div class="progress-steps">
              <div class="step-indicator active" id="step-indicator-1">1</div>
              <div class="step-connector" id="connector-1-2"></div>
              <div class="step-indicator" id="step-indicator-2">2</div>
              <div class="step-connector" id="connector-2-3"></div>
              <div class="step-indicator" id="step-indicator-3">3</div>
            </div>
          </div>
          
          <!-- Step 1: Location Selection -->
          <div class="step-content active" id="step-1">
            <div class="step-title">${step1Title}</div>
            <div class="step-description">${step1Description}</div>
            
            <div class="location-cards">
              ${locations.map(location => `
                <div class="location-card" data-location="${location.id}" data-location-name="${location.name}">
                  <div class="location-card-header">${location.name}</div>
                  <div class="location-card-content">
                    <div class="location-card-address">${location.address}</div>
                    <div class="location-card-phone">${location.phone}</div>
                  </div>
                  <div class="location-check">✓</div>
                </div>
              `).join('')}
            </div>
            
            <div class="nav-buttons">
              <button class="btn btn-secondary" id="cancel-btn">${cancelLabel}</button>
              <button class="btn" id="next-from-locations" disabled>${nextLabel}</button>
            </div>
          </div>
          
          <!-- Step 2: Activity Selection -->
          <div class="step-content" id="step-2">
            <div class="step-title">${step2Title}</div>
            <div class="step-description">${step2Description}</div>
            
            <!-- Zoetermeer Activities Carousel -->
            <div class="activity-carousel" id="zoetermeer-activities" style="display: none;">
              <div class="carousel-container">
                <div class="carousel-track" id="zoetermeer-carousel-track">
                  ${zoetermeerActivities.map(activity => `
                    <div class="activity-card" data-activity="${activity.id}" data-activity-name="${activity.name}" data-activity-url="${activity.bookingUrl}">
                      <div class="activity-card-image" style="background-image: url('${activity.image}');"></div>
                      <div class="activity-card-content">
                        <div class="activity-card-title">${activity.name}</div>
                        <div class="activity-card-description">${activity.description}</div>
                        <div class="activity-card-price">${activity.price}</div>
                        <button class="book-btn" data-activity="${activity.id}" data-activity-name="${activity.name}" data-activity-url="${activity.bookingUrl}">Boek ${activity.name}</button>
                      </div>
                    </div>
                  `).join('')}
                </div>
              </div>
              
              <div class="carousel-controls">
                <button class="carousel-btn" id="zoetermeer-prev" disabled>
                  <svg class="carousel-btn-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
                ${zoetermeerActivities.map((_, index) => `
                  <div class="carousel-dot ${index === 0 ? 'active' : ''}" data-location="zoetermeer" data-index="${index}"></div>
                `).join('')}
                <button class="carousel-btn" id="zoetermeer-next">
                  <svg class="carousel-btn-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
            
            <!-- Den Haag Activities Carousel -->
            <div class="activity-carousel" id="denhaag-activities" style="display: none;">
              <div class="carousel-container">
                <div class="carousel-track" id="denhaag-carousel-track">
                  ${denhaagActivities.map(activity => `
                    <div class="activity-card" data-activity="${activity.id}" data-activity-name="${activity.name}" data-activity-url="${activity.bookingUrl}">
                      <div class="activity-card-image" style="background-image: url('${activity.image}');"></div>
                      <div class="activity-card-content">
                        <div class="activity-card-title">${activity.name}</div>
                        <div class="activity-card-description">${activity.description}</div>
                        <div class="activity-card-price">${activity.price}</div>
                        <button class="book-btn" data-activity="${activity.id}" data-activity-name="${activity.name}" data-activity-url="${activity.bookingUrl}">Boek ${activity.name}</button>
                      </div>
                    </div>
                  `).join('')}
                </div>
              </div>
              
              <div class="carousel-controls">
                <button class="carousel-btn" id="denhaag-prev" disabled>
                  <svg class="carousel-btn-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
                ${denhaagActivities.map((_, index) => `
                  <div class="carousel-dot ${index === 0 ? 'active' : ''}" data-location="denhaag" data-index="${index}"></div>
                `).join('')}
                <button class="carousel-btn" id="denhaag-next">
                  <svg class="carousel-btn-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
            
            <div class="nav-buttons">
              <button class="btn btn-secondary" id="back-to-locations-btn">${backLabel}</button>
              <button class="btn" id="next-from-activities" disabled>${nextLabel}</button>
            </div>
          </div>
          
          <!-- Step 3: Booking Confirmation -->
          <div class="step-content" id="step-3">
            <div class="step-title">${step3Title}</div>
            <div class="step-description">${step3Description} <span id="selected-activity-display">activiteit</span> bij <span id="selected-location-display">locatie</span>.</div>
            
            <div class="iframe-container" id="booking-iframe-container">
              <div id="iframe-placeholder" style="text-align: center; padding: 20px;">
                <div class="loading-spinner" style="margin: 0 auto 20px;"></div>
                <p>De boekingsmodule wordt geladen...</p>
              </div>
              <!-- iframe will be inserted here -->
            </div>
            
            <div class="nav-buttons">
              <button class="btn btn-secondary" id="back-to-activities-btn">${backLabel}</button>
              <button class="btn" id="complete-btn">${completeLabel}</button>
            </div>
          </div>
        </div>
      `;
  
      // Add the wrapper to the container
      container.appendChild(wrapper);
      element.appendChild(container);
  
      // Make the extension visible with animation
      setTimeout(() => {
        wrapper.style.opacity = '1';
      }, 100);
  
      // Setup event listeners
      function setupEventListeners() {
        // Location selection
        const locationCards = wrapper.querySelectorAll('.location-card');
        const nextFromLocationsBtn = wrapper.querySelector('#next-from-locations');
        const cancelBtn = wrapper.querySelector('#cancel-btn');
        const nextFromActivitiesBtn = wrapper.querySelector('#next-from-activities');
        const backToLocationsBtn = wrapper.querySelector('#back-to-locations-btn');
        const backToActivitiesBtn = wrapper.querySelector('#back-to-activities-btn');
        const completeBtn = wrapper.querySelector('#complete-btn');
  
        // Add click event to location cards
        locationCards.forEach(card => {
          card.addEventListener('click', () => {
            // Remove selected class from all cards
            locationCards.forEach(c => c.classList.remove('selected'));
            
            // Add selected class to clicked card
            card.classList.add('selected');
            
            // Update booking state
            bookingState.selectedLocation = card.dataset.location;
            bookingState.selectedLocationName = card.dataset.locationName;
            
            // Enable next button
            if (nextFromLocationsBtn) {
              nextFromLocationsBtn.disabled = false;
            }
          });
        });
  
        // Next button from location selection
        if (nextFromLocationsBtn) {
          nextFromLocationsBtn.addEventListener('click', () => {
            if (bookingState.selectedLocation) {
              goToStep(2);
            }
          });
        }
  
        // Cancel button
        if (cancelBtn) {
          cancelBtn.addEventListener('click', () => {
            cancelBooking();
          });
        }
  
        // Back to locations button
        if (backToLocationsBtn) {
          backToLocationsBtn.addEventListener('click', () => {
            goToStep(1);
          });
        }
  
        // Back to activities button
        if (backToActivitiesBtn) {
          backToActivitiesBtn.addEventListener('click', () => {
            goToStep(2);
          });
        }
  
        // Next button from activities
        if (nextFromActivitiesBtn) {
          nextFromActivitiesBtn.addEventListener('click', () => {
            if (bookingState.selectedActivity) {
              goToStep(3);
            }
          });
        }
  
        // Complete button
        if (completeBtn) {
          completeBtn.addEventListener('click', () => {
            completeBooking();
          });
        }
  
        // Setup carousel navigation
        setupCarousels();
      }
  
      // Setup carousels
      function setupCarousels() {
        // Zoetermeer carousel controls
        const zoetermeerPrevBtn = wrapper.querySelector('#zoetermeer-prev');
        const zoetermeerNextBtn = wrapper.querySelector('#zoetermeer-next');
        const zoetermeerDots = wrapper.querySelectorAll('#zoetermeer-activities .carousel-dot');
        
        // Den Haag carousel controls
        const denhaagPrevBtn = wrapper.querySelector('#denhaag-prev');
        const denhaagNextBtn = wrapper.querySelector('#denhaag-next');
        const denhaagDots = wrapper.querySelectorAll('#denhaag-activities .carousel-dot');
        
        // Book buttons
        const bookButtons = wrapper.querySelectorAll('.book-btn');
        
        // Add click events to carousel buttons
        if (zoetermeerPrevBtn) {
          zoetermeerPrevBtn.addEventListener('click', () => {
            moveCarousel('zoetermeer', -1);
          });
        }
        
        if (zoetermeerNextBtn) {
          zoetermeerNextBtn.addEventListener('click', () => {
            moveCarousel('zoetermeer', 1);
          });
        }
        
        if (denhaagPrevBtn) {
          denhaagPrevBtn.addEventListener('click', () => {
            moveCarousel('denhaag', -1);
          });
        }
        
        if (denhaagNextBtn) {
          denhaagNextBtn.addEventListener('click', () => {
            moveCarousel('denhaag', 1);
          });
        }
        
        // Add click events to carousel dots
        zoetermeerDots.forEach(dot => {
          dot.addEventListener('click', () => {
            jumpToSlide('zoetermeer', parseInt(dot.dataset.index, 10));
          });
        });
        
        denhaagDots.forEach(dot => {
          dot.addEventListener('click', () => {
            jumpToSlide('denhaag', parseInt(dot.dataset.index, 10));
          });
        });
        
        // Add click events to book buttons
        bookButtons.forEach(button => {
          button.addEventListener('click', () => {
            selectActivity(
              button.dataset.activity,
              button.dataset.activityName,
              button.dataset.activityUrl
            );
          });
        });
      }
  
      // Move carousel
      function moveCarousel(location, direction) {
        const carouselTrack = wrapper.querySelector(`#${location}-carousel-track`);
        if (!carouselTrack) return;
        
        const activities = location === 'zoetermeer' ? zoetermeerActivities : denhaagActivities;
        const currentPosition = bookingState.carouselPositions[location];
        const newPosition = currentPosition + direction;
        
        // Validate new position
        if (newPosition < 0 || newPosition >= activities.length) return;
        
        // Update position
        bookingState.carouselPositions[location] = newPosition;
        
        // Move carousel
        carouselTrack.style.transform = `translateX(-${newPosition * 100}%)`;
        
        // Update UI
        updateCarouselControls(location);
      }
  
      // Jump to specific slide
      function jumpToSlide(location, index) {
        const carouselTrack = wrapper.querySelector(`#${location}-carousel-track`);
        if (!carouselTrack) return;
        
        const activities = location === 'zoetermeer' ? zoetermeerActivities : denhaagActivities;
        
        // Validate index
        if (index < 0 || index >= activities.length) return;
        
        // Update position
        bookingState.carouselPositions[location] = index;
        
        // Move carousel
        carouselTrack.style.transform = `translateX(-${index * 100}%)`;
        
        // Update UI
        updateCarouselControls(location);
      }
  
      // Update carousel controls
      function updateCarouselControls(location) {
        const prevBtn = wrapper.querySelector(`#${location}-prev`);
        const nextBtn = wrapper.querySelector(`#${location}-next`);
        const dots = wrapper.querySelectorAll(`#${location}-activities .carousel-dot`);
        const currentPosition = bookingState.carouselPositions[location];
        const activities = location === 'zoetermeer' ? zoetermeerActivities : denhaagActivities;
        
        // Update buttons
        if (prevBtn) {
          prevBtn.disabled = currentPosition === 0;
        }
        
        if (nextBtn) {
          nextBtn.disabled = currentPosition === activities.length - 1;
        }
        
        // Update dots
        dots.forEach((dot, index) => {
          dot.classList.toggle('active', index === currentPosition);
        });
      }
  
      // Select activity
      function selectActivity(activityId, activityName, activityUrl) {
        bookingState.selectedActivity = activityId;
        bookingState.selectedActivityName = activityName;
        bookingState.selectedActivityUrl = activityUrl;
        
        // Update UI
        const nextBtn = wrapper.querySelector('#next-from-activities');
        if (nextBtn) {
          nextBtn.disabled = false;
        }
        
        // Show selected activity name
        const selectedActivityDisplay = wrapper.querySelector('#selected-activity-display');
        const selectedLocationDisplay = wrapper.querySelector('#selected-location-display');
        
        if (selectedActivityDisplay) {
          selectedActivityDisplay.textContent = activityName;
        }
        
        if (selectedLocationDisplay) {
          selectedLocationDisplay.textContent = bookingState.selectedLocationName;
        }
        
        // Directly go to step 3
        goToStep(3);
      }
  
      // Go to specific step
      function goToStep(step) {
        bookingState.currentStep = step;
        
        // Hide all steps
        const stepContents = wrapper.querySelectorAll('.step-content');
        stepContents.forEach(content => {
          content.classList.remove('active');
        });
        
        // Show selected step
        const targetStep = wrapper.querySelector(`#step-${step}`);
        if (targetStep) {
          targetStep.classList.add('active');
        }
        
        // Update progress indicator
        updateProgress(step);
        
        // Step-specific logic
        if (step === 2) {
          // Show activities for selected location
          const zoetermeerActivities = wrapper.querySelector('#zoetermeer-activities');
          const denhaagActivities = wrapper.querySelector('#denhaag-activities');
          
          if (zoetermeerActivities) {
            zoetermeerActivities.style.display = bookingState.selectedLocation === 'zoetermeer' ? 'block' : 'none';
          }
          
          if (denhaagActivities) {
            denhaagActivities.style.display = bookingState.selectedLocation === 'denhaag' ? 'block' : 'none';
          }
          
          // Reset carousel position
          const activeCarouselTrack = wrapper.querySelector(`#${bookingState.selectedLocation}-carousel-track`);
          if (activeCarouselTrack) {
            activeCarouselTrack.style.transform = 'translateX(0)';
            bookingState.carouselPositions[bookingState.selectedLocation] = 0;
            updateCarouselControls(bookingState.selectedLocation);
          }
        }
        
        if (step === 3 && bookingState.selectedActivityUrl) {
          loadBookingIframe(bookingState.selectedActivityUrl);
        }
      }
  
      // Update progress indicator
      function updateProgress(currentStep) {
        // Update step indicators
        const stepIndicators = wrapper.querySelectorAll('.step-indicator');
        const connectors = wrapper.querySelectorAll('.step-connector');
        
        stepIndicators.forEach((indicator, index) => {
          const stepNum = index + 1;
          
          // Reset classes
          indicator.classList.remove('active', 'completed');
          
          // Set appropriate classes
          if (stepNum < currentStep) {
            indicator.classList.add('completed');
          } else if (stepNum === currentStep) {
            indicator.classList.add('active', 'completed');
          }
        });
        
        // Update connectors
        connectors.forEach((connector, index) => {
          const connectionNum = index + 1;
          connector.classList.toggle('active', connectionNum < currentStep);
        });
      }
  
      // Load booking iframe
      function loadBookingIframe(url) {
        const iframeContainer = wrapper.querySelector('#booking-iframe-container');
        const placeholder = wrapper.querySelector('#iframe-placeholder');
        
        if (!iframeContainer) return;
        
        // Create iframe
        const iframe = document.createElement('iframe');
        iframe.src = url;
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.style.border = 'none';
        iframe.allowFullscreen = true;
        
        // Set loading and error handlers
        iframe.onload = function() {
          if (placeholder) {
            placeholder.style.display = 'none';
          }
        };
        
        iframe.onerror = function() {
          if (placeholder) {
            placeholder.innerHTML = 'Er is een fout opgetreden bij het laden van de boekingsmodule. Probeer het later opnieuw.';
          }
        };
        
        // Clear existing iframe if any
        const existingIframe = iframeContainer.querySelector('iframe');
        if (existingIframe) {
          existingIframe.remove();
        }
        
        // Add iframe to container
        iframeContainer.appendChild(iframe);
      }
  
      // Cancel booking
      function cancelBooking() {
        // Signal to Voiceflow that booking was cancelled
        if (window.voiceflow && window.voiceflow.chat) {
          window.voiceflow.chat.interact({
            type: 'request',
            payload: {
              type: 'booking-cancel'
            }
          });
        }
      }
  
      // Complete booking
      function completeBooking() {
        // Prepare data to send back to Voiceflow
        const completionData = {
          location: bookingState.selectedLocationName,
          activity: bookingState.selectedActivityName,
          bookingUrl: bookingState.selectedActivityUrl
        };
        
        // Signal to Voiceflow that booking is complete
        if (window.voiceflow && window.voiceflow.chat) {
          window.voiceflow.chat.interact({
            type: 'request',
            payload: {
              type: 'booking-complete',
              data: completionData
            }
          });
        }
      }
  
      // Initialize event listeners with a slight delay to ensure DOM is ready
      setTimeout(() => {
        setupEventListeners();
      }, delay + 100);
    }
  };

    // YRS: BOOKING PROCESS EXTENSION - VERSION 3 (20 March 2025)

    // EPICX Booking Extension - Full Screen Implementation
export const EPICXBookingExtension3 = {
    name: 'EPICXBooking',
    type: 'response',
    match: ({ trace }) =>
      trace.type === 'ext_epicxBooking3' || trace.payload?.name === 'ext_epicxBooking3',
    render: ({ trace, element }) => {
      // Extract properties from the payload with default values
      const { 
        title = 'EPICX Boekingsassistent',
        step1Title = 'Kies een Locatie',
        step1Description = 'Selecteer een van onze EPICX locaties om te beginnen.',
        step2Title = 'Kies een Activiteit',
        step2Description = 'Selecteer de activiteit die je wilt doen.',
        step3Title = 'Bevestig je Boeking',
        step3Description = 'Je hebt gekozen voor',
        cancelLabel = 'Annuleren',
        backLabel = 'Terug',
        nextLabel = 'Volgende',
        completeLabel = 'Voltooien',
        borderColor = '#A061F7',
        padding = '0',
        delay = 0,
      } = trace.payload || {};
  
      // Location data
      const locations = [
        {
          id: 'zoetermeer',
          name: 'EPICX Zoetermeer',
          address: 'Saloméschouw 154, 2726 JX Zoetermeer',
          phone: '079-2073001'
        },
        {
          id: 'denhaag',
          name: 'EPICX Den Haag',
          address: 'Groene zoom 9, 2491 EJ Den Haag',
          phone: '070-2092025'
        }
      ];
  
      // Activity data for Zoetermeer
      const zoetermeerActivities = [
        {
          id: 'puppy-party',
          name: 'Puppy Party',
          description: 'Speciaal voor kinderen van 3 t/m 6 jaar. Tijdens de Puppy Jump is alleen de Jump Arena geopend en exclusief voor de allerkleinsten.',
          price: '€ 11,99 p.p voor 90 min',
          image: 'https://epicx.eu/wp-content/uploads/2024/10/900.24562_Puppy_Party.png',
          bookingUrl: 'https://epicxzoetermeer.dewi-online.nl/iframe/club/74/reservations/direct/activity/220'
        },
        {
          id: 'adventure-city',
          name: 'Adventure City',
          description: 'Ervaar Active Pixel, Laser Game, Jump Arena, en Ninja Tag in ons uitgebreide avonturenpark.',
          price: 'Vanaf € 11,99',
          image: 'https://epicx.eu/wp-content/uploads/2024/06/sfeerimpressie_03-1-1020x1024.png',
          bookingUrl: 'https://epicxzoetermeer.dewi-online.nl/iframe/club/74/reservations/direct/category/615'
        },
        {
          id: 'happy-hour',
          name: 'Happy Hour',
          description: 'Geniet van speciale kortingen tijdens onze Happy Hours! Een geweldige kans om meer plezier te hebben voor minder geld.',
          price: 'Speciale tarieven',
          image: 'https://epicx.eu/wp-content/uploads/2024/10/900.24562_Happy_Hour.png',
          bookingUrl: 'https://epicxzoetermeer.dewi-online.nl/iframe/club/74/reservations/direct/category/615'
        },
        {
          id: 'family-friday',
          name: 'Family Friday',
          description: 'Vrijdagavond is familie-avond! Kom samen met het hele gezin en geniet van onze speciale gezinsarrangementen.',
          price: 'Speciale gezinstarieven',
          image: 'https://epicx.eu/wp-content/uploads/2024/09/900.24562_Family_Friday.png',
          bookingUrl: 'https://epicxzoetermeer.dewi-online.nl/iframe/club/74/reservations/direct/category/615'
        }
      ];
  
      // Activity data for Den Haag
      const denhaagActivities = [
        {
          id: 'adventure-city',
          name: 'Adventure City',
          description: 'Ervaar Active Pixel, Laser Game en Mega Bounce in ons uitgebreide avonturenpark.',
          price: 'Vanaf € 11,99',
          image: 'https://epicx.eu/wp-content/uploads/2024/06/sfeerimpressie_03-1-1020x1024.png',
          bookingUrl: 'https://mtdh.dewi-online.nl/iframe/club/152/reservations/direct/category/1044'
        },
        {
          id: 'kidsplay',
          name: 'Kidsplay',
          description: 'Fun House en Peuterzone speciaal voor de jongere kinderen. Veilig spelen en plezier maken!',
          price: 'Vanaf € 9,99',
          image: 'https://epicx.eu/wp-content/uploads/2024/06/Sfeerimpressie_01-8-1021x1024.jpg',
          bookingUrl: 'https://mtdh.dewi-online.nl/iframe/club/152/reservations/direct/category/1044'
        },
        {
          id: 'clay-cafe',
          name: 'Clay Café Lab',
          description: 'Creatieve activiteiten met pottenbakken en verven. Laat je creativiteit de vrije loop!',
          price: 'Vanaf € 12,99',
          image: 'https://epicx.eu/wp-content/uploads/2023/11/Sfeerimpressie_01-1-1021x1024.jpg',
          bookingUrl: 'https://mtdh.dewi-online.nl/iframe/club/152/reservations'
        }
      ];
  
      // Clear element first
      element.innerHTML = '';
  
      // Create a container for the extension - now takes full width and height
      const container = document.createElement('div');
      container.style.width = '100%';
      container.style.height = '100%';
      container.style.display = 'flex';
      container.style.justifyContent = 'center';
      container.style.alignItems = 'center';
      container.style.maxWidth = '100%';
      container.style.margin = '0';
      container.style.padding = padding;
      container.style.boxSizing = 'border-box';
      container.style.position = 'relative';
  
      // Create the main wrapper - now takes full size of container
      const wrapper = document.createElement('div');
      wrapper.className = 'epicx-booking-extension';
      wrapper.dataset.extensionId = 'epicx-booking';
  
      // Apply styling for full-screen experience
      wrapper.style.width = '100%';
      wrapper.style.maxWidth = '100%';
      wrapper.style.height = '100%';
      wrapper.style.maxHeight = '100%';
      wrapper.style.backgroundColor = 'white';
      wrapper.style.borderRadius = '10px';
      wrapper.style.overflow = 'hidden';
      wrapper.style.position = 'relative';
      wrapper.style.border = `2px solid ${borderColor}`;
      wrapper.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
      wrapper.style.display = 'flex';
      wrapper.style.flexDirection = 'column';
      wrapper.style.fontFamily = "'Nunito Sans', sans-serif";
      wrapper.style.transition = 'opacity 0.3s ease';
      wrapper.style.opacity = '0';
  
      // Create booking state object to track user selections
      const bookingState = {
        currentStep: 1,
        selectedLocation: null,
        selectedLocationName: null,
        selectedActivity: null,
        selectedActivityName: null,
        selectedActivityUrl: null,
        carouselPositions: {
          zoetermeer: 0,
          denhaag: 0
        }
      };
  
      // Construct the HTML content with responsive design
      wrapper.innerHTML = `
        <style>
          /* Base styles for extension */
          .epicx-booking-extension * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Nunito Sans', sans-serif;
          }
          
          /* Header */
          .extension-header {
            background: linear-gradient(90deg, #4b193e 0%, #291d3f 50%, #18233E 100%);
            color: white;
            padding: 16px;
            text-align: center;
            font-weight: 600;
            font-size: 20px;
            z-index: 10;
          }
          
          /* Content area */
          .extension-content {
            flex: 1;
            overflow-y: auto;
            padding: 20px;
            position: relative;
            height: calc(100% - 53px); /* Total height minus header */
          }
          
          /* Progress indicator */
          .progress-container {
            display: flex;
            justify-content: center;
            margin-bottom: 30px;
          }
          
          .progress-steps {
            display: flex;
            align-items: center;
          }
          
          .step-indicator {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: #e0e0e0;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #555;
            font-weight: 600;
            font-size: 18px;
            position: relative;
          }
          
          .step-indicator.active {
            background-color: #A061F7;
            color: white;
          }
          
          .step-indicator.completed {
            background-color: #A061F7;
            color: white;
          }
          
          .step-connector {
            width: 60px;
            height: 3px;
            background-color: #e0e0e0;
          }
          
          .step-connector.active {
            background-color: #A061F7;
          }
          
          /* Step content */
          .step-content {
            display: none;
            height: calc(100% - 70px); /* Height minus progress indicator */
            overflow-y: auto;
          }
          
          .step-content.active {
            display: block;
            animation: fadeIn 0.3s ease-out;
          }
          
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          .step-title {
            font-size: 24px;
            font-weight: 600;
            margin-bottom: 15px;
            color: #18233E;
          }
          
          .step-description {
            margin-bottom: 25px;
            color: #666;
            font-size: 16px;
          }
          
          /* Location cards */
          .location-cards {
            display: flex;
            flex-direction: column;
            gap: 20px;
            margin-bottom: 30px;
          }
          
          .location-card {
            border: 2px solid #A061F7;
            border-radius: 10px;
            overflow: hidden;
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
          }
          
          .location-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          }
          
          .location-card.selected {
            border-color: #E61462;
            background-color: rgba(160, 97, 247, 0.05);
          }
          
          .location-card-header {
            background: linear-gradient(90deg, #4b193e 0%, #291d3f 50%, #18233E 100%);
            color: white;
            padding: 15px;
            font-weight: 600;
            font-size: 20px;
          }
          
          .location-card-content {
            padding: 20px;
          }
          
          .location-card-address {
            color: #555;
            font-size: 16px;
            margin-bottom: 8px;
          }
          
          .location-card-phone {
            color: #555;
            font-size: 16px;
          }
          
          .location-check {
            position: absolute;
            top: 15px;
            right: 15px;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background-color: #E61462;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.3s ease;
            font-size: 18px;
          }
          
          .location-card.selected .location-check {
            opacity: 1;
          }
          
          /* Activity carousel - Responsive styling */
          .activity-carousel {
            position: relative;
            margin: 0;
            padding: 0;
            width: 100%;
          }
          
          .carousel-container {
            overflow: hidden;
            position: relative;
            margin: 0 auto;
            width: 100%;
          }
          
          .carousel-track {
            display: flex;
            transition: transform 0.5s ease-in-out;
            width: 100%;
          }
          
          .activity-card {
            flex: 0 0 100%; /* Takes full width of container */
            width: calc(100% - 10px); /* Full width minus margins */
            max-width: calc(100% - 10px);
            margin-right: 10px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            overflow: hidden;
            background-color: white;
            border: 2px solid #A061F7;
            height: 400px; /* Increased height for better visibility */
            display: flex;
            flex-direction: column;
          }
          
          .activity-card-image {
            height: 200px; /* Increased height for better visibility */
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
          }
          
          .activity-card-content {
            padding: 20px;
            flex: 1;
            display: flex;
            flex-direction: column;
          }
          
          .activity-card-title {
            font-size: 22px;
            font-weight: 600;
            margin-bottom: 15px;
            color: #18233E;
          }
          
          .activity-card-description {
            color: #666;
            font-size: 16px;
            margin-bottom: 20px;
            flex: 1;
          }
          
          .activity-card-price {
            color: #A061F7;
            font-weight: 600;
            margin-bottom: 15px;
            font-size: 18px;
          }
          
          .book-btn {
            background: linear-gradient(90deg, #4b193e 0%, #291d3f 50%, #18233E 100%);
            color: white;
            border: none;
            border-radius: 5px;
            padding: 12px 20px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            width: 100%;
            font-size: 16px;
          }
          
          .book-btn:hover {
            background: linear-gradient(90deg, #5c1f4d 0%, #35264d 50%, #25304c 100%);
            transform: translateY(-2px);
          }
          
          /* Carousel controls - improved positioning */
          .carousel-controls {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 20px;
            gap: 15px;
            padding: 0 10px;
          }
          
          .carousel-dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background-color: #ddd;
            cursor: pointer;
            transition: all 0.3s ease;
          }
          
          .carousel-dot.active {
            background-color: #A061F7;
            transform: scale(1.2);
          }
          
          .carousel-btn {
            background-color: #A061F7;
            color: white;
            border: none;
            border-radius: 50%;
            width: 44px;
            height: 44px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.3s ease;
            flex-shrink: 0;
          }
          
          .carousel-btn:hover {
            background-color: #18233E;
            transform: scale(1.1);
          }
          
          .carousel-btn:disabled {
            background-color: #ddd;
            cursor: not-allowed;
            opacity: 0.5;
          }
          
          .carousel-btn-icon {
            width: 24px;
            height: 24px;
          }
          
          /* Enhanced iframe container for better visibility */
          .iframe-container {
            margin-top: 20px;
            border-radius: 10px;
            overflow: hidden;
            border: 2px solid #A061F7;
            height: calc(100% - 100px); /* Fill remaining height */
            min-height: 500px; /* Minimum height */
            background-color: #f8f9fa;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #666;
            position: relative;
          }
          
          .iframe-container iframe {
            width: 100%;
            height: 100%;
            border: none;
          }
          
          /* Navigation buttons - fixed positioning at bottom */
          .nav-buttons {
            display: flex;
            justify-content: space-between;
            margin-top: 25px;
            position: relative;
            width: 100%;
          }
          
          .btn {
            background-color: #A061F7;
            color: white;
            border: none;
            border-radius: 5px;
            padding: 12px 25px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 16px;
          }
          
          .btn:hover {
            background-color: #18233E;
          }
          
          .btn-secondary {
            background-color: #e0e0e0;
            color: #333;
          }
          
          .btn-secondary:hover {
            background-color: #d0d0d0;
          }
          
          .btn:disabled {
            background-color: #ddd;
            cursor: not-allowed;
            opacity: 0.5;
          }
          
          /* Loading spinner */
          .loading-spinner {
            width: 50px;
            height: 50px;
            border: 5px solid rgba(160, 97, 247, 0.2);
            border-radius: 50%;
            border-top: 5px solid #A061F7;
            animation: spin 1s linear infinite;
          }
          
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          /* Custom scrollbar for better UX */
          .extension-content::-webkit-scrollbar {
            width: 10px;
          }
          
          .extension-content::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 10px;
          }
          
          .extension-content::-webkit-scrollbar-thumb {
            background: #A061F7;
            border-radius: 10px;
          }
          
          .extension-content::-webkit-scrollbar-thumb:hover {
            background: #8224e3;
          }
  
          /* For small screens, adjust font sizes */
          @media (max-width: 640px) {
            .step-title {
              font-size: 20px;
            }
            
            .step-description {
              font-size: 14px;
            }
            
            .activity-card-title {
              font-size: 18px;
            }
            
            .activity-card-description {
              font-size: 14px;
            }
          }
        </style>
        
        <div class="extension-header">
          ${title}
        </div>
        
        <div class="extension-content">
          <!-- Progress Indicator -->
          <div class="progress-container">
            <div class="progress-steps">
              <div class="step-indicator active" id="step-indicator-1">1</div>
              <div class="step-connector" id="connector-1-2"></div>
              <div class="step-indicator" id="step-indicator-2">2</div>
              <div class="step-connector" id="connector-2-3"></div>
              <div class="step-indicator" id="step-indicator-3">3</div>
            </div>
          </div>
          
          <!-- Step 1: Location Selection -->
          <div class="step-content active" id="step-1">
            <div class="step-title">${step1Title}</div>
            <div class="step-description">${step1Description}</div>
            
            <div class="location-cards">
              ${locations.map(location => `
                <div class="location-card" data-location="${location.id}" data-location-name="${location.name}">
                  <div class="location-card-header">${location.name}</div>
                  <div class="location-card-content">
                    <div class="location-card-address">${location.address}</div>
                    <div class="location-card-phone">${location.phone}</div>
                  </div>
                  <div class="location-check">✓</div>
                </div>
              `).join('')}
            </div>
            
            <div class="nav-buttons">
              <button class="btn btn-secondary" id="cancel-btn">${cancelLabel}</button>
              <button class="btn" id="next-from-locations" disabled>${nextLabel}</button>
            </div>
          </div>
          
          <!-- Step 2: Activity Selection -->
          <div class="step-content" id="step-2">
            <div class="step-title">${step2Title}</div>
            <div class="step-description">${step2Description}</div>
            
            <!-- Zoetermeer Activities Carousel -->
            <div class="activity-carousel" id="zoetermeer-activities" style="display: none;">
              <div class="carousel-container">
                <div class="carousel-track" id="zoetermeer-carousel-track">
                  ${zoetermeerActivities.map(activity => `
                    <div class="activity-card" data-activity="${activity.id}" data-activity-name="${activity.name}" data-activity-url="${activity.bookingUrl}">
                      <div class="activity-card-image" style="background-image: url('${activity.image}');"></div>
                      <div class="activity-card-content">
                        <div class="activity-card-title">${activity.name}</div>
                        <div class="activity-card-description">${activity.description}</div>
                        <div class="activity-card-price">${activity.price}</div>
                        <button class="book-btn" data-activity="${activity.id}" data-activity-name="${activity.name}" data-activity-url="${activity.bookingUrl}">Boek ${activity.name}</button>
                      </div>
                    </div>
                  `).join('')}
                </div>
              </div>
              
              <div class="carousel-controls">
                <button class="carousel-btn" id="zoetermeer-prev" disabled>
                  <svg class="carousel-btn-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
                ${zoetermeerActivities.map((_, index) => `
                  <div class="carousel-dot ${index === 0 ? 'active' : ''}" data-location="zoetermeer" data-index="${index}"></div>
                `).join('')}
                <button class="carousel-btn" id="zoetermeer-next">
                  <svg class="carousel-btn-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
            
            <!-- Den Haag Activities Carousel -->
            <div class="activity-carousel" id="denhaag-activities" style="display: none;">
              <div class="carousel-container">
                <div class="carousel-track" id="denhaag-carousel-track">
                  ${denhaagActivities.map(activity => `
                    <div class="activity-card" data-activity="${activity.id}" data-activity-name="${activity.name}" data-activity-url="${activity.bookingUrl}">
                      <div class="activity-card-image" style="background-image: url('${activity.image}');"></div>
                      <div class="activity-card-content">
                        <div class="activity-card-title">${activity.name}</div>
                        <div class="activity-card-description">${activity.description}</div>
                        <div class="activity-card-price">${activity.price}</div>
                        <button class="book-btn" data-activity="${activity.id}" data-activity-name="${activity.name}" data-activity-url="${activity.bookingUrl}">Boek ${activity.name}</button>
                      </div>
                    </div>
                  `).join('')}
                </div>
              </div>
              
              <div class="carousel-controls">
                <button class="carousel-btn" id="denhaag-prev" disabled>
                  <svg class="carousel-btn-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
                ${denhaagActivities.map((_, index) => `
                  <div class="carousel-dot ${index === 0 ? 'active' : ''}" data-location="denhaag" data-index="${index}"></div>
                `).join('')}
                <button class="carousel-btn" id="denhaag-next">
                  <svg class="carousel-btn-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
            
            <div class="nav-buttons">
              <button class="btn btn-secondary" id="back-to-locations-btn">${backLabel}</button>
              <button class="btn" id="next-from-activities" disabled>${nextLabel}</button>
            </div>
          </div>
          
          <!-- Step 3: Booking Confirmation -->
          <div class="step-content" id="step-3">
            <div class="step-title">${step3Title}</div>
            <div class="step-description">${step3Description} <span id="selected-activity-display">activiteit</span> bij <span id="selected-location-display">locatie</span>.</div>
            
            <div class="iframe-container" id="booking-iframe-container">
              <div id="iframe-placeholder" style="text-align: center; padding: 20px;">
                <div class="loading-spinner" style="margin: 0 auto 20px;"></div>
                <p>De boekingsmodule wordt geladen...</p>
              </div>
              <!-- iframe will be inserted here -->
            </div>
            
            <div class="nav-buttons">
              <button class="btn btn-secondary" id="back-to-activities-btn">${backLabel}</button>
              <button class="btn" id="complete-btn">${completeLabel}</button>
            </div>
          </div>
        </div>
      `;
  
      // Add the wrapper to the container
      container.appendChild(wrapper);
      element.appendChild(container);
  
      // Make the extension visible with animation
      setTimeout(() => {
        wrapper.style.opacity = '1';
      }, 100);
  
      // Setup event listeners
      function setupEventListeners() {
        // Location selection
        const locationCards = wrapper.querySelectorAll('.location-card');
        const nextFromLocationsBtn = wrapper.querySelector('#next-from-locations');
        const cancelBtn = wrapper.querySelector('#cancel-btn');
        const nextFromActivitiesBtn = wrapper.querySelector('#next-from-activities');
        const backToLocationsBtn = wrapper.querySelector('#back-to-locations-btn');
        const backToActivitiesBtn = wrapper.querySelector('#back-to-activities-btn');
        const completeBtn = wrapper.querySelector('#complete-btn');
  
        // Add click event to location cards
        locationCards.forEach(card => {
          card.addEventListener('click', () => {
            // Remove selected class from all cards
            locationCards.forEach(c => c.classList.remove('selected'));
            
            // Add selected class to clicked card
            card.classList.add('selected');
            
            // Update booking state
            bookingState.selectedLocation = card.dataset.location;
            bookingState.selectedLocationName = card.dataset.locationName;
            
            // Enable next button
            if (nextFromLocationsBtn) {
              nextFromLocationsBtn.disabled = false;
            }
          });
        });
  
        // Next button from location selection
        if (nextFromLocationsBtn) {
          nextFromLocationsBtn.addEventListener('click', () => {
            if (bookingState.selectedLocation) {
              goToStep(2);
            }
          });
        }
  
        // Cancel button
        if (cancelBtn) {
          cancelBtn.addEventListener('click', () => {
            cancelBooking();
          });
        }
  
        // Back to locations button
        if (backToLocationsBtn) {
          backToLocationsBtn.addEventListener('click', () => {
            goToStep(1);
          });
        }
  
        // Back to activities button
        if (backToActivitiesBtn) {
          backToActivitiesBtn.addEventListener('click', () => {
            goToStep(2);
          });
        }
  
        // Next button from activities
        if (nextFromActivitiesBtn) {
          nextFromActivitiesBtn.addEventListener('click', () => {
            if (bookingState.selectedActivity) {
              goToStep(3);
            }
          });
        }
  
        // Complete button
        if (completeBtn) {
          completeBtn.addEventListener('click', () => {
            completeBooking();
          });
        }
  
        // Setup carousel navigation
        setupCarousels();
      }
  
      // Setup carousels
      function setupCarousels() {
        // Zoetermeer carousel controls
        const zoetermeerPrevBtn = wrapper.querySelector('#zoetermeer-prev');
        const zoetermeerNextBtn = wrapper.querySelector('#zoetermeer-next');
        const zoetermeerDots = wrapper.querySelectorAll('#zoetermeer-activities .carousel-dot');
        
        // Den Haag carousel controls
        const denhaagPrevBtn = wrapper.querySelector('#denhaag-prev');
        const denhaagNextBtn = wrapper.querySelector('#denhaag-next');
        const denhaagDots = wrapper.querySelectorAll('#denhaag-activities .carousel-dot');
        
        // Book buttons
        const bookButtons = wrapper.querySelectorAll('.book-btn');
        
        // Add click events to carousel buttons
        if (zoetermeerPrevBtn) {
          zoetermeerPrevBtn.addEventListener('click', () => {
            moveCarousel('zoetermeer', -1);
          });
        }
        
        if (zoetermeerNextBtn) {
          zoetermeerNextBtn.addEventListener('click', () => {
            moveCarousel('zoetermeer', 1);
          });
        }
        
        if (denhaagPrevBtn) {
          denhaagPrevBtn.addEventListener('click', () => {
            moveCarousel('denhaag', -1);
          });
        }
        
        if (denhaagNextBtn) {
          denhaagNextBtn.addEventListener('click', () => {
            moveCarousel('denhaag', 1);
          });
        }
        
        // Add click events to carousel dots
        zoetermeerDots.forEach(dot => {
          dot.addEventListener('click', () => {
            jumpToSlide('zoetermeer', parseInt(dot.dataset.index, 10));
          });
        });
        
        denhaagDots.forEach(dot => {
          dot.addEventListener('click', () => {
            jumpToSlide('denhaag', parseInt(dot.dataset.index, 10));
          });
        });
        
        // Add click events to book buttons
        bookButtons.forEach(button => {
          button.addEventListener('click', () => {
            selectActivity(
              button.dataset.activity,
              button.dataset.activityName,
              button.dataset.activityUrl
            );
          });
        });
      }
  
      // Move carousel
      function moveCarousel(location, direction) {
        const carouselTrack = wrapper.querySelector(`#${location}-carousel-track`);
        if (!carouselTrack) return;
        
        const activities = location === 'zoetermeer' ? zoetermeerActivities : denhaagActivities;
        const currentPosition = bookingState.carouselPositions[location];
        const newPosition = currentPosition + direction;
        
        // Validate new position
        if (newPosition < 0 || newPosition >= activities.length) return;
        
        // Update position
        bookingState.carouselPositions[location] = newPosition;
        
        // Move carousel
        carouselTrack.style.transform = `translateX(-${newPosition * 100}%)`;
        
        // Update UI
        updateCarouselControls(location);
      }
  
      // Jump to specific slide
      function jumpToSlide(location, index) {
        const carouselTrack = wrapper.querySelector(`#${location}-carousel-track`);
        if (!carouselTrack) return;
        
        const activities = location === 'zoetermeer' ? zoetermeerActivities : denhaagActivities;
        
        // Validate index
        if (index < 0 || index >= activities.length) return;
        
        // Update position
        bookingState.carouselPositions[location] = index;
        
        // Move carousel
        carouselTrack.style.transform = `translateX(-${index * 100}%)`;
        
        // Update UI
        updateCarouselControls(location);
      }
  
      // Update carousel controls
      function updateCarouselControls(location) {
        const prevBtn = wrapper.querySelector(`#${location}-prev`);
        const nextBtn = wrapper.querySelector(`#${location}-next`);
        const dots = wrapper.querySelectorAll(`#${location}-activities .carousel-dot`);
        const currentPosition = bookingState.carouselPositions[location];
        const activities = location === 'zoetermeer' ? zoetermeerActivities : denhaagActivities;
        
        // Update buttons
        if (prevBtn) {
          prevBtn.disabled = currentPosition === 0;
        }
        
        if (nextBtn) {
          nextBtn.disabled = currentPosition === activities.length - 1;
        }
        
        // Update dots
        dots.forEach((dot, index) => {
          dot.classList.toggle('active', index === currentPosition);
        });
      }
  
      // Select activity
      function selectActivity(activityId, activityName, activityUrl) {
        bookingState.selectedActivity = activityId;
        bookingState.selectedActivityName = activityName;
        bookingState.selectedActivityUrl = activityUrl;
        
        // Update UI
        const nextBtn = wrapper.querySelector('#next-from-activities');
        if (nextBtn) {
          nextBtn.disabled = false;
        }
        
        // Show selected activity name
        const selectedActivityDisplay = wrapper.querySelector('#selected-activity-display');
        const selectedLocationDisplay = wrapper.querySelector('#selected-location-display');
        
        if (selectedActivityDisplay) {
          selectedActivityDisplay.textContent = activityName;
        }
        
        if (selectedLocationDisplay) {
          selectedLocationDisplay.textContent = bookingState.selectedLocationName;
        }
        
        // Directly go to step 3
        goToStep(3);
      }
  
      // Go to specific step
      function goToStep(step) {
        bookingState.currentStep = step;
        
        // Hide all steps
        const stepContents = wrapper.querySelectorAll('.step-content');
        stepContents.forEach(content => {
          content.classList.remove('active');
        });
        
        // Show selected step
        const targetStep = wrapper.querySelector(`#step-${step}`);
        if (targetStep) {
          targetStep.classList.add('active');
        }
        
        // Update progress indicator
        updateProgress(step);
        
        // Step-specific logic
        if (step === 2) {
          // Show activities for selected location
          const zoetermeerActivities = wrapper.querySelector('#zoetermeer-activities');
          const denhaagActivities = wrapper.querySelector('#denhaag-activities');
          
          if (zoetermeerActivities) {
            zoetermeerActivities.style.display = bookingState.selectedLocation === 'zoetermeer' ? 'block' : 'none';
          }
          
          if (denhaagActivities) {
            denhaagActivities.style.display = bookingState.selectedLocation === 'denhaag' ? 'block' : 'none';
          }
          
          // Reset carousel position
          const activeCarouselTrack = wrapper.querySelector(`#${bookingState.selectedLocation}-carousel-track`);
          if (activeCarouselTrack) {
            activeCarouselTrack.style.transform = 'translateX(0)';
            bookingState.carouselPositions[bookingState.selectedLocation] = 0;
            updateCarouselControls(bookingState.selectedLocation);
          }
        }
        
        if (step === 3 && bookingState.selectedActivityUrl) {
          loadBookingIframe(bookingState.selectedActivityUrl);
        }
      }
  
      // Update progress indicator
      function updateProgress(currentStep) {
        // Update step indicators
        const stepIndicators = wrapper.querySelectorAll('.step-indicator');
        const connectors = wrapper.querySelectorAll('.step-connector');
        
        stepIndicators.forEach((indicator, index) => {
          const stepNum = index + 1;
          
          // Reset classes
          indicator.classList.remove('active', 'completed');
          
          // Set appropriate classes
          if (stepNum < currentStep) {
            indicator.classList.add('completed');
          } else if (stepNum === currentStep) {
            indicator.classList.add('active', 'completed');
          }
        });
        
        // Update connectors
        connectors.forEach((connector, index) => {
          const connectionNum = index + 1;
          connector.classList.toggle('active', connectionNum < currentStep);
        });
      }
  
      // Load booking iframe
      function loadBookingIframe(url) {
        const iframeContainer = wrapper.querySelector('#booking-iframe-container');
        const placeholder = wrapper.querySelector('#iframe-placeholder');
        
        if (!iframeContainer) return;
        
        // Create iframe
        const iframe = document.createElement('iframe');
        iframe.src = url;
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.style.border = 'none';
        iframe.allowFullscreen = true;
        
        // Set loading and error handlers
        iframe.onload = function() {
          if (placeholder) {
            placeholder.style.display = 'none';
          }
        };
        
        iframe.onerror = function() {
          if (placeholder) {
            placeholder.innerHTML = 'Er is een fout opgetreden bij het laden van de boekingsmodule. Probeer het later opnieuw.';
          }
        };
        
        // Clear existing iframe if any
        const existingIframe = iframeContainer.querySelector('iframe');
        if (existingIframe) {
          existingIframe.remove();
        }
        
        // Add iframe to container
        iframeContainer.appendChild(iframe);
      }
  
      // Cancel booking
      function cancelBooking() {
        // Signal to Voiceflow that booking was cancelled
        if (window.voiceflow && window.voiceflow.chat) {
          window.voiceflow.chat.interact({
            type: 'request',
            payload: {
              type: 'booking-cancel'
            }
          });
        }
      }
  
      // Complete booking
      function completeBooking() {
        // Prepare data to send back to Voiceflow
        const completionData = {
          location: bookingState.selectedLocationName,
          activity: bookingState.selectedActivityName,
          bookingUrl: bookingState.selectedActivityUrl
        };
        
        // Signal to Voiceflow that booking is complete
        if (window.voiceflow && window.voiceflow.chat) {
          window.voiceflow.chat.interact({
            type: 'request',
            payload: {
              type: 'booking-complete',
              data: completionData
            }
          });
        }
      }
  
      // Initialize event listeners with a slight delay to ensure DOM is ready
      setTimeout(() => {
        setupEventListeners();
      }, delay + 100);
    }
  };

      // YRS: BOOKING PROCESS EXTENSION - VERSION 4 (20 March 2025)

    // EPICX Booking Extension - Responsive Design (desktop & mobile compatible)

    export const EPICXBookingExtension4 = {
        name: 'EPICXBooking',
        type: 'response',
        match: ({ trace }) =>
          trace.type === 'ext_epicxBooking4' || trace.payload?.name === 'ext_epicxBooking4',
        render: ({ trace, element }) => {
          // Extract properties from the payload with default values
          const { 
            title = 'EPICX Boekingsassistent',
            step1Title = 'Kies een Locatie',
            step1Description = 'Selecteer een van onze EPICX locaties om te beginnen.',
            step2Title = 'Kies een Activiteit',
            step2Description = 'Selecteer de activiteit die je wilt doen.',
            step3Title = 'Bevestig je Boeking',
            step3Description = 'Je hebt gekozen voor',
            cancelLabel = 'Annuleren',
            backLabel = 'Terug',
            nextLabel = 'Volgende',
            completeLabel = 'Voltooien',
            borderColor = '#A061F7',
            padding = '0',
            delay = 0,
          } = trace.payload || {};
      
          // Location data
          const locations = [
            {
              id: 'zoetermeer',
              name: 'EPICX Zoetermeer',
              address: 'Saloméschouw 154, 2726 JX Zoetermeer',
              phone: '079-2073001'
            },
            {
              id: 'denhaag',
              name: 'EPICX Den Haag',
              address: 'Groene zoom 9, 2491 EJ Den Haag',
              phone: '070-2092025'
            }
          ];
      
          // Activity data for Zoetermeer
          const zoetermeerActivities = [
            {
              id: 'puppy-party',
              name: 'Puppy Party',
              description: 'Speciaal voor kinderen van 3 t/m 6 jaar. Tijdens de Puppy Jump is alleen de Jump Arena geopend en exclusief voor de allerkleinsten.',
              price: '€ 11,99 p.p voor 90 min',
              image: 'https://epicx.eu/wp-content/uploads/2024/10/900.24562_Puppy_Party.png',
              bookingUrl: 'https://epicxzoetermeer.dewi-online.nl/iframe/club/74/reservations/direct/activity/220'
            },
            {
              id: 'adventure-city',
              name: 'Adventure City',
              description: 'Ervaar Active Pixel, Laser Game, Jump Arena, en Ninja Tag in ons uitgebreide avonturenpark.',
              price: 'Vanaf € 11,99',
              image: 'https://epicx.eu/wp-content/uploads/2024/06/sfeerimpressie_03-1-1020x1024.png',
              bookingUrl: 'https://epicxzoetermeer.dewi-online.nl/iframe/club/74/reservations/direct/category/615'
            },
            {
              id: 'happy-hour',
              name: 'Happy Hour',
              description: 'Geniet van speciale kortingen tijdens onze Happy Hours! Een geweldige kans om meer plezier te hebben voor minder geld.',
              price: 'Speciale tarieven',
              image: 'https://epicx.eu/wp-content/uploads/2024/10/900.24562_Happy_Hour.png',
              bookingUrl: 'https://epicxzoetermeer.dewi-online.nl/iframe/club/74/reservations/direct/category/615'
            },
            {
              id: 'family-friday',
              name: 'Family Friday',
              description: 'Vrijdagavond is familie-avond! Kom samen met het hele gezin en geniet van onze speciale gezinsarrangementen.',
              price: 'Speciale gezinstarieven',
              image: 'https://epicx.eu/wp-content/uploads/2024/09/900.24562_Family_Friday.png',
              bookingUrl: 'https://epicxzoetermeer.dewi-online.nl/iframe/club/74/reservations/direct/category/615'
            }
          ];
      
          // Activity data for Den Haag
          const denhaagActivities = [
            {
              id: 'adventure-city',
              name: 'Adventure City',
              description: 'Ervaar Active Pixel, Laser Game en Mega Bounce in ons uitgebreide avonturenpark.',
              price: 'Vanaf € 11,99',
              image: 'https://epicx.eu/wp-content/uploads/2024/06/sfeerimpressie_03-1-1020x1024.png',
              bookingUrl: 'https://mtdh.dewi-online.nl/iframe/club/152/reservations/direct/category/1044'
            },
            {
              id: 'kidsplay',
              name: 'Kidsplay',
              description: 'Fun House en Peuterzone speciaal voor de jongere kinderen. Veilig spelen en plezier maken!',
              price: 'Vanaf € 9,99',
              image: 'https://epicx.eu/wp-content/uploads/2024/06/Sfeerimpressie_01-8-1021x1024.jpg',
              bookingUrl: 'https://mtdh.dewi-online.nl/iframe/club/152/reservations/direct/category/1044'
            },
            {
              id: 'clay-cafe',
              name: 'Clay Café Lab',
              description: 'Creatieve activiteiten met pottenbakken en verven. Laat je creativiteit de vrije loop!',
              price: 'Vanaf € 12,99',
              image: 'https://epicx.eu/wp-content/uploads/2023/11/Sfeerimpressie_01-1-1021x1024.jpg',
              bookingUrl: 'https://mtdh.dewi-online.nl/iframe/club/152/reservations'
            }
          ];
      
          // Clear element first
          element.innerHTML = '';
      
          // Create a container for the extension
          const container = document.createElement('div');
          container.style.width = '100%';
          container.style.display = 'flex';
          container.style.justifyContent = 'center';
          container.style.alignItems = 'center';
          container.style.maxWidth = '100%';
          container.style.margin = '0';
          container.style.padding = padding;
          container.style.boxSizing = 'border-box';
      
          // Create the main wrapper
          const wrapper = document.createElement('div');
          wrapper.className = 'epicx-booking-extension';
          wrapper.dataset.extensionId = 'epicx-booking';
      
          // Create booking state object to track user selections
          const bookingState = {
            currentStep: 1,
            selectedLocation: null,
            selectedLocationName: null,
            selectedActivity: null,
            selectedActivityName: null,
            selectedActivityUrl: null,
            carouselPositions: {
              zoetermeer: 0,
              denhaag: 0
            }
          };
      
          // Construct the HTML content with responsive styling
          wrapper.innerHTML = `
            <style>
              /* Base styles for extension */
              .epicx-booking-extension * {
                box-sizing: border-box;
                margin: 0;
                padding: 0;
                font-family: 'Nunito Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              }
              
              /* Responsive container styling */
              .epicx-booking-extension {
                width: 100%;
                max-width: 460px;
                min-height: 500px;
                background-color: white;
                border-radius: 10px;
                overflow: hidden;
                position: relative;
                border: 2px solid ${borderColor};
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                display: flex;
                flex-direction: column;
                transition: opacity 0.3s ease;
                opacity: 0;
                margin: 0 auto;
              }
              
              /* Different max-width for different devices */
              @media (max-width: 600px) {
                .epicx-booking-extension {
                  max-width: 100%;
                  min-height: 450px;
                  border-radius: 8px;
                  border-width: 1px;
                }
              }
              
              /* Header */
              .extension-header {
                background: linear-gradient(90deg, #4b193e 0%, #291d3f 50%, #18233E 100%);
                color: white;
                padding: 16px;
                text-align: center;
                font-weight: 600;
                font-size: 18px;
                z-index: 10;
              }
              
              @media (max-width: 600px) {
                .extension-header {
                  padding: 12px;
                  font-size: 16px;
                }
              }
              
              /* Content area */
              .extension-content {
                flex: 1;
                overflow-y: auto;
                padding: 20px;
                position: relative;
                height: calc(100% - 53px);
              }
              
              @media (max-width: 600px) {
                .extension-content {
                  padding: 15px;
                }
              }
              
              /* Progress indicator */
              .progress-container {
                display: flex;
                justify-content: center;
                margin-bottom: 20px;
              }
              
              .progress-steps {
                display: flex;
                align-items: center;
              }
              
              .step-indicator {
                width: 30px;
                height: 30px;
                border-radius: 50%;
                background-color: #e0e0e0;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #555;
                font-weight: 600;
                font-size: 14px;
                position: relative;
              }
              
              @media (max-width: 600px) {
                .step-indicator {
                  width: 24px;
                  height: 24px;
                  font-size: 12px;
                }
              }
              
              .step-indicator.active {
                background-color: #A061F7;
                color: white;
              }
              
              .step-indicator.completed {
                background-color: #A061F7;
                color: white;
              }
              
              .step-connector {
                width: 40px;
                height: 2px;
                background-color: #e0e0e0;
              }
              
              @media (max-width: 600px) {
                .step-connector {
                  width: 30px;
                }
              }
              
              .step-connector.active {
                background-color: #A061F7;
              }
              
              /* Step content */
              .step-content {
                display: none;
                height: calc(100% - 50px);
                overflow-y: auto;
              }
              
              .step-content.active {
                display: block;
                animation: fadeIn 0.3s ease-out;
              }
              
              @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
              }
              
              .step-title {
                font-size: 20px;
                font-weight: 600;
                margin-bottom: 10px;
                color: #18233E;
              }
              
              @media (max-width: 600px) {
                .step-title {
                  font-size: 18px;
                }
              }
              
              .step-description {
                margin-bottom: 20px;
                color: #666;
                font-size: 14px;
              }
              
              @media (max-width: 600px) {
                .step-description {
                  font-size: 13px;
                  margin-bottom: 15px;
                }
              }
              
              /* Location cards */
              .location-cards {
                display: flex;
                flex-direction: column;
                gap: 15px;
                margin-bottom: 20px;
              }
              
              .location-card {
                border: 2px solid #A061F7;
                border-radius: 10px;
                overflow: hidden;
                cursor: pointer;
                transition: all 0.3s ease;
                position: relative;
              }
              
              @media (max-width: 600px) {
                .location-card {
                  border-width: 1px;
                  border-radius: 8px;
                }
              }
              
              .location-card:hover {
                transform: translateY(-3px);
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
              }
              
              .location-card.selected {
                border-color: #E61462;
                background-color: rgba(160, 97, 247, 0.05);
              }
              
              .location-card-header {
                background: linear-gradient(90deg, #4b193e 0%, #291d3f 50%, #18233E 100%);
                color: white;
                padding: 12px;
                font-weight: 600;
                font-size: 16px;
              }
              
              @media (max-width: 600px) {
                .location-card-header {
                  padding: 10px;
                  font-size: 15px;
                }
              }
              
              .location-card-content {
                padding: 15px;
              }
              
              @media (max-width: 600px) {
                .location-card-content {
                  padding: 12px;
                }
              }
              
              .location-card-address {
                color: #555;
                font-size: 14px;
                margin-bottom: 5px;
              }
              
              .location-card-phone {
                color: #555;
                font-size: 14px;
              }
              
              @media (max-width: 600px) {
                .location-card-address,
                .location-card-phone {
                  font-size: 13px;
                }
              }
              
              .location-check {
                position: absolute;
                top: 15px;
                right: 15px;
                width: 24px;
                height: 24px;
                border-radius: 50%;
                background-color: #E61462;
                color: white;
                display: flex;
                align-items: center;
                justify-content: center;
                opacity: 0;
                transition: opacity 0.3s ease;
              }
              
              @media (max-width: 600px) {
                .location-check {
                  width: 20px;
                  height: 20px;
                  top: 12px;
                  right: 12px;
                }
              }
              
              .location-card.selected .location-check {
                opacity: 1;
              }
              
              /* Activity carousel - Responsive card styling */
              .activity-carousel {
                position: relative;
                margin: 0;
                padding: 0;
                width: 100%;
              }
              
              .carousel-container {
                overflow: hidden;
                position: relative;
                margin: 0 auto;
                width: 100%;
              }
              
              .carousel-track {
                display: flex;
                transition: transform 0.5s ease-in-out;
                width: 100%;
              }
              
              .activity-card {
                flex: 0 0 100%;
                width: 100%;
                max-width: 100%;
                margin-right: 0;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                border-radius: 10px;
                overflow: hidden;
                background-color: white;
                border: 2px solid #A061F7;
                display: flex;
                flex-direction: column;
              }
              
              @media (max-width: 600px) {
                .activity-card {
                  border-width: 1px;
                  border-radius: 8px;
                }
              }
              
              .activity-card-image {
                height: 160px;
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
              }
              
              @media (max-width: 600px) {
                .activity-card-image {
                  height: 140px;
                }
              }
              
              .activity-card-content {
                padding: 15px;
                flex: 1;
                display: flex;
                flex-direction: column;
              }
              
              @media (max-width: 600px) {
                .activity-card-content {
                  padding: 12px;
                }
              }
              
              .activity-card-title {
                font-size: 18px;
                font-weight: 600;
                margin-bottom: 10px;
                color: #18233E;
              }
              
              @media (max-width: 600px) {
                .activity-card-title {
                  font-size: 16px;
                  margin-bottom: 8px;
                }
              }
              
              .activity-card-description {
                color: #666;
                font-size: 14px;
                margin-bottom: 15px;
                flex: 1;
              }
              
              @media (max-width: 600px) {
                .activity-card-description {
                  font-size: 13px;
                  margin-bottom: 12px;
                }
              }
              
              .activity-card-price {
                color: #A061F7;
                font-weight: 600;
                margin-bottom: 10px;
              }
              
              .book-btn {
                background: linear-gradient(90deg, #4b193e 0%, #291d3f 50%, #18233E 100%);
                color: white;
                border: none;
                border-radius: 5px;
                padding: 10px 15px;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.3s ease;
                width: 100%;
              }
              
              .book-btn:hover, .book-btn:active {
                background: linear-gradient(90deg, #5c1f4d 0%, #35264d 50%, #25304c 100%);
                transform: translateY(-2px);
              }
              
              @media (max-width: 600px) {
                .book-btn {
                  padding: 8px 12px;
                  font-size: 14px;
                }
              }
              
              /* Carousel controls - improved positioning */
              .carousel-controls {
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top: 15px;
                gap: 10px;
                padding: 0 5px;
              }
              
              .carousel-dot {
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background-color: #ddd;
                cursor: pointer;
                transition: all 0.3s ease;
              }
              
              @media (max-width: 600px) {
                .carousel-dot {
                  width: 8px;
                  height: 8px;
                }
              }
              
              .carousel-dot.active {
                background-color: #A061F7;
                transform: scale(1.2);
              }
              
              .carousel-btn {
                background-color: #A061F7;
                color: white;
                border: none;
                border-radius: 50%;
                width: 36px;
                height: 36px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                transition: all 0.3s ease;
                flex-shrink: 0;
              }
              
              @media (max-width: 600px) {
                .carousel-btn {
                  width: 32px;
                  height: 32px;
                }
              }
              
              .carousel-btn:hover {
                background-color: #18233E;
                transform: scale(1.1);
              }
              
              .carousel-btn:disabled {
                background-color: #ddd;
                cursor: not-allowed;
                opacity: 0.5;
              }
              
              .carousel-btn-icon {
                width: 20px;
                height: 20px;
              }
              
              @media (max-width: 600px) {
                .carousel-btn-icon {
                  width: 16px;
                  height: 16px;
                }
              }
              
              /* Improved iframe container for better visibility */
              .iframe-container {
                margin-top: 20px;
                border-radius: 10px;
                overflow: hidden;
                border: 2px solid #A061F7;
                height: 350px;
                background-color: #f8f9fa;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #666;
                position: relative;
              }
              
              @media (max-width: 600px) {
                .iframe-container {
                  height: 300px;
                  border-width: 1px;
                  border-radius: 8px;
                  margin-top: 15px;
                }
              }
              
              .iframe-container iframe {
                width: 100%;
                height: 100%;
                border: none;
              }
              
              /* Navigation buttons - better positioning */
              .nav-buttons {
                display: flex;
                justify-content: space-between;
                margin-top: 20px;
                width: 100%;
              }
              
              @media (max-width: 600px) {
                .nav-buttons {
                  margin-top: 15px;
                }
              }
              
              .btn {
                background-color: #A061F7;
                color: white;
                border: none;
                border-radius: 5px;
                padding: 10px 20px;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.3s ease;
                flex: 0 0 auto;
              }
              
              @media (max-width: 600px) {
                .btn {
                  padding: 8px 15px;
                  font-size: 14px;
                }
              }
              
              .btn:hover {
                background-color: #18233E;
              }
              
              .btn-secondary {
                background-color: #e0e0e0;
                color: #333;
              }
              
              .btn-secondary:hover {
                background-color: #d0d0d0;
              }
              
              .btn:disabled {
                background-color: #ddd;
                cursor: not-allowed;
                opacity: 0.5;
              }
              
              /* Loading spinner */
              .loading-spinner {
                width: 40px;
                height: 40px;
                border: 4px solid rgba(160, 97, 247, 0.2);
                border-radius: 50%;
                border-top: 4px solid #A061F7;
                animation: spin 1s linear infinite;
              }
              
              @media (max-width: 600px) {
                .loading-spinner {
                  width: 30px;
                  height: 30px;
                  border-width: 3px;
                }
              }
              
              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
              
              /* Custom scrollbar for better UX */
              .extension-content::-webkit-scrollbar {
                width: 5px;
              }
              
              .extension-content::-webkit-scrollbar-track {
                background: #f1f1f1;
                border-radius: 10px;
              }
              
              .extension-content::-webkit-scrollbar-thumb {
                background: #A061F7;
                border-radius: 10px;
              }
              
              .extension-content::-webkit-scrollbar-thumb:hover {
                background: #8224e3;
              }
              
              /* Fix for iOS touch events */
              @supports (-webkit-touch-callout: none) {
                .location-card,
                .carousel-btn,
                .carousel-dot,
                .book-btn,
                .btn {
                  cursor: pointer;
                  -webkit-tap-highlight-color: transparent;
                }
                
                .book-btn:active,
                .btn:active,
                .carousel-btn:active {
                  opacity: 0.9;
                }
              }
            </style>
            
            <div class="extension-header">
              ${title}
            </div>
            
            <div class="extension-content">
              <!-- Progress Indicator -->
              <div class="progress-container">
                <div class="progress-steps">
                  <div class="step-indicator active" id="step-indicator-1">1</div>
                  <div class="step-connector" id="connector-1-2"></div>
                  <div class="step-indicator" id="step-indicator-2">2</div>
                  <div class="step-connector" id="connector-2-3"></div>
                  <div class="step-indicator" id="step-indicator-3">3</div>
                </div>
              </div>
              
              <!-- Step 1: Location Selection -->
              <div class="step-content active" id="step-1">
                <div class="step-title">${step1Title}</div>
                <div class="step-description">${step1Description}</div>
                
                <div class="location-cards">
                  ${locations.map(location => `
                    <div class="location-card" data-location="${location.id}" data-location-name="${location.name}">
                      <div class="location-card-header">${location.name}</div>
                      <div class="location-card-content">
                        <div class="location-card-address">${location.address}</div>
                        <div class="location-card-phone">${location.phone}</div>
                      </div>
                      <div class="location-check">✓</div>
                    </div>
                  `).join('')}
                </div>
                
                <div class="nav-buttons">
                  <button class="btn btn-secondary" id="cancel-btn">${cancelLabel}</button>
                  <button class="btn" id="next-from-locations" disabled>${nextLabel}</button>
                </div>
              </div>
              
              <!-- Step 2: Activity Selection -->
              <div class="step-content" id="step-2">
                <div class="step-title">${step2Title}</div>
                <div class="step-description">${step2Description}</div>
                
                <!-- Zoetermeer Activities Carousel -->
                <div class="activity-carousel" id="zoetermeer-activities" style="display: none;">
                  <div class="carousel-container">
                    <div class="carousel-track" id="zoetermeer-carousel-track">
                      ${zoetermeerActivities.map(activity => `
                        <div class="activity-card" data-activity="${activity.id}" data-activity-name="${activity.name}" data-activity-url="${activity.bookingUrl}">
                          <div class="activity-card-image" style="background-image: url('${activity.image}');"></div>
                          <div class="activity-card-content">
                            <div class="activity-card-title">${activity.name}</div>
                            <div class="activity-card-description">${activity.description}</div>
                            <div class="activity-card-price">${activity.price}</div>
                            <button class="book-btn" data-activity="${activity.id}" data-activity-name="${activity.name}" data-activity-url="${activity.bookingUrl}">Boek ${activity.name}</button>
                          </div>
                        </div>
                      `).join('')}
                    </div>
                  </div>
                  
                  <div class="carousel-controls">
                    <button class="carousel-btn" id="zoetermeer-prev" disabled>
                      <svg class="carousel-btn-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 18L9 12L15 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </button>
                    ${zoetermeerActivities.map((_, index) => `
                      <div class="carousel-dot ${index === 0 ? 'active' : ''}" data-location="zoetermeer" data-index="${index}"></div>
                    `).join('')}
                    <button class="carousel-btn" id="zoetermeer-next">
                      <svg class="carousel-btn-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 18L15 12L9 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
                
                <!-- Den Haag Activities Carousel -->
                <div class="activity-carousel" id="denhaag-activities" style="display: none;">
                  <div class="carousel-container">
                    <div class="carousel-track" id="denhaag-carousel-track">
                      ${denhaagActivities.map(activity => `
                        <div class="activity-card" data-activity="${activity.id}" data-activity-name="${activity.name}" data-activity-url="${activity.bookingUrl}">
                          <div class="activity-card-image" style="background-image: url('${activity.image}');"></div>
                          <div class="activity-card-content">
                            <div class="activity-card-title">${activity.name}</div>
                            <div class="activity-card-description">${activity.description}</div>
                            <div class="activity-card-price">${activity.price}</div>
                            <button class="book-btn" data-activity="${activity.id}" data-activity-name="${activity.name}" data-activity-url="${activity.bookingUrl}">Boek ${activity.name}</button>
                          </div>
                        </div>
                      `).join('')}
                    </div>
                  </div>
                  
                  <div class="carousel-controls">
                    <button class="carousel-btn" id="denhaag-prev" disabled>
                      <svg class="carousel-btn-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 18L9 12L15 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </button>
                    ${denhaagActivities.map((_, index) => `
                      <div class="carousel-dot ${index === 0 ? 'active' : ''}" data-location="denhaag" data-index="${index}"></div>
                    `).join('')}
                    <button class="carousel-btn" id="denhaag-next">
                      <svg class="carousel-btn-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 18L15 12L9 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
                
                <div class="nav-buttons">
                  <button class="btn btn-secondary" id="back-to-locations-btn">${backLabel}</button>
                  <button class="btn" id="next-from-activities" disabled>${nextLabel}</button>
                </div>
              </div>
              
              <!-- Step 3: Booking Confirmation -->
              <div class="step-content" id="step-3">
                <div class="step-title">${step3Title}</div>
                <div class="step-description">${step3Description} <span id="selected-activity-display">activiteit</span> bij <span id="selected-location-display">locatie</span>.</div>
                
                <div class="iframe-container" id="booking-iframe-container">
                  <div id="iframe-placeholder" style="text-align: center; padding: 20px;">
                    <div class="loading-spinner" style="margin: 0 auto 20px;"></div>
                    <p>De boekingsmodule wordt geladen...</p>
                  </div>
                  <!-- iframe will be inserted here -->
                </div>
                
                <div class="nav-buttons">
                  <button class="btn btn-secondary" id="back-to-activities-btn">${backLabel}</button>
                  <button class="btn" id="complete-btn">${completeLabel}</button>
                </div>
              </div>
            </div>
          `;
      
          // Add the wrapper to the container
          container.appendChild(wrapper);
          element.appendChild(container);
      
          // Make the extension visible with animation
          setTimeout(() => {
            wrapper.style.opacity = '1';
          }, 100);
      
          // Setup event listeners
          function setupEventListeners() {
            // Location selection
            const locationCards = wrapper.querySelectorAll('.location-card');
            const nextFromLocationsBtn = wrapper.querySelector('#next-from-locations');
            const cancelBtn = wrapper.querySelector('#cancel-btn');
            const nextFromActivitiesBtn = wrapper.querySelector('#next-from-activities');
            const backToLocationsBtn = wrapper.querySelector('#back-to-locations-btn');
            const backToActivitiesBtn = wrapper.querySelector('#back-to-activities-btn');
            const completeBtn = wrapper.querySelector('#complete-btn');
      
            // Add click event to location cards
            locationCards.forEach(card => {
              card.addEventListener('click', () => {
                // Remove selected class from all cards
                locationCards.forEach(c => c.classList.remove('selected'));
                
                // Add selected class to clicked card
                card.classList.add('selected');
                
                // Update booking state
                bookingState.selectedLocation = card.dataset.location;
                bookingState.selectedLocationName = card.dataset.locationName;
                
                // Enable next button
                if (nextFromLocationsBtn) {
                  nextFromLocationsBtn.disabled = false;
                }
              });
            });
      
            // Next button from location selection
            if (nextFromLocationsBtn) {
              nextFromLocationsBtn.addEventListener('click', () => {
                if (bookingState.selectedLocation) {
                  goToStep(2);
                }
              });
            }
      
            // Cancel button
            if (cancelBtn) {
              cancelBtn.addEventListener('click', () => {
                cancelBooking();
              });
            }
      
            // Back to locations button
            if (backToLocationsBtn) {
              backToLocationsBtn.addEventListener('click', () => {
                goToStep(1);
              });
            }
      
            // Back to activities button
            if (backToActivitiesBtn) {
              backToActivitiesBtn.addEventListener('click', () => {
                goToStep(2);
              });
            }
      
            // Next button from activities
            if (nextFromActivitiesBtn) {
              nextFromActivitiesBtn.addEventListener('click', () => {
                if (bookingState.selectedActivity) {
                  goToStep(3);
                }
              });
            }
      
            // Complete button
            if (completeBtn) {
              completeBtn.addEventListener('click', () => {
                completeBooking();
              });
            }
      
            // Setup carousel navigation
            setupCarousels();
          }
      
          // Setup carousels
          function setupCarousels() {
            // Zoetermeer carousel controls
            const zoetermeerPrevBtn = wrapper.querySelector('#zoetermeer-prev');
            const zoetermeerNextBtn = wrapper.querySelector('#zoetermeer-next');
            const zoetermeerDots = wrapper.querySelectorAll('#zoetermeer-activities .carousel-dot');
            
            // Den Haag carousel controls
            const denhaagPrevBtn = wrapper.querySelector('#denhaag-prev');
            const denhaagNextBtn = wrapper.querySelector('#denhaag-next');
            const denhaagDots = wrapper.querySelectorAll('#denhaag-activities .carousel-dot');
            
            // Book buttons
            const bookButtons = wrapper.querySelectorAll('.book-btn');
            
            // Add click events to carousel buttons
            if (zoetermeerPrevBtn) {
              zoetermeerPrevBtn.addEventListener('click', () => {
                moveCarousel('zoetermeer', -1);
              });
            }
            
            if (zoetermeerNextBtn) {
              zoetermeerNextBtn.addEventListener('click', () => {
                moveCarousel('zoetermeer', 1);
              });
            }
            
            if (denhaagPrevBtn) {
              denhaagPrevBtn.addEventListener('click', () => {
                moveCarousel('denhaag', -1);
              });
            }
            
            if (denhaagNextBtn) {
              denhaagNextBtn.addEventListener('click', () => {
                moveCarousel('denhaag', 1);
              });
            }
            
            // Add click events to carousel dots
            zoetermeerDots.forEach(dot => {
              dot.addEventListener('click', () => {
                jumpToSlide('zoetermeer', parseInt(dot.dataset.index, 10));
              });
            });
            
            denhaagDots.forEach(dot => {
              dot.addEventListener('click', () => {
                jumpToSlide('denhaag', parseInt(dot.dataset.index, 10));
              });
            });
            
            // Add click events to book buttons
            bookButtons.forEach(button => {
              button.addEventListener('click', () => {
                selectActivity(
                  button.dataset.activity,
                  button.dataset.activityName,
                  button.dataset.activityUrl
                );
              });
            });
          }
      
          // Move carousel
          function moveCarousel(location, direction) {
            const carouselTrack = wrapper.querySelector(`#${location}-carousel-track`);
            if (!carouselTrack) return;
            
            const activities = location === 'zoetermeer' ? zoetermeerActivities : denhaagActivities;
            const currentPosition = bookingState.carouselPositions[location];
            const newPosition = currentPosition + direction;
            
            // Validate new position
            if (newPosition < 0 || newPosition >= activities.length) return;
            
            // Update position
            bookingState.carouselPositions[location] = newPosition;
            
            // Move carousel
            carouselTrack.style.transform = `translateX(-${newPosition * 100}%)`;
            
            // Update UI
            updateCarouselControls(location);
          }
      
          // Jump to specific slide
          function jumpToSlide(location, index) {
            const carouselTrack = wrapper.querySelector(`#${location}-carousel-track`);
            if (!carouselTrack) return;
            
            const activities = location === 'zoetermeer' ? zoetermeerActivities : denhaagActivities;
            
            // Validate index
            if (index < 0 || index >= activities.length) return;
            
            // Update position
            bookingState.carouselPositions[location] = index;
            
            // Move carousel
            carouselTrack.style.transform = `translateX(-${index * 100}%)`;
            
            // Update UI
            updateCarouselControls(location);
          }
      
          // Update carousel controls
          function updateCarouselControls(location) {
            const prevBtn = wrapper.querySelector(`#${location}-prev`);
            const nextBtn = wrapper.querySelector(`#${location}-next`);
            const dots = wrapper.querySelectorAll(`#${location}-activities .carousel-dot`);
            const currentPosition = bookingState.carouselPositions[location];
            const activities = location === 'zoetermeer' ? zoetermeerActivities : denhaagActivities;
            
            // Update buttons
            if (prevBtn) {
              prevBtn.disabled = currentPosition === 0;
            }
            
            if (nextBtn) {
              nextBtn.disabled = currentPosition === activities.length - 1;
            }
            
            // Update dots
            dots.forEach((dot, index) => {
              dot.classList.toggle('active', index === currentPosition);
            });
          }
      
          // Select activity
          function selectActivity(activityId, activityName, activityUrl) {
            bookingState.selectedActivity = activityId;
            bookingState.selectedActivityName = activityName;
            bookingState.selectedActivityUrl = activityUrl;
            
            // Update UI
            const nextBtn = wrapper.querySelector('#next-from-activities');
            if (nextBtn) {
              nextBtn.disabled = false;
            }
            
            // Show selected activity name
            const selectedActivityDisplay = wrapper.querySelector('#selected-activity-display');
            const selectedLocationDisplay = wrapper.querySelector('#selected-location-display');
            
            if (selectedActivityDisplay) {
              selectedActivityDisplay.textContent = activityName;
            }
            
            if (selectedLocationDisplay) {
              selectedLocationDisplay.textContent = bookingState.selectedLocationName;
            }
            
            // Directly go to step 3
            goToStep(3);
          }
      
          // Go to specific step
          function goToStep(step) {
            bookingState.currentStep = step;
            
            // Hide all steps
            const stepContents = wrapper.querySelectorAll('.step-content');
            stepContents.forEach(content => {
              content.classList.remove('active');
            });
            
            // Show selected step
            const targetStep = wrapper.querySelector(`#step-${step}`);
            if (targetStep) {
              targetStep.classList.add('active');
            }
            
            // Update progress indicator
            updateProgress(step);
            
            // Step-specific logic
            if (step === 2) {
              // Show activities for selected location
              const zoetermeerActivities = wrapper.querySelector('#zoetermeer-activities');
              const denhaagActivities = wrapper.querySelector('#denhaag-activities');
              
              if (zoetermeerActivities) {
                zoetermeerActivities.style.display = bookingState.selectedLocation === 'zoetermeer' ? 'block' : 'none';
              }
              
              if (denhaagActivities) {
                denhaagActivities.style.display = bookingState.selectedLocation === 'denhaag' ? 'block' : 'none';
              }
              
              // Reset carousel position
              const activeCarouselTrack = wrapper.querySelector(`#${bookingState.selectedLocation}-carousel-track`);
              if (activeCarouselTrack) {
                activeCarouselTrack.style.transform = 'translateX(0)';
                bookingState.carouselPositions[bookingState.selectedLocation] = 0;
                updateCarouselControls(bookingState.selectedLocation);
              }
            }
            
            if (step === 3 && bookingState.selectedActivityUrl) {
              loadBookingIframe(bookingState.selectedActivityUrl);
            }
          }
      
          // Update progress indicator
          function updateProgress(currentStep) {
            // Update step indicators
            const stepIndicators = wrapper.querySelectorAll('.step-indicator');
            const connectors = wrapper.querySelectorAll('.step-connector');
            
            stepIndicators.forEach((indicator, index) => {
              const stepNum = index + 1;
              
              // Reset classes
              indicator.classList.remove('active', 'completed');
              
              // Set appropriate classes
              if (stepNum < currentStep) {
                indicator.classList.add('completed');
              } else if (stepNum === currentStep) {
                indicator.classList.add('active', 'completed');
              }
            });
            
            // Update connectors
            connectors.forEach((connector, index) => {
              const connectionNum = index + 1;
              connector.classList.toggle('active', connectionNum < currentStep);
            });
          }
      
          // Load booking iframe
          function loadBookingIframe(url) {
            const iframeContainer = wrapper.querySelector('#booking-iframe-container');
            const placeholder = wrapper.querySelector('#iframe-placeholder');
            
            if (!iframeContainer) return;
            
            // Create iframe
            const iframe = document.createElement('iframe');
            iframe.src = url;
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.style.border = 'none';
            iframe.allowFullscreen = true;
            
            // Set loading and error handlers
            iframe.onload = function() {
              if (placeholder) {
                placeholder.style.display = 'none';
              }
            };
            
            iframe.onerror = function() {
              if (placeholder) {
                placeholder.innerHTML = 'Er is een fout opgetreden bij het laden van de boekingsmodule. Probeer het later opnieuw.';
              }
            };
            
            // Clear existing iframe if any
            const existingIframe = iframeContainer.querySelector('iframe');
            if (existingIframe) {
              existingIframe.remove();
            }
            
            // Add iframe to container
            iframeContainer.appendChild(iframe);
          }
      
          // Cancel booking
          function cancelBooking() {
            // Signal to Voiceflow that booking was cancelled
            if (window.voiceflow && window.voiceflow.chat) {
              window.voiceflow.chat.interact({
                type: 'request',
                payload: {
                  type: 'booking-cancel'
                }
              });
            }
          }
      
          // Complete booking
          function completeBooking() {
            // Prepare data to send back to Voiceflow
            const completionData = {
              location: bookingState.selectedLocationName,
              activity: bookingState.selectedActivityName,
              bookingUrl: bookingState.selectedActivityUrl
            };
            
            // Signal to Voiceflow that booking is complete
            if (window.voiceflow && window.voiceflow.chat) {
              window.voiceflow.chat.interact({
                type: 'request',
                payload: {
                  type: 'booking-complete',
                  data: completionData
                }
              });
            }
          }
      
          // Initialize event listeners with a slight delay to ensure DOM is ready
          setTimeout(() => {
            setupEventListeners();
          }, delay + 100);
        }
      };