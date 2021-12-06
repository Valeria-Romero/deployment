const express = require( 'express' );
const cors = require('cors');
const { NotesRouter} = require( './server/routes/notesRoutes')

const app = express();
app.use(cors())
app.use( express.urlencoded( {extended:true}));
app.use(express.json());
app.use( '', NotesRouter )

require('./server/config/database');


app.listen( 8080, function(){
    console.log( "Anonymous notes is running in port 8080." );
});