let
    Id = (i) => i && document.getElementById(i),
    love = Id('love'), _love = Number(love.innerText) || 0,
    coin = Id('coin'), _coin = Number(coin.innerText) || 100,
    copy = Id('copy'), _copy = Number(copy.innerText) || 0

document.querySelector("body > main").addEventListener("click", (e) => {
    const match = e.target.closest(".copy") || e.target.closest(".call") || e.target.closest(".clear") || e.target.closest(".love");
    if (!match) return; console.log(match.classList[0]);
    ({
        love: () => love.innerText = ++_love,

        copy: () => {
            const number = match.closest(".card").querySelector(".number").innerText;
            navigator.clipboard.writeText(number);
            alert("Copied to clipboard"); copy.innerText = ++_copy;
        },

        call: () => {
            if ((_coin -= 20) < 0) return alert("Not enough coins");
            const card = match.closest(".card"),
                title = card.querySelector(".title").innerText,
                number = card.querySelector(".number").innerText;

            document.querySelector("aside .list").insertAdjacentHTML("beforeend", `
                <li class="">
                    <div>
                        <h2 class="title">${title}</h2>
                        <p class="number">${number}</p>
                    </div>
                    <span class="time">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</span>
                </li>
                `);
            alert(`Calling ${title} on ${number}`); coin.innerText = _coin;
        },

        clear: () => {
            match.closest("#call-history").querySelector(".list").innerHTML = "";
        },

    }[match.classList[0]]())
});
