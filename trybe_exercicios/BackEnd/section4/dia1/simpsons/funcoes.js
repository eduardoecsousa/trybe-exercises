"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const fs = require('fs').promises;
const path = require('path');
function printIdName() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield fs.readFile(path.resolve(__dirname, './simpsons.json'));
            const respose = JSON.parse(data);
            respose.map((e) => console.log(`${e.id} - ${e.name}`));
        }
        catch (error) {
            console.error(`Erro na leitura do arquivo:${error} `);
        }
    });
}
function verificaPesonagem(idPerson) {
    const promise = new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
        const data = yield fs.readFile(path.resolve(__dirname, './simpsons.json'));
        const respose = JSON.parse(data);
        const varification = respose.some((e) => e.id === idPerson.toString());
        if (!varification) {
            reject(new Error('id não encontrado'));
        }
        const personagem = respose.find((e) => e.id === idPerson.toString());
        resolve(personagem);
    }));
    return promise;
}
function aguardaPromisse() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(yield verificaPesonagem(4));
    });
}
;
aguardaPromisse();
