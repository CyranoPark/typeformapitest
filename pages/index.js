import React, { useEffect, useState } from 'react';
import axios from 'axios';

const app = (props) => {

	const [ list, setList ] = useState([]);

	const getResponses = async () => {

		const instance = axios.create({
		  baseURL: 'api/',
		  headers: {'Authorization': 'Bearer '+ '95UywS1sqET2Ky1kWgNAk3HSiCPpy5M35muxBs7uzUw8'}
		});

		const { data } = await instance.get('/forms/VPwUg2/responses');

		console.log(data);

		setList(data);
	};

	useEffect(() => {

		getResponses();

	}, [])

	return (
		<div></div>
	);
};

export default app;