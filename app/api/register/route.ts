import { connectToDb } from "@/lib/database";
import User from "@/models/User";

export const POST = async (req: any) => {
  const { email, password } = await req.json();

  try {
    await connectToDb(); // Connect to the database each time a new request is made

    const randomNum = Math.floor(Math.random() * 9000) + 1000;
    const randomNotificationid = `NT${randomNum}`;

    // Create a new user document in the database
    const newUser = new User({
      email,
      password,
    });
    await newUser.save();

    return new Response(
      JSON.stringify({ message: "User created successfully" }),
      {
        status: 201, // Created status code
      }
    );
  } catch (error) {
    console.error("Error creating user:", error);

    return new Response(JSON.stringify({ error: "Failed to create user" }), {
      status: 500, // Internal Server Error status code
    });
  }
};
