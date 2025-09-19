const
    Id = i => document.getElementById(i),
    // counter = (elm, init = 0) => { let i = init; return v => v == null ? i : (elm.innerText = i += v) },
    counter = (e, i = 0) => v => typeof v !== 'number' || v == null ? i : (e.innerText = i += v, i),

    love = counter(Id('love'), 0),
    coin = counter(Id('coin'), 100),
    copy = counter(Id('copy'), 2);

document.querySelector("body > main").addEventListener("click", (e) => {
    let match; for (let s of ['.love', '.coin', '.copy', '.call', '.clear']) if (match = e.target.closest(s)) break;
    if (!match) return; console.log(match.classList[0]);
    ({
        love: () => love(1),

        copy: () => {
            const number = match.closest(".card").querySelector(".number").innerText;
            navigator.clipboard.writeText(number);
            alert("Copied to clipboard"); copy(1);
        },

        call: () => {
            if (!coin()) return alert("Not enough coins");
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
            alert(`Calling ${title} on ${number}`); coin(-20);
        },

        clear: () => {
            match.closest("#call-history").querySelector(".list").innerHTML = "";
        },

    }[match.classList[0]]())
});
