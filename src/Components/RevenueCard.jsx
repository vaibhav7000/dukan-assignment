import { ChevronRightIcon } from '@heroicons/react/16/solid'
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

export default function RevenueCard({
    title, amount,orderCount, nextDate, defaultColor, iconColor
}) {
    return (
        <div className={`w-full ${defaultColor}  shadow-sm flex gap-4 flex-col p-4 md:p-8`}>
            <div className="flex flex-row text-gray-700 items-center gap-2">
                {title}
                <QuestionMarkCircleIcon className='size-4'/>
            </div>

            <div className="flex flex-row justify-between">
                <div className="font-bold text-3xl flex flex-row justify-between">
                    {amount}
                </div>
                { orderCount && 
                    <div className={`flex flex-row underline ${iconColor} cursor-pointer items-center`}>
                        {orderCount} orders
                        <ChevronRightIcon className={`size-4`}/>
                    </div>
                }
            </div>

            { nextDate &&
                <div className="flex flex-row justify-between flex-wrap">
                    <div>
                        {nextDate.title}
                    </div>

                    <div className="">
                        {nextDate.date}
                    </div>
                </div>
            }
        </div>
    )
}