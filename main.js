


function igrica() {
    pravac = document.getElementById("raskrsnica").value

    switch (pravac) {

        case "levo":
            p1.innerText = `Došli ste ispred uskog ulaza u pećinu. Možete ući u pećinu ili pokušati da se popnete na brdo iznad nje.`
            document.getElementById("pecina").style.visibility = "visible"
            dugme2.style.display = "block"

            dugme2.addEventListener("click", putLevo)



            break

        case "pravo":
            p4.innerText = `Stigli ste na obalu brze planinske reke. Na obali je čamac bez vesla. Da li ćete probati da se spustite čamcem niz reku ili da preplivate na drugu obalu?`
            document.getElementById("reka").style.visibility = "visible"
            dugme3.style.display = "block"

        dugme3.addEventListener("click", putPravo)

            break

        case "desno":
        p7.innerText = `Došli ste do napuštene lovačke kolibe. Možete otići u štalu koja je pored kolibe ili ući u kolibu.`
        document.getElementById("zgrada").style.visibility = "visible"
        dugme4.style.display= "block"

        dugme4.addEventListener("click", putDesno)



            break

        default:
            "Možete ići pravo, levo ili desno"
    }

}

function putLevo() {

    levo = document.getElementById("pecina").value
    if (levo == "spilja") {
        p2.innerText = `Ušli ste u pećinu i krenuli da tražite izlaz sa druge strane. Iz dubine mraka začulo se potmulo režanje i ispred vas se stvorio mrki medved. Niste imali sreće.`
    }
    else if (levo == "brdo" ) { 
        p3.innerText = `Odmah nakon što ste se popeli na vrh brda videli ste da je druga strana odsečena oštrom liticom koja se spušta u dubok kanjon. Nemate kuda i vukodlak vas je sustigao.`
    }
}

function putPravo() {
    pravo = document.getElementById("reka").value
    if (pravo == "camac") {
        p5.innerText = `Ušli ste u čamac, ali pošto nemate vesla, ne možete da upravljate. Brza planinska reka vas odvodi daleko od vukodlaka, ali pravo na strmoglavi vodopad. Padate sa ogromne visine.`
    }
    else if (pravo == "plivanje") {
        p6.innerText = `Nekako ste se izborili sa brzom rekom i uspeli da pređete na drugu obalu. Ali, pošto vam je trebalo dosta vremena, vukodlak je već tu i čeka vas. Vreme je za večeru.`
    }
}

function putDesno() {
desno = document.getElementById("zgrada").value
if (desno == "koliba") {
    p8.innerText = `Ušli ste u kolibu i tamo pronašli okačen samostrel iznad ognjišta. U pravi čas ste uspeli da zategnete samostrel i kada je vukodlak zakoračio na vrata odapeli ste strelu pravo u njegovo srce. Uspeli ste da se spasite!`
}
else if (desno == "stala") {
    p9.innerText = `Utrčali ste u štalu i tražite bilo šta što bi moglo da vam pomogne da se odbranite. Niste uspeli da pronađete ništa sem jednog štapa. Vukodlak ulazi u štalu. Samo ste odložili neizbežno.`
}
}
dugme1 = document.getElementById("gumb1")
dugme1.addEventListener("click", igrica)
dugme2 = document.getElementById("gumb2")
dugme2.style.display = "none"
dugme3 = document.getElementById("gumb3")
dugme3.style.display = "none"
dugme4 = document.getElementById("gumb4")
dugme4.style.display = "none"
document.getElementById("pecina").style.visibility = "hidden"
document.getElementById("reka").style.visibility = "hidden"
document.getElementById("zgrada").style.visibility = "hidden"

p1 = document.getElementById("pasus1")
p2 = document.getElementById("pasus2")
p3 = document.getElementById("pasus3")
p4 = document.getElementById("pasus4")
p5 = document.getElementById("pasus5")
p6 = document.getElementById("pasus6")
p7 = document.getElementById("pasus7")
p8 = document.getElementById("pasus8")
p9 = document.getElementById("pasus9")




