import { useState, useEffect } from 'react';
import { formatDate } from '../utils/formatDate';
import { getNewsApi } from '../api/getNewsApi';

export const useFetchInternasionalNews = () => {
    const [internasionalNews, setInternasionalNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getNews = async () => {
            try {
                const newsData = await getNewsApi("internasional");
                const modifiedNews = newsData.data.posts.map((item) => ({
                    ...item,
                    formattedDate: formatDate(item.pubDate) // Format tanggal di sini
                }));
                setInternasionalNews(modifiedNews);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getNews();
    }, []);

    return { internasionalNews, loading, error };
};
