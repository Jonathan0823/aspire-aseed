"use server"
import bcrypt from 'bcryptjs';
import { prisma } from './prisma';

export async function registerUser(email: string, password: string) {
  try{
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.user.create({
        data: {
            email,
            password: hashedPassword
        }
        });
    return newUser;
  } catch (err) {
      if (err instanceof Error) {
        throw new Error(err.message);
      } else {
        throw new Error(String(err));
      }
    }
}