// Async function to get user data from the database or send a message to log in first
export async function GET(){

    //return new Response(JSON.stringify({ message: "Log in first" }));
    return Response.json({ message: "Please log in first" }), { status: 401 };
}