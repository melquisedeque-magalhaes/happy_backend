import { ErrorRequestHandler } from 'express';
import { ValidationError } from 'yup';

interface ValidationErrors {
    [key: string]: string[];
}

const handleErrors: ErrorRequestHandler = (error, request, response, next) => {
    if (error instanceof ValidationError) {
        const errors: ValidationErrors = {};

        error.inner.forEach(err => {
            errors[err.path] = err.errors;
        });

        return response
            .status(400)
            .json({ message: 'Validations Fails ', errors });
    }

    console.log(error);

    return response.status(500).json({ message: ' Internal server Error ' });
};

export default handleErrors;
