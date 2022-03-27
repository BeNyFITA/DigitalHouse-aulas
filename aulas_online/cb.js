/*const addHtml = (url)=> 'http://' + url;


let processar =(array,addHtml)=>{
    let retornoMap = array.map((arrayAtual)=>{
        console.log(arrayAtual + addHtml);
        
    })
    return retornoMap
}





//console.log(addHtml('www.facebook.com'));
console.log(processar(['facebook.com', 'youtube.com'],addHtml))*/ 









const adicionarHttp = (url) => 'http://'+url;

function processar(url,adicionarHttp){
    let retornoMap = url.map((arrayAtual)=>{ 
       return adicionarHttp(arrayAtual)
    })
        return retornoMap
    }


console.log(adicionarHttp('wwww.facebook.com'));
console.log(processar(['facebook.com', 'youtube.com'],adicionarHttp));
