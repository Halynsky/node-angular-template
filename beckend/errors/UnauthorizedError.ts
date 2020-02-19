import CustomError from './CustomError';
import { NOT_FOUND } from 'http-status-codes';

export default class UnauthorizedError extends CustomError {
    status: number = NOT_FOUND;
}
