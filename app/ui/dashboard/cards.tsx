import { fetchCardData } from "@/app/lib/data";
import { lusitana } from "@/app/ui/fonts";
import {
	BanknotesIcon,
	ClockIcon,
	InboxIcon,
	UserGroupIcon,
} from "@heroicons/react/24/outline";

const iconMap = {
	collected: BanknotesIcon,
	customers: UserGroupIcon,
	pending: ClockIcon,
	invoices: InboxIcon,
};

const {
	numberOfCustomers,
	numberOfInvoices,
	totalPaidInvoices,
	totalPendingInvoices,
} = await fetchCardData();

export default async function CardWrapper() {
	return (
		<>
			{/* NOTE: Uncomment this code in Chapter 9 */}

			<Card title="Collected" value={totalPaidInvoices} type="collected" />
			<Card title="Pending" value={totalPendingInvoices} type="pending" />
			<Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
			<Card
				title="Total Customers"
				value={numberOfCustomers}
				type="customers"
			/>
		</>
	);
}

export function Card({
	title,
	value,
	type,
}: {
	title: string;
	value: number | string;
	type: "invoices" | "customers" | "pending" | "collected";
}) {
	const Icon = iconMap[type];

	return (
		<div className="bg-gray-50 shadow-sm p-2 rounded-xl">
			<div className="flex p-4">
				{Icon ? <Icon className="w-5 h-5 text-gray-700" /> : null}
				<h3 className="ml-2 font-medium text-sm">{title}</h3>
			</div>
			<p
				className={`${lusitana.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
			>
				{value}
			</p>
		</div>
	);
}
