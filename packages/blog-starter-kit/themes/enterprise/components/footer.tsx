import Link from 'next/link';
import { Container } from './container';
import { useAppContext } from './contexts/appContext';
import { SocialLinks } from './social-links';
import Image from 'next/image';

export const Footer = () => {
	const { publication } = useAppContext();
	const PUBLICATION_LOGO = publication.preferences.logo;

	const currentYear = new Date().getFullYear();

	return (
		<footer className="border-t py-20 dark:border-neutral-800 ">
			<Container className="px-5">
				{PUBLICATION_LOGO ? (
					<div className="mb-20 flex w-full flex-row justify-center">
						<Link
							href={'/'}
							aria-label={`${publication.title} home page`}
							className="flex flex-row items-center gap-5"
						>
							<Image className="block w-40" src={PUBLICATION_LOGO} alt={publication.title} />
						</Link>
					</div>
				) : (
					<p className="mb-20 text-center text-xl font-semibold text-white md:text-4xl">
						{publication.title}
					</p>
				)}
				<div className=" w-full flex flex-col gap-10 ">
					<div className="flex flex-row gap-10 justify-around sm-425:flex-col">
						<div className="col-span-full md:col-span-2 lg:col-span-1">
							<p className="mb-2 font-semibold text-slate-600 dark:text-neutral-200">
								Stay in touch
							</p>
							<ul className="flex flex-col gap-1 text-slate-700 dark:text-neutral-300">
								<li>
									<a href="#" className="hover:underline">
										Contact us
									</a>
								</li>
								{/* <li>
									<a href="#" className="hover:underline">
										Book a demo
									</a>
								</li> */}
								<li>
									<a href="#" className="hover:underline">
										Newsletter
									</a>
								</li>
								<li>
									<a href="#" className="hover:underline">
										Slack
									</a>
								</li>
							</ul>
						</div>
						{/* <div className="col-span-full md:col-span-2 lg:col-span-1">
							<p className="mb-2 font-semibold text-slate-600 dark:text-neutral-200">Resources</p>
							<ul className="flex flex-col gap-1 text-slate-700 dark:text-neutral-300">
								<li>
									<a href="#" className="hover:underline">
										Community
									</a>
								</li>
								<li>
									<a href="#" className="hover:underline">
										Use Cases
									</a>
								</li>
								<li>
									<a href="#" className="hover:underline">
										Source Code
									</a>
								</li>
								<li>
									<a href="#" className="hover:underline">
										Blog
									</a>
								</li>
							</ul>
						</div> */}
						{/* <div className="col-span-full md:col-span-2 lg:col-span-1">
							<p className="mb-2 font-semibold text-slate-600 dark:text-neutral-200">Product</p>
							<ul className="flex flex-col gap-1 text-slate-700 dark:text-neutral-300">
								<li>
									<a href="#" className="hover:underline">
										Pricing
									</a>
								</li>
								<li>
									<a href="#" className="hover:underline">
										Documentation
									</a>
								</li>
								<li>
									<a href="#" className="hover:underline">
										Integrations
									</a>
								</li>
								<li>
									<a href="#" className="hover:underline">
										Support
									</a>
								</li>
							</ul>
						</div> */}
						<div className="col-span-1">
							<p className="mb-2 font-semibold text-slate-600 dark:text-neutral-200">Other links</p>
							<ul className="flex flex-col gap-1 text-slate-700 dark:text-neutral-300">
								<li>
									<a href="#" className="hover:underline">
										Events
									</a>
								</li>
								<li>
									<a href="#" className="hover:underline">
										Careers
									</a>
								</li>
								<li>
									<a href="#" className="hover:underline">
										Newsroom
									</a>
								</li>
								<li>
									<a href="#" className="hover:underline">
										About us
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-span-2 flex flex-col items-end gap-5 text-right text-slate-600 dark:text-neutral-300 md:text-left">
						<SocialLinks />
						<p>&copy; {currentYear} Yovaylla Awuah Inc.</p>
						<p>
							<a href="#" className="hover:underline">
								Privacy Policy
							</a>{' '}
							·{' '}
							<a href="#" className="hover:underline">
								Terms
							</a>
						</p>
					</div>
				</div>
			</Container>
		</footer>
	);
};
