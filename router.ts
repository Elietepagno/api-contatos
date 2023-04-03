import {Router} from 'express';
import {isValidateObjectRequest} from './helpers/validate';
import fs from 'fs';

const router = Router();
let id = 0;
let contatos = Array();

router.get('/', function(request, response){
    response.send({
        api_name:'api-contatos',
        descrição: 'API para gestão de contatos',
        status: 'OK',

    })
    //adicionar as configurações da rota
});
router.get('/sobre', function(req, res){
    res.send({
        nome: 'Eliete Pagno',
        email: 'elietepagnoEhotmail.com',
        github: 'github.com/elietepagno'
    })
})

// adicionar as demais rotas (endpoint)
/*router.post('/contato', function(req, res){
    console.log(req.body)
}) // esse acima foi usado anteriormente
*/ 
router.post('/contato', function(req, res){
    let ok = false;
    let mensagem = "";

    if (ok){
        id++;
        contatos.push(req.body);
    }

    /*if (req.body.nome == undefined || req.body.nome == ""){
        if(req.body.nome == ""){
            mensagem = "A propriedade [nome] não deve estar em branco!";
        }
    }else{
        mensagem = "O contato [" + req.body.nome + "] foi salvo com sucesso!";
        ok = true;
    }codigo acima usado anteriormente
    */

    res.send({
        success: ok,
        message: mensagem
    })

    router.get('/contato', function(req, res){
        res.send(contatos);
    })

    /*if (ok){
        contatos.push(req.body);
    }
    resizeBy.send({
        success: onkeydown,
        mensage: mensagem
    })*/
})



export default router;
