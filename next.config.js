module.exports = {
    reactStrictMode: true,
    async redirects() {
        return [
            {
                source: '/twitter',
                destination: 'https://twitter.com/Dev_Moath',
                permanent: true,
            },
            {
                source: '/github',
                destination: 'https://github.com/DevMoath',
                permanent: true,
            },
            {
                source: '/linkedin',
                destination: 'https://www.linkedin.com/in/moath-alhajri/',
                permanent: true,
            },
            {
                source: '/youtube',
                destination: 'https://www.youtube.com/channel/UCm-qdl6K8w6hvxFwgO7u5qw',
                permanent: true,
            },
        ];
    },
};
