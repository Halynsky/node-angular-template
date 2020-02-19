import CustomError from './CustomError';
import { BAD_REQUEST } from 'http-status-codes';

export default class BadRequestError extends CustomError {
    status: number = BAD_REQUEST;
}
