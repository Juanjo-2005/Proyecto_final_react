// #cSpell:disable - signup.jsx

function login() {
    return(
        <div>

        
        <header>
            <video muted autoPlay loop>
                <source src="IMG/Img/108203-680177949_medium.mp4" />    
            </video>

            <section>
                <h2>Inicia Sesión ahora mismo aquí</h2>
                    <form id="loginForm">
                        <label>Correo</label>
                        <input type="email" placeholder="Escribe aquí tu Correo ..." id="email" required autoFocus/>
                        <label>Contraseña</label>
                        <input type="password" placeholder="Escribe aquí tu Contraseña ..." id="password" required/>
                        <input type="submit" value="Ingresar"/>
                    </form>
                <p className="registro">¿No tienes una cuenta? <a href="signup.html">Registrate aquí</a></p>
            </section>
        </header>

    <div className="boy">
        <img src="IMG/Img/Niño.png" alt="Niño-Gamer"/>
    </div>
    
    <div className="girl">
        <img src="IMG/Img/Niña.png" alt="Niña-Gamer"/>
    </div>
    </div>
    );
};

export default login;