

class Sockets {

    constructor( io ) {

        this.io = io;

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {

            // Escuchar evento: mensaje-to-server
            socket.on('mensaje-to-server', () => {
                console.log( "conectado" );
                
                this.io.emit('mensaje-from-server', data );
            });
            
            socket.emit('mensaje-de-bienvenida', "bienvenido al server")
            
        
        });
    }


}


module.exports = Sockets;