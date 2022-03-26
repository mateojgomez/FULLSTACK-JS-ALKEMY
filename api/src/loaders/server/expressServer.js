const express = require('express');
const config= require('../../config')
const cors = require('cors')
const morgan = require('morgan');
const {sequelize} = require('../database/conection');
const res = require('express/lib/response');
class ExpressServer{

    constructor(){
        this.app =express();
        this.port=config.port;
        this.midld =this._middlewares();
        this.basePath = `${config.api.prefix}`;
        this.db = this.connection();
        this._routes();
        this._notFound();
        this._errorHandler();
    }

    _middlewares(){
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(morgan('tiny'));
    }

    async connection(){
        try {            
            await sequelize.authenticate();
            console.log('Connection has been established successfully.');
            sequelize.sync({force:false})
            .then(()=>{
                console.log('synchronized')
            })
          } catch (error) {
            console.error('Unable to connect to the database:', error);
          }
    }

    _notFound (){
        this.app.use((req,res,next)=>{
            const err = new Error("Not Found");
            err.code=404;
            next(err);
        });
    }

    _errorHandler(){
        this.app.use((err,req,res,next)=>{
            const code= err.code || 500;
            res.status(code);
            var body = {
                code,
                message:err.code
            }
            res.json(body);
        });
    }

    _routes (){

        this.app.head("/status", (req,res)=> {
            res.status(200).end();
        })

        this.app.use(this.basePath, require('../../routes/transactions'))
    }

    async start (){
        console.log(config)
        this.app.listen(this.port,(error)=>{
        if (error){
            console.log(error);
            process.exit(1);
            return;
        }
        }
                        )
    }

}

module.exports =  ExpressServer;