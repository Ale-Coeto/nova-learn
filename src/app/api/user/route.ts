import { userHandler } from "@/app/api/handler";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {    
    const handler = userHandler;
    const body = await req.json();
    return handler.validateUser(body.username, body.password);
    
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}