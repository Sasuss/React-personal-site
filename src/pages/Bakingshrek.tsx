import { Link } from "react-router-dom"


function Bakingshrek() {
    return(
        <>
            <Link to={"/"}>
                <div className="rounded-full bg-white p-3 w-fit"><span className="text-black">Zpět na hl. stránku</span></div>
            </Link>
            <h1>Perníkový shrek: Swamp Quest</h1>
            <h2>Baking Shrek: Swapm Quest</h2>

            <h3>Gameplay:</h3>
            <p>Shrek má novej gig. Potřebuje donést pernicky Fioně. Alternativní cesty jako pernicky jinejm princeznám. Týmy po třech, každá postava má classu: Combat, Social, Movement a subclassy.</p>
            <p>Skupinka za kterou hrajeme se hýbe po mapě, mohou nastat různé eventy: menší lokace kde je buď combat nebo social.</p>
            <h4>Combat:</h4>
            <ul>
                <li>Tank, Attack</li>
                <li>Dark souls combat</li>
            </ul>
            <h4>Social:</h4>
            <ul>
                <li>Rizzy, zloděj, chamtivec</li>
                <li>Dialog options a quick time eventy</li>
                <li>Stráže, ostatní postavy, zákazníci, obchodníci</li>
            </ul>
            <h4>Movement:</h4>
            <ul>
                <li>Flying, normal, fast,...</li>
                <li>Každá postava může chodit na jiné políčka a jinou vzdálenost</li>
                <li>Random eventy (závod, subway surfers)</li>
            </ul>
            <p>Každý run stojí zásoby, musíš dělat supply runy třeba do továren. Máš svoje varny, kde děláš pernicky na prodej. Vzdycky můžeš prodat bahno, který nemusíš vařit, ale je špatný.</p>
            <p>Po dohrání unlockujete další itemy, postavy, oblasti s jinými princeznami a můžete zapnout challenge runy</p>
            <h4>Princezny:</h4>
            <ul>
                <li>Sněhurka</li>
                <li>Äriel</li>
                <li>Popelka</li>
            </ul>
            <h4>Itemy:</h4>
            <ul>
                <li>pernicek (heal item - zbozi pro princezny)</li>
                <li>N-1 sunky</li>
                <li>N vajicek</li>
                <li>Pepřenka (stun, blind)</li>
                <li>cibule s vrstvama</li>
                <li>Atd...</li>
            </ul>
        </>
    )
}


export default Bakingshrek