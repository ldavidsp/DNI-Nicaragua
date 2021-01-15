/**
 * 
 * @param {number} areaCode
 * @returns {object}
 */
function GetLocation(areaCode){
    let result = {
        Department:'',
        Municipality:''
    }
    switch(areaCode){
        case 361:
            result.Department = 'Boaco';
            result.Municipality = 'Boaco';
            break;
        case 362:
            result.Department = 'Boaco';
            result.Municipality = 'Camoapa';
            break;
        case 363:
            result.Department = 'Boaco';
            result.Municipality = 'Santa Lucía';
            break;
        case 364:
            result.Department = 'Boaco';
            result.Municipality = 'San José Del Remate';
            break;
        case 365:
            result.Department = 'Boaco';
            result.Municipality = 'San Lorenzo';
            break;
        case 366:
            result.Department = 'Boaco';
            result.Municipality = 'Teustepe';
            break;
        case 41:
            result.Department = 'Carazo';
            result.Municipality = 'Jinotepe';
            break;
        case 42:
            result.Department = 'Carazo';
            result.Municipality = 'Diriamba';
            break;
        case 43:
            result.Department = 'Carazo';
            result.Municipality = '	San Marcos';
            break;
        case 44:
            result.Department = 'Carazo';
            result.Municipality = 'Santa Teresa';
            break;
        case 45:
            result.Department = 'Carazo';
            result.Municipality = 'Dolores';
            break;
        case 46:
            result.Department = 'Carazo';
            result.Municipality = 'La Paz Carazo';
            break;
        case 47:
            result.Department = 'Carazo';
            result.Municipality = 'El Rosario';
            break;
        case 48:
            result.Department = 'Carazo';
            result.Municipality = 'La Conquista';
            break;
        case 81:
            result.Department = 'Chinandega';
            result.Municipality = 'Chinandega';
            break;
        case 82:
            result.Department = 'Chinandega';
            result.Municipality = 'Corinto';
            break;
        case 83:
            result.Department = 'Chinandega';
            result.Municipality = 'El Realejo';
            break;
        case 84:
            result.Department = 'Chinandega';
            result.Municipality = 'Chichigalpa';
            break;
        case 85:
            result.Department = 'Chinandega';
            result.Municipality = 'Posoltega';
            break;
        case 86:
            result.Department = 'Chinandega';
            result.Municipality = 'El Viejo';
            break;
        case 87:
            result.Department = 'Chinandega';
            result.Municipality = 'Puerto Morazán';
            break;
        case 88:
            result.Department = 'Chinandega';
            result.Municipality = 'Somotillo';
            break;
        case 89:
            result.Department = 'Chinandega';
            result.Municipality = 'Villa Nueva';
            break;
        case 90:
            result.Department = 'Chinandega';
            result.Municipality = '	Santo Tomás del Norte';
            break;
        case 91:
            result.Department = 'Chinandega';
            result.Municipality = 'Cinco Pinos';
            break;
        case 92:
            result.Department = 'Chinandega';
            result.Municipality = 'San Francisco Del Norte';
            break;
        case 93:
            result.Department = 'Chinandega';
            result.Municipality = 'San Pedro Del Norte';
            break;
        case 121:
            result.Department = 'Chontales';
            result.Municipality = 'Juigalpa';
            break;
        case 122:
            result.Department = 'Chontales';
            result.Municipality = 'Acoyapa';
            break;
        case 123:
            result.Department = 'Chontales';
            result.Municipality = 'Santo Tomás';
            break;
        case 124:
            result.Department = 'Chontales';
            result.Municipality = 'Villa Sandino';
            break;
        case 125:
            result.Department = 'Chontales';
            result.Municipality = 'San Pedro de Lóvago';
            break;
        case 126:
            result.Department = 'Chontales';
            result.Municipality = 'La Libertad';
            break;
        case 127:
            result.Department = 'Chontales';
            result.Municipality = 'Santo Domingo';
            break;
        case 128:
            result.Department = 'Chontales';
            result.Municipality = 'Comalapa';
            break;
        case 129:
            result.Department = 'Chontales';
            result.Municipality = 'San Francisco Cuapa';
            break;
        case 130:
            result.Department = 'Chontales';
            result.Municipality = 'El Coral';
            break;
        case 161:
            result.Department = 'Estelí';
            result.Municipality = 'Estelí';
            break;
        case 162:
            result.Department = 'Estelí';
            result.Municipality = 'Pueblo Nuevo';
            break;
        case 163:
            result.Department = 'Estelí';
            result.Municipality = 'Condega';
            break;
        case 164:
            result.Department = 'Estelí';
            result.Municipality = 'San Juan Limay';
            break;
        case 165:
            result.Department = 'Estelí';
            result.Municipality = 'La Trinidad';
            break;
        case 201:
            result.Department = 'Granada';
            result.Municipality = 'Granada';
            break;
        case 202:
            result.Department = 'Granada';
            result.Municipality = 'Nandaime';
            break;
        case 203:
            result.Department = 'Granada';
            result.Municipality = 'Diriomo';
            break;
        case 204:
            result.Department = 'Granada';
            result.Municipality = 'Diriá';
            break;
        case 241:
            result.Department = 'Jinotega';
            result.Municipality = 'Jinotega';
            break;
        case 242:
            result.Department = 'Jinotega';
            result.Municipality = 'San Rafael Del Norte';
            break;
        case 243:
            result.Department = 'Jinotega';
            result.Municipality = 'San Sebastián Yalí';
            break;
        case 244:
            result.Department = 'Jinotega';
            result.Municipality = 'La Concordia';
            break;
        case 245:
            result.Department = 'Jinotega';
            result.Municipality = 'San José De Bocay';
            break;
        case 246:
            result.Department = 'Jinotega';
            result.Municipality = 'El Cuá Bocay';
            break;
        case 247:
            result.Department = 'Jinotega';
            result.Municipality = 'Santa María Pantasma';
            break;
        case 281:
            result.Department = 'León';
            result.Municipality = 'León';
            break;
        case 283:
            result.Department = 'León';
            result.Municipality = 'El Jicaral';
            break;
        case 284:
            result.Department = 'León';
            result.Municipality = 'La Paz Centro';
            break;
        case 285:
            result.Department = 'León';
            result.Municipality = 'Santa Rosa Del Peñón';
            break;
        case 286:
            result.Department = 'León';
            result.Municipality = 'Quetzalguaque';
            break;
        case 287:
            result.Department = 'León';
            result.Municipality = 'Nagarote';
            break;
        case 288:
            result.Department = 'León';
            result.Municipality = 'El Sauce';
            break;
        case 289:
            result.Department = 'León';
            result.Municipality = 'Achuapa';
            break;
        case 290:
            result.Department = 'León';
            result.Municipality = 'Telica';
            break;
        case 292:
            result.Department = 'León';
            result.Municipality = 'Larreynaga Malpaisillo';
            break;
        case 321:
            result.Department = 'Madriz';
            result.Municipality = 'Somoto';
            break;
        case 322:
            result.Department = 'Madriz';
            result.Municipality = 'Telpaneca';
            break;
        case 323:
            result.Department = 'Madriz';
            result.Municipality = 'San Juan Rio Coco';
            break;
        case 324:
            result.Department = 'Madriz';
            result.Municipality = 'Palacagüina';
            break;
        case 325:
            result.Department = 'Madriz';
            result.Municipality = 'Yalagüina';
            break;
        case 326:
            result.Department = 'Madriz';
            result.Municipality = 'Totogalpa';
            break;
        case 327:
            result.Department = 'Madriz';
            result.Municipality = 'San Lucas';
            break;
        case 328:
            result.Department = 'Madriz';
            result.Municipality = 'La Sabanas';
            break;
        case 329:
            result.Department = 'Madriz';
            result.Municipality = 'San José De Cusmapa';
            break;
        case 1:
            result.Department = 'Managua';
            result.Municipality = 'Managua';
            break;
        case 2:
            result.Department = 'Managua';
            result.Municipality = 'San Rafael Del Sur';
            break;
        case 3:
            result.Department = 'Managua';
            result.Municipality = 'Tipitapa';
            break;
        case 4:
            result.Department = 'Managua';
            result.Municipality = 'Villa Carlos Fonseca';
            break;
        case 5:
            result.Department = 'Managua';
            result.Municipality = 'San Francisco Libre';
            break;
        case 6:
            result.Department = 'Managua';
            result.Municipality = 'Mateare';
            break;
        case 7:
            result.Department = 'Managua';
            result.Municipality = 'Ticuantepe';
            break;
        case 8:
            result.Department = 'Managua';
            result.Municipality = 'Ciudad Sandino';
            break;
        case 9:
            result.Department = 'Managua';
            result.Municipality = 'El Crucero';
            break;
        case 401:
            result.Department = 'Masaya';
            result.Municipality = 'Masaya';
            break;
        case 402:
            result.Department = 'Masaya';
            result.Municipality = 'Nindirí';
            break;
        case 403:
            result.Department = 'Masaya';
            result.Municipality = 'Tisma';
            break;
        case 404:
            result.Department = 'Masaya';
            result.Municipality = 'Catarina';
            break;
        case 405:
            result.Department = 'Masaya';
            result.Municipality = 'San Juan Oriente';
            break;
        case 406:
            result.Department = 'Masaya';
            result.Municipality = 'Niquinohomo';
            break;
        case 407:
            result.Department = 'Masaya';
            result.Municipality = 'Nandasmo';
            break;
        case 408:
            result.Department = 'Masaya';
            result.Municipality = 'Masatepe';
            break;
        case 409:
            result.Department = 'Masaya';
            result.Municipality = 'La Concepción';
            break;
        case 441:
            result.Department = 'Matagalpa';
            result.Municipality = 'Matagalpa';
            break;
        case 442:
            result.Department = 'Matagalpa';
            result.Municipality = 'San Ramón';
            break;
        case 443:
            result.Department = 'Matagalpa';
            result.Municipality = 'Matiguás';
            break;
        case 444:
            result.Department = 'Matagalpa';
            result.Municipality = 'Muy Muy';
            break;
        case 445:
            result.Department = 'Matagalpa';
            result.Municipality = 'Esquipulas';
            break;
        case 446:
            result.Department = 'Matagalpa';
            result.Municipality = 'San Dionisio';
            break;
        case 447:
            result.Department = 'Matagalpa';
            result.Municipality = 'San Isidro';
            break;
        case 448:
            result.Department = 'Matagalpa';
            result.Municipality = 'Sébaco';
            break;
        case 449:
            result.Department = 'Matagalpa';
            result.Municipality = 'Ciudad Darío';
            break;
        case 450:
            result.Department = 'Matagalpa';
            result.Municipality = 'Terrabona';
            break;
        case 451:
            result.Department = 'Matagalpa';
            result.Municipality = 'Rio Blanco';
            break;
        case 452:
            result.Department = 'Matagalpa';
            result.Municipality = 'Tuma La Dalia';
            break;
        case 453:
            result.Department = 'Matagalpa';
            result.Municipality = 'Rancho Grande';
            break;
        case 481:
            result.Department = 'Nueva Segovia';
            result.Municipality = 'Ocotal';
            break;
        case 482:
            result.Department = 'Nueva Segovia';
            result.Municipality = 'Santa María';
            break;
        case 483:
            result.Department = 'Nueva Segovia';
            result.Municipality = 'Macuelizo';
            break;
        case 484:
            result.Department = 'Nueva Segovia';
            result.Municipality = 'Dipilto';
            break;
        case 485:
            result.Department = 'Nueva Segovia';
            result.Municipality = 'Ciudad Antigua';
            break;
        case 486:
            result.Department = 'Nueva Segovia';
            result.Municipality = 'Mozonte';
            break;
        case 487:
            result.Department = 'Nueva Segovia';
            result.Municipality = 'San Fernando';
            break;
        case 488:
            result.Department = 'Nueva Segovia';
            result.Municipality = 'El Jícaro';
            break;
        case 489:
            result.Department = 'Nueva Segovia';
            result.Municipality = 'Jalapa';
            break;
        case 490:
            result.Department = 'Nueva Segovia';
            result.Municipality = 'Murra';
            break;
        case 491:
            result.Department = 'Río San Juan';
            result.Municipality = 'Quilalí';
            break;
        case 492:
            result.Department = 'Nueva Segovia';
            result.Municipality = 'Wiwilí';
            break;
        case 493:
            result.Department = 'Nueva Segovia';
            result.Municipality = 'Wiwilí Nueva Segovia';
            break;
        case 521:
            result.Department = 'Río San Juan';
            result.Municipality = 'San Carlos';
            break;
        case 522:
            result.Department = 'Río San Juan';
            result.Municipality = 'El Castillo';
            break;
        case 523:
            result.Department = 'Río San Juan';
            result.Municipality = 'San Miguelito';
            break;
        case 524:
            result.Department = 'Río San Juan';
            result.Municipality = 'Morrito';
            break;
        case 525:
            result.Department = 'Río San Juan';
            result.Municipality = 'San Juan del Norte';
            break;
        case 526:
            result.Department = 'Río San Juan';
            result.Municipality = 'El Almendro';
            break;
        case 561:
            result.Department = 'Rivas';
            result.Municipality = 'Rivas';
            break;
        case 562:
            result.Department = 'Rivas';
            result.Municipality = 'San Jorge';
            break;
        case 563:
            result.Department = 'Rivas';
            result.Municipality = 'Buenos Aires';
            break;
        case 564:
            result.Department = 'Rivas';
            result.Municipality = 'Potosí';
            break;
        case 565:
            result.Department = 'Rivas';
            result.Municipality = 'Belén';
            break;
        case 566:
            result.Department = 'Rivas';
            result.Municipality = 'Tola';
            break;
        case 567:
            result.Department = 'Rivas';
            result.Municipality = 'San Juan Sur';
            break;
        case 568:
            result.Department = 'Rivas';
            result.Municipality = 'Cárdenas';
            break;
        case 569:
            result.Department = 'Rivas';
            result.Municipality = 'Moyogalpa';
            break;
        case 570:
            result.Department = 'Rivas';
            result.Municipality = 'Altagracia';
            break;
        case 601:
            result.Department = 'RAAS';
            result.Municipality = 'Bluefields';
            break;
        case 603:
            result.Department = 'RAAS';
            result.Municipality = 'El Rama';
            break;
        case 604:
            result.Department = 'RAAS';
            result.Municipality = 'Muelle De Los Buelles';
            break;
        case 605:
            result.Department = 'RAAS';
            result.Municipality = 'La Cruz De Rio Grande';
            break;
        case 606:
            result.Department = 'RAAS';
            result.Municipality = 'Prinzapolka';
            break;
        case 616:
            result.Department = 'RAAS';
            result.Municipality = 'Nueva Guinea';
            break;
        case 619:
            result.Department = 'RAAS';
            result.Municipality = 'Tortuguero';
            break;
        case 624:
            result.Department = 'RAAS';
            result.Municipality = 'Kukra Hill';
            break;
        case 626:
            result.Department = 'RAAS';
            result.Municipality = 'Laguna De Perlas';
            break;
        case 627:
            result.Department = 'RAAS';
            result.Municipality = 'Desembocadura Rio Grande';
            break;
        case 628:
            result.Department = 'RAAS';
            result.Municipality = 'El Ayote';
            break;
        case 607:
            result.Department = 'RAAN';
            result.Municipality = 'Puerto Cabezas';
            break;
        case 608:
            result.Department = 'RAAN';
            result.Municipality = 'Waspán';
            break;
        case 610:
            result.Department = 'RAAN';
            result.Municipality = 'Siuna';
            break;
        case 611:
            result.Department = 'RAAN';
            result.Municipality = 'Bonanza';
            break;
        case 612:
            result.Department = 'RAAN';
            result.Municipality = 'Rosita';
            break;
        case 615:
            result.Department = 'RAAN';
            result.Municipality = 'Bocana Paiwás';
            break;
        case 454:
            result.Department = 'RAAN';
            result.Municipality = 'Waslala';
            break;
        case 602:
            result.Department = 'RAAN';
            result.Municipality = 'Corn Island';
            break;
    }
    return result;
}
/**
 * 
 * @param {string} dateBirth
 * @param {number} ProductionCode
 * @returns {number}
 */
