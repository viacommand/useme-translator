
async function translateText() {
  const input = document.getElementById("inputText").value;
  const targetLang = document.getElementById("targetLang").value;
  const outputBox = document.getElementById("outputText");

  if (!input) {
    outputBox.innerText = "⚠️ Please enter text.";
    return;
  }

  outputBox.innerText = "⏳ Translating...";

  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURI(input)}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    outputBox.innerText = data[0][0][0];
  } catch (err) {
    outputBox.innerText = "❌ Translation failed.";
    console.error(err);
  }
}