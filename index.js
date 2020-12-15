
if (document.getElementById("food") != undefined){
    if (document.getElementById("food").id == "food" ){

            words = {
                kanapka: 'sandwich',
                sok: 'juice',
                ryba: 'fish',
                warzywa: 'vegetables',
                owoce: 'fruits',
                kapusta: 'cabbage',
                pomidor: 'tomato',
                makaron: 'noodle',
                chleb: 'bread',
                masło: 'butter',
                ryż: 'rice',
                kawa: 'coffee',
                czekolada: 'chocolate',
                herbata: 'tea',
                ser: 'cheese'
        };
    }
};


if (document.getElementById("hobbies") != undefined){
    if (document.getElementById("hobbies").id == "hobbies" ){

            words = {
                bieganie: 'running',
                fotografia: 'photography',
                tańczyć: 'dancing',
                szachy: 'chess',
                wspinaczka: 'mountain climbing',
                gotowanie: 'cooking',
                rzeźbiarstwo: 'sculpting',
                programowanie: 'programming',
                malowanie: 'painting',
                ogrodnictwo: 'gardening',
                kolarstwo: 'cycling',
                żeglarstwo: 'sailing',
                siatkówka: 'volleyball',
                śpiewanie: 'singing',
                gimnastyka: 'gymnastics'
        };
    }
};


if (document.getElementById("clothes") != undefined){
    if (document.getElementById("clothes").id == "clothes" ){

            words = {
                koszulka: 't-shirt',
                płaszcz: 'coat',
                skarpetki: 'socks',
                sukienka: 'dress',
                okulary: 'glasses',
                koszula: 'shirt',
                krawat: 'tie',
                bielizna: 'underwear',
                sweter: 'jumper',
                buty: 'shoes',
                rękawiczki: 'gloves',
                czapka: 'hat',
                szal: 'scarf',
                spodnie: 'trousers',
                bluza: 'hoodie'
        };
    }
};


if (document.getElementById("feelings") != undefined){
    if (document.getElementById("feelings").id == "feelings" ){

            words = {
                happy: 'szczęśliwy',
                calm: 'spokojny',
                confident: 'pewny siebie',
                brave: 'odważny',
                reliable: 'wiarygodny',
                lucky: 'szczęściarz',
                clever: 'mądry',
                thankful: 'wdzięczny',
                quiet: 'cichy',
                kind: 'uprzejmy',
                positive: 'pozytywny',
                devoted: 'oddany',
                noisy: 'hałaśliwy',
                passionate: 'żarliwy',
                curious: 'ciekawski'
        };
    }
};






let wordsLength = Object.keys(words).length;


const englishInput = document.getElementById("englishValue")
const errorMsg = document.getElementById("errorMsg")
const polishInput = document.getElementById("polishWord")
const button = document.querySelector("button")
const counter = document.querySelector("span")

let i=0;   
polishInput.innerText = Object.keys(words)[i];


button.addEventListener('click', () => {

    
    if(englishInput.value.toLowerCase() == Object.values(words)[i]){
        
        errorMsg.innerText = ``               
        
        polishInput.innerText = Object.keys(words)[i];
        if (i<14){
        i++;
        
        polishInput.innerText = Object.keys(words)[i];
        englishInput.value = ''
        console.log(i);
        counter.innerText = i
        }else{
           polishInput.innerText = "Koniec sesji."
                    englishInput.value = ''
                    counter.innerText = 15
        }
    } else if (i<14){
        console.log(Object.keys(words)[i])
       errorMsg.innerText = Object.keys(words)[i]+ " piszę się " + Object.values(words)[i] ;
    }

});

document.addEventListener('keydown', () => {

    if (event.keyCode === 13){
        if(englishInput.value.toLowerCase() == Object.values(words)[i]){
        
            errorMsg.innerText = ``               
            
            polishInput.innerText = Object.keys(words)[i];
            if (i<14){
            i++;
            
            polishInput.innerText = Object.keys(words)[i];
            englishInput.value = ''
            console.log(i);
            counter.innerText = i
            }else{
               polishInput.innerText = "Koniec sesji."
                        englishInput.value = ''
                        counter.innerText = 15
            }
        } else if (i<14){
            console.log(Object.keys(words)[i])
           errorMsg.innerText = Object.keys(words)[i]+ " piszę się " + Object.values(words)[i] ;
        }
    }
});