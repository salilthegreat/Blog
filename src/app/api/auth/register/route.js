import { NextResponse } from "next/server";
import bcrypt from "bcrypt"
import User from "@/models/User";
import connect from "@/utils/db";

export const POST = async (request) => {
    const { email, name, password } = await request.json();

    try {
        await connect();
        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser =  new User({
            name,
            email,
            password: hashedPassword
        })
        await newUser.save()
        return new NextResponse("User created successfully", { status: 201 })
    }
    catch (err) {
        return new NextResponse(err.messsge, { status: 500 })
    }
}