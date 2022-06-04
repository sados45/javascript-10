//önceki dersten eksik kalanlar:
/*
firstName.setAttribute("id", "first-name")
console.log(firstName)

firstName.setAttribute("placeholder", "First Name")
console.log(firstName)

firstName.setAttribute("class-name", "name class")
console.log(firstName)

const classAttr= firstName.getAttribute("class")
console.log(classAttr)

const classNameAttr = firstName.gettAttribute("class-name")
console.log(classNameAttr)

const firstName = document.querySelectorAll("#first-name")
console.log(firstName)

firstName.className= "form-control first-name"
console.log(firstName)
const classProp = firstName.className
console.log(classProp)

firstName.classList.add("Hasan")
console.log(firstName)//classList ile ekleme ve cikarma imkaninaq sahibiz. classNameden daha etkilidir. var olan bir class iekleyeceksek de classList en sagliklisi.
firstName.setAttribute("class", "Htoker")
console.log(firstName)
firstName.classList.remove("form-control")
console.log(firstName)//burada remove yaparak istedigimiz class i cikarabiliyoruz. 

//setAttribute, getAttribute, className, classList konulari önemli. acikca ifade etmeli ki hoca berbat anlatmis, tekrar baska bir kaynaktan bir önceki videonun ikinci yarisindan itibaren ögrenilecek. dom konusu iyi anlatilamamis. karmakarisik bir anlatim.

// className gibi ClassList lede ekleme yapabiliyoruz. classList le olan bilgilere ayriyeten bilgi ekleyebiliyoruz. 


//innerHTML ile;
// bir Div imizin icini doldurabiliyoruz. hali hazirda yazili olan kod blogunu iptal edip yazdigimizin atsmasini yapabiliyoruz. 
*/
//Hali hazirda hazir olan bir formun icine yeni bir input koymak icin;

let newDiv = document.createElement("div")

newDiv.settAttribute("class", "col-md-12")

let newInput = document.createElement("input")

newInput = document.createElement("input")
newInput.setAttribute("type", "text")
newInput.setAttribute("name", "name")
newInput.setAttribute("placeholder", "Full Name")
newInput.setAttribute("class", "form-control")

newDiv.appendChild(newInput)
console.log(newDiv)
first3.appendChild(newDiv) //böylece bu formun icine Full Name isimli bir input yerlestirdik. 

//insertBefore(): bunu su sirayla yapiyoruz:
//parentNode.insertBefore(newNode, childNode)

// ilk önce parent aliyoruz. 
const parentDiv = document.getElementById("email").parentNode
const emailInput = document.getElementById("email")

parentDiv.insertBefore(newDiv, emailInput)

//böylece Full Name inputunu yukari tasiyarak before özelligiyle email adresi inputunden önce yani yukari tasimis oluyoruz. insertAfter diye birsey yok. jquery de varmis. 

console.log(first3.firstElementChild) //parenti alabilyoruz, onun altindakilerinin de parentini alabiliyoruz. (children)

//node dedigimizde commentler bosluklar icinde ne varsa aliyor. ama child degimizde sadece ilgili divin icini aliyor mesela.
//ama element ile kullanirsak firstElementChild o zaman ilk element ialiyor. Node kapsar elementi diyebiliriz. element bir tag icindeki bilgileri, node ise o tag icindeki commenti bosluklari hepsini almis oluyor. 

let positionDiv = ["Position", "Junior Web Developer", "Senior Web Devloper", "Project Manager"]
//geneldebu kullanilir. alttaki 3satir. 
let jobList = document.getElementById("job-list")
for(let i = 0; i< positionDiv.length; i++) {
    jobList.innerHTML += '<option>${positionDiv[i]}</option>'
}// burada position inputunu olusturduk. bu inputa developer cesitleri eklenmis oldu. secenekleri siralamis olduk. 
// jobList.innerHTML= <option>a</option><option>b</option><option>c</option><option>d</option> yan yana ekledigimiz secenekler, formda tiklayip secme haline getirildi.


// loop konusunda for of konusu;

for (elmnt of positionDiv){
    jobList.innerHTML += '<option>${el}</option>'
}//burada bunu yaparak positionlari tek tek arti ekleyerek yeniden icine girmesi saglaniyor. yukaridaki positionlar developerlikla ilgili kisimlar. formda bu input icinde secenek halinde bize gözüküyor. 


//for each konusu(loop):

positionDiv.forEach(elmnt => jobList.innerHtml += '<option>${el}</option>') //burada herbir elementi aliyor ve yazdiriyor. 

//for of ta sadece elementleri alirken, for each te element index, array gibi uzantilari da alabiliyoruz. aslinda for each bir function islemi yapmis oluyor. 

//biz javascripte stillendirme de yapabiliyoruz.;bunu artik islemler bittiginde son düzeltme anlaminda yapiyoruz. aslinda burasi yeri degil. rutuslama olmus oluyor. 

const button = document.getElementById("submit")//submit isimli bir buton oldugu icib bunu yazdik. 

button.style.witdh= "25%"
button.style.height= "5vh"
button.style.backgroundColor= "purple"
button.style.borderRadius= "15px"

//bunu diger sekilde yazamak istersek;

button.style.cssText = '
witdh: "25%";
height :"5vh";
background-color: "purple";
border-radius: "15px";
'


