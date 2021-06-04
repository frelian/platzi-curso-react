import React from 'react';

class BadgeForm extends React.Component {

    // Para evitar el error de usar  value={this.state.firstName}
    state = {
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: 'Designer',
        twitter: ''
    };

    // El metodo va a recibir el evento "e"
    handleChange = (e) => {
        console.log({
            name: e.target.name,
            value: e.target.value
        });

        // A setState le paso un objeto con la informacion que quiero pasar
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleClick = (e) => {
        console.log("button was clicked 1");
    }
ç
    handleSubmit = (e) => {

        // Para evitar que el formulario se envie
        // En HTML hay que usar: <form onSubmit={this.handleSubmit}>
        // El boton debe estar de tipo "submit", por defecto es así si no se especifica
        e.preventDefault();
        console.log("Stop form !");
        console.log(this.state);

        // Puedo imprimir una sola línea
        console.log(this.state.email);
    }

    render() {
        return (
            <div>
                <h1>New Attendant</h1>


                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input
                            onChange={this.handleChange}
                            type="text"
                            className="form-control"
                            name="firstName"
                            value={this.state.firstName}
                        />
                    </div>

                    <div className="form-group">
                        <label>Last Name</label>
                        <input
                            onChange={this.handleChange}
                            type="text"
                            className="form-control"
                            name="lastName"
                            value={this.state.lastName}
                        />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input
                            onChange={this.handleChange}
                            type="email"
                            className="form-control"
                            name="email"
                            value={this.state.email}
                        />
                    </div>

                    <div className="form-group">
                        <label>Job Title</label>
                        <input
                            onChange={this.handleChange}
                            type="text"
                            className="form-control"
                            name="jobTitle"
                            value={this.state.jobTitle}
                        />
                    </div>

                    <div className="form-group">
                        <label>Twitter</label>
                        <input
                            onChange={this.handleChange}
                            type="text"
                            className="form-control"
                            name="twitter"
                            value={this.state.twitter}
                        />
                    </div>

                    <button
                        onClick={this.handleClick}
                        className="btn btn-primary"
                    >Save</button>
                </form>
            </div>
        )
    }
}

export default BadgeForm;