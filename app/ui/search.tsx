"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function Search({ placeholder }: { placeholder: string }) {
	const searchParams = useSearchParams();
	const pathName = usePathname();
	const router = useRouter();
	const { replace } = useRouter();

	const handleSearch = useDebouncedCallback((term) => {
		const params = new URLSearchParams(searchParams);
		params.set("page", "1");
		
		if (term) {
			params.set("query", term);
		} else {
			params.delete("query");
		}
		replace(`${pathName}?${params.toString()}`);
	}, 300);

	return (
		<div className="relative flex flex-shrink-0 flex-1">
			<label htmlFor="search" className="sr-only">
				Search
			</label>
			<input
				className="peer block py-[9px] pl-10 border border-gray-200 rounded-md outline-2 w-full placeholder:text-gray-500 text-sm"
				placeholder={placeholder}
				onChange={(e) => handleSearch(e.target.value)}
				defaultValue={searchParams.get("query")?.toString()}
			/>
			<MagnifyingGlassIcon className="top-1/2 left-3 absolute w-[18px] h-[18px] text-gray-500 peer-focus:text-gray-900 -translate-y-1/2" />
		</div>
	);
}
