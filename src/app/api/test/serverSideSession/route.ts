import { getServerSession } from "next-auth/next"
import { authOptions } from '../../auth/[...nextauth]/route'
import { NextRequest, NextResponse } from "next/server"

export async function GET() {
  // https://next-auth.js.org/configuration/nextjs#in-app-directory
  const session = await getServerSession(authOptions)
  return NextResponse.json(session);
}