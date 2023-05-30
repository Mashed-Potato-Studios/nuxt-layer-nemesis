const useFormatDate = () => {
    const formatDate = (date: Date) => {
        // const day = date.getDate();
        // const month = date.getMonth() + 1;
        // const year = date.getFullYear();

        return new Date(date).toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        })

    };


    return { formatDate };
}