// ============================================================
// 1. AUTO-GENERATE LIKERT SCALES (Updated with Images)
// ============================================================
const scaleOptions = [
    { image: 'StronglyDisagree.png', label: 'Strongly Disagree', value: 1 },
    { image: 'Disagree.png',         label: 'Disagree',          value: 2 },
    { image: 'Neutral.png',          label: 'Neutral',           value: 3 },
    { image: 'Agree.png',            label: 'Agree',             value: 4 },
    { image: 'StronglyAgree.png',    label: 'Strongly Agree',    value: 5 }
];

document.querySelectorAll('.question-block').forEach(block => {
    const container = document.createElement('div');
    container.className = 'likert-container';
    scaleOptions.forEach(opt => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'likert-option';
        optionDiv.innerHTML = `
            <button class="emoji-btn" type="button" title="${opt.label}" data-value="${opt.value}">
                <img src="${opt.image}" alt="${opt.label}" class="emoji-img">
            </button>
            <span class="emoji-label">${opt.label}</span>
        `;
        container.appendChild(optionDiv);
    });
    block.appendChild(container);
});

// Likert click logic
document.querySelectorAll('.likert-container').forEach(container => {
    const emojis = container.querySelectorAll('.emoji-btn');
    emojis.forEach(emoji => {
        emoji.addEventListener('click', () => {
            emojis.forEach(e => e.classList.remove('selected'));

            emoji.classList.add('selected');
            container.classList.add('has-selection');
            const parentBlock = container.closest('.question-block');
            parentBlock.classList.remove('error-state');
            const existingError = parentBlock.querySelector('.error-msg');

            if (existingError) existingError.remove();
        });
    });
});

// ============================================================
// 2. PAGE NAVIGATION
// ============================================================
function goToPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    window.scrollTo(0, 0);
}

function validatePage(pageId) {
    const page = document.getElementById(pageId);
    const questions = page.querySelectorAll('.question-block');
    let allAnswered = true;

    questions.forEach(question => {
        question.classList.remove('error-state');
        const oldError = question.querySelector('.error-msg');
        if (oldError) oldError.remove();

        if (!question.querySelector('.emoji-btn.selected')) {
            allAnswered = false;
            question.classList.add('error-state');
            const errorMsg = document.createElement('div');
            errorMsg.className = 'error-msg';
            errorMsg.innerText = '* Please select an answer for this statement.';
            question.appendChild(errorMsg);
        }
    });

    if (!allAnswered) {
        const firstError = page.querySelector('.error-state');
        if (firstError) firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return false;
    }
    return true;
}

// ============================================================
// 3. COLLECT ANSWERS FROM DOM
// ============================================================
function collectAnswers() {
    const answers = {};
    const allBlocks = document.querySelectorAll('.question-block');
    allBlocks.forEach((block, index) => {
        const questionNumber = index + 1; // 1..30
        const selected = block.querySelector('.emoji-btn.selected');
        if (selected) {
            answers[questionNumber] = parseInt(selected.getAttribute('data-value'), 10);
        }
    });
    return answers;
}

// ============================================================
// 4. FINISH ASSESSMENT -> CALCULATE SCORES -> REDIRECT
// ============================================================
function finishAssessment() {
    if (!validatePage('page-q3')) return;

    const answers = collectAnswers();
    const result = calculateFRSScores(answers);

    // Store in sessionStorage for results page
    try {
        sessionStorage.setItem('frsAssessmentResult', JSON.stringify({
            answers,
            scores: result.scores,
            ranked: result.ranked,
            topTrack: result.topTrack,
            topScore: result.topScore,
            timestamp: Date.now()
        }));
    } catch (e) {
        console.warn('Could not save results to sessionStorage:', e);
    }

    // Redirect to results page
    window.location.href = '../results_page/results.html';
}

// ============================================================
// 5. PROGRESS BAR LOGIC
// ============================================================
const totalSets = 3;
let currentSet = 1;
let isTransitioning = false;
const setPositions = { 1: "0%", 2: "50%", 3: "100%" };
const pageMap = { 1: 'page-q1', 2: 'page-q2', 3: 'page-q3' };

function showProgressBar() {
    document.getElementById('progressContainer').classList.add('visible');
}

function setProgressSet(setNumber) {
    currentSet = setNumber;
    updateProgress();
}

