function isAfar(text) {
  return true;
}

const dictionary = {
  en: {
    "water": {
      canonical: "water",
      pronunciation: "/ˈwɔː.tər/",
      topic: "nature",
      forms: ["water"],
      senses: [
        {
          pos: "noun",
          definition: "clear liquid essential for life",
          translation: "koo",
          examples: [
            { en: "Drink clean water.", aa: "Koo waaqaa dhaqan." },
            { en: "The well has fresh water.", aa: "Haru koo cawaan leh." }
          ],
          derivatives: [
            { word: "water bottle", translation: "koo qalab" }
          ],
          grammar: { plural: "water" }
        }
      ]
    },
    "go": {
      canonical: "go",
      pronunciation: "/ɡoʊ/",
      topic: "action",
      forms: ["go", "goes", "went", "gone", "going"],
      senses: [
        {
          pos: "verb",
          definition: "move from one place to another",
          translation: "soo",
          examples: [
            { en: "I go to school.", aa: "Ani soo madrassa." },
            { en: "He went to the market.", aa: "Inni soo suuqa." }
          ],
          derivatives: [
            { word: "goer", translation: "soo'aa" }
          ],
          grammar: {
            past: "went",
            pastParticiple: "gone",
            presentParticiple: "going",
            thirdPerson: "goes"
          }
        }
      ]
    },
    "good": {
      canonical: "good",
      pronunciation: "/ɡʊd/",
      topic: "evaluation",
      senses: [
        {
          pos: "adjective",
          definition: "of high quality or desirable",
          translation: "waaqaa",
          examples: [
            { en: "This is good food.", aa: "Kan waaqaa cawaan leh." },
            { en: "She is a good person.", aa: "Adi waaqaa nam leh." }
          ],
          derivatives: [
            { word: "goodness", translation: "waaqaan" }
          ],
          grammar: { comparative: "better", superlative: "best" }
        }
      ]
    },
    "thank you": {
      canonical: "thank you",
      pronunciation: "/θæŋk juː/",
      topic: "social",
      senses: [
        {
          pos: "fixed expression",
          definition: "expression of gratitude",
          translation: "mahadsanid",
          examples: [
            { en: "Thank you for your help.", aa: "Mahadsanid waa waaqaa dhaqan." },
            { en: "Say thank you!", aa: "Mahadsanid waa!" }
          ],
          derivatives: [],
          grammar: {}
        }
      ]
    },
    "house": {
      canonical: "house",
      pronunciation: "/haʊs/",
      topic: "housing",
      forms: ["house", "houses"],
      senses: [
        {
          pos: "noun",
          definition: "building for living",
          translation: "guri",
          examples: [
            { en: "My house is big.", aa: "Guri koo weynaa leh." },
            { en: "They built a new house.", aa: "Inni guri celiyaa leh." }
          ],
          derivatives: [
            { word: "household", translation: "guri dhaqan" }
          ],
          grammar: { plural: "houses" }
        }
      ]
    },
    "eat": {
      canonical: "eat",
      pronunciation: "/iːt/",
      topic: "food",
      forms: ["eat", "eats", "ate", "eaten", "eating"],
      senses: [
        {
          pos: "verb",
          definition: "consume food",
          translation: "cun",
          examples: [
            { en: "We eat rice.", aa: "Nin cun bariis." },
            { en: "He ate bread.", aa: "Inni cun laho." }
          ],
          derivatives: [
            { word: "eater", translation: "cunaa" }
          ],
          grammar: {
            past: "ate",
            pastParticiple: "eaten",
            presentParticiple: "eating",
            thirdPerson: "eats"
          }
        }
      ]
    },
    "big": {
      canonical: "big",
      pronunciation: "/bɪɡ/",
      topic: "size",
      senses: [
        {
          pos: "adjective",
          definition: "of considerable size",
          translation: "weynaa",
          examples: [
            { en: "A big tree.", aa: "Dibi weynaa." },
            { en: "The city is big.", aa: "Magaalada weynaa leh." }
          ],
          derivatives: [
            { word: "bigness", translation: "weynaan" }
          ],
          grammar: { comparative: "bigger", superlative: "biggest" }
        }
      ]
    },
    "hello": {
      canonical: "hello",
      pronunciation: "/həˈloʊ/",
      topic: "social",
      senses: [
        {
          pos: "fixed expression",
          definition: "greeting",
          translation: "salaam",
          examples: [
            { en: "Hello, how are you?", aa: "Salaam, maxaad tahay?" },
            { en: "Say hello to her.", aa: "Adi salaam waa." }
          ],
          derivatives: [],
          grammar: {}
        }
      ]
    },
    "book": {
      canonical: "book",
      pronunciation: "/bʊk/",
      topic: "education",
      forms: ["book", "books"],
      senses: [
        {
          pos: "noun",
          definition: "collection of written pages",
          translation: "buug",
          examples: [
            { en: "Read this book.", aa: "Buug kan akhri." },
            { en: "I have many books.", aa: "Ani buug badan leh." }
          ],
          derivatives: [
            { word: "notebook", translation: "buug xuruud" }
          ],
          grammar: { plural: "books" }
        }
      ]
    },
    "fire": {
      canonical: "fire",
      pronunciation: "/faɪər/",
      forms: ["fire", "fires", "fired", "firing"], // ✅ includes verb forms
      senses: [
        {
          pos: "noun",
          topic: "nature",
          definition: "burning material that produces heat and light",
          translation: "daboo",
          examples: [
            { en: "Be careful with the fire.", aa: "Daboo waaqaa dhaqan." },
            { en: "The fire is warm.", aa: "Daboo dulaan leh." }
          ],
          derivatives: [
            { word: "campfire", translation: "daboo madax" }
          ],
          grammar: { plural: "fires" }
        },
        {
          pos: "verb",
          topic: "employment",
          definition: "dismiss someone from a job",
          translation: "daboo dhaqan", // phrase, not a lemma
          examples: [
            { en: "They fired him for being late.", aa: "Inni daboo dhaqan kana." },
            { en: "She was fired last week.", aa: "Adi berri kula daboo dhaqan leh." }
          ],
          derivatives: [
            { word: "firing", translation: "daboo dhaqan" }
          ],
          grammar: {
            past: "fired",
            pastParticiple: "fired",
            presentParticiple: "firing",
            thirdPerson: "fires"
          }
        }
      ]
    }
  },
  aa: {
    "koo": {
      canonical: "koo",
      pronunciation: "/koː/",
      topic: "nature",
      cefr: "A1",
      forms: ["koo"],
      senses: [
        {
          pos: "noun",
          definition: "clear liquid essential for life",
          translation: "water",
          examples: [
            { en: "Water is life.", aa: "Koo nabad leh." },
            { en: "Give me water.", aa: "Ani koo waa." }
          ],
          derivatives: [
            { word: "koo qalab", translation: "water bottle" }
          ],
          grammar: { plural: "koo" }
        }
      ]
    },
    "soo": {
      canonical: "soo",
      pronunciation: "/soː/",
      topic: "action",
      cefr: "A1",
      forms: ["soo", "sooy", "soo'na"],
      senses: [
        {
          pos: "verb",
          definition: "move from one place to another",
          translation: "go",
          examples: [
            { en: "Go home!", aa: "Soo guri!" },
            { en: "I will go tomorrow.", aa: "Ani soo'na berri." }
          ],
          derivatives: [
            { word: "sootan", translation: "going" }
          ],
          grammar: {
            past: "sooy",
            future: "soo'na"
          }
        }
      ]
    },
    "waaqaa": {
      canonical: "waaqaa",
      pronunciation: "/waːqaː/",
      topic: "evaluation",
      cefr: "A1",
      senses: [
        {
          pos: "adjective",
          definition: "of high quality or desirable",
          translation: "good",
          examples: [
            { en: "Good morning!", aa: "Subax waaqaa!" },
            { en: "This is good.", aa: "Kan waaqaa leh." }
          ],
          derivatives: [
            { word: "waaqaan", translation: "goodness" }
          ],
          grammar: { comparative: "waaqaadhan", superlative: "waaqaaduun" }
        }
      ]
    },
    "mahadsanid": {
      canonical: "mahadsanid",
      pronunciation: "/mahadsanid/",
      topic: "social",
      cefr: "A1",
      senses: [
        {
          pos: "fixed expression",
          definition: "expression of gratitude",
          translation: "thank you",
          examples: [
            { en: "Thank you very much.", aa: "Mahadsanid weynaa." },
            { en: "You're welcome.", aa: "Waa waaqaa dhaqan." }
          ],
          derivatives: [],
          grammar: {}
        }
      ]
    },
    "guri": {
      canonical: "guri",
      pronunciation: "/ɡuri/",
      topic: "housing",
      cefr: "A1",
      forms: ["guri", "guriy"],
      senses: [
        {
          pos: "noun",
          definition: "building for living",
          translation: "house",
          examples: [
            { en: "My house is here.", aa: "Guri koo kana leh." },
            { en: "Build a house.", aa: "Guri celi." }
          ],
          derivatives: [
            { word: "guri dhaqan", translation: "household" }
          ],
          grammar: { plural: "guriy" }
        }
      ]
    },
    "cun": {
      canonical: "cun",
      pronunciation: "/cun/",
      topic: "food",
      cefr: "A1",
      forms: ["cun", "cunay", "cunaa"],
      senses: [
        {
          pos: "verb",
          definition: "consume food",
          translation: "eat",
          examples: [
            { en: "Eat your food.", aa: "Cun cawaan koo." },
            { en: "I ate bread.", aa: "Ani cunay laho." }
          ],
          derivatives: [
            { word: "cunaa", translation: "eater" }
          ],
          grammar: {
            past: "cunay"
          }
        }
      ]
    },
    "weynaa": {
      canonical: "weynaa",
      pronunciation: "/weynaa/",
      topic: "size",
      cefr: "A1",
      forms: ["weynaa", "weynaadhan", "weynaaduun"],
      senses: [
        {
          pos: "adjective",
          definition: "of considerable size",
          translation: "big",
          examples: [
            { en: "Big mountain.", aa: "Buura weynaa." },
            { en: "She is big.", aa: "Adi weynaa leh." }
          ],
          derivatives: [
            { word: "weynaan", translation: "bigness" }
          ],
          grammar: { comparative: "weynaadhan", superlative: "weynaaduun" }
        }
      ]
    },
    "salaam": {
      canonical: "salaam",
      pronunciation: "/salaam/",
      topic: "social",
      cefr: "A1",
      senses: [
        {
          pos: "fixed expression",
          definition: "greeting",
          translation: "hello",
          examples: [
            { en: "Hello, friend!", aa: "Salaam, abba!" },
            { en: "Say hello.", aa: "Salaam waa." }
          ],
          derivatives: [],
          grammar: {}
        }
      ]
    },
    "buug": {
      canonical: "buug",
      pronunciation: "/buuɡ/",
      topic: "education",
      cefr: "A1",
      forms: ["buug", "buugoy"],
      senses: [
        {
          pos: "noun",
          definition: "collection of written pages",
          translation: "book",
          examples: [
            { en: "This book is interesting.", aa: "Buug kan barwaaq leh." },
            { en: "I read a book.", aa: "Ani buug akhriyaa." }
          ],
          derivatives: [
            { word: "buug xuruud", translation: "notebook" }
          ],
          grammar: { plural: "buugoy" }
        }
      ]
    },
    "daboo": {
      canonical: "daboo",
      pronunciation: "/daboː/",
      topic: "nature",
      cefr: "A2",
      forms: ["daboo", "daboota"],
      senses: [
        {
          pos: "noun",
          definition: "burning material that produces heat and light",
          translation: "fire",
          examples: [
            { en: "The fire is out.", aa: "Daboo xidhay." },
            { en: "Make a fire.", aa: "Daboo celi." }
          ],
          derivatives: [
            { word: "daboo madax", translation: "campfire" }
          ],
          grammar: { plural: "daboota" }
        }
        // ✅ ONLY ONE SENSE (noun). No verb sense.
      ]
    }
  }
};

