const express = require('express');
const config= require('../../config')
const cors = require('cors')
const morgan = require('morgan')

class ExpressServer{

    constructor(){
        this.app =express();
        this.port=config.port;
        this.midld =this._middlewares();
        this.basePath = `${config.api.prefix}`;
        this._routes();
    }

    _middlewares(){
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(morgan('tiny'));
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