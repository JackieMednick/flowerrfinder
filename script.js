let flowerData = {};

window.onload = async () => {
  try {
    const res = await fetch('flowerData.json');
    flowerData = await res.json();
  } catch (e) {
    console.error("Failed to load flowerData.json", e);
  }

  document.getElementById('getFortuneBtn').addEventListener('click', () => {
    const name = document.getElementById('nameInput').value.trim();
    if (!name) return;

    const letter = name.charAt(0).toUpperCase();
    const info = flowerData[letter];
    const fortuneDiv = document.getElementById('fortune');
    const img = document.getElementById('flowerImage');

    if (info) {
      fortuneDiv.innerText = `Your flower is the ${info.flower}. ${info.meaning}`;
      img.src = info.image;
      img.style.display = 'block';
    } else {
      fortuneDiv.innerText = `No flower found for "${letter}".`;
      img.style.display = 'none';
    }
  });
};
