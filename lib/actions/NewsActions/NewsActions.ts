'use server'
import { apiConnector, BASE_URL, News_API } from "@/lib/services/apis";


export const fetchNewsList = async () => {
    try {
        let API: string = BASE_URL + News_API.list;
        const res = await apiConnector({
            method: "GET",
            url: API,
            headers: {
                'X-RapidAPI-Key': process.env.RapidAPI_Key,
                'X-RapidAPI-Host': process.env.RapidAPI_Host
            },
        });
        return res.data;
    }
    catch (error: any) {
        return {
            success: false,
            message: "Network Error!"
        }
    }
}

export const fetchNewsListBySport = async ({
    category,
    pageNo,
}: {
    category: string,
    pageNo?: string,
}) => {
    try {
        let API: string = BASE_URL + News_API.bySport;
            const res = await apiConnector({
                method: "GET",
                url: API,
                headers: {
                    'X-RapidAPI-Key': process.env.RapidAPI_Key,
                    'X-RapidAPI-Host': process.env.RapidAPI_Host
                },
                params: {
                    category: category,
                    page: pageNo ?? '1',
                }
            });
        return res.data;
    }
    catch (error: any) {
        return {
            success: false,
            message: "Network Error!"
        }
    }
}
