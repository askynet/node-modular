const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const services = require('../services.json');
const router = express.Router();

// Auto-generate proxy for each service
Object.keys(services).forEach(serviceName => {
    const target = services[serviceName];
    router.use(
        `/${serviceName}`,
        createProxyMiddleware({
            target,
            changeOrigin: true,
            pathRewrite: {
                [`^/api/${serviceName}`]: ''
            },
        })
    );
});

module.exports = router;
