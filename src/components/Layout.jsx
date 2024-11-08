import styles from './Layout.module.css';
import Header from './Header';
import Main from './Main';

function Layout() {
	return (
		<div className={styles.layout}>
			<Header />
			<Main />
		</div>
	);
}

export default Layout;