function GetAge(dateBirth,ProductionCode) {
    let age=0;
    const date = new Date();
    switch(ProductionCode){
        case 0:
            age = 1900 + dateBirth.Year;
            break;
        case 1:
            age = 2000 + dateBirth.Year;
            break;
        case 2:
            age = 2100 + dateBirth.Year;
            break;
    }
    age = date.getFullYear() - age;
    if((date.getMonth()+1) < dateBirth.Month){
        age--;
    }
    else if((date.getMonth()+1) == dateBirth.Month){
        age = (date.getDate() < dateBirth.Day)? age-1 : age ;
    }
    // validacion meses dias
        if(dateBirth.Month > 12 || dateBirth.Month < 1) return 0;
        if(dateBirth.Day > 31 || dateBirth.Day < 1) return 0;
        if(dateBirth.Month == 4 || dateBirth.Month == 6 || dateBirth.Month == 9 || dateBirth.Month == 11){
            if(dateBirth.Day > 30) return 0;
        }
        if(dateBirth.Month == 2){
            if(dateBirth.Day > 29) return 0;
        }
    return age;
}
/**
 * 
 * @param {string} ProductionNumber
 * @returns {boolean}
 */
function IsValidProductionNumber(ProductionNumber){
    let result = false;
    const chars = "abcdefghijklmnñopqrstuvwxyz";
    const code = parseInt(ProductionNumber.substring(0,1));
    const lastChar = ProductionNumber.toLocaleLowerCase().split("").reverse()[0];
    
    if(Number.isNaN(code)){
        return result;
    }
    for(let char=0 ; char<chars.length ; char++){
        if(chars[char] == lastChar){
            result = true;
            break;
        }
    }
    console.log(result);
    return result;
}
/**
 * Retorna informacion sobre el DNI ingresado y si este es valido
 * @param {string} DNI 
 * @returns {object}
 */

function DNIcaragua(DNI){
    let result = {
        IsValid:false,
        Municipality:'',
        Department:'',
        Age:0
    }
    if(!DNI) return result;
    DNI = DNI.replace(/-/g,'');
    if(DNI.length!=14) return result;
    const areaCode = parseInt(DNI.substring(0,3));
    const dateBirth = {
        Day: parseInt(DNI.substring(3,5)),
        Month: parseInt(DNI.substring(5,7)),
        Year: parseInt(DNI.substring(7,9))
    };
    const productionNumber = DNI.substring(9);
    const productionCode = parseInt(productionNumber.substring(0,1));
    if(!IsValidProductionNumber(productionNumber)) return result;
    if(Number.isNaN(productionCode)) return result;
    if(Number.isNaN(areaCode)) return result;
    if(Number.isNaN(dateBirth.Day) || Number.isNaN(dateBirth.Month) || Number.isNaN(dateBirth.Year)) return result;
    result.Age = GetAge(dateBirth,productionCode);
    if(result.Age < 16) return result;
    const location = GetLocation(areaCode);
    if(location.Municipality.length<1) return result;
    result.Municipality = location.Municipality;
    result.Department = location.Department;
    result.IsValid = true;
    return result;
}
