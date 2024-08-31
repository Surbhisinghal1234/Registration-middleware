    import mongoose from 'mongoose';

    // register Schema
    const registerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    
    },
    lastName: {
        type: String,
        required: true,
    
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: String,
        required: true,
        minlength: 10
    }
    });


    const Register = mongoose.model('register', registerSchema);

    export default Register;
