import React from 'react';
import './Register.css';
import Config from '../Config';
import ls from 'local-storage'
import FormErrors from '../componnents/FormErrors';

const API = Config.baseURL;
class Register extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            error: false,
            email: '',
            password: '',
            formErrors: { email: '', password: '' },
            emailValid: false,
            passwordValid: false,
            formValid: false
        }
    }

    handleForm(e) {
        e.preventDefault();
        let data = {
            username: this.username.value,
            fName: this.fName.value,
            lName: this.lName.value,
            email: this.email.value,
            mobile: this.mobile.value,
            title: this.title.value,
            password: this.password.value
        }
        this.tryRegister(data);
    }

    tryRegister(data) {
        let url = `${API}/register`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        )
            .then((res) => res.json())
            .then((payload) => {
                //true access
                if (payload) {
                    //save the true login in the locale storage
                    ls.set('username', data.username)
                    ls.set('password', data.password)

                    //when User enter the name change the route to '/profile/:login'
                    this.props.history.push('/profile/' + data.username);
                } else {
                    this.setState({
                        error: true
                    });
                }

            })
            .catch((error) => console.log('Oops! . There Is A Problem'))
    }
    handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value },
            () => { this.validateField(name, value) });
    }
    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;

        switch (fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '' : ' is too short';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({ formValid: this.state.emailValid && this.state.passwordValid });
    }

    render() {
        return (
            <div>
                <section className="card">
                    <div className="search--box">
                        <h1>Please Enter your Info:</h1>
                        <form onSubmit={this.handleForm.bind(this)}>
                            <label><input onChange={(event) => this.handleUserInput(event)} name="username" type="text" ref={(ref) => this.username = ref} placeholder="Username" required /></label>
                            <label><input onChange={(event) => this.handleUserInput(event)} name="email" type="text" ref={(ref) => this.email = ref} placeholder="email" /></label>
                            <label><input onChange={(event) => this.handleUserInput(event)} name="password" type="password" ref={(ref) => this.password = ref} placeholder="Password" required /></label>
                            <label><input onChange={(event) => this.handleUserInput(event)} name="fName" type="text" ref={(ref) => this.fName = ref} placeholder="First Name" /></label>
                            <label><input onChange={(event) => this.handleUserInput(event)} name="lName" type="text" ref={(ref) => this.lName = ref} placeholder="Last Name" /></label>
                            <label><input onChange={(event) => this.handleUserInput(event)} name="mobile" type="text" ref={(ref) => this.mobile = ref} placeholder="mobile" /></label>
                            <label><input onChange={(event) => this.handleUserInput(event)} name="title" type="text" ref={(ref) => this.title = ref} placeholder="title" /></label>
                            <div >
                                <FormErrors formErrors={this.state.formErrors} />
                            </div>
                            <label><button type="submit" disabled={!this.state.formValid} >Register</button></label>
                        </form>
                        {this.state.error == true &&
                            <h2>Error: login already exist!!</h2>
                        }


                    </div>
                </section>

            </div >
        )
    }
}

export default Register;