function updateProgress() {
    const setTextElem = document.getElementById("currentSetText");
    if (setTextElem) setTextElem.textContent = "Set " + currentSet + " of " + totalSets;

    const marker = document.getElementById("characterMarker");
    const fill = document.getElementById("progressFill");
    const targetPos = setPositions[currentSet];
    marker.style.left = targetPos;
    fill.style.width = targetPos;

    for (let i = 1; i <= totalSets; i++) {
        const node = document.getElementById("node" + i);
        const label = document.getElementById("label" + i);
        if (node && label) {
            node.classList.remove("active", "completed");
            label.classList.remove("active", "completed");
            if (i < currentSet) {
                node.classList.add("completed");
                label.classList.add("completed");
            } else if (i === currentSet) {
                node.classList.add("active");
                label.classList.add("active");
            }
        }
    }
    document.getElementById("backButton").disabled = (currentSet === 1);
    const nextBtn = document.getElementById("nextButton");
    if (currentSet === totalSets) {
        nextBtn.textContent = "Finish";
    } else {
        nextBtn.textContent = "Next Set";
    }
}

function playWalkingGif() {
    const gif = document.getElementById('walkingGif');
    gif.src = 'walking.gif';
}

function stopWalkingGif() {
    const gif = document.getElementById('walkingGif');
    gif.src = 'walking-static.png';
}

function nextSet() {
    if (isTransitioning) return;

    if (currentSet < totalSets) {
        const currentPageId = pageMap[currentSet];
        if (!validatePage(currentPageId)) return;

        isTransitioning = true;
        const nextBtn = document.getElementById("nextButton");
        nextBtn.disabled = true;
        nextBtn.style.opacity = '0.6';
        nextBtn.style.cursor = 'not-allowed';

        playWalkingGif();

        const nextPageId = pageMap[currentSet + 1];
        currentSet++;
        updateProgress();

        setTimeout(() => {
            goToPage(nextPageId);
            isTransitioning = false;
            nextBtn.disabled = false;
            nextBtn.style.opacity = '1';
            nextBtn.style.cursor = 'pointer';
            stopWalkingGif();
        }, 1800);
    } else {
        finishAssessment();
    }
}

function previousSet() {
    if (currentSet > 1 && !isTransitioning) {
        isTransitioning = true;
        const backBtn = document.getElementById("backButton");
        backBtn.disabled = true;
        backBtn.style.opacity = '0.6';
        backBtn.style.cursor = 'not-allowed';

        playWalkingGif();

        const prevPageId = pageMap[currentSet - 1];
        currentSet--;
        updateProgress();

        setTimeout(() => {
            goToPage(prevPageId);
            isTransitioning = false;
            backBtn.disabled = false;
            backBtn.style.opacity = '1';
            backBtn.style.cursor = 'pointer';
            stopWalkingGif();
        }, 1800);
    }
}

document.getElementById('beginBtn').addEventListener('click', function () {
    showProgressBar();
    goToPage('page-q1');
    setProgressSet(1);
    stopWalkingGif();
});

// initialize progress to Set 1 (bar hidden)
updateProgress();

// ============================================================
// 6. OPTIMIZED SCREENSHOT PROTECTION WITH 2-SECOND DISMISS COOLDOWN
// ============================================================
let protectionActive = false;
let isProtectionDismissed = false;
let protectionTriggerTimer = null;
let isThrottled = false;
let dismissCooldownActive = false;
let dismissCooldownTimer = null;
const DISMISS_COOLDOWN_DURATION = 2000;

const shield = document.getElementById('shield1');
const flash = document.getElementById('screenshotFlash');
const black = document.getElementById('screenshotBlack');
const message = document.getElementById('screenshotMessage');
const dismissBtn = document.getElementById('dismissProtection');

function triggerScreenshotProtection() {
  if (protectionActive) return;
  if (isThrottled) return;

  isThrottled = true;
  setTimeout(() => { isThrottled = false; }, 2000);

  protectionActive = true;
  isProtectionDismissed = false;

  dismissCooldownActive = true;
  if (dismissCooldownTimer) {
    clearTimeout(dismissCooldownTimer);
    dismissCooldownTimer = null;
  }

  dismissCooldownTimer = setTimeout(() => {
    dismissCooldownActive = false;
    dismissCooldownTimer = null;
    if (dismissBtn) {
      dismissBtn.style.opacity = '1';
      dismissBtn.style.cursor = 'pointer';
      dismissBtn.disabled = false;
    }
  }, DISMISS_COOLDOWN_DURATION);

  if (!shield.style.opacity || shield.style.opacity !== '0.8') {
    shield.style.opacity = '0.8';
    flash.classList.add('active');
    black.classList.add('active');
    message.classList.add('active');
  }

  if (dismissBtn) {
    dismissBtn.style.opacity = '0.5';
    dismissBtn.style.cursor = 'not-allowed';
    dismissBtn.disabled = true;
  }
}

