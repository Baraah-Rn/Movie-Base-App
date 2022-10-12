
const FormHandleError = (values) => {
    let errors = {}

    if (!values.username.trim()) {
        errors.username = "User name required"
    }


    if (!values.email) {
        errors.email = "Email required"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Email address is invalid"
    }


    if (!values.password) {
        errors.password = "Password required"
    } else if (values.password.length < 5) {
        errors.password = "Password need to be 5 characters or more"
    }


    if (!values.password2) {
        errors.password2 = "Confirm password required"
    } else if (values.password2 !== values.password) {
        errors.password2 = "Passwords do not match"
    }

    return errors
}

export default FormHandleError