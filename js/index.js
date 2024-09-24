const donationBtn = document.getElementById("donation_btn");
const historyBtn = document.getElementById("history_btn");
const donation1Btn = document.getElementById('donation-1');
const donation2Btn = document.getElementById('donation-2');
const donation3Btn = document.getElementById('donation-3');
const historyAdding = document.getElementById('history-section');

const totalAmaount = parseFloat(document.getElementById('total_amaount').innerText);
const donateNoakhali = parseFloat(document.getElementById('donate_noakhali').innerText);
const inputNoakhali = parseFloat(document.getElementById('input_noakhali').value);

const blogBtn = document.getElementById("blog_btn");
blogBtn.addEventListener('click', function () {
    window.location.href = "./home.html"
})

donationBtn.addEventListener('click', function () {
    const totalBtn = document.getElementById("total_section");
    totalBtn.classList.remove("hidden");
    historyBtn.classList.remove("bg-[#B4F461]")
    donationBtn.classList.add("bg-[#B4F461]")
    historyAdding.classList.add('hidden');
})

historyBtn.addEventListener('click', function () {
    const totalBtn = document.getElementById("total_section");
    totalBtn.classList.add("hidden");
    historyBtn.classList.add("bg-[#B4F461]")
    donationBtn.classList.remove("bg-[#B4F461]")
    historyAdding.classList.remove('hidden');
})

donation1Btn.addEventListener("click", function () {
    const totalAmaount = parseFloat(document.getElementById('total_amaount').innerText);
    const donateNoakhali = parseFloat(document.getElementById('donate_noakhali').innerText);
    const inputNoakhali = parseFloat(document.getElementById('input_noakhali').value);
    let historySection1 = document.getElementById('history-section1');
    if (!isNaN(inputNoakhali) && inputNoakhali > 0 && inputNoakhali < totalAmaount) {
        let finalAmaount = totalAmaount - inputNoakhali;
        let totalDonation = donateNoakhali + inputNoakhali;
        document.getElementById('donate_noakhali').innerText = totalDonation.toFixed(2);
        document.getElementById('total_amaount').innerText = finalAmaount.toFixed(2);
        historySection1.innerHTML = `
        <p>${inputNoakhali} Taka is Donated for Donate for fload at nouakhali, Bangladesh. </p>
        <p>date: ${new Date()}</p>
        `
        alert("You have donated successfully! thanks!");
    }
    else {
        alert('Invalid Number.')
    }
})

donation2Btn.addEventListener("click", function () {
    const totalAmaount = parseFloat(document.getElementById('total_amaount').innerText);
    const donateFeni = parseFloat(document.getElementById('donate_feni').innerText);
    const inputFeni = parseFloat(document.getElementById('input_feni').value);
    if (!isNaN(inputFeni) && inputFeni > 0 && inputFeni < totalAmaount) {
        let finalAmaount = totalAmaount - inputFeni;
        let totalDonation = donateFeni + inputFeni;
        document.getElementById('donate_feni').innerText = totalDonation.toFixed(2);
        document.getElementById('total_amaount').innerText = finalAmaount.toFixed(2);
        alert("You have donated successfully! thanks!");
    }
    else {
        alert('Invalid Number.')
    }
})

donation3Btn.addEventListener("click", function () {
    const totalAmaount = parseFloat(document.getElementById('total_amaount').innerText);
    const donateForHeros = parseFloat(document.getElementById('donate_for_heros').innerText);
    const inputForHeros = parseFloat(document.getElementById('input_for_heros').value);
    if (!isNaN(inputForHeros) && inputForHeros > 0 && inputForHeros < totalAmaount) {
        let finalAmaount = totalAmaount - inputForHeros;
        let totalDonation = donateForHeros + inputForHeros;
        document.getElementById('donate_for_heros').innerText = totalDonation.toFixed(2);
        document.getElementById('total_amaount').innerText = finalAmaount.toFixed(2);
        alert("You have donated successfully! thanks!");
    }
    else {
        alert('Invalid Number.')
    }
})