// DOM elements
const searchInput = document.getElementById('searchInput');
const resultsContainer = document.getElementById('resultsContainer');
const directionBtns = document.querySelectorAll('.direction-btn');
const randomBtn = document.getElementById('randomBtn');
const exerciseBtn = document.getElementById('exerciseBtn');
const filterModal = document.getElementById('filterModal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const closeModal = document.getElementById('closeModal');
const exerciseModal = document.getElementById('exerciseModal');
const closeExerciseModal = document.getElementById('closeExerciseModal');
const virtualKeyboard = document.getElementById('virtualKeyboard');
const keyboardToggleBtn = document.getElementById('keyboardToggleBtn');
let currentDirection = 'en-aa';

// Utilities
function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "<")
    .replace(/>/g, ">")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getRandomWord() {
  const dict = currentDirection === 'en-aa' ? dictionary.en : dictionary.aa;
  const words = Object.keys(dict);
  return words[Math.floor(Math.random() * words.length)];
}

function hasLemma(word, direction) {
  const dict = direction === 'en-aa' ? dictionary.en : dictionary.aa;
  return !!dict[word];
}

function searchExamples(query, direction) {
  const dict = direction === 'en-aa' ? dictionary.en : dictionary.aa;
  const results = [];
  for (let word in dict) {
    const entry = dict[word];
    (entry.senses || [entry]).forEach(sense => {
      sense.examples.forEach(example => {
        const textToSearch = direction === 'en-aa' ? example.en : example.aa;
        if (textToSearch.toLowerCase().includes(query)) {
          results.push({
            lemma: word,
            exampleText: example[direction === 'en-aa' ? 'en' : 'aa'],
            translationText: example[direction === 'en-aa' ? 'aa' : 'en']
          });
        }
      });
    });
  }
  return results;
}

