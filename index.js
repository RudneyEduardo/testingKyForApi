import ky from 'ky'
import { json } from 'stream/consumers';

ky.get("https://api.postmon.com.br/v1/cep/07040030")
.then(data => { 
    //The data body is a ReadableStream so there is a need to parse it to json 
    return json(data.body) 
})
.then( (data) => {
    //Consoling data 
    console.log(data); 
});

