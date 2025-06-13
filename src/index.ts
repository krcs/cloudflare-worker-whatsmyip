export default {
    async fetch(request) {
        const ip = request.headers.get('CF-Connecting-IP');

        return new Response(`${ip}`, {
            headers: {
                "content-type": "text/plain;charset=UTF-8",
                'Cache-Control': 'no-cache'
            },
        });
    },
};

