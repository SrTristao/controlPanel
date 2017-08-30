const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../dist_server/app');
const should = chai.should();
const url = '/api/admin/item/';

chai.use(chaiHttp);
let token = '';
let itemUpdate = {id: ''}
describe("Item", () => {
    
    beforeEach(done => {
        chai.request(server)
        .post('/api/admin/auth/')
        .send({"email": "test@hotmail.com", "password": "123123"})        
        .end((err, res) => {
            token = res.body.token;            
            done();
        })
    })

    describe("GET All Items /filter/:filter", () => {
        it('Return items with or without filters', done => {
            chai.request(server)
            .get(url.concat('filter/{}'))
            .set('Authorization', 'Bearer ' + token)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            })
        })
        it('Return error when pass param incorrect', done => {
            chai.request(server)
            .get(url.concat('filter/dasdsa'))
            .set('Authorization', 'Bearer ' + token)
            .end((err, res) => {
                res.should.have.status(401);
                res.body.should.be.property('message').eql('Parametro não experado.');
                done();
            })
        })
    });

    describe("GET findById /:id", () => {
        it('Return item', done => {
            chai.request(server)
            .get(url.concat('59a6c8e31319713820edeeee'))
            .set('Authorization', 'Bearer ' + token)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');                                
                done();
            })
        })

        it('Return error when pass different type id', done => {
            chai.request(server)
            .get(url.concat('dasdsds'))
            .set('Authorization', 'Bearer ' + token)
            .end((err, res) => {
                res.should.have.status(401);
                res.body.should.be.property('message').eql('Parametro inválido.');
                done();
            })
        })

        it('Return error when item not found', done => {
            chai.request(server)
            .get(url.concat('51a3055b01a6e62c2015b603'))
            .set('Authorization', 'Bearer ' + token)
            .end((err, res) => {
                res.should.have.status(401);
                res.body.should.be.property('message').eql('Registro não encontrado.');
                done();
            })
        })
    });

    describe("GET totItems /totItems", () => {
        it('Return total items in db', done => {
            chai.request(server)
            .get(url.concat('totItems'))
            .set('Authorization', 'Bearer ' + token)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('count');              
                done();
            })
        })
    });

    describe("GET Last Inserts /", () => {
        it('Return 5 last inserts', done => {
            chai.request(server)
            .get(url)
            .set('Authorization', 'Bearer ' + token)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');  
                res.body.length.should.be.eql(5);        
                done();
            })
        })
    });

    describe("POST Save Item /", () => {
        it('Save new item and return them.', done => {
            chai.request(server)
            .post(url)            
            .set('Authorization', 'Bearer ' + token)
            .send({"name":"Test Mocha", "status":"Concluido", "user":{"name": "João Alexandre Tristão de Almeida", "_id":"5998af774e57cb4774469985"}})
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.be.property('item');
                res.body.should.be.property('message');
                itemUpdate.id = res.body.item._id;                                                  
                done();
            })
        })

        it('Return error when pass object item incorrect (missing a field required, status different Concluido ou Pendente)', done => {
            chai.request(server)
            .post(url)
            .set('Authorization', 'Bearer ' + token)
            .send({"name":"Test Mocha", "user":{"name": "João Alexandre Tristão de Almeida", "_id":"5998af774e57cb4774469985"}})
            .end((err, res) => {
                res.should.have.status(401);  
                res.body.should.be.property('message').eql('Item inválido.');                           
                done();
            })
        })        
    });

    describe("PUT Update Item /", () => {
        it('Update item and return success message.', done => {
            chai.request(server)
            .put(`${url}/${itemUpdate.id}`)
            .set('Authorization', 'Bearer ' + token)
            .send({"name":"Test Mocha", "status":"Pendente", "user":{"name": "João Alexandre Tristão de Almeida", "_id":"5998af774e57cb4774469985"}, "_id": `${itemUpdate.id}`})
            .end((err, res) => {
                res.should.have.status(200);                             
                res.body.should.have.property('message').eql('Registro atualizado com sucesso.');                   
                done();
            })
        })
        it('Return error when pass object item incorrect (missing a field required, status different Concluido ou Pendente)', done => {
            chai.request(server)
            .put(`${url}/${itemUpdate.id}`)
            .set('Authorization', 'Bearer ' + token)
            .send({"name":"Test Mocha", "user":{"name": "João Alexandre Tristão de Almeida", "_id":"5998af774e57cb4774469985"}})
            .end((err, res) => {
                res.should.have.status(401);  
                res.body.should.be.property('message').eql('Item inválido.');                           
                done();
            })
        })
    });

    describe("DELETE Delete item /:id", () => {
        it('Delete item and return success message.', done => {
            chai.request(server)
            .delete(`${url}/${itemUpdate.id}`)
            .set('Authorization', 'Bearer ' + token)
            .end((err, res) => {
                res.should.have.status(200);                             
                res.body.should.have.property('message').eql('Registro deletado com sucesso.');                   
                done();
            })
        })

        it('Return error when pass different type id', done => {
            chai.request(server)
            .get(`${url}/dasdsadsdas123`)
            .set('Authorization', 'Bearer ' + token)
            .end((err, res) => {
                res.should.have.status(401);
                res.body.should.be.property('message').eql('Parametro inválido.');
                done();
            })
        })

        it('Return error when user not found', done => {
            chai.request(server)
            .get(url.concat('52a63d6413189045d8ea44f4'))
            .set('Authorization', 'Bearer ' + token)
            .end((err, res) => {
                res.should.have.status(401);
                res.body.should.be.property('message').eql('Registro não encontrado.');
                done();
            })
        })        
    });

})


