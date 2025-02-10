"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

/* eslint-disable react/no-unescaped-entities */
const Search = ({ fromList, destination, checkin, checkout }) => {
    const [searchTerm, setSearchTerm] = useState({
        destination: destination || "Bali",
        checkin: checkin,
        checkout: checkout,
    });

    const [allowSearch, setAllowSearch] = useState(true);

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleInputs = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        console.log(value);

        const state = { ...searchTerm, [name]: value };

        if (
            new Date(state.checkin).getTime() >
            new Date(state.checkout).getTime()
        ) {
            setAllowSearch(false);
        } else {
            setAllowSearch(true);
        }

        setSearchTerm(state);
    };

    const doSearch = (event) => {
        const params = new URLSearchParams(searchParams);

        params.set("destination", searchTerm?.destination);

        if (searchTerm?.checkin && searchTerm?.checkout) {
            params.set("checkin", searchTerm?.checkin);
            params.set("checkout", searchTerm?.checkout);
        }

        if (pathname.includes("hotels")) {
            replace(`${pathname}?${params.toString()}`);
        } else {
            replace(`${pathname}hotels?${params.toString()}`);
        }
    };

    return (
        <>
            <div className="lg:max-h-[250px] mt-6">
                <div id="searchParams" className={fromList && "!shadow-none"}>
                    <div>
                        <span>Destination</span>
                        <h4 className="mt-2">
                            <select
                                name="destination"
                                id="destination"
                                onChange={handleInputs}
                                defaultValue={searchTerm.destination}
                            >
                                <option value="Bali">Bali</option>
                                <option value="Bali">Cox's Bazar</option>
                                <option value="Bali">Sylhet</option>
                                <option value="Bali">Saint Martin</option>
                                <option value="Bali">Bali</option>
                            </select>
                        </h4>
                    </div>

                    <div>
                        <span>Check in</span>
                        <h4 className="mt-2">
                            <input
                                type="date"
                                name="checkin"
                                id="checkin"
                                value={searchTerm.checkin}
                                onChange={handleInputs}
                            />
                        </h4>
                    </div>

                    <div>
                        <span>Checkout</span>
                        <h4 className="mt-2">
                            <input
                                type="date"
                                name="checkout"
                                id="checkout"
                                value={searchTerm.checkout}
                                onChange={handleInputs}
                            />
                        </h4>
                    </div>
                </div>
            </div>

            <button
                disabled={!allowSearch}
                onClick={doSearch}
                className="search-btn"
            >
                🔍️ {fromList ? "Modify Search" : "Search"}
            </button>
        </>
    );
};

export default Search;
