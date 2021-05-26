import Head from 'next/head';
import React from 'react';
// @ts-ignore
import styles from '../../styles/Shop.module.css';

const Shop = () => {
	return (
		<div className={styles.shop}>
			<Head>
        <title>PayByBit - Pay Small Small</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
			<main>
				<h1>Shop now</h1>
			</main>
		</div>
	)
}

Shop.layout = "default";

export default Shop
