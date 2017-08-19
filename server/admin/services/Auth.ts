import { User } from '../../models/User';
import * as userRepository from '../repositories/User';
import * as bcrypt from '../../services/bcrypt';
import * as token from '../middlewares/auth-service';
import { ServiceError } from '../../errors/service';

export async function login(email: string, password: string) {
    const user = await userRepository.findByEmail(email);
    
    if (!user) throw new ServiceError('user-not-found');
    
    await bcrypt.compare(user.password, password);

    return await token.generateToken(user);
}

export async function refreshToken() {
    
}