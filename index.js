const input = document.getElementById("noofwords");

const container = document.querySelector(".container");

const generateWord = (n) => {
    const letters = " ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let text = " ";

    for (let i = 0 ; i < n ; i++){
        const random = (Math.random() * 15).toFixed(0);
        text+=letters[random];
    }

    return text;
}

let numofwords;

const getData = () =>{

    numofwords = Number(input.value);

    const para = document.createElement("p");

    let data = " ";

    for(let i = 0 ; i < numofwords ; i++){

        const random = (Math.random() * 15).toFixed(0);

        data += generateWord(random).toLowerCase();
        data +=" ";
    }
    

    para.innerText = data;

    para.setAttribute("class","paras");

    container.append(para);
};

