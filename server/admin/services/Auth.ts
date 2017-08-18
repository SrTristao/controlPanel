import { User } from '../models/User';
import * as userRepository from '../repositories/User';

export async function login(email: string, password: string) {
    console.log(email, password);
    return await userRepository.findByEmail(email);
}