// Rendering
function renderEntry(lemma, entry, direction) {
  let sensesHtml = '';

  if (entry.senses && entry.senses.length > 1) {
    sensesHtml = entry.senses.map((sense, index) => {
      const senseData = sense;
      let examplesHtml = sense.examples.map(example => {
        return `
          <li class="example-item">
            <span class="example-original">${escapeHtml(example.en)}</span>
            <span class="example-translation">${escapeHtml(example.aa)}</span>
          </li>
        `;
      }).join('');

      let grammarHtml = '';
      if (sense.grammar && Object.keys(sense.grammar).length > 0) {
        grammarHtml = `<ul class="grammar-list">`;
        for (let key in sense.grammar) {
          grammarHtml += `
            <li class="grammar-item">
              <span class="grammar-label">${key}:</span>
              ${escapeHtml(sense.grammar[key])}
            </li>
          `;
        }
        grammarHtml += `</ul>`;
      }

      let derivativesHtml = sense.derivatives.map(derivative => {
        const hasEntry = hasLemma(derivative.word, direction);
        const wordClass = hasEntry ? 'derivative-word linkable' : 'derivative-word';
        return `
          <div class="derivative-item">
            <span class="${wordClass}" ${hasEntry ? `data-word="${derivative.word}"` : ''}>${escapeHtml(derivative.word)}</span>
            <div class="derivative-translation">${escapeHtml(derivative.translation)}</div>
          </div>
        `;
      }).join('');

      const translationClass = '';

      const sensePos = senseData.pos || entry.pos;
      const senseTopic = senseData.topic || entry.topic;

      let senseTagsHtml = '';
      if (sensePos) {
        senseTagsHtml += `<button class="pos" onclick="showFilterList('pos', '${sensePos}')">${sensePos}</button>`;
      }
      if (senseTopic) {
        senseTagsHtml += `<button class="topic-tag" onclick="showFilterList('topic', '${senseTopic}')">${senseTopic}</button>`;
      }

      return `
        <div class="sense-item">
          <div class="tags-container">${senseTagsHtml}</div>
          <span class="sense-number">${index + 1}.</span>
          <span class="sense-definition">${escapeHtml(senseData.definition)}</span>
          <div class="translation ${translationClass}" onclick="handleTranslationClick('${senseData.translation.replace(/'/g, "\\'")}')"">${escapeHtml(senseData.translation)}</div>
          <div class="section-title">Examples</div>
          <ul class="examples-list">
            ${examplesHtml}
          </ul>
          <div class="section-title">Grammar</div>
          ${grammarHtml}
          <div class="section-title">Derivatives</div>
          <div class="derivatives-list">
            ${derivativesHtml}
          </div>
        </div>
      `;
    }).join('');
  } else {
    const senseData = entry.senses ? entry.senses[0] : entry;
    let examplesHtml = senseData.examples.map(example => {
      return `
        <li class="example-item">
          <span class="example-original">${escapeHtml(example.en)}</span>
          <span class="example-translation">${escapeHtml(example.aa)}</span>
        </li>
      `;
    }).join('');

    let grammarHtml = '';
    if (senseData.grammar && Object.keys(senseData.grammar).length > 0) {
      grammarHtml = `<ul class="grammar-list">`;
      for (let key in senseData.grammar) {
        grammarHtml += `
          <li class="grammar-item">
            <span class="grammar-label">${key}:</span>
            ${escapeHtml(senseData.grammar[key])}
          </li>
        `;
      }
      grammarHtml += `</ul>`;
    }

    let derivativesHtml = senseData.derivatives.map(derivative => {
      const hasEntry = hasLemma(derivative.word, direction);
      const wordClass = hasEntry ? 'derivative-word linkable' : 'derivative-word';
      return `
        <div class="derivative-item">
          <span class="${wordClass}" ${hasEntry ? `data-word="${derivative.word}"` : ''}>${escapeHtml(derivative.word)}</span>
          <div class="derivative-translation">${escapeHtml(derivative.translation)}</div>
        </div>
      `;
    }).join('');

    const translationClass = '';

    const sensePos = senseData.pos || entry.pos;
    const senseTopic = senseData.topic || entry.topic;

    let senseTagsHtml = '';
    if (sensePos) {
      senseTagsHtml += `<button class="pos" onclick="showFilterList('pos', '${sensePos}')">${sensePos}</button>`;
    }
    if (senseTopic) {
      senseTagsHtml += `<button class="topic-tag" onclick="showFilterList('topic', '${senseTopic}')">${senseTopic}</button>`;
    }

    sensesHtml = `
      <div class="sense-item">
        <div class="tags-container">${senseTagsHtml}</div>
        <div class="translation ${translationClass}" onclick="handleTranslationClick('${senseData.translation.replace(/'/g, "\\'")}')"">${escapeHtml(senseData.translation)}</div>
        <div class="section-title">Examples</div>
        <ul class="examples-list">
          ${examplesHtml}
        </ul>
        <div class="section-title">Grammar</div>
        ${grammarHtml}
        <div class="section-title">Derivatives</div>
        <div class="derivatives-list">
          ${derivativesHtml}
        </div>
      </div>
    `;
  }

  // CEFR tag ONLY for Afar (target language)
  let cefrHtml = '';
  if (entry.cefr && currentDirection === 'aa-en') {
    cefrHtml = `<div class="tags-container" style="position:absolute; right:0; top:0;"><button class="level-tag" onclick="showFilterList('cefr', '${entry.cefr}')">${entry.cefr.toUpperCase()}</button></div>`;
  }

  return `
    <div class="entry" style="position:relative;">
      ${cefrHtml}
      <div class="headword">${escapeHtml(entry.canonical)}</div>
      <div class="pronunciation">${escapeHtml(entry.pronunciation)}</div>
      ${sensesHtml}
    </div>
  `;
}

