const names = ["Lyra", "Kael", "Juno", "Marek", "Elara", "Riven", "Sorrel", "Zephra", "Calix", "Nyra"];
const traits = [
  "soft-hearted", "sarcastic", "quiet but observant", "reckless", "fiercely loyal", "haunted by the past",
  "code mute, always coding", "tragically cheerful, always smiling to hide pain"
];
const traumas = [
  "lost their sibling in a fire",
  "was exiled from their hometown",
  "betrayed by their best friend",
  "survived a shipwreck",
  "grew up in a cult",
  "watched demons slaughter their parents during a village raid",
  "witnessed her mother killed by her father as a child, and stayed silent to survive"
];
const dreams = [
  "wants to become a famous storyteller",
  "secretly desires peace",
  "dreams of finding a lost city",
  "wants revenge",
  "hopes to restore a broken family",
  "wants to become rich and escape her cursed bloodline",
  "became a mage after discovering a forbidden stone in the forest"
];
const conflicts = [
  "but they fear intimacy",
  "but they keep running away",
  "but their anger clouds their path",
  "but fate keeps pulling them elsewhere",
  "but they feel unworthy",
  "but fear still wraps around them like a second skin",
  "but is haunted by silence and the weight of forbidden power"
];

// 🔥 Your custom characters
const specialCharacters = [
  {
    name: "Nama Alheri Jokson",
    trait: "code mute, always focused on coding",
    trauma: "watched demons slaughter their parents during a village raid",
    dream: "became a mage after discovering a forbidden stone in the forest",
    conflict: "but is haunted by silence and the weight of forbidden power"
  },
  {
    name: "Gloria Valerie",
    trait: "tragically cheerful, always smiling to hide pain",
    trauma: "witnessed her mother killed by her father as a child, and stayed silent to survive",
    dream: "wants to become rich and escape her cursed bloodline",
    conflict: "but fear still wraps around her like a second skin"
  }
];

function generateBackstory() {
  const useSpecial = Math.random() < 0.25; // 25% chance to show a special character

  if (useSpecial) {
    const sc = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    const backstory = `
      Meet <strong>${sc.name}</strong>. A <em>${sc.trait}</em> soul who ${sc.trauma}.
      They ${sc.dream}, ${sc.conflict}.
    `;
    document.getElementById("backstory").innerHTML = backstory;
    return;
  }

  // Otherwise, generate a random character
  const name = names[Math.floor(Math.random() * names.length)];
  const trait = traits[Math.floor(Math.random() * traits.length)];
  const trauma = traumas[Math.floor(Math.random() * traumas.length)];
  const dream = dreams[Math.floor(Math.random() * dreams.length)];
  const conflict = conflicts[Math.floor(Math.random() * conflicts.length)];

  const backstory = `
    Meet <strong>${name}</strong>. A <em>${trait}</em> soul who ${trauma}.
    They ${dream}, ${conflict}.
  `;

  document.getElementById("backstory").innerHTML = backstory;
}

// Auto-run on page load
window.onload = generateBackstory;
