"use server"
import bcrypt from 'bcryptjs';
import { prisma } from './prisma';
import { signIn } from '@/auth';

export async function loginUser(email: string, password: string) {
  const user = await prisma.user.findUnique({
    where: {
      email
    }
  });
  if (!user) {
    throw new Error('User not found');
  }
  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    throw new Error('Invalid password');
  }
  try{
    await signIn('credentials', {email, password});
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    } else {
      throw new Error(String(err));
    }
  }
}

export async function registerUser(email: string, password: string) {
  const user = await prisma.user.findUnique({
    where: {
      email
    }
  });
  if (user) {
    throw new Error('User already exists');
  }
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