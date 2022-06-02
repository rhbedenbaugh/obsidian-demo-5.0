/**
 * @description This contains the App Navigation Bar.
 */
import { React } from '../../deps.ts';

declare global {
	namespace JSX {
		interface IntrinsicElements {
			button: any;
			div: any;
			h3: any;
			h1: any;
			h5: any;
			p: any;
			nav: any;
			ul: any;
			a: any;
			li: any;
			span: any;
			img: any;
			input: any;
			form: any;
			i: any;
		}
	}
}

export const Nav = (props: any) => {
	return (
		<nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
			<div className='container px-4 px-lg-5'>
				<a className='navbar-brand' href='#!'>
					<img
						src='../assets/imgs/obsidianLogo.png'
						alt='obsidian-logo'
						style={{ height: '75px', width: '75px' }}
					/>
				</a>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul className='navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4'>
						<li className='nav-item'>
							<a className='nav-link active' aria-current='page' href='#!'>
								Home
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='#!'>
								About
							</a>
						</li>
						<li className='nav-item dropdown'>
							<a
								className='nav-link dropdown-toggle'
								id='navbarDropdown'
								href='#'
								role='button'
								data-bs-toggle='dropdown'
								aria-expanded='false'
							>
								Shop
							</a>
							<ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
								<li>
									<a className='dropdown-item' href='#!'>
										All Products
									</a>
								</li>
								<li>
									<hr className='dropdown-divider' />
								</li>
								<li>
									<a className='dropdown-item' href='#!'>
										Popular Items
									</a>
								</li>
								<li>
									<a className='dropdown-item' href='#!'>
										New Arrivals
									</a>
								</li>
							</ul>
						</li>
					</ul>
					<form className='d-flex'>
						<button className='btn btn-outline-dark' type='submit'>
							<i className='bi-cart-fill me-1'></i>
							Cart
							<span className='badge bg-dark text-white ms-1 rounded-pill'>
								0
							</span>
						</button>
					</form>
				</div>
			</div>
		</nav>
	);
};
