import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email, subject, message }: { email: string; subject: string; message: string } = await req.json();

    const data = await resend.emails.send({
      from: "onboarding@resend.dev", // من بريد Resend التجريبي
      to: "martakoush.mhd@gmail.com", // بريدك الشخصي
      subject,
      html: `
        <h2>${subject}</h2>
        <p><strong>From:</strong> ${email}</p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
    return NextResponse.json({ success: false, error: "Unknown error occurred" }, { status: 500 });
  }
}
