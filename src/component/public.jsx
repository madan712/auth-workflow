import React from 'react';
import { Container } from 'react-bootstrap';

export default function Public() {
	return (
		<Container fluid className='bg-light text-dark p-5'>
			<h2>Public Page</h2>
		</Container>
	);
}