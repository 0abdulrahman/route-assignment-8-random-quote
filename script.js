const haidthParagraph = document.querySelector(".hadith-container p");
const hadithNarattorspan = document.querySelector(".hadith-container span");
const hadithGenerateBtn = document.getElementById("generator");

async function getHadith() {
  const data = await fetch("./hadith.json");
  const jsonData = await data.json();

  let hadithNumber = Math.floor(Math.random() * jsonData.length);
  let newHadithNumber = Math.floor(Math.random() * jsonData.length);
  while (hadithNumber === newHadithNumber) {
    newHadithNumber = Math.floor(Math.random() * jsonData.length);
  }
  hadithNumber = newHadithNumber;

  (function () {
    const hadith = jsonData[hadithNumber].body;
    const hadithNarattor = jsonData[hadithNumber].narrator;
    haidthParagraph.innerText = hadith;
    hadithNarattorspan.innerText = hadithNarattor;
  })();
}

hadithGenerateBtn.addEventListener("click", getHadith);
