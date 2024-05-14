import React from 'react'
import { GoTrash } from "react-icons/go";

const tableData = [
    {
        tender_id: '12345',
        deadline_in_days: '2',
        tender_name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis impedit ex vero!",
        tender_type: "public",
        tender_category: "IT",
        CPO: "500,000 birr",
        applicants: "Sumitted",
        Actions: "..."
    },
    {
        tender_id: '54321',
        deadline_in_days: '5',
        tender_name: "Dolore magna aliqua enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
        tender_type: "public",
        tender_category: "IT",
        CPO: "750,000 birr",
        applicants: "Pending",
        Actions: "..."
    },
    {
        tender_id: '98765',
        deadline_in_days: '3',
        tender_name: "Sunt in culpa qui officia deserunt mollit anim id est laborum.",
        tender_type: "private",
        tender_category: "Construction",
        CPO: "1,000,000 birr",
        applicants: "Sumitted",
        Actions: "..."
    },
    {
        tender_id: '67890',
        deadline_in_days: '7',
        tender_name: "Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        tender_type: "public",
        tender_category: "Consulting",
        CPO: "250,000 birr",
        applicants: "Sumitted",
        Actions: "..."
    },
];

const AllTender = () => {
    return (
        <div className="table-responsive mb-5">
            <table className="table-hover">
                <thead>
                    <tr>
                        <th>Tender ID</th>
                        <th>Dealine in Days</th>
                        <th>Tender Name</th>
                        <th>Tender Type</th>
                        <th>Tender Category</th>
                        <th>CPO/Bid Bond Amount</th>
                        <th>Applicants</th>
                        <th className="text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((data) => {
                        return (
                            <tr key={data.id}>
                                <td>{data.tender_id} </td>
                                <td className='text-center flex gap-2 items-center'>
                                    <span className={`w-2 h-2 rounded-full ${data.deadline_in_days < 3 ? "bg-danger" : "bg-success"}`}></span>
                                    <span>{data.deadline_in_days}</span>
                                </td>
                                <td>{data.tender_name}</td>
                                <td>{data.tender_type}</td>
                                <td>{data.tender_category}</td>
                                <td>{data.CPO}</td>
                                <td>{data.applicants}</td>
                                <td className="text-center cursor-pointer text-2xl">{data.Actions}</td>

                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default AllTender
