// #cSpell:disable - signup.jsx

function signup () {
    return(
        <section className="Formulario">
        <h2>Registro</h2>
        <form id="signupForm" className="Init-formulario">
            <label>Nombre</label>
            <input type="text" placeholder="..." id="name" required autoFocus />
            <label>Mail</label>
            <input type="email" placeholder="..." id="email" required />
            <label>Contraseña</label>
            <input type="password" placeholder="..." id="password" required />
            <input type="submit" value="Registro" />
        </form>
        <p>Ya tienes una cuenta? <a href="login.html">Login</a></p>
    </section>
    );
}

export default signup;