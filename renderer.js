const { ipcRenderer } = require('electron');

// Function to handle category button clicks
function updateMainContent(contentType) {
  ipcRenderer.send('update-content', contentType);  // Send IPC message to main process
}

// Listen for content update from the main process
ipcRenderer.on('update-content-response', (event, contentType) => {
  const mainContent = document.getElementById("main-content");

  if (contentType === 'Burgers') {
    mainContent.innerHTML = `
      <h2>Burgers</h2>
      <p>This is the content for Burgers. SHOW ALL THE ITEMS IN BURGERS</p>
    `;
  } else if (contentType === 'Milkshakes') {
    mainContent.innerHTML = `
      <h2>Milkshakes</h2>
      <p>This is the content for Milkshakes. SHOW ALL THE ITEMS IN MILKSHAKES</p>
    `;
  } else if (contentType === 'Icecreams') {
    mainContent.innerHTML = `
      <h2>Ice Creams</h2>
      <p>This is the content for Ice Creams. SHOW ALL THE ITEMS IN ICECREAMS</p>
    `;
  } else if (contentType === 'Home') {
    mainContent.innerHTML = `
      <h2>Home</h2>
      <p>SUPPOSED TO SHOW THE DEFAULT HOME PAGE HERE IDK HOW</p>
    `;
  } else if (contentType === 'Menu') {
    mainContent.innerHTML = `
      <h2>MENU</h2>
      <p>MENU SHOWING MENU ITEMS AND EDITING/UPDATING THEM</p>
    `;
  } else if (contentType === 'Analytics') {
    mainContent.innerHTML = `
      <h2>ANALYTICS</h2>
      <p>ANALYTICS OF THE PAST SALES.ETC AND EVERYTHING ELSE</p>
    `;
  } else if (contentType === 'History') {
    mainContent.innerHTML = `
      <h2>HISTORY</h2>
      <p>HISTORY OF ALL THE TRANSACTIONS WILL BE SHOWN HERE</p>
    `;
  }
});