function dismissProtection(e) {
  if (e) { e.preventDefault(); e.stopPropagation(); }

  if (dismissCooldownActive) {
    if (dismissBtn) {
      dismissBtn.style.transform = 'scale(0.95)';
      setTimeout(() => { dismissBtn.style.transform = ''; }, 200);
    }
    return;
  }

  if (!protectionActive) return;
  if (isProtectionDismissed) return;

  isProtectionDismissed = true;

  flash.classList.remove('active');
  black.classList.remove('active');
  message.classList.remove('active');
  shield.style.opacity = '';

  if (dismissBtn) {
    dismissBtn.style.opacity = '1';
    dismissBtn.style.cursor = 'pointer';
    dismissBtn.disabled = false;
  }

  if (dismissCooldownTimer) {
    clearTimeout(dismissCooldownTimer);
    dismissCooldownTimer = null;
  }
  dismissCooldownActive = false;

  protectionActive = false;
}

if (dismissBtn) {
  dismissBtn.addEventListener('click', dismissProtection);
  dismissBtn.addEventListener('mousedown', (e) => e.stopPropagation());
}

if (message) {
  message.addEventListener('click', function(e) {
    if (e.target === this) dismissProtection(e);
  });
}

// ===== APP SWITCHING DETECTION =====
let isPageVisible = true;
let isPageFocused = true;
let blurTimeout = null;

window.addEventListener('blur', function() {
  isPageFocused = false;
  if (blurTimeout) { clearTimeout(blurTimeout); blurTimeout = null; }
  blurTimeout = setTimeout(() => {
    if (isPageVisible) triggerScreenshotProtection();
    blurTimeout = null;
  }, 50);
});

window.addEventListener('focus', function() {
  isPageFocused = true;
  if (blurTimeout) { clearTimeout(blurTimeout); blurTimeout = null; }
});

document.addEventListener('visibilitychange', function() {
  if (document.hidden) {
    isPageVisible = false;
    triggerScreenshotProtection();
  } else {
    isPageVisible = true;
  }
});

// ===== PRINT SCREEN PROTECTION =====
let keydownCooldown = false;

document.addEventListener('keydown', function(e) {
  if (keydownCooldown) return;
  let shouldTrigger = false;

  if (e.key === 'PrintScreen') {
    shouldTrigger = true;
    e.preventDefault();
  }
  if (e.key === 's' && e.shiftKey && (e.metaKey || e.ctrlKey)) {
    shouldTrigger = true;
    e.preventDefault();
  }
  if (e.key === 'Meta' || e.keyCode === 91 || e.keyCode === 92) {
    shouldTrigger = true;
  }
  if (
    (e.ctrlKey && (e.key === 'c' || e.key === 'C' || e.key === 'u' || e.key === 'U' || e.key === 'x' || e.key === 'X')) ||
    e.key === 'F12'
  ) {
    e.preventDefault();
    return false;
  }

  if (shouldTrigger) {
    keydownCooldown = true;
    triggerScreenshotProtection();
    setTimeout(() => { keydownCooldown = false; }, 300);
  }
});

document.addEventListener('keyup', function(e) {
  if (e.key === 'PrintScreen') {
    triggerScreenshotProtection();
    e.preventDefault();
    return false;
  }
});

document.addEventListener('contextmenu', function(e) { e.preventDefault(); return false; });
document.addEventListener('copy', function(e) { e.preventDefault(); return false; });
document.addEventListener('paste', function(e) { e.preventDefault(); return false; });
document.addEventListener('cut', function(e) { e.preventDefault(); return false; });
document.addEventListener('dragstart', function(e) { e.preventDefault(); return false; });

document.querySelectorAll('img').forEach(img => {
  img.setAttribute('draggable', 'false');
});

window.addEventListener('beforeunload', function() {
  if (protectionTriggerTimer) { clearTimeout(protectionTriggerTimer); protectionTriggerTimer = null; }
  if (dismissCooldownTimer) { clearTimeout(dismissCooldownTimer); dismissCooldownTimer = null; }
  if (blurTimeout) { clearTimeout(blurTimeout); blurTimeout = null; }
});

console.log('🔒 Optimized screenshot protection enabled with 2-second dismiss cooldown.');