import hotkeys from 'hotkeys-js';

const queryButtonByText = (query) =>
  [...document.querySelectorAll('button')]
    .filter((div) => div.innerHTML.includes(query))
    .pop();

hotkeys('cmd+s', (event) => {
  event.preventDefault(); // Prevent default for Windows

  const buttonSave = queryButtonByText('Save Preset');
  buttonSave.click();

  return false; // Prevent default for MacOS
});

hotkeys('cmd+left,cmd+right', (event, handler) => {
  event.preventDefault(); // Prevent default for Windows

  // Action: next/previous preset
  // NOTE: These element selections and traversions are VERY fragile

  const currentPresetLetter = document.querySelectorAll('.banklabel')[1]
    .innerText;

  const presetList = [...document.querySelectorAll('.dropdown-menu')][1];
  const presetButtons = [...presetList.querySelectorAll('a')];

  const currentPresetButton = presetButtons.find((button) =>
    new RegExp(`(Preset|Expr) ${currentPresetLetter}`).test(button.innerText),
  );

  const addition = {
    'cmd+left': -1,
    'cmd+right': 1,
  }[handler.key];

  const currentIndex = presetButtons.indexOf(currentPresetButton) + addition;
  const nextPresetIndex =
    (presetButtons.length + currentIndex) % presetButtons.length; // Roll over to start/end of the list

  presetButtons[nextPresetIndex].click();

  return false; // Prevent default for MacOS
});

hotkeys('cmd+up,cmd+down', (event, handler) => {
  event.preventDefault(); // Prevent default for Windows

  // Action: next/previous bank
  // NOTE: These element selections and traversions are VERY fragile

  const currentPresetLetter = document.querySelectorAll('.banklabel')[0]
    .innerText;

  const presetList = [...document.querySelectorAll('.dropdown-menu')][0];
  const presetButtons = [...presetList.querySelectorAll('a')];

  const currentPresetButton = presetButtons.find((button) =>
    new RegExp(`Bank ${currentPresetLetter}`).test(button.innerText),
  );

  const addition = {
    'cmd+up': -1,
    'cmd+down': 1,
  }[handler.key];

  const currentIndex = presetButtons.indexOf(currentPresetButton) + addition;
  const nextPresetIndex =
    (presetButtons.length + currentIndex) % presetButtons.length; // Roll over to start/end of the list

  presetButtons[nextPresetIndex].click();

  return false; // Prevent default for MacOS
});

hotkeys('cmd+c', () => {
  // Action: copy preset
  // TODO: copy bank on bank tab

  // Ignore when text is selected
  const selection = window.getSelection();
  if (selection.type === 'Range') return;

  const buttonCopy = document.querySelector('[mattooltip="Copy the Preset"]');
  buttonCopy.click();
});

hotkeys('cmd+v+DISABLED', () => {
  // Action: paste preset

  // Ignore when text is selected
  const selection = window.getSelection();
  if (selection.type === 'Range') return;
  // TODO: ignore when cursor is in an input element

  const buttonPaste = document.querySelector(
    '[mattooltip*="paste the last copied preset',
  );
  buttonPaste.click();
});
