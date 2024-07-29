import { DNA } from 'react-loader-spinner'
import './loader.scss'

const Loader = () => {
	return (
		<div className="dna-inner-container">
			<DNA
				visible={true}
				height="50"
				width="50"
				ariaLabel="dna-loading"
				wrapperStyle={{}}
				wrapperClass="dna-inner-wrapper"
			/>
		</div>
	);
};

export default Loader;