import postgres from "postgres";

const POSTGRES_URL = process.env.POSTGRES_URL;
if (!POSTGRES_URL) {
	throw new Error("POSTGRES_URL environment variable is not set.");
}
const sql = postgres(POSTGRES_URL, { ssl: "require" });

async function listInvoices() {
	const data = await sql`
    SELECT invoices.amount, customers.name
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE invoices.amount = 666;
  `;

	return data;
}

export async function GET() {
	return Response.json(await listInvoices());
}