// Interaction
function handleTranslationClick(translationWord) {
  const newDirection = currentDirection === 'en-aa' ? 'aa-en' : 'en-aa';
  showResult(translationWord, newDirection);
  directionBtns.forEach(btn => {
    if (btn.getAttribute('data-direction') === newDirection) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  currentDirection = newDirection;
  searchInput.value = translationWord;
  resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function showResult(lemma, forcedDirection = null) {
  const direction = forcedDirection || currentDirection;
  const query = lemma.toLowerCase().trim();

  let entry = null;
  if (direction === 'en-aa') {
    entry = dictionary.en[query];
  } else {
    entry = dictionary.aa[query];
  }

  if (entry) {
    resultsContainer.innerHTML = renderEntry(lemma, entry, direction);
    attachEventListeners();
    return;
  }

  const dict = direction === 'en-aa' ? dictionary.en : dictionary.aa;
  let foundLemma = null;

  for (let word in dict) {
    const wordEntry = dict[word];
    if (wordEntry && wordEntry.forms && Array.isArray(wordEntry.forms)) {
      if (wordEntry.forms.map(f => f.toLowerCase()).includes(query)) {
        foundLemma = word;
        entry = wordEntry;
        break;
      }
    }
  }

  if (foundLemma) {
    resultsContainer.innerHTML = renderEntry(foundLemma, entry, direction);
    attachEventListeners();
    return;
  }

  const foundInExamples = searchExamples(query, direction);

  if (foundInExamples.length > 0) {
    let examplesHtml = foundInExamples.map(item => {
      const escapedQuery = escapeHtml(query);
      const escapedExample = escapeHtml(item.exampleText);
      const highlightedExample = escapedExample.replace(new RegExp(`(${escapedQuery})`, 'gi'), '<span class="lemma-highlight">$1</span>');
      return `
        <div class="example-match-item">
          <div class="example-original">${highlightedExample}</div>
          <div class="example-translation">${escapeHtml(item.translationText)}</div>
          <button class="goto-lemma-btn" data-word="${item.lemma}"> → View "${item.lemma}" entry</button>
        </div>
      `;
    }).join('');

    resultsContainer.innerHTML = `
      <div class="no-result">
        <p>No lemma found for "${escapeHtml(lemma)}", but it appears in the following example(s):</p>
        <div class="examples-in-context">${examplesHtml}</div>
      </div>
    `;
    attachExampleMatchListeners();
  } else {
    resultsContainer.innerHTML = `<div class="no-result">No entry found for "${escapeHtml(lemma)}"</div>`;
  }
}

function attachEventListeners() {
  document.querySelectorAll('.derivative-word.linkable').forEach(wordEl => {
    wordEl.addEventListener('click', (e) => {
      e.preventDefault();
      const word = wordEl.getAttribute('data-word');
      showResult(word);
      resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

function attachExampleMatchListeners() {
  document.querySelectorAll('.goto-lemma-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const word = btn.getAttribute('data-word');
      searchInput.value = word;
      showResult(word);
      resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

function showFilterList(type, value) {
  filterModal.style.display = 'block';
  modalTitle.textContent = value.toUpperCase();

  const dict = currentDirection === 'en-aa' ? dictionary.en : dictionary.aa;

  const matchingWords = Object.keys(dict).filter(word => {
    const entry = dict[word];
    if (type === 'pos') return entry.pos === value || (entry.senses && entry.senses.some(s => s.pos === value));
    if (type === 'topic') return entry.topic === value || (entry.senses && entry.senses.some(s => s.topic === value));
    if (type === 'cefr') return entry.cefr === value;
  }).sort((a, b) => a.localeCompare(b));

  let listHtml = '<ul class="filter-word-list">';
  matchingWords.forEach(word => {
    listHtml += `<li class="filter-word-item" data-word="${word}">${word}</li>`;
  });
  listHtml += '</ul>';

  modalBody.innerHTML = listHtml;

  document.querySelectorAll('.filter-word-item').forEach(item => {
    item.addEventListener('click', (e) => {
      const word = e.target.getAttribute('data-word');
      searchInput.value = word;
      showResult(word);
      filterModal.style.display = 'none';
      resultsContainer.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

function generateExercise() {
  const dict = currentDirection === 'en-aa' ? dictionary.en : dictionary.aa;
  const words = Object.keys(dict);
  const correctWord = words[Math.floor(Math.random() * words.length)];
  const entry = dict[correctWord];
  const sense = entry.senses ? entry.senses[0] : entry;
  const question = currentDirection === 'en-aa' ? sense.translation : correctWord;
  const correctAnswer = currentDirection === 'en-aa' ? correctWord : sense.translation;

  const incorrectWords = [];
  while (incorrectWords.length < 3) {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    if (randomWord === correctWord) continue;

    const randomEntry = dict[randomWord];
    const randomSense = randomEntry.senses ? randomEntry.senses[0] : randomEntry;
    const randomAnswer = currentDirection === 'en-aa' ? randomWord : randomSense.translation;

    if (!incorrectWords.includes(randomAnswer)) {
      incorrectWords.push(randomAnswer);
    }
  }

  const allAnswers = [correctAnswer, ...incorrectWords].sort(() => Math.random() - 0.5);

  let answersHtml = '';
  allAnswers.forEach(answer => {
    answersHtml += `
      <div class="answer-option" data-answer="${escapeHtml(answer)}">
        ${escapeHtml(answer)}
      </div>
    `;
  });

  const questionText = currentDirection === 'en-aa'
    ? `What is the English word for: "${question}"?`
    : `What is the Afar word for: "${question}"?`;

  exerciseModal.querySelector('.modal-body').innerHTML = `
    <div class="exercise-question">${escapeHtml(questionText)}</div>
    <div class="answer-options">${answersHtml}</div>
    <div class="exercise-feedback" style="display:none;"></div>
    <div class="exercise-buttons">
      <button class="exercise-btn-modal next-btn">Next Question</button>
      <button class="exercise-btn-modal close-btn">Close</button>
    </div>
  `;

  exerciseModal.style.display = 'block';

  document.querySelectorAll('.answer-option').forEach(option => {
    option.addEventListener('click', () => {
      document.querySelectorAll('.answer-option').forEach(opt => {
        opt.classList.remove('selected', 'correct', 'incorrect');
      });
      option.classList.add('selected');
      const isCorrect = option.textContent.trim() === correctAnswer.trim();
      if (isCorrect) {
        option.classList.add('correct');
      } else {
        option.classList.add('incorrect');
        document.querySelectorAll('.answer-option').forEach(opt => {
          if (opt.textContent.trim() === correctAnswer.trim()) {
            opt.classList.add('correct');
          }
        });
      }

      const feedback = document.querySelector('.exercise-feedback');
      feedback.style.display = 'block';
      feedback.innerHTML = isCorrect
        ? `<h4>Correct!</h4><p>Well done!</p>`
        : `<h4>Incorrect</h4><p>The correct answer is: <strong>${escapeHtml(correctAnswer)}</strong></p>`;

      document.querySelector('.next-btn').onclick = generateExercise;
      document.querySelector('.close-btn').onclick = () => {
        exerciseModal.style.display = 'none';
      };
    });
  });
}

// Event Listeners
directionBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    directionBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentDirection = btn.getAttribute('data-direction');
    searchInput.value = '';
    resultsContainer.innerHTML = `<div class="about-section" id="aboutSection">
      <div class="section-title">About</div>
      <p class="about-content">bla blabla bla</p>
    </div>`;
  });
});

searchInput.addEventListener('input', () => {
  const query = searchInput.value.trim();
  if (query) {
    showResult(query);
  } else {
    resultsContainer.innerHTML = `<div class="about-section" id="aboutSection">
      <div class="section-title">About</div>
      <p class="about-content">bla blabla bla</p>
    </div>`;
  }
});

randomBtn.addEventListener('click', () => {
  const word = getRandomWord();
  searchInput.value = word;
  showResult(word);
});

exerciseBtn.addEventListener('click', () => {
  generateExercise();
});

closeModal.addEventListener('click', () => {
  filterModal.style.display = 'none';
});

closeExerciseModal.addEventListener('click', () => {
  exerciseModal.style.display = 'none';
});

keyboardToggleBtn.addEventListener('click', () => {
  virtualKeyboard.style.display = virtualKeyboard.style.display === 'none' ? 'block' : 'none';
  keyboardToggleBtn.textContent = virtualKeyboard.style.display === 'none' ? '⌨️ Show Keyboard' : '⌨️ Hide Keyboard';
});

document.querySelectorAll('.key').forEach(key => {
  key.addEventListener('click', () => {
    const action = key.getAttribute('data-action');
    const input = searchInput;
    const char = key.textContent.trim();

    key.classList.add('key-active');
    setTimeout(() => key.classList.remove('key-active'), 150);

    if (action === 'backspace') {
      input.value = input.value.slice(0, -1);
    } else if (action === 'space') {
      input.value += ' ';
    } else if (char) {
      input.value += char;
    }

    input.focus();
    if (input.value.trim()) {
      showResult(input.value);
    }
  });
});