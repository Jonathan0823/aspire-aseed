"use server";
import bcrypt from "bcryptjs";
import { prisma } from "./prisma";
import { signIn, signOut } from "@/auth";
import { revalidatePath } from "next/cache";

export async function loginUser(email: string, password: string) {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (!user) {
    throw new Error("User not found");
  }
  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    throw new Error("Invalid password");
  }

  await signIn("credentials", { email, password, redirectTo: "/" });
  revalidatePath("/");
}

export async function registerUser(email: string, password: string) {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (user) {
    throw new Error("User already exists");
  }
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
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
  await signOut({ redirectTo: "/login" });
  revalidatePath("/login");
}

export interface LaporanTerbuka {
  title: string;
  content: string;
  category: string;
}

export async function createLaporanTerbuka(
  userId: string,
  nama: string,
  kelas: string,
  angkatan: string,
  keluhan: string,
  bukti: string,
  type: string
) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new Error('User not found');
    }
    const laporan = await prisma.aspirasiTerbuka.create({
      data: {
        userId,
        nama,
        kelas,
        angkatan,
        keluhan,
        buktiKeluhan: bukti,
        type,
      },
    });
    return laporan;
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    } else {
      throw new Error(String(err));
    }
  }
}

export async function createLaporanTertutup(
  userId: string,
  angkatan: string,
  keluhan: string,
  bukti: string,
  type: string
) {
  try {
    const laporan = await prisma.aspirasiTertutup.create({
      data: {
        userId,
        angkatan,
        keluhan,
        buktiKeluhan: bukti,
        type,
      },
    });
    return laporan;
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    } else {
      throw new Error(String(err));
    }
  }
}

export async function createLaporanSexHar(
  userId: string,
  deskripsi: string,
  nama: string,
  ciriPelaku: string,
  bukti: string,
  kontak: string
){
 try{
  const laporan = await prisma.sexualHarassment.create({
    data:{
      userId,
      AlurKejadian: deskripsi,
      kontak,
      nama,
      ciriPelaku,
      buktiKeluhan: bukti
    }
  });
  return laporan;
 } catch (err) {
  if (err instanceof Error) {
    throw new Error(err.message);
  } else {
    throw new Error(String(err));
  }
}
}

export async function getLaporanTerbuka() {
  const laporan = await prisma.aspirasiTerbuka.findMany();
  return laporan;
}

export async function getLaporanTertutup() {
  const laporan = await prisma.aspirasiTertutup.findMany();
  return laporan;
}

export async function getLaporanSexHar() {
  const laporan = await prisma.sexualHarassment.findMany();
  return laporan;
}