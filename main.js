const input = document.querySelector('#input');
const resultList = document.querySelector('.result-list');
const mainPalette = document.querySelector('.plus');
const tabs = document.querySelector('.tabs');
const mainTab = document.querySelector('.about-contact');
const toggle = document.querySelector('#toggle')

// Activating main Palette
mainTab.addEventListener('click', (e) => {
    mainPalette.classList.toggle('activate');
    tabs.classList.toggle('tab-active');
});
// Tabs
tabs.addEventListener('click', (e) => {
    if (e.target.classList.contains('c1') || e.target.classList.contains('c1-img') || e.target.classList.contains('c1-span')) {
        contactTab.style.display = 'block';
    } else if (e.target.classList.contains('c2') || e.target.classList.contains('c2-img') || e.target.classList.contains('c2-span')) {
        contactTab.style.display = 'block';
    }
});
// Background Toggle
toggle.addEventListener('click', () => {
    document.body.classList.toggle('light')
});

// Search data.json and result it
const inputData = async inputText => {
    const res = await fetch('./stateCapital.json');
    const data = await res.json();

    // Get matches to current text input
    let matches = data.filter(data => {
        const regex = new RegExp(`^${inputText}`, 'gi');
        return data.name.match(regex) || data.abbr.match(regex);
    });

    if (inputText.length === 0) {
        matches = [];
        resultList.innerHTML = '';
    }

    outputHtml(matches);
};

// Show results in HTML
const outputHtml = matches => {
    if (matches.length > 0) {
        const result = matches.map(match => `
        <div class="result--">
        <div>
        <h4>${match.name} (${match.abbr}) <span class="cap">${match.capital}</span></h4>
        <p><strong>Slogan:</strong> ${match.title}</p>
        <p><strong>Postal Code:</strong> ${match.postal}</p>
        </div>
        <hr class="hide-on-lg">
        <small><strong>Latitude:</strong> ${match.lat}, <strong>Longitude:</strong> ${match.lng}</small>
        </div>`).join('');
        resultList.innerHTML = result;
    }
};

input.addEventListener('input', () => inputData(input.value));