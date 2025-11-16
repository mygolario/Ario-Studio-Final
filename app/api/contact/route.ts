import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  role: z.string().optional(),
  website: z.string().url().optional().or(z.literal("")),
  projectType: z.string().min(1, "Project type is required"),
  budget: z.string().min(1, "Budget range is required"),
  timeline: z.string().optional(),
  description: z.string().min(10, "Description must be at least 10 characters"),
  referral: z.string().optional(),
  agreeToTerms: z.boolean().refine((val) => val === true, "You must agree to the terms"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the request body
    const validatedData = contactSchema.parse(body);

    // Log the submission (in production, you would save to DB or send email)
    console.log("=== NEW CONTACT SUBMISSION ===");
    console.log("Timestamp:", new Date().toISOString());
    console.log("Data:", JSON.stringify(validatedData, null, 2));
    console.log("=============================");

    // TODO: Integrate with database (Prisma + Postgres/Neon)
    // TODO: Send email notification (Resend, SendGrid, etc.)
    // Example:
    // await prisma.contactSubmission.create({ data: validatedData });
    // await resend.emails.send({ ... });

    return NextResponse.json(
      { message: "Brief submitted successfully", data: validatedData },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Validation failed", details: error.errors },
        { status: 400 }
      );
    }

    console.error("Error processing contact submission:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

