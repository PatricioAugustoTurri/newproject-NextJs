import { EmailTemplate } from "@/components/email-template";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(request: Request) {
  const body = await request.json();
  console.log(body);
  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["patoturri2391@gmail.com"],
      subject: body.name + "Te ha mandado una email",
      react: EmailTemplate(body),
      text: "Welcome to my-app",
    });

    console.log(data);
    return NextResponse.json(
      { message: "Email sent successfully" },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Error sending email" },
      { status: 500 }
    );
  }
}
