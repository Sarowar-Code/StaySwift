"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const FilterByStarCategory = () => {
    const [query, setQuery] = useState([]);

    const searchParams = useSearchParams();
    const pathName = usePathname();
    const { replace } = useRouter();

    const params = new URLSearchParams(searchParams);

    function handleChange(event) {
        event.preventDefault();
        const name = event.target.name;
        const checked = event.target.checked;

        if (checked) {
            setQuery((prev) => [...prev, name]);
        } else {
            const filtered = query.filter((item) => item !== name);
            setQuery(filtered);
        }

        console.log(query);
    }

    useEffect(() => {
        const category = params.get("category");
        if (category) {
            const decodedCategory = decodeURI(category);
            const queryInCategory = decodedCategory.split("|");
            setQuery(queryInCategory);
        }
    }, []);

    useEffect(() => {
        if (query.length > 0) {
            params.set("category", encodeURI(query.join("|")));
        } else {
            params.delete("category");
        }

        replace(`${pathName}?${params.toString()}`);
    }, [query]);

    return (
        <div>
            <h3 className="font-bold text-lg">Star Category</h3>
            <form action="" className="flex flex-col gap-2 mt-2">
                <label htmlFor="fiveStar">
                    <input
                        type="checkbox"
                        name="5"
                        id="fiveStar"
                        checked={query.includes("5")}
                        onChange={handleChange}
                    />
                    5 Star
                </label>

                <label htmlFor="fourStar">
                    <input
                        type="checkbox"
                        name="4"
                        id="fourStar"
                        checked={query.includes("4")}
                        onChange={handleChange}
                    />
                    4 Star
                </label>

                <label htmlFor="threeStar">
                    <input
                        type="checkbox"
                        name="3"
                        id="threeStar"
                        checked={query.includes("3")}
                        onChange={handleChange}
                    />
                    3 Star
                </label>

                <label htmlFor="twoStar">
                    <input
                        type="checkbox"
                        name="2"
                        id="twoStar"
                        checked={query.includes("2")}
                        onChange={handleChange}
                    />
                    2 Star
                </label>

                <label htmlFor="oneStar">
                    <input
                        type="checkbox"
                        name="1"
                        id="oneStar"
                        checked={query.includes("1")}
                        onChange={handleChange}
                    />
                    1 Star
                </label>
            </form>
        </div>
    );
};

export default FilterByStarCategory;
