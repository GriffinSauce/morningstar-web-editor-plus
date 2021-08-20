import debounce from 'lodash/debounce';

const headerContainer = document.querySelectorAll('.container-fluid')[0];
const selectorsCol = headerContainer.querySelector('.col-md-8');
const bankList = headerContainer.querySelectorAll('.dropdown-menu')[0];
const presetList = headerContainer.querySelectorAll('.dropdown-menu')[1];

const [bankLabel, presetLabel] = [
  ...headerContainer.querySelectorAll<HTMLSpanElement>('.banklabel'),
];

// Add classname so we can add CSS
headerContainer.classList.add('mwep-header-container');
selectorsCol.classList.add('mwep-selectors-col');
bankList.classList.add(`mwep-bankList`);
presetList.classList.add(`mwep-presetList`);

/**
 * Modify the bank list
 */
const modifyBankList = () => {
  const banks = [...bankList.querySelectorAll('a')];
  banks.forEach((bank) => {
    // Renmove leading "Bank"
    // only when relevant, to prevent a loop of changes
    if (bank.innerText.startsWith('Bank')) {
      bank.innerText = bank.innerText.replace(/^Bank /, '');
    }

    // Add active class to current bank
    const activeBank = bankLabel.innerText;
    if (bank.innerText.startsWith(`${activeBank} -`)) {
      bank.classList.add('active');
    } else {
      bank.classList.remove('active');
    }
  });
};

/**
 * Modify the preset list
 */
const modifyPresetList = () => {
  const presets = [...presetList.querySelectorAll('a')];
  presets.forEach((preset) => {
    // Renmove leading "Preset"
    if (preset.innerText.startsWith('Preset')) {
      preset.innerText = preset.innerText.replace(/^Preset /, '');
    }

    // Add active class to current bank
    const activePreset = presetLabel.innerText;
    if (preset.innerText.startsWith(`${activePreset} -`)) {
      preset.classList.add('active');
    } else {
      preset.classList.remove('active');
    }
  });
};

// Debounce to protect performance
// & temporarily disconnect the observer to prevent a loop when we modify the DOM
const onBankListChange = debounce(() => {
  bankListObserver.disconnect();
  modifyBankList();
  bankListObserver.observe(bankList, observerOptions);
}, 500);

// Debounce to protect performance
// & temporarily disconnect the observer to prevent a loop when we modify the DOM
const onPresetListChange = debounce(() => {
  presetListObserver.disconnect();
  modifyPresetList();
  presetListObserver.observe(bankList, observerOptions);
}, 500);

const observerOptions = {
  attributes: true,
  childList: true,
  subtree: true,
  characterData: true,
};

const bankListObserver = new MutationObserver(onBankListChange);
bankListObserver.observe(bankList, observerOptions);

const presetListObserver = new MutationObserver(onPresetListChange);
presetListObserver.observe(presetList, observerOptions);
