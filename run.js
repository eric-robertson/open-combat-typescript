import express from 'express'

let application = express ();
let port = 3000;

application.use( express.json() );
application.use( express.urlencoded() );

application.use( '/', express.static('.') )

application.listen( port, () => console.log(`Started up on ${port}!`))