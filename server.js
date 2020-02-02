"use strict";

const express = require('express');
const next    = require('next');
const proxy   = require('http-proxy-middleware');

const host   = '0.0.0.0';
const port   = process.env.PORT || 2222;
const env    = process.env.NODE_ENV || 'development';
const dev    = env === 'development';
const target = 'https://api.typeform.com/';
const app    = next({ dev });

const handle = app.getRequestHandler();

app
	.prepare()
	.then(() => {

		const server = express();

		server.use(
			'/api',
			proxy({ target: 'https://api.typeform.com/', changeOrigin: true })
		);

		server.get('*', (req, res) => handle(req, res));

		server.listen(port, host, err => {

			if (err) throw err;

			console.log(`> Ready on port ${port} [${env}]`);

		});
	})
	.catch(err => {

		console.log(err);

	});
