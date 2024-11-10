"use server"
import bcrypt from 'bcryptjs';
import { prisma } from './prisma';
import { signIn, signOut } from '@/auth';
import { revalidatePath } from 'next/cache';

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
 
    await signIn('credentials', {email, password, redirectTo: '/'});
    revalidatePath('/');
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

export async function logoutUser() {
  await signOut({redirectTo: '/login'});
  revalidatePath('/login');
}