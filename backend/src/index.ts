import 'reflect-metadata';
import app from './app';
import {AppDataSource} from './db';

function main(){
    try{
        AppDataSource.initialize()
        app.listen(3000);
        console.log('Server on port 3000')
    }catch(error){
        console.error(error)
    }
}

main()

