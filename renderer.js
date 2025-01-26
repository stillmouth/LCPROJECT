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
      <p>Chicken Burger, Chicken Cheese Burger, Veg Burger</p>
    `;
  } else if (contentType === 'Milkshakes') {
    mainContent.innerHTML = `
      <h2>Milkshakes</h2>
      <p>Vanilla Milkshake, Strawberry Milkshake, Chocolate Milkshake, Oreo Milkshake</p>
    `;
  } else if (contentType === 'Momos') {
    mainContent.innerHTML = `
      <h2>Momos</h2>
      <p>Chicken momos, veg momos, peri peri momos, paneer momos</p>
    `;
  } else if (contentType === 'Wraps') {
    mainContent.innerHTML = `
      <h2>Wraps</h2>
      <p>Chicken Wrap, Veg Wrap, Paneer Wrap</p>
    `;
  } else if (contentType === 'Pops') {
    mainContent.innerHTML = `
      <h2>Pops</h2>
      <p>Chicken Pops, Chicken Cheese Pops, Veg Pops</p>
    `;
  } else if (contentType === 'Fries') {
    mainContent.innerHTML = `
      <h2>Fries</h2>
      <p>Regular Fries, Peri Peri Fries</p>
    `;
  } else if (contentType === 'Cold Coffee') {
    mainContent.innerHTML = `
      <h2>Cold Coffee</h2>
      <p>Hard Rock Coffee, Black Mafia, Coffee on the rocks</p>
    `;
  } else if (contentType === 'Lassi') {
    mainContent.innerHTML = `
      <h2>Lassi</h2>
      <p>Lassi, Mango Lassi, Black Currant Lassi, Banana Lassi</p>
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
