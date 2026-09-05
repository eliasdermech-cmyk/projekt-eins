const jaButton =
    document.querySelector("#ja-button");

const neinButton =
    document.querySelector("#nein-button");

const echtesNein =
    document.querySelector("#echtes-nein");

const frageBereich =
    document.querySelector("#frage-bereich");

const erfolg =
    document.querySelector("#erfolg");

const neinErgebnis =
    document.querySelector("#nein-ergebnis");

const spruch =
    document.querySelector("#spruch");

const neuerSpruch =
    document.querySelector("#neuer-spruch");

const formular =
    document.querySelector("#antwort-formular");

const zeitAntwort =
    document.querySelector("#zeit-antwort");

const formularStatus =
    document.querySelector("#formular-status");

const musikButton =
    document.querySelector("#musik-button");

const spotifyBereich =
    document.querySelector("#spotify-bereich");


/*
    HIER SPÄTER DEINE FORMSPREE-ADRESSE
    EINTRAGEN.
*/

const FORMULAR_URL =
    "https://formspree.io/f/xoeqlgdo"


/* ------------------------------
   SÜSSE SPRÜCHE
-------------------------------- */

const sprueche = [

    "Du kannst alles schaffen ✨",

    "Du bist einzigartig 🧸",

    "Du bist lustig 🌸",

    "Vergiss nicht, wie toll du bist ⭐",

    "Du hast ein richtig schönes Lächeln ☺️",

    "Bleib genauso verrückt, wie du bist 🧸",

    "Du machst die Welt ein bisschen schöner 🌸",

    "Heute ist ein guter Tag für dich ✨"
];


let letzterSpruch = -1;


function zufaelligerSpruch() {

    let index;

    do {

        index =
            Math.floor(
                Math.random() *
                sprueche.length
            );

    } while (
        index === letzterSpruch &&
        sprueche.length > 1
    );


    letzterSpruch =
        index;


    spruch.classList.add(
        "wechsel"
    );


    setTimeout(
        function () {

            spruch.textContent =
                sprueche[index];

            spruch.classList.remove(
                "wechsel"
            );

        },
        220
    );
}


neuerSpruch.addEventListener(
    "click",
    zufaelligerSpruch
);


zufaelligerSpruch();


/* ------------------------------
   NEIN BUTTON
-------------------------------- */

const neinTexte = [

    "Bist du sicher? 🥺",

    "Wirklich? 😭",

    "Denk nochmal nach 🌸",

    "Keine Chance 🧸"
];


let versuch = 0;


function neinFlieht(event) {

    if (event) {
        event.preventDefault();
    }


    if (
        versuch <
        neinTexte.length
    ) {

        neinButton.textContent =
            neinTexte[versuch];

        versuch++;
    }


    /*
        Nach einigen Versuchen wird
        zusätzlich eine normale
        Ablehnungsmöglichkeit angezeigt.
    */

    if (versuch >= 4) {

        echtesNein.style.display =
            "block";
    }


    const breite =
        neinButton.offsetWidth;

    const hoehe =
        neinButton.offsetHeight;


    const rand =
        15;


    const maxX =
        window.innerWidth -
        breite -
        rand;

    const maxY =
        window.innerHeight -
        hoehe -
        rand;


    const x =
        Math.max(
            rand,
            Math.random() *
            maxX
        );

    const y =
        Math.max(
            rand,
            Math.random() *
            maxY
        );


    neinButton.style.position =
        "fixed";

    neinButton.style.left =
        x + "px";

    neinButton.style.top =
        y + "px";

    neinButton.style.zIndex =
        "500";
}


/* Laptop */

neinButton.addEventListener(
    "mouseenter",
    neinFlieht
);


/* Handy */

neinButton.addEventListener(
    "touchstart",
    neinFlieht,
    {
        passive: false
    }
);


/*
    Falls jemand es doch schafft,
    den Button anzuklicken.
*/

neinButton.addEventListener(
    "click",
    neinFlieht
);


/* echte Ablehnung */

echtesNein.addEventListener(
    "click",
    function () {

        frageBereich.style.display =
            "none";

        neinButton.style.display =
            "none";

        neinErgebnis.style.display =
            "block";

    }
);


/* ------------------------------
   JA
-------------------------------- */

jaButton.addEventListener(
    "click",
    function () {

        frageBereich.style.display =
            "none";

        neinButton.style.display =
            "none";

        echtesNein.style.display =
            "none";

        erfolg.style.display =
            "block";


        konfettiStarten();

        herzenStarten();


        setTimeout(
            function () {

                erfolg.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            },
            150
        );
    }
);


/* ------------------------------
   KONFETTI
-------------------------------- */

