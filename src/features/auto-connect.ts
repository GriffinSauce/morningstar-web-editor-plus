// Auto-connect (once) when not connected and only one device is available

const checkConnected = () => {
  const disconnectDeviceButton = document.querySelector(
    'button[mattooltip="Connect or disconnect your device"]',
  );
  return !!disconnectDeviceButton;
};

const tryConnect = () => {
  const isConnected = checkConnected();
  if (isConnected) return;

  const deviceList = [...document.querySelectorAll('.dropdown-menu')][2];
  const deviceButtons = [...deviceList.querySelectorAll('a')];
  if (deviceButtons.length === 1) {
    deviceButtons[0].click();
    return; // Kill recursion
  }

  // Retry every 1 sec
  setTimeout(() => {
    tryConnect();
  }, 1000);
};

tryConnect();
