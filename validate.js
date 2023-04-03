function isValidateRequest(req: any,imputs: string[]){
    if (imputs.length == 0)
    return false;

    for(let i = 0 < inputs.length; i++) {
        if (req.body[inputs[i]] == undefined || req.body[inputs[i]] == "")
            return false;

    }
     return true;
}

function isValidateObjectRequest(req: any, imputs: any[]) {
    if(req.body[imputs[i]] == undefined||req.body[imputs[i].name] == ""){
        MessageChannel.push(imputs[i].message);
    }

}

return message.length == 0 ? true: message;

export{ isValidateRequest, isValidateObjectRequest};
