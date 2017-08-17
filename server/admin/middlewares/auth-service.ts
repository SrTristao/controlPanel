import * as jwt from 'jsonwebtoken';
import * as config from '../../config';

export async function generateToken(data) {
    return await jwt.sign(data, config.SALT_KEY, {expiresIn: '1d'});
}

export async function decodeToken(token) {
    return await jwt.verify(token, config.SALT_KEY);
}

export async function authorize(req, res, next) {
    const token = req.body.token || req.query.token || req.headers['x-access-token'];

    if(!token) {
        res.status(401).json({
            message: 'Access denied'
        })
    } else {
        jwt.verify(token, config.SALT_KEY, (error, decoded) => {
            if (error) {
                res.status(401).json({
                    message: 'Access denied'
                })
            } else {
                next();
            }
        })
    }
}