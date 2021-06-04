const inquirer = require('inquirer');
require('colors');

const preguntas = [
    {
        type:'list',
        name:'opcion',
        message: 'QUe desea hacer?',
        choices: ['1. Crear lista','opt2','opt3']
    }













];


const inquirerMenu = async () => {

   // console.clear();
    console.log('============================')
    console.log('=== Seleccione una opcion ==')
    console.log('============================')
     
   const opt = await inquirer.prompt(preguntas);

    return opt;


   

}


module.exports = {

    inquirerMenu
}


