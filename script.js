const haidthParagraph = document.querySelector(".hadith-container p");
const hadithNarattorspan = document.querySelector(".hadith-container span");
const hadithGenerateBtn = document.getElementById("generator");

async function getHadith() {
  const data = await fetch("./hadith.json");
  const jsonData = await data.json();
  let hadithNumber = 0;

  (function () {
    let newHadithNumber = Math.floor(Math.random() * jsonData.length);
    if (hadithNumber !== newHadithNumber) {
      hadithNumber = newHadithNumber;
    } else {
      hadithNumber = Math.floor(Math.random() * jsonData.length);
    }
  })();

  (function () {
    const hadith = jsonData[hadithNumber].body;
    const hadithNarattor = jsonData[hadithNumber].narrator;

    haidthParagraph.innerText = hadith;
    hadithNarattorspan.innerText = hadithNarattor;
  })();
}

hadithGenerateBtn.addEventListener("click", getHadith);
