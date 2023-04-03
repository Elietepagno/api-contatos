import express from 'express';
import router from './router';

const app = express();
const port = 3000;
app.use(express.json());


/* com esse trecho apenas indica que a porta está funcionando
app.get('/', function(request,response){
    response.send('Api contatos rodando...');
});
*/


//Rota principal (/), retornando dados em formato json
app.get('/', function(request,response){
    response.send({
        api_name: 'api-contatos',
        descricao: 'API para gestão de contatos',
        status: 'OK',
        porta: port,
    });
});


//Adicionando um endpoint /sobre para informação do desenvolvedor

app.get('/sobre', function(request, response){
    response.send({
        nome: 'Eliete Pagno',
        email: 'elietepagnoEhotmail.com',
        github: 'github.com/elietepagno'

    });
});


app.use(router);

app.listen(port, function(){
    console.log(`Api up Porta: ${port}`);
});
