const indexConfig = require('../config/elasticsearchindex.config');
module.exports = class Home {
    constructor(id, address, city, msa, zipcode) {
        this.document = {
            index: indexConfig.index,
            type: 'home',
            id: id,
            body: {
                address: address,
                city: city,
                msa: msa,
                zipcode: zipcode
            }
        }
    }
    setDocument(document) {
        this.document = document;
        return this;
    }
    static getHome(id) {
        return new Promise((resolve, reject) => {
            global.elClient.get({
                index: indexConfig.index,
                type: 'home',
                id: id
            }, (err, response) => {
                err && reject(err);
                resolve(new Home().setDocument(response));
            })
        });
    }
    static createHome(home) {
        return new Promise((resolve, reject) => { global.elClient.create(home.document, (err) => err ? reject(err) : resolve('success')) });
    }
    static deleteHome(home) {
        return new Promise((resolve, reject) => {
            global.elClient.delete(home.document, (err) => err ? reject(err) : resolve('success'));
        });
    }
    static updateHome(home) {
        return new Promise((resolve, reject) => {
            Home.deleteHome(home).then(() => {
                resolve(Home.createHome(home));
            }, (response) => {
                console.log(response)
                reject(response)
            })
        });
    }
    static uploadArray(bulk) {
        return new Promise((resolve, reject) => {
            var array=bulk.reduce((finalObj,home)=>{
                finalObj.push({
                    create:{
                        _id:home.id,
                        _index: indexConfig.index,
                        _type: 'home',
                    }
                });
                finalObj.push(
                    new Home(home.id,home.address,home.city,home.msa,home.zipcode).document.body
                )
                return finalObj;
            },[]);
            console.log(array)
            global.elClient.bulk({ body: array }, (err) => err ? reject(err) : resolve('success'));
        });
    }
    static search(searchObj){
        return new Promise((resolve,reject)=>{
            global.elClient.search({
                index:indexConfig.index,
                body:searchObj
            },(err,response)=>{
                err&&reject(err);
                resolve(response);
            });
        });
    }
}