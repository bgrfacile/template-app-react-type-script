import { useEffect, useState } from 'react';

export const useFetchData = <T>(fetchFunction: () => Promise<{ data: T }>) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchFunction()
            .then((response) => setData(response.data))
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, [fetchFunction]);

    return { data, loading, error };
};
