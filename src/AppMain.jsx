import RevenueCard from "./Components/RevenueCard";

export default function AppMain() {
    return (
        <RevenueCards/>
    )
}


function RevenueCards() {
    const date = new Date();

    return (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">
            <RevenueCard title={"Amount Pending"} amount={"68923"} orderCount={"12"} defaultColor={"bg-blue-500"} iconColor={"text-white"} nextDate={{
                title: "Next Payment Date",
                date: `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
            }}/>
            
            <RevenueCard title={"Amount Pending"} amount={"748545"} orderCount={"12"} defaultColor={"bg-white"} iconColor={"text-blue-500"}/>

            <RevenueCard title={"Amount Pending"} amount={"8974584"} defaultColor={"bg-white"} iconColor={"text-blue-500"}/>
        </div>
    )
}