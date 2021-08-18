import hotkeys from 'hotkeys-js';

const queryButtonByText = (query) =>
  [...document.querySelectorAll('button')]
    .filter((div) => div.innerHTML.includes(query))
    .pop();

// Action: save preset
hotkeys('ctrl+s,cmd+s', (event) => {
  event.preventDefault(); // Prevent default for Windows

  const buttonSave = queryButtonByText('Save Preset');
  buttonSave.click();

  return false; // Prevent default for MacOS
});

// Action: next/previous preset
hotkeys('ctrl+left,ctrl+right,cmd+left,cmd+right', (event, handler) => {
  event.preventDefault(); // Prevent default for Windows

  // NOTE: These element selections and traversions are VERY fragile

  const currentPresetLetter = document.querySelectorAll<HTMLSpanElement>(
    '.banklabel',
  )[1].innerText;

  const presetList = [...document.querySelectorAll('.dropdown-menu')][1];
  const presetButtons = [...presetList.querySelectorAll('a')];

  const currentPresetButton = presetButtons.find((button) =>
    new RegExp(`(Preset|Expr) ${currentPresetLetter}`).test(button.innerText),
  );

  const modifier = handler.key.endsWith('left') ? -1 : 1;
  const currentIndex = presetButtons.indexOf(currentPresetButton) + modifier;
  const nextPresetIndex =
    (presetButtons.length + currentIndex) % presetButtons.length; // Roll over to start/end of the list

  presetButtons[nextPresetIndex].click();

  return false; // Prevent default for MacOS
});

// Action: next/previous bank
hotkeys('ctrl+up,ctrl+down,cmd+up,cmd+down', (event, handler) => {
  event.preventDefault(); // Prevent default for Windows

  // NOTE: These element selections and traversions are VERY fragile

  const currentPresetLetter = document.querySelectorAll<HTMLSpanElement>(
    '.banklabel',
  )[0].innerText;

  const presetList = [...document.querySelectorAll('.dropdown-menu')][0];
  const presetButtons = [...presetList.querySelectorAll('a')];

  const currentPresetButton = presetButtons.find((button) =>
    new RegExp(`Bank ${currentPresetLetter}`).test(button.innerText),
  );

  const modifier = handler.key.endsWith('up') ? -1 : 1;
  const currentIndex = presetButtons.indexOf(currentPresetButton) + modifier;
  const nextPresetIndex =
    (presetButtons.length + currentIndex) % presetButtons.length; // Roll over to start/end of the list

  presetButtons[nextPresetIndex].click();

  return false; // Prevent default for MacOS
});

// Action: copy preset
hotkeys('ctrl+c,cmd+c', () => {
  // TODO: copy bank on bank tab

  // Ignore when text is selected
  const selection = window.getSelection();
  if (selection.type === 'Range') return;

  const buttonCopy = document.querySelector<HTMLButtonElement>(
    '[mattooltip="Copy the Preset"]',
  );
  buttonCopy.click();
});

// Action: paste preset
hotkeys('ctrl+v+DISABLED,cmd+v+DISABLED', () => {
  // Ignore when text is selected
  const selection = window.getSelection();
  if (selection.type === 'Range') return;
  // TODO: ignore when cursor is in an input element

  const buttonPaste = document.querySelector<HTMLButtonElement>(
    '[mattooltip*="paste the last copied preset',
  );
  buttonPaste.click();
});
