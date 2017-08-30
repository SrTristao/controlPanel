const User = require('../dist_server/models/User');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../dist_server/app');
const should = chai.should();
const url = '/api/admin/user/';

chai.use(chaiHttp);
let token = '';
let userUpdate = {id: '', email: ''};
describe("User", () => {
    
    beforeEach(done => {
        chai.request(server)
        .post('/api/admin/auth/')
        .send({"email": "corohsnk@hotmail.com", "password": "123admin"})        
        .end((err, res) => {
            token = res.body.token;            
            done();
        })
    })

    describe("GET All Users /filter/:filter", () => {
        it('Return users with or without filters', done => {
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
        it('Return user', done => {
            chai.request(server)
            .get(url.concat('5998af774e57cb4774469985'))
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

        it('Return error when user not found', done => {
            chai.request(server)
            .get(url.concat('57a63d6413189045d8ea44f4'))
            .set('Authorization', 'Bearer ' + token)
            .end((err, res) => {
                res.should.have.status(401);
                res.body.should.be.property('message').eql('Registro não encontrado.');
                done();
            })
        })
    });

    describe("GET totUsers /totUsers", () => {
        it('Return total users in db', done => {
            chai.request(server)
            .get(url.concat('totUsers'))
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

    describe("POST Save User /", () => {
        it('Save new user and return them.', done => {
            chai.request(server)
            .post(url)
            .set('Authorization', 'Bearer ' + token)
            .send({"name":"TestMocha", "role":"user", "password":"123321", "email":`mocha${Math.random()}@hotmail.com`})
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.be.property('user');
                res.body.should.be.property('message');
                userUpdate.id = res.body.user._id;                       
                userUpdate.email = res.body.user.email;                
                done();
            })
        })

        it('Return error when pass object user incorrect (missing a field required, email invalid, password less 6 character, role different user or admin)', done => {
            chai.request(server)
            .post(url)
            .set('Authorization', 'Bearer ' + token)
            .send({"name":"TestMocha", "role":"user", "email":`mocha${Math.random()}@hotmail.com`})
            .end((err, res) => {
                res.should.have.status(401);  
                res.body.should.be.property('message').eql('Usuário inválido.');                           
                done();
            })
        })        
    });

    describe("POST Change password /changePassword", () => {
        it('Change password and set new token on head and return message', done => {
            chai.request(server)
            .post(url.concat('/changePassword'))
            .set('Authorization', 'Bearer ' + token)
            .send({"email":`${userUpdate.email}`, "password": "123321", "newPassword": "111222333"})
            .end((err, res) => {
                res.should.have.status(200);                             
                res.body.should.have.property('message').eql('Senha trocada com sucesso!');                   
                done();
            })
        })

        it('Return error when pass password incorrect', done => {
            chai.request(server)
            .post(url.concat('/changePassword'))
            .set('Authorization', 'Bearer ' + token)
            .send({"email":`${userUpdate.email}`, "password": "321312312", "newPassword": "123123"})
            .end((err, res) => {
                res.should.have.status(400);                             
                res.body.should.have.property('message').eql('Senha inválida.');                   
                done();
            })
        })

        it('Return error when missing a filed required (email, password and newPassword)', done => {
            chai.request(server)
            .post(url.concat('/changePassword'))
            .set('Authorization', 'Bearer ' + token)
            .send({"email":`${userUpdate.email}`,  "newPassword": "123123"})
            .end((err, res) => {
                res.should.have.status(401);                             
                res.body.should.have.property('message').eql('Usuário inválido.');                   
                done();
            })
        })
    });

    describe("PUT Update User /", () => {
        it('Update user and return success message.', done => {
            chai.request(server)
            .put(`${url}/${userUpdate.id}`)
            .set('Authorization', 'Bearer ' + token)
            .send({"name":"TestMocha", "role":"user", "password":"123321", "email":`${userUpdate.email}`, "_id": `${userUpdate.id}`})
            .end((err, res) => {
                res.should.have.status(200);                             
                res.body.should.have.property('message').eql('Registro atualizado com sucesso.');                   
                done();
            })
        })
    });

    describe("DELETE Delete User /:id", () => {
        it('Delete user and return success message.', done => {
            chai.request(server)
            .delete(`${url}/${userUpdate.id}`)
            .set('Authorization', 'Bearer ' + token)
            .end((err, res) => {
                res.should.have.status(200);                             
                res.body.should.have.property('message').eql('Registro deletado com sucesso.');                   
                done();
            })
        })
    });

})


