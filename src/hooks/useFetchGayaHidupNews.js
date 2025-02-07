import { useState, useEffect } from 'react';
import { formatDate } from '../utils/formatDate';
import { getNewsApi } from '../api/getNewsApi';

export const useGayaHidupNews = () => {
    const [gayaHidupNews, setGayaHidupNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getNews = async () => {
            try {
                const newsData = await getNewsApi("gayaHidup");
                const modifiedNews = newsData.data.posts.map((item) => ({
                    ...item,
                    formattedDate: formatDate(item.pubDate) // Format tanggal di sini
                }));
                setGayaHidupNews(modifiedNews);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getNews();
    }, []);

    return { gayaHidupNews, loading, error };
};