function konfettiStarten() {

    const emojis = [

        "💕",
        "💖",
        "💗",
        "✨",
        "🌸",
        "🎉",
        "🥳",
        "⭐"
    ];


    for (
        let i = 0;
        i < 90;
        i++
    ) {

        const element =
            document.createElement(
                "div"
            );


        element.classList.add(
            "konfetti"
        );


        element.textContent =
            emojis[
                Math.floor(
                    Math.random() *
                    emojis.length
                )
            ];


        element.style.left =
            Math.random() *
            100 +
            "vw";


        element.style.fontSize =
            14 +
            Math.random() *
            28 +
            "px";


        element.style.animationDuration =
            2.4 +
            Math.random() *
            3 +
            "s";


        element.style.animationDelay =
            Math.random() *
            0.8 +
            "s";


        document.body.appendChild(
            element
        );


        setTimeout(
            function () {

                element.remove();

            },
            7000
        );
    }
}


/* ------------------------------
   SCHWEBENDE HERZEN
-------------------------------- */

function herzenStarten() {

    for (
        let i = 0;
        i < 25;
        i++
    ) {

        setTimeout(
            function () {

                const herz =
                    document.createElement(
                        "div"
                    );


                herz.classList.add(
                    "herz-pop"
                );


                herz.textContent =
                    Math.random() > 0.5
                        ? "💕"
                        : "💖";


                herz.style.left =
                    Math.random() *
                    90 +
                    "vw";


                herz.style.top =
                    30 +
                    Math.random() *
                    60 +
                    "vh";


                herz.style.fontSize =
                    18 +
                    Math.random() *
                    35 +
                    "px";


                document.body.appendChild(
                    herz
                );


                setTimeout(
                    function () {

                        herz.remove();

                    },
                    1500
                );

            },
            i * 80
        );
    }
}


/* ------------------------------
   MUSIK
-------------------------------- */

musikButton.addEventListener(
    "click",
    function () {

        const sichtbar =
            spotifyBereich.style.display
            === "block";


        if (sichtbar) {

            spotifyBereich.style.display =
                "none";

            musikButton.textContent =
                "Ariana Grande 🎧";

        } else {

            spotifyBereich.style.display =
                "block";

            musikButton.textContent =
                "Musik ausblenden 🎵";

        }
    }
);


/* ------------------------------
   ANTWORT ABSCHICKEN
-------------------------------- */

formular.addEventListener(
    "submit",
    async function (event) {

        event.preventDefault();


        const antwort =
            zeitAntwort.value.trim();


        if (antwort === "") {

            formularStatus.textContent =
                "Schreib noch kurz rein, wann du Zeit hast 🌸";

            return;
        }


        /*
            Solange noch keine
            Formspree-Adresse eingetragen
            wurde, verhindern wir einen
            Fehler.
        */

        if (
            FORMULAR_URL ===
            "DEINE_FORMSPREE_URL"
        ) {

            formularStatus.textContent =
                "Die Antwortfunktion muss noch einmal mit Formspree verbunden werden 💕";

            return;
        }


        formularStatus.textContent =
            "Wird abgeschickt... ✨";


        const daten =
            new FormData();


        daten.append(
            "Antwort",
            antwort
        );


        daten.append(
            "Auswahl",
            "Ja"
        );


        daten.append(
            "Zeitpunkt",
            new Date().toLocaleString(
                "de-DE"
            )
        );


        try {

            const response =
                await fetch(
                    FORMULAR_URL,
                    {
                        method: "POST",

                        body: daten,

                        headers: {
                            Accept:
                                "application/json"
                        }
                    }
                );


            if (response.ok) {

                formularStatus.textContent =
                    "Abgeschickt! 💕✨";

                zeitAntwort.value =
                    "";

                abschickenFeiern();

            } else {

                formularStatus.textContent =
                    "Hat gerade leider nicht geklappt. Versuch es nochmal 🌸";
            }

        } catch (fehler) {

            formularStatus.textContent =
                "Keine Verbindung. Versuch es später nochmal 🌸";

        }
    }
);


function abschickenFeiern() {

    for (
        let i = 0;
        i < 15;
        i++
    ) {

        const herz =
            document.createElement(
                "div"
            );


        herz.classList.add(
            "herz-pop"
        );


        herz.textContent =
            "💕";


        herz.style.left =
            35 +
            Math.random() *
            30 +
            "vw";


        herz.style.top =
            60 +
            Math.random() *
            20 +
            "vh";


        herz.style.fontSize =
            20 +
            Math.random() *
            30 +
            "px";


        document.body.appendChild(
            herz
        );


        setTimeout(
            function () {

                herz.remove();

            },
            1600
        );
    }
}
