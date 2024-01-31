import connectDB from "@/db";
import profit from "@/models/profit";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        await connectDB();


        const rawData = await profit.find({});

        const body = await req.json();

        const { timeline } = body;

        let downsampledData;

        if (timeline === "monthly") {
            downsampledData = calculateMonthlyAverage(rawData);
        } else if (timeline === "daily") {
            downsampledData = calculateDailyAverage(rawData);
        }

        return NextResponse.json({ "data": downsampledData });
    } catch (error) {
        return NextResponse.json(error);
    }
}

function calculateMonthlyAverage(data) {
    const monthlyData = {};

    data.forEach(entry => {
        const date = new Date(entry.Timestamp);
        if (!isNaN(date.getTime())) {
            const monthAndYear = `${date.getMonth() + 1}-${date.getFullYear()}`;

            if (!monthlyData[monthAndYear]) {
                monthlyData[monthAndYear] = { sum: 0, count: 0 };
            }

            monthlyData[monthAndYear].sum += entry.Profit_percentage;
            monthlyData[monthAndYear].count += 1;
        }
    });

    const downsampled = Object.keys(monthlyData).map(monthAndYear => {
        const fullDate = `01-${monthAndYear}`;
        const dateWithOnlyDate = new Date(fullDate);
        const dateInMilisecond = dateWithOnlyDate.getTime();

        const avgProfit = (monthlyData[monthAndYear].sum / monthlyData[monthAndYear].count).toFixed(3);
        return {
            x: Number(dateInMilisecond),
            y: parseFloat(avgProfit)
        };
    });

    return downsampled;
}


function calculateDailyAverage(data) {
    const dailyData = {};

    data.forEach(entry => {
        const date = new Date(entry.Timestamp);

        if (!isNaN(date.getTime())) {
            const dateInMilisecond = getDateInMiliSecond(date);

            if (!dailyData[dateInMilisecond]) {
                dailyData[dateInMilisecond] = { sum: 0, count: 0 };
            }

            dailyData[dateInMilisecond].sum += entry.Profit_percentage;
            dailyData[dateInMilisecond].count += 1;
        }

    });

    const downsampled = Object.keys(dailyData).map(dateInMilisecond => {
        const avgProfit = (dailyData[dateInMilisecond].sum / dailyData[dateInMilisecond].count).toFixed(3);
        return {
            x: Number(dateInMilisecond),
            y: parseFloat(avgProfit)
        };
    });

    return downsampled;
}

function getDateInMiliSecond(date) {
    const datePart = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
    const dateWithOnlyDate = new Date(datePart);
    const dateInMilisecond = dateWithOnlyDate.getTime();
    return dateInMilisecond;